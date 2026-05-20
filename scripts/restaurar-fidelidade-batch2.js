require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-09",
    manha: {
      versiculo: { texto: "o qual nos abençoou com todas as bênçãos espirituais (…)", referencia: "Ef 1:3" },
      topicos: [
        { ordem: 1, icone: "🕰️", titulo: "Bondade do Passado", conteudo: "Toda a bondade do passado, do presente, e do futuro, Cristo concede ao Seu povo. Nas misteriosas eras do passado, o Senhor Jesus foi o primeiro eleito de Seu Pai, e, em Sua eleição, Ele nos concedeu um benefício, pois fomos escolhidos nEle antes da fundação do mundo (Ef 1:4). Ele tinha, desde toda a eternidade, as prerrogativas de filiação como o unigênito do Pai e bem-amado Filho; Ele, nas riquezas de Sua graça, nos elevou também à filiação.", tags: ["eleição", "filiação"] },
        { ordem: 2, icone: "💍", titulo: "Grande Noivado", conteudo: "A eterna aliança, baseada em fiança e confirmada por juramento, é nossa. Nos assentamentos eternos da predestinada sabedoria, os olhos do Senhor Jesus sempre estiveram fixados em nós. O grande noivado do Príncipe da Glória é nosso, pois é a nós a quem Ele está afiançado, assim como as sagradas núpcias serão, dentro em breve, declaradas a uma universal assembleia.", tags: ["aliança", "compromisso"] },
        { ordem: 3, icone: "✝️", titulo: "Humilhação e Glória", conteudo: "A maravilhosa encarnação do Deus do céu, com toda a assombrosa condescendência e humilhação, é nossa. O suor de sangue, o flagelo, a cruz, são nossos para sempre. Sejam quais forem as bem-aventuradas consequências que fluem da perfeita obediência, da completa expiação, ressurreição, ascensão, ou intercessão, todas são nossas por Seu próprio dom.", tags: ["redenção", "sacrifício"] },
        { ordem: 4, icone: "🛡️", titulo: "Nomes na Couraça", conteudo: "Sobre Sua couraça agora estão os nossos nomes, e nas Suas prevalentes alegações diante do trono, Ele Se recorda de nós e pleiteia nossa causa. Seu domínio sobre os principados e Sua absoluta majestade no céu, Ele emprega para o benefício daqueles que nEle confiam. Aquele que Se entregou por nós nas profundezas da miséria não retira a garantia, agora, que Ele está entronizado.", tags: ["intercessão", "segurança"] }
      ],
      promessa: "Aquele que Se entregou por nós na miséria não retira a garantia agora que está entronizado.",
      meditacao: "Não há uma só linha do destino que milite contra os interesses de Seus redimidos."
    },
    noite: {
      versiculo: { texto: "Levantemo-nos de manhã para ir às vinhas, vejamos se florescem as vides (…)", referencia: "Ct 7:12" },
      topicos: [
        { ordem: 1, icone: "🍇", titulo: "Trabalho nas Vinhas", conteudo: "A igreja estava prestes a se envolver em um diligente trabalho e desejava ter a companhia de seu Senhor. É uma tarefa abençoada aquela em que Jesus está ao nosso lado! É função do povo de Deus aparar Suas vinhas. Semelhante aos nossos primeiros tutores, somos colocados no jardim do Senhor para sermos proveitosos; vamos, portanto, sair ao campo.", tags: ["serviço", "comunhão"] },
        { ordem: 2, icone: "🧘", titulo: "Atividade e Comunhão", conteudo: "Muitos imaginam que não podem servir ativamente a Cristo e ainda ter comunhão com Ele; estão enganados. Certamente é muito fácil desperdiçar nossa devoção interior em trabalhos exteriores, no entanto, não há qualquer razão para que isso aconteça, exceto por nossa própria tolice e negligência. Maria não foi elogiada por sentar-se em silêncio, mas por sentar-se aos pés de Jesus.", tags: ["equilíbrio", "devoção"] },
        { ordem: 3, icone: "👷", titulo: "Trabalhadores Incansáveis", conteudo: "Não pense que a atividade em si é um mal; é uma grande bênção e um meio de graça para nós. Paulo disse ter sido uma graça dada a ele ser autorizado a pregar; todas as formas de serviço cristão podem se tornar uma bênção pessoal aos que nela estão envolvidos. Aqueles que mais têm comunhão não são os reclusos, mas os trabalhadores incansáveis que O têm lado a lado.", tags: ["graça", "ministério"] },
        { ordem: 4, icone: "🤝", titulo: "Trabalhar com Deus", conteudo: "Trabalhadores incansáveis que estão labutando por Jesus, e que, em sua labuta, O têm lado a lado com eles, de modo que trabalham juntos com Deus. Lembremo-nos, portanto, em qualquer das coisas que façamos para Jesus, que podemos e devemos fazê-lo em estreita comunhão com Ele. Não é o ficar sentado, mas o ficar sentado aos pés de Jesus que é louvável.", tags: ["parceria", "intimidade"] }
      ],
      promessa: "Qualquer coisa que façamos para Jesus, podemos e devemos fazê-lo em estreita comunhão com Ele.",
      meditacao: "Não é o simples ficar sentado, mas o ficar sentado aos pés de Jesus que é verdadeiramente louvável."
    }
  },
  {
    data: "2026-05-10",
    manha: {
      versiculo: { texto: "Mas de fato Cristo ressuscitou dentre os mortos (…)", referencia: "1Co 15:20" },
      topicos: [
        { ordem: 1, icone: "🧱", titulo: "Fundamento do Cristianismo", conteudo: "Todo o fundamento do Cristianismo repousa sobre o fato que 'Cristo ressuscitou dentre os mortos', porque 'se Cristo não ressuscitou, é vã a vossa fé'. A divindade de Cristo encontra sua prova mais segura em Sua ressurreição, uma vez que Ele foi 'declarado Filho de Deus em poder pela ressurreição dentre os mortos' (Rm 1:4).", tags: ["fé", "doutrina"] },
        { ordem: 2, icone: "👑", titulo: "Soberania e Justificação", conteudo: "A soberania de Cristo apoia-se em Sua ressurreição, 'porque foi para isto que morreu Cristo, para ser Senhor, tanto dos mortos, como dos vivos'. Mais uma vez, a nossa justificação está relacionada com a triunfante vitória de Cristo sobre a morte, 'o qual por nossos pecados foi entregue, e ressuscitou para nossa justificação' (Rm 4:25).", tags: ["senhorio", "justiça"] },
        { ordem: 3, icone: "🌱", titulo: "Nossa Regeneração", conteudo: "A nossa própria regeneração está conectada a Sua ressurreição, pois fomos 'gerados de novo para uma viva esperança, pela ressurreição de Jesus Cristo'. E a maior certeza de nossa ressurreição final descansa aqui: se o Espírito Daquele que ressuscitou a Jesus habita em vós, Ele também vivificará os vossos corpos mortais.", tags: ["esperança", "vida nova"] },
        { ordem: 4, icone: "🧵", titulo: "O Fio de Prata", conteudo: "Se Cristo não ressuscitou, então não ressuscitaremos; mas se Ele ressuscitou, então aqueles que dormem em Cristo não pereceram. Assim, o fio de prata da ressurreição corre através de todas as bênçãos do crente, desde sua regeneração até sua eterna glória, unindo-as indubitavelmente. Como se alegrará que isso esteja estabelecido: Cristo ressuscitou!", tags: ["eternidade", "certeza"] }
      ],
      promessa: "O fio de prata da ressurreição corre através de todas as bênçãos do crente, unindo-as para a glória eterna.",
      meditacao: "Como se alegrará o coração ao saber que está estabelecido indubitavelmente: 'Cristo ressuscitou dentre os mortos'."
    },
    noite: {
      versiculo: { texto: "(…) a glória do unigênito do Pai, cheio de graça e de verdade", referencia: "Jo 1:14" },
      topicos: [
        { ordem: 1, icone: "⚒️", titulo: "Obra Divina", conteudo: "Crente, você pode sustentar seu testemunho que Cristo é o unigênito do Pai. Ele fez aquilo por mim, aquilo que ninguém senão Deus poderia fazer. Ele subjugou minha obstinada vontade, derreteu um coração de adamante, abriu os portões de metal, e quebrou as barras de ferro. Ele transformou meu pranto em riso, e fez meu coração se alegrar.", tags: ["transformação", "poder"] },
        { ordem: 2, icone: "⛲", titulo: "Cheio de Graça", conteudo: "Ele é cheio de graça. Ah! se Ele não fosse assim eu nunca teria sido salvo. Ele me chamou quando eu lutava para escapar de Sua graça; quando finalmente vim ao Seu propiciatório, todo tremendo como um culpado condenado, Ele disse: 'Os teus pecados, que são muitos, estão todos perdoados; tende bom ânimo'. Bendito seja o Seu nome.", tags: ["graça", "perdão"] },
        { ordem: 3, icone: "📜", titulo: "Cheio de Verdade", conteudo: "Ele é cheio de verdade. Verdadeiras são todas as Suas promessas, nenhuma delas falhou. Nunca um servo teve um mestre como eu tenho; nenhum irmão teve um parente como Ele tem sido para mim; nenhum pecador teve melhor Salvador; nenhum enlutado teve melhor conforto do que Cristo tem sido para meu espírito. Ao Seu lado não quero coisa alguma.", tags: ["fidelidade", "consolo"] },
        { ordem: 4, icone: "☀️", titulo: "Minha Estrela e Sol", conteudo: "Na vida, Ele é minha vida; na morte, Ele é a morte da morte; na pobreza, Cristo é minha riqueza; na doença, Ele faz a minha cama; na escuridão, Ele é minha estrela; na claridade, Ele é meu sol. Jesus é, para mim, toda a graça e nenhum furor, toda a verdade e nenhuma mentira; e de verdade e de graça, Ele está cheio, infinitamente cheio.", tags: ["provisão", "plenitude"] }
      ],
      promessa: "Jesus é toda a graça e nenhum furor, toda a verdade e nenhuma mentira; e dEle você nunca precisará de coisa alguma.",
      meditacao: "Minha alma, esta noite, exalte com todas as tuas forças o 'unigênito do Pai'."
    }
  },
  {
    data: "2026-05-11",
    manha: {
      versiculo: { texto: "(…) eis que eu estou convosco todos os dias (…)", referencia: "Mt 28:20" },
      topicos: [
        { ordem: 1, icone: "🧱", titulo: "Rocha Inamovível", conteudo: "É bom que haja Alguém que é sempre o mesmo e que está sempre conosco. É bom que haja uma rocha firme em meio às ondas do mar da vida. Não construa tua casa sobre as areias movediças de um mundo traiçoeiro, mas estabelece tuas esperanças sobre esta pedra que, durante a chuva e as enchentes, permanece sólida e inamovível.", tags: ["segurança", "firmeza"] },
        { ordem: 2, icone: "💎", titulo: "Tesouro no Armário", conteudo: "Minha alma, eu te ordeno, coloque teu tesouro no único armário seguro; armazene tuas jóias onde nunca poderás perdê-las. Põe teu tudo em Cristo; coloque todos os teus afetos sobre a Sua pessoa, toda a tua esperança em Seu mérito, toda a tua confiança em Seu sangue eficaz, toda a tua alegria em Sua presença, e, assim, poderás rir da perda.", tags: ["cristo", "esperança"] },
        { ordem: 3, icone: "🕯️", titulo: "Luz na Morte", conteudo: "Lembre-se que todas as flores nos jardins do mundo se esvaem, e vem o dia em que nada será deixado senão a escura Terra. A sombria e extintora morte apagará a tua vela em breve. Oh! como é doce ter a luz do sol quando a vela se extinguir! Una o teu coração com Aquele que nunca te deixará; confia-te Àquele que vai contigo através da corrente negra.", tags: ["consolo", "luz"] },
        { ordem: 4, icone: "🤝", titulo: "Amigo Chegado", conteudo: "Vá, triste filho da aflição, conte teus segredos Àquele Amigo que é mais chegado que um irmão (Pv 18:24). Confie todas as tuas preocupações Àquele que nunca será tomado de ti. 'Jesus Cristo é o mesmo, ontem, e hoje, e eternamente' (Hb 13:8). 'Eis que eu estou convosco todos os dias', é suficiente para a minha alma viver.", tags: ["amizade", "constância"] }
      ],
      promessa: "Jesus Cristo é o mesmo, ontem, e hoje, e eternamente; Ele nunca será tomado de ti.",
      meditacao: "Coloque o teu coração sobre Aquele que permanece eternamente fiel a ti, em meio às ondas do mar da vida."
    },
    noite: {
      versiculo: { texto: "Tão-somente esforça-te e tem mui bom ânimo (…)", referencia: "Js 1:7" },
      topicos: [
        { ordem: 1, icone: "🛡️", titulo: "Sem Covardia", conteudo: "O tenro amor de Deus pelos Seus servos O faz interessado pelos seus sentimentos mais íntimos. Ele deseja que estejam de bom ânimo. Nosso Mestre não nos quer embaraçados com medos. Ele nos quer sem cuidados, sem dúvidas, sem covardia. Quando estamos desanimados, estamos sujeitos a uma grave enfermidade que deve ser levada ao Médico.", tags: ["coragem", "ânimo"] },
        { ordem: 2, icone: "🎭", titulo: "Vestidos de Louvor", conteudo: "Nosso Senhor ama não ver nosso semblante triste. Podemos ir enlutados como estamos; Ele afasta de nós o espírito angustiado e nos veste em vestidos de louvor, pois há motivo para nos alegrarmos. O cristão deve ser de espírito corajoso para que possa glorificar o Senhor suportando as provações de uma maneira heróica.", tags: ["alegria", "louvor"] },
        { ordem: 3, icone: "🚩", titulo: "Mau Exemplo", conteudo: "Se o cristão ficar temeroso e desanimado, ele desonrará seu Deus; e, também, que mau exemplo é isso. Essa enfermidade de dúvidas é uma epidemia que se espalha rapidamente entre o rebanho. Um crente abatido faz vinte almas tristes. Além disso, a menos que sua coragem seja mantida, Satanás será demais para você.", tags: ["testemunho", "fidelidade"] },
        { ordem: 4, icone: "⚔️", titulo: "Alegria é Força", conteudo: "Deixe seu espírito se alegrar em Deus; a alegria do Senhor será a vossa força (Ne 8:10), e nenhum demônio do inferno avançará contra ti. O trabalho é a luz para um homem de espírito alegre, e a vitória espera sobre a alegria. O homem que labuta regozijando-se em seu Deus tem garantido o êxito. Portanto, esforça-te e tem mui bom ânimo.", tags: ["vitória", "sucesso"] }
      ],
      promessa: "A alegria do Senhor será a vossa força, e nenhum demônio do inferno avançará contra ti.",
      meditacao: "Aquele que semeia na esperança colhe em alegria; portanto, esforça-te e tem mui bom ânimo."
    }
  },
  {
    data: "2026-05-12",
    manha: {
      versiculo: { texto: "(…) e me manifestarei a ele", referencia: "Jo 14:21" },
      topicos: [
        { ordem: 1, icone: "✨", titulo: "Revelações Especiais", conteudo: "O Senhor Jesus dá revelações especiais de Si mesmo ao Seu povo. Existem muitos que poderiam testemunhar a verdade disso em suas próprias experiências. Eles tiveram manifestações de seu Salvador de uma forma particular que nenhuma leitura ou pregação poderia fornecer. Jesus Se agradou em falar as suas almas e desvelar as maravilhas de Sua pessoa.", tags: ["revelação", "experiência"] },
        { ordem: 2, icone: "🌌", titulo: "Paraíso em Embrião", conteudo: "Eles tiveram suas almas mergulhadas em tamanha felicidade que julgaram estar no céu apesar de lá não estarem, embora bem perto estivessem, em seu limiar. Quando Jesus Se manifesta ao Seu povo é o céu na Terra, é o paraíso em embrião, é a felicidade iniciada. Manifestações especiais exercem uma sagrada influência sobre o coração.", tags: ["felicidade", "céu"] },
        { ordem: 3, icone: "🙇", titulo: "Efeito da Humildade", conteudo: "Um dos efeitos será a humildade. Se um homem diz: 'Eu tive manifestações espirituais; eu sou um grande homem', ele nunca teve qualquer comunhão com Jesus, pois 'o Senhor é excelso, atenta todavia para o humilde; mas ao soberbo conhece-o de longe' (Sl 138:6). O Senhor nunca lhes dará qualquer visita de Seu amor.", tags: ["humildade", "caráter"] },
        { ordem: 4, icone: "🧼", titulo: "Santidade Prática", conteudo: "Santidade certamente se segue. Um homem que não tem santidade nunca teve essa manifestação. 'Não erreis: Deus não se deixa escarnecer' (Gl 6:7). Ele não concederá Seus favores aos ímpios, pois assim como não rejeitará o reto, tampouco respeitará o malfeitor. Haverá três efeitos de nos aproximarmos de Jesus: humildade, felicidade e santidade.", tags: ["santidade", "integridade"] }
      ],
      promessa: "Haverá três efeitos de nos aproximarmos de Jesus: humildade, felicidade e santidade.",
      meditacao: "Manifestações de Cristo são o céu na Terra, o paraíso em embrião e a felicidade iniciada."
    },
    noite: {
      versiculo: { texto: "(…) não temas descer ao Egito, porque eu te farei ali uma grande nação (…)", referencia: "Gn 46:3" },
      topicos: [
        { ordem: 1, icone: "🐪", titulo: "Novos Panoramas", conteudo: "Jacó deve ter estremecido com a ideia de deixar a terra de seu pai e habitar entre estranhos pagãos. Era um novo e, provavelmente, desesperador panorama; quem iria se aventurar sem ansiedade? No entanto, o caminho estava marcado e, por isso, decidiu ir. Essa é, com frequência, a posição atual dos crentes; eles são chamados a perigos inexperientes.", tags: ["direção", "coragem"] },
        { ordem: 2, icone: "☀️", titulo: "Presença Garantida", conteudo: "Que eles possam imitar Jacó, buscando Sua direção e não dando um passo sequer até que tenham aguardado no Senhor; então, eles terão o Companheiro de Jacó para ser seu Amigo. Quão abençoado é se sentir seguro sabendo que o Senhor está conosco em todos os nossos caminhos, e consente em descer conosco em nossas humilhações.", tags: ["segurança", "consolo"] },
        { ordem: 3, icone: "🌊", titulo: "Passagem Incólume", conteudo: "Mesmo além do oceano, o amor de nosso Pai irradia como o sol em toda sua força. Não podemos hesitar em ir para onde Jeová promete Sua presença; até o vale da sombra da morte se torna brilhante com essa garantia. Marchando com fé em seu Deus, os crentes terão a promessa de Jacó: eles tornarão a subir novamente.", tags: ["proteção", "fé"] },
        { ordem: 4, icone: "🚀", titulo: "Vá em Frente", conteudo: "Todos os fiéis passarão incólumes pela tribulação da vida e pelo terror da morte. Vamos exercitar a confiança de Jacó. 'Não temas' é o mandamento do Senhor e Seu encorajamento divino àqueles que, ao Seu comando, são lançando em novos mares; a presença divina impede qualquer medo. Sem o nosso Deus, devemos temer nos mover. Vá em frente.", tags: ["obediência", "ação"] }
      ],
      promessa: "Eu descerei contigo ao Egito, e certamente te farei tornar a subir.",
      meditacao: "O amor de nosso Pai irradia como o sol em toda sua força, mesmo além do oceano."
    }
  },
  {
    data: "2026-05-13",
    manha: {
      versiculo: { texto: "(…) O choro pode durar uma noite, mas a alegria vem pela manhã", referencia: "Sl 30:5" },
      topicos: [
        { ordem: 1, icone: "🌙", titulo: "Noite de Provação", conteudo: "Cristão! Se estás em uma noite de provação, pense no dia de amanhã; anime o teu coração com o pensamento da vinda do teu Senhor. Seja paciente, pois 'eis que Ele vem por entre as nuvens'. O lavrador espera até colher sua safra. Se você nunca esteve tão miserável, lembre-se que você será aportado na justa enseada de Canaã.", tags: ["paciência", "esperança"] },
        { ordem: 2, icone: "✨", titulo: "Coroa Estrelada", conteudo: "Tua cabeça pode agora estar coroada com problemas espinhosos, porém usarás uma coroa estrelada em breve; a tua mão pode estar repleta com cuidados, mas tocarás as cordas da harpa celestial em pouco tempo. Tuas vestes logo se tornarão alvas. Aguarde mais um pouco. Ah! quão desprezíveis nossos problemas parecerão quando olharmos para trás!", tags: ["recompensa", "futuro"] },
        { ordem: 3, icone: "🏔️", titulo: "Leves Aflições", conteudo: "Olhando nossas provações daqui parecem imensas, porém, quando chegarmos ao céu, vamos relatar com alegria os trabalhos de nossos pés. Nossas provações parecerão leves e momentâneas aflições. Prossigamos com ousadia; se a noite nunca esteve tão escura, a manhã vem, que é mais do que podem dizer aqueles cerrados na escuridão do inferno.", tags: ["perspectiva", "força"] },
        { ordem: 4, icone: "🎶", titulo: "Expectativa do Céu", conteudo: "Sabe você o que é viver no porvir, viver na expectativa que antecede o céu? Alegria, crente, por ter tão segura esperança. Pode estar tudo escuro agora, porém em breve haverá luz; tudo pode estar em provações agora, mas em breve tudo será felicidade. O que importa que 'o choro pode durar uma noite', quando 'a alegria vem pela manhã'?", tags: ["alegria", "louvor"] }
      ],
      promessa: "O choro pode durar uma noite, mas a alegria vem pela manhã.",
      meditacao: "Viver na expectativa que antecede o céu é o segredo para ter alegria em meio às trevas."
    },
    noite: {
      versiculo: { texto: "O Senhor é a minha porção (…)", referencia: "Sl 119:57" },
      topicos: [
        { ordem: 1, icone: "💰", titulo: "Bens Superiores", conteudo: "Olha os teus bens, ó crente, e compare a tua porção com a de teus semelhantes. Alguns têm sua porção no campo; mas o que são as colheitas em comparação com o teu Deus? Outros têm a sua porção na cidade; a riqueza deles é abundante; mas o que é ouro em comparação ao teu Deus? Tu não poderias viver desse depósito; tua vida não poderia ser sustentada por ele.", tags: ["provisão", "riqueza"] },
        { ordem: 2, icone: "💎", titulo: "Mais que o Ouro", conteudo: "Aplique o ouro a uma consciência perturbada; acaso poderia aliviar suas dores? Aplique-o a um coração desalentado e veja se poderia retirar sequer uma aflição. Mas tu tens a Deus, e nEle tens mais do que o ouro que jamais poderia ser comprado. Alguns têm sua porção em aplausos e fama; mas o teu Deus não é mais a ti do que isso?", tags: ["satisfação", "valor"] },
        { ordem: 3, icone: "⚓", titulo: "Rico de Fato", conteudo: "Há uma necessidade profunda na hora de morrer que nenhuma riqueza pode fornecer. No entanto, quando tens a Deus por tua porção, tens mais do que tudo; nEle, cada desejo é atendido, seja na vida ou na morte. Tu és rico de fato, pois Ele irá suprir tua necessidade, confortar o teu coração, guiar os teus passos e estar contigo no vale sombrio.", tags: ["consolo", "direção"] },
        { ordem: 4, icone: "🤝", titulo: "Ter de Tudo", conteudo: "Deus irá trazer-te ao final para casa, para desfrutar dEle como tua porção eterna. 'Eu tenho bastante', disse Esaú; essa é a melhor coisa que um homem mundano pode dizer; mas Jacó respondeu: 'Eu tenho de tudo', que é uma observação muito elevada para mentes carnais. Tenha a Deus por sua porção e você terá tudo o que é necessário.", tags: ["gratidão", "plenitude"] }
      ],
      promessa: "Com Deus por tua porção, cada desejo é atendido, seja na vida ou na morte.",
      meditacao: "Não inveje a porção do mundo; a tua porção é o próprio Deus, e nEle você tem 'de tudo'."
    }
  },
  {
    data: "2026-05-14",
    manha: {
      versiculo: { texto: "(…) co-herdeiros de Cristo (…)", referencia: "Rm 8:17" },
      topicos: [
        { ordem: 1, icone: "🏰", titulo: "Direito Aquisitivo", conteudo: "Os ilimitados reinos do universo do Pai são de Cristo por direito aquisitivo. Como 'herdeiro de tudo', Ele nos admitiu reivindicar tudo como sendo nosso em virtude desse ato de co-herança que o Senhor ratificou com Seu povo. As ruas de ouro, os portões de pérolas, o rio da vida, tudo é feito, por meio de nosso Senhor, para nós, como nossa eterna possessão.", tags: ["herança", "identidade"] },
        { ordem: 2, icone: "👑", titulo: "Sacerdócio Real", conteudo: "Tudo o que Ele tem, Ele compartilha com Seu povo. A coroa real Ele colocou sobre a cabeça de Sua Igreja, chamando Seus filhos ao sacerdócio real. Ele descoroou a Si mesmo para que pudéssemos ter uma coroação de glória; Ele não Se assentou em Seu próprio trono até que nele adquirisse lugar para todo aquele que venceu pelo Seu sangue.", tags: ["realeza", "honra"] },
        { ordem: 3, icone: "🤝", titulo: "Recompensa Compartilhada", conteudo: "Eis aqui a recompensa de cada conquistador cristão! O trono de Cristo, a coroa, o cetro, o palácio, o tesouro, as vestes, são todos seus. Muito acima do ciúme e ganância, Cristo considera Sua perfeita felicidade compartilhar com Seu povo. 'Eu dei-lhes a glória que a mim me deste' (Jo 17:22). Os sorrisos de Seu Pai são mais doces para Ele pois Seu povo os compartilha.", tags: ["união", "generosidade"] },
        { ordem: 4, icone: "😊", titulo: "Gozos Completos", conteudo: "As honras do Seu reino são mais agradáveis porque Seu povo surge com Ele em glória. Mais valiosas para Ele são as Suas conquistas, uma vez que elas ensinam o Seu povo a triunfar. Ele Se deleita em Seu trono, porque nele há lugar para eles. Ele Se alegra com Suas vestes reais, uma vez que Suas bordas estão espalhadas sobre Seu povo. Ele Se deleita ainda mais em Sua alegria.", tags: ["felicidade", "comunhão"] }
      ],
      promessa: "Eu dei-lhes a glória que a mim me deste, para que o vosso gozo seja completo.",
      meditacao: "Tudo o que Cristo tem por direito, Ele compartilha com Sua amada Igreja por co-herança."
    },
    noite: {
      versiculo: { texto: "Como pastor apascentará o seu rebanho; entre os seus braços recolherá os cordeirinhos (…)", referencia: "Is 40:11" },
      topicos: [
        { ordem: 1, icone: "🐑", titulo: "Coração Tenro", conteudo: "Jesus é o bom pastor. Por que Ele recolhe os cordeirinhos em Seus braços? Porque Ele tem um coração tenro, e qualquer fragilidade derrete Seu coração. Os suspiros, a ignorância, a fraqueza dos pequeninos de Seu rebanho atraem Sua compaixão. É Seu ofício, como Sumo Sacerdote fiel, considerar os fracos. Além disso, Ele os comprou com Seu sangue.", tags: ["cuidado", "compaixão"] },
        { ordem: 2, icone: "🛡️", titulo: "Segurança na Aliança", conteudo: "Ele deve e irá cuidar daqueles que Lhe custaram tão caro. Por isso, Ele é responsável por cada cordeiro ligado pela aliança do compromisso, a fim de que nenhum se perca. Todos eles são parte de Sua glória. Às vezes, Ele os recolhe por não permitir que suportem muitas provações. A providência lida de forma benevolente com eles.", tags: ["proteção", "aliança"] },
        { ordem: 3, icone: "🍼", titulo: "Fé Simples", conteudo: "Muitas vezes, eles são 'recolhidos' para serem preenchidos com um grau incomum de amor, para que resistam. Ele os 'recolhe' dando-lhes uma fé muito simples, a qual seguram a promessa tal como está e, crendo, levam todos os seus problemas diretamente a Jesus. A simplicidade da fé lhes confere um grau incomum de confiança.", tags: ["fé", "simplicidade"] },
        { ordem: 4, icone: "🤗", titulo: "Afeição sem Limites", conteudo: "Aqui está afeição sem limites e tenra intimidade. Aqui está a perfeita segurança; nos Seus braços, quem poderia prejudicá-los? Eles teriam de ferir primeiro o Pastor. Aqui está o descanso perfeito e o maravilhoso conforto. Com certeza, não somos suficientemente sensíveis à infinita ternura de Jesus!", tags: ["amor", "descanso"] }
      ],
      promessa: "Nos Seus braços há perfeita segurança; quem poderia prejudicá-los?",
      meditacao: "Não somos suficientemente sensíveis à infinita ternura de Jesus, que carrega os cordeirinhos em Seu colo."
    }
  },
  {
    data: "2026-05-15",
    manha: {
      versiculo: { texto: "(…) é justificado todo aquele que crê", referencia: "At 13:39" },
      topicos: [
        { ordem: 1, icone: "⚡", titulo: "Justificação Imediata", conteudo: "O crente em Cristo recebe uma imediata justificação. A fé não produz esse fruto pouco a pouco, mas sim, imediatamente. Ela é concedida à alma no momento em que se aproxima de Cristo e aceita-O como Seu tudo. Também nós, tão indubitável e verdadeiramente justificados como os que andam de linho branco e cantam melodiosos louvores.", tags: ["justiça", "fé"] },
        { ordem: 2, icone: "🏛️", titulo: "Tribunal de Deus", conteudo: "O ladrão da cruz foi justificado no momento em que virou os olhos da fé para Jesus. Estamos hoje aceitos no Amado; hoje, absolvidos do pecado; hoje, absolvidos no tribunal de Deus. Oh! pensamento que arrebata a alma! Esse é o ramo que corre sobre o muro. Não é como o fruto da terra, o qual não poderemos comer até atravessarmos o Jordão.", tags: ["perdão", "tribunal"] },
        { ordem: 3, icone: "🧼", titulo: "Livre de Condenação", conteudo: "Estamos agora, exatamente agora, perdoados; exatamente agora estão os nossos pecados descartados; exatamente agora estamos diante da presença de Deus aceitos como se nunca tivéssemos sido culpados. 'Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus' (Rm 8:1). Não há mancha nem nódoa que remanesça sobre qualquer crente.", tags: ["pureza", "aceitação"] },
        { ordem: 4, icone: "🏃", titulo: "Gastar e ser Gasto", conteudo: "Neste exato momento, não há pecado no Livro de Deus contra um sequer de Seu povo. Quem ousaria lhes intentar alguma acusação? Não há sequer mancha aos olhos do Juiz de toda a Terra. Que esse presente privilégio nos desperte para nossa presente responsabilidade; e agora, enquanto a vida continua, vamos gastar e ser gastos para o nosso doce Senhor Jesus.", tags: ["serviço", "gratidão"] }
      ],
      promessa: "Agora nenhuma condenação há para os que estão em Cristo Jesus.",
      meditacao: "Estamos tão justificados hoje quanto aqueles que já andam de linho branco no céu."
    },
    noite: {
      versiculo: { texto: "(…) justos aperfeiçoados", referencia: "Hb 12:23" },
      topicos: [
        { ordem: 1, icone: "⚖️", titulo: "Dois Tipos de Perfeição", conteudo: "Lembre-se que existem dois tipos de perfeição que o cristão precisa: a perfeição da justificação na pessoa de Jesus e a perfeição da santificação operada pelo Espírito Santo. No momento, a corrupção ainda permanece mesmo no coração dos regenerados. Dentro de nós ainda existem cobiças e pensamentos malignos.", tags: ["doutrina", "santidade"] },
        { ordem: 2, icone: "🧼", titulo: "Obra Terminada", conteudo: "Me alegro em saber que o dia está chegando, quando Deus terminará a obra que já começou; Ele apresentará minha alma não apenas perfeita em Cristo, mas perfeita por meio do Espírito, sem mancha ou defeito. Meu pobre coração pecador está para se tornar santo assim como Deus é santo. Oh, maravilhoso momento! Apressa-te!", tags: ["esperança", "promessa"] },
        { ordem: 3, icone: "🔥", titulo: "Batismo de Fogo", conteudo: "Quando eu atravessar o Jordão, a obra da santificação estará terminada. Assim, meu espírito terá seu último batismo no fogo do Espírito Santo. Parece-me que desejo morrer para receber a última e definitiva purificação que irá me introduzir no céu. Nenhum anjo será mais puro do que eu serei, pois poderei dizer 'eu estou limpo'.", tags: ["transformação", "céu"] },
        { ordem: 4, icone: "🌱", titulo: "Purificação Agora", conteudo: "Oh, como devemos exaltar o poder do Espírito Santo em nos tornar aptos! No entanto, não deixe que a esperança de perfeição futura nos faça contentar-nos com a imperfeição no presente. Se assim o for, nossa esperança não pode ser verdadeira; para uma boa esperança é preciso a purificação mesmo agora. A obra da graça deve estar habitando em nós agora.", tags: ["atitude", "vigilância"] }
      ],
      promessa: "Deus terminará a obra que já começou e apresentará sua alma sem mancha.",
      meditacao: "Nenhum anjo será mais puro do que você será através do sangue de Jesus e da obra do Espírito."
    }
  }
];

async function run() {
  console.log('🚀 Restaurando Fidelidade (Bloco 2: 09-15 de Maio)...');
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
  console.log('🏁 Bloco 2 concluído.');
}
run();
