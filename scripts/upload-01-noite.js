require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadDevocional(devocional) {
  const { data, error } = await supabase
    .from('devocionais')
    .insert([devocional])
    .select();

  if (error) {
    console.error(`❌ Erro no upload (${devocional.periodo}):`, error.message);
  } else {
    console.log(`✅ Devocional (${devocional.periodo}) salvo! ID: ${data[0].id}`);
  }
}

const dataNoite = {
  data: "2026-01-01",
  periodo: "Noite",
  versao: "original",
  versiculo: {
    texto: "(…) em ti nos regozijaremos e nos alegraremos (…)",
    referencia: "Ct 1:4"
  },
  topicos: [
    {
      ordem: 1,
      icone: "🎵",
      titulo: "Melodias de Júbilo",
      conteudo: "Teremos o maior prazer e a maior alegria em Ti. Não abriremos os portões do novo ano para as dolorosas notas da cítara, mas para as doces melodias da harpa de júbilo e para os altissonantes címbalos da alegria.",
      tags: ["alegria", "louvor"]
    },
    {
      ordem: 2,
      icone: "🚩",
      titulo: "Estandartes da Confiança",
      conteudo: "Nós, os que fomos chamados fiéis e escolhidos, lançaremos fora nossos sofrimentos e levantaremos os estandartes da confiança em nome do Senhor. Deixe que os outros lamentem seus problemas, pois nós glorificaremos o Senhor.",
      tags: ["confiança", "vitória"]
    },
    {
      ordem: 3,
      icone: "👑",
      titulo: "Coroa do Coração",
      conteudo: "Estamos certos e resolvidos sobre isto: Jesus terá sempre a coroa do nosso coração. Não desonraremos nosso Noivo com lamentações, pois somos menestréis destinados aos céus.",
      tags: ["adoração", "compromisso"]
    },
    {
      ordem: 4,
      icone: "✨",
      titulo: "Alegria em Ti",
      conteudo: "Que céus estão depositados em Jesus! Que rios de infinita felicidade têm sua fonte nEle! Que o Senhor nos favoreça com um sentimento de Sua preciosidade do primeiro ao último dia do ano.",
      tags: ["felicidade", "preciosidade"]
    }
  ],
  promessa: "Jesus terá sempre a coroa do nosso coração... pois Ele é a presente porção do Seu povo.",
  meditacao: "Vamos começar o mês de janeiro nos alegrando no Senhor, e encerrar o mês de dezembro com regozijo em Jesus."
};

uploadDevocional(dataNoite);
