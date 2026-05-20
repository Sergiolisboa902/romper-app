require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function inspectSchema() {
  console.log('🔍 Inspecionando tabelas e colunas disponíveis...');

  const tables = ['journeys', 'tracks', 'themes', 'lessons', 'user_stats', 'progresso_licoes'];

  for (const table of tables) {
    console.log(`\n--- Tabela: ${table} ---`);
    const { data, error } = await supabase.from(table).select('*').limit(1);
    
    if (error) {
      console.error(`❌ Erro ao ler ${table}:`, error.message);
    } else if (data && data.length > 0) {
      console.log('✅ Colunas:', Object.keys(data[0]));
    } else {
      console.log('⚠️ Tabela vazia ou sem dados para inferir colunas.');
      // Tentar forçar erro de coluna inexistente para ver o que o PostgREST sugere
      const { error: sugError } = await supabase.from(table).select('non_existent_column').limit(1);
      if (sugError) {
          console.log('Sugestão de erro (pode conter nomes de colunas):', sugError.message);
      }
    }
  }
}

inspectSchema();
