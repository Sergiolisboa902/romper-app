const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = "https://rppctxuvncoqfgjbfczo.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcGN0eHV2bmNvcWZnamJmY3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4NjU3ODQsImV4cCI6MjA5MTQ0MTc4NH0.OAzfJCLB7x3VpmRYBis4bvbseCDrfcVtZ6ZuBAjqIr4";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function cleanup() {
    console.log('🔍 Buscando lições no banco...');
    const { data: dbLessons, error: fetchError } = await supabase.from('lessons').select('id, theme_id');
    
    if (fetchError) {
        console.error('Erro ao buscar lições:', fetchError.message);
        return;
    }

    console.log(`📊 Total no banco: ${dbLessons.length}`);

    // Mapear arquivos locais para IDs gerados
    const contentPath = path.join(__dirname, '../content/jornadas');
    const localIds = new Set();

    function scan(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                if (file !== '.obsidian') scan(fullPath);
            } else if (file.endsWith('.md')) {
                // Lógica de ID do sync-obsidian.js
                const fileName = path.basename(file, '.md');
                const parts = fileName.split('-');
                if (!isNaN(parts[0])) {
                    const ll = parts[3];
                    if (ll !== '00') {
                        const idMatch = fileName.match(/^\d+-\d+-\d+-\d+-(.*)$/);
                        const id = idMatch ? idMatch[1] : fileName;
                        localIds.add(id);
                    }
                }
            }
        });
    }

    scan(contentPath);
    console.log(`📁 Total local: ${localIds.size}`);

    const toDelete = dbLessons.filter(l => !localIds.has(l.id)).map(l => l.id);

    if (toDelete.length > 0) {
        console.log(`🗑️ Removendo ${toDelete.length} lições órfãs:`, toDelete);
        const { error: delError } = await supabase.from('lessons').delete().in('id', toDelete);
        if (delError) console.error('Erro ao deletar:', delError.message);
        else console.log('✅ Limpeza concluída!');
    } else {
        console.log('✨ Nenhuma lição órfã encontrada.');
    }
}

cleanup();
