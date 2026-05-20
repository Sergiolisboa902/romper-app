require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function listTables() {
  console.log('📋 Listando todas as tabelas acessíveis via RPC (se disponível) ou erro...');
  
  // Tentar um RPC comum do Supabase se existir
  const { data, error } = await supabase.rpc('get_tables');
  if (error) {
      console.log('RPC get_tables falhou (esperado se não configurado).');
  } else {
      console.log('Tabelas via RPC:', data);
  }

  // Tentar inferir via erro de consulta
  const { error: err } = await supabase.from('non_existent_table').select('*');
  console.log('Dica de erro (tabelas próximas?):', err.message);
}

listTables();
