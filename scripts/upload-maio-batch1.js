require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-01",
    manha: {
      versiculo: { texto: "As suas faces são como um canteiro de bálsamo, como flores perfumadas (…)", referencia: "Ct 5:13" },
      topicos: [
        { ordem: 1, icone: "🌸", titulo: "Mês das Flores", conteudo: "Os ventos de março e as chuvas de abril fizeram seu trabalho, e toda a terra é enfeitada com beleza. Venha, minha alma, coloque teu traje de férias e saia para recolher guirlandas de pensamentos celestiais.", tags: ["beleza", "criação"] },
        { ordem: 2, icone: "🌿", titulo: "Canteiros de Bálsamo", conteudo: "Tu sabes para onde ir, pois os 'canteiros de bálsamo' são bem conhecidos para ti; tantas vezes sentiste o perfume das 'flores perfumadas' que desejas ir imediatamente para o teu Bem-Amado.", tags: ["comunhão", "paz"] },
        { ordem: 3, icone: "✝️", titulo: "A Face de Cristo", conteudo: "Aquela face uma vez tão rudemente golpeada, muitas vezes orvalhada com lágrimas de compaixão; aquela face que, ao sorrir com misericórdia, é como fragrância aromática ao meu coração.", tags: ["jesus", "sacrifício"] },
        { ordem: 4, icone: "🕊️", titulo: "Comunhão Ininterrupta", conteudo: "Precioso Senhor Jesus, deixe-me deveras conhecer a bem-aventurança que habita na duradoura e ininterrupta comunhão contigo. Eu sou um pobre inútil, cuja face Te dignaste beijar!", tags: ["amor", "devoção"] }
      ],
      promessa: "O mínimo vislumbre dEle é extremamente refrescante ao meu sentido espiritual, e produz uma variedade de delícias.",
      meditacao: "Quando Ele está comigo, é mês de Maio durante todo o ano; minha alma sai para lavar seu feliz rosto no orvalho matinal de Sua graça."
    },
    noite: {
      versiculo: { texto: "EU sou a rosa de Sarom (…)", referencia: "Ct 2:1" },
      topicos: [
        { ordem: 1, icone: "🌹", titulo: "A Beleza Superior", conteudo: "Jesus Cristo possui toda a beleza em um grau dez vezes superior no mundo espiritual. Ele ganha o primeiro lugar como o mais belo entre dez mil. Ele é o sol, e tudo mais são estrelas.", tags: ["beleza", "superioridade"] },
        { ordem: 2, icone: "✨", titulo: "Rosa de Sarom", conteudo: "Jesus não é apenas 'a rosa', mas 'a rosa de Sarom', da mesma forma como Ele chama Sua justiça de 'ouro de Ofir', o melhor dos melhores. Ele é absolutamente adorável.", tags: ["excelência", "justiça"] },
        { ordem: 3, icone: "🍯", titulo: "Aroma Espiritual", conteudo: "Cada um dos sentidos da alma, seja o paladar, as sensações, a audição, a visão, o aroma espiritual, encontra plena satisfação em Jesus. Até mesmo a lembrança de Seu amor é doce.", tags: ["satisfação", "doçura"] },
        { ordem: 4, icone: "🏺", titulo: "Frasco da Memória", conteudo: "Segure a rosa de Sarom; puxe pétala por pétala; coloque-as à parte no frasco da memória e você encontrará cada uma delas perfumada muito tempo depois, enchendo a casa com aroma.", tags: ["memória", "gratidão"] }
      ],
      promessa: "O próprio Céu não possui coisa alguma que supere a rosa de Sarom.",
      meditacao: "Abençoada rosa, floresça em meu coração para sempre!"
    }
  },
  {
    data: "2026-05-02",
    manha: {
      versiculo: { texto: "Não peço que os tires do mundo (…)", referencia: "Jo 17:15" },
      topicos: [
        { ordem: 1, icone: "🏠", titulo: "Ir para Casa", conteudo: "Um doce e abençoado evento ocorrerá no tempo próprio de Deus: ir para casa para estar com Jesus. Mas Ele não pede para sermos levados imediatamente longe deste mundo.", tags: ["esperança", "céu"] },
        { ordem: 2, icone: "🌾", titulo: "Feixes Maduros", conteudo: "Cristo nos deixa nas mãos de Seu Pai até que, como feixes de trigo maduros, sejamos reunidos no celeiro de nosso Mestre. Permanecer na carne é necessário para os outros.", tags: ["propósito", "maturidade"] },
        { ordem: 3, icone: "⚖️", titulo: "Desejo Egoísta", conteudo: "A vontade de escapar dos problemas é um desejo egoísta. É correto partir se for para estar com Cristo, mas enquanto estivermos aqui, que o desejo seja glorificar a Deus.", tags: ["fidelidade", "paciência"] },
        { ordem: 4, icone: "🛡️", titulo: "Guardados do Mal", conteudo: "Jesus pede para que sejamos guardados do mal. Que sua vida glorifique a Deus mesmo em meio a duros trabalhos, conflitos e sofrimentos, até que Ele diga: 'É o suficiente'.", tags: ["proteção", "glória"] }
      ],
      promessa: "Jesus deseja que fiquemos aqui por um tempo, pois permanecer na carne é necessário para os outros.",
      meditacao: "Paciência, alma; deixe que Ele diga 'É o suficiente' no Seu tempo perfeito."
    },
    noite: {
      versiculo: { texto: "Todos estes morreram na fé (…)", referencia: "Hb 11:13" },
      topicos: [
        { ordem: 1, icone: "📜", titulo: "O Epitáfio dos Santos", conteudo: "Eis o epitáfio de todos os abençoados santos: 'Todos estes morreram na fé'. Na fé viveram; ela foi o conforto, a direção, a motivação e o sustento deles.", tags: ["fé", "legado"] },
        { ordem: 2, icone: "⏮️", titulo: "Referência ao Passado", conteudo: "Morrer na fé tem referência ao passado, pois eles creram nas promessas e tiveram a certeza de que seus pecados foram apagados pela misericórdia de Deus.", tags: ["perdão", "promessa"] },
        { ordem: 3, icone: "⏭️", titulo: "Contemplando o Futuro", conteudo: "Eles dormiram afirmando que o Messias certamente viria. Para eles, as dores da morte foram senão as dores de parto para um estado melhor.", tags: ["ressurreição", "esperança"] },
        { ordem: 4, icone: "⭐", titulo: "Órbita da Fé", conteudo: "A fé foi a órbita em que estas estrelas de primeira grandeza se moveram durante todo o tempo em que brilharam por aqui, e feliz és tu que ela seja tua.", tags: ["estabilidade", "luz"] }
      ],
      promessa: "A fé é preciosa tanto para se morrer como para se viver por ela.",
      meditacao: "Esta noite, olhe novamente para Jesus, autor e consumador da tua fé."
    }
  },
  {
    data: "2026-05-03",
    manha: {
      versiculo: { texto: "no mundo tereis aflições (…)", referencia: "Jo 16:33" },
      topicos: [
        { ordem: 1, icone: "🔥", titulo: "Fornalha do Refino", conteudo: "Não se exigirá muito refino na fornalha da aflição para te purificar? Será coisa fácil livrar-te das tuas corrupções e fazer-te perfeito?", tags: ["santificação", "aflição"] },
        { ordem: 2, icone: "🦁", titulo: "Inimigos ao Redor", conteudo: "Tu foste outrora um servo de Satanás. Achas que ele te deixará em paz? Ele anda em derredor, bramando como leão, buscando a quem possa tragar.", tags: ["combate", "vigilância"] },
        { ordem: 3, icone: "🌍", titulo: "País Inimigo", conteudo: "Estás em um país inimigo; és um estranho e peregrino. O mundo não é teu amigo. Quando te deitares, penses que estás descansando no campo de batalha.", tags: ["peregrinação", "mundo"] },
        { ordem: 4, icone: "❤️", titulo: "O Mal Interior", conteudo: "Pecado e egoísmo ainda estão lá dentro do teu próprio coração. Tu encontrarias mal suficiente em ti mesmo para estar muitíssimo inquieto.", tags: ["coração", "pecado"] }
      ],
      promessa: "Invoca-me no dia da angústia; eu te livrarei, e tu me glorificarás.",
      meditacao: "Espere por problemas, mas não se desanime, pois Deus é contigo para te ajudar e fortalecer."
    },
    noite: {
      versiculo: { texto: "socorro bem presente (…)", referencia: "Sl 46:1" },
      topicos: [
        { ordem: 1, icone: "💎", titulo: "Bênçãos Apropriadas", conteudo: "As bênçãos da aliança não foram destinadas para serem apenas observadas, mas sim, apropriadas. Até mesmo nosso Senhor nos é dado para uso presente.", tags: ["aliança", "uso"] },
        { ordem: 2, icone: "🛡️", titulo: "Manto de Justiça", conteudo: "Tu te sentes despido? Venha, alma, e vista o Seu manto de justiça. Despe a tua própria justiça e também os teus medos; ele foi feito para ser usado.", tags: ["justiça", "proteção"] },
        { ordem: 3, icone: "🩺", titulo: "O Médico Amado", conteudo: "Tu te sentes doente? Puxe o sino noturno da oração e chame o Médico Amado! Ele te dará o cordial que irá te reviver.", tags: ["cura", "oração"] },
        { ordem: 4, icone: "🤝", titulo: "Parente Poderoso", conteudo: "Tu és pobre, porém tens um parente valente e poderoso. Não há nada que Cristo mais desgoste do que Seu povo fazer pouco caso dEle e não usá-Lo.", tags: ["provisão", "comunhão"] }
      ],
      promessa: "Quanto mais encargos colocamos sobre Seus ombros, mais precioso Ele será para nós.",
      meditacao: "Sejamos simples com Ele, não retrocedendo, endurecidos ou frios."
    }
  },
  {
    data: "2026-05-04",
    manha: {
      versiculo: { texto: "Porventura fará um homem deuses para si, que contudo não são deuses?", referencia: "Jr 16:20" },
      topicos: [
        { ordem: 1, icone: "🗿", titulo: "Tendência à Idolatria", conteudo: "O Israel espiritual é atormentado com uma tendência para a idolatria. Mamon continua introduzindo seu bezerro de ouro, e os santuários do orgulho não foram abandonados.", tags: ["idolatria", "orgulho"] },
        { ordem: 2, icone: "🌵", titulo: "Insones Travesseiros", conteudo: "Filhos favorecidos são muitas vezes causa de pecado; o Senhor sofre quando nos vê delirar sobre eles. Se deseja que espinhos cresçam em seu travesseiro, idolatre entes queridos.", tags: ["família", "apego"] },
        { ordem: 3, icone: "🪵", titulo: "Vaidade das Vaidades", conteudo: "Temos pena dos pagãos que adoram deus de pedra; no entanto, onde está a superioridade entre um deus de carne e um deus de madeira? O princípio é o mesmo.", tags: ["vaidade", "pecado"] },
        { ordem: 4, icone: "⚖️", titulo: "Grave Iniquidade", conteudo: "Em nosso caso o crime é mais grave, pois temos mais esclarecimento. Abandonamos o Deus vivo e nos convertemos aos ídolos!", tags: ["conhecimento", "arrependimento"] }
      ],
      promessa: "O consolo dos ídolos é perigoso, e a ajuda que dão nas horas de dificuldade é certamente pouca.",
      meditacao: "Que o Senhor nos expie a todos dessa grave iniquidade de abandonar o Deus vivo."
    },
    noite: {
      versiculo: { texto: "Sendo de novo gerados, não de semente corruptível, mas da incorruptível (…)", referencia: "1Pe 1:23" },
      topicos: [
        { ordem: 1, icone: "👑", titulo: "Nobre Origem", conteudo: "Pedro exorta os santos a amarem-se por causa de sua nobre origem, sendo descendentes do Rei dos reis, a mais verdadeira e antiga nobreza da Terra.", tags: ["identidade", "amor"] },
        { ordem: 2, icone: "🧬", titulo: "Natureza Regenerada", conteudo: "O cristão acrescenta santidade sacerdotal à dignidade real. Através de seu novo nascimento, ele está acima de seus companheiros como o homem está acima do animal.", tags: ["regeneração", "santidade"] },
        { ordem: 3, icone: "✨", titulo: "Povo Adquirido", conteudo: "Certamente ele deve conduzir-se como alguém que não é da multidão, mas escolhido do mundo, distinguido pela graça soberana, inscrito entre o povo adquirido.", tags: ["graça", "escolha"] },
        { ordem: 4, icone: "🛡️", titulo: "Evitar o Mal", conteudo: "Deixe a dignidade de sua natureza e o brilho de suas perspectivas constranger-vos a vos apegar à santidade e evitar a aparência do mal.", tags: ["conduta", "integridade"] }
      ],
      promessa: "Vocês nunca morrerão, embora a glória da carne desaparecerá; seu destino é imortal.",
      meditacao: "Reconheça a verdadeira dignidade de sua natureza regenerada e viva fazendo jus a ela."
    }
  },
  {
    data: "2026-05-05",
    manha: {
      versiculo: { texto: "eu serei o seu Deus e eles serão o meu povo.", referencia: "2Co 6:16" },
      topicos: [
        { ordem: 1, icone: "💎", titulo: "Especialidade", conteudo: "O mundo inteiro é de Deus, mas em relação àqueles que escolheu, aos quais comprou para Si mesmo, Ele diz o que não diz a outros: 'Meu povo'.", tags: ["escolha", "identidade"] },
        { ordem: 2, icone: "📜", titulo: "Ideia de Propriedade", conteudo: "Ele os comprou com Seu sangue; trouxe para perto de Si; colocou Seu grande coração sobre eles e os amou com um amor eterno que águas não podem apagar.", tags: ["amor", "propriedade"] },
        { ordem: 3, icone: "🩸", titulo: "Escritura de Sangue", conteudo: "Podes ler o Livro da Inspiração e lá encontrar os registros da tua salvação? Podes ler a tua escritura redigida com precioso sangue?", tags: ["salvação", "segurança"] },
        { ordem: 4, icone: "👨‍👩‍👧‍👦", titulo: "Peculiar Favor", conteudo: "Se Deus é o seu Deus, o Senhor tem um peculiar e especial favor por você; você é o objeto de Sua escolha, aceito em Seu Filho amado.", tags: ["favor", "aceitação"] }
      ],
      promessa: "O amor eterno de Deus é um amor que as revoluções do tempo nunca serão suficientes para diminuir um grau sequer.",
      meditacao: "Podes tu, por humilde fé, segurar o manto de Jesus e dizer: 'Meu Cristo'?"
    },
    noite: {
      versiculo: { texto: "O que atenta prudentemente para o assunto achará o bem, e o que confia no Senhor será bem-aventurado", referencia: "Pv 16:20" },
      topicos: [
        { ordem: 1, icone: "🧭", titulo: "Sabedoria é Força", conteudo: "Sabedoria é a bússola pela qual o homem é orientado; sem ela, é como um navio abandonado ao sabor dos ventos e das ondas. O homem deve ser prudente.", tags: ["sabedoria", "direção"] },
        { ordem: 2, icone: "🌳", titulo: "Frutas Celestes", conteudo: "Se formos por onde o Mestre conduz, acharemos o bem mesmo nesta sombria morada; há frutas celestes a serem reunidas neste lado dos caramanchões do Éden.", tags: ["recompensa", "consolo"] },
        { ordem: 3, icone: "🗝️", titulo: "O Segredo Revelado", conteudo: "O Senhor revelou onde a verdadeira sabedoria repousa: 'O que confia no Senhor será bem-aventurado'. Este é o verdadeiro modo de lidar com uma questão.", tags: ["confiança", "felicidade"] },
        { ordem: 4, icone: "🎓", titulo: "Diploma de Sabedoria", conteudo: "Aquele que confia no Senhor tem um diploma de sabedoria concedido pela inspiração; será bem-aventurado agora, e mais bem-aventurado acima.", tags: ["promessa", "eternidade"] }
      ],
      promessa: "Aquele que confia no Senhor achará o bem e será bem-aventurado.",
      meditacao: "Senhor, neste doce entardecer, caminhe comigo no jardim e ensina-me a sabedoria da fé."
    }
  },
  {
    data: "2026-05-06",
    manha: {
      versiculo: { texto: "Nisto conhecemos que estamos nele (…)", referencia: "1Jo 4:13" },
      topicos: [
        { ordem: 1, icone: "🏠", titulo: "Uma Casa sem Preço", conteudo: "Você deseja uma casa para sua alma? Ela é sem dinheiro e sem preço. Ocupará você a casa de meu Senhor nada pagando senão o aluguel de amá-Lo?", tags: ["graça", "morada"] },
        { ordem: 2, icone: "🍲", titulo: "Mobiliada e Rica", conteudo: "Esta casa está mobiliada com tudo o que você precisa; possui mesas repletas de alimentos para você viver eternamente e dela você poderá ver o próprio céu.", tags: ["provisão", "comunhão"] },
        { ordem: 3, icone: "🧼", titulo: "Purificação Diária", conteudo: "Se você se sente maltrapilho, não se preocupe. Cristo fará você, dia a dia, bom o suficiente para ela. Jesus irá lavá-lo e purificá-lo até que possas cantar: 'Nós estamos nEle'.", tags: ["santificação", "aceitação"] },
        { ordem: 4, icone: "🏰", titulo: "Habitação Forte", conteudo: "Tens uma habitação forte onde estarás sempre seguro. Quando este mundo tiver derretido, a nossa casa permanecerá, mais resistente que o mármore.", tags: ["segurança", "eternidade"] }
      ],
      promessa: "Habitando nEle, tens não apenas uma casa perfeita e segura, mas uma casa eterna.",
      meditacao: "Crente, grandemente feliz estejas por ter uma tal morada! Tu és muito privilegiado."
    },
    noite: {
      versiculo: { texto: "(…) Todos os dias de meu combate esperaria (…)", referencia: "Jó 14:14" },
      topicos: [
        { ordem: 1, icone: "🍷", titulo: "Gosto Especial", conteudo: "Uma xícara com quássia amarga aqui em baixo dará um gosto especial ao vinho novo de glória. Nossa armadura surrada tornará mais ilustre nossa vitória acima.", tags: ["sofrimento", "glória"] },
        { ordem: 2, icone: "🌊", titulo: "Batismo de Sofrimento", conteudo: "Cristo foi batizado com um batismo de sofrimento, e temos de ser batizados com o mesmo se quisermos compartilhar Seu reino. A comunhão é honrada.", tags: ["comunhão", "renúncia"] },
        { ordem: 3, icone: "💎", titulo: "Diamante Cortado", conteudo: "Um santo tentado, tal como um diamante bem cortado, brilha muito bem na coroa do Rei. Somos a obra das mãos de Deus em quem será Ele glorificado por nossas aflições.", tags: ["honra", "provação"] },
        { ordem: 4, icone: "⌛", titulo: "Tempo Fixado", conteudo: "Nosso tempo é fixado por decreto eterno. Não fiquemos ansiosos, mas esperemos com paciência até que os portões de pérola se abram.", tags: ["paciência", "soberania"] }
      ],
      promessa: "Se viver para sempre na Terra fará o meu Senhor mais glorioso, será meu céu ser excluído do céu.",
      meditacao: "A comunhão com Cristo é tão honrada que o sofrimento mais doloroso é um baixo preço por ela."
    }
  },
  {
    data: "2026-05-07",
    manha: {
      versiculo: { texto: "acompanharam-no grandes multidões, e ele curou a todas.", referencia: "Mt 12:15" },
      topicos: [
        { ordem: 1, icone: "🏥", titulo: "O Olhar de Jesus", conteudo: "Que multidão de horríveis doentes se colocou debaixo do olhar de Jesus! No entanto, Ele não sentiu repulsa, mas pacientemente atendeu a todos os casos.", tags: ["compaixão", "cura"] },
        { ordem: 2, icone: "⚔️", titulo: "Vitorioso sobre o Mal", conteudo: "Em cada canto da batalha Ele triunfou sobre o mal. Febre, hidropisia, paralisia ou loucura; todos conheciam o poder de Sua palavra e fugiam ao Seu comando.", tags: ["poder", "vitória"] },
        { ordem: 3, icone: "🩺", titulo: "O Médico pode Curar", conteudo: "Qualquer que seja o meu caso, o Médico amado pode me curar; e qualquer que seja o estado de outros a quem eu lembre em oração, posso ter esperança em Jesus.", tags: ["esperança", "intercessão"] },
        { ordem: 4, icone: "🩸", titulo: "Pelas Suas Pisaduras", conteudo: "Ele forja Suas curas tomando sobre Si nossas enfermidades. A Igreja na Terra está cheia de almas curadas, e o céu confessa que 'Ele curou a todos'.", tags: ["redenção", "louvor"] }
      ],
      promessa: "Aquele que na Terra caminhava entre doentes ainda dispensa Sua graça e faz maravilhas entre os homens.",
      meditacao: "Vou ter com Ele imediatamente e diligentemente, pois Ele veio, viu e venceu."
    },
    noite: {
      versiculo: { texto: "Jesus disse-lhe: Levanta-te, toma o teu leito, e anda", referencia: "Jo 5:8" },
      topicos: [
        { ordem: 1, icone: "🏊", titulo: "Esperando em Vão", conteudo: "O indefeso homem esperava um milagre na piscina, sem saber que Alguém perto dele poderia curá-lo em um instante. Muitos esperam emoções singulares em vão.", tags: ["espera", "engano"] },
        { ordem: 2, icone: "❄️", titulo: "Entradas Frias", conteudo: "Incrédulos preferem as frias entradas de Bethesda ao seio quente do Seu amor. Confiar nEle é o caminho seguro para todas as bênçãos.", tags: ["incredulidade", "confiança"] },
        { ordem: 3, icone: "🗣️", titulo: "Voz que Constrange", conteudo: "Que o Senhor possa perdoar o desprezo sobre Seu poder e chamá-los por essa doce voz para que se levantem da cama do desespero.", tags: ["chamado", "perdão"] },
        { ordem: 4, icone: "🌅", titulo: "Olhar e Viver", conteudo: "Ouve a nossa oração por todos os que, a esta calma hora do pôr do sol, possam olhar e viver. Há qualquer coisa nesta porção para você?", tags: ["salvação", "decisão"] }
      ],
      promessa: "Jesus pode curar imediatamente aqueles que confiam nEle.",
      meditacao: "Não espere por um anjo ou algo extraordinário; confie no presente Salvador agora."
    }
  },
  {
    data: "2026-05-08",
    manha: {
      versiculo: { texto: "E o que fora curado não sabia quem era (…)", referencia: "Jo 5:13" },
      topicos: [
        { ordem: 1, icone: "⚡", titulo: "Mudança Consciente", conteudo: "O pecador que esteve paralisado em desespero é bastante consciente da mudança quando Jesus fala a palavra de poder e lhe dá alegria e paz ao crer.", tags: ["conversão", "experiência"] },
        { ordem: 2, icone: "🌑", titulo: "Ignorância sobre Jesus", conteudo: "Excessiva ignorância sobre Jesus ainda permanece nos corações que sentem o poder de Seu sangue. O Espírito Santo torna os homens penitentes antes de fazê-los santos.", tags: ["conhecimento", "espírito"] },
        { ordem: 3, icone: "🛡️", titulo: "Capacidade de Resposta", conteudo: "A ignorância é um mal, pois este homem foi atormentado pelos fariseus e incapaz de confrontá-los. É bom conhecer o Senhor Jesus com entendimento.", tags: ["doutrina", "apologética"] },
        { ordem: 4, icone: "🏛️", titulo: "Visita no Templo", conteudo: "A cura da ignorância foi logo seguida da cura da enfermidade, pois ele recebeu a visita do Senhor no templo e foi encontrado testemunhando dEle.", tags: ["testemunho", "revelação"] }
      ],
      promessa: "Aquele que acredita naquilo que sabe, em breve saberá mais claramente aquilo que acredita.",
      meditacao: "Senhor, se Tu me salvaste, mostra-Te a mim para que eu possa declarar-Te aos filhos dos homens."
    },
    noite: {
      versiculo: { texto: "Apega-te, pois, a ele (…)", referencia: "Jó 22:21" },
      topicos: [
        { ordem: 1, icone: "👨‍👦", titulo: "Conhecer o Pai", conteudo: "Ponha sua cabeça em Seu seio e confesse que não és digno; receba o beijo de Seu amor e o anel da fidelidade eterna; alegre-se em Sua graça.", tags: ["arrependimento", "adoção"] },
        { ordem: 2, icone: "🤝", titulo: "Conhecer o Filho", conteudo: "Conheça Jesus como seu amigo, irmão e marido. Siga-O quando caminha sobre as águas e quando Se assenta junto à fonte no cansaço da humanidade.", tags: ["intimidade", "cristo"] },
        { ordem: 3, icone: "🕊️", titulo: "Conhecer o Espírito", conteudo: "Contemple o Espírito como Iluminador, Instrutor e Consolador. Aquele que trouxe ordem ao caos da criação cria agora a ordem da santidade em sua alma.", tags: ["santificador", "consolo"] },
        { ordem: 4, icone: "♾️", titulo: "Trindade na Unidade", conteudo: "Tal crença racional, bíblica e experimental da Trindade na Unidade é sua se você verdadeiramente conhecer a Deus, e esse conhecimento traz paz.", tags: ["trindade", "paz"] }
      ],
      promessa: "O conhecimento de Deus tal como Ele Se revelou traz a verdadeira paz.",
      meditacao: "Não se contente até que entenda algo do 'nossa' em 'Façamos o homem à nossa imagem'."
    }
  },
  {
    data: "2026-05-09",
    manha: {
      versiculo: { texto: "o qual nos abençoou com todas as bênçãos espirituais (…)", referencia: "Ef 1:3" },
      topicos: [
        { ordem: 1, icone: "🕰️", titulo: "Bondade do Passado", conteudo: "Fomos escolhidos nEle antes da fundação do mundo. A eterna aliança, baseada em fiança e confirmada por juramento, é nossa para firme consolação.", tags: ["eleição", "aliança"] },
        { ordem: 2, icone: "💍", titulo: "O Grande Noivado", conteudo: "O grande noivado do Príncipe da Glória é nosso; é a nós a quem Ele está afiançado, e as sagradas núpcias serão em breve declaradas.", tags: ["compromisso", "futuro"] },
        { ordem: 3, icone: "✝️", titulo: "Humilhação e Glória", conteudo: "A maravilhosa encarnação, o suor de sangue, a cruz e as consequências da perfeita obediência e ressurreição são todos nossos por Seu próprio dom.", tags: ["redenção", "vitória"] },
        { ordem: 4, icone: "🛡️", titulo: "Nomes na Couraça", conteudo: "Sobre Sua couraça agora estão os nossos nomes, e nas Suas prevalentes alegações diante do trono Ele Se recorda de nós e pleiteia nossa causa.", tags: ["intercessão", "segurança"] }
      ],
      promessa: "Aquele que Se entregou por nós nas profundezas da miséria não retira a garantia agora que está entronizado.",
      meditacao: "Podemos descansar assegurados que no curso do destino não há uma só linha que milite contra os redimidos."
    },
    noite: {
      versiculo: { texto: "Levantemo-nos de manhã para ir às vinhas, vejamos se florescem as vides (…)", referencia: "Ct 7:12" },
      topicos: [
        { ordem: 1, icone: "🍇", titulo: "Trabalho com o Senhor", conteudo: "É função do povo de Deus aparar Suas vinhas. A igreja deseja, em todos os seus muitos trabalhos, desfrutar da comunhão com Cristo.", tags: ["serviço", "comunhão"] },
        { ordem: 2, icone: "🧘", titulo: "Atividade não é Mal", conteudo: "Muitos imaginam que não podem servir ativamente e ter comunhão. Estão enganados. Ficar sentado aos pés de Jesus é o que é louvável.", tags: ["equilíbrio", "devoção"] },
        { ordem: 3, icone: "👷", titulo: "Trabalhadores Incansáveis", conteudo: "Aqueles que mais têm comunhão não são os reclusos, mas os trabalhadores incansáveis que O têm lado a lado, trabalhando juntos com Deus.", tags: ["parceria", "vigor"] },
        { ordem: 4, icone: "🌿", titulo: "Bênção Pessoal", conteudo: "Todas as formas de serviço cristão podem se tornar uma bênção pessoal aos que nela estão envolvidos. Podemos e devemos fazê-lo em estreita comunhão.", tags: ["crescimento", "graça"] }
      ],
      promessa: "Em qualquer das coisas que façamos para Jesus, podemos e devemos fazê-lo em estreita comunhão com Ele.",
      meditacao: "Não é o ficar sentado, mas o ficar sentado aos pés de Jesus que traz a verdadeira vida."
    }
  },
  {
    data: "2026-05-10",
    manha: {
      versiculo: { texto: "Mas de fato Cristo ressuscitou dentre os mortos (…)", referencia: "1Co 15:20" },
      topicos: [
        { ordem: 1, icone: "🧱", titulo: "Fundamento do Cristianismo", conteudo: "Todo o fundamento repousa sobre a ressurreição. Se Cristo não ressuscitou, é vã a vossa fé e ainda permaneceis nos vossos pecados.", tags: ["fé", "doutrina"] },
        { ordem: 2, icone: "👑", titulo: "Soberania de Cristo", conteudo: "A soberania de Cristo apoia-se em Sua ressurreição, porque foi para isto que morreu Cristo e ressurgiu, para ser Senhor tanto dos mortos como dos vivos.", tags: ["soberania", "senhorio"] },
        { ordem: 3, icone: "⚖️", titulo: "Nossa Justificação", conteudo: "A abençoada escolha da aliança está relacionada com a triunfante vitória sobre a morte; Ele ressuscitou para nossa justificação.", tags: ["justiça", "vitória"] },
        { ordem: 4, icone: "🧵", titulo: "O Fio de Prata", conteudo: "O fio de prata da ressurreição corre através de todas as bênçãos, desde a regeneração até a glória eterna, unindo-as indubitavelmente.", tags: ["unidade", "esperança"] }
      ],
      promessa: "Aqueles que dormem em Cristo não pereceram, mas na carne certamente contemplam o seu Deus.",
      meditacao: "Como se alegrará que esteja estabelecido indubitavelmente: Cristo ressuscitou!"
    },
    noite: {
      versiculo: { texto: "(…) a glória do unigênito do Pai, cheio de graça e de verdade", referencia: "Jo 1:14" },
      topicos: [
        { ordem: 1, icone: "⚒️", titulo: "Obra Divina", conteudo: "Ele fez por mim aquilo que ninguém senão Deus poderia fazer. Subjugou minha vontade, derreteu meu coração de adamante e quebrou as barras de ferro.", tags: ["poder", "transformação"] },
        { ordem: 2, icone: "⛲", titulo: "Cheio de Graça", conteudo: "Se Ele não fosse cheio de graça eu nunca teria sido salvo. Ele me chamou quando eu lutava para escapar; perdoou meus pecados quando vim tremendo.", tags: ["graça", "perdão"] },
        { ordem: 3, icone: "📜", titulo: "Cheio de Verdade", conteudo: "Verdadeiras são todas as Suas promessas, nenhuma delas falhou. Nenhum irmão teve um parente como Ele tem sido para mim; nenhum enlutado teve melhor conforto.", tags: ["fidelidade", "consolo"] },
        { ordem: 4, icone: "☀️", titulo: "Minha Estrela e Sol", conteudo: "Na vida Ele é minha vida; na morte, a morte da morte; na pobreza, minha riqueza; na escuridão, minha estrela; na claridade, meu sol.", tags: ["provisão", "plenitude"] }
      ],
      promessa: "Jesus é toda a graça e nenhum furor, toda a verdade e nenhuma mentira; Ele está cheio, infinitamente cheio.",
      meditacao: "Minha alma, esta noite, exalte com todas as tuas forças o unigênito do Pai."
    }
  }
];

async function saveToObsidian(dayData) {
  const year = dayData.data.split('-')[0];
  const monthNames = ["", "01-Janeiro", "02-Fevereiro", "03-Março", "04-Abril", "05-Maio", "06-Junho", "07-Julho", "08-Agosto", "09-Setembro", "10-Outubro", "11-Novembro", "12-Dezembro"];
  const monthIdx = parseInt(dayData.data.split('-')[1]);
  const monthName = monthNames[monthIdx];
  const dir = `content/Devocionais/${year}/${monthName}`;
  
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const periods = ['manha', 'noite'];
  for (const p of periods) {
    const d = dayData[p];
    if (!d) continue;
    const fileName = `${dayData.data}-${p}.md`;
    const filePath = path.join(dir, fileName);
    
    const content = `---
data: ${dayData.data}
periodo: ${p === 'manha' ? 'Manhã' : 'Noite'}
versiculo: "${d.versiculo.referencia}"
tags: [devocional, ${p}, ${d.topicos[0].tags[0]}, ${d.topicos[1].tags[0]}]
---

# Devocional da ${p === 'manha' ? 'Manhã' : 'Noite'} — ${dayData.data.split('-').reverse().join('/')}

> "${d.versiculo.texto}"
> — ${d.versiculo.referencia}

${d.topicos.map(t => `## ${t.icone} ${t.titulo}\n${t.conteudo}`).join('\n\n')}

---
> 💬 **Promessa:** "${d.promessa}"

✨ **Meditação:** ${d.meditacao}
`;
    fs.writeFileSync(filePath, content);
  }
}

async function uploadToSupabase(dayData) {
  const entries = [
    {
      data: dayData.data,
      periodo: "Manhã",
      versiculo: dayData.manha.versiculo,
      topicos: dayData.manha.topicos,
      promessa: dayData.manha.promessa,
      meditacao: dayData.manha.meditacao
    },
    {
      data: dayData.data,
      periodo: "Noite",
      versiculo: dayData.noite.versiculo,
      topicos: dayData.noite.topicos,
      promessa: dayData.noite.promessa,
      meditacao: dayData.noite.meditacao
    }
  ];

  const { error } = await supabase.from('devocionais').insert(entries);
  if (error) console.error(`❌ Erro no upload ${dayData.data}:`, error.message);
  else console.log(`✅ ${dayData.data} enviado com sucesso!`);
}

async function run() {
  console.log('🚀 Iniciando processamento de Maio (Bloco 1: 01-10)...');
  for (const day of batch) {
    await saveToObsidian(day);
    await uploadToSupabase(day);
  }
  console.log('🏁 Bloco 1 concluído.');
}

run();
