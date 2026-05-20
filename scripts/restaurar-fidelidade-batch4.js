require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-21",
    manha: {
      versiculo: { texto: "Se é que já provastes que o Senhor é benigno", referencia: "1Pe 2:3" },
      topicos: [
        { ordem: 1, icone: "👅", titulo: "Especial Misericórdia", conteudo: "'Se'; então, essa não é uma universal, porém uma especial misericórdia, e é necessário saber se nós conhecemos a graça de Deus pela experiência interior. Não há favor espiritual que não possa ser tema de introspecção. Ninguém deve se contentar enquanto houver sequer um 'si' sobre o fato de ter provado que o Senhor é benigno.", tags: ["experiência", "graça"] },
        { ordem: 2, icone: "⚓", titulo: "Plena Certeza", conteudo: "Não devemos descansar sem uma desesperada luta para agarrar o Salvador nos braços da fé e dizer: 'Eu sei em quem tenho crido'. Não descanse até que tenhas plena certeza da tua importância em Jesus. Não deixe que nada te satisfaça até que, com o infalível testemunho do Espírito Santo, estejas certificado de que és um filho de Deus.", tags: ["certeza", "espírito"] },
        { ordem: 3, icone: "🧱", titulo: "Verdades Eternas", conteudo: "Oh, não brinque aqui; não deixe qualquer 'talvez', ou 'porventura' satisfazer a tua alma. Edifique sobre verdades eternas. Alcance as firmes beneficências de Davi e as retenha com segurança. Que a tua âncora seja lançada até o interior do véu, e que a tua alma esteja ligada a essa âncora por um cabo que não se romperá.", tags: ["firmeza", "eternidade"] },
        { ordem: 4, icone: "🥛", titulo: "Canaã da Paz", conteudo: "Avance para além desses tristes 'si' e 'talvez'; não permaneça mais no deserto de dúvidas; atravesse o Jordão da desconfiança e entre na Canaã da paz, onde os cananeus ainda permanecem, mas onde a terra não cessa de jorrar leite e mel. Viva na plenitude do favor que Deus preparou para aqueles que nEle confiam.", tags: ["paz", "provisão"] }
      ],
      promessa: "Aquele que prova que o Senhor é benigno terá o infalível testemunho do Espírito Santo.",
      meditacao: "Não deixe qualquer 'talvez' satisfazer sua alma; edifique sobre verdades eternas e entre na Canaã da paz."
    },
    noite: {
      versiculo: { texto: "(…) há mantimentos no Egito (…)", referencia: "Gn 42:2" },
      topicos: [
        { ordem: 1, icone: "🌾", titulo: "Cláusula de Salvaguarda", conteudo: "A fome havia apertado todas as nações; no entanto, o Deus da providência guardou um celeiro para o Seu povo. Jacó não esperava qualquer benefício do Egito, porém lá havia milho armazenado para ele. Crente, embora todas as coisas estejam contra ti, descanse na certeza de que Deus fez uma reserva em teu nome; há uma cláusula de salvaguarda.", tags: ["providência", "reserva"] },
        { ordem: 2, icone: "🐦", titulo: "Ajuda Segura", conteudo: "De alguma forma, Ele te livrará e, de algum lugar, Ele proverá para ti. O momento poderá ser inesperado, mas a ajuda seguramente virá em tua dificuldade. Se os homens não te alimentarem, os corvos o farão; se a terra não produzir trigo, do céu cairá o maná. Deus pode fazer o sol nascer no oeste se Ele quiser, e fazer da fonte de angústia um canal de deleite.", tags: ["milagre", "confiança"] },
        { ordem: 3, icone: "🗝️", titulo: "Poder de Jesus", conteudo: "O trigo no Egito estava todo nas mãos de José; de igual modo, as riquezas da providência estão todas sob o poder absoluto de nosso Senhor Jesus, que irá dispensá-las livremente ao Seu povo. Jesus é incessante em Seu fiel cuidado por Seus irmãos. Nossa tarefa é seguir a ajuda que nos é fornecida; não podemos ficar parados em desânimo.", tags: ["soberania", "generosidade"] },
        { ordem: 4, icone: "🤲", titulo: "Pedir e Receber", conteudo: "A oração nos levará à presença de nosso Irmão real e, uma vez diante do Seu trono, teremos apenas de pedir e receber; Seus armazéns não estão desprovidos; ainda há milho; Seu coração não é duro; Ele nos dará o milho. Senhor, perdoa a nossa incredulidade e nos constranja a retirar largamente da Tua plenitude.", tags: ["oração", "fé"] }
      ],
      promessa: "De alguma forma Ele te livrará e, de algum lugar, Ele proverá para ti.",
      meditacao: "A oração nos levará à presença de nosso Irmão real, cujos armazéns não estão vazios."
    }
  },
  {
    data: "2026-05-22",
    manha: {
      versiculo: { texto: "E os levou por caminho direito (…)", referencia: "Sl 107:7" },
      topicos: [
        { ordem: 1, icone: "🌑", titulo: "Por que é Assim?", conteudo: "Incertezas muitas vezes levam o ansioso crente a perguntar: 'Por que é assim comigo?'. Eu busquei a luz, mas veio escuridão; busquei a paz, mas veio o problema. Ontem, eu podia subir ao topo de Pisga e ver a paisagem; hoje, meu espírito não tem esperanças, porém muitos medos. Faz isso parte do plano de Deus para mim? Sim, é assim mesmo.", tags: ["provação", "plano de deus"] },
        { ordem: 2, icone: "🌊", titulo: "Método de Deus", conteudo: "O eclipse da vossa fé e a debilidade de sua esperança são apenas parte do método de Deus para fazer você maduro para a herança. Essas provações são para testar sua fé; elas são ondas que o lavam sobre a rocha; são ventos que sopram seu navio mais rapidamente em direção ao porto desejado. 'Assim os leva ao seu porto desejado' (Sl 107:30).", tags: ["maturidade", "firmeza"] },
        { ordem: 3, icone: "⚓", titulo: "Porto Desejado", conteudo: "Por honra e desonra, por infâmia e por boa fama, pela abundância e pela pobreza, por todas essas coisas é mantida a vida das vossas almas. Oh, não pense, crente, que suas tristezas estão fora do plano de Deus; elas são partes necessárias. 'Por muitas tribulações nos importa entrar no reino de Deus'. Aprenda a ter 'grande gozo quando cairdes em tentações'.", tags: ["perseverança", "foco"] },
        { ordem: 4, icone: "🗺️", titulo: "Caminho Direito", conteudo: "O Senhor conhece o caminho e nos guia por ele, mesmo que nos pareça tortuoso ou escuro. Tudo está bem desde que governado por Ti. Que minha alma trêmula esteja calma e espere Teu sábio e santo desejo. No final da jornada, veremos que cada passo, por mais difícil que tenha sido, foi parte do 'caminho direito' para nos levar à glória.", tags: ["soberania", "consolo"] }
      ],
      promessa: "Deus leva o crente ao porto desejado através de todas as circunstâncias da vida.",
      meditacao: "Aprenda a ter 'grande gozo quando cairdes em várias tentações', pois elas são partes necessárias do plano de Deus."
    },
    noite: {
      versiculo: { texto: "Eis que és formoso, ó amado meu (…)", referencia: "Ct 1:16" },
      topicos: [
        { ordem: 1, icone: "🏔️", titulo: "Pontos de Vista", conteudo: "De qualquer lugar nosso Bem-Amado é formoso. Nossas experiências são destinadas por nosso Pai para nos fornecer revigorantes pontos de vista; quão amáveis são nossas provações quando elas nos levam para o alto, onde podemos ter uma visão mais clara de Jesus! Nós O vemos desde o cume de Amana e Senir, e Ele brilha sobre nós como o sol na sua força.", tags: ["beleza", "experiência"] },
        { ordem: 2, icone: "🦁", titulo: "Todo Formoso", conteudo: "Mas nós também O vimos 'desde os covis dos leões', e Ele não perdeu coisa alguma de Seu encanto. Desde o leito de enfermidade até os limites do túmulo, voltamos nossos olhos para Ele, e Ele nunca foi outra coisa senão 'todo formoso'. Muitos olharam para Ele das chamas de uma estaca e nunca disseram uma palavra desfavorável, mas morreram exaltando Seus encantos.", tags: ["fidelidade", "consolo"] },
        { ordem: 3, icone: "🔮", titulo: "Caleidoscópio de Graças", conteudo: "Porventura não é indescritivelmente maravilhoso ver o Salvador, em todos os Seus ofícios, mudar o caleidoscópio e encontrar novas combinações de graças incomparáveis? Na manjedoura e na eternidade, na cruz e em Seu trono, entre ladrões ou em meio a querubins, Ele é, em toda parte, 'totalmente formoso'.", tags: ["majestade", "perfeição"] },
        { ordem: 4, icone: "♾️", titulo: "Beleza Arrebatadora", conteudo: "Examine cada traço de Seu caráter, e Ele é tanto formoso quanto majestoso. Pese-O como quiser, e Ele não será achado em falta. A eternidade não descobriria sequer a sombra de uma mancha em nosso Amado, mas conforme o tempo passa, Suas glórias brilham com mais esplendor, e Sua indescritível beleza será mais e mais arrebatadora.", tags: ["eternidade", "adoração"] }
      ],
      promessa: "O Senhor é indescritivelmente maravilhoso e inigualável em todos os Seus ofícios.",
      meditacao: "Examine cada traço do caráter de Cristo; Ele é, em cada momento, tanto formoso quanto majestoso."
    }
  },
  {
    data: "2026-05-23",
    manha: {
      versiculo: { texto: "O Senhor aperfeiçoará o que me toca (…)", referencia: "Sl 138:8" },
      topicos: [
        { ordem: 1, icone: "⚓", titulo: "Confiança Divina", conteudo: "A mais manifesta confiança aqui é a confiança divina. O salmista não disse: 'Eu tenho graça suficiente'; sua dependência estava apenas no Senhor. Si tolerarmos qualquer confiança que não esteja fundada na Rocha eterna, nossa confiança é pior que um sonho; ela cairá sobre nós, e nos cobrirá com suas ruínas para nossa tristeza e confusão.", tags: ["confiança", "firmeza"] },
        { ordem: 2, icone: "🏗️", titulo: "Obra do Senhor", conteudo: "O salmista foi sábio; ele repousou sobre nada menos que a obra do Senhor. É o Senhor que começou a boa obra dentro de nós, e é Ele quem irá continuá-la. Si houver, na veste da nossa justiça, alguma costura que inserimos por nós mesmos, estaremos perdidos; contudo, esta é a nossa confiança: que o Senhor que começou irá aperfeiçoá-la.", tags: ["soberania", "graça"] },
        { ordem: 3, icone: "🛡️", titulo: "Poder de Deus", conteudo: "Ele fez tudo, deve fazer tudo, e fará tudo. Nossa confiança não deve estar no que temos feito, mas inteiramente no que o Senhor fará. A incredulidade sugere: 'Você nunca será capaz de ficar de pé. Olhe para o mal do seu coração'. Ah! sim, nós realmente pereceríamos si fôssemos deixados a nossa própria força.", tags: ["dependência", "proteção"] },
        { ordem: 4, icone: "🏁", titulo: "Levar ao Porto", conteudo: "Si tivéssemos de navegar sozinhos em nossos frágeis vasos através de um mar tão áspero, nós bem poderíamos abandonar a viagem; mas, graças a Deus, Ele irá aperfeiçoar o que começou em nós, e nos levará ao porto desejado. Nós nunca estaremos muito confiantes enquanto confiarmos apenas nEle, e nunca preocupados tendo uma tal confiança.", tags: ["esperança", "vitória"] }
      ],
      promessa: "O Senhor que começou a boa obra em você irá aperfeiçoá-la até o fim.",
      meditacao: "Nunca estaremos muito confiantes enquanto confiarmos apenas no Senhor, que faz e fará tudo por nós."
    },
    noite: {
      versiculo: { texto: "Não me compraste por dinheiro cana aromática (…)", referencia: "Is 43:24" },
      topicos: [
        { ordem: 1, icone: "🏺", titulo: "Frieza de Coração", conteudo: "Israel tornou-se mesquinho e fez senão poucos votos de ofertas; essa foi uma evidência da frieza do coração para com Deus. Leitor, isso nunca aconteceu com você? Aqueles que são pobres no bolso, si ricos na fé, serão aceitos; contudo, acaso você dá em justa proporção ao Senhor ou a moeda da viúva está retida?", tags: ["devoção", "caráter"] },
        { ordem: 2, icone: "💰", titulo: "Consagração Total", conteudo: "O crente rico não deve esquecer sua grande responsabilidade, pois a quem muito é dado, muito será cobrado. Jesus deu o Seu sangue por nós; o que deveríamos dar a Ele? Nós somos dEle, e tudo o que temos, pois Ele nos comprou para Si mesmo; poderemos agir como si fosse nosso? Ó, mais consagração! e, para esse fim, ó, mais amor!", tags: ["consagração", "sacrifício"] },
        { ordem: 3, icone: "🌸", titulo: "Sinais de Afeição", conteudo: "Abençoado Jesus, Tu recebes com simpatia o menor sinal sincero de afeição! Tu recebes nossos pobres presentes de amor como si fossem intrinsecamente preciosos, embora, de fato, o sejam tal como o ramo de flores silvestres que a criança traz para sua mãe. Nunca poderemos crescer mesquinhamente para Ti novamente.", tags: ["amor", "aceitação"] },
        { ordem: 4, icone: "🌾", titulo: "Primeiros Frutos", conteudo: "Nunca ouviremos de Ti o queixar-Se novamente de nós pelo fato de retermos as dádivas do nosso amor. Nós Te daremos os primeiros frutos do nosso crescimento, e pagaremos a Ti o dízimo de tudo; e, então, confessaremos 'do que é teu to damos' (1Cr 29:14). Nada é tão caro quanto o tributo do Teu incomparável amor.", tags: ["generosidade", "gratidão"] }
      ],
      promessa: "O Senhor recebe com simpatia e amor até o menor sinal de afeição sincera de Seus filhos.",
      meditacao: "Decida hoje dar ao Senhor os primeiros frutos e o melhor do seu amor, pois tudo o que temos pertence a Ele."
    }
  },
  {
    data: "2026-05-24",
    manha: {
      versiculo: { texto: "Bendito seja Deus, que não rejeitou a minha oração (…)", referencia: "Sl 66:20" },
      topicos: [
        { ordem: 1, icone: "❄️", titulo: "Orações Frias", conteudo: "Olhando para trás, ficaremos maravilhados como Deus sempre respondeu nossas orações. Lembre-se, cristão, quão frias tem sido tuas orações. Tuas petições foram senão fracas e poucas, distantes daquela humilde e perseverante fé que clama: 'Não te deixarei ir, si não me abençoares'. No entanto, Deus ouviu essas tuas frias orações.", tags: ["oração", "misericórdia"] },
        { ordem: 2, icone: "☁️", titulo: "Shekinah Permanente", conteudo: "Apesar de deixares de orar como uma vez fizeste, Deus não deixou de abençoar. Quando negligenciaste o propiciatório, Deus não o abandonou, porém a nuvem luminosa da 'Shekinah' sempre foi visível entre as asas dos querubins. É maravilhoso que o Senhor considere esses espasmos intermitentes de importunação.", tags: ["presença", "fidelidade"] },
        { ordem: 3, icone: "⚡", titulo: "Deus Paciente", conteudo: "Que Deus Ele é para ouvir as orações daqueles que vêm a Ele quando premidos por necessidades, mas O negligenciam quando recebem a misericórdia; aqueles que se aproximam dEle quando são forçados a vir, mas quase se esquecem de Lhe falar quando as misericórdias são abundantes e as tristezas são poucas.", tags: ["dependência", "graça"] },
        { ordem: 4, icone: "🕊️", titulo: "Oração no Espírito", conteudo: "Deixe Sua graciosa bondade em ouvir tais orações tocar nossos corações para que possamos ser achados 'orando em todo o tempo com toda a oração e súplica no Espírito' (Ef 6:18). Que o privilégio de sermos ouvidos nos leve a uma comunhão mais constante e profunda com o nosso Deus Pai.", tags: ["comunhão", "espírito"] }
      ],
      promessa: "Deus não rejeitou a sua oração nem apartou de você a Sua misericórdia.",
      meditacao: "Que a bondade de Deus em ouvir nossas pobres orações nos motive a orar em todo o tempo no Espírito."
    },
    noite: {
      versiculo: { texto: "Somente deveis portar-vos dignamente conforme o evangelho de Cristo (…)", referencia: "Fp 1:27" },
      topicos: [
        { ordem: 1, icone: "🏙️", titulo: "Cidadania Celestial", conteudo: "Somos ordenados a fazer com que as nossas ações, como cidadãos da Nova Jerusalém, sejam dignas do evangelho. O evangelho é muito simples; assim, os cristãos devem ser simples e francos em seus hábitos. Isso deve estar sobre os nossos costumes e discursos; que a simplicidade seja a própria beleza da alma.", tags: ["conduta", "simplicidade"] },
        { ordem: 2, icone: "🛡️", titulo: "Verdade e Firmeza", conteudo: "O evangelho é eminentemente verdadeiro, é ouro sem escória; então, a vida cristã será sem brilho si ausente a jóia da verdade. O evangelho é um destemido evangelho, pois ele proclama a verdade, quer os homens gostem ou não; temos de ser igualmente fiéis e firmes no testemunho.", tags: ["verdade", "coragem"] },
        { ordem: 3, icone: "🍯", titulo: "Gentileza e Amor", conteudo: "Contudo, o evangelho também é muito gentil: 'A cana trilhada não a quebrará'. Vamos procurar ganhar os outros pela doçura de nossas palavras e atos. O evangelho é muito amoroso; o último mandamento foi: 'Que vos ameis uns aos outros'. Ó, mais real e amorosa união a todos os santos!", tags: ["gentileza", "amor"] },
        { ordem: 4, icone: "🧼", titulo: "Santidade de Vida", conteudo: "O evangelho de Cristo é santo. Ele nunca desculpa o pecado. Si a nossa vida está parecida com o evangelho, devemos evitar não apenas os vícios grosseiros, mas tudo aquilo que dificulta nossa conformidade com Cristo. Devemos nos esforçar, dia a dia, para deixar nossa conversação ser mais de acordo com o Seu evangelho.", tags: ["santidade", "integridade"] }
      ],
      promessa: "A vida digna do evangelho é adornada com simplicidade, verdade, gentileza, amor e santidade.",
      meditacao: "Esforce-se hoje para que suas ações e palavras sejam um reflexo digno do evangelho de Cristo."
    }
  },
  {
    data: "2026-05-25",
    manha: {
      versiculo: { texto: "Não me desampares, Senhor (…)", referencia: "Sl 38:21" },
      topicos: [
        { ordem: 1, icone: "👶", titulo: "Necessidade Constante", conteudo: "Frequentemente oramos para que Deus não nos abandone na hora da provação, mas nos esquecemos que devemos usar essa oração em todas as ocasiões. Não existe um momento da nossa vida em que podemos agir sem a Sua constante confirmação. Seja na luz ou em trevas, precisamos desta oração: 'Não me desampares'.", tags: ["dependência", "oração"] },
        { ordem: 2, icone: "⚓", titulo: "Pai e Pastor", conteudo: "A criança, enquanto aprende a andar, sempre necessita da ajuda de seus pais. Não podemos fazer coisa alguma sem a ajuda do alto. 'Pai, não desampares o Teu filho, para que ele não caia. Pastor, não deixes o Teu cordeiro, para que ele não se desvie da segurança do aprisco. Grande lavrador, não abandone a Tua planta'.", tags: ["cuidado", "proteção"] },
        { ordem: 3, icone: "🛡️", titulo: "Refúgio nas Asas", conteudo: "Não me desampares em minhas alegrias nem em minhas tristezas. Não me desampares no dia da minha fé mais forte, para que não se degenere em presunção. O meu caminho é perigoso e cheio de armadilhas. A galinha não abandona sua ninhada; Tu, então, encubra-me com as Tuas penas e permita-me encontrar refúgio.", tags: ["segurança", "abrigo"] },
        { ordem: 4, icone: "🤲", titulo: "Deus da Salvação", conteudo: "Não te alongues de mim, ó Senhor, pois a angústia está perto. Não há coisa alguma que sirva como ajuda fora de Ti. 'Não me deixes, nem me desampares, ó Deus da minha salvação!'. Que esta súplica seja o respirar contínuo da nossa alma em cada passo da jornada terrena até chegarmos ao descanso final.", tags: ["salvação", "fidelidade"] }
      ],
      promessa: "O Senhor é o refúgio seguro e a ajuda constante para aqueles que clamam por Sua presença.",
      meditacao: "Sustenta-me, Senhor, e serei salvo; que esta oração esteja em meus lábios em todos os momentos de hoje."
    },
    noite: {
      versiculo: { texto: "tornaram para Jerusalém (…) lhes contaram o que lhes acontecera (…)", referencia: "Lc 24:33,35" },
      topicos: [
        { ordem: 1, icone: "🕯️", titulo: "Lâmpada para os Pés", conteudo: "Quando os discípulos reconheceram Jesus no partir do pão, embora o dia já tivesse declinado, o amor deles era uma lâmpada para seus pés; sim, asas também. Eles se esqueceram da escuridão e viajaram de volta os sessenta estádios para contar a alegre notícia da ressurreição do Senhor que lhes havia aparecido.", tags: ["amor", "testemunho"] },
        { ordem: 2, icone: "🗣️", titulo: "Propriedade Comum", conteudo: "Estes primeiros cristãos eram entusiasmados para falar da ressurreição e para proclamar o que sabiam a respeito do Senhor; eles fizeram propriedade comum as suas experiências. Esta noite, deixemos que o exemplo deles nos comova. Nós também devemos dar nosso testemunho sobre Jesus; nada pode ser poupado.", tags: ["comunhão", "evangelismo"] },
        { ordem: 3, icone: "🧩", titulo: "Testemunho Completo", conteudo: "Temos, cada um de nós, dons peculiares e manifestações especiais, mas o único objetivo que Deus tem em vista é o aperfeiçoamento de todo o corpo de Cristo. Devemos, portanto, levar nossos bens espirituais e fazer a distribuição a todos daquilo que Deus nos deu. Não esconda qualquer parte da preciosa verdade.", tags: ["unidade", "igreja"] },
        { ordem: 4, icone: "🚩", titulo: "Diga as Grandes Coisas", conteudo: "Não deixe a labuta, ou a escuridão, ou a possível incredulidade de seus amigos pesar sequer um instante. Levante-se e marche para o posto de trabalho, e diga que grandes coisas Deus tem mostrado a sua alma. O mundo precisa ouvir que o Senhor ressuscitou e que Ele ainda Se manifesta aos Seus amados pelo caminho.", tags: ["coragem", "missão"] }
      ],
      promessa: "O Senhor Se manifesta aos que caminham com Ele e os envia para serem testemunhas de Sua vitória.",
      meditacao: "Não esconda a verdade; conte aos outros as grandes coisas que Deus tem realizado em sua alma nesta noite."
    }
  },
  {
    data: "2026-05-26",
    manha: {
      versiculo: { texto: "Lança o teu cuidado sobre o Senhor, e ele te susterá (…)", referencia: "Sl 55:22" },
      topicos: [
        { ordem: 1, icone: "⚖️", titulo: "Natureza do Pecado", conteudo: "Cuidados, se levados ao excesso, têm em si a natureza do pecado. O preceito para evitá-los é repetido várias vezes; é aquele que não pode ser negligenciado, pois a própria essência dos cuidados é a suposição de que somos mais sábios que Deus, e nos colocamos em Seu lugar para fazer por Ele o que Ele prometeu fazer por nós.", tags: ["ansiedade", "orgulho"] },
        { ordem: 2, icone: "💧", titulo: "Cisterna Rota", conteudo: "A desobediência a esse simples preceito é absolutamente pecaminosa. Mais do que isso, os cuidados levam muitas vezes a atos de pecado. Aquele que leva sua própria carga é muito provável que fique tentado a usar meios errados para ajudar a si mesmo. Vai-se à 'cisterna rota' em vez de ao 'manancial', um pecado grave.", tags: ["dependência", "escolha"] },
        { ordem: 3, icone: "❄️", titulo: "Amor que Esfria", conteudo: "A ansiedade nos faz duvidar da benignidade de Deus, fazendo com que nosso amor por Ele esfrie; sentimos desconfiança e entristecemos o Espírito, de modo que nossas orações sejam impedidas, nosso perseverante exemplo seja desfigurado, e nossa vida um egoísmo. Assim, a desconfiança em Deus nos leva a caminharmos longe dEle.", tags: ["fé", "espírito"] },
        { ordem: 4, icone: "⚓", titulo: "Firmeza em Deus", conteudo: "Si através da fé simples em Sua promessa, lançarmos cada fardo sobre Ele, pois Ele Se comprometeu a cuidar de nós, então, Ele nos manterá perto dEle e nos fortalecerá. 'Tu conservarás em paz aquele cuja mente está firme em ti; porque ele confia em ti' (Is 26:3). Descanse na suficiência do cuidado divino.", tags: ["confiança", "paz"] }
      ],
      promessa: "O Senhor te susterá si você lançar sobre Ele todos os seus cuidados.",
      meditacao: "Mantenha sua mente firme no Senhor e Ele te conservará em perfeita paz, cuidando de cada fardo seu."
    },
    noite: {
      versiculo: { texto: "(…) permanecer na fé (…)", referencia: "At 14:22" },
      topicos: [
        { ordem: 1, icone: "🚩", titulo: "Emblema dos Santos", conteudo: "Perseverança é o emblema dos verdadeiros santos. A vida cristã não é apenas um iniciar nos caminhos de Deus, mas também uma continuação neles enquanto a vida dure. 'Conquistar fez-me o que sou, e conquistar me sustenta'. Seu lema deve ser: Excelso. Apenas aquele que será coroado ao final continua até que o trompete de guerra não mais ecoe.", tags: ["perseverança", "vitória"] },
        { ordem: 2, icone: "🎡", titulo: "Feira das Vaidades", conteudo: "Perseverança é o alvo de todos os nossos inimigos espirituais. O mundo busca fazer você cessar sua peregrinação e se assentar para comprar e vender na 'Feira das Vaidades'. A carne vai procurar iludi-lo e impedir sua passagem para a glória. 'É uma tarefa cansativa ser um peregrino; venha, lance mão disso'.", tags: ["mundo", "vigilância"] },
        { ordem: 3, icone: "🏹", titulo: "Alvo de Satanás", conteudo: "Satanás fará muitos ataques ferozes contra sua perseverança; ela será o alvo de todas as suas flechas. Ele se esforçará para atrapalhá-lo no culto; ele insinuará que você está fazendo nada de bom. Ele sussurrará: 'Amaldiçoa a Deus, e morre'; ou atacará sua firmeza: 'Qual é vantagem de ser tão zeloso? Fique quieto'.", tags: ["combate", "firmeza"] },
        { ordem: 4, icone: "🛡️", titulo: "Escudo e Armadura", conteudo: "Ele irá atacar seus sentimentos doutrinários: 'Por que você retêm estes credos? Homens sensatos estão ficando mais liberais; conforme-se com os tempos'. Portanto, cristão, ponha seu escudo perto de sua armadura e clame fortemente a Deus para que, pelo Seu Espírito, você possa perseverar até o fim. A coroa é para os que vencem.", tags: ["proteção", "doutrina"] }
      ],
      promessa: "O Espírito de Deus fortalece o crente para que ele possa permanecer firme na fé até o fim.",
      meditacao: "Ponha seu escudo perto de sua armadura e clame a Deus por força para perseverar contra todos os ataques de hoje."
    }
  }
];

async function run() {
  console.log('🚀 Restaurando Fidelidade (Bloco 4: 21-26 de Maio)...');
  for (const day of batch) {
    const entries = [
      { data: day.data, periodo: "Manhã", versao: "original", versiculo: day.manha.versiculo, topicos: day.manha.topicos, promessa: day.manha.promessa, meditacao: day.manha.meditacao },
      { data: day.data, periodo: "Noite", versao: "original", versiculo: day.noite.versiculo, topicos: day.noite.topicos, promessa: day.noite.promessa, meditacao: day.noite.meditacao }
    ];
    const { error } = await supabase.from('devocionais').upsert(entries, { onConflict: 'data, periodo, versao' });
    if (error) console.error(`❌ Erro em ${day.data}:`, error.message);
    else console.log(`✅ ${day.data} restaurado fielmente.`);

    // Save to Obsidian
    const year = day.data.split('-')[0];
    const monthNames = ["", "01-Janeiro", "02-Fevereiro", "03-Março", "04-Abril", "05-Maio", "06-Junho", "07-Julho", "08-Agosto", "09-Setembro", "10-Outubro", "11-Novembro", "12-Dezembro"];
    const monthIdx = parseInt(day.data.split('-')[1]);
    const monthName = monthNames[monthIdx];
    const dir = path.join('content', 'Devocionais', year, monthName);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    for (const p of ['manha', 'noite']) {
      const d = day[p];
      const filePath = path.join(dir, `${day.data}-${p}.md`);
      const content = `---
data: ${day.data}
periodo: ${p === 'manha' ? 'Manhã' : 'Noite'}
versiculo: "${d.versiculo.referencia}"
tags: [devocional, ${p}, ${d.topicos[0].tags[0]}]
---
# Devocional da ${p === 'manha' ? 'Manhã' : 'Noite'} — ${day.data.split('-').reverse().join('/')}
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
  console.log('🏁 Bloco 4 concluído.');
}
run();
