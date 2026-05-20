require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-06-01",
    manha: {
      original: {
        versiculo: { texto: "(…) E foi a tarde e a manhã, o dia primeiro", referencia: "Gn 1:5" },
        topicos: [
          { ordem: 1, icone: "🌗", titulo: "Alternância Necessária", conteudo: "Luz e escuridão dividiram o reinado do tempo no primeiro dia. Não é motivo de admiração se nossas circunstâncias mudarem do sol da prosperidade para a noite da adversidade. O brilho do meio-dia não será constante; devemos esperar períodos para buscar o Amado durante a noite.", tags: ["equilíbrio", "soberania"] },
          { ordem: 2, icone: "🎶", titulo: "Melodia Mesclada", conteudo: "Todos os amados do Senhor tiveram que cantar a mesclada melodia de juízo e misericórdia, de luto e deleite. É um arranjo da Divina Providência que dia e noite não cessarão até chegarmos à terra onde não haverá mais noite. O que nosso Pai celestial ordena é sempre sábio e bom.", tags: ["providência", "confiança"] },
          { ordem: 3, icone: "🦉", titulo: "Cântico Noturno", conteudo: "Aprenda a se contentar com a ordem divina e a receber o mal da mão do Senhor assim como o bem. Louve ao Senhor pela escuridão da noite assim como pelo sol da alegria. Como o rouxinol, derrame suas notas em todas as horas, pois os orvalhos da graça caem pesadamente na noite da tristeza.", tags: ["gratidão", "paz"] },
          { ordem: 4, icone: "✨", titulo: "Estrelas da Promessa", conteudo: "As estrelas da promessa brilham gloriosamente em meio à escuridão da dor. Continue sua tarefa sob todas as circunstâncias; cada hora tem o seu dever. Sua noite de velhice se aproxima, mas não tema: o Senhor disse que o Seu amado habitará seguro com Ele e será coberto todo o dia.", tags: ["promessa", "segurança"] }
        ],
        promessa: "O Senhor te cobrirá e te manterá seguro tanto no dia da alegria quanto na noite da tristeza.",
        meditacao: "Aceite a alternância da vida com gratidão; a noite é o tempo em que as estrelas das promessas de Deus brilham mais."
      },
      simples: {
        versiculo: { texto: "Houve a tarde e a manhã: esse foi o primeiro dia.", referencia: "Gn 1:5" },
        topicos: [
          { ordem: 1, icone: "🌗", titulo: "Dias Bons e Ruins", conteudo: "Na vida, teremos momentos de muita luz e alegria, mas também momentos de escuridão e tristeza. Isso faz parte do plano de Deus desde o primeiro dia da criação. Não estranhe se as coisas mudarem de repente; saiba que Deus continua no controle tanto no sol quanto na sombra.", tags: ["mudança", "fé"] },
          { ordem: 2, icone: "🎶", titulo: "A Música da Vida", conteudo: "A nossa caminhada com Deus é como uma música que tem notas altas e baixas. Precisamos aprender a agradecer a Deus em todos os momentos. No céu, não teremos mais tristeza, mas enquanto estamos aqui, o Pai usa as dificuldades para nos ensinar a confiar mais dEle.", tags: ["gratidão", "ensino"] },
          { ordem: 3, icone: "🦉", titulo: "Aprender a Confiar", conteudo: "Tente ficar calmo mesmo quando os problemas aparecerem. Deus é bom e sábio em tudo o que faz. Assim como algumas flores só abrem à noite, algumas bênçãos de Deus só aparecem nos momentos difíceis. Louve ao Senhor em qualquer situação e sinta a paz dEle te abraçar.", tags: ["paz", "confiança"] },
          { ordem: 4, icone: "✨", titulo: "Sempre Seguro", conteudo: "Não tenha medo do futuro. As promessas de Deus são como estrelas que iluminam a nossa noite. Elas nos mostram que não estamos sozinhos e que o amanhã será melhor. Você está seguro nas mãos de Deus o tempo todo; descanse nessa certeza e durma em paz.", tags: ["segurança", "futuro"] }
        ],
        promessa: "Deus prometeu estar com você e te proteger em todos os momentos do seu dia e da sua noite.",
        meditacao: "Deixe que a paz de Deus ilumine o seu coração hoje, não importa como foi o seu dia."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) e fará o seu deserto como o Éden (…)", referencia: "Is 51:3" },
        topicos: [
          { ordem: 1, icone: "🏜️", titulo: "Cenário de Aridez", conteudo: "O deserto da alma pode parecer um mar de areia sem limites, árido e repleto de lembranças de fracassos passados. É um lugar onde a angústia parece não ter fim e a esperança se perde na vastidão do vazio. Contudo, é exatamente nesse cenário que Deus opera Seus maiores milagres.", tags: ["vazio", "necessidade"] },
          { ordem: 2, icone: "🌹", titulo: "Plantação de Renome", conteudo: "Subitamente, da areia escaldante, surge Jesus, a Plantação de Renome. Conforme Ele floresce, o perfume de Sua presença transforma o deserto em campo fértil. A glória e a excelência divina são dadas ao coração que antes estava seco, mudando a paisagem de morte para uma de vida imortal.", tags: ["jesus", "transformação"] },
          { ordem: 3, icone: "💎", titulo: "De Órfão a Príncipe", conteudo: "Você foi encontrado como uma criança desamparada e suja, mas uma divina mão jogou uma jóia em seu seio. Pela graça, você foi lavado, purificado e adotado na família celestial. O anel de fidelidade está em sua mão e agora você é um príncipe diante de Deus, transformado pelo poder incomparável da adoção.", tags: ["adoção", "graça"] },
          { ordem: 4, icone: "🎤", titulo: "Cântico de Alegria", conteudo: "A presença de Jesus faz novas todas as coisas. Ele transforma o coração estéril em um jardim que canta de alegria. Não chame mais sua vida de deserto, mas de Paraíso, pois a ressurreição foi proclamada em você. Admire o apreço excessivo do Senhor que te buscou quando você estava perdido.", tags: ["alegria", "restauração"] }
        ],
        promessa: "O Senhor transformará o seu deserto em um jardim de delícias e a sua tristeza em cântico.",
        meditacao: "Jesus está florescendo no meio da sua dificuldade; sinta o perfume da presença dEle transformando tudo ao seu redor."
      },
      simples: {
        versiculo: { texto: "O Senhor transformará o deserto em um jardim como o Éden.", referencia: "Is 51:3" },
        topicos: [
          { ordem: 1, icone: "🏜️", titulo: "Momentos Difíceis", conteudo: "Às vezes, a nossa vida parece um deserto seco e sem graça, onde nada de bom acontece. É fácil se sentir cansado e sem esperança nessas horas. Mas não se esqueça de que Deus vê o seu deserto e já tem um plano maravilhoso para mudar essa situação.", tags: ["esperança", "consolo"] },
          { ordem: 2, icone: "🌹", titulo: "A Chegada de Jesus", conteudo: "Jesus é como uma flor linda que nasce no meio da areia seca. Quando Ele chega na nossa vida, tudo começa a mudar. O perfume do amor dEle traz vida e alegria onde antes só havia tristeza. Ele transforma o nosso deserto em um jardim cheio de flores e frutos bons.", tags: ["jesus", "mudança"] },
          { ordem: 3, icone: "💎", titulo: "Você é Especial", conteudo: "Você pode ter se sentido sozinho e esquecido, mas Deus te adotou como filho. Ele te limpou, te deu roupas novas e te trata como um príncipe ou princesa. Você agora pertence à família de Deus! Sinta o valor que você tem para o Pai do céu; você é o tesouro dEle.", tags: ["valor", "família"] },
          { ordem: 4, icone: "🎤", titulo: "Motivo para Cantar", conteudo: "Onde antes havia silêncio e solidão, agora Deus coloca uma música de felicidade. Jesus faz tudo ficar novo de novo. Agradeça ao Senhor por Ele não ter te deixado no deserto e por estar transformando a sua vida em um lugar lindo e cheio de paz. Comemore a sua nova vida!", tags: ["alegria", "gratidão"] }
        ],
        promessa: "Deus prometeu fazer coisas incríveis na sua vida e transformar toda a sua dor em felicidade.",
        meditacao: "Durma feliz sabendo que você é um filho amado do Rei e que o seu jardim está florescendo."
      }
    }
  },
  {
    data: "2026-06-02",
    manha: {
      original: {
        versiculo: { texto: "Porque a carne cobiça contra o Espírito, e o Espírito contra a carne (…)", referencia: "Gl 5:17" },
        topicos: [
          { ordem: 1, icone: "⚔️", titulo: "Luta Constante", conteudo: "No coração de cada crente há uma luta entre a velha e a nova natureza. A velha natureza utiliza todas as armas contra a graça recém-nascida, enquanto a nova natureza vigia para resistir. Essa batalha dura todo o caminho entre o Portão Estreito e o rio Jordão; o inimigo nunca sairá enquanto estivermos neste corpo.", tags: ["conflito", "santificação"] },
          { ordem: 2, icone: "🛡️", titulo: "Toda a Armadura", conteudo: "A graça em nós emprega oração, fé, esperança e amor para expulsar o mal, tomando 'toda a armadura de Deus'. Embora estejamos sitiados e em conflito doloroso, temos um Todo-Poderoso Ajudante, Jesus, o Capitão da nossa salvação, que nos garante a vitória final e nos faz mais que vencedores.", tags: ["proteção", "jesus"] },
          { ordem: 3, icone: "🚩", titulo: "Bandeira da Vitória", conteudo: "Não desanime se Satanás, o mundo e a carne estão contra você. Lute, pois o próprio Deus está contigo! Jeová Nissi é a sua bandeira e Jeová Rafá é quem cura as suas enfermidades. Quem pode derrotar a Onipotência? A natureza recém-nascida é mais que capaz contra seus inimigos sob o comando de Cristo.", tags: ["vitória", "onipotência"] },
          { ordem: 4, icone: "🏆", titulo: "Recompensa Prometida", conteudo: "Lute 'olhando para Jesus', e apesar de longo e severo ser o conflito, doce será a vitória. A presença do Capitão nos garante que nenhum inimigo poderá prevalecer. A jornada é difícil, mas a recompensa prometida é gloriosa e eterna para aqueles que perseveram na fé e na dependência do Salvador.", tags: ["perseverança", "foco"] }
        ],
        promessa: "Deus está com você na batalha e te garante a vitória final sobre toda a tentação.",
        meditacao: "Não confie na sua própria força; olhe para Jesus, o Capitão da sua salvação, e Ele lutará por você."
      },
      simples: {
        versiculo: { texto: "A nossa velha natureza luta contra o Espírito de Deus.", referencia: "Gl 5:17" },
        topicos: [
          { ordem: 1, icone: "⚔️", titulo: "Guerra Interior", conteudo: "Dentro de nós, existe uma briga entre o que é certo e o que é errado. Às vezes, sentimos vontade de fazer coisas ruins, mas o Espírito de Deus nos puxa para o bem. Essa luta vai durar toda a nossa vida aqui na Terra. O importante é não desistir de tentar agradar a Deus todos os dias.", tags: ["luta", "escolhas"] },
          { ordem: 2, icone: "🛡️", titulo: "O Melhor Ajudante", conteudo: "Você não está sozinho nessa briga. Jesus é o seu 'Capitão' e Ele é muito mais forte que qualquer tentação. Quando você se sentir fraco, peça ajuda a Ele através da oração. Jesus prometeu que quem confia nEle sempre termina vencendo, não importa quão difícil pareça a situação.", tags: ["ajuda", "jesus"] },
          { ordem: 3, icone: "🚩", titulo: "Deus no Comando", conteudo: "Deus é como uma bandeira que nos guia no meio da confusão. Ele também cura as nossas feridas e nos dá ânimo para continuar. Não tenha medo das dificuldades; lembre-se de que Deus é todo-poderoso e nada pode derrotar o Senhor. Siga as instruções dEle e você ficará seguro.", tags: ["força", "segurança"] },
          { ordem: 4, icone: "🏆", titulo: "Prêmio Final", conteudo: "Continue fazendo o que é certo, mantendo os olhos fixos em Jesus. A caminhada pode ser longa e cansativa, mas a alegria de vencer com Cristo vale muito a pena. No final, Deus tem um prêmio maravilhoso preparado para você no céu, onde não haverá mais lutas ou tristezas.", tags: ["perseverança", "alegria"] }
        ],
        promessa: "Jesus prometeu que estaria ao seu lado em cada dificuldade e te daria forças para vencer o mal.",
        meditacao: "Sempre que você sentir que vai errar, chame por Jesus; Ele terá prazer em te ajudar a acertar."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) Bom Mestre (…)", referencia: "Mt 19:16" },
        topicos: [
          { ordem: 1, icone: "📖", titulo: "Mestre de Comando e Ensino", conteudo: "Jesus é o meu Mestre em dois sentidos: Ele comanda minhas ações e ensina minha alma. Tenho prazer tanto em cumprir Suas incumbências como em sentar aos Seus pés como Seu discípulo. Considero minha maior honra possuir essa dupla natureza de servo e aprendiz do Senhor.", tags: ["serviço", "aprendizado"] },
          { ordem: 2, icone: "✨", titulo: "Bondade Divina", conteudo: "Embora não haja bom senão Deus, Jesus é Deus, e toda a benevolência da Divindade brilha nEle. Em minha experiência, tudo o que recebi de bom veio por meio dEle. Ele foi bom para mim quando eu estava morto no pecado e continua sendo bom em todas as minhas necessidades e tristezas.", tags: ["bondade", "jesus"] },
          { ordem: 3, icone: "🕊️", titulo: "Liberdade e Amor", conteudo: "Não poderia haver melhor Mestre, pois Seu culto é verdadeira liberdade e Seu mandamento é a essência do amor. Quando Ele me ensina, Sua doutrina é divina e Seu espírito é a própria suavidade. Nenhum erro se mistura com Sua instrução; Seus ensinamentos levam à bondade e santificam o discípulo.", tags: ["liberdade", "santificação"] },
          { ordem: 4, icone: "👑", titulo: "Exército da Sabedoria", conteudo: "Anjos e antigos santos se alegram em servir a este Mestre. Tomar o Seu suave jugo é alistar-se em um exército real que traz felicidade eterna. Darei testemunho dEle diante de todos para que busquem a Jesus como seu Mestre, pois ninguém nunca se arrependerá de seguir os passos do Salvador.", tags: ["testemunho", "fidelidade"] }
        ],
        promessa: "Ao seguir a Jesus como seu Mestre, você encontrará a verdadeira sabedoria e a liberdade que só o amor dEle pode dar.",
        meditacao: "Sentar aos pés de Jesus é o lugar de maior segurança e aprendizado que existe; ouça a voz dEle hoje."
      },
      simples: {
        versiculo: { texto: "Bom Mestre, o que devo fazer para ter a vida eterna?", referencia: "Mt 19:16" },
        topicos: [
          { ordem: 1, icone: "📖", titulo: "O Melhor Professor", conteudo: "Jesus é o melhor professor que alguém pode ter. Ele nos ensina como viver de um jeito que agrada a Deus e também nos diz o que é melhor para nós. Aprender com Jesus é um privilégio incrível; quanto mais tempo passamos 'ouvindo' o que Ele diz na Bíblia, mais sábios ficamos.", tags: ["ensino", "sabedoria"] },
          { ordem: 2, icone: "✨", titulo: "Deus é Bom", conteudo: "Tudo o que é bom na nossa vida vem de Jesus. Ele nos amou mesmo quando a gente não merecia e continua cuidando de nós com muito carinho. Ele é bondoso em todos os momentos: quando estamos tristes, Ele nos consola; quando precisamos de algo, Ele nos ajuda.", tags: ["amor", "carinho"] },
          { ordem: 3, icone: "🕊️", titulo: "Mandamentos de Amor", conteudo: "Seguir a Jesus não é um peso, é uma alegria! Os pedidos dEle são baseados no amor e servem para nos proteger. Quando obedecemos a Jesus, nos sentimos livres e leves. A verdade que Ele ensina limpa o nosso coração e nos ajuda a sermos pessoas cada dia melhores.", tags: ["alegria", "paz"] },
          { ordem: 4, icone: "👑", titulo: "Escolha Sábia", conteudo: "Escolher Jesus como o seu guia é a decisão mais inteligente que você pode tomar. Você nunca vai se arrepender de seguir os conselhos dEle. Conte para os seus amigos como Jesus é bom para que eles também queiram ser amigos dEle. Estar no time de Jesus é estar no time vencedor para sempre.", tags: ["decisão", "amizade"] }
        ],
        promessa: "Jesus prometeu que quem aprende com Ele encontra descanso e paz para a alma.",
        meditacao: "Termine o dia pensando no que Jesus te ensinou hoje e durma com o coração grato."
      }
    }
  },
  {
    data: "2026-06-03",
    manha: {
      original: {
        versiculo: { texto: "Estes foram oleiros, e habitavam nas hortas e nos cerrados; estes ficaram ali com o rei na sua obra", referencia: "1Cr 4:23" },
        topicos: [
          { ordem: 1, icone: "🏺", titulo: "Serviço Real Humilde", conteudo: "Oleiros não eram trabalhadores graduados, contudo o Rei precisava deles. Assim, estavam a serviço real, ainda que trabalhassem com barro. Podemos estar na parte mais humilde da obra, mas é um grande privilégio fazer qualquer coisa para 'o Rei'. Obedeça seu chamado com esperança.", tags: ["humildade", "serviço"] },
          { ordem: 2, icone: "🏡", titulo: "Posição Designada", conteudo: "Eles habitavam em cerrados e faziam trabalhos duros, enquanto poderiam desejar a vida refinada da cidade. Mas mantiveram suas posições porque estavam fazendo a obra do Rei. O lugar da nossa habitação é predeterminado; busque servir ao Senhor onde você está, sendo uma bênção para os que o rodeiam.", tags: ["fidelidade", "propósito"] },
          { ordem: 3, icone: "🤝", titulo: "Companhia do Rei", conteudo: "Nenhum lugar ou ocupação, embora dura, pode impedir a comunhão com nosso divino Senhor. Eles habitavam lá 'com o Rei'. Em visitas a abrigos, prisões ou trabalhos desconhecidos entre a miséria, vamos com Jesus. É quando estamos em Sua obra que podemos esperar Seu sorriso constante.", tags: ["comunhão", "presença"] },
          { ordem: 4, icone: "✨", titulo: "Tesouros no Barro", conteudo: "Trabalhadores desconhecidos, tenham bom ânimo! Jóias são encontradas sobre monturos e potes de barro são preenchidos com tesouro celestial. Malignas ervas daninhas são transformadas em flores preciosas. Habite com o Rei pela Sua obra, e quando Ele escrever Suas crônicas, seu nome será lembrado eternamente.", tags: ["valor", "recompensa"] }
        ],
        promessa: "O Rei valoriza o seu trabalho, por mais simples que seja, e promete estar com você em cada tarefa.",
        meditacao: "Não despreze o seu lugar atual; o Rei está com você no meio do seu trabalho diário."
      },
      simples: {
        versiculo: { texto: "Eles eram oleiros e trabalhavam para o rei onde moravam.", referencia: "1Cr 4:23" },
        topicos: [
          { ordem: 1, icone: "🏺", titulo: "Você é Importante", conteudo: "Não importa se o que você faz parece pequeno ou simples; se você faz para Deus, é um trabalho importante. Deus usa pessoas comuns para fazer coisas especiais. Sinta-se honrado por poder servir ao Rei do Universo com os talentos que Ele te deu, mesmo nos detalhes do dia a dia.", tags: ["valor", "atitude"] },
          { ordem: 2, icone: "🏡", titulo: "Brilhe Onde Estiver", conteudo: "Às vezes a gente queria estar em outro lugar ou fazendo outra coisa, mas Deus nos colocou onde estamos por um motivo. Tente ser a melhor pessoa possível na sua casa, na sua escola ou no seu trabalho. Seja uma bênção para quem está perto de você; é aí que a sua missão começa.", tags: ["foco", "missão"] },
          { ordem: 3, icone: "🤝", titulo: "Jesus Trabalha com Você", conteudo: "Jesus está sempre ao seu lado, até quando você está fazendo as coisas chatas ou difíceis. Ele gosta de te acompanhar em tudo. Você pode conversar com Ele enquanto trabalha ou estuda. Saber que o Rei está com você transforma qualquer lugar em um lugar especial e cheio de paz.", tags: ["amizade", "paz"] },
          { ordem: 4, icone: "✨", titulo: "Deus não Esquece", conteudo: "Deus vê cada pequeno gesto de amor e cada esforço que você faz. Ele guarda tudo na memória dEle. Um dia, Ele vai mostrar como o seu trabalho simples ajudou muita gente e agradou ao coração dEle. Continue sendo fiel e dedicado; o seu nome é muito importante para o Senhor.", tags: ["recompensa", "amor"] }
        ],
        promessa: "Deus prometeu abençoar tudo o que você fizer com amor e dedicação para Ele.",
        meditacao: "Faça tudo hoje como se estivesse fazendo diretamente para Jesus e sinta a alegria disso."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) humilhou-se a si mesmo (…)", referencia: "Fp 2:8" },
        topicos: [
          { ordem: 1, icone: "🦶", titulo: "Exemplo de Humildade", conteudo: "Jesus é o grande mestre da humildade. Veja o Mestre tomando uma toalha e lavando os pés de Seus discípulos! Se Ele, sendo Senhor, Se fez servo dos servos, como poderemos ser orgulhosos? A biografia de Jesus pode ser resumida em: 'Humilhou-se a si mesmo' por amor a nós.", tags: ["humildade", "exemplo"] },
          { ordem: 2, icone: "🩸", titulo: "O Preço da Limpeza", conteudo: "Fique ao pé da cruz e conte as gotas carmesim pelas quais foste limpo. Repare a coroa de espinhos e as feridas de Jesus. Ele foi levado ao nível mais baixo de escárnio e desprezo para te salvar. Um sentimento do incrível amor de Cristo nos humilha mais do que a consciência da nossa própria culpa.", tags: ["sacrifício", "amor"] },
          { ordem: 3, icone: "🙇", titulo: "Posição Prostrada", conteudo: "Se você não ficar humilhado na presença de Jesus, você não O conhece. Você estava tão perdido que nada poderia salvá-lo senão o sacrifício do unigênito de Deus. Curve-se em humildade aos Seus pés, reconhecendo que tudo o que você tem de bom é fruto do perdão e da misericórdia dEle.", tags: ["adoração", "gratidão"] },
          { ordem: 4, icone: "🛡️", titulo: "Morte ao Orgulho", conteudo: "O orgulho não pode viver sob a cruz do Calvário. Vamos sentar ali e aprender a nossa lição de mansidão. Tome o humilde lugar de quem muito ama porque muito foi perdoado. Aplique essa humildade na prática da sua vida diária, tratando os outros com a mesma suavidade que Cristo te tratou.", tags: ["caráter", "mansidão"] }
        ],
        promessa: "Deus exalta os humildes e dá graça aos que reconhecem a sua total dependência dEle.",
        meditacao: "Lembre-se do quanto Jesus Se inclinou para te buscar; deixe que isso tire todo o orgulho do seu coração."
      },
      simples: {
        versiculo: { texto: "Jesus humilhou a si mesmo e foi obediente até a morte.", referencia: "Fp 2:8" },
        topicos: [
          { ordem: 1, icone: "🦶", titulo: "Coração Humilde", conteudo: "Jesus, que é o Rei de tudo, lavou os pés dos Seus amigos para mostrar que o importante é servir e amar. Ele nos ensina que não precisamos ser 'mais que os outros'. Ser humilde é reconhecer que precisamos de Deus e que devemos tratar todas as pessoas com muito respeito.", tags: ["humildade", "jesus"] },
          { ordem: 2, icone: "🩸", titulo: "Amor sem Limites", conteudo: "Jesus sofreu muito na cruz porque te ama demais. Ele deixou toda a Sua glória no céu para vir aqui nos salvar. Quando pensamos no quanto Ele sofreu por nós, nosso coração se enche de gratidão e perdemos a vontade de sermos orgulhosos ou egoístas. O amor dEle nos muda.", tags: ["amor", "gratidão"] },
          { ordem: 3, icone: "🙇", titulo: "Agradecer Sempre", conteudo: "Tudo o que temos de bom foi presente de Deus. Reconhecer isso nos ajuda a sermos mais felizes e menos teimosos. Ajoelhe-se e diga: 'Obrigado, Jesus, por me amar tanto!'. Esse é o melhor lugar para se estar: pertinho de Deus, reconhecendo que Ele é o nosso Senhor e Salvador.", tags: ["oração", "valor"] },
          { ordem: 4, icone: "🛡️", titulo: "Tratar Bem as Pessoas", conteudo: "Aprenda com Jesus a ser gentil e paciente com todo mundo. Se o Rei do Universo foi humilde, nós também podemos ser. Tente ajudar alguém hoje sem esperar nada em troca. Isso é viver como Jesus viveu e é o que traz a verdadeira paz para a nossa alma.", tags: ["atitude", "paz"] }
        ],
        promessa: "Deus prometeu abençoar e dar sabedoria para quem escolhe o caminho da humildade.",
        meditacao: "Sinta o carinho de Jesus nesta noite e peça para Ele te dar um coração humilde como o dEle."
      }
    }
  },
  {
    data: "2026-06-04",
    manha: {
      original: {
        versiculo: { texto: "(…) a benignidade e amor de Deus, nosso Salvador (…)", referencia: "Tt 3:4" },
        topicos: [
          { ordem: 1, icone: "🍯", titulo: "Campo de Deleite", conteudo: "Não há nada mais agradável que ser levado pelo Espírito ao campo fértil da comunhão com o Salvador. Considerar a história de amor do Redentor traz à memória mil atos de afeição que entrelaçam nossa alma com a mente de Jesus. É um deleite que farta o espírito regenerado.", tags: ["comunhão", "alegria"] },
          { ordem: 2, icone: "🌊", titulo: "Amor Insuportável", conteudo: "Quando meditamos nesse incrível amor e vemos o todo-glorioso Jesus dotando Sua Igreja com Sua riqueza, a alma pode esvair-se de alegria. Quem pode suportar tamanho amor? O que o Espírito nos revela agora é apenas uma amostra; quão arrebatadora será a visão completa no céu!", tags: ["amor", "revelação"] },
          { ordem: 3, icone: "🏰", titulo: "Tesouros de José", conteudo: "Irrompam as portas dos celeiros de nosso 'José' e vejam a abundância que Ele tem guardado para nós. Pela fé vemos, como por um vidro escuro, a imagem de Seus ilimitados tesouros. Mas quando virmos as coisas celestiais face a face, nossa alma mergulhará em um fluxo profundo de comunhão eterna.", tags: ["herança", "esperança"] },
          { ordem: 4, icone: "🎶", titulo: "Sonetos de Gratidão", conteudo: "Nossos mais altos sonetos estão reservados para Jesus Cristo, nosso Senhor, cujo amor por nós é maravilhoso e ultrapassa qualquer amor humano. Que essa compreensão do amor divino nos inunde e nos leve a uma adoração mais profunda a cada dia, enquanto aguardamos a plenitude da glória.", tags: ["adoração", "gratidão"] }
        ],
        promessa: "Deus revelará a abundância do Seu amor e dos Seus tesouros celestiais a você.",
        meditacao: "Mergulhe hoje na meditação sobre o amor de Jesus e deixe que essa doçura alegre a sua alma."
      },
      simples: {
        versiculo: { texto: "Deus mostrou a sua bondade e o seu amor por nós.", referencia: "Tt 3:4" },
        topicos: [
          { ordem: 1, icone: "🍯", titulo: "Doçura de Deus", conteudo: "Passar um tempo com Jesus é a melhor coisa do mundo. É como estar em um lugar lindo e tranquilo, onde tudo é bom. Quando pensamos no carinho que Jesus tem por nós, nosso coração fica feliz e calmo. Ele gosta muito de ser o seu amigo e de conversar com você.", tags: ["paz", "amizade"] },
          { ordem: 2, icone: "🌊", titulo: "Amor Gigante", conteudo: "O amor de Jesus é tão grande que às vezes a gente nem consegue entender tudo. Ele nos dá tantas coisas boas que a gente fica até sem palavras. O que sentimos hoje é só um pouquinho do que vamos sentir no céu, onde veremos Jesus de verdade e sentiremos todo esse amor de perto.", tags: ["amor", "céu"] },
          { ordem: 3, icone: "🏰", titulo: "Presentes do Rei", conteudo: "Jesus tem muitos presentes guardados para você! É como se Ele tivesse um armazém cheio de bênçãos e alegrias. Pela fé, a gente já consegue imaginar como vai ser bom receber tudo o que Deus preparou. Continue confiando, pois o melhor de Deus ainda está por vir para a sua vida.", tags: ["promessa", "alegria"] },
          { ordem: 4, icone: "🎶", titulo: "Cantar de Alegria", conteudo: "Jesus é o nosso maior benfeitor. O amor dEle por nós é mais forte do que qualquer outro amor que existe na Terra. Por isso, temos todos os motivos para sermos gratos e para dizermos: 'Obrigado, Jesus!'. Deixe que a gratidão mude o seu humor e te dê um dia muito abençoado.", tags: ["gratidão", "louvor"] }
        ],
        promessa: "Jesus prometeu te encher com o Seu amor e te dar uma alegria que ninguém pode tirar.",
        meditacao: "Lembre-se: Jesus te ama muito e Ele tem o melhor preparado para você hoje."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) recebido acima na glória", referencia: "1Tm 3:16" },
        topicos: [
          { ordem: 1, icone: "👑", titulo: "Triunfo sobre a Dor", conteudo: "Vimos o Senhor humilhado e sofrido, o 'homem de dores' vestido de cilício e vergonha. No entanto, agora, Ele triunfou sobre as trevas e nossa fé O contempla retornando com as vestes da vitória. Jesus agora usa a glória que tinha com Deus antes do mundo existir, acrescida da glória de Sua vitória.", tags: ["vitória", "glória"] },
          { ordem: 2, icone: "🎶", titulo: "Novo Cântico", conteudo: "Ouça o louvor que ressoa no céu! 'Digno é o Cordeiro que foi morto, porque Ele nos remiu com o Seu sangue!'. Ele usa a glória de um Intercessor infalível e de um Príncipe invencível. Milhares de anjos Lhe prestam deferência. Sua grandeza excede todo o nosso esforço de imaginação atual.", tags: ["louvor", "adoração"] },
          { ordem: 3, icone: "🌅", titulo: "Revelação Futura", conteudo: "Haverá uma revelação ainda maior de Sua glória quando Ele descer do céu com grande poder e se assentar no trono da glória com todos os santos anjos. Esse esplendor arrebatará o coração do Seu povo. A eternidade ressoará o Seu louvor e o Seu trono será eterno e perpétuo sobre todas as coisas.", tags: ["esperança", "eternidade"] },
          { ordem: 4, icone: "🔍", titulo: "Desejo do Coração", conteudo: "Se você se deleita na glória futura de Cristo, Ele deve ser glorioso aos seus olhos agora. Examine o seu coração: Jesus é o centro da sua admiração e o motivo do seu orgulho santo? A glória que O aguarda deve ser a nossa motivação para vivermos de forma digna do Seu nome hoje.", tags: ["fidelidade", "exame"] }
        ],
        promessa: "Jesus reinará para sempre em glória e você participará dessa vitória com Ele.",
        meditacao: "Contemple a majestade de Jesus; Ele venceu o mal e agora intercede por você no trono de Deus."
      },
      simples: {
        versiculo: { texto: "Jesus foi levado para o céu em glória.", referencia: "1Tm 3:16" },
        topicos: [
          { ordem: 1, icone: "👑", titulo: "O Rei Venceu", conteudo: "Jesus sofreu muito aqui na Terra para nos salvar, mas agora Ele está no lugar mais importante do céu. Ele venceu a morte, o pecado e o mal. Jesus é o grande vencedor e recebeu de Deus todo o poder e toda a honra. Hoje, Ele é o Rei que brilha mais que o sol e cuida de nós lá de cima.", tags: ["vitória", "jesus"] },
          { ordem: 2, icone: "🎶", titulo: "Festa no Céu", conteudo: "Todos os anjos no céu cantam e comemoram a vitória de Jesus. Eles sabem que Ele é o Cordeiro de Deus que deu a vida por nós. Jesus é amado e respeitado por todos no Reino de Deus. Imagine como deve ser lindo ouvir milhares de vozes elogiando o nosso melhor amigo!", tags: ["alegria", "louvor"] },
          { ordem: 3, icone: "🌅", titulo: "Jesus Vai Voltar", conteudo: "Um dia, Jesus vai voltar com todo o Seu poder para colocar ordem no mundo e levar a gente para morar com Ele. Vai ser o dia mais incrível da história! Não haverá mais maldade nem tristeza. Jesus vai reinar para sempre e nós seremos muito felizes ao lado dEle, vendo toda a Sua beleza.", tags: ["futuro", "promessa"] },
          { ordem: 4, icone: "🔍", titulo: "Amar a Jesus Hoje", conteudo: "Se a gente quer estar com Jesus na glória, precisamos amar a Ele agora. Jesus é a pessoa mais importante da sua vida? Tente fazer as coisas do jeito que Ele ensinou e mostre que você tem orgulho de ser amigo do Rei. O amor de Jesus é o que nos dá força para sermos bons todos os dias.", tags: ["amor", "atitude"] }
        ],
        promessa: "Jesus prometeu que um dia você verá a glória dEle e viverá em um lugar maravilhoso para sempre.",
        meditacao: "Durma tranquilo sabendo que o seu Rei é poderoso e que Ele já venceu todas as suas batalhas."
      }
    }
  },
  {
    data: "2026-06-05",
    manha: {
      original: {
        versiculo: { texto: "(…) o Senhor o fechou dentro", referencia: "Gn 7:16" },
        topicos: [
          { ordem: 1, icone: "🚪", titulo: "Separação do Mundo", conteudo: "Noé foi fechado longe do mundo pela mão do divino amor. A porta da eleição nos separa do mundo que jaz no maligno. Como cristãos, não podemos folgar na 'Feira das Vaidades'; nosso Pai celestial nos fechou dentro para nossa segurança e santificação em relação às multidões.", tags: ["separação", "eleição"] },
          { ordem: 2, icone: "🛡️", titulo: "Segurança na Arca", conteudo: "Noé estava tão separado que nenhum mal poderia alcançá-lo. As inundações apenas o levantavam ao céu; os ventos o faziam flutuar em seu caminho. Fora da arca era ruína; dentro, paz e descanso. Em Cristo Jesus há perfeita segurança contra todas as tempestades do juízo divino.", tags: ["proteção", "segurança"] },
          { ordem: 3, icone: "🤝", titulo: "Habitar com Deus", conteudo: "'Vem tu para a arca' foi o convite, mostrando que o Senhor pretendia habitar ali com Seu servo. Todos os escolhidos habitam em Deus e Deus neles. Felizes as pessoas fechadas no mesmo ambiente que contém a Trindade - Pai, Filho e Espírito Santo. É um refúgio de amor e comunhão constante.", tags: ["comunhão", "presença"] },
          { ordem: 4, icone: "⚓", titulo: "Fidelidade Eterna", conteudo: "Aqueles que estão em Cristo Jesus estão nEle para sempre. A fidelidade eterna os fechou e a malícia infernal não pode arrastá-los para fora. O Príncipe da casa de Davi fecha e ninguém abre. Certifique-se de estar dentro da graça, pois a mesma porta que salva os prudentes fechará os tolos para sempre.", tags: ["fidelidade", "eternidade"] }
        ],
        promessa: "O Senhor te fechará em Sua segurança e nenhuma tempestade poderá te destruir enquanto estiver em Cristo.",
        meditacao: "Agradeça hoje por estar 'fechado' com Deus; a sua segurança não depende da força da arca, mas da mão que fechou a porta."
      },
      simples: {
        versiculo: { texto: "O Senhor fechou a porta da barca.", referencia: "Gn 7:16" },
        topicos: [
          { ordem: 1, icone: "🚪", titulo: "Lugar Seguro", conteudo: "Deus colocou Noé dentro da arca para protegê-lo da grande tempestade. Quando aceitamos Jesus, é como se Deus nos colocasse em um lugar super seguro. Ele nos afasta das coisas ruins do mundo para que possamos viver em paz. Estar 'dentro' com Deus é o melhor lugar que existe.", tags: ["segurança", "proteção"] },
          { ordem: 2, icone: "🛡️", titulo: "Nada pode te Atingir", conteudo: "Enquanto Noé estava na arca, a água que afogava o mundo servia para levantar a barca cada vez mais alto. Assim é com a gente: os problemas que tentam nos derrubar acabam nos aproximando de Deus se estivermos com Ele. Jesus é o nosso refúgio e nEle nada pode nos destruir.", tags: ["confiança", "vitória"] },
          { ordem: 3, icone: "🤝", titulo: "Amigo de Deus", conteudo: "Deus não deixou Noé sozinho; Ele entrou na arca com ele! Jesus quer estar com você o tempo todo. Ele te convida para ficar pertinho dEle, onde há amor e carinho. Você nunca está sozinho, pois o Criador do Universo decidiu morar no seu coração e ser o seu melhor companheiro de viagem.", tags: ["amizade", "presença"] },
          { ordem: 4, icone: "⚓", titulo: "Sempre Protegido", conteudo: "Uma vez que Deus fecha a porta para te proteger, ninguém pode abrir para te tirar de lá. O amor de Jesus por você é eterno e muito forte. Você pode descansar sabendo que está seguro para sempre. Não se preocupe com o que acontece lá fora; foque em aproveitar a amizade com Deus aqui dentro.", tags: ["amor", "paz"] }
        ],
        promessa: "Jesus prometeu que ninguém poderia te tirar das mãos dEle e que você estaria seguro para sempre.",
        meditacao: "Sinta o abraço de Deus hoje; Ele fechou a porta para te proteger e te dar descanso."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Aquele que não ama não conhece a Deus (…)", referencia: "1Jo 4:8" },
        topicos: [
          { ordem: 1, icone: "❤️", titulo: "Marca do Cristão", conteudo: "A marca distintiva de um cristão é sua confiança no amor de Cristo e seus frutos de afeição a Ele. A fé sela o homem e o amor dá a confirmação. Nós O amamos porque Ele nos amou primeiro. Esse amor não é uma emoção calma, mas uma paixão veemente que deve consumir toda a nossa energia e ser visível em nossas ações.", tags: ["amor", "identidade"] },
          { ordem: 2, icone: "🔥", titulo: "Chama Interior", conteudo: "O amor a Jesus deve ser uma chama que alimenta o âmago do nosso ser, incendiando o caminho em direção ao homem exterior para lá brilhar. Nos tempos heróicos, o zelo pela glória de Jesus era a marca de todos os crentes genunínos. Por causa dessa dependência ao amor de Cristo, eles muito ousaram e muito fizeram.", tags: ["zelo", "paixão"] },
          { ordem: 3, icone: "🌊", titulo: "Amor que Constrange", conteudo: "Os filhos de Deus são governados pelo amor; o amor de Cristo os constrange. Eles se alegram que o amor divino esteja posto sobre eles, derramado em seus corações pelo Espírito Santo. Em resposta, amam o Salvador com um coração puro e fervoroso, manifestando isso em suas conversas e olhares mais simples.", tags: ["espírito", "gratidão"] },
          { ordem: 4, icone: "⚖️", titulo: "Pergunta Importante", conteudo: "Antes de dormir, responda honestamente: você ama a Jesus? Esse amor é o que deve governar a sua força interna mais profunda. Não se contente com uma religiosidade fria; busque sentir o calor do amor de Deus e deixe que ele motive cada ato de serviço e cada palavra de bondade que você proferir.", tags: ["exame", "fé"] }
        ],
        promessa: "Deus derramará o Seu amor em seu coração através do Espírito Santo, capacitando você a amar como Jesus amou.",
        meditacao: "O amor é a prova de que conhecemos a Deus; peça ao Senhor para aumentar o seu fervor por Ele nesta noite."
      },
      simples: {
        versiculo: { texto: "Quem não ama não conhece a Deus, porque Deus é amor.", referencia: "1Jo 4:8" },
        topicos: [
          { ordem: 1, icone: "❤️", titulo: "A Marca do Amor", conteudo: "O jeito mais fácil de saber se alguém segue Jesus de verdade é vendo se essa pessoa tem amor no coração. Nós amamos a Deus porque Ele nos amou primeiro de um jeito maravilhoso. Esse amor não deve ser algo escondido, mas deve aparecer em tudo o que a gente faz e fala com as outras pessoas.", tags: ["amor", "atitude"] },
          { ordem: 2, icone: "🔥", titulo: "Fogo no Coração", conteudo: "Amar Jesus deve ser como ter um foguinho de alegria dentro de nós que nunca se apaga. Esse amor nos dá coragem para fazer coisas boas e para falar de Deus para todo mundo. Os primeiros cristãos amavam tanto a Jesus que faziam de tudo para agradar a Ele. Que o nosso amor por Ele seja forte assim também!", tags: ["alegria", "coragem"] },
          { ordem: 3, icone: "🌊", titulo: "Gratidão a Deus", conteudo: "Deus colocou o amor dEle dentro de você através do Espírito Santo. Isso nos faz sentir uma gratidão enorme por tudo o que Jesus fez. Quando lembramos que Ele deu a vida por nós, dá vontade de ser cada vez mais carinhoso e obediente com o nosso Pai do céu. O amor é o motor da nossa vida.", tags: ["gratidão", "espírito"] },
          { ordem: 4, icone: "⚖️", titulo: "Você Ama Jesus?", conteudo: "Antes de fechar os olhos hoje, pense um pouquinho: 'Eu realmente amo Jesus de todo o meu coração?'. Se você sente esse carinho por Ele, saiba que isso é um presente de Deus. Peça para o Senhor te ajudar a amar as pessoas cada dia mais, porque assim você mostra que conhece a Deus de verdade.", tags: ["reflexão", "carinho"] }
        ],
        promessa: "Jesus prometeu que se você O amar, Ele e o Pai virão morar com você e te encherão de paz.",
        meditacao: "Deus é puro amor; deixe que esse amor te acalme e te prepare para um sono tranquilo."
      }
    }
  },
  {
    data: "2026-06-06",
    manha: {
      original: {
        versiculo: { texto: "Eis que sou vil (…)", referencia: "Jó 40:4" },
        topicos: [
          { ordem: 1, icone: "🙇", titulo: "Confissão Sincera", conteudo: "Se Jó, Isaías e Paulo se sentiram obrigados a dizer: 'Eu sou vil', por que você teria vergonha de participar dessa mesma confissão? Não há um santo vivendo na Terra que não se sinta vil diante da santidade de Deus. Reconhecer nossa vileza é o primeiro passo para receber a abundância da graça divina.", tags: ["humildade", "arrependimento"] },
          { ordem: 2, icone: "🧼", titulo: "Lavagem Imediata", conteudo: "Jesus não veio chamar os justos, mas os pecadores. Se confessares teu pecado, encontrarás perdão. Diga agora: 'Eu sou vil, lava-me', e serás lavado pelo sangue de Jesus. Não espere erradicar o pecado por si mesmo; venha tal como você está e o Cordeiro de Deus te purificará de toda a maldade.", tags: ["perdão", "jesus"] },
          { ordem: 3, icone: "🕊️", titulo: "Aceito no Amado", conteudo: "Neste momento você pode ressuscitar com todos os seus pecados perdoados. Embora tenha acordado com a mente degradada pelo pecado, pela fé você pode descansar aceito no Amado. A vileza humana não impede o amor soberano de Deus de agir e transformar o pária em um herdeiro da salvação.", tags: ["salvação", "graça"] },
          { ordem: 4, icone: "✨", titulo: "Tempo Aceitável", conteudo: "Agora é o tempo aceitável! Se creres nAquele que justifica o ímpio, serás salvo e adornado com o manto da justiça de Cristo. Serás tão alvo quanto os anjos diante de Deus. Deixe que o Espírito Santo te dê hoje a fé salvadora no Salvador que recebe com alegria até o mais vil dos pecadores.", tags: ["fé", "justiça"] }
        ],
        promessa: "Deus promete perdoar e limpar completamente todo aquele que reconhece a sua necessidade de Jesus.",
        meditacao: "Não deixe a sua vergonha te afastar de Deus; a sua vileza é o motivo pelo qual Jesus veio te buscar."
      },
      simples: {
        versiculo: { texto: "Eu não sou nada; sou um pecador.", referencia: "Jó 40:4" },
        topicos: [
          { ordem: 1, icone: "🙇", titulo: "Ser Honesto com Deus", conteudo: "Todo mundo erra, até as pessoas que a gente acha mais santas. Jó foi um homem muito bom, mas ele reconheceu que diante de Deus ele não era perfeito. Ser honesto e admitir as nossas falhas é o melhor jeito de começar a nossa conversa com o Pai do céu. Ele ama a verdade e a humildade.", tags: ["honestidade", "humildade"] },
          { ordem: 2, icone: "🧼", titulo: "Banho de Amor", conteudo: "Jesus veio para ajudar justamente quem sabe que precisa de ajuda. Se você errou, não tente se esconder. Vá até Jesus e diga: 'Senhor, eu fiz coisa errada, por favor me limpa'. O amor de Jesus é como um banho que tira toda a sujeira do nosso coração e nos deixa limpinhos e prontos para recomeçar.", tags: ["perdão", "jesus"] },
          { ordem: 3, icone: "🕊️", titulo: "Tudo Novo", conteudo: "A partir do momento que você confia em Jesus, Deus não olha mais para os seus erros. Ele te vê como uma pessoa nova e amada. Você não precisa mais carregar o peso da culpa. Sinta a leveza de saber que você foi perdoado e que agora pode viver uma vida cheia de alegria ao lado do seu Salvador.", tags: ["alegria", "paz"] },
          { ordem: 4, icone: "✨", titulo: "A Hora é Agora", conteudo: "Não deixe para depois. Hoje mesmo você pode sentir a paz de Deus. Acredite que Jesus te ama exatamente como você é e que Ele quer te dar uma vida incrível. Quando a gente aceita o perdão de Deus, ganhamos um brilho especial e ficamos prontos para espalhar o bem por onde a gente passar.", tags: ["fé", "mudança"] }
        ],
        promessa: "Jesus prometeu que quem fosse até Ele nunca seria jogado fora, não importa o que tivesse feito.",
        meditacao: "Jesus está de braços abertos para você hoje; corra para Ele e receba o perdão."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) São israelitas? também eu (…)", referencia: "2Co 11:22" },
        topicos: [
          { ordem: 1, icone: "🇮🇱", titulo: "Reivindicação de Fé", conteudo: "Se podemos dar provas de que seguimos a Jesus e confiamos nEle totalmente, a posição que os santos de Deus possuem também nos pertence. Mesmo sendo o mínimo dos santos, as misericórdias de Deus são nossas possessões legítimas. As promessas, a graça e a glória pertencem a todo aquele que confia no Salvador.", tags: ["identidade", "promessa"] },
          { ordem: 2, icone: "💎", titulo: "Conforto Indizível", conteudo: "Poder dizer 'Também eu!' quando se fala sobre perdão, justificação e aceitação no Amado produz um conforto profundo. Não é necessário ser um santo experiente para ter direito às bênçãos; basta ser um santo em Cristo. Alegre-se na afirmação de que você faz parte do Israel espiritual de Deus pela fé.", tags: ["consolo", "alegria"] },
          { ordem: 3, icone: "☁️", titulo: "Participação nas Lutas", conteudo: "Essa reivindicação traz deveres: participar com o povo de Deus sob nuvens ou sol. Quando os cristãos são desprezados ou zombados, devemos chegar corajosamente à frente e dizer: 'Também eu sou cristão'. Não tema o escárnio do mundo; sua identidade com o povo de Deus é sua maior honra e responsabilidade.", tags: ["coragem", "testemunho"] },
          { ordem: 4, icone: "🛠️", titulo: "Devoção e Trabalho", conteudo: "Ao vermos outros trabalhando para Cristo, dando seu tempo e coração, devemos ser capazes de dizer: 'Também eu trabalharei'. Prove sua gratidão por meio da devoção prática. Viver como alguém que reclama um privilégio real significa assumir as responsabilidades desse chamado em amor e serviço constante ao Senhor.", tags: ["serviço", "gratidão"] }
        ],
        promessa: "Todas as promessas feitas ao povo de Deus pertencem a você por meio da sua fé em Jesus Cristo.",
        meditacao: "Sinta o orgulho santo de pertencer à família de Deus e esteja pronto para honrar esse nome em tudo o que fizer."
      },
      simples: {
        versiculo: { texto: "Eles são seguidores de Deus? Eu também sou!", referencia: "2Co 11:22" },
        topicos: [
          { ordem: 1, icone: "🇮🇱", titulo: "Faço Parte do Time", conteudo: "Se você confia em Jesus, você faz parte do povo especial de Deus. Todas as coisas boas que Deus prometeu para os amigos dEle na Bíblia agora valem para você também. Mesmo que você ache que sabe pouco, você é tão importante para o Pai quanto qualquer outro seguidor dEle. Você é dEle!", tags: ["família", "valor"] },
          { ordem: 2, icone: "💎", titulo: "Alegria de Pertencer", conteudo: "É muito bom poder dizer: 'Eu também sou perdoado!'. Saber que você tem um lugar no coração de Deus traz uma paz muito grande. Não se sinta 'menor' que os outros cristãos. O amor de Deus é igual para todos os Seus filhos; aproveite cada bênção e cada carinho que o Pai tem para te dar hoje.", tags: ["paz", "carinho"] },
          { ordem: 3, icone: "☁️", titulo: "Não Ter Vergonha", conteudo: "Às vezes as pessoas podem rir de quem segue a Jesus, mas não ligue para isso. Tenha coragem de dizer: 'Eu também sou amigo de Jesus!'. Mostrar que você ama a Deus é uma honra. Esteja ao lado dos outros cristãos nos momentos difíceis e nos momentos alegres também. Seja leal ao seu Senhor.", tags: ["coragem", "amizade"] },
          { ordem: 4, icone: "🛠️", titulo: "Mãos à Obra", conteudo: "Se somos amigos de Deus, devemos ajudar no trabalho dEle. Quando vir alguém fazendo o bem, junte-se a essa pessoa e diga: 'Eu também quero ajudar!'. Mostre que você é grato a Jesus fazendo coisas legais pelos outros e sendo dedicado em tudo. Viver para Deus é a melhor aventura que existe.", tags: ["atitude", "serviço"] }
        ],
        promessa: "Deus prometeu que cuidaria de você como cuida de todo o Seu povo amado.",
        meditacao: "Durma feliz sabendo que você faz parte da maior e melhor família do mundo: a família de Deus."
      }
    }
  },
  {
    data: "2026-06-07",
    manha: {
      original: {
        versiculo: { texto: "Vós, que amais ao Senhor, odiai o mal (…)", referencia: "Sl 97:10" },
        topicos: [
          { ordem: 1, icone: "🚫", titulo: "Dano do Pecado", conteudo: "Considere o dano que o mal já causou em ti: ele te cegou para a beleza do Salvador e te surdeceu para os convites do Redentor. O pecado derramou veneno na fonte do teu ser e contaminou teu coração. Temos boas razões para odiar o mal ao olharmos para trás e percebermos suas obras mortais em nossa alma.", tags: ["arrependimento", "reflexão"] },
          { ordem: 2, icone: "🧼", titulo: "Lavados e Justificados", conteudo: "Paulo nos lembra: 'Mas haveis sido lavados, santificados e justificados em nome do Senhor Jesus'. Nossas almas estariam perdidas caso o onipotente amor não tivesse interferido. O mal é um inimigo ativo que vigia para nos arrastar à perdição; por isso, odiá-lo é uma questão de autoproteção espiritual.", tags: ["redenção", "graça"] },
          { ordem: 3, icone: "🛤️", titulo: "Caminho de Felicidade", conteudo: "Se desejas uma vida feliz e uma morte pacífica, caminhe nos caminhos da santidade, odiando o mal até o fim. Negligenciar o ódio ao mal é como espalhar espinhos em seu próprio travesseiro. O amor ao Salvador exige uma separação clara de tudo o que O ofende e que traz destruição ao nosso viver.", tags: ["santidade", "paz"] },
          { ordem: 4, icone: "🤝", titulo: "Cura pela Comunhão", conteudo: "Não conhecemos qualquer cura para o amor ao mal do que a abundante comunhão com o Senhor Jesus. Viva constantemente com Ele, e será impossível que você tenha paz com o pecado. A presença de Cristo expulsa os desejos impuros e nos fortalece para resistir a toda a aparência do mal com firmeza.", tags: ["comunhão", "força"] }
        ],
        promessa: "Ao buscar a santidade e odiar o mal, você encontrará a verdadeira paz e a alegria que vem de Deus.",
        meditacao: "Lembre-se do quanto o pecado te machucou e corra para os braços de Jesus, onde há cura e pureza."
      },
      simples: {
        versiculo: { texto: "Vocês que amam o Senhor, odeiem o mal.", referencia: "Sl 97:10" },
        topicos: [
          { ordem: 1, icone: "🚫", titulo: "O Pecado Machuca", conteudo: "O mal é como um veneno que estraga tudo o que toca. Ele nos faz ficar 'cegos' para as coisas boas de Deus e nos afasta do caminho da felicidade. Pense no quanto as escolhas erradas já te deixaram triste no passado. Odiar o mal significa não querer mais o que nos faz sofrer e o que nos separa de Jesus.", tags: ["cuidado", "escolhas"] },
          { ordem: 2, icone: "🧼", titulo: "Deus te Limpou", conteudo: "Jesus te ama tanto que Ele te limpou de todas as coisas ruins. Ele te deu uma vida nova e pura! Não faz sentido voltar a se sujar com as mesmas coisas que Jesus já tirou de você. Valorize a limpeza que Deus fez no seu coração e tente mantê-lo brilhando para o Senhor todos os dias.", tags: ["gratidão", "limpeza"] },
          { ordem: 3, icone: "🛤️", titulo: "Viver Feliz", conteudo: "Seguir o que é certo é o melhor jeito de ter uma vida tranquila e sem arrependimentos. Quando a gente evita o mal, a nossa alma fica em paz. É como escolher o caminho mais seguro e bonito em uma viagem. Escute os conselhos de Deus e você terá muitos motivos para sorrir e dormir com a consciência tranquila.", tags: ["paz", "felicidade"] },
          { ordem: 4, icone: "🤝", titulo: "Ficar Perto de Jesus", conteudo: "Quanto mais tempo você passa com Jesus, menos vontade você tem de fazer o que é errado. A amizade com Ele nos dá forças para dizer 'não' para a tentação. Jesus é tão bom e puro que a luz dEle expulsa toda a sombra do nosso coração. Fique grudadinho em Jesus e o mal não vai ter espaço na sua vida.", tags: ["amizade", "jesus"] }
        ],
        promessa: "Deus prometeu que se você seguir a luz, Ele guiará os seus passos para um lugar de segurança.",
        meditacao: "Escolha fazer o bem hoje e sinta como a presença de Deus torna tudo mais leve."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) sê, pois, zeloso (…)", referencia: "Ap 3:19" },
        topicos: [
          { ordem: 1, icone: "🔥", titulo: "Zelo que Transforma", conteudo: "O caminho da conversão do mundo deve ser pelo zelo da igreja. A graça fará proezas, mas o zelo deve vir primeiro. Não é a extensão do conhecimento ou talento, mas o fervor que fará grandes façanhas para o Reino. Esse zelo é um fruto do Espírito Santo agindo vigorosamente na alma comprometida com Deus.", tags: ["zelo", "serviço"] },
          { ordem: 2, icone: "🌳", titulo: "Raiz da Gratidão", conteudo: "Um profundo sentimento de gratidão nutre o zelo no cristão. Olhando para o buraco do poço de onde fomos retirados, encontramos motivos abundantes para gastar e ser gastos por Deus. Se o coração bate forte diante de Deus, não poderemos deixar de sentir um amoroso anseio para ver o Reino de Cristo chegar.", tags: ["gratidão", "propósito"] },
          { ordem: 3, icone: "⏳", titulo: "Urgência do Tempo", conteudo: "Zelo também é estimulado pelo pensamento do futuro eterno e pela brevidade do tempo presente. Olhando para as realidades do céu e do inferno, não poderemos deixar de nos estimular. O tempo é curto comparado ao trabalho a ser feito, e isso demanda tudo o que temos para a causa do nosso bendito Senhor.", tags: ["urgência", "eternidade"] },
          { ordem: 4, icone: "🛡️", titulo: "Exemplo de Cristo", conteudo: "Lembre-se do exemplo de Jesus: Ele estava vestido de zelo tal como um manto e não desperdiçava tempo pelo caminho. Vamos provar que somos Seus discípulos manifestando o mesmo espírito fervoroso. Que a nossa vida seja marcada por uma dedicação total e entusiasmada ao Mestre que tudo nos deu.", tags: ["exemplo", "fidelidade"] }
        ],
        promessa: "Deus recompensará o seu esforço e o seu zelo em buscar o Reino dEle acima de todas as coisas.",
        meditacao: "Peça ao Espírito Santo para acender novamente a chama do zelo no seu coração nesta noite."
      },
      simples: {
        versiculo: { texto: "Portanto, levem o serviço de Deus a sério.", referencia: "Ap 3:19" },
        topicos: [
          { ordem: 1, icone: "🔥", titulo: "Fazer com Vontade", conteudo: "Servir a Deus não deve ser algo 'mais ou menos' ou feito com preguiça. Devemos fazer tudo com muita vontade e animação! O zelo é esse fogo no coração que nos faz querer ajudar as pessoas e falar do amor de Jesus para todo mundo. Quando fazemos as coisas com entusiasmo, Deus nos usa de formas incríveis.", tags: ["entusiasmo", "dedicação"] },
          { ordem: 2, icone: "🌳", titulo: "Coração Grato", conteudo: "Pense em tudo o que Jesus já fez por você. Ele te salvou e cuida de você com muito amor. Essa gratidão é o que nos dá forças para sermos dedicados a Ele. Quem é grato de verdade não consegue ficar parado; quer sempre fazer algo para mostrar o quanto ama o seu Salvador e amigo.", tags: ["gratidão", "amor"] },
          { ordem: 3, icone: "⏳", titulo: "Não Perca Tempo", conteudo: "A vida passa rápido e há muitas pessoas que ainda não conhecem a alegria de ter Jesus no coração. Por isso, não podemos perder tempo com bobagens. Aproveite cada chance que você tem hoje para ser bom, honesto e amoroso. Cada pequeno gesto seu pode ajudar o Reino de Deus a crescer e a espalhar luz.", tags: ["foco", "atitude"] },
          { ordem: 4, icone: "🛡️", titulo: "Seguir o Exemplo", conteudo: "Jesus sempre levava a Sua missão muito a sério. Ele aproveitava cada momento para ensinar e curar. Queremos ser como Ele, certo? Então, vamos tentar ser dedicados e fervorosos em tudo o que fizermos, desde as tarefas simples até as mais difíceis. Mostre que você é um verdadeiro soldado de Cristo!", tags: ["exemplo", "perseverança"] }
        ],
        promessa: "O Senhor prometeu que estaria com você e te daria ânimo para servi-Lo com alegria todos os dias.",
        meditacao: "Vá dormir com a vontade de fazer o seu melhor para Jesus amanhã. Ele conta com você!"
      }
    }
  }
];

async function saveToObsidian(dayData) {
  const year = dayData.data.split('-')[0];
  const monthNames = ["", "01-Janeiro", "02-Fevereiro", "03-Março", "04-Abril", "05-Maio", "06-Junho", "07-Julho", "08-Agosto", "09-Setembro", "10-Outubro", "11-Novembro", "12-Dezembro"];
  const monthIdx = parseInt(dayData.data.split('-')[1]);
  const monthName = monthNames[monthIdx];
  const dir = path.join('content', 'Devocionais', year, monthName);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const periods = ['manha', 'noite'];
  const versions = ['original', 'simples'];

  for (const p of periods) {
    if (!dayData[p]) continue;
    for (const v of versions) {
      if (!dayData[p][v]) continue;
      const d = dayData[p][v];
      const fileName = `${dayData.data}-${p}-${v}.md`;
      const filePath = path.join(dir, fileName);
      
      const content = `---
data: ${dayData.data}
periodo: ${p === 'manha' ? 'Manhã' : 'Noite'}
versiculo: "${d.versiculo.referencia}"
versao: ${v}
tags: [devocional, ${p}, ${v}, ${d.topicos[0].tags[0]}]
---

# Devocional da ${p === 'manha' ? 'Manhã' : 'Noite'} (${v}) — ${dayData.data.split('-').reverse().join('/')}

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
}

async function uploadToSupabase(dayData) {
  const entries = [];
  ['manha', 'noite'].forEach(p => {
    if (dayData[p]) {
      ['original', 'simples'].forEach(v => {
        const d = dayData[p][v];
        if (d) {
          entries.push({
            data: dayData.data,
            periodo: p === 'manha' ? 'Manhã' : 'Noite',
            versao: v,
            versiculo: d.versiculo,
            topicos: d.topicos,
            promessa: d.promessa,
            meditacao: d.meditacao
          });
        }
      });
    }
  });

  const { error } = await supabase.from('devocionais').upsert(entries, { onConflict: 'data, periodo, versao' });
  if (error) {
    console.error(`❌ Erro no upload ${dayData.data}:`, error.message);
  } else {
    console.log(`✅ ${dayData.data} processado (2 versões).`);
  }
}

async function run() {
  console.log('🚀 Iniciando Carga Fiel de Junho (Bloco 0: 01-07)...');
  for (const day of batch) {
    await saveToObsidian(day);
    await uploadToSupabase(day);
  }
  console.log('🏁 Bloco 0 de Junho (01-07) concluído.');
}

run();
