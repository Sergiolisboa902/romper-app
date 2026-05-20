require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batchSimples = [
  {
    data: "2026-05-06",
    manha: {
      versiculo: { texto: "Com isso sabemos que estamos nEle (…)", referencia: "1Jo 4:13" },
      topicos: [
        { ordem: 1, icone: "🏠", titulo: "Uma Casa Gratuita", conteudo: "Você procura um refúgio para sua alma? Deus oferece um lugar seguro sem cobrar nada. O único 'preço' é amá-Lo e confiar nEle.", tags: ["graça", "refúgio"] },
        { ordem: 2, icone: "🍲", titulo: "Completa e Rica", conteudo: "Essa morada espiritual tem tudo o que você precisa para ser feliz e viver em paz. É um lugar onde você pode ter comunhão íntima com Jesus.", tags: ["provisão", "paz"] },
        { ordem: 3, icone: "🧼", titulo: "Limpeza Constante", conteudo: "Não se sinta indigno. Jesus está limpando seu coração todos os dias, tornando você cada vez mais preparado para viver na presença dEle.", tags: ["santificação", "preparo"] },
        { ordem: 4, icone: "🏰", titulo: "Proteção Eterna", conteudo: "Você tem um lugar onde sempre estará seguro. Mesmo quando tudo neste mundo passar, o seu refúgio em Deus permanecerá firme para sempre.", tags: ["segurança", "eternidade"] }
      ],
      promessa: "Viver em Deus é ter a casa mais segura e duradoura do universo.",
      meditacao: "Sinta-se privilegiado por ter o próprio Deus como o seu lar espiritual."
    },
    noite: {
      versiculo: { texto: "(…) Eu esperaria todos os dias da minha luta (…)", referencia: "Jó 14:14" },
      topicos: [
        { ordem: 1, icone: "🍷", titulo: "O Valor do Esforço", conteudo: "As dificuldades aqui na Terra tornam a paz do céu ainda mais doce. O trabalho duro e os desafios de hoje preparam uma vitória gloriosa no futuro.", tags: ["esforço", "recompensa"] },
        { ordem: 2, icone: "🌊", titulo: "Comunhão na Luta", conteudo: "Jesus também sofreu enquanto esteve aqui. Quando passamos por lutas, estamos participando da mesma experiência que o nosso Mestre viveu.", tags: ["comunhão", "exemplo"] },
        { ordem: 3, icone: "💎", titulo: "Brilho na Prova", conteudo: "Como um diamante que precisa ser cortado para brilhar, nossas provações servem para mostrar a glória de Deus através da nossa vida.", tags: ["valor", "provação"] },
        { ordem: 4, icone: "⌛", titulo: "Tempo Determinado", conteudo: "Nosso tempo de espera está nas mãos de Deus. Não fique ansioso; tenha paciência até que as portas do céu se abram para você.", tags: ["paciência", "soberania"] }
      ],
      promessa: "Deus usa nossas lutas presentes para criar em nós um brilho eterno de glória.",
      meditacao: "A alegria de estar com Cristo vale qualquer sofrimento passageiro que enfrentamos aqui."
    }
  },
  {
    data: "2026-05-07",
    manha: {
      versiculo: { texto: "Muitas pessoas o seguiam, e ele curou todas elas.", referencia: "Mt 12:15" },
      topicos: [
        { ordem: 1, icone: "🏥", titulo: "O Olhar Compassivo", conteudo: "Jesus olhou para uma multidão de doentes com amor. Ele não rejeitou ninguém, mas atendeu cada pessoa com paciência e cuidado.", tags: ["compaixão", "cuidado"] },
        { ordem: 2, icone: "⚔️", titulo: "Poder sobre o Mal", conteudo: "Jesus venceu todo tipo de doença e sofrimento. Bastava uma palavra Sua para que o mal fosse embora e a saúde voltasse.", tags: ["poder", "vitória"] },
        { ordem: 3, icone: "🩺", titulo: "Cura para Você", conteudo: "Não importa qual seja o seu problema, Jesus pode te curar. Tenha esperança nEle para você e para as pessoas que você ama.", tags: ["esperança", "cura"] },
        { ordem: 4, icone: "🩸", titulo: "Sacrifício que Salva", conteudo: "Ele nos cura porque levou sobre Si as nossas dores. A Igreja é prova viva de que Jesus continua transformando vidas e curando corações.", tags: ["redenção", "transformação"] }
      ],
      promessa: "Aquele que curou a todos no passado continua agindo com graça hoje.",
      meditacao: "Vá até Jesus agora mesmo; Ele veio para vencer o mal na sua vida."
    },
    noite: {
      versiculo: { texto: "Jesus disse: Levante-se, pegue sua cama e ande.", referencia: "Jo 5:8" },
      topicos: [
        { ordem: 1, icone: "🏊", titulo: "Não Espere por Sinais", conteudo: "Muitas pessoas esperam por um milagre extraordinário ou uma sensação diferente, sem perceber que Jesus já está ao lado delas pronto para ajudar.", tags: ["atitude", "fé"] },
        { ordem: 2, icone: "❄️", titulo: "Confie em Jesus agora", conteudo: "Não fique esperando por um anjo ou algo mágico. Confiar em Jesus é o caminho mais simples e seguro para receber todas as bênçãos.", tags: ["confiança", "agora"] },
        { ordem: 3, icone: "🗣️", titulo: "Ouça a Voz de Deus", conteudo: "Que Deus perdoe nossa falta de fé e nos ajude a ouvir Sua voz suave que nos chama para sair do desespero e caminhar com força.", tags: ["voz de deus", "mudança"] },
        { ordem: 4, icone: "🌅", titulo: "Olhe e Viva", conteudo: "Aproveite este momento de calma para colocar sua fé em ação. Existe um convite de vida eterna para você nesta mensagem hoje.", tags: ["salvação", "vida"] }
      ],
      promessa: "Basta confiar em Jesus para que Ele transforme sua fraqueza em força.",
      meditacao: "Não espere pelo amanhã ou por um sinal; coloque sua confiança no Salvador agora."
    }
  },
  {
    data: "2026-05-08",
    manha: {
      versiculo: { texto: "O homem que foi curado não sabia quem Jesus era (…)", referencia: "Jo 5:13" },
      topicos: [
        { ordem: 1, icone: "⚡", titulo: "Sentindo a Mudança", conteudo: "Quando Jesus transforma uma vida, a pessoa sente uma alegria e paz profundas. É uma mudança real que não passa despercebida.", tags: ["mudança", "experiência"] },
        { ordem: 2, icone: "🌑", titulo: "Conhecer Melhor", conteudo: "Às vezes somos curados por Deus, mas ainda conhecemos pouco sobre Ele. É importante buscar entender quem Jesus é e o que Ele deseja de nós.", tags: ["conhecimento", "busca"] },
        { ordem: 3, icone: "🛡️", titulo: "Saber Responder", conteudo: "Conhecer a verdade nos ajuda a enfrentar quem tenta nos desanimar. É bom aprender sobre Deus para estarmos firmes na nossa fé.", tags: ["firmeza", "aprendizado"] },
        { ordem: 4, icone: "🏛️", titulo: "Contar o que Aconteceu", conteudo: "Depois de ser curado, o homem encontrou Jesus e começou a contar para todos que foi Ele quem o salvou. Faça o mesmo com seu testemunho.", tags: ["testemunho", "gratidão"] }
      ],
      promessa: "Quanto mais você confiar no que já sabe sobre Deus, mais Ele te mostrará coisas novas.",
      meditacao: "Peça a Deus que Se mostre a você de forma clara para que você possa falar dEle aos outros."
    },
    noite: {
      versiculo: { texto: "Aproxime-se de Deus e tenha paz (…)", referencia: "Jó 22:21" },
      topicos: [
        { ordem: 1, icone: "👨‍👦", titulo: "Fale com o Pai", conteudo: "Reconheça suas falhas, mas receba o abraço amoroso de Deus. Sinta-se aceito como um filho querido que volta para casa.", tags: ["perdão", "amor"] },
        { ordem: 2, icone: "🤝", titulo: "Conheça o Filho", conteudo: "Tenha Jesus como seu melhor amigo, irmão e protetor. Acompanhe os passos dEle e aprenda com Seu exemplo de amor e cansaço.", tags: ["intimidade", "exemplo"] },
        { ordem: 3, icone: "🕊️", titulo: "Sinta o Espírito", conteudo: "Deixe que o Espírito Santo traga ordem e santidade para a sua vida. Ele é o consolador que guia nossos pensamentos para o bem.", tags: ["paz", "direção"] },
        { ordem: 4, icone: "♾️", titulo: "União com Deus", conteudo: "Conhecer a Deus profundamente em todas as Suas formas traz a verdadeira paz que o mundo não pode oferecer. Isso é fé real.", tags: ["paz", "unidade"] }
      ],
      promessa: "Conhecer a Deus como Ele realmente é traz uma paz que ninguém consegue tirar.",
      meditacao: "Não se contente com pouco; busque conhecer a Deus de todo o coração."
    }
  },
  {
    data: "2026-05-09",
    manha: {
      versiculo: { texto: "Ele nos abençoou com todas as bênçãos espirituais (…)", referencia: "Ef 1:3" },
      topicos: [
        { ordem: 1, icone: "🕰️", titulo: "Amor Antigo", conteudo: "Deus nos escolheu antes mesmo do mundo existir. Ele fez um compromisso eterno de cuidar de nós e nos dar consolo.", tags: ["escolha", "segurança"] },
        { ordem: 2, icone: "💍", titulo: "Compromisso Real", conteudo: "Temos um compromisso com o Príncipe da Glória. Ele nos trata com honra e está preparando um futuro maravilhoso para nós.", tags: ["futuro", "honra"] },
        { ordem: 3, icone: "✝️", titulo: "Tudo por Nós", conteudo: "O nascimento, o sacrifício e a ressurreição de Jesus foram presentes dados a nós. Tudo o que Ele conquistou, agora pertence ao Seu povo.", tags: ["presente", "conquista"] },
        { ordem: 4, icone: "🛡️", titulo: "Ele Intercede", conteudo: "Jesus sabe o nosso nome e fala por nós diante de Deus. Podemos descansar sabendo que nada vai atrapalhar o plano dEle para nós.", tags: ["proteção", "cuidado"] }
      ],
      promessa: "Aquele que deu a vida por você continua cuidando de cada detalhe agora que está no trono.",
      meditacao: "Descanse na certeza de que o seu futuro está garantido por Deus."
    },
    noite: {
      versiculo: { texto: "Vamos logo cedo cuidar das plantações e ver se elas estão crescendo (…)", referencia: "Ct 7:12" },
      topicos: [
        { ordem: 1, icone: "🍇", titulo: "Trabalhar com Jesus", conteudo: "É maravilhoso trabalhar sabendo que Jesus está ao nosso lado. Nosso serviço para Deus se torna muito mais leve e produtivo assim.", tags: ["trabalho", "companhia"] },
        { ordem: 2, icone: "🧘", titulo: "Ação e Devoção", conteudo: "Muitos acham que não podem trabalhar e ter comunhão com Deus ao mesmo tempo. Estão enganados; podemos servir e amar a Jesus juntos.", tags: ["equilíbrio", "serviço"] },
        { ordem: 3, icone: "👷", titulo: "Trabalhadores Felizes", conteudo: "Quem mais tem intimidade com Deus são aqueles que se esforçam para fazer o bem, sentindo a presença do Senhor em cada tarefa.", tags: ["esforço", "intimidade"] },
        { ordem: 4, icone: "🌿", titulo: "Crescer Servindo", conteudo: "Toda forma de ajuda ao próximo e serviço na igreja nos faz crescer espiritualmente. Faça tudo mantendo seu coração perto de Jesus.", tags: ["crescimento", "ajuda"] }
      ],
      promessa: "Qualquer coisa que façamos para Deus pode ser feita em parceria constante com Ele.",
      meditacao: "Viver aos pés de Jesus enquanto trabalhamos é o segredo para uma vida cheia de propósito."
    }
  },
  {
    data: "2026-05-10",
    manha: {
      versiculo: { texto: "A verdade é que Cristo ressuscitou! (…)", referencia: "1Co 15:20" },
      topicos: [
        { ordem: 1, icone: "🧱", titulo: "A Base de Tudo", conteudo: "Toda a nossa fé depende da ressurreição de Jesus. Se Ele não tivesse vencido a morte, nossa esperança seria vazia e sem sentido.", tags: ["fé", "fundamento"] },
        { ordem: 2, icone: "👑", titulo: "Jesus é o Senhor", conteudo: "Porque ressuscitou, Jesus é o Senhor de todos, tanto dos que já partiram quanto dos que estão vivos hoje. Ele tem todo o poder.", tags: ["senhorio", "poder"] },
        { ordem: 3, icone: "⚖️", titulo: "Estamos Justificados", conteudo: "A vitória de Jesus sobre a morte garante que fomos perdoados e aceitos por Deus. Ele ressuscitou para nos dar uma vida nova.", tags: ["perdão", "justiça"] },
        { ordem: 4, icone: "🧵", titulo: "Unidos pela Esperança", conteudo: "A ressurreição é o que une todas as bênçãos de Deus, desde o dia em que cremos até a vida eterna no céu. É a nossa maior certeza.", tags: ["esperança", "unidade"] }
      ],
      promessa: "Porque Cristo ressuscitou, nós também viveremos para sempre com Deus.",
      meditacao: "Alegre-se hoje com a notícia mais importante da história: Jesus está vivo!"
    },
    noite: {
      versiculo: { texto: "Vimos a Sua glória, como a glória do Filho único do Pai, cheio de graça e de verdade.", referencia: "Jo 1:14" },
      topicos: [
        { ordem: 1, icone: "⚒️", titulo: "Uma Obra Incrível", conteudo: "Só Deus poderia fazer o que Jesus fez por mim. Ele amoleceu meu coração, mudou minha vontade e quebrou as correntes do mal.", tags: ["transformação", "milagre"] },
        { ordem: 2, icone: " Fountain", titulo: "Cheio de Bondade", conteudo: "Se Jesus não fosse tão bom e gracioso, eu nunca teria sido salvo. Ele me chamou e me perdoou quando eu estava com medo.", tags: ["graça", "perdão"] },
        { ordem: 3, icone: "📜", titulo: "Sempre Verdadeiro", conteudo: "Todas as promessas de Jesus são reais; nenhuma falhou. Ele tem sido o melhor amigo e o melhor consolo que eu poderia ter.", tags: ["fidelidade", "consolo"] },
        { ordem: 4, icone: "☀️", titulo: "Tudo o que Preciso", conteudo: "Na vida Ele é minha força; na tristeza é minha estrela; na claridade é meu sol. Com Jesus, não me falta nada de importante.", tags: ["plenitude", "provisão"] }
      ],
      promessa: "Jesus é cheio de amor e verdade; nEle você encontra tudo o que sua alma precisa.",
      meditacao: "Termine seu dia exaltando a grandeza e a bondade do Filho de Deus."
    }
  }
];

async function uploadSimples() {
  console.log('📤 Subindo Bloco 2 de Versões Simples (06-10/05)...');
  const uploads = batchSimples.map(async (day) => {
    const entries = [
      {
        data: day.data,
        periodo: "Manhã",
        versao: "simples",
        versiculo: day.manha.versiculo,
        topicos: day.manha.topicos,
        promessa: day.manha.promessa,
        meditacao: day.manha.meditacao
      },
      {
        data: day.data,
        periodo: "Noite",
        versao: "simples",
        versiculo: day.noite.versiculo,
        topicos: day.noite.topicos,
        promessa: day.noite.promessa,
        meditacao: day.noite.meditacao
      }
    ];
    const { error } = await supabase.from('devocionais').upsert(entries, { onConflict: 'data, periodo, versao' });
    if (error) console.error(`❌ Erro em ${day.data}:`, error.message);
    else console.log(`✅ ${day.data} (Simples) processado.`);
  });

  await Promise.all(uploads);
  console.log('🏁 Bloco 2 concluído.');
}

uploadSimples();
