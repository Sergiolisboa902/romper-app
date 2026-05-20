require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function diagnose() {
  console.log('🧪 Iniciando diagnóstico de banco de dados...');
  
  // 1. Testar conexão básica
  const { data: journeys, error: jError } = await supabase.from('journeys').select('id, titulo').limit(1);
  if (jError) {
    console.error('❌ Erro ao conectar/ler journeys:', jError.message);
  } else {
    console.log('✅ Conexão com journeys OK. Exemplo:', journeys[0]?.titulo);
  }

  // 2. Testar leitura de user_stats
  const { data: stats, error: sError } = await supabase
    .from('user_stats')
    .select('*')
    .eq('user_id', 'user_teste_01')
    .maybeSingle();

  if (sError) {
    console.error('❌ Erro ao ler user_stats:', sError.message);
  } else {
    console.log('✅ Leitura de user_stats OK. Colunas encontradas:', Object.keys(stats || {}));
    console.log('Dados atuais:', stats);
  }

  // 3. Testar UPSERT em user_stats com current_journey_id
  console.log('🔄 Testando UPSERT com current_journey_id...');
  const { data: upsertData, error: uError } = await supabase
    .from('user_stats')
    .upsert({ 
      user_id: 'user_teste_01', 
      current_journey_id: 'panorama-biblico' // ID de exemplo
    }, { onConflict: 'user_id' })
    .select();

  if (uError) {
    console.error('❌ Erro no UPSERT de user_stats:', uError.message);
    console.error('Código do erro:', uError.code);
  } else {
    console.log('✅ UPSERT de user_stats OK:', upsertData);
  }
}

diagnose();
