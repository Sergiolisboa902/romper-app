require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const realSimples = [
  {
    data: "2026-05-14",
    manha: {
      versiculo: { texto: "(…) herdeiros junto com Cristo (…)", referencia: "Rm 8:17" },
      topicos: [
        { ordem: 1, icone: "🏰", titulo: "Herança do Universo", conteudo: "Tudo o que pertence a Deus agora também pertence a nós através de Jesus. Ele nos convidou para sermos donos de toda a criação junto com Ele.", tags: ["herança", "identidade"] },
        { ordem: 2, icone: "👑", titulo: "Honra Real", conteudo: "Jesus deixou Sua glória no céu para que pudéssemos ser coroados com Ele. O trono, o tesouro e a honra de Cristo são compartilhados com Seu povo.", tags: ["honra", "realeza"] },
        { ordem: 3, icone: "🤝", titulo: "Tudo é Nosso", conteudo: "Jesus não guarda a felicidade só para Ele. Ele Se sente feliz em dividir Suas vitórias e Suas conquistas com cada um de nós.", tags: ["união", "generosidade"] },
        { ordem: 4, icone: "😊", titulo: "Alegria Completa", conteudo: "Deus sorri para nós porque estamos unidos a Jesus. Somos convidados a participar da mesma alegria infinita que o Filho de Deus possui.", tags: ["felicidade", "comunhão"] }
      ],
      promessa: "Jesus dividiu com você a glória que Ele recebeu do Pai.",
      meditacao: "Você não é apenas um servo, você é um herdeiro de tudo o que Cristo conquistou."
    },
    noite: {
      versiculo: { texto: "Ele cuidará das ovelhas e carregará os cordeirinhos no colo (…)", referencia: "Is 40:11" },
      topicos: [
        { ordem: 1, icone: "🐑", titulo: "Cuidado com os Fracos", conteudo: "Jesus é o Bom Pastor que tem um carinho especial por quem se sente fraco ou pequeno. Ele nos comprou e prometeu cuidar de cada um de nós.", tags: ["cuidado", "compaixão"] },
        { ordem: 2, icone: "🛡️", titulo: "Proteção Suave", conteudo: "Muitas vezes Deus nos poupa de lutas muito grandes porque sabe que nossa força é pequena. Ele cuida do nosso caminho com muita bondade.", tags: ["proteção", "bondade"] },
        { ordem: 3, icone: "🍼", titulo: "Fé Simples", conteudo: "Jesus gosta da fé simples que confia na promessa exatamente como ela é escrita. Essa confiança nos coloca acima das dificuldades do mundo.", tags: ["fé", "simplicidade"] },
        { ordem: 4, icone: "🤗", titulo: "Segurança no Colo", conteudo: "Estar nos braços de Jesus é ter amor total e segurança perfeita. Para alguém te ferir ali, teria que ferir o próprio Pastor primeiro.", tags: ["amor", "descanso"] }
      ],
      promessa: "Nos braços de Jesus, você está totalmente seguro e protegido.",
      meditacao: "Descanse hoje na ternura infinita Daquele que te carrega no colo."
    }
  },
  {
    data: "2026-05-15",
    manha: {
      versiculo: { texto: "(…) todo aquele que crê é perdoado e aceito", referencia: "At 13:39" },
      topicos: [
        { ordem: 1, icone: "⚡", titulo: "Aceito Agora", conteudo: "No momento em que você confia em Jesus, você é aceito por Deus imediatamente. Não é algo que acontece aos poucos, é um presente agora.", tags: ["perdão", "fé"] },
        { ordem: 2, icone: "🏛️", titulo: "Ficha Limpa", conteudo: "Hoje mesmo você está livre de qualquer acusação diante de Deus. Não há mais nenhum pecado registrado contra você no livro do céu.", tags: ["liberdade", "justiça"] },
        { ordem: 3, icone: "🧼", titulo: "Totalmente Limpo", conteudo: "Para Deus, você é puro e sem manchas porque está unido a Jesus. Ele te olha e vê a justiça do Seu Filho em sua vida.", tags: ["pureza", "aceitação"] },
        { ordem: 4, icone: "🏃", titulo: "Viver para Ele", conteudo: "Saber que somos perdoados deve nos dar ânimo para servir a Jesus com alegria. Use sua vida para honrar Aquele que te libertou.", tags: ["serviço", "gratidão"] }
      ],
      promessa: "Não existe mais nenhuma condenação para quem está unido a Cristo Jesus.",
      meditacao: "Você está tão perdoado hoje quanto os santos que já estão no céu."
    },
    noite: {
      versiculo: { texto: "(…) as pessoas que Deus tornou perfeitas", referencia: "Hb 12:23" },
      topicos: [
        { ordem: 1, icone: "⚖️", titulo: "Em Construção", conteudo: "Deus está trabalhando em nós. Ele já nos aceitou através de Jesus e agora o Espírito Santo está nos transformando dia após dia.", tags: ["processo", "mudança"] },
        { ordem: 2, icone: "🧼", titulo: "Fim do Pecado", conteudo: "Um dia Deus vai terminar Sua obra e seremos completamente livres de pensamentos ruins e falhas. Seremos santos como Ele é santo.", tags: ["esperança", "santidade"] },
        { ordem: 3, icone: "🔥", titulo: "Preparado para o Céu", conteudo: "A morte para o cristão é apenas o último passo da limpeza da alma, nos deixando prontos para viver na presença gloriosa do Pai.", tags: ["céu", "transformação"] },
        { ordem: 4, icone: "🌱", titulo: "Comece Hoje", conteudo: "Embora a perfeição venha depois, devemos buscar viver de forma limpa hoje mesmo. Deixe a graça de Deus agir no seu presente.", tags: ["atitude", "vigilância"] }
      ],
      promessa: "Deus vai completar em você a obra maravilhosa que Ele já começou.",
      meditacao: "Confie no trabalho que o Espírito Santo está fazendo no seu coração nesta noite."
    }
  },
  {
    data: "2026-05-16",
    manha: {
      versiculo: { texto: "(…) Deus, que nos dá tudo com fartura para a nossa alegria", referencia: "1Tm 6:17" },
      topicos: [
        { ordem: 1, icone: "⛲", titulo: "Bondade sem Fim", conteudo: "Jesus nunca para de nos abençoar. Ele é como um sol que sempre brilha e um rio de bondade que nunca seca para os Seus filhos.", tags: ["generosidade", "graça"] },
        { ordem: 2, icone: "🗓️", titulo: "Banquete Diário", conteudo: "Todos os dias temos motivos para celebrar o cuidado de Deus. Suas misericórdias se renovam a cada manhã e nos sustentam todas as noites.", tags: ["cuidado", "provisão"] },
        { ordem: 3, icone: "⏳", titulo: "Tempo de Bençãos", conteudo: "Cada hora que passa é uma nova oportunidade de sentir a bondade de Deus. Sua afeição por nós é como areia dourada cobrindo nosso tempo.", tags: ["tempo", "amor"] },
        { ordem: 4, icone: "🎻", titulo: "Coração Grato", conteudo: "Como podemos não agradecer a Alguém que nos dá tanto? Que o nosso louvor seja tão constante quanto a generosidade de Deus.", tags: ["gratidão", "louvor"] }
      ],
      promessa: "Deus te dá todas as coisas em abundância para que você seja verdadeiramente feliz.",
      meditacao: "Comece seu dia agradecendo pelas infinitas pequenas demonstrações do amor de Deus."
    },
    noite: {
      versiculo: { texto: "(…) este vale ficará cheio de água (…)", referencia: "2Rs 3:17" },
      topicos: [
        { ordem: 1, icone: "🕳️", titulo: "Prepare o Terreno", conteudo: "Deus quer nos abençoar, mas espera que estejamos prontos. Prepare seu coração através da oração para receber o que Ele tem para dar.", tags: ["preparação", "oração"] },
        { ordem: 2, icone: "🤫", titulo: "Bençãos Silenciosas", conteudo: "Muitas vezes Deus age de forma silenciosa e inesperada. Ele tem Seus próprios jeitos de encher nossa vida de paz sem precisarmos ver tempestades.", tags: ["soberania", "mistério"] },
        { ordem: 3, icone: "🌊", titulo: "Mais que o Suficiente", conteudo: "A provisão de Deus sempre atende a todas as nossas necessidades. No Evangelho, encontramos tudo o que a nossa alma precisa para ser saciada.", tags: ["plenitude", "provisão"] },
        { ordem: 4, icone: "⛏️", titulo: "Minha Parte", conteudo: "O que você está fazendo para se aproximar de Jesus? Esteja pronto e com expectativa, pois o Senhor está disposto a te abençoar hoje.", tags: ["ação", "expectativa"] }
      ],
      promessa: "Deus vai preencher os vazios da sua vida com uma abundância extraordinária.",
      meditacao: "Receba com gratidão o que Deus preparou para você nesta noite."
    }
  },
  {
    data: "2026-05-17",
    manha: {
      versiculo: { texto: "(…) deve viver como Jesus viveu.", referencia: "1Jo 2:6" },
      topicos: [
        { ordem: 1, icone: "🏃", titulo: "Saúde da Alma", conteudo: "Seguir o exemplo de Jesus é o que mantém nossa alma saudável e forte. Viver como Ele nos ajuda a evitar as armadilhas do erro.", tags: ["crescimento", "santidade"] },
        { ordem: 2, icone: "🍷", titulo: "Felicidade Real", conteudo: "Se você quer ter uma amizade alegre com Jesus e não se abalar com as preocupações do mundo, busque agir como Ele agiria.", tags: ["felicidade", "comunhão"] },
        { ordem: 3, icone: "🛡️", titulo: "Seja um Exemplo", conteudo: "Nossas atitudes falam mais alto que nossas palavras. Viva de um jeito que as pessoas vejam o amor de Jesus através de você.", tags: ["testemunho", "caráter"] },
        { ordem: 4, icone: "👣", titulo: "Seguir os Passos", conteudo: "Nada ajuda mais na caminhada para o céu do que manter a imagem de Jesus no coração, guiando cada decisão e cada palavra.", tags: ["direção", "fidelidade"] }
      ],
      promessa: "O Espírito Santo te dará forças para caminhar nos mesmos passos de Jesus.",
      meditacao: "Antes de agir, pergunte-se: 'O que Jesus faria no meu lugar?'."
    },
    noite: {
      versiculo: { texto: "(…) Você é meu servo, Eu te escolhi (…)", referencia: "Is 41:9" },
      topicos: [
        { ordem: 1, icone: "🧤", titulo: "Servo por Amor", conteudo: "Servir a Deus é uma honra que nos liberta do mal. Vestimos o 'uniforme' da bondade e obedecemos aos Seus ensinamentos com alegria.", tags: ["serviço", "liberdade"] },
        { ordem: 2, icone: "♾️", titulo: "Escolha Eterna", conteudo: "Deus nos escolheu muito antes de nascermos. Esse convite não foi por nosso mérito, mas pela graça infinita e soberana do Senhor.", tags: ["escolha", "graça"] },
        { ordem: 3, icone: "💍", titulo: "Amor Fiel", conteudo: "O amor de Jesus por nós não muda nunca. Ele se comprometeu com a Sua igreja para sempre e a Sua fidelidade é a nossa maior segurança.", tags: ["fidelidade", "aliança"] },
        { ordem: 4, icone: "⚓", titulo: "Gratidão Infinita", conteudo: "Deus sabia de todas as nossas falhas e mesmo assim nos escolheu. Saber disso deve encher nosso coração de gratidão e confiança.", tags: ["segurança", "gratidão"] }
      ],
      promessa: "Deus te ama com um amor eterno e nunca voltará atrás na Sua escolha.",
      meditacao: "Agradeça nesta noite por pertencer a um Deus tão fiel e amoroso."
    }
  }
];

async function run() {
  console.log('📤 Corrigindo Versões Simples (Lote 1: 14-17 de Maio)...');
  const uploads = realSimples.map(async (day) => {
    const entries = [
      { data: day.data, periodo: "Manhã", versao: "simples", versiculo: day.manha.versiculo, topicos: day.manha.topicos, promessa: day.manha.promessa, meditacao: day.manha.meditacao },
      { data: day.data, periodo: "Noite", versao: "simples", versiculo: day.noite.versiculo, topicos: day.noite.topicos, promessa: day.noite.promessa, meditacao: day.noite.meditacao }
    ];
    const { error } = await supabase.from('devocionais').upsert(entries, { onConflict: 'data, periodo, versao' });
    if (error) console.error(`Erro ${day.data}:`, error.message);
    else console.log(`✅ ${day.data} corrigido com conteúdo real.`);
  });
  await Promise.all(uploads);
}
run();
