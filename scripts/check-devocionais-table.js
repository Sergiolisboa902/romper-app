require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAndCreateTable() {
  console.log('🛠 Verificando tabela devocionais...');

  // Tentar selecionar da tabela para ver se existe
  const { error } = await supabase.from('devocionais').select('id').limit(1);

  if (error && error.code === '42P01') {
    console.log('⚠️ Tabela devocionais não existe. Por favor, execute o SQL abaixo no dashboard do Supabase:');
    console.log(`
create table devocionais (
  id uuid primary key default gen_random_uuid(),
  data date not null,
  periodo text not null,
  versiculo jsonb not null,
  topicos jsonb not null,
  promessa text,
  meditacao text,
  versao text default 'original',
  criado_em timestamptz default now()
);

-- Adicionar índice para busca rápida por data e período
create index idx_devocionais_data_periodo on devocionais (data, periodo);
    `);
  } else if (error) {
    console.error('❌ Erro ao verificar tabela:', error.message);
  } else {
    console.log('✅ Tabela devocionais já existe.');
  }
}

checkAndCreateTable();
