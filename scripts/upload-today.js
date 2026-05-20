require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const devocionais = [
  {
    data: "2026-05-19",
    periodo: "Manhã",
    versao: "original",
    versiculo: { texto: "Vi os servos a cavalo, e os príncipes andando sobre a terra como servos", referencia: "Ec 10:7" },
    topicos: [
      { ordem: 1, icone: "🏇", titulo: "Inversão de Papéis", conteudo: "Presunçosos com frequência usurpam os lugares mais altos enquanto o verdadeiramente grande lamenta na obscuridade. Esse é um mistério na providência cuja solução um dia alegrará o coração dos justos.", tags: ["providência", "justiça"] },
      { ordem: 2, icone: "🚶", titulo: "O Exemplo do Mestre", conteudo: "Quando nosso Senhor esteve na Terra, embora fosse o Príncipe dos reis, Ele andou o caminho do cansaço e dos serviços, o Servo dos servos.", tags: ["jesus", "serviço"] },
      { ordem: 3, icone: "🌍", titulo: "O Mundo de Cabeça para Baixo", conteudo: "Veja como os filhos servis de Satanás reinam na Terra! Em que arrogância eles cavalgam! Hamã está no pátio interior, enquanto Mardoqueu senta no portão.", tags: ["mundo", "soberba"] },
      { ordem: 4, icone: "⏳", titulo: "A Justiça do Tempo", conteudo: "Quando a roda gira, aqueles que são os mais baixos sobem e os mais altos afundam. Paciência, então, crente; a eternidade corrigirá os equívocos do tempo.", tags: ["paciência", "eternidade"] }
    ],
    promessa: "A graça deve reinar como um príncipe e fazer os membros do corpo instrumentos de justiça. O Espírito Santo ama a ordem.",
    meditacao: "Não vamos cair no erro de permitir que nossas paixões cavalguem triunfantes enquanto nossas capacidades mais nobres andem na poeira."
  },
  {
    data: "2026-05-19",
    periodo: "Noite",
    versao: "original",
    versiculo: { texto: "Ah Senhor Deus! Eis que tu fizeste os céus e a terra com o teu grande poder, e com o teu braço estendido; nada há que te seja demasiado difícil", referencia: "Jr 32:17" },
    topicos: [
      { ordem: 1, icone: "📜", titulo: "A Ordem Inesperada", conteudo: "No momento em que os caldeus haviam cercado Jerusalém, Jeremias foi ordenado por Deus a comprar um campo e ter a escritura de transferência legalmente selada.", tags: ["obediência", "jeremias"] },
      { ordem: 2, icone: "💪", titulo: "Nada é Difícil para Deus", conteudo: "Ele raciocinou assim: 'Ah, Senhor Deus, Tu podes fazer com que este pedaço de terra tenha uso para mim; Tu fizeste os céus e a terra, e não há nada que Te sejas demasiado difícil'.", tags: ["poder", "soberania"] },
      { ordem: 3, icone: "⚓", titulo: "Fé Heróica", conteudo: "Quer se trate de um Noé que constrói uma arca, ou um Abraão que oferece seu filho; todos eles agem sob o comando de Deus e contrários aos ditames da razão carnal.", tags: ["fé", "coragem"] },
      { ordem: 4, icone: "🌟", titulo: "O Mundo de Maravilhas", conteudo: "Se nos aventurarmos mais nas promessas de Deus, entraremos em um mundo de maravilhas, ao qual ainda somos estranhos. Deixe que a confiança de Jeremias seja nossa.", tags: ["promessa", "mistério"] }
    ],
    promessa: "Nada é difícil demais para o Deus que criou os céus e a terra.",
    meditacao: "Senhor, neste doce entardecer, caminhe comigo no jardim e ensina-me a sabedoria da fé."
  }
];

async function upload() {
  console.log('📤 Enviando devocionais de 19/05...');
  const { data, error } = await supabase.from('devocionais').insert(devocionais).select();
  if (error) console.error('❌ Erro:', error.message);
  else console.log('✅ Devocionais salvos!');
}

upload();
