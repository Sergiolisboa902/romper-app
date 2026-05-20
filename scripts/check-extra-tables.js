require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkTables() {
  const potentials = ['progresso_jornadas', 'user_journeys', 'enrollments', 'matriculas', 'jornadas_ativas'];
  for (const table of potentials) {
    const { error } = await supabase.from(table).select('*').limit(1);
    if (!error) {
        console.log(`✅ Tabela encontrada: ${table}`);
        const { data } = await supabase.from(table).select('*').limit(1);
        if (data.length > 0) console.log(`Colunas em ${table}:`, Object.keys(data[0]));
    } else {
        console.log(`❌ Tabela ${table} não encontrada: ${error.message}`);
    }
  }
}

checkTables();
