require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-02",
    manha: {
      versiculo: { texto: "Não peço que os tires do mundo (…)", referencia: "Jo 17:15" },
      topicos: [
        { ordem: 1, icone: "🏠", titulo: "Ir para Casa", conteudo: "Um doce e abençoado evento ocorrerá, no tempo próprio de Deus, a todos os crentes: ir para casa para estar com Jesus. Em mais alguns anos, os soldados do Senhor, que agora militam 'a boa milícia da fé' (1Tm 6:12), encerrarão a batalha e entrarão na alegria do seu Senhor. Embora Cristo ore para que, ao final, Seu povo possa estar com Ele onde Ele está, no entanto, Ele não pede para que sejamos levados imediatamente para longe deste mundo em direção ao céu. Jesus deseja que fiquemos aqui.", tags: ["esperança", "céu"] },
        { ordem: 2, icone: "🌾", titulo: "Feixes Maduros", conteudo: "Cristo não pede a nossa imediata remoção; Ele nos deixa nas mãos de Seu Pai até que, como feixes de trigo completamente maduros, sejamos reunidos no celeiro de nosso Mestre. Jesus não pede pela nossa imediata remoção através da morte, pois permanecer na carne é necessário para os outros, senão benéfico para nós mesmos. Ele pede para que sejamos guardados do mal, mas nunca intercede para sermos admitidos à herança em glória até que estejamos completos em idade.", tags: ["propósito", "amadurecimento"] },
        { ordem: 3, icone: "⚖️", titulo: "Desejo de Partir", conteudo: "Os cristãos muitas vezes querem morrer quando têm algum problema. Pergunte a eles o porquê, e dizem: 'Porque nós estaríamos com o Senhor'. Tememos que não é tanto porque estejam desejosos de estarem com o Senhor, mas para se livrarem de seus problemas; do contrário, eles sentiriam o mesmo desejo de morrer em outros momentos. Eles querem ir para casa, não tanto para a companhia do Salvador, mas para estarem em repouso.", tags: ["sofrimento", "vontade"] },
        { ordem: 4, icone: "🛡️", titulo: "Glorificar no Mundo", conteudo: "É correto o desejo de partir se pudermos fazê-lo com o mesmo espírito que Paulo o fez, pois estar com Cristo é muito melhor, mas a vontade de escapar dos problemas é um desejo egoísta. Em vez disso, que o seu cuidado e desejo glorifiquem a Deus por sua vida aqui em baixo enquanto Ele quiser, mesmo que seja em meio a duros trabalhos, conflitos e sofrimentos, e deixe que Ele diga: 'É o suficiente'.", tags: ["fidelidade", "serviço"] }
      ],
      promessa: "Jesus deseja que fiquemos aqui até estarmos completos em idade para a herança.",
      meditacao: "Que sua vida glorifique a Deus aqui embaixo até que Ele diga: 'É o suficiente'."
    },
    noite: {
      versiculo: { texto: "Todos estes morreram na fé (…)", referencia: "Hb 11:13" },
      topicos: [
        { ordem: 1, icone: "📜", titulo: "Epitáfio dos Santos", conteudo: "Eis o epitáfio de todos os abençoados santos que dormiram antes da vinda de nosso Senhor! Não importa de que forma eles morreram, seja pela idade avançada ou por meios violentos; este é um ponto no qual todos concordam, e é o mais digno de registro: 'Todos estes morreram na fé'. Na fé viveram; ela foi o conforto, a direção, a motivação e o sustento deles; e, na mesma graça espiritual, eles morreram, encerrando sua canção de vida na doce cepa em que tanto tempo estiveram.", tags: ["fé", "legado"] },
        { ordem: 2, icone: "⏮️", titulo: "Referência ao Passado", conteudo: "Eles não morreram apoiando-se na carne ou em suas próprias realizações; eles não foram além de seus primeiros caminhos de aceitação, mas guardaram o caminho da fé até o fim. A fé é preciosa tanto para se morrer como para se viver por ela. Morrer na fé tem uma distinta referência ao passado, pois eles creram nas promessas que lhes precederam, e tiveram a certeza de que seus pecados foram apagados pela misericórdia de Deus.", tags: ["perdão", "promessa"] },
        { ordem: 3, icone: "⏭️", titulo: "Visão do Futuro", conteudo: "Morrer na fé tem a ver com o presente, pois estes santos estiveram confiantes de sua aceitação em Deus; eles desfrutaram os feixes de Seu amor e descansaram em Sua fidelidade. Morrer na fé contempla o futuro, pois eles dormiram afirmando que o Messias certamente viria, e que, quando Ele surgir nos últimos dias sobre a Terra, eles se levantarão de seus túmulos para contemplá-Lo. Para eles, as dores da morte foram senão as dores de parto para um estado melhor.", tags: ["esperança", "ressurreição"] },
        { ordem: 4, icone: "⭐", titulo: "Órbita da Fé", conteudo: "Coragem, minha alma, enquanto lês esse epitáfio. Teu percurso através da graça é pela fé, e a visão raramente te anima; e esse também tem sido o caminho dos mais brilhantes e dos melhores. A fé foi a órbita em que estas estrelas de primeira grandeza se moveram durante todo o tempo em que brilharam por aqui, e feliz és tu que ela seja tua. Esta noite, olhe novamente para Jesus, autor e consumador da tua fé (Hb 12:2).", tags: ["firmeza", "direção"] }
      ],
      promessa: "Feliz és tu que a fé seja tua; ela é preciosa tanto para se morrer como para se viver por ela.",
      meditacao: "Esta noite, olhe novamente para Jesus, autor e consumador da tua fé."
    }
  },
  {
    data: "2026-05-03",
    manha: {
      versiculo: { texto: "no mundo tereis aflições (…)", referencia: "Jo 16:33" },
      topicos: [
        { ordem: 1, icone: "🔥", titulo: "Fornalha do Refino", conteudo: "Estás a perguntar a razão disso, crente? Olhe para cima, para o teu Pai celestial, e contemple-O puro e santo. Sabes que um dia serás semelhante a Ele? Queres, então, ser conformado a Sua imagem facilmente? Não se exigirá muito refino na fornalha da aflição para te purificar? Será coisa fácil livrar-te das tuas corrupções, e fazer-te perfeito como é perfeito o vosso Pai que está no céu (Mt 5:48)?", tags: ["santificação", "aflição"] },
        { ordem: 2, icone: "🦁", titulo: "Inimigo ao Redor", conteudo: "Depois, cristão, vire os teus olhos para baixo. Sabes que inimigos tens debaixo de teus pés? Tu foste antigamente um servo de Satanás, e nenhum rei, de bom grado, perde seus súditos. Achas que Satanás te deixará em paz? No; ele estará sempre ao redor de ti, pois ele 'anda em derredor, bramando como leão, buscando a quem possa tragar' (1Pe 5:8). Portanto, cristão, espere por problemas quando olhares para baixo de ti.", tags: ["vigilância", "combate"] },
        { ordem: 3, icone: "🌍", titulo: "País Inimigo", conteudo: "Em seguida, olhe ao teu redor. Onde estás? Estás em um país inimigo; és um estranho e peregrino. O mundo não é teu amigo. Se o for, então, não és amigo de Deus, pois aquele que é o amigo do mundo constitui-se inimigo de Deus (Tg 4:4). Tenha certeza que acharás inimigos em toda parte. Quando te deitares, penses que estás descansando no campo de batalha; quando caminhares, suspeite de emboscadas em cada esquina.", tags: ["peregrinação", "mundo"] },
        { ordem: 4, icone: "❤️", titulo: "Coração Enganoso", conteudo: "Por fim, olhe para dentro de ti, para o teu próprio coração, e observa o que está lá. Pecado e egoísmo ainda estão lá dentro. Ah! ainda se não tivesses qualquer mal para te tentar, nenhum inimigo para lutar, nada mundano para te seduzir, tu encontrarias mal suficiente em ti mesmo para estar muitíssimo inquieto, pois 'enganoso é o coração, mais do que todas as coisas, e perverso' (Jr 17:9). Portanto, espere por problemas, mas não se desanime por causa deles.", tags: ["coração", "pecado"] }
      ],
      promessa: "Invoca-me no dia da angústia; eu te livrarei, e tu me glorificarás.",
      meditacao: "Espere por problemas, mas não se desanime, pois Deus é contigo para te ajudar e fortalecer."
    },
    noite: {
      versiculo: { texto: "socorro bem presente (…)", referencia: "Sl 46:1" },
      topicos: [
        { ordem: 1, icone: "💎", titulo: "Bênçãos Apropriadas", conteudo: "As bênçãos da aliança não foram destinadas para serem apenas observadas, mas sim, apropriadas. Até mesmo o nosso Senhor Jesus nos é dado para o nosso uso presente. Crente, tu não fazes uso de Cristo como deverias fazer. Quando estás em apuros, por que não contas a Ele toda a tua dor? Será que Ele não tem um coração compreensivo, ou não pode te confortar ou aliviar? Tu vais para os teus amigos, economizando teu melhor Amigo.", tags: ["fé", "aliança"] },
        { ordem: 2, icone: "🧼", titulo: "Uso da Fonte", conteudo: "Estás sobrecarregado com teus pecados neste dia? Aqui está a fonte cheia de sangue: use-a, santo, use-a. Acaso tens novamente um sentimento de culpa contra ti? A graça perdoadora de Jesus pode ser provada repetidas vezes. Venha sempre a Ele para a purificação. Lastimas a tua fraqueza? Ele é a tua força; por que não te inclinas sobre Ele?", tags: ["perdão", "purificação"] },
        { ordem: 3, icone: "🛡️", titulo: "Manto de Justiça", conteudo: "Tu te sentes despido? Venha, alma, e vista o Seu manto de justiça. Não fique olhando para Ele, mas use-O. Despe a tua própria justiça e também os teus medos; veste o alvo e justo linho, pois ele foi feito para ser usado. Tu te sentes doente? Puxe o sino noturno da oração e chame o Médico Amado! Ele te dará o cordial que irá te reviver.", tags: ["justiça", "oração"] },
        { ordem: 4, icone: "🤝", titulo: "Parente Poderoso", conteudo: "Tu és pobre, porém tens 'um parente, um homem valente e poderoso' (Rt 2:1). Porventura não irás ter com Ele para pedir-Lhe que te dê Sua abundância? Não há nada que Cristo mais desgoste do que Seu povo fazer pouco caso dEle e não usá-Lo. Ele gosta de ser utilizado por nós. Quanto mais encargos colocamos sobre Seus ombros, mais precioso Ele será para nós.", tags: ["comunhão", "provisão"] }
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
        { ordem: 1, icone: "🗿", titulo: "Tendência à Idolatria", conteudo: "Um grande pecado que afligia constantemente o antigo Israel era a idolatria, e o Israel espiritual é atormentado com uma tendência para a mesma loucura. A estrela de Renfã (At 7:43) já não brilha, porém Mamon (Mt 6:24) continua introduzindo seu bezerro de ouro, e os santuários do orgulho não foram abandonados. Egoísmos de várias formas lutam para subjugar os escolhidos debaixo de seu domínio.", tags: ["idolatria", "orgulho"] },
        { ordem: 2, icone: "🌵", titulo: "Ídolos do Coração", conteudo: "Filhos favorecidos são muitas vezes a causa de diversos pecados; o Senhor sofre quando nos vê delirar sobre eles; eles existirão para serem uma grande maldição para nós, ou serão levados de nós, deixando nossas casas desoladas. Si os cristãos desejam que os espinhos cresçam de modo a encherem seus insones travesseiros, deixe-os idolatrarem seus entes queridos.", tags: ["família", "apego"] },
        { ordem: 3, icone: "🪵", titulo: "Vaidade das Vaidades", conteudo: "Verdadeiramente foi dito que 'não são deuses', porque os objetos de nosso tolo amor são bênçãos muito duvidosas; o consolo que nos dão agora é perigoso, e a ajuda que podem nos dar nas horas de dificuldade é certamente pouca. Temos pena dos pobres pagãos que adoram um deus de pedra; no entanto, onde está a grande superioridade entre um deus de carne e um deus de madeira?", tags: ["vaidade", "clareza"] },
        { ordem: 4, icone: "⚖️", titulo: "Grave Iniquidade", conteudo: "O princípio, pecado e loucura, é o mesmo em ambos os casos, só que, em nosso caso, o crime é mais grave, pois temos mais esclarecimento, e pecamos diante de Deus. Os pagãos se curvam a uma divindade falsa, porém o verdadeiro Deus eles nunca conheceram; nós cometemos dois males, pois abandonamos o Deus vivo e nos convertemos aos ídolos!", tags: ["pecado", "conhecimento"] }
      ],
      promessa: "O consolo que os ídolos dão é perigoso, e a ajuda que dão nas dificuldades é pouca.",
      meditacao: "Que o Senhor nos expie a todos dessa grave iniquidade de abandonar o Deus vivo."
    },
    noite: {
      versiculo: { texto: "Sendo de novo gerados, não de semente corruptível, mas da incorruptível (…)", referencia: "1Pe 1:23" },
      topicos: [
        { ordem: 1, icone: "👑", titulo: "Nobre Origem", conteudo: "Pedro exorta os santos a amarem-se 'ardentemente uns aos outros com um coração puro' (1Pe 1:22); ele busca seu argumento na elevada e divina essência que Deus introduziu em Seu povo. Pedro contempla o povo de Deus como herdeiros da glória, príncipes de sangue real, descendentes do Rei dos reis, a mais verdadeira e antiga nobreza da Terra.", tags: ["identidade", "realeza"] },
        { ordem: 2, icone: "🧬", titulo: "Dinastia de Deus", conteudo: "'Veja que vos ameis uns aos outros por causa de sua nobre origem, tendo nascido da semente incorruptível; que vos ameis uns aos outros por causa de sua dinastia, sendo descendente de Deus, o Criador de todas as coisas; e que vos ameis uns aos outros por causa de seu destino imortal, pois vocês nunca morrerão, embora a glória da carne desaparecerá'.", tags: ["natureza", "amor"] },
        { ordem: 3, icone: "✨", titulo: "Dignidade Regenerada", conteudo: "O que é um cristão? Si você compará-lo a um rei, o cristão acrescenta santidade sacerdotal à dignidade real. Através de seu novo nascimento, ele está tão acima de seus companheiros como um homem está acima do animal que perece. Certamente ele deve conduzir-se como alguém que não é da multidão, mas escolhido do mundo, distinguido pela graça soberana.", tags: ["santidade", "escolha"] },
        { ordem: 4, icone: "🛡️", titulo: "Povo Adquirido", conteudo: "Inscrito entre 'o povo adquirido' (1Pe 2:9), o cristão não pode rastejar no pó como os demais, nem viver segundo a maneira dos cidadãos do mundo. Deixe a dignidade de sua natureza e o brilho de suas perspectivas, ó crentes em Cristo, constranger-vos a vos apegar à santidade e evitar a aparência do mal.", tags: ["conduta", "separação"] }
      ],
      promessa: "Vocês nunca morrerão; seu destino é imortal embora a glória da carne desapareça.",
      meditacao: "Reconheça a verdadeira dignidade de sua natureza regenerada e viva fazendo jus a ela."
    }
  },
  {
    data: "2026-05-05",
    manha: {
      versiculo: { texto: "eu serei o seu Deus e eles serão o meu povo.", referencia: "2Co 6:16" },
      topicos: [
        { ordem: 1, icone: "💎", titulo: "Especialidade", conteudo: "Que precioso título: 'Meu povo'! Que prazerosa revelação: 'Seu Deus'! Aqui há especialidade. O mundo inteiro é de Deus. O céu, o céu dos céus, é do Senhor, mas em relação àqueles que escolheu, aos quais comprou para Si mesmo, Ele diz o que não diz a outros: 'Meu povo'.", tags: ["escolha", "identidade"] },
        { ordem: 2, icone: "📜", titulo: "Ideia de Propriedade", conteudo: "Nessa frase há a ideia de propriedade. De modo especial, 'a porção do Senhor é o seu povo; Jacó é a parte da sua herança' (Dt 32:9). Todas as nações sobre a Terra são Suas; contudo, eles são o Seu povo, Seus escolhidos, mais especificamente Sua posse, pois Ele tem feito mais por eles do que pelos outros.", tags: ["propriedade", "herança"] },
        { ordem: 3, icone: "🩸", titulo: "Comprados com Sangue", conteudo: "Ele os comprou com Seu sangue; Ele os trouxe para perto de Si; Ele colocou Seu grande coração sobre eles; Ele os amou com um amor eterno, um amor que muitas águas não podem apagar (Ct 8:7), e que as revoluções do tempo nunca serão suficientes para diminuir um grau sequer.", tags: ["amor", "redenção"] },
        { ordem: 4, icone: "👨‍👩‍👧‍👦", titulo: "Favor Peculiar", conteudo: "Podem vocês, pela fé, verem a si mesmos nesse número? Podes ler o Livro da Inspiração e lá encontrar os registros da tua salvação? Podes tu, por humilde fé, segurar o manto de Jesus e dizer: 'Meu Cristo'? Si podes, então Deus diz de ti: 'Meu povo', pois o Senhor tem um peculiar e especial favor por você; você é o objeto de Sua escolha.", tags: ["salvação", "favor"] }
      ],
      promessa: "O amor eterno de Deus é um amor que as revoluções do tempo nunca diminuirão.",
      meditacao: "Podes tu, por humilde fé, segurar o manto de Jesus e dizer: 'Meu Cristo'?"
    },
    noite: {
      versiculo: { texto: "O que atenta prudentemente para o assunto achará o bem, e o que confia no Senhor será bem-aventurado", referencia: "Pv 16:20" },
      topicos: [
        { ordem: 1, icone: "🧭", titulo: "Sabedoria é Força", conteudo: "Sabedoria é a verdadeira força do homem; debaixo de sua orientação, ele realiza, do melhor modo, os fins de seu ser. Lidar sabiamente com as questões da vida dá ao homem um profundo prazer e demonstra o mais nobre domínio de suas capacidades. Sem sabedoria, o homem é como o potro selvagem, desperdiçando a força que poderia ser empregada.", tags: ["sabedoria", "direção"] },
        { ordem: 2, icone: "⚓", titulo: "A Bússola da Vida", conteudo: "Sabedoria é a bússola pela qual o homem é orientado; sem ela, é como um navio abandonado ao sabor dos ventos. O peregrino vai dolorosamente ferindo seus pés entre os abrolhos si não escolher seus passos com a máxima cautela. Aquele que está em um deserto infestado por ladrões deve tratar as questões com sabedoria si deseja uma viagem com segurança.", tags: ["prudência", "perigo"] },
        { ordem: 3, icone: "🌳", titulo: "Frutas Celestes", conteudo: "Si, treinados pelo Grande Mestre, formos por onde Ele conduz, acharemos o bem, mesmo nesta sombria morada; há frutas celestes a serem reunidas neste lado dos caramanchões do Éden, e hinos do paraíso a serem cantados em meio aos bosques da Terra. Contudo, onde poderá ser encontrada essa sabedoria? Muitos têm sonhado com ela, mas não a possuem.", tags: ["consolo", "recompensa"] },
        { ordem: 4, icone: "🗝️", titulo: "O Segredo da Confiança", conteudo: "Vamos ouvir a voz do Senhor, pois Ele declarou o segredo: 'O que confia no Senhor será bem-aventurado'. O verdadeiro modo de lidar sabiamente com uma questão é confiar no Senhor. Essa é a verdadeira pista para os labirintos mais intrincados da vida; siga-a, e encontre felicidade eterna. Aquele que confia no Senhor tem um diploma de sabedoria.", tags: ["confiança", "felicidade"] }
      ],
      promessa: "O que confia no Senhor será bem-aventurado e achará o bem.",
      meditacao: "Senhor, neste doce entardecer, caminhe comigo no jardim e ensina-me a sabedoria da fé."
    }
  },
  {
    data: "2026-05-06",
    manha: {
      versiculo: { texto: "Nisto conhecemos que estamos nele (…)", referencia: "1Jo 4:13" },
      topicos: [
        { ordem: 1, icone: "🏠", titulo: "Casa sem Preço", conteudo: "Você deseja uma casa para sua alma? É sem dinheiro e sem preço (Is 55:1). Ocupará você a casa de meu Senhor, em um contrato de arrendamento por toda a eternidade, nada pagando por isso, nada senão o aluguel de amá-Lo e servi-Lo para sempre? Acaso você receberá Jesus e 'habitará nEle'? Veja, esta casa está mobiliada com tudo aquilo que você precisa.", tags: ["graça", "refúgio"] },
        { ordem: 2, icone: "🍲", titulo: "Riquezas da Morada", conteudo: "Ela possui mais riquezas do que você poderá gastar. Aqui, você poderá ter comunhão íntima com Cristo e banquetear-se em Seu amor; aqui, há mesas repletas de alimentos para você viver eternamente; nesta casa, quando cansado, você achará descanso com Jesus, e dela você poderá olhar para fora e ver o próprio céu.", tags: ["comunhão", "provisão"] },
        { ordem: 3, icone: "🧼", titulo: "Purificação Diária", conteudo: "Si você se sente demasiado maltrapilho para tal casa, não se preocupe; há peças de vestuário em seu interior. Si você se sente culpado e condenado, venha; embora esta casa seja muito boa para você, Cristo fará você, dia a dia, bom o suficiente para ela. Jesus irá lavá-lo e purificá-lo, e você será capaz de cantar: 'Nós estamos nEle'.", tags: ["santificação", "aceitação"] },
        { ordem: 4, icone: "🏰", titulo: "Habitação Forte", conteudo: "Tu és muito privilegiado, pois tens uma 'habitação forte' (Sl 71:3), onde estarás sempre seguro. 'Habitando nEle', tens não apenas uma casa perfeita e segura, mas uma casa eterna. Quando este mundo tiver derretido como um sonho, a nossa casa permanecerá, mais sólido que o granito, pois ela é o próprio Deus, em quem 'nós permanecemos'.", tags: ["segurança", "eternidade"] }
      ],
      promessa: "Habitando nEle, tens não apenas uma casa perfeita e segura, mas uma casa eterna.",
      meditacao: "Crente, grandemente feliz estejas por ter uma tal morada! Tu és muito privilegiado."
    },
    noite: {
      versiculo: { texto: "(…) Todos os dias de meu combate esperaria (…)", referencia: "Jó 14:14" },
      topicos: [
        { ordem: 1, icone: "🍷", titulo: "Gosto Especial", conteudo: "Trabalho duro faz mais doce o descanso. Uma xícara com um pouco de quássia amarga aqui em baixo dará um gosto especial ao vinho novo que brilhará em taças douradas de glória. Nossa armadura surrada e nosso semblante cicatrizado tornará mais ilustre nossa vitória acima, quando formos saudados a nos assentar entre aqueles que venceram o mundo.", tags: ["sofrimento", "glória"] },
        { ordem: 2, icone: "🌊", titulo: "Comunhão no Batismo", conteudo: "Não teremos plena comunhão com Cristo si não residirmos aqui na Terra por algum tempo, pois Ele foi batizado com um batismo de sofrimento entre os homens, e temos de ser batizados com o mesmo batismo si quisermos compartilhar Seu reino. A comunhão com Cristo é tão honrada que o sofrimento mais doloroso é um baixo preço.", tags: ["comunhão", "renúncia"] },
        { ordem: 3, icone: "💎", titulo: "Diamante Cortado", conteudo: "A nossa prolongada estadia aqui é para a glória de Deus. Um santo tentado, tal como um diamante bem cortado, brilha muito bem na coroa do Rei. Nada reflete tanta honra a um trabalhador como a prolongada e severa prova do seu trabalho. Nós somos a obra das mãos de Deus em quem será Ele glorificado por nossas aflições.", tags: ["honra", "provação"] },
        { ordem: 4, icone: "⌛", titulo: "Tempo Fixado", conteudo: "É para a honra de Jesus que suportamos a prova de nossa fé com sagrada alegria. Que cada homem renda seus desejos pessoais para a glória de Jesus: 'si viver para sempre na Terra fará o meu Senhor mais glorioso, será meu céu ser excluído do céu'. Nosso tempo é fixado por decreto eterno. Esperemos com paciência até que os portões de pérola se abram.", tags: ["paciência", "soberania"] }
      ],
      promessa: "O sofrimento mais doloroso é um baixo preço para alcançar a plena comunhão com Cristo.",
      meditacao: "Nosso tempo é fixado por decreto eterno; esperemos com paciência a abertura dos portões de pérola."
    }
  },
  {
    data: "2026-05-07",
    manha: {
      versiculo: { texto: "acompanharam-no grandes multidões, e ele curou a todas.", referencia: "Mt 12:15" },
      topicos: [
        { ordem: 1, icone: "🏥", titulo: "Variedade de Males", conteudo: "Que multidão de horríveis doentes se colocou debaixo do olhar de Jesus! No entanto, Ele não sentiu repulsa, mas pacientemente atendeu a todos os casos. Que variedade singular de males se reuniu aos Seus pés! Úlceras repugnantes e feridas em putrefação! No entanto, Ele estava pronto para cada nova forma de maligna odiosidade, e foi vitorioso sobre todas elas.", tags: ["compaixão", "cura"] },
        { ordem: 2, icone: "⚔️", titulo: "Venceu em Tudo", conteudo: "De onde quer que a flecha viesse voando, Ele apagava seu poder incandescente. O calor da febre ou o frio da hidropisia; a letargia da paralisia ou a raiva da loucura; todos conheciam o poder de Sua palavra e fugiam ao Seu comando. Em cada canto da batalha Ele triunfou sobre o mal, e recebeu a admiração dos prisioneiros libertos. Ele 'veio, viu, e venceu'.", tags: ["poder", "vitória"] },
        { ordem: 3, icone: "🩺", titulo: "Médico das Almas", conteudo: "Qualquer que seja o meu caso, o Médico amado pode me curar; e qualquer que seja o estado de outros a quem eu possa lembrar em oração, eu posso ter esperança em Jesus. Meu filho, meu amigo, minha amada, eu posso ter esperança por cada um, quando me lembro do poder curativo de meu Senhor. Ele ainda faz maravilhas entre os filhos dos homens.", tags: ["esperança", "intercessão"] },
        { ordem: 4, icone: "🩸", titulo: "Pelas Suas Pisaduras", conteudo: "Que eu O glorifique ao lembrar como Ele forja Suas sagradas curas: foi tomando sobre Si as nossas enfermidades. 'Pelas suas pisaduras fomos sarados' (Is 53:5). A Igreja, na Terra, está cheia de almas curadas por nosso Médico amado, e os habitantes do céu confessam que 'Ele curou a todos'. Venha, então, minha alma, e anuncie a virtude de Sua graça.", tags: ["redenção", "louvor"] }
      ],
      promessa: "Aquele que na Terra caminhava entre doentes ainda dispensa Sua graça e faz maravilhas.",
      meditacao: "Vou ter com Ele imediatamente e diligentemente, pois Ele 'veio, viu e venceu' em todos os lugares."
    },
    noite: {
      versiculo: { texto: "Jesus disse-lhe: Levanta-te, toma o teu leito, e anda", referencia: "Jo 5:8" },
      topicos: [
        { ordem: 1, icone: "🏊", titulo: "Esperando em Vão", conteudo: "Como muitos outros, o indefeso homem estava esperando um milagre ser realizado ou um sinal ser manifestado. Exaustivamente ele observou a piscina, porém nenhum anjo veio; contudo, ele ainda aguardava sem saber que havia alguém perto dele cuja palavra poderia curá-lo em um instante. Muitos estão esperando por alguma emoção singular, ou visão celestial; eles esperam em vão.", tags: ["espera", "engano"] },
        { ordem: 2, icone: "❄️", titulo: "Frias Entradas", conteudo: "É uma reflexão muito triste que dezenas de milhares tenham aguardado como mortos, esperando em vão. Enquanto isso, essas pobres almas esquecem o presente Salvador, que as convida a olharem para Ele e serem salvas. Jesus poderia curá-las imediatamente, mas elas preferem esperar por algo extraordinário. Incrédulos preferem as frias entradas de Bethesda ao seio quente do Seu amor.", tags: ["incredulidade", "confiança"] },
        { ordem: 3, icone: "🗣️", titulo: "Voz que Constrange", conteudo: "Ó, que o Senhor, esta noite, possa voltar Seu olhar para as multidões que assim estão; que Ele possa perdoar o desprezo que colocam sobre Seu divino poder e chamá-las por essa doce voz que constrange, para que se levantem da cama do desespero e, na força da fé, tomem seu leito e andem. O Senhor ouve a nossa oração por todos os que possam olhar e viver.", tags: ["chamado", "perdão"] },
        { ordem: 4, icone: "🌅", titulo: "Olhar e Viver", conteudo: "Ó Senhor, ouve a nossa oração por todos os que, a esta calma hora do pôr do sol, e antes de romper o dia, possam olhar e viver (Is 45:22). Confiar nEle é o caminho seguro para todas as bênçãos, e Ele é digno da maior confiança. Cortês leitor, há qualquer coisa nesta porção para você?", tags: ["salvação", "decisão"] }
      ],
      promessa: "Confiar nEle é o caminho seguro para todas as bênçãos, e Ele é digno da maior confiança.",
      meditacao: "Jesus pode curar imediatamente aqueles que olham para Ele, em vez de esperarem por sinais extraordinários."
    }
  },
  {
    data: "2026-05-08",
    manha: {
      versiculo: { texto: "E o que fora curado não sabia quem era (…)", referencia: "Jo 5:13" },
      topicos: [
        { ordem: 1, icone: "⚡", titulo: "Mudança Consciente", conteudo: "Trinta e oito anos de doença devem ter sido um período cansativo. Quando Jesus o curou, o homem ficou prazerosamente consciente da mudança. Do mesmo modo, o pecador que tem estado paralisado em desespero e suspirando com cansaço pela salvação, é bastante consciente da mudança quando o Senhor Jesus fala a palavra de poder, e lhe dá alegria e paz ao crer.", tags: ["conversão", "experiência"] },
        { ordem: 2, icone: "🌑", titulo: "Ignorância sobre Jesus", conteudo: "O pobre homem era ignorante quanto ao autor de sua cura; ele não conhecia a sacralidade de Sua pessoa ou a missão que O trouxe entre os homens. Excessiva ignorância sobre Jesus ainda permanece nos corações que sentem o poder de Seu sangue. Não devemos condenar apressadamente, mas, onde vemos a fé que salva, devemos crer que a salvação foi concedida.", tags: ["conhecimento", "espírito"] },
        { ordem: 3, icone: "🛡️", titulo: "Saber Responder", conteudo: "O Espírito Santo torna os homens penitentes antes de fazê-los santos; aquele que acredita naquilo que sabe, em breve saberá mais claramente aquilo que acredita. A ignorância é um mal, pois este homem foi muito atormentado pelos fariseus e incapaz de confrontá-los. É bom ser capaz de responder aos contraditores, conhecendo o Senhor Jesus claramente.", tags: ["doutrina", "apologética"] },
        { ordem: 4, icone: "🏛️", titulo: "Visita no Templo", conteudo: "A cura de sua ignorância foi logo seguida da cura de sua enfermidade, pois ele recebeu a visita do Senhor no templo, e, depois daquela graciosa manifestação, ele foi encontrado testemunhando que 'Jesus era o que o curara' (Jo 5:15). Senhor, se Tu me salvaste, mostra-Te a mim para que eu possa declarar-Te aos filhos dos homens.", tags: ["testemunho", "revelação"] }
      ],
      promessa: "Aquele que acredita naquilo que sabe, em breve saberá mais claramente aquilo que acredita.",
      meditacao: "Senhor, se Tu me salvaste, mostra-Te a mim para que eu possa declarar-Te aos filhos dos homens."
    },
    noite: {
      versiculo: { texto: "Apega-te, pois, a ele (…)", referencia: "Jó 22:21" },
      topicos: [
        { ordem: 1, icone: "👨‍👦", titulo: "Conhecer o Pai", conteudo: "Si quisermos verdadeiramente nos apegarmos a Deus, devemos conhecê-Lo tal como Ele Se revelou. Esforça-te para conhecer o Pai; ponha sua cabeça em Seu seio, em profundo arrependimento, e confesse que você não é digno; receba o beijo de Seu amor; deixe o anel, que é o sinal de Sua fidelidade eterna, estar em seu dedo; sente-se a Sua mesa.", tags: ["arrependimento", "adoção"] },
        { ordem: 2, icone: "🤝", titulo: "Conhecer o Filho", conteudo: "Procure conhecer muito a respeito do Filho de Deus, que é o resplendor da glória do Pai, mas tornou-Se homem por nossa causa; conheça-O na complexidade de Sua natureza: Deus eterno, mas também sofredor, homem finito; siga-O, tanto quando caminha sobre as águas como quando Se assenta junto à fonte, no cansaço da humanidade. Conheça Jesus como seu amigo e irmão.", tags: ["intimidade", "cristo"] },
        { ordem: 3, icone: "🕊️", titulo: "Conhecer o Espírito", conteudo: "Não te esqueças do Espírito Santo; esforça-te para obter uma visão clara da Sua natureza. Contemple o Espírito que, antes de tudo, movia-Se sobre o caos e lhe trouxe ordem; Aquele que, agora, visita o caos da sua alma, e cria a ordem da santidade. Contemple-O como o Senhor que dá vida espiritual, o Iluminador, Instrutor e Consolador.", tags: ["santificador", "consolo"] },
        { ordem: 4, icone: "♾️", titulo: "Trindade na Unidade", conteudo: "Contemple-O, como santa unção, ao descer sobre a cabeça de Jesus e, então, repousar sobre vós, que sois como as bordas de Suas vestes. Tal crença racional, bíblica, e experimental da Trindade na Unidade é sua, si você verdadeiramente conhecer a Deus, e esse conhecimento, de fato, traz paz. Não se contente até que entenda algo do 'nossa' em 'Façamos o homem à nossa imagem'.", tags: ["trindade", "paz"] }
      ],
      promessa: "O conhecimento racional, bíblico e experimental da Trindade traz a verdadeira paz.",
      meditacao: "Esforce-se para conhecer o Pai, o Filho e o Espírito Santo em toda a Sua glória e graça."
    }
  }
];

async function run() {
  console.log('🚀 Restaurando Fidelidade (Bloco 1: 02-08 de Maio)...');
  for (const day of batch) {
    // Correct way to upsert multiple flat rows
    const entries = [
      {
        data: day.data,
        periodo: "Manhã",
        versao: "original",
        versiculo: day.manha.versiculo,
        topicos: day.manha.topicos,
        promessa: day.manha.promessa,
        meditacao: day.manha.meditacao
      },
      {
        data: day.data,
        periodo: "Noite",
        versao: "original",
        versiculo: day.noite.versiculo,
        topicos: day.noite.topicos,
        promessa: day.noite.promessa,
        meditacao: day.noite.meditacao
      }
    ];

    const { error } = await supabase.from('devocionais').upsert(entries, { onConflict: 'data, periodo, versao' });
    if (error) console.error(`❌ Erro em ${day.data}:`, error.message);
    else console.log(`✅ ${day.data} restaurado com fidelidade absoluta.`);
    
    // Save to Obsidian as well
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
  console.log('🏁 Bloco 1 concluído.');
}
run();
