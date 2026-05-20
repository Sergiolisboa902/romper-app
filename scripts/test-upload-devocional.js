require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const devocional = {
  data: "2026-01-01",
  periodo: "Manhã",
  versiculo: {
    texto: "(…) no mesmo ano comeram dos frutos da terra de Canaã",
    referencia: "Js 5:12"
  },
  topicos: [
    {
      ordem: 1,
      icone: "⛺",
      titulo: "O Fim da Peregrinação",
      conteudo: "A cansativa peregrinação de Israel chegava ao fim e o descanso prometido fora atingido. Sem mais tendas móveis, serpentes abrasadoras, amalequitas ferozes e desertos vociferantes. Eles haviam chegado na terra que mana leite e mel, e comeriam dos frutos daquela terra.",
      tags: ["peregrinação", "descanso"]
    },
    {
      ordem: 2,
      icone: "💎",
      titulo: "Herança e Alegria",
      conteudo: "Talvez este ano, amado leitor cristão, esse possa ser o seu caso ou o meu. Consolação eterna é a nossa herança e, se a fé está em diligente atividade, ela lhe proporcionará uma perfeita alegria. Estar com Jesus no descanso que resta ao povo de Deus (Hb 4:9) é certamente uma esperança animadora.",
      tags: ["herança", "alegria"]
    },
    {
      ordem: 3,
      icone: "⚔️",
      titulo: "Vencendo a Incredulidade",
      conteudo: "Esperar pela glória futura é uma dupla bem-aventurança. A incredulidade que fez com quase todos tremessem no Jordão ainda se revolve entre nós e a graciosa terra, mas descansemos na certeza que já experimentamos mais males do que a pior morte poderia nos causar. Vamos banir todos os pensamentos temerosos e nos regozijar.",
      tags: ["fé", "coragem"]
    },
    {
      ordem: 4,
      icone: "🌤️",
      titulo: "Para Sempre com o Senhor",
      conteudo: "Uma parte dos servos de Deus irá se demorar nesta terra para servir ao Senhor. Se essa for a nossa sorte, não há motivos para que aquela mensagem de ano novo (Js 5:12) não continue sendo verdadeira a nós. O Espírito Santo é o penhor da nossa herança (Ef 1:14). Iremos, este ano, recolher frutos celestes em solo terrestre.",
      tags: ["serviço", "esperança"]
    }
  ],
  promessa: "Iremos, este ano, recolher frutos celestes em solo terrestre, onde a fé e a esperança fazem com que os lugares áridos sejam como o jardim do Senhor.",
  meditacao: "Para sempre com o Senhor! — Vamos nos alimentar em Jesus pela graça, e assim comeremos dos frutos da terra de Canaã este ano!",
  versao: "original"
};

async function uploadDevocional() {
  console.log('🚀 Fazendo upload do devocional para o Supabase...');
  
  const { data, error } = await supabase
    .from('devocionais')
    .insert([devocional])
    .select();

  if (error) {
    console.error('❌ Erro no upload:', error.message);
    if (error.code === '42P01') {
        console.log('👉 A tabela não existe. Certifique-se de executar o SQL em scripts/sql/create_devocionais.sql');
    }
  } else {
    console.log('✅ Devocional salvo com sucesso no Supabase!');
    console.log('ID:', data[0].id);
  }
}

uploadDevocional();
