const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
const BUCKET_NAME = 'characters';
const CHARACTERS_DIR = path.join(__dirname, '../public/characters');

async function uploadFiles() {
    console.log(`🚀 Iniciando upload para o bucket: ${BUCKET_NAME}...`);

    if (!fs.existsSync(CHARACTERS_DIR)) {
        console.error('❌ Pasta public/characters não encontrada.');
        return;
    }

    const characters = fs.readdirSync(CHARACTERS_DIR);

    for (const charId of characters) {
        const charPath = path.join(CHARACTERS_DIR, charId);
        if (!fs.statSync(charPath).isDirectory()) continue;

        const files = fs.readdirSync(charPath).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.svg'));
        
        if (files.length === 0) {
            console.log(`ℹ️  Nenhuma imagem encontrada para: ${charId}`);
            continue;
        }

        console.log(`📁 Processando personagem: ${charId} (${files.length} arquivos)`);

        for (const fileName of files) {
            const filePath = path.join(charPath, fileName);
            const fileBuffer = fs.readFileSync(filePath);
            const storagePath = `${charId}/${fileName}`;

            const { data, error } = await supabase.storage
                .from(BUCKET_NAME)
                .upload(storagePath, fileBuffer, {
                    contentType: fileName.endsWith('.svg') ? 'image/svg+xml' : 'image/png',
                    upsert: true
                });

            if (error) {
                console.error(`  ❌ Erro ao subir ${fileName}:`, error.message);
            } else {
                console.log(`  ✅ Upload concluído: ${storagePath}`);
            }
        }
    }

    console.log('✨ Processo de upload finalizado!');
}

uploadFiles();
