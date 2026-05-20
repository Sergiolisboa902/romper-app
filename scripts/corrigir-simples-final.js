require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const realSimples = [
  {
    data: "2026-05-14",
    periodo: "Manhã",
    versao: "simples",
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
  {
    data: "2026-05-14",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Ele cuidará das ovelhas e carregará os cordeirinhos no colo (…)", referencia: "Is 40:11" },
    topicos: [
      { ordem: 1, icone: "🐑", titulo: "Cuidado com os Fracos", conteudo: "Jesus é o Bom Pastor que tem um carinho especial por quem se sente fraco ou pequeno. Ele nos comprou e prometeu cuidar de cada um de nós.", tags: ["cuidado", "compaixão"] },
      { ordem: 2, icone: "🛡️", titulo: "Proteção Suave", conteudo: "Muitas vezes Deus nos poupa de lutas muito grandes porque sabe que nossa força é pequena. Ele cuida do nosso caminho com muita bondade.", tags: ["proteção", "bondade"] },
      { ordem: 3, icone: "🍼", titulo: "Fé Simples", conteudo: "Jesus gosta da fé simples que confia na promessa exatamente como ela é escrita. Essa confiança nos coloca acima das dificuldades do mundo.", tags: ["fé", "simplicidade"] },
      { ordem: 4, icone: "🤗", titulo: "Segurança no Colo", conteudo: "Estar nos braços de Jesus é ter amor total e segurança perfeita. Para alguém te ferir ali, teria que ferir o próprio Pastor primeiro.", tags: ["amor", "descanso"] }
    ],
    promessa: "Nos braços de Jesus, você está totalmente seguro e protegido.",
    meditacao: "Descanse hoje na ternura infinita Daquele que te carrega no colo."
  },
  {
    data: "2026-05-15",
    periodo: "Manhã",
    versao: "simples",
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
  {
    data: "2026-05-15",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "(…) as pessoas que Deus tornou perfeitas", referencia: "Hb 12:23" },
    topicos: [
      { ordem: 1, icone: "⚖️", titulo: "Em Construção", conteudo: "Deus está trabalhando em nós. Ele já nos aceitou através de Jesus e agora o Espírito Santo está nos transformando dia após dia.", tags: ["processo", "mudança"] },
      { ordem: 2, icone: "🧼", titulo: "Fim do Pecado", conteudo: "Um dia Deus vai terminar Sua obra e seremos completamente livres de pensamentos ruins e falhas. Seremos santos como Ele é santo.", tags: ["esperança", "santidade"] },
      { ordem: 3, icone: "🔥", titulo: "Preparado para o Céu", conteudo: "A morte para o cristão é apenas o último passo da limpeza da alma, nos deixando prontos para viver na presença gloriosa do Pai.", tags: ["céu", "transformação"] },
      { ordem: 4, icone: "🌱", titulo: "Comece Hoje", conteudo: "Embora a perfeição venha depois, devemos buscar viver de forma limpa hoje mesmo. Deixe a graça de Deus agir no seu presente.", tags: ["atitude", "vigilância"] }
    ],
    promessa: "Deus vai completar em você a obra maravilhosa que Ele já começou.",
    meditacao: "Confie no trabalho que o Espírito Santo está fazendo no seu coração nesta noite."
  },
  {
    data: "2026-05-16",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "(…) Deus, que nos dá tudo com fartura para a nossa alegria", referencia: "1Tm 6:17" },
    topicos: [
      { ordem: 1, icone: " Fountain", titulo: "Bondade sem Fim", conteudo: "Jesus nunca para de nos abençoar. Ele é como um sol que sempre brilha e um rio de bondade que nunca seca para os Seus filhos.", tags: ["generosidade", "graça"] },
      { ordem: 2, icone: "🗓️", titulo: "Banquete Diário", conteudo: "Todos os dias temos motivos para celebrar o cuidado de Deus. Suas misericórdias se renovam a cada manhã e nos sustentam todas as noites.", tags: ["cuidado", "provisão"] },
      { ordem: 3, icone: "⏳", titulo: "Tempo de Bençãos", conteudo: "Cada hora que passa é uma nova oportunidade de sentir a bondade de Deus. Sua afeição por nós é como areia dourada cobrindo nosso tempo.", tags: ["tempo", "amor"] },
      { ordem: 4, icone: "🎻", titulo: "Coração Grato", conteudo: "Como podemos não agradecer a Alguém que nos dá tanto? Que o nosso louvor seja tão constante quanto a generosidade de Deus.", tags: ["gratidão", "louvor"] }
    ],
    promessa: "Deus te dá todas as coisas em abundância para que você seja verdadeiramente feliz.",
    meditacao: "Comece seu dia agradecendo pelas infinitas pequenas demonstrações do amor de Deus."
  },
  {
    data: "2026-05-16",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "(…) este vale ficará cheio de água (…)", referencia: "2Rs 3:17" },
    topicos: [
      { ordem: 1, icone: "🕳️", titulo: "Prepare o Terreno", conteudo: "Deus quer nos abençoar, mas espera que estejamos prontos. Prepare seu coração através da oração para receber o que Ele tem para dar.", tags: ["preparação", "oração"] },
      { ordem: 2, icone: "🤫", titulo: "Bençãos Silenciosas", conteudo: "Muitas vezes Deus age de forma silenciosa e inesperada. Ele tem Seus próprios jeitos de encher nossa vida de paz sem precisarmos ver tempestades.", tags: ["soberania", "mistério"] },
      { ordem: 3, icone: "🌊", titulo: "Mais que o Suficiente", conteudo: "A provisão de Deus sempre atende a todas as nossas necessidades. No Evangelho, encontramos tudo o que a nossa alma precisa para ser saciada.", tags: ["plenitude", "provisão"] },
      { ordem: 4, icone: "⛏️", titulo: "Minha Parte", conteudo: "O que você está fazendo para se aproximar de Jesus? Esteja pronto e com expectativa, pois o Senhor está disposto a te abençoar hoje.", tags: ["ação", "expectativa"] }
    ],
    promessa: "Deus vai preencher os vazios da sua vida com uma abundância extraordinária.",
    meditacao: "Receba com gratidão o que Deus preparou para você nesta noite."
  },
  {
    data: "2026-05-17",
    periodo: "Manhã",
    versao: "simples",
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
  {
    data: "2026-05-17",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "(…) Você é meu servo, Eu te escolhi (…)", referencia: "Is 41:9" },
    topicos: [
      { ordem: 1, icone: "🧤", titulo: "Servo por Amor", conteudo: "Servir a Deus é uma honra que nos liberta do mal. Vestimos o 'uniforme' da bondade e obedecemos aos Seus ensinamentos com alegria.", tags: ["serviço", "liberdade"] },
      { ordem: 2, icone: "♾️", titulo: "Escolha Eterna", conteudo: "Deus nos escolheu muito antes de nascermos. Esse convite não foi por nosso mérito, mas pela graça infinita e soberana do Senhor.", tags: ["escolha", "graça"] },
      { ordem: 3, icone: "💍", titulo: "Amor Fiel", conteudo: "O amor de Jesus por nós não muda nunca. Ele se comprometeu com a Sua igreja para sempre e a Sua fidelidade é a nossa maior segurança.", tags: ["fidelidade", "aliança"] },
      { ordem: 4, icone: "⚓", titulo: "Gratidão Infinita", conteudo: "Deus sabia de todas as nossas falhas e mesmo assim nos escolheu. Saber disso deve encher nosso coração de gratidão e confiança.", tags: ["segurança", "gratidão"] }
    ],
    promessa: "Deus te ama com um amor eterno e nunca voltará atrás na Sua escolha.",
    meditacao: "Agradeça nesta noite por pertencer a um Deus tão fiel e amoroso."
  },
  {
    data: "2026-05-20",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "(…) as Tuas bondades são maravilhosas (…)", referencia: "Sl 17:7" },
    topicos: [
      { ordem: 1, icone: "❤️", titulo: "Amor em Cada Detalhe", conteudo: "Deus nos dá Seus presentes com todo o amor do Seu coração. Ele não apenas nos sustenta, mas tempera cada benção com Sua presença especial.", tags: ["amor", "provisão"] },
      { ordem: 2, icone: "💰", titulo: "Presentes Valiosos", conteudo: "Quando Deus nos dá Sua graça, Ele o faz com tanto carinho que o jeito como recebemos o presente é tão valioso quanto o próprio presente.", tags: ["graça", "valor"] },
      { ordem: 3, icone: "🧺", titulo: "Cuidado Pessoal", conteudo: "As misericórdias de Deus vêm marcadas com o sacrifício de Jesus. Ele Se importa pessoalmente com cada necessidade nossa.", tags: ["misericórdia", "cuidado"] },
      { ordem: 4, icone: "🍯", titulo: "Doçura na Alma", conteudo: "Existe uma alegria na presença de Deus que só quem vive em amizade com Ele consegue entender. É como um favo de mel para a alma.", tags: ["alegria", "comunhão"] }
    ],
    promessa: "Deus dá com generosidade e Se alegra em ser bondoso com você.",
    meditacao: "Busque provar dessa felicidade única que só a presença de Deus oferece."
  },
  {
    data: "2026-05-20",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Eu os atraí com laços de amor (…)", referencia: "Os 11:4" },
    topicos: [
      { ordem: 1, icone: "🪢", titulo: "Atraídos pelo Amor", conteudo: "Deus tenta nos aproximar dEle através do Seu amor, mas às vezes demoramos a responder. Ele quer que tenhamos uma fé simples nEle.", tags: ["amor", "fé"] },
      { ordem: 2, icone: "🚪", titulo: "Convite para Cear", conteudo: "Jesus nos convida para ter intimidade com Ele, como em um grande banquete. Não fique parado na porta; entre e desfrute da Sua companhia.", tags: ["intimidade", "convite"] },
      { ordem: 3, icone: "💍", titulo: "Compromisso Eterno", conteudo: "Ele nos ama tanto que se uniu a nós através de um compromisso eterno. Esse amor é tão forte que nada pode quebrá-lo.", tags: ["compromisso", "união"] },
      { ordem: 4, icone: "🌾", titulo: "Aprenda pelo Amor", conteudo: "Se não ouvirmos a voz mansa do amor de Deus, Ele poderá usar as dificuldades para nos guiar. Escolha ser guiado pela bondade dEle hoje.", tags: ["obediência", "direção"] }
    ],
    promessa: "Lance todas as suas preocupações sobre Deus, pois Ele cuida de você com amor.",
    meditacao: "Aproxime-se de Deus agora mesmo; deixe de lado as preocupações e louve ao Senhor."
  },
  {
    data: "2026-05-21",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "Se é que vocês já provaram como o Senhor é bom", referencia: "1Pe 2:3" },
    topicos: [
      { ordem: 1, icone: "👅", titulo: "Sentir na Prática", conteudo: "Não se contente apenas em ouvir sobre a bondade de Deus. É necessário sentir a paz e o amor do Senhor na sua própria vida, dia após dia.", tags: ["experiência", "paz"] },
      { ordem: 2, icone: "⚓", titulo: "Certeza Real", conteudo: "Busque ter a plena certeza de que você é um filho amado. Deixe que o Espírito Santo confirme no seu coração que você pertence a Deus.", tags: ["certeza", "identidade"] },
      { ordem: 3, icone: "🧱", titulo: "Verdades que não Mudam", conteudo: "Construa sua vida sobre as promessas eternas de Deus. Elas são como uma âncora firme que nos mantém seguros em qualquer tempestade.", tags: ["firmeza", "segurança"] },
      { ordem: 4, icone: "🥛", titulo: "Vida Abundante", conteudo: "Deixe para trás a desconfiança e entre na paz que Deus oferece. Ele preparou uma vida cheia de provisão e descanso para você.", tags: ["paz", "descanso"] }
    ],
    promessa: "Eu sei em quem tenho confiado e Ele é poderoso para cuidar de tudo o que entreguei a Ele.",
    meditacao: "Avance para além das dúvidas e desfrute da paz que o Senhor preparou."
  },
  {
    data: "2026-05-21",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "(…) há mantimentos onde você não espera (…)", referencia: "Gn 42:2" },
    topicos: [
      { ordem: 1, icone: "🌾", titulo: "Ajuda Inesperada", conteudo: "Deus guarda provisões para o Seu povo em lugares onde nem imaginamos. Existe um plano de cuidado escondido em meio às suas lutas.", tags: ["providência", "cuidado"] },
      { ordem: 2, icone: "🐦", titulo: "Deus Proverá", conteudo: "Se os recursos humanos falharem, Deus usará meios extraordinários para te sustentar. Descanse no Senhor e confie no Seu sustento.", tags: ["milagre", "confiança"] },
      { ordem: 3, icone: "🗝️", titulo: "Poder de Jesus", conteudo: "Tudo o que acontece na nossa vida está sob o controle absoluto de Jesus. Ele tem as chaves da provisão e cuida de cada detalhe.", tags: ["soberania", "poder"] },
      { ordem: 4, icone: "🤲", titulo: "Pedir com Fé", conteudo: "A oração te leva direto ao coração de Deus. Ele não é duro nem indiferente; Ele ouve o seu pedido e tem o necessário para te ajudar.", tags: ["oração", "fé"] }
    ],
    promessa: "De some way and from somewhere the Lord will deliver you.",
    meditacao: "Deus pode transformar sua maior dificuldade em um canal de grandes alegrias."
  },
  {
    data: "2026-05-22",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "E os levou pelo caminho certo (…)", referencia: "Sl 107:7" },
    topicos: [
      { ordem: 1, icone: "🌑", titulo: "Crescer na Escuridão", conteudo: "Os momentos de dúvida e as fases difíceis fazem parte do plano de Deus para te tornar mais forte e maduro na fé.", tags: ["maturidade", "prova"] },
      { ordem: 2, icone: "🌊", titulo: "Testando a Fé", conteudo: "As provações são como ondas que nos empurram para a rocha. Elas servem para testar nossa confiança e nos guiar ao destino certo.", tags: ["fortalecimento", "direção"] },
      { ordem: 3, icone: "🗺️", titulo: "Plano de Deus", conteudo: "Nada do que você passa está fora do controle de Deus. Suas lutas são peças necessárias para a construção do seu caráter cristão.", tags: ["soberania", "caráter"] },
      { ordem: 4, icone: "⚓", titulo: "Destino Seguro", conteudo: "Através desses desafios, sua alma permanece viva e focada no céu. Aprenda a ver valor mesmo nos momentos de tentação.", tags: ["perseverança", "foco"] }
    ],
    promessa: "Tudo cooperará para o seu bem porque Deus está no controle de tudo.",
    meditacao: "Fique calmo e confie que o plano de Deus para você é santo e sábio."
  },
  {
    data: "2026-05-22",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Como você é bonito, meu amado (…)", referencia: "Ct 1:16" },
    topicos: [
      { ordem: 1, icone: "🏔️", titulo: "Visão Renovada", conteudo: "Cada fase da nossa vida nos mostra um lado diferente da beleza de Jesus. Ele continua sendo maravilhoso em todas as situações.", tags: ["beleza", "experiência"] },
      { ordem: 2, icone: "🦁", titulo: "Beleza nas Lutas", conteudo: "Vimos Jesus agir em meio aos perigos e Ele nunca perdeu Seu encanto. Ele traz consolo e amabilidade mesmo nos dias mais difíceis.", tags: ["fidelidade", "consolo"] },
      { ordem: 3, icone: "🔮", titulo: "Sempre Perfeito", conteudo: "Seja na manjedoura ou no trono, Jesus é inigualável. Cada vez que olhamos para Ele, descobrimos novas qualidades e novas graças.", tags: ["perfeição", "cristo"] },
      { ordem: 4, icone: "♾️", titulo: "Brilho Eterno", conteudo: "O tempo não consegue apagar a glória de Jesus. Ele se torna ainda mais maravilhoso conforme caminhamos com Ele rumo à eternidade.", tags: ["eternidade", "majestade"] }
    ],
    promessa: "Jesus é perfeito em cada traço do Seu caráter, hoje e para sempre.",
    meditacao: "Deixe seu coração se maravilhar com a beleza indescritível do seu Salvador nesta noite."
  },
  {
    data: "2026-05-23",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "O Senhor completará o que começou em mim (…)", referencia: "Sl 138:8" },
    topicos: [
      { ordem: 1, icone: "⚓", titulo: "Confiança Real", conteudo: "Não dependa da sua própria força. Qualquer confiança que não esteja em Deus acabará falhando quando você mais precisar.", tags: ["confiança", "firmeza"] },
      { ordem: 2, icone: "🏗️", titulo: "Obra de Deus", conteudo: "Foi o Senhor quem começou a transformar sua vida e é Ele quem vai continuar. Dependemos totalmente da graça dEle para sermos salvos.", tags: ["graça", "soberania"] },
      { ordem: 3, icone: "🛡️", titulo: "Vencer a Dúvida", conteudo: "A falta de fé tenta nos convencer de que nunca venceremos o pecado. Mas Deus prometeu que vai nos levar em segurança até o fim.", tags: ["vitória", "perseverança"] },
      { ordem: 4, icone: "🏗️", titulo: "Tudo vem dEle", conteudo: "Deus fez tudo no passado, faz tudo no presente e fará tudo no futuro. Nossa segurança está no que o Senhor realiza por nós.", tags: ["dependência", "segurança"] }
    ],
    promessa: "O Senhor vai terminar com perfeição a obra que Ele iniciou no seu coração.",
    meditacao: "Descanse na certeza de que Deus é fiel para completar o que planejou para você."
  },
  {
    data: "2026-05-23",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Você não me trouxe ofertas com o coração generoso (…)", referencia: "Is 43:24" },
    topicos: [
      { ordem: 1, icone: "🏺", titulo: "Cuidado com a Frieza", conteudo: "Muitas vezes nos tornamos econômicos demais com Deus, mostrando que nosso coração esfriou. Avalie se você tem sido grato por tudo o que recebe.", tags: ["generosidade", "gratidão"] },
      { ordem: 2, icone: "🩸", titulo: "Preço de Amor", conteudo: "Jesus deu a própria vida por nós. Como resposta, devemos entregar tudo o que somos e temos para honrar o Seu sacrifício.", tags: ["consagração", "sacrifício"] },
      { ordem: 3, icone: "🌸", titulo: "Pequenos Gestos", conteudo: "Deus recebe com muito amor até o menor sinal de afeição sincera, como uma mãe recebe com alegria um presente simples de um filho.", tags: ["amor", "aceitação"] },
      { ordem: 4, icone: "🌾", titulo: "Melhores Frutos", conteudo: "Decida hoje não ser mais mesquinho com o Senhor. Entregue o seu melhor para Ele e reconheça que tudo o que você tem vem das mãos dEle.", tags: ["devoção", "prioridade"] }
    ],
    promessa: "Deus valoriza cada demonstração sincera de amor que você oferece a Ele.",
    meditacao: "Nada é tão valioso para Deus quanto o tributo do seu amor sincero."
  },
  {
    data: "2026-05-24",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "Bendito seja Deus, que ouviu a minha oração (…)", referencia: "Sl 66:20" },
    topicos: [
      { ordem: 1, icone: "❄️", titulo: "Orações Simples", conteudo: "É maravilhoso perceber como Deus responde até as nossas orações mais fracas e sem fôlego. Ele tem uma paciência infinita conosco.", tags: ["oração", "misericórdia"] },
      { ordem: 2, icone: "☁️", titulo: "Sempre Presente", conteudo: "Mesmo quando você se afasta da oração, Deus não te abandona. A presença dEle continua disponível e esperando por você.", tags: ["presença", "fidelidade"] },
      { ordem: 3, icone: "⚡", titulo: "Socorro na Hora Certa", conteudo: "É incrível como o Senhor atende nossos pedidos desesperados que fazemos conforme nossas necessidades aparecem. Ele é um Pai atento.", tags: ["dependência", "cuidado"] },
      { ordem: 4, icone: "🕊️", titulo: "Orar com o Coração", conteudo: "Deixe que a bondade de Deus te motive a conversar com Ele em todos os momentos, guiado pela paz do Espírito Santo.", tags: ["comunhão", "espírito"] }
    ],
    promessa: "Deus nunca rejeita uma oração sincera nem retira a Sua misericórdia da sua vida.",
    meditacao: "Deus ouve você mesmo quando você não sabe bem o que dizer; confie na paciência dEle."
  },
  {
    data: "2026-05-24",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Vivam de modo digno do evangelho (…)", referencia: "Fp 1:27" },
    topicos: [
      { ordem: 1, icone: "🏙️", titulo: "Cidadão do Céu", conteudo: "Como pertencemos ao reino de Deus, nossas atitudes devem refletir isso. Busque a simplicidade e a verdade inegável em tudo o que fizer.", tags: ["conduta", "identidade"] },
      { ordem: 2, icone: "🛡️", titulo: "Fiel à Verdade", conteudo: "O Evangelho é puro e corajoso. Seja firme na sua fé e fale a verdade com amor, independentemente do que os outros pensem.", tags: ["verdade", "coragem"] },
      { ordem: 3, icone: "🍯", titulo: "Atitudes Doces", conteudo: "Busque tratar as pessoas com gentileza e compaixão. Que suas palavras e ações ajudem a unir as pessoas e a mostrar o amor de Deus.", tags: ["gentileza", "amor"] },
      { ordem: 4, icone: "🧼", titulo: "Ser como Jesus", conteudo: "O Evangelho é santo. Esforce-se todos os dias para se afastar do mal e se tornar cada vez mais parecido com Jesus em tudo.", tags: ["santidade", "esforço"] }
    ],
    promessa: "Viver de modo correto traz honra ao nome do Senhor e paz ao seu coração.",
    meditacao: "Que a sua vida seja uma demonstração clara do amor de Cristo para todos ao seu redor."
  },
  {
    data: "2026-05-25",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "Não me abandone, Senhor (…)", referencia: "Sl 38:21" },
    topicos: [
      { ordem: 1, icone: "👶", titulo: "Dependência de Filho", conteudo: "Como uma criança precisa da mão dos pais para andar, nós precisamos da ajuda de Deus em cada passo. Sozinhos, nós nos perdemos.", tags: ["dependência", "cuidado"] },
      { ordem: 2, icone: "☀️", titulo: "Em Todo Momento", conteudo: "Precisamos dessa ajuda tanto nos dias felizes quanto nos dias tristes. Peça a Deus que esteja presente em todas as suas situações.", tags: ["oração", "presença"] },
      { ordem: 3, icone: "🛡️", titulo: "Refúgio Seguro", conteudo: "Deus cuida de nós como um pássaro protege seus filhotes sob as asas. Sinta-se seguro e protegido no abrigo que Ele oferece.", tags: ["segurança", "proteção"] },
      { ordem: 4, icone: "⚓", titulo: "Força na Fé", conteudo: "Não confie na sua própria força, mesmo quando se sentir firme. É Deus quem nos sustenta e nos impede de cair no orgulho.", tags: ["humildade", "firmeza"] }
    ],
    promessa: "O Senhor é o seu refúgio e a sua força em todos os momentos.",
    meditacao: "Peça ao Senhor que te sustente e você caminhará seguro em toda a jornada."
  },
  {
    data: "2026-05-25",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Eles contaram o que lhes tinha acontecido no caminho (…)", referencia: "Lc 24:33,35" },
    topicos: [
      { ordem: 1, icone: "🕯️", titulo: "Falar do Amor", conteudo: "O amor por Jesus nos motiva a contar as boas notícias. Não deixe que o cansaço ou o medo te impeçam de falar do que Deus fez.", tags: ["testemunho", "amor"] },
      { ordem: 2, icone: "🗣️", titulo: "Compartilhar a Fé", conteudo: "Os primeiros cristãos tinham prazer em contar suas experiências com Deus. Falar do que vivemos com o Senhor fortalece toda a igreja.", tags: ["comunhão", "evangelismo"] },
      { ordem: 3, icone: "🧩", titulo: "Histórias que se Somam", conteudo: "Cada cristão tem uma história única que ajuda a completar o entendimento do grupo sobre quem Deus é. Seu testemunho é importante.", tags: ["unidade", "igreja"] },
      { ordem: 4, icone: "🚩", titulo: "Não se Cale", conteudo: "Não esconda a verdade preciosa que você recebeu. Conte as grandes coisas que Deus nos mostrou e incentive outros.", tags: ["coragem", "ação"] }
    ],
    promessa: "Onde houver pessoas reunidas em Meu nome, Eu estarei presente para abençoar.",
    meditacao: "Sua história com Jesus é uma ferramenta poderosa para abençoar outras vidas."
  },
  {
    data: "2026-05-26",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "Entregue seus problemas ao Senhor, e Ele te sustentará (…)", referencia: "Sl 55:22" },
    topicos: [
      { ordem: 1, icone: "⚖️", titulo: "Preocupação é Orgulho", conteudo: "Preocupar-se demais mostra que achamos que somos mais espertos que Deus. A ansiedade tenta roubar o lugar da confiança no Senhor.", tags: ["ansiedade", "fé"] },
      { ordem: 2, icone: "💧", titulo: "Busque a Fonte Certa", conteudo: "Tentar carregar o fardo sozinho nos leva a procurar soluções erradas. Vá direto a Deus, que é a fonte de água viva e descanso.", tags: ["dependência", "escolha"] },
      { ordem: 3, icone: "❄️", titulo: "Fé que Esfria", conteudo: "A ansiedade nos faz duvidar que Deus é bom e faz nosso amor por Ele diminuir. Confie na bondade do Pai para manter seu coração aquecido.", tags: ["fé", "amor"] },
      { ordem: 4, icone: "⚓", titulo: "Lançar o Fardo", conteudo: "Com uma fé simples, coloque cada peso nas mãos de Deus e não fique inquieto. Ele prometeu te manter firme e perto dEle.", tags: ["confiança", "paz"] }
    ],
    promessa: "Deus conservará em paz absoluta aquele que mantém a mente focada nEle.",
    meditacao: "Não tente fazer por conta própria o que Deus prometeu fazer por você."
  },
  {
    data: "2026-05-26",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "(…) continuar firmes na fé (…)", referencia: "At 14:22" },
    topicos: [
      { ordem: 1, icone: "🚩", titulo: "Sempre em Frente", conteudo: "O cristão é conhecido pela sua perseverança. Continuar lutando e vencendo é o que nos mantém no caminho de Deus. O lema é: crescer.", tags: ["perseverança", "vitória"] },
      { ordem: 2, icone: "🎡", titulo: "Foco no Alvo", conteudo: "O mundo tenta nos distrair com prazeres passageiros e ilusões. Fique atento para não parar sua caminhada por causa de diversões vazias.", tags: ["mundo", "vigilância"] },
      { ordem: 3, icone: "🏹", titulo: "Vencer Ataques", conteudo: "O mal fará de tudo para te convencer a desistir da sua fé. Fique firme e não ouça as vozes que tentam te desanimar da caminhada.", tags: ["combate", "firmeza"] },
      { ordem: 4, icone: "🛡️", titulo: "Proteja sua Fé", conteudo: "Use sua armadura espiritual e clame a Deus por força para aguentar até o fim. Fique firme naquilo que você aprendeu sobre Deus.", tags: ["proteção", "firmeza"] }
    ],
    promessa: "Aquele que permanecer firme até o fim receberá a salvação eterna.",
    meditacao: "A vitória de ontem não é suficiente para o dia de hoje; continue perseverando sempre."
  },
  {
    data: "2026-05-27",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "Mefibosete comia sempre à mesa do rei, embora tivesse deficiência nos pés", referencia: "2Sm 9:13" },
    topicos: [
      { ordem: 1, icone: "🍽️", titulo: "Convidado Especial", conteudo: "Deus nos convida para Sua mesa porque vê em nós a semelhança de Jesus. Ele nos trata com um favor que não merecemos por amor ao Seu Filho.", tags: ["favor", "adoção"] },
      { ordem: 2, icone: "🐶", titulo: "Humildade Real", conteudo: "Podemos nos sentir sem valor, mas nossas falhas não nos tiram o direito de sermos filhos de Deus. Ele nos honra apesar das nossas fraquezas.", tags: ["humildade", "honra"] },
      { ordem: 3, icone: "🏰", titulo: "Força na Fraqueza", conteudo: "Quem se sente fraco é herdeiro de Deus tanto quanto o forte. Estar com o Rei é a melhor proteção para as nossas limitações.", tags: ["graça", "poder"] },
      { ordem: 4, icone: "🦴", titulo: "Cuidado e Apoio", conteudo: "Quem tem pouca fé pode se sentir mais exposto, mas Deus ajuda o fraco a caminhar e a se fortalecer na Sua presença.", tags: ["cuidado", "fortalecimento"] }
    ],
    promessa: "Suas limitações não impedem você de ser um filho amado e honrado por Deus.",
    meditacao: "Sacie sua alma hoje com o alimento espiritual que o Rei preparou para você."
  },
  {
    data: "2026-05-27",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Quem sou eu para que o Senhor olhe para alguém como eu?", referencia: "2Sm 9:8" },
    topicos: [
      { ordem: 1, icone: "🙇", titulo: "Luz e Humildade", conteudo: "Quanto mais conhecemos a Deus, menos nos orgulhamos de nós mesmos. A luz de Deus revela quem realmente somos e nos torna humildes.", tags: ["humildade", "revelação"] },
      { ordem: 2, icone: "🧬", titulo: "Pequenos Diante dEle", conteudo: "Somos limitados e falhos, mas a graça de Deus nos torna especiais. É uma maravilha perceber que Deus se importa com seres tão pequenos.", tags: ["natureza", "maravilha"] },
      { ordem: 3, icone: "💒", titulo: "Amor Inexplicável", conteudo: "Por que Jesus escolheria nos amar tanto? Ele deixou a paz do céu para buscar pessoas como nós e nos tornar Sua família amada.", tags: ["amor", "escolha"] },
      { ordem: 4, icone: "🎺", titulo: "Louve a Jesus", conteudo: "Dê toda a glória ao nosso Salvador. Mesmo sendo pequenos e falhos, fomos alvos de um amor imenso e de uma graça maravilhosa.", tags: ["louvor", "glória"] }
    ],
    promessa: "O Senhor Jesus decidiu amar você exatamente como você é.",
    meditacao: "Reconhecer nossa própria limitação é o primeiro passo para exaltar a graça de Deus."
  },
  {
    data: "2026-05-28",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "(…) aos que Ele aceitou, a esses também deu glória", referencia: "Rm 8:30" },
    topicos: [
      { ordem: 1, icone: "👑", titulo: "Fim das Lutas", conteudo: "Suas dificuldades logo vão acabar. Uma recompensa gloriosa e uma vida de paz estão preparadas para você no futuro com Deus.", tags: ["esperança", "glória"] },
      { ordem: 2, icone: "🔥", titulo: "Elo Eterno", conteudo: "Se Deus te chamou, nada pode te separar do amor dEle. Nenhuma perseguição ou dificuldade consegue quebrar esse vínculo de proteção.", tags: ["segurança", "amor"] },
      { ordem: 3, icone: "👼", titulo: "Preparado para o Lar", conteudo: "Você está vivendo aqui para ser moldado para o céu. Quando estiver pronto, Deus te levará para o lugar de paz eterna.", tags: ["transição", "céu"] },
      { ordem: 4, icone: "🎵", titulo: "Canção Sem Fim", conteudo: "O céu está de portas abertas. Uma alegria eterna está quase começando para você. Fique firme, o melhor está por vir.", tags: ["alegria", "eternidade"] }
    ],
    promessa: "Absolutamente nada neste mundo pode te separar do amor infinito de Deus.",
    meditacao: "O coração Daquele que te perdoou bate com um amor sem fim por você hoje."
  },
  {
    data: "2026-05-28",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "Vou guardar isso na mente para ter esperança", referencia: "Lm 3:21" },
    topicos: [
      { ordem: 1, icone: "🧠", titulo: "Mudar o Foco", conteudo: "Muitas vezes nossa memória só nos traz tristezas. Mas a sabedoria de Deus nos ajuda a lembrar de coisas que nos trazem conforto.", tags: ["mente", "sabedoria"] },
      { ordem: 2, icone: "⚔️", titulo: "Vencer o Desânimo", conteudo: "Use suas lembranças para combater o orgulho e o desespero. Lembrar do que Deus já fez restaura nossa vida e nos dá esperança.", tags: ["esperança", "foco"] },
      { ordem: 3, icone: "🕯️", titulo: "Luz no Passado", conteudo: "Nas horas difíceis, busque na sua história os momentos em que Deus foi bom. Isso vai iluminar o seu presente com confiança.", tags: ["consolo", "gratidão"] },
      { ordem: 1, icone: "🌸", titulo: "Lembrar da Bondade", conteudo: "Abra o livro da sua memória e veja as misericórdias de Deus registradas ali. Lembrar da graça é o melhor remédio para a alma.", tags: ["gratidão", "paz"] }
    ],
    promessa: "As bondades de Deus são a única razão de não sermos destruídos; elas se renovam a cada manhã.",
    meditacao: "Treine sua mente para ser um arquivo de esperanças e vitórias, e não de reclamações."
  },
  {
    data: "2026-05-29",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "Você odeia o que é errado (…)", referencia: "Sl 45:7" },
    topicos: [
      { ordem: 1, icone: "⚡", titulo: "Amo o Bem", conteudo: "Não existe bondade real sem um afastamento do que é ruim. Quem ama a verdade deve naturalmente rejeitar a mentira.", tags: ["justiça", "caráter"] },
      { ordem: 2, icone: "⚔️", titulo: "Luta pela Santidade", conteudo: "Em um coração onde Jesus vive, há uma resistência contra o mal. Deus não aceita o pecado em Sua presença e quer nos purificar.", tags: ["santidade", "combate"] },
      { ordem: 3, icone: "🩸", titulo: "Morte do Mal", conteudo: "Jesus morreu e ressuscitou para vencer o poder do mal na nossa vida. Ele conquistou a vitória final sobre tudo o que é errado.", tags: ["redenção", "vitória"] },
      { ordem: 4, icone: "⚖️", titulo: "Justiça Total", conteudo: "Deus é perfeitamente justo e um dia acabará com toda a maldade no universo. Ele é o grande campeão da justiça e do bem.", tags: ["julgamento", "glória"] }
    ],
    promessa: "Deus te dará uma alegria maior do que a de qualquer outra pessoa se você amar a justiça.",
    meditacao: "Afastar-se do pecado é a maior prova de que você ama a Deus."
  },
  {
    data: "2026-05-29",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "(…) Erro reconstruído traz maldição (…)", referencia: "Js 6:26" },
    topicos: [
      { ordem: 1, icone: "🧱", titulo: "Vencer o Erro", conteudo: "Muitos sistemas de erro caíram pelo poder da fé. Devemos orar para que essas mentiras nunca voltem a enganar as pessoas.", tags: ["fé", "história"] },
      { ordem: 2, icone: "🧹", titulo: "Limpeza Interior", conteudo: "Precisamos tirar todo o erro do nosso coração e lutar contra a mentira através de uma vida de oração e verdade.", tags: ["pureza", "oração"] },
      { ordem: 3, icone: "📖", titulo: "Espalhe a Verdade", conteudo: "O que você tem feito para levar a Bíblia para outros? Espalhar a palavra de Deus é a melhor arma contra as mentiras do mal.", tags: ["testemunho", "verdade"] },
      { ordem: 4, icone: "🚩", titulo: "Honrar a Deus", conteudo: "Se fizermos a nossa parte para defender a verdade, a glória de Deus brilhará. Decida hoje o que você fará por essa causa.", tags: ["ação", "zelo"] }
    ],
    promessa: "A verdade do Senhor vai permanecer firme para todo o sempre.",
    meditacao: "Seja um defensor da luz e não permita que sistemas de erro dominem sua vida."
  },
  {
    data: "2026-05-30",
    periodo: "Manhã",
    versao: "simples",
    versiculo: { texto: "Peguem as pequenas raposas que estragam as plantações (…)", referencia: "Ct 2:15" },
    topicos: [
      { ordem: 1, icone: "🦊", titulo: "Pequenos Deslizes", conteudo: "Pequenos pecados podem causar grandes danos. Fique atento às pequenas atitudes erradas que tentam estragar o seu coração.", tags: ["vigilância", "cuidado"] },
      { ordem: 2, icone: "🧱", titulo: "Barreira Invisível", conteudo: "Às vezes não sentimos a presença de Jesus por causa de erros que achamos insignificantes. Essas 'pedrinhas' formam um muro.", tags: ["comunhão", "santidade"] },
      { ordem: 3, icone: "🌊", titulo: "Cuidado com Detalhes", conteudo: "Assim como gotas formam o mar, pequenas falhas repetidas podem destruir sua caminhada com Deus. Não ignore os detalhes.", tags: ["perigo", "alerta"] },
      { ordem: 4, icone: "🏹", titulo: "Agir Agora", conteudo: "Jesus te convida a vencer esses pequenos erros com a ajuda dEle. Com a força de Deus, você pode tirar essas 'raposas' da sua vida.", tags: ["vitória", "ação"] }
    ],
    promessa: "Se você seguir os ensinamentos de Jesus, o amor dEle permanecerá em você.",
    meditacao: "Não perca a companhia de Cristo por causa de erros que parecem sem importância."
  },
  {
    data: "2026-05-30",
    periodo: "Noite",
    versao: "simples",
    versiculo: { texto: "(…) para não sermos mais escravos do erro", referencia: "Rm 6:6" },
    topicos: [
      { ordem: 1, icone: "🔥", titulo: "Não Brinque com o Mal", conteudo: "Você já sabe que o pecado traz sofrimento. Por que voltaria para algo que já te machucou antes? Fuja do perigo enquanto é tempo.", tags: ["sabedoria", "vigilância"] },
      { ordem: 2, icone: "⛓️", titulo: "Falsa Promessa", conteudo: "O erro nunca cumpre o que promete. Lembre-se de como você se sentia quando estava longe de Deus e não volte para essa prisão.", tags: ["liberdade", "memória"] },
      { ordem: 3, icone: "💰", titulo: "Preço do Erro", conteudo: "Pecar custa muito caro para um cristão. O erro rouba sua paz, atrapalha suas orações e te afasta da intimidade com Deus.", tags: ["paz", "oração"] },
      { ordem: 4, icone: "🔙", titulo: "Volte para Jesus", conteudo: "Se você falhou hoje, não desanime. Jesus te chama para o arrependimento agora. A graça dEle ainda está disponível para você.", tags: ["arrependimento", "graça"] }
    ],
    promessa: "Seus pecados são perdoados; pode seguir a sua vida em paz.",
    meditacao: "Servir ao erro é como ignorar o sacrifício que Jesus fez por você na cruz."
  }
];

async function run() {
  console.log('🧹 Limpando e subindo conteúdo REAL (Upsert individual)...');
  
  for (const entry of realSimples) {
    const { error } = await supabase
      .from('devocionais')
      .upsert(entry, { onConflict: 'data, periodo, versao' });
      
    if (error) {
      console.error(`❌ Erro em ${entry.data} (${entry.periodo}):`, error.message);
    } else {
      console.log(`✅ ${entry.data} (${entry.periodo}) atualizado.`);
    }
  }
  
  console.log('🏁 Processo de correção concluído!');
}
run();
