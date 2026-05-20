const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { createClient } = require('@supabase/supabase-js');

require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const CONTENT_PATH = path.join(__dirname, '../content/jornadas');
const CHARACTERS_PATH = path.join(__dirname, '../content/personagens');

async function sync() {
    console.log('🚀 Iniciando sincronização EVOLUÍDA (com Personagens & Templates)...');

    // 1. Processar Personagens primeiro (Base de dados para as lições)
    if (fs.existsSync(CHARACTERS_PATH)) {
        const charFiles = fs.readdirSync(CHARACTERS_PATH).filter(f => f.endsWith('.md'));
        for (const file of charFiles) {
            const data = parseMarkdown(path.join(CHARACTERS_PATH, file));
            await upsert('characters', data.meta);
            console.log(`👤 Personagem: ${data.meta.nome || data.meta.id}`);
        }
    }

    const allFiles = getAllFiles(CONTENT_PATH).filter(f => f.endsWith('.md'));
    
    const jornadas = [];
    const trilhas = [];
    const temas = [];
    const licoes = [];

    for (const filePath of allFiles) {
        const fileName = path.basename(filePath);
        const parts = fileName.split('-');
        if (isNaN(parts[0])) continue;

        const [jj, tt, hh, ll] = parts;
        if (ll !== '00') licoes.push({ filePath, jj, tt, hh, ll });
        else if (hh !== '00') temas.push({ filePath, jj, tt, hh, ll });
        else if (tt !== '00') trilhas.push({ filePath, jj, tt, hh, ll });
        else jornadas.push({ filePath, jj, tt, hh, ll });
    }

    const sortByCode = (a, b) => path.basename(a.filePath).localeCompare(path.basename(b.filePath));
    jornadas.sort(sortByCode); trilhas.sort(sortByCode); temas.sort(sortByCode); licoes.sort(sortByCode);

    for (const item of jornadas) {
        const data = parseMarkdown(item.filePath);
        await upsert('journeys', { ...data.meta, ordem: parseInt(item.jj) });
        console.log(`✅ Jornada: ${data.meta.titulo}`);
    }

    for (const item of trilhas) {
        const data = parseMarkdown(item.filePath);
        await upsert('tracks', { ...data.meta, ordem: parseInt(item.tt) });
        console.log(`  🔹 Trilha: ${data.meta.titulo}`);
    }

    for (const item of temas) {
        const data = parseMarkdown(item.filePath);
        await upsert('themes', { ...data.meta, ordem: parseInt(item.hh) });
        console.log(`    🔸 Tema: ${data.meta.titulo}`);
    }

    for (const item of licoes) {
        const data = parseMarkdown(item.filePath);
        const lessonContent = parseLessonSteps(data.body);
        
        if (!data.meta.id) {
            const fileName = path.basename(item.filePath, '.md');
            const idMatch = fileName.match(/^\d+-\d+-\d+-\d+-(.*)$/);
            data.meta.id = idMatch ? idMatch[1] : fileName;
        }

        const payload = { ...data.meta, content: lessonContent, ordem: parseInt(item.ll) };
        await upsert('lessons', payload);
        console.log(`      📖 Lição: ${data.meta.titulo} [${lessonContent.length} passos]`);
    }

    console.log('✨ Sincronização concluída!');
}

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function(file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== '.obsidian') arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else arrayOfFiles.push(fullPath);
    });
    return arrayOfFiles;
}

function parseMarkdown(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const parts = content.split('---');
    const meta = yaml.load(parts[1]);
    const body = parts.slice(2).join('---').trim();
    return { meta, body };
}

function parseLessonSteps(body) {
    const steps = [];
    if (!body) return steps;

    // Split por tags [TIPO:SUBTIPO] - suportando caracteres acentuados
    const rawBlocks = body.split(/(\[[A-ZÀ-Ú]+:[A-ZÀ-Ú_]+\])/g);
    
    for (let i = 1; i < rawBlocks.length; i += 2) {
        const tag = rawBlocks[i];
        let rawContent = rawBlocks[i + 1] ? rawBlocks[i + 1].trim() : "";
        const [type, subtype] = tag.replace(/[\[\]]/g, '').split(':');
        
        let step = { 
            type: type.toLowerCase(), 
            subtype: subtype.toLowerCase(),
            content: {} 
        };

        const lines = rawContent.split('\n');
        const contentLines = [];

        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('TEMPLATE:')) {
                step.template = trimmed.replace('TEMPLATE:', '').trim();
            } else if (trimmed.startsWith('MOOD:')) {
                step.mood = trimmed.replace('MOOD:', '').trim();
            } else if (trimmed.startsWith('CHARACTER:')) {
                step.character_id = trimmed.replace('CHARACTER:', '').trim();
            } else if (trimmed !== "") { 
                contentLines.push(line);
            }
        });

        const actualContent = contentLines.join('\n').trim();

        if (step.subtype === 'versiculo' || step.subtype === 'quote') {
            const vLines = actualContent.split('\n');
            vLines.forEach(l => {
                if (l.startsWith('TEXTO:')) step.content.text = l.replace('TEXTO:', '').trim();
                if (l.startsWith('REFERENCIA:') || l.startsWith('REFERÊNCIA:')) step.content.reference = l.replace(/REFERÊNCIA:|REFERENCIA:/, '').trim();
            });
        } else if (step.subtype === 'multipla_escolha') {
            const mLines = actualContent.split('\n');
            step.content.question = mLines[0].replace('Pergunta:', '').trim();
            step.content.options = [];
            mLines.slice(1).forEach((line) => {
                const opt = line.trim().replace(/^- /, '');
                if (opt.includes('(CORRETA)')) {
                    step.content.correct_index = step.content.options.length;
                    step.content.options.push(opt.replace('(CORRETA)', '').trim());
                } else if (opt) {
                    step.content.options.push(opt);
                }
            });
        } else {
            step.content.text = actualContent;
        }

        steps.push(step);
    }
    return steps;
}

async function upsert(table, data) {
    const mapping = { 
        'jornada': 'journey_id', 
        'trilha': 'track_id', 
        'tema': table === 'themes' ? 'id' : 'theme_id', 
        'xp': 'xp_reward',
        'nome': 'name',
        'handle': 'social_handle',
        'avatar': 'avatar_url',
        'capa': 'cover_url',
        'versiculo': 'favorite_verse',
        'aparencia': 'appearance',
        'moods': 'available_moods',
        'storage': 'storage_path',
        'verificado': 'is_verified'
    };
    
    const payload = {};
    const schema = {
        'journeys': ['id', 'titulo', 'descricao', 'ordem', 'status', 'label_trilha', 'label_tema', 'label_licao'],
        'tracks': ['id', 'journey_id', 'titulo', 'ordem', 'secao_visual'],
        'themes': ['id', 'track_id', 'titulo', 'ordem', 'divisao_visual', 'character_id'],
        'lessons': ['id', 'theme_id', 'titulo', 'ordem', 'content', 'xp_reward'],
        'characters': ['id', 'name', 'social_handle', 'avatar_url', 'cover_url', 'bio', 'appearance', 'favorite_verse', 'attributes', 'storage_path', 'available_moods', 'is_verified']
    };

    for (const key in data) {
        const dbKey = mapping[key] || key;
        if (schema[table] && schema[table].includes(dbKey)) {
            payload[dbKey] = data[key];
        }
    }

    const { error } = await supabase.from(table).upsert(payload);
    if (error) {
        console.warn(`⚠️ Aviso em ${table}: ${error.message}`);
        // Se a tabela não existir, podemos querer criar no futuro, por enquanto apenas avisamos
        if (table === 'characters' && error.code === 'PGRST116') return; 
        process.exit(1);
    }
}

sync();
