require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function findProgressTables() {
  // Como não posso listar tabelas diretamente, vou tentar nomes comuns baseados no que vi
  const guesses = [
    'user_stats', 
    'progresso_licoes', 
    'progresso_jornadas', 
    'progresso_trilhas', 
    'usuarios_jornadas',
    'jornadas_usuarios',
    'profiles',
    'usuarios'
  ];

  for (const table of guesses) {
    const { data, error } = await supabase.from(table).select('*').limit(1);
    if (!error) {
      console.log(`✅ Tabela: ${table} | Colunas: ${data.length > 0 ? Object.keys(data[0]) : 'Vazia'}`);
      if (data.length === 0) {
          // Forçar erro de coluna para ver o que existe
          const { error: sugErr } = await supabase.from(table).select('probe').limit(1);
          console.log(`   Dica de colunas para ${table}:`, sugErr.message);
      }
    } else {
      // console.log(`❌ ${table}: ${error.message}`);
    }
  }
}

findProgressTables();
