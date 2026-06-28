require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function processarDevocionais() {
  console.log('🚀 Iniciando processamento dos devocionais para a versão Fiel...');
  
  // 1. Buscar todos os devocionais da versão original
  const { data: devocionais, error } = await supabase
    .from('devocionais')
    .select('id, data, periodo, topicos')
    .eq('versao', 'original');

  if (error) {
    console.error('❌ Erro ao buscar devocionais:', error.message);
    return;
  }

  console.log(`📋 Encontrados ${devocionais.length} registros para processar.`);

  let atualizados = 0;
  let erros = 0;

  for (const dev of devocionais) {
    if (!dev.topicos || !Array.isArray(dev.topicos)) {
      console.log(`⚠️ Registro ${dev.data} (${dev.periodo}) não possui tópicos válidos. Pulando.`);
      continue;
    }

    try {
      // 2. Ordenar tópicos por ordem para garantir a sequência correta
      const topicosOrdenados = [...dev.topicos].sort((a, b) => a.ordem - b.ordem);
      
      // 3. Juntar o conteúdo de cada tópico com quebra de parágrafo duplo
      const textoFiel = topicosOrdenados
        .map(t => t.conteudo.trim())
        .filter(c => c !== '')
        .join('\n\n');

      if (!textoFiel) {
        console.log(`⚠️ Registro ${dev.data} (${dev.periodo}) gerou texto vazio. Pulando.`);
        continue;
      }

      // 4. Fazer update da coluna texto_fiel no Supabase
      const { error: updateError } = await supabase
        .from('devocionais')
        .update({ texto_fiel: textoFiel })
        .eq('id', dev.id);

      if (updateError) {
        console.error(`❌ Erro no update de ${dev.data} (${dev.periodo}):`, updateError.message);
        erros++;
      } else {
        console.log(`✅ ${dev.data} (${dev.periodo}) atualizado com o texto fiel.`);
        atualizados++;
      }
    } catch (e) {
      console.error(`❌ Falha ao processar ${dev.data} (${dev.periodo}):`, e.message);
      erros++;
    }
  }

  console.log('\n======================================');
  console.log(`🎉 Processamento finalizado!`);
  console.log(`✅ Sucesso: ${atualizados} atualizados.`);
  console.log(`❌ Falhas: ${erros} erros.`);
  console.log('======================================');
}

processarDevocionais();
