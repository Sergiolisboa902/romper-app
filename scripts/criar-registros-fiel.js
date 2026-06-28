require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function main() {
  console.log('🚀 Criando registros separados com versao = "fiel" no Supabase...\n');

  // 1. Busca todos os originais que já têm texto_fiel preenchido
  const { data: originais, error } = await supabase
    .from('devocionais')
    .select('data, periodo, versiculo, promessa, meditacao, texto_fiel')
    .eq('versao', 'original')
    .not('texto_fiel', 'is', null);

  if (error) {
    console.error('❌ Erro ao buscar registros:', error.message);
    return;
  }

  console.log(`📋 ${originais.length} registros originais com texto_fiel encontrados.\n`);

  // 2. Verifica quais já existem como 'fiel' para não duplicar
  const { data: existentes } = await supabase
    .from('devocionais')
    .select('data, periodo')
    .eq('versao', 'fiel');

  const jaExistem = new Set(
    (existentes || []).map(r => `${r.data}_${r.periodo}`)
  );

  const novos = originais.filter(r => !jaExistem.has(`${r.data}_${r.periodo}`));
  console.log(`🔍 ${jaExistem.size} já existem como "fiel". ${novos.length} serão criados.\n`);

  if (novos.length === 0) {
    console.log('✅ Nenhum registro novo para inserir.');
    return;
  }

  // 3. Monta os novos registros
  const registros = novos.map(r => ({
    data:        r.data,
    periodo:     r.periodo,
    versao:      'fiel',
    versiculo:   r.versiculo,
    promessa:    r.promessa,
    meditacao:   r.meditacao,
    texto_fiel:  r.texto_fiel,
    topicos:     []   // sem tópicos na versão fiel
  }));

  // 4. Insere em lotes de 20 para segurança
  const loteSize = 20;
  let inseridos = 0;
  let erros = 0;

  for (let i = 0; i < registros.length; i += loteSize) {
    const lote = registros.slice(i, i + loteSize);
    const { error: insertError } = await supabase
      .from('devocionais')
      .insert(lote);

    if (insertError) {
      console.error(`❌ Erro no lote ${Math.floor(i / loteSize) + 1}:`, insertError.message);
      erros += lote.length;
    } else {
      lote.forEach(r => console.log(`✅ ${r.data} (${r.periodo})`));
      inseridos += lote.length;
    }
  }

  console.log('\n======================================');
  console.log(`🎉 Concluído!`);
  console.log(`✅ Registros "fiel" criados: ${inseridos}`);
  console.log(`❌ Erros: ${erros}`);
  console.log('======================================');
}

main();
