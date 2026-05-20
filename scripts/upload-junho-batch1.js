require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-06-08",
    manha: {
      original: {
        versiculo: { texto: "Porque muitos caíram feridos, porque de Deus era a peleja (…)", referencia: "1Cr 5:22" },
        topicos: [
          { ordem: 1, icone: "⚔️", titulo: "Guerra de Deus", conteudo: "Você, guerreiro lutando sob o pavilhão de Jesus, se a guerra é de Deus, a vitória é certa. O Senhor salva, não por muitos ou por poucos; cabe a nós ir adiante em nome de Jeová, pois o Senhor dos Exércitos está conosco, a nossa frente. Não deposite confiança em suas próprias armas, mas no Senhor.", tags: ["vitória", "soberania"] },
          { ordem: 2, icone: "🛡️", titulo: "Confiança na Peleja", conteudo: "Devemos usar todos os meios adequados, mas nossa confiança deve descansar apenas no Senhor; Ele é a espada e o escudo de Seu povo. Na luta contra o pecado e o erro doutrinário, você está travando a guerra de Jeová, e a menos que Ele pudesse ser derrotado, você não precisa temer a derrota. Fique firme.", tags: ["fé", "combate"] },
          { ordem: 3, icone: "💪", titulo: "Onipotência do Senhor", conteudo: "Não desanime diante da superioridade numérica, nem recue diante das dificuldades ou impossibilidades; não hesite diante das feridas ou da morte. Golpeie com a espada do Espírito e as forças do mal cairão. A peleja é do Senhor, e Ele entregará todos os Seus e os nossos inimigos em nossas mãos poderosas.", tags: ["poder", "coragem"] },
          { ordem: 4, icone: "🚩", titulo: " Flamejante Zelo", conteudo: "Com pé firme, mão forte, coração destemido, e flamejante zelo, corra para a peleja. A vitória espera por quem confia totalmente no Deus vivo. Lembre-se que você não luta sozinho; o Rei Jesus lidera a carga e garante que cada golpe dado em Seu nome traga frutos de justiça e libertação para a sua alma e para os outros.", tags: ["zelo", "ação"] }
        ],
        promessa: "A peleja pertence ao Senhor; Ele lutará por você e garantirá o triunfo final sobre o mal.",
        meditacao: "Corra para a batalha da fé com coragem, pois se a guerra é de Deus, o resultado já está decidido em Seu favor."
      },
      simples: {
        versiculo: { texto: "Muitos foram vencidos porque a batalha era de Deus.", referencia: "1Cr 5:22" },
        topicos: [
          { ordem: 1, icone: "⚔️", titulo: "Já Vencemos", conteudo: "Se você está do lado de Deus, a sua vitória é certa. Não se assuste se os problemas parecerem maiores que a sua força; o que importa é que o Senhor dos Exércitos está na sua frente. Deus não precisa de multidões para ganhar uma batalha; Ele precisa apenas que você confie dEle.", tags: ["vitória", "confiança"] },
          { ordem: 2, icone: "🛡️", titulo: "Força que Vem do Alto", conteudo: "Devemos usar nossos talentos e fazer o nosso melhor, mas nunca depender apenas disso. Nossa verdadeira proteção e força vêm diretamente de Deus. Faça a sua parte com dedicação, mas mantenha o seu coração descansado no poder do Senhor, que é quem realmente faz as coisas acontecerem.", tags: ["esforço", "dependência"] },
          { ordem: 3, icone: "👊", titulo: "A Luta é de Deus", conteudo: "Quando você enfrenta tentações ou momentos difíceis, lembre-se: essa briga é de Deus. Você é um soldado do Reino dEle. Não recue diante das impossibilidades. Deus é muito maior do que qualquer desafio e Ele prometeu que vai lutar por você e te dar a força necessária para vencer.", tags: ["consolo", "poder"] },
          { ordem: 4, icone: "🚩", titulo: "Determinação", conteudo: "Vá para os seus desafios de hoje com coragem e determinação. Use a Palavra de Deus como o seu guia e não tenha medo de enfrentar o que vier. Com fé e dedicação, você verá as dificuldades desaparecendo. Onde Deus coloca a mão, o bem sempre vence e o mal não consegue resistir.", tags: ["coragem", "ação"] }
        ],
        promessa: "O Senhor lutará por você e cuidará de cada detalhe para que você saia vitorioso.",
        meditacao: "Encare os desafios de hoje sabendo que você serve ao Deus Todo-Poderoso que nunca perdeu uma briga."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) Agora verás se a minha palavra se há de cumprir ou não", referencia: "Nm 11:23" },
        topicos: [
          { ordem: 1, icone: "🌬️", titulo: "Onipotência Fiel", conteudo: "Deus havia feito uma promessa a Moisés, mas ele olha para os meios exteriores e fica perturbado. Acaso o Criador espera a criatura para cumprir Sua promessa? Não; Ele faz com que a promessa seja cumprida pela Sua própria onipotência. Se Ele fala, é feito por Ele mesmo. Suas promessas não dependem da força humana.", tags: ["poder", "soberania"] },
          { ordem: 2, icone: "🚫", titulo: "Erro da Criatura", conteudo: "Quão comumente fazemos o mesmo erro! Deus prometeu suprir nossas necessidades, mas nós olhamos para a criatura buscando que ela faça a obra do Criador; então, nos entregamos à incredulidade. Por que olhamos para o ínfimo? Você não agiria de modo tolo ao olhar para os fracos em busca de força?", tags: ["incredulidade", "foco"] },
          { ordem: 3, icone: "🔭", titulo: "Fé no Invisível", conteudo: "O campo da fé não é a suficiência dos meios visíveis, mas a toda-suficiência do Deus invisível, Aquele que certamente cumprirá o que disse. Se nos atrevermos a nos entregar à desconfiança, a resposta de Deus virá poderosamente a nós: 'Teria sido encurtada a mão do Senhor?'. Ele é capaz de agir além da nossa visão.", tags: ["fé", "certeza"] },
          { ordem: 4, icone: "✨", titulo: "Palavra de Poder", conteudo: "A questão brilha em nossas almas with that blessed statement: 'Agora verás se a minha palavra se há de cumprir ou não'. Deus não precisa de situações favoráveis para cumprir o que prometeu. Ele cria as condições, sustenta o Seu povo e prova a Sua fidelidade em cada detalhe da nossa caminhada espiritual.", tags: ["promessa", "experiência"] }
        ],
        promessa: "A mão do Senhor não se encurtou; Ele cumprirá fielmente cada palavra dEle em sua vida.",
        meditacao: "Deixe de olhar para as limitações humanas e descanse na promessa inabalável do Deus Todo-Poderoso."
      },
      simples: {
        versiculo: { texto: "Agora você vai ver se o que Eu disse vai acontecer ou não.", referencia: "Nm 11:23" },
        topicos: [
          { ordem: 1, icone: "🌬️", titulo: "Deus Resolve", conteudo: "Moisés duvidou que Deus pudesse cuidar do povo porque olhou apenas para o que parecia lógico. Mas Deus não precisa de ajuda para cumprir as Suas promessas. Quando Ele decide agir, Ele usa o Seu próprio poder infinito. O que Deus diz que vai fazer, Ele faz acontecer sem depender de nada.", tags: ["poder", "fidelidade"] },
          { ordem: 2, icone: "🚫", titulo: "Não Dependa de Pessoas", conteudo: "Muitas vezes ficamos ansiosos porque esperamos que as pessoas ou a sorte resolvam nossos problemas. É um erro esperar que o ser humano faça o que só Deus pode fazer. Não busque nos outros a força que só o Senhor tem para te dar. Olhe para o alto e confie no Criador, e não na criatura.", tags: ["confiança", "foco"] },
          { ordem: 3, icone: "🔭", titulo: "Certeza do Invisível", conteudo: "Ter fé é acreditar no Deus que faz o impossível. Não importa se você não vê uma solução agora; o Senhor está vendo tudo. Ele te pergunta hoje: 'Será que o Meu poder diminuiu?'. Confie na capacidade de Deus de cuidar da sua vida, independentemente de como as coisas pareçam estar agora.", tags: ["fé", "esperança"] },
          { ordem: 4, icone: "✨", titulo: "A Promessa é Real", conteudo: "Deus quer te mostrar que a Palavra dEle é segura e verdadeira. Prepare-se para ver as promessas de Deus se cumprindo na sua vida de formas que você nem imagina. Ele vai provar para você que Ele é fiel e que nada é difícil demais para as Suas mãos. O que Ele prometeu, Ele vai realizar.", tags: ["certeza", "testemunho"] }
        ],
        promessa: "O poder de Deus continua o mesmo de sempre; Ele vai realizar tudo o que te prometeu fazer.",
        meditacao: "Durma tranquilo sabendo que o seu futuro está garantido pela Palavra Daquele que nunca falha."
      }
    }
  },
  {
    data: "2026-06-09",
    manha: {
      original: {
        versiculo: { texto: "Grandes coisas fez o Senhor por nós, pelas quais estamos alegres", referencia: "Sl 126:3" },
        topicos: [
          { ordem: 1, icone: "☀️", titulo: "Lado Sombrio", conteudo: "Alguns cristãos estão propensos a olhar para o lado sombrio de tudo, mais enfatizando aquilo pelo qual passaram do que aquilo que Deus tem feito por eles. Descrevem aflições e pecaminosidade do coração, porém quase nenhuma alusão à misericórdia e ao socorro que o Senhor lhes tem generosamente concedido.", tags: ["perspectiva", "gratidão"] },
          { ordem: 2, icone: "🎵", titulo: "Novo Cântico", conteudo: "Um cristão saudável se apresentará com alegria, dizendo: 'Eu falarei para a honra do meu Deus. Tirou-me dum charco de lodo, pôs os meus pés sobre uma rocha; e pôs um novo cântico na minha boca'. Um resumo de experiênciancia como esse é o melhor que qualquer filho de Deus pode apresentar ao mundo.", tags: ["louvor", "testemunho"] },
          { ordem: 3, icone: "🛡️", titulo: "Salvador Suficiente", conteudo: "É verdade que suportamos provações, mas também é verdadeiro que delas somos salvos. É verdade que temos nossas corrupções, mas é igualmente verdadeiro que temos um Salvador todo-suficiente que supera essas corrupções e nos liberta de seu domínio. Ele é maior do que todas as nossas falhas juntas.", tags: ["redenção", "vitória"] },
          { ordem: 4, icone: "🏰", titulo: "Lugar Espaçoso", conteudo: "Seria errado esquecer que passamos através do 'Vale da Humilhação' de forma segura; não permanecemos neles graças ao nosso Todo-Poderoso Ajudador, pois 'nos trouxeste a um lugar espaçoso'. Quanto mais profundos são os problemas, mais alto nosso agradecimento a Deus que nos guiou e preservou.", tags: ["consolo", "proteção"] }
        ],
        promessa: "O Senhor fez grandes coisas por nós; o Seu livramento é a nossa alegria e a nossa força.",
        meditacao: "Não deixe que as dores do passado silenciem o louvor pelas grandes vitórias que Deus já te deu."
      },
      simples: {
        versiculo: { texto: "O Senhor fez coisas maravilhosas por nós, e por isso estamos muito felizes.", referencia: "Sl 126:3" },
        topicos: [
          { ordem: 1, icone: "☀️", titulo: "Mude o seu Olhar", conteudo: "Muitas vezes focamos tanto nos problemas e nas nossas falhas que esquecemos de ver o quanto Deus já nos ajudou. Não deixe que as memórias tristes apaguem as lembranças das bênçãos. Aprenda a dar mais destaque ao que Deus fez do que às lutas que você enfrentou.", tags: ["atitude", "gratidão"] },
          { ordem: 2, icone: "🎵", titulo: "Conte a sua História", conteudo: "Um coração grato tem prazer em falar: 'Deus me tirou da lama e me colocou em um lugar seguro!'. Esse é o melhor depoimento que um cristão pode dar. Quando você louva a Deus pelo que Ele fez, você fortalece a sua própria fé e inspira as pessoas ao seu redor.", tags: ["testemunho", "alegria"] },
          { ordem: 3, icone: "🛡️", titulo: "Jesus é Suficiente", conteudo: "Sim, os desafios existem e nós temos defeitos, mas Jesus é muito maior que tudo isso. Ele é o Salvador que vence cada uma das nossas fraquezas e nos liberta das armadilhas. Com Ele ao nosso lado, as dificuldades não têm a última palavra; a vitória dEle é que conta.", tags: ["ajuda", "vitória"] },
          { ordem: 4, icone: "🏰", titulo: "Atravessando o Vale", conteudo: "Você pode ter passado por momentos muito difíceis, mas olhe onde você está agora: Deus te trouxe em segurança! Ele te guiou por caminhos apertados para te levar a um lugar de paz e descanso. Quanto maior foi a luta, maior deve ser a sua gratidão pelo livramento.", tags: ["paz", "consolo"] }
        ],
        promessa: "As maravilhas que Deus fez no seu passado são a garantia de que Ele continuará fazendo coisas lindas no seu futuro.",
        meditacao: "Escolha hoje ser uma pessoa alegre e grata por tudo o que o Senhor já realizou na sua vida."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Examinai as Escrituras (…)", referencia: "Jo 5:39" },
        topicos: [
          { ordem: 1, icone: "🔦", titulo: "Investigação Minuciosa", conteudo: "A palavra 'examinai' significa um apurado e diligente exame, tal como fazem os homens procurando ouro. Não devemos nos contentar em uma leitura superficial, mas, com a vela do Espírito, buscar o significado oculto. Há leite para as crianças, mas há também carne para homens fortes na Bíblia.", tags: ["estudo", "busca"] },
          { ordem: 2, icone: "🗝️", titulo: "Chave da Diligência", conteudo: "Muitas partes da Sagrada Escritura somente podem ser descobertas através de um diligente estudo. A porta da palavra só se abre com a chave da diligência e da oração constante. Quem a despreza, despreza o Deus que as escreveu. Deus não nos convida a peneirar palha, mas a Bíblia é trigo padejado.", tags: ["verdade", "dedicação"] },
          { ordem: 3, icone: "💎", titulo: "Tesouro Escondido", conteudo: "Sob o ensino do Espírito Santo, para os olhos que buscam, ela brilha como um vasto templo pavimentado com ouro, rubis e esmeraldas. Nenhuma mercadoria neste mundo é comparável à verdade da Escritura Sagrada. Nela encontramos as respostas para a vida e a direção segura para os nossos pés.", tags: ["sabedoria", "valor"] },
          { ordem: 4, icone: "✝️", titulo: "Encontrar Jesus", conteudo: "Por fim, a Escritura revela Jesus: 'São elas que de mim testificam'. Nenhum motivo mais poderoso poderia motivar os leitores do que este: aquele que encontra Jesus encontra a vida, o céu, e todas as coisas. Feliz é aquele que, examinando sua Bíblia com humildade, descobre seu Salvador.", tags: ["jesus", "revelação"] }
        ],
        promessa: "Toda a Escritura testifica de Jesus; nEle você encontrará a pérola preciosa de valor eterno.",
        meditacao: "Não se contente com a superfície; estude a Bíblia com a dedicação de um minerador de ouro em busca de Cristo."
      },
      simples: {
        versiculo: { texto: "Estudem as Escrituras Sagradas com atenção.", referencia: "Jo 5:39" },
        topicos: [
          { ordem: 1, icone: "🔦", titulo: "Procure o Tesouro", conteudo: "Ler a Bíblia é como procurar ouro: exige tempo e dedicação. Não leia apenas os versículos rapidamente. Peça a Deus que te ajude a entender o que Ele quer dizer em cada frase. Existem lições valiosas que só descobrimos quando estudamos com o coração aberto e atento.", tags: ["estudo", "foco"] },
          { ordem: 2, icone: "🗝️", titulo: "Seja Dedicado", conteudo: "A sabedoria de Deus é profunda e precisamos nos esforçar para aprender. Algumas partes da Bíblia exigem que a gente estude com mais calma. A dedicação é a chave que abre a nossa mente para entender os planos do Senhor. Quem valoriza a Bíblia, valoriza o próprio Deus que a escreveu.", tags: ["dedicação", "aprendizado"] },
          { ordem: 3, icone: "💎", titulo: "Riqueza Real", conteudo: "As palavras de Deus são cheias de surpresas. Cada vez que estudamos, descobrimos algo novo que brilha como uma pedra preciosa. A verdade da Bíblia vale muito mais que dinheiro ou posses, pois ela traz luz para os dias escuros e nos guia pelo caminho certo da vida.", tags: ["sabedoria", "luz"] },
          { ordem: 4, icone: "✝️", titulo: "O Alvo é Jesus", conteudo: "O motivo principal de lermos a Bíblia é encontrar Jesus. Ela inteira fala sobre o amor dEle por nós. Quando você lê sobre as promessas de Deus, você vê o rosto de Jesus refletido ali. Encontrar Cristo nas páginas da Bíblia é encontrar a paz, o céu e tudo o que você precisa.", tags: ["jesus", "comunhão"] }
        ],
        promessa: "Quem busca a Deus através da Sua Palavra sempre encontrará respostas e consolo para a sua alma.",
        meditacao: "Abra a sua Bíblia esta noite como quem abre uma carta de amor escrita pelo Criador para você."
      }
    }
  },
  {
    data: "2026-06-10",
    manha: {
      original: {
        versiculo: { texto: "(…) se vivemos, para o Senhor vivemos (…)", referencia: "Rm 14:8" },
        topicos: [
          { ordem: 1, icone: "⛅", titulo: "Por que Aqui?", conteudo: "Se Deus quisesse, cada um de nós poderia ter entrado no céu no momento da conversão. Não era absolutamente necessário para nossa preparação que devêssemos demorar aqui. Quis o Senhor que assim o fosse; Ele poderia nos ter mudado de imperfeição para perfeição, e ter nos levado para o céu imediatamente.", tags: ["propósito", "vontade de deus"] },
          { ordem: 2, icone: "🌾", titulo: "Viver para o Senhor", conteudo: "Por que, então, estamos aqui? A resposta é: eles estão aqui para que possam 'viver para o Senhor', e levar outras pessoas a conhecerem o Seu amor. Continuamos na Terra como semeadores, espalhando a boa semente; como lavradores, para quebrar o solo; como anunciadores, divulgando a salvação aos perdidos.", tags: ["missão", "serviço"] },
          { ordem: 3, icone: "🧂", titulo: "Sal da Terra", conteudo: "Estamos aqui como o 'sal da terra', para ser uma bênção ao mundo. Estamos aqui para glorificar a Cristo em nossa vida diária. Estamos aqui como Seus trabalhadores, e trabalhadores 'cooperando também com ele'. Vejamos, portanto, que a nossa vida diária corresponda fielmente a sua finalidade eterna.", tags: ["testemunho", "exemplo"] },
          { ordem: 4, icone: "🕊️", titulo: "Aguardando a Voz", conteudo: "Vamos viver uma vida santa e útil, 'para louvor da glória de sua graça'. Enquanto isso, ansiamos estar com Ele, e diariamente cantamos que nosso coração está com Ele em Seu trono e mal pode suportar os atrasos, aguardando a doce voz do Pai que dirá: 'Levanta-te, e vem para o teu descanso'.", tags: ["esperança", "santidade"] }
        ],
        promessa: "O crente vive para glorificar a Cristo e cooperar com Ele na divulgação da salvação até o dia do encontro final.",
        meditacao: "Sua vida na Terra tem um propósito nobre: ser o sal da terra e o semeador do amor de Deus."
      },
      simples: {
        versiculo: { texto: "Se vivemos, vivemos para o Senhor.", referencia: "Rm 14:8" },
        topicos: [
          { ordem: 1, icone: "⛅", titulo: "Um Motivo Especial", conteudo: "Se Deus quisesse, Ele poderia ter nos levado para o céu no instante em que cremos nEle. Mas Ele escolheu nos manter aqui por um tempo. Isso significa que a sua vida hoje tem um motivo muito importante e faz parte de um plano eterno de Deus para o mundo.", tags: ["plano de deus", "propósito"] },
          { ordem: 2, icone: "🌾", titulo: "Representar a Jesus", conteudo: "Estamos aqui para viver para Jesus e mostrar o Seu amor para as pessoas. Somos como agricultores que espalham sementes de esperança no coração de quem está triste. Sua missão é ser um canal de bondade e levar a notícia da salvação para quem ainda não conhece a Deus.", tags: ["missão", "amor"] },
          { ordem: 3, icone: "🧂", titulo: "Fazer a Diferença", conteudo: "Jesus disse que somos o 'sal da terra'. Isso quer dizer que nossas atitudes devem melhorar o ambiente onde vivemos e preservar o que é correto. Trabalhe em parceria com Deus em cada pequena tarefa do seu dia, sabendo que você está aqui para ser uma bênção e glorificar o Senhor.", tags: ["exemplo", "atitude"] },
          { ordem: 4, icone: "🕊️", titulo: "De Olho no Céu", conteudo: "Mesmo servindo aqui na Terra, o nosso coração deve bater forte pelo céu. Viva com dedicação, mas mantenha a expectativa de um dia estar para sempre com Jesus. Enquanto o grande dia não chega, aproveite cada oportunidade para mostrar o quanto a graça de Deus transformou a sua vida.", tags: ["foco", "céu"] }
        ],
        promessa: "Deus te dará toda a sabedoria e força necessárias para você cumprir a sua missão e brilhar por onde passar.",
        meditacao: "Lembre-se: você não está apenas passando o tempo, você está servindo ao propósito maravilhoso de Deus."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) são elas que de mim testificam", referencia: "Jo 5:39" },
        topicos: [
          { ordem: 1, icone: "♾️", titulo: "Alfa e Ômega", conteudo: "Jesus Cristo é o Alfa e o Ômega da Bíblia. Do início ao fim elas testificam dEle. Na criação, O discernimos; O vemos tipificado pela arca de Noé; habitamos nas tendas de Isaque alimentando-nos da promessa; em todos os diversos tipos da lei, encontramos o Redentor abundantemente prenunciado.", tags: ["bíblia", "cristo"] },
          { ordem: 2, icone: "👑", titulo: "Tema Central", conteudo: "No Novo Testamento, nosso Senhor é o tema que o permeia; você está sobre um sólido chão de ouro, pois toda a sua essência é Jesus crucificado. Até mesmo a sua frase final é adornada com o nome do Redentor. Devemos sempre ler as Escrituras sob essa luz gloriosa e arrebatadora.", tags: ["redenção", "evangelho"] },
          { ordem: 3, icone: "🪞", titulo: "Espelho do Céu", conteudo: "Devemos considerar a Palavra como um espelho por onde Cristo olha do céu para baixo; nós, olhando para ela, vemos Seu rosto refletido, de modo a ser uma abençoada preparação para vê-Lo face a face. Este Livro contém as cartas de Jesus escritas para nós, perfumadas pelo Seu amor infinito.", tags: ["revelação", "comunhão"] },
          { ordem: 4, icone: "🧥", titulo: "Vestes do Rei", conteudo: "Estas páginas são as vestes de nosso Rei, e todas elas cheiram a mirra e aloés. A Escritura é a carruagem real em que Jesus viaja, e seu tapete é o amor para com as filhas de Jerusalém. Vá à Bíblia para buscar Jesus, e nenhum outro motivo a motivará tão docemente quanto este encontro.", tags: ["bíblia", "amor"] }
        ],
        promessa: "Toda a Escritura testifica de Jesus; Ele é a pérola preciosa escondida em cada página sagrada.",
        meditacao: "Leia a Bíblia buscando ver o rosto de Jesus refletido em cada promessa e em cada história."
      },
      simples: {
        versiculo: { texto: "As Escrituras Sagradas falam a respeito de Mim.", referencia: "Jo 5:39" },
        topicos: [
          { ordem: 1, icone: "♾️", titulo: "Jesus em Todo Lugar", conteudo: "A Bíblia inteira, do começo ao fim, fala sobre Jesus. Desde a criação do mundo até as últimas histórias, Ele é o personagem principal. Tudo o que aconteceu no passado serviu para preparar o caminho para o Salvador. Quando você lê a Bíblia, está conhecendo a história de amor de Jesus por você.", tags: ["bíblia", "jesus"] },
          { ordem: 2, icone: "👑", titulo: "Mensagem Central", conteudo: "O Novo Testamento é focado totalmente na vida e no sacrifício de Jesus. Ele é a essência da nossa fé. Não é apenas uma história aqui e outra ali; a Bíblia toda aponta para o mesmo alvo: mostrar quem Jesus é e como Ele nos salvou com o Seu sangue precioso na cruz.", tags: ["foco", "salvação"] },
          { ordem: 3, icone: "🪞", titulo: "Encontro com Ele", conteudo: "Ler a Bíblia é como olhar em um espelho e ver a presença de Jesus. É um treinamento para o dia em que O veremos pessoalmente. Pense na Palavra de Deus como cartas de amor escritas pelo próprio Senhor para te dar consolo, direção e carinho em todos os momentos.", tags: ["amor", "paz"] },
          { ordem: 4, icone: "🧥", titulo: "Sinta a Presença", conteudo: "As páginas da Bíblia carregam o 'perfume' de Deus. Quando você vai ler a Palavra, faça isso querendo encontrar Jesus. Não existe nada mais doce do que sentir a companhia dEle através das palavras sagradas. Busque a Cristo em cada leitura e o seu coração ficará cheio de alegria.", tags: ["busca", "presença"] }
        ],
        promessa: "Quem procura Jesus nas Escrituras sempre encontrará o caminho da vida e a paz que tanto deseja.",
        meditacao: "Abra a sua Bíblia esta noite esperando ter um encontro real e transformador com o seu Salvador."
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
  if (error) console.error(`❌ Erro no upload ${dayData.data}:`, error.message);
  else console.log(`✅ ${dayData.data} processado (2 versões).`);
}

async function run() {
  console.log('🚀 Iniciando Carga Fiel de Junho (Bloco 1: 08-10)...');
  for (const day of batch) {
    await saveToObsidian(day);
    await uploadToSupabase(day);
  }
  console.log('🏁 Bloco 1 de Junho (08-10) concluído.');
}

run();
