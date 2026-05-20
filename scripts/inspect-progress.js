require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function inspectProgressTable() {
  console.log('🔍 Inspecionando tabela progresso_licoes...');
  const { data, error } = await supabase.from('progresso_licoes').select('*').limit(1);
  
  if (error) {
    console.error('❌ Erro ao ler progresso_licoes:', error.message);
  } else {
    console.log('✅ Colunas em progresso_licoes:', Object.keys(data[0] || {}));
    console.log('Dados exemplo:', data[0]);
  }

  // Testar inserção básica
  console.log('🔄 Testando inserção de sessão de teste...');
  const { data: insData, error: insError } = await supabase
    .from('progresso_licoes')
    .insert({
      user_id: 'user_teste_01',
      licao_id: '01-01-01-01-intro-genesis',
      total_blocos: 5,
      status: 'em_progresso',
      bloco_atual: 0
    })
    .select();

  if (insError) {
    console.error('❌ Erro ao inserir progresso:', insError.message);
    console.error('Código:', insError.code);
  } else {
    console.log('✅ Inserção OK:', insData);
  }
}

inspectProgressTable();
