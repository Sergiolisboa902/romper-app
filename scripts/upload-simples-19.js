require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const dataSimples = [
  {
    data: "2026-05-19",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "Vi servos andando a cavalo e príncipes andando a pé como se fossem servos.", referencia: "Ec 10:7" },
    topicos: [
      { ordem: 1, icone: "🏇", titulo: "Inversão de Valores", conteudo: "Muitas vezes no mundo vemos pessoas orgulhosas em posições altas, enquanto pessoas de valor estão escondidas. Isso faz parte dos mistérios da vida, mas não deve nos desanimar.", tags: ["justiça", "paciência"] },
      { ordem: 2, icone: "🚶", titulo: "O Exemplo de Jesus", conteudo: "Jesus, sendo o Rei dos reis, escolheu ser o servo de todos. Se Ele andou a pé e cansado, não devemos estranhar se também formos ignorados pelo mundo.", tags: ["jesus", "exemplo"] },
      { ordem: 3, icone: "🌍", titulo: "O Mundo Engana", conteudo: "O mundo parece estar de cabeça para baixo. Os orgulhosos reinam agora, mas isso é passageiro. Lembre-se que Davi fugia enquanto Saul reinava.", tags: ["mundo", "realidade"] },
      { ordem: 4, icone: "⏳", titulo: "Justiça Final", conteudo: "Tenha paciência. Quando a eternidade chegar, Deus colocará cada coisa em seu devido lugar. Os últimos serão os primeiros e a verdade aparecerá.", tags: ["eternidade", "esperança"] }
    ],
    promessa: "Deus trará a ordem correta para todas as coisas no Seu tempo.",
    meditacao: "Não deixe suas paixões dominarem você; deixe que a graça de Deus governe seu coração."
  },
  {
    data: "2026-05-19",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Ah, Senhor Deus! Tu fizeste o céu e a terra com o Teu grande poder; nada é difícil demais para Ti.", referencia: "Jr 32:17" },
    topicos: [
      { ordem: 1, icone: "📜", titulo: "Uma Ordem Estranha", conteudo: "Deus mandou Jeremias comprar uma terra no meio de uma guerra. Parecia uma ideia sem sentido humano, mas Jeremias obedeceu sem questionar.", tags: ["obediência", "fé"] },
      { ordem: 2, icone: "💪", titulo: "Deus Pode Tudo", conteudo: "Jeremias pensou: 'Se Deus criou todo o universo, Ele pode fazer este investimento dar certo'. Nada é impossível para quem criou as estrelas.", tags: ["poder", "confiança"] },
      { ordem: 3, icone: "⚓", titulo: "Fé na Prática", conteudo: "Como Noé construindo o barco ou Abraão confiando no filho, agir pela palavra de Deus traz recompensas que a lógica humana não entende.", tags: ["coragem", "ação"] },
      { ordem: 4, icone: "🌟", titulo: "Um Mundo de Milagres", conteudo: "Se confiarmos mais nas promessas de Deus e menos no que vemos, viveremos experiências incríveis que hoje parecem impossíveis.", tags: ["milagre", "vida com deus"] }
    ],
    promessa: "Para Deus, absolutamente nada é impossível.",
    meditacao: "Termine seu dia descansando no poder Daquele que sustenta o universo inteiro."
  }
];

async function upload() {
  console.log('📤 Enviando Versões Simples (19/05)...');
  const { error } = await supabase.from('devocionais').upsert(dataSimples, { onConflict: 'data, periodo, versao' });
  if (error) console.error('❌ Erro:', error.message);
  else console.log('✅ Versões Simples salvas com sucesso!');
}

upload();
