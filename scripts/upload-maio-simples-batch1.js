require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batchSimples = [
  {
    data: "2026-05-01",
    manha: {
      versiculo: { texto: "O seu rosto é como um jardim de flores perfumadas (…)", referencia: "Ct 5:13" },
      topicos: [
        { ordem: 1, icone: "🌸", titulo: "O Mês da Renovação", conteudo: "A primavera chegou e a terra está cheia de beleza. Minha alma, é hora de sair e buscar pensamentos celestiais, deixando para trás o inverno da alma.", tags: ["renovação", "alegria"] },
        { ordem: 2, icone: "🌿", titulo: "Lugar de Paz", conteudo: "Você conhece os lugares de paz onde Jesus Se encontra. Vá até Ele e sinta o perfume de Sua presença que traz descanso ao coração.", tags: ["paz", "descanso"] },
        { ordem: 3, icone: "✝️", titulo: "O Rosto de Cristo", conteudo: "Aquele rosto que foi ferido por nós, agora sorri com misericórdia. O olhar de Jesus é o que traz o perfume da esperança para nossa vida.", tags: ["jesus", "esperança"] },
        { ordem: 4, icone: "🕊️", titulo: "Estar com Ele", conteudo: "Senhor Jesus, deixe-me viver em comunhão constante Contigo. Sou falho, mas Tu me aceitas e me amas profundamente.", tags: ["amor", "comunhão"] }
      ],
      promessa: "Um simples olhar para Jesus renova todas as nossas forças.",
      meditacao: "Quando Jesus está presente, o coração vive em uma primavera eterna."
    },
    noite: {
      versiculo: { texto: "Eu sou a rosa de Sarom (…)", referencia: "Ct 2:1" },
      topicos: [
        { ordem: 1, icone: "🌹", titulo: "Beleza Perfeita", conteudo: "Jesus possui uma beleza espiritual infinita. Ele é o mais importante e o mais belo entre todos, brilhando mais que qualquer estrela.", tags: ["beleza", "prioridade"] },
        { ordem: 2, icone: "✨", titulo: "A Melhor das Rosas", conteudo: "Jesus é o melhor entre os melhores. Ele é totalmente amável e encantador, trazendo justiça e bondade para quem se aproxima dEle.", tags: ["excelência", "bondade"] },
        { ordem: 3, icone: "🍯", titulo: "Sabor Espiritual", conteudo: "Nossa alma encontra satisfação completa em Jesus. Até mesmo lembrar do que Ele fez por nós traz doçura para os dias difíceis.", tags: ["satisfação", "paz"] },
        { ordem: 4, icone: "🏺", titulo: "Guardar na Memória", conteudo: "Guarde cada detalhe do amor de Jesus na sua memória. Com o tempo, essas lembranças vão perfumar toda a sua vida com gratidão.", tags: ["gratidão", "memória"] }
      ],
      promessa: "Nada no universo é mais precioso do que a presença de Jesus.",
      meditacao: "Deixe que o amor de Jesus floresça no seu coração e perfume todas as suas atitudes."
    }
  },
  {
    data: "2026-05-02",
    manha: {
      versiculo: { texto: "Não peço que os tires do mundo (…)", referencia: "Jo 17:15" },
      topicos: [
        { ordem: 1, icone: "🏠", titulo: "O Momento Certo", conteudo: "Um dia iremos para o céu estar com Jesus, mas Ele não quer que partamos agora. Há um tempo certo para tudo na mão de Deus.", tags: ["tempo", "esperança"] },
        { ordem: 2, icone: "🌾", titulo: "Trabalho Pendente", conteudo: "Deus nos mantém aqui porque ainda temos frutos para dar. Somos como trigo que precisa amadurecer antes de ser colhido pelo Mestre.", tags: ["propósito", "amadurecimento"] },
        { ordem: 3, icone: "⚖️", titulo: "Cuidado com o Egoísmo", conteudo: "Às vezes queremos morrer só para fugir dos problemas. Isso é egoísmo. Devemos desejar estar com Cristo, mas enquanto aqui estivermos, devemos servir.", tags: ["serviço", "coragem"] },
        { ordem: 4, icone: "🛡️", titulo: "Protegidos no Caminho", conteudo: "Jesus ora para que sejamos guardados do mal enquanto vivemos aqui. Dedique sua vida a glorificar a Deus, mesmo enfrentando lutas.", tags: ["proteção", "fidelidade"] }
      ],
      promessa: "Deus nos mantém aqui porque ainda tem planos para nós e para os outros através de nós.",
      meditacao: "Tenha paciência; o Mestre sabe a hora exata de nos chamar para casa."
    },
    noite: {
      versiculo: { texto: "Todos estes morreram com fé (…)", referencia: "Hb 11:13" },
      topicos: [
        { ordem: 1, icone: "📜", titulo: "Viver e Morrer com Fé", conteudo: "O resumo da vida dos santos é que eles viveram e morreram confiando em Deus. A fé foi o sustento e a direção de cada um deles.", tags: ["fé", "legado"] },
        { ordem: 2, icone: "⏮️", titulo: "Paz com o Passado", conteudo: "Eles morreram em paz porque sabiam que seus pecados foram perdoados por Deus. A certeza da misericórdia trouxe tranquilidade.", tags: ["perdão", "paz"] },
        { ordem: 3, icone: "⏭️", titulo: "Olhar para o Futuro", conteudo: "Eles partiram sabendo que a morte não era o fim, mas o nascimento para uma vida melhor com o Messias. A esperança venceu o medo.", tags: ["futuro", "ressurreição"] },
        { ordem: 4, icone: "⭐", titulo: "Luz que Guia", conteudo: "A fé foi como uma estrela que guiou a vida deles. Fique feliz por também possuir essa fé preciosa que nos sustenta hoje.", tags: ["direção", "luz"] }
      ],
      promessa: "A fé em Deus é o nosso maior tesouro, tanto na vida quanto na morte.",
      meditacao: "Termine seu dia olhando para Jesus, aquele que começou e vai completar a sua fé."
    }
  },
  {
    data: "2026-05-03",
    manha: {
      versiculo: { texto: "No mundo vocês terão aflições (…)", referencia: "Jo 16:33" },
      topicos: [
        { ordem: 1, icone: "🔥", titulo: "O Fogo que Limpa", conteudo: "As dificuldades servem para nos limpar de tudo o que não presta. Não é fácil ser moldado, mas o resultado é a perfeição em Deus.", tags: ["crescimento", "luta"] },
        { ordem: 2, icone: "🦁", titulo: "Cuidado com o Inimigo", conteudo: "O mal não quer nos deixar em paz. Ele está sempre ao redor tentando nos derrubar. Fique atento e não baixe a guarda.", tags: ["vigilância", "combate"] },
        { ordem: 3, icone: "🌍", titulo: "Visitantes na Terra", conteudo: "Este mundo não é nossa casa definitiva. Somos como viajantes em terra estranha. Encare cada dia como um passo na jornada para casa.", tags: ["céu", "jornada"] },
        { ordem: 4, icone: "❤️", titulo: "A Luta Interior", conteudo: "O maior inimigo muitas vezes está dentro de nós: nosso ego e nossos desejos errados. Precisamos de ajuda diária para vencer a nós mesmos.", tags: ["autocontrole", "espiritualidade"] }
      ],
      promessa: "Peça ajuda a Deus no dia da angústia e Ele te livrará.",
      meditacao: "Espere enfrentar desafios, mas nunca esqueça que Deus está ao seu lado para te fortalecer."
    },
    noite: {
      versiculo: { texto: "Ele é ajuda sempre presente (…)", referencia: "Sl 46:1" },
      topicos: [
        { ordem: 1, icone: "💎", titulo: "Use as Promessas", conteudo: "As promessas de Deus não são apenas para serem lidas, mas para serem usadas na prática. Jesus está disponível para te ajudar agora.", tags: ["prática", "fé"] },
        { ordem: 2, icone: "🛡️", titulo: "Proteção Divina", conteudo: "Sente-se desprotegido? Use a justiça de Cristo como sua armadura. Deixe seus medos de lado e confie na proteção que vem do alto.", tags: ["proteção", "segurança"] },
        { ordem: 3, icone: "🩺", titulo: "Fale com o Médico", conteudo: "Se você se sente doente ou cansado, faça uma oração sincera. Jesus é o médico que renova nossas energias e cura nossa alma.", tags: ["cura", "oração"] },
        { ordem: 4, icone: "🤝", titulo: "Parente Poderoso", conteudo: "Você pode se sentir pobre, mas seu 'Parente' no céu é dono de tudo. Ele quer que você peça ajuda e confie nEle totalmente.", tags: ["ajuda", "provisão"] }
      ],
      promessa: "Quanto mais você confiar em Jesus, mais verá o quanto Ele é precioso.",
      meditacao: "Seja simples com Deus; abra seu coração sem medo e sem formalidades."
    }
  },
  {
    data: "2026-05-04",
    manha: {
      versiculo: { texto: "Pode o homem fazer deuses para si? Mas esses não são deuses!", referencia: "Jr 16:20" },
      topicos: [
        { ordem: 1, icone: "🗿", titulo: "Ídolos Modernos", conteudo: "Muitas vezes colocamos o dinheiro ou o orgulho no lugar de Deus. É fácil cair na armadilha de adorar coisas que não têm vida.", tags: ["prioridade", "foco"] },
        { ordem: 2, icone: "🌵", titulo: "Apego Excessivo", conteudo: "Até mesmo as pessoas que amamos podem se tornar ídolos se não tomarmos cuidado. Colocar qualquer pessoa acima de Deus traz sofrimento.", tags: ["família", "equilíbrio"] },
        { ordem: 3, icone: "🪵", titulo: "Coisas sem Valor", conteudo: "Adorar coisas materiais ou pessoas é tão vazio quanto adorar estátuas de madeira. O princípio é o mesmo: buscar em coisas o que só Deus dá.", tags: ["vaidade", "clareza"] },
        { ordem: 4, icone: "⚖️", titulo: "Arrependimento", conteudo: "Como conhecemos a verdade, nosso erro é maior quando nos afastamos de Deus. Precisamos voltar nosso coração para o Deus vivo hoje mesmo.", tags: ["mudança", "retorno"] }
      ],
      promessa: "O consolo que vem de coisas ou pessoas é passageiro; só Deus traz ajuda real nas dificuldades.",
      meditacao: "Que Deus nos ajude a nunca trocar o Criador por qualquer coisa que Ele criou."
    },
    noite: {
      versiculo: { texto: "Vocês foram gerados de novo por uma semente que nunca morre (…)", referencia: "1Pe 1:23" },
      topicos: [
        { ordem: 1, icone: "👑", titulo: "Filhos do Rei", conteudo: "Você faz parte da família de Deus, a maior nobreza que existe. Isso deve nos levar a amar uns aos outros com sinceridade.", tags: ["amor", "identidade"] },
        { ordem: 2, icone: "🧬", titulo: "Nova Natureza", conteudo: "O novo nascimento mudou quem você é. Agora você tem uma natureza santa que te coloca em um nível espiritual superior.", tags: ["mudança", "santidade"] },
        { ordem: 3, icone: "✨", titulo: "Povo Especial", conteudo: "Você foi escolhido por Deus para ser diferente do mundo. Viva como alguém que sabe que pertence ao Senhor e foi resgatado por Ele.", tags: ["escolha", "valor"] },
        { ordem: 4, icone: "🛡️", titulo: "Longe do Mal", conteudo: "Pela dignidade da sua nova vida, afaste-se de tudo o que é errado. Busque viver de forma correta e íntegra todos os dias.", tags: ["atitude", "integridade"] }
      ],
      promessa: "Mesmo que as coisas deste mundo passem, a vida que Deus te deu é eterna.",
      meditacao: "Reconheça o valor que Deus te deu e viva de acordo com essa nova identidade."
    }
  },
  {
    data: "2026-05-05",
    manha: {
      versiculo: { texto: "Eu serei o Deus deles, e eles serão o meu povo.", referencia: "2Co 6:16" },
      topicos: [
        { ordem: 1, icone: "💎", titulo: "Você é Especial", conteudo: "Deus é dono do mundo, mas Ele chama aqueles que resgatou de 'Meu povo'. Você é alvo de um cuidado especial e único.", tags: ["valor", "cuidado"] },
        { ordem: 2, icone: "📜", titulo: "Dono de Você", conteudo: "Ele te comprou com um preço altíssimo e te ama com um amor que nunca acaba. Você pertence a Ele para sempre.", tags: ["amor", "segurança"] },
        { ordem: 3, icone: "🩸", titulo: "Marca de Sangue", conteudo: "Sua salvação está garantida pelo sangue de Jesus. O registro da sua liberdade foi assinado com o sacrifício dEle na cruz.", tags: ["salvação", "gratidão"] },
        { ordem: 4, icone: "👨‍👩‍👧‍👦", titulo: "Favor de Deus", conteudo: "Ter Deus como seu Deus significa ter um favor imenso sobre sua vida. Você foi aceito através de Jesus Cristo.", tags: ["favor", "aceitação"] }
      ],
      promessa: "O amor de Deus por você nunca vai diminuir, não importa quanto tempo passe.",
      meditacao: "Você pode dizer com toda a confiança: 'Jesus é o meu Salvador'?"
    },
    noite: {
      versiculo: { texto: "Quem confia no Senhor será feliz.", referencia: "Pv 16:20" },
      topicos: [
        { ordem: 1, icone: "🧭", titulo: "Sabedoria é Direção", conteudo: "A sabedoria é o que nos guia na vida. Sem ela, ficamos perdidos como um navio sem bússola no meio de uma tempestade.", tags: ["direção", "sabedoria"] },
        { ordem: 2, icone: "🌳", titulo: "Frutos de Paz", conteudo: "Seguir os passos de Jesus nos traz coisas boas mesmo em tempos difíceis. Existem alegrias que só quem caminha com Deus conhece.", tags: ["alegria", "paz"] },
        { ordem: 3, icone: "🗝️", titulo: "O Segredo da Felicidade", conteudo: "Deus revelou o segredo: confiar nEle é o caminho para ser verdadeiramente feliz. Esse é o melhor modo de encarar qualquer problema.", tags: ["confiança", "felicidade"] },
        { ordem: 4, icone: "🎓", titulo: "Mestre na Fé", conteudo: "Quem confia em Deus tem a verdadeira sabedoria. Essa pessoa será abençoada hoje e viverá coisas ainda maiores na eternidade.", tags: ["eternidade", "benção"] }
      ],
      promessa: "Aquele que coloca sua confiança em Deus achará o caminho do bem.",
      meditacao: "Deixe que Deus ensine seu coração a confiar mais nEle nesta noite."
    }
  }
];

async function uploadSimples() {
  console.log('📤 Subindo Bloco 1 de Versões Simples (01-05/05)...');
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
  console.log('🏁 Bloco 1 concluído.');
}

uploadSimples();
