require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-06-21",
    manha: {
      original: {
        versiculo: { texto: "Tu és mais formoso do que os filhos dos homens (…)", referencia: "Sl 45:2" },
        topicos: [
          { ordem: 1, icone: "💎", titulo: "Perfeição Absoluta", conteudo: "A pessoa inteira de Jesus é como uma jóia, e Sua vida, em todo o tempo, é como um sinete. Ele é totalmente completo, não apenas em Suas várias partes, mas um formoso todo-glorioso completo. Seu caráter não é uma massa confusa, mas uma imagem de beleza e um peitoral de glória onde tudo está no seu devido lugar.", tags: ["beleza", "perfeição"] },
          { ordem: 2, icone: "🌈", titulo: "Harmonia Divina", conteudo: "Assim como todas as cores se misturam em um resplandecente arco-íris, todas as glórias do céu e da Terra se encontram em Ti. Teu poder, Tua graça, Tua justiça e Tua ternura compõem um Deus-homem que nem céu ou Terra viram em qualquer outro lugar. Tu és música sem desafino; Tu és todas as coisas e, ainda assim, não variado.", tags: ["harmonia", "glória"] },
          { ordem: 3, icone: "🎨", titulo: "Tapeçaria Sem Costura", conteudo: "Tua infância, Tua eternidade, Teus sofrimentos e Teus triunfos são todos tecidos em uma linda tapeçaria, sem costura ou remendo. Ninguém há semelhante a Ti; mesmo que todas as virtudes dos mais excelentes fossem colocadas em um pacote, elas não poderiam rivalizar contigo, o espelho de toda a perfeição divina.", tags: ["unicidade", "excelência"] },
          { ordem: 4, icone: "🏺", titulo: "Perfume Sagrado", conteudo: "Tu foste ungido com óleo sagrado da mirra e da cássia que Teu Deus reservou apenas para Ti. Teu perfume é como o perfume sagrado que ninguém jamais poderia misturar; cada especiaria é perfumada, mas o composto é divino. Cristo é o centro de toda a adoração por causa de Sua excelência incomparável.", tags: ["adoração", "santidade"] }
        ],
        promessa: "Jesus é o espelho de toda a perfeição e Sua beleza excede tudo o que existe no céu e na terra.",
        meditacao: "Contemple hoje a formosura de Cristo e deixe que a harmonia do Seu caráter alegre o seu coração."
      },
      simples: {
        versiculo: { texto: "Você é o mais bonito de todos os homens.", referencia: "Sl 45:2" },
        topicos: [
          { ordem: 1, icone: "💎", titulo: "Beleza Real", conteudo: "Jesus é perfeito em tudo o que faz e em quem Ele é. Imagine uma jóia preciosa que brilha de todos os lados; assim é o caráter de Cristo. Ele não tem falhas e tudo nEle é equilibrado e bom. Ele é o exemplo máximo de como um ser humano deve ser, cheio de bondade e verdade.", tags: ["perfeição", "jesus"] },
          { ordem: 2, icone: "🌈", titulo: "Tudo em Equilíbrio", conteudo: "Em Jesus, vemos ao mesmo tempo um Deus poderoso e um homem carinhoso. É como um arco-íris onde todas as cores se juntam perfeitamente. Ele é justo, mas também é perdoador. Essa harmonia faz dEle alguém em quem podemos confiar totalmente, pois Ele nunca falha no Seu jeito de agir.", tags: ["equilíbrio", "confiança"] },
          { ordem: 3, icone: "🎨", titulo: "Único no Mundo", conteudo: "Não existe ninguém como Jesus na história da humanidade. Se pegássemos as melhores qualidades de todas as pessoas boas que já existiram e as juntássemos, ainda não chegariam perto da beleza de Cristo. Ele é o padrão de perfeição que ilumina o nosso caminho e nos mostra o amor do Pai.", tags: ["exclusivo", "exemplo"] },
          { ordem: 4, icone: "🏺", titulo: "Presença Agradável", conteudo: "A presença de Jesus na nossa vida é como um perfume suave que acalma e traz paz. Ele foi escolhido por Deus para ser o nosso Salvador e traz consigo a fragrância do céu. Quando estamos perto dEle, nossa vida se torna mais alegre e cheia de esperança por causa da Sua bondade.", tags: ["paz", "presença"] }
        ],
        promessa: "Deus nos deu em Jesus o exemplo perfeito de amor e beleza para seguirmos.",
        meditacao: "Olhe para Jesus hoje e veja como o Seu amor torna tudo mais bonito ao seu redor."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Todavia o fundamento de Deus fica firme (…)", referencia: "2Tm 2:19" },
        topicos: [
          { ordem: 1, icone: "⚓", titulo: "Pilar da Esperança", conteudo: "O grande pilar da esperança do Cristianismo é a substituição: Cristo sendo feito pecado por nós para que pudéssemos ser feitos justiça de Deus nEle. Este é o fundamento sobre o qual repousa a nossa fé: que Jesus padeceu uma vez pelos pecados, o justo pelos injustos, para levar-nos a Deus.", tags: ["substituição", "fé"] },
          { ordem: 2, icone: "🛡️", titulo: "Fundamento Firme", conteudo: "Embora o mundo ataque a doutrina da expiação e não suporte a ideia do Cordeiro carregando o pecado, essa base permanece firme como o trono de Deus. Sabemos disso, descansamos nisso e nos regozijamos. Se tal base fosse removida, o que poderíamos fazer? Mas ela é a nossa própria vida e segurança eterna.", tags: ["segurança", "verdade"] },
          { ordem: 3, icone: "⚖️", titulo: "Justiça e Expiação", conteudo: "Não iremos reduzir, alterar ou fragmentar essa verdade: Cristo é o substituto positivo, suportando a culpa humana e sofrendo em lugar dos homens. A realidade fundamental do evangelho é que fomos reconciliados com Deus por meio do sacrifício vicário de Seu Filho, que nos conhecia pelo nome desde o início.", tags: ["justiça", "evangelho"] },
          { ordem: 4, icone: "🕊️", titulo: "Paz na Convicção", conteudo: "Nosso deleite é guardar e meditar nessa verdade, proclamando-a enquanto desejamos ser influenciados pela gratidão desse fato em todas as partes da nossa vida. Apesar de todas as controvérsias e ataques dos homens, sentimos em nosso espírito que 'todavia o fundamento de Deus fica firme' e inabalável.", tags: ["paz", "gratidão"] }
        ],
        promessa: "O fundamento da nossa salvação em Cristo é inabalável e permanecerá firme para sempre.",
        meditacao: "Descanse na certeza de que Cristo assumiu o seu lugar e garantiu a sua paz eterna com o Pai."
      },
      simples: {
        versiculo: { texto: "O firme fundamento de Deus permanece inabalável.", referencia: "2Tm 2:19" },
        topicos: [
          { ordem: 1, icone: "⚓", titulo: "Jesus no Seu Lugar", conteudo: "A base de tudo o que acreditamos é que Jesus assumiu o castigo que nós merecíamos. Ele, que era perfeito, morreu pelos nossos erros para nos aproximar de Deus. Essa troca é o que nos dá a esperança de viver para sempre com o Pai, sem medo de sermos condenados.", tags: ["troca", "esperança"] },
          { ordem: 2, icone: "🛡️", titulo: "Base que Não Cai", conteudo: "Muitas pessoas não gostam ou não acreditam no que Jesus fez na cruz, mas para nós essa é a maior verdade. É como uma casa construída sobre uma rocha gigante: nada pode derrubar a nossa fé porque ela está baseada no que Cristo já realizou por nós. É uma segurança que o mundo não pode tirar.", tags: ["rocha", "fé"] },
          { ordem: 3, icone: "⚖️", titulo: "Dívida Paga", conteudo: "Imagine que você tinha uma dívida enorme e alguém foi lá e pagou tudo. É exatamente isso que Jesus fez com os nossos pecados. Ele resolveu o nosso problema com a justiça de Deus. Agora, podemos olhar para o futuro com alegria, sabendo que somos amados e perdoados de verdade.", tags: ["perdão", "alegria"] },
          { ordem: 4, icone: "🕊️", titulo: "Viver em Paz", conteudo: "Saber que o fundamento da nossa salvação é firme nos traz uma paz profunda. Não precisamos ficar tentando 'comprar' o amor de Deus, porque Jesus já fez tudo. Nossa tarefa agora é viver com gratidão, tentando ser cada dia mais parecidos com o Senhor que nos salvou com tanto carinho.", tags: ["paz", "gratidão"] }
        ],
        promessa: "Nada pode mudar o fato de que Jesus te salvou; o amor dEle por você é a base mais firme que existe.",
        meditacao: "Durma tranquilo sabendo que a sua segurança espiritual não depende de você, mas da obra perfeita de Jesus."
      }
    }
  },
  {
    data: "2026-06-22",
    manha: {
      original: {
        versiculo: { texto: "Ele mesmo edificará o templo do Senhor, e ele levará a glória (…)", referencia: "Zc 6:13" },
        topicos: [
          { ordem: 1, icone: "🏗️", titulo: "O Grande Construtor", conteudo: "Cristo mesmo é o construtor do Seu templo espiritual, edificando-o sobre os montes de Sua imutável afeição e graça onipotente. Assim como no templo de Salomão, cada material deve ser preparado. Crentes são como 'Cedros do Líbano' ou 'pedras brutas' que precisam ser lavradas e cortadas para o uso divino.", tags: ["edificação", "soberania"] },
          { ordem: 2, icone: "🔨", titulo: "Trabalho de Preparação", conteudo: "Cada crente está sendo moldado, polido e preparado para o seu lugar no templo pela própria mão de Cristo. Aflições, orações e esforços só santificam se usados por Ele para esse fim. Nossas lutas diárias são instrumentos de Jesus para forjar corretamente nossos corações e nos dar a forma adequada.", tags: ["preparação", "santificação"] },
          { ordem: 3, icone: "🤫", titulo: "Silêncio e Ordem", conteudo: "Na construção do templo celestial, tudo é preparado na Terra. Quando chegarmos ao céu, não haverá mais santificação por aflição ou sofrimento; seremos trazidos perfeitamente prontos para o exato lugar que iremos ocupar. Cristo realiza toda a obra de aplanamento e forja com antecedência aqui neste mundo.", tags: ["maturidade", "céu"] },
          { ordem: 4, icone: "✨", titulo: "Glória Eterna", conteudo: "Quando o trabalho terminar, seremos transportados por uma amorosa mão através do ribeiro da morte para habitar como pilares eternos na Jerusalém celestial. O edifício é erigido sob os olhos e cuidado dEle, brilhando majestoso e forte acima dos céus para a Sua eterna glória.", tags: ["eternidade", "recompensa"] }
        ],
        promessa: "Cristo terminará a obra que começou em você, preparando-o perfeitamente para o Seu templo eterno.",
        meditacao: "Aceite o polimento de Jesus hoje; cada aflição é uma ferramenta dEle para tornar você uma pedra preciosa no Seu Reino."
      },
      simples: {
        versiculo: { texto: "Ele construirá o templo do Senhor e receberá toda a glória.", referencia: "Zc 6:13" },
        topicos: [
          { ordem: 1, icone: "🏗️", titulo: "Deus Está Trabalhando", conteudo: "Jesus é como um grande arquiteto que está construindo algo maravilhoso: a Sua Igreja. Nós somos as 'pedras' dessa construção. No início, somos brutos e cheios de falhas, mas Jesus nos escolheu para fazer parte de algo eterno e grandioso que Ele mesmo está liderando.", tags: ["obra", "jesus"] },
          { ordem: 2, icone: "🔨", titulo: "O Polimento de Jesus", conteudo: "Às vezes passamos por dificuldades que parecem difíceis de entender, mas Jesus usa esses momentos para nos 'lapidar'. Ele está tirando as pontas agudas do nosso orgulho e do nosso egoísmo para que possamos nos encaixar perfeitamente no plano dEle. É um trabalho de paciência e muito amor.", tags: ["crescimento", "paciência"] },
          { ordem: 3, icone: "🤫", titulo: "Preparação Aqui", conteudo: "A nossa vida na Terra é o tempo de preparação. Jesus quer nos deixar prontinhos para quando chegarmos ao céu. Lá não haverá mais dor ou sofrimento para nos ensinar; por isso, Ele aproveita o agora para nos tornar pessoas mais santas, gentis e cheias de fé.", tags: ["escola", "céu"] },
          { ordem: 4, icone: "✨", titulo: "Um Lugar Especial", conteudo: "Você tem um lugar reservado e único no Reino de Deus. Ninguém mais pode ocupar o espaço que Jesus planejou para você. Quando a construção estiver pronta, você brilhará na presença do Senhor para sempre, mostrando como a graça de Deus foi poderosa na sua vida.", tags: ["futuro", "brilho"] }
        ],
        promessa: "Jesus prometeu que você será uma parte importante e eterna da Sua casa no céu.",
        meditacao: "Confie nas mãos do Construtor; Ele sabe exatamente o que está fazendo com a sua vida."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) para que as imóveis permaneçam", referencia: "Hb 12:27" },
        topicos: [
          { ordem: 1, icone: "🌊", titulo: "Mundo Inconstante", conteudo: "Não há nada estável debaixo destes céus; a mudança está escrita sobre todas as coisas. No momento presente, temos muitas coisas em nossas mãos que podem ser abaladas. É um mal para o cristão armazenar muito daquilo que é passageiro, pois a instabilidade é a regra de tudo o que é mundano.", tags: ["vaidade", "mudança"] },
          { ordem: 2, icone: "⚓", titulo: "Coisas Inabaláveis", conteudo: "Contudo, temos algumas coisas que não podem ser abaladas. Qualquer que seja sua perda terrena, você goza da presente salvação nEle. Nenhum aumento ou queda de mercados, nenhuma quebra de bancos ou falência pode interferir na sua união com Cristo ao pé da cruz. Seus bens eternos estão seguros.", tags: ["segurança", "salvação"] },
          { ordem: 3, icone: "👨‍👩‍👧‍👦", titulo: "Paternidade Divina", conteudo: "Você é um filho de Deus hoje; Deus é o seu Pai. Nenhuma modificação das circunstâncias poderá lhe roubar essa identidade. Mesmo que prejuízos tragam pobreza, você ainda pode dizer: 'Ele é meu Pai; na casa dEle há muitas moradas'. Essa relação filial é uma bênção permanente e inalterável.", tags: ["identidade", "paternidade"] },
          { ordem: 4, icone: "❤️", titulo: "Amor Permanente", conteudo: "O amor de Jesus Cristo por você é inabalável. Ele te ama com toda a força de Sua natureza divina e nada poderá alterar isso. Mesmo que a figueira não floresça, o cristão pode cantar: 'O meu amado é meu, e eu sou dele'. Nossa melhor porção não pode se perder em meio aos problemas temporais.", tags: ["amor", "fidelidade"] }
        ],
        promessa: "As coisas espirituais que Deus te deu são inabaláveis e permanecerão com você para sempre.",
        meditacao: "Não se perturbe com as mudanças do mundo; alegre-se no Deus da sua salvação, cuja graça nunca muda."
      },
      simples: {
        versiculo: { texto: "As coisas que não podem ser abaladas permanecerão.", referencia: "Hb 12:27" },
        topicos: [
          { ordem: 1, icone: "🌊", titulo: "Tudo Muda", conteudo: "Neste mundo, quase tudo muda o tempo todo: o dinheiro vai e vem, a saúde varia e os planos podem dar errado. É importante não colocar todo o nosso coração em coisas que podem sumir de uma hora para outra. Precisamos de algo mais firme para segurar a nossa vida.", tags: ["reflexão", "mundo"] },
          { ordem: 2, icone: "⚓", titulo: "O Que Fica", conteudo: "A amizade de Jesus com você é algo que ninguém pode tirar. Mesmo que você perca coisas materiais, a sua salvação e o carinho de Deus por você continuam os mesmos. Essa é a 'âncora' da nossa alma que nos mantém calmos mesmo quando as tempestades da vida aparecem.", tags: ["segurança", "jesus"] },
          { ordem: 3, icone: "👨‍👩‍👧‍👦", titulo: "Filho do Rei", conteudo: "Aconteça o que acontecer, você continua sendo um filho de Deus. O seu Pai do céu é o dono de tudo e cuida de você com muito amor. Essa segurança de pertencer à família de Deus é o maior tesouro que alguém pode ter, e é um presente que dura para sempre.", tags: ["família", "proteção"] },
          { ordem: 4, icone: "❤️", titulo: "Amor que Não Acaba", conteudo: "O amor de Jesus por você não depende se as coisas estão indo bem ou mal. Ele te ama porque Ele é bom, e não porque você é perfeito. Esse amor é o que realmente importa no final das contas. Você pode descansar sabendo que está nos braços de Alguém que nunca vai te soltar.", tags: ["amor", "paz"] }
        ],
        promessa: "Deus prometeu estar com você e manter a sua salvação segura, não importa o que aconteça no mundo.",
        meditacao: "Respire fundo e deixe as preocupações de lado; o que você tem de mais precioso está guardado com Deus."
      }
    }
  },
  {
    data: "2026-06-23",
    manha: {
      original: {
        versiculo: { texto: "(…) Efraim é um bolo que não foi virado", referencia: "Os 7:8" },
        topicos: [
          { ordem: 1, icone: "🥞", titulo: "Santificação Universal", conteudo: "Um bolo não virado está cru de um lado. Efraim era, em muitos aspectos, intocado pela graça; embora houvesse obediência externa, muita rebelião interna permanecia. A graça deve atravessar o centro do seu ser, de modo que suas operações sejam feltidas em todas as forças, atos, palavras e pensamentos.", tags: ["integridade", "santidade"] },
          { ordem: 2, icone: "🔥", titulo: "O Perigo do Zelo Parcial", conteudo: "Um bolo não virado logo fica queimado no lado mais próximo ao fogo. Há quem pareça queimado com zelo fanático por uma parte da verdade, mas está 'massa crua' do outro lado. A aparência de superior santidade pública frequentemente esconde uma total ausência de vital piedade privada.", tags: ["equilíbrio", "hipocrisia"] },
          { ordem: 3, icone: "🙏", titulo: "Clamor por Mudança", conteudo: "Se for assim comigo, Senhor, transforma-me! Vire minha natureza não santificada para o fogo do Teu amor e deixe-a sentir o calor sagrado. Deixe meu lado 'queimado' esfriar enquanto aprendo minha fraqueza e falta de calor espiritual quando estou afastado da Tua chama celestial.", tags: ["transformação", "humildade"] },
          { ordem: 4, icone: "⚖️", titulo: "Influência da Graça", conteudo: "Não sejamos encontrados homens vacilantes, mas inteiramente sob a influência poderosa da graça dominante. Se ficarmos como um bolo não virado, sem sermos tocados pela graça em todos os aspectos da vida, seremos inúteis e correremos o risco de sermos consumidos pelo fogo eterno.", tags: ["verdade", "alerta"] }
        ],
        promessa: "Deus deseja santificar você por inteiro, em espírito, alma e corpo, para que a Sua glória brilhe em você.",
        meditacao: "Peça a Deus hoje para examinar as áreas 'cruas' do seu coração e enchê-las com a Sua graça transformadora."
      },
      simples: {
        versiculo: { texto: "Efraim é como um bolo que não foi virado no fogo.", referencia: "Os 7:8" },
        topicos: [
          { ordem: 1, icone: "🥞", titulo: "Por Inteiro", conteudo: "Imagine um bolo que só assou de um lado e continuou cru do outro: ele não serve para comer. Assim acontece quando dizemos que seguimos a Deus, mas só obedecemos em algumas coisas e ignoramos outras. Deus quer mudar o nosso coração por completo, e não apenas por fora ou em partes.", tags: ["honestidade", "mudança"] },
          { ordem: 2, icone: "🔥", titulo: "Cuidado com o Fingimento", conteudo: "Às vezes as pessoas mostram muito entusiasmo na igreja, mas em casa ou no trabalho agem de forma egoísta. Isso é ser como o 'bolo não virado'. Precisamos ser a mesma pessoa em todo lugar, deixando que o amor de Jesus mude o nosso jeito de falar, de pensar e de tratar os outros.", tags: ["verdade", "caráter"] },
          { ordem: 3, icone: "🙏", titulo: "Pedir uma Virada", conteudo: "Se você sente que tem áreas da sua vida que ainda não entregou a Jesus, peça ajuda a Ele hoje. Diga: 'Senhor, me ajuda a ser melhor onde ainda sou teimoso'. Deixe que o calor do amor de Deus chegue a cada cantinho da sua alma para que você seja uma pessoa equilibrada e feliz.", tags: ["oração", "ajuda"] },
          { ordem: 4, icone: "⚖️", titulo: "Vida Equilibrada", conteudo: "Ser cristão de verdade significa deixar Deus cuidar de tudo: do nosso dinheiro, do nosso tempo, das nossas amizades e dos nossos segredos. Quando deixamos a graça de Deus agir em tudo, a nossa vida ganha um 'sabor' especial que agrada a Deus e abençoa as pessoas ao nosso redor.", tags: ["equilíbrio", "benção"] }
        ],
        promessa: "Jesus prometeu que estaria com você para te ajudar a vencer cada defeito e crescer em bondade.",
        meditacao: "Não se contente com pouco; deixe que Jesus transforme a sua vida inteira hoje."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) esperando a adoção (…)", referencia: "Rm 8:23" },
        topicos: [
          { ordem: 1, icone: "👑", titulo: "Adoção Oculta", conteudo: "Os santos são filhos de Deus mesmo neste mundo, mas os homens ainda não podem reconhecê-los como tal. A adoção não está plenamente manifestada; os filhos ainda não foram declarados abertamente. Estamos usando esta carne e sangue tal como usávamos quando éramos apenas filhos de Adão.", tags: ["adoção", "identidade"] },
          { ordem: 2, icone: "👗", titulo: "Novas Vestes", conteudo: "Entre os romanos, havia uma segunda adoção em público, onde a criança recebia vestes adequadas à sua nova condição. Nós ainda não estamos vestidos com as vestes que convêm à família real do céu, mas quando Cristo Se manifestar, seremos semelhantes a Ele e O veremos como Ele é.", tags: ["glória", "futuro"] },
          { ordem: 3, icone: "🏰", titulo: "Nobreza em Espera", conteudo: "Somos jovens nobres que ainda não vestimos nossas coroas; somos noivas esperando o dia do casamento. Embora felizes pelo que já recebemos, suspiramos pela plenitude da promessa. Nosso status senatorial celestial será revelado quando deixarmos as roupas de plebeu deste mundo caído.", tags: ["esperança", "realeza"] },
          { ordem: 4, icone: "⛲", titulo: "Anseio da Alma", conteudo: "Nossa própria felicidade atual nos faz suspirar ainda mais pela manifestação final. Como uma fonte borbulhante que anseia jorrar para o céu, nosso espírito anseia pela falta de espaço neste mundo para manifestar a glória de Deus. Aguardamos o dia em que seremos colocados em nossas vestes apropriadas.", tags: ["desejo", "eternidade"] }
        ],
        promessa: "Você é um herdeiro de Deus e em breve a sua verdadeira glória como filho do Rei será revelada a todos.",
        meditacao: "Não se sinta desanimado pelas lutas atuais; você está apenas esperando o momento de vestir a sua coroa eterna."
      },
      simples: {
        versiculo: { texto: "Esperamos com ansiedade o dia em que Deus nos dará todos os direitos de filhos.", referencia: "Rm 8:23" },
        topicos: [
          { ordem: 1, icone: "👑", titulo: "Filho do Rei", conteudo: "Você já é um filho de Deus, mesmo que as pessoas ao seu redor não percebam isso. É como um príncipe que está viajando disfarçado: por fora ele parece comum, mas por dentro ele sabe quem é o seu pai. Você pertence à família mais importante do universo por causa de Jesus.", tags: ["identidade", "valor"] },
          { ordem: 2, icone: "👗", titulo: "Roupas Novas", conteudo: "Um dia, Deus vai mostrar para todo mundo que você é dEle. Ele vai nos dar 'roupas' novas e gloriosas, e não teremos mais que lidar com doenças, tristeza ou pecados. Será o dia da grande festa onde todos verão como o Pai nos ama e nos valoriza.", tags: ["futuro", "alegria"] },
          { ordem: 3, icone: "🏰", titulo: "O Grande Dia", conteudo: "A vida agora é como o tempo de noivado: estamos ansiosos pelo dia do casamento. Jesus é o noivo e Ele está preparando tudo para nos buscar. Enquanto o dia não chega, podemos viver felizes sabendo que o melhor ainda está por vir e que o nosso futuro está garantido.", tags: ["esperança", "promessa"] },
          { ordem: 4, icone: "⛲", titulo: "Desejo do Céu", conteudo: "Sabe aquele aperto no peito que às vezes sentimos, como se este mundo não fosse o nosso lugar? Isso é o 'céu' chamando a nossa alma. É o desejo de estarmos perto de Deus sem nenhuma barreira. Sinta-se animado, pois esse desejo será plenamente satisfeito quando virmos Jesus face a face.", tags: ["paz", "saudade"] }
        ],
        promessa: "Deus prometeu que você reinará com Ele e desfrutará de todas as riquezas do Seu Reino para sempre.",
        meditacao: "Lembre-se hoje: você é muito mais importante para Deus do que imagina. Tenha uma noite abençoada."
      }
    }
  },
  {
    data: "2026-06-24",
    manha: {
      original: {
        versiculo: { texto: "Mas ele disse: Antes bem-aventurados os que ouvem a palavra de Deus e a guardam", referencia: "Lc 11:27-28" },
        topicos: [
          { ordem: 1, icone: "📖", titulo: "Verdadeiro Privilégio", conteudo: "Muitos imaginam privilégios especiais para a mãe de nosso Senhor, mas Jesus redireciona o foco: a verdadeira bem-aventurança está em ouvir e guardar a Palavra. Maria não era mais instruída ou privilegiada em segredos espirituais do que qualquer discípulo fiel que teme ao Senhor.", tags: ["palavra", "prioridade"] },
          { ordem: 2, icone: "🤝", titulo: "Amigos de Deus", conteudo: "O segredo do Senhor é com aqueles que O temem. Jesus nos chama de amigos e nos revela tudo o que ouviu do Pai. Ele não retém qualquer coisa proveitosa para aqueles que O seguem. Temos acesso ao coração de Cristo através do Espírito Santo tanto quanto qualquer pessoa do passado teve.", tags: ["comunhão", "revelação"] },
          { ordem: 3, icone: "🕯️", titulo: "Divino Revelador", conteudo: "O Divino Revelador dos segredos nos diz o Seu coração e Se manifesta a nós de modo que não Se manifesta ao mundo. Não precisamos de visões extraordinárias ou linhagens físicas; a familiaridade com os segredos do coração de Deus está disponível a toda alma que se inclina sobre as Escrituras com fé.", tags: ["intimidade", "espírito"] },
          { ordem: 4, icone: "🌟", titulo: "Familiaridade Espiritual", conteudo: "Temos a verdadeira comunhão e familiaridade com o Salvador quando ouvimos a Sua voz nas páginas sagradas. Feliz é a alma que se vê assim privilegiada, podendo conhecer as profundezas do amor e da aliança divina sem depender de intermediários humanos ou posições externas.", tags: ["privilégio", "fé"] }
        ],
        promessa: "Deus revelará os segredos da Sua aliança e o Seu coração a todos os que guardam a Sua Palavra.",
        meditacao: "Valorize a Bíblia hoje; nela você encontrará a intimidade com Jesus que muitos buscam em lugares errados."
      },
      simples: {
        versiculo: { texto: "Felizes são os que ouvem a palavra de Deus e obedecem a ela.", referencia: "Lc 11:28" },
        topicos: [
          { ordem: 1, icone: "📖", titulo: "O Segredo da Felicidade", conteudo: "Muita gente acha que para ser feliz é preciso ter coisas caras ou ser famoso. Mas Jesus ensinou que a verdadeira felicidade vem de prestar atenção no que Deus diz e colocar em prática. Quando obedecemos a Deus, nosso coração fica em paz e nos sentimos seguros.", tags: ["felicidade", "obediência"] },
          { ordem: 2, icone: "🤝", titulo: "Melhor Amigo", conteudo: "Jesus quer ser o seu melhor amigo. Ele não esconde nada de quem O ama de verdade. Ele conta os segredos do Reino de Deus para nós através da Bíblia. Você pode conversar com Ele em qualquer lugar e Ele vai te mostrar o caminho certo a seguir em todas as situações.", tags: ["amizade", "jesus"] },
          { ordem: 3, icone: "🕯️", titulo: "Luz no Caminho", conteudo: "A Palavra de Deus é como uma lanterna que ilumina os nossos passos. Quando você lê a Bíblia, é como se Deus estivesse sussurrando o quanto Ele te ama e o que Ele planejou para você. É um privilégio que qualquer um de nós pode ter, basta abrir o coração e ler com vontade de aprender.", tags: ["luz", "bíblia"] },
          { ordem: 4, icone: "🌟", titulo: "Você é Especial", conteudo: "Você não precisa ser alguém importante no mundo para ser importante para Deus. Para o Senhor, o que vale é a sua disposição em ouvir a voz dEle. Cada vez que você escolhe fazer o que é certo porque Deus pediu, você se torna mais parecido com Jesus e mais íntimo dEle.", tags: ["valor", "atitude"] }
        ],
        promessa: "Deus prometeu abençoar ricamente a vida de quem escolhe seguir os Seus ensinamentos.",
        meditacao: "Tente praticar algo que você aprendeu na Bíblia hoje e veja como isso faz bem para você."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "fica sabendo ó rei, que não serviremos a teus deuses (…)", referencia: "Dn 3:18" },
        topicos: [
          { ordem: 1, icone: "🔥", titulo: "Coragem Inabalável", conteudo: "A narrativa dos três jovens hebreus estimula a firmeza e constância na defesa da verdade contra a tirania e a morte. Perca tudo, em vez de perder sua integridade. Uma consciência limpa é a jóia mais rara que pode adornar o seio de um mortal, ligada à retidão em meio a todas as dificuldades.", tags: ["coragem", "integridade"] },
          { ordem: 2, icone: "🧭", titulo: "Estrela Polar", conteudo: "Não seja guiado pelo brilho ilusório da política ou da vantagem momentânea, mas pela estrela polar da autoridade divina. Siga a justiça mesmo quando não observar qualquer vantagem presente; ande pela fé e não pela vista, confiando que Deus dará honra por essa confiança firme.", tags: ["justiça", "fé"] },
          { ordem: 3, icone: "💰", titulo: "Riqueza Espiritual", conteudo: "Se você for um perdedor por causa da consciência, achará que se o Senhor não retribuir na prata da prosperidade terrena, Ele cumprirá Sua promessa no ouro da alegria espiritual. Ter o favor e o sorriso de Deus é uma riqueza maior do que todas as minas de ouro do mundo poderiam oferecer.", tags: ["recompensa", "paz"] },
          { ordem: 4, icone: "⚖️", titulo: "Grande Ganho", conteudo: "A piedade com contentamento é grande ganho. Um grama de tranquilidade no coração vale uma tonelada de ouro. Busque primeiro o Reino de Deus e a Sua justiça, e tenha a certeza de que o Senhor não ficará devendo a ninguém que sacrifica o temporário pelo que é eterno.", tags: ["piedade", "prioridade"] }
        ],
        promessa: "Deus protegerá e honrará aqueles que se mantêm fiéis a Ele, mesmo diante das maiores pressões.",
        meditacao: "Não negocie os seus valores por medo ou lucro; o sorriso de Deus vale mais que o aplauso do mundo."
      },
      simples: {
        versiculo: { texto: "Não serviremos aos seus deuses nem adoraremos a sua estátua.", referencia: "Dn 3:18" },
        topicos: [
          { ordem: 1, icone: "🔥", titulo: "Ficar de Pé", conteudo: "Três jovens amigos preferiram ser jogados no fogo a desobedecer a Deus. Eles nos ensinam que é melhor perder tudo o que temos do que perder a nossa honestidade e a nossa fé. Quando fazemos o que é certo, mesmo sob pressão, Deus fica muito orgulhoso de nós.", tags: ["firmeza", "exemplo"] },
          { ordem: 2, icone: "🧭", titulo: "Fazer o Certo", conteudo: "Às vezes, parece mais fácil mentir ou agir errado para ganhar alguma vantagem rápida. Mas seguir a Deus é como ter uma bússola que sempre aponta para o lugar seguro. Escolha sempre a verdade, mesmo que pareça mais difícil no começo. Deus vai te recompensar por isso.", tags: ["verdade", "escolhas"] },
          { ordem: 3, icone: "💰", titulo: "Tesouro no Coração", conteudo: "A maior riqueza que você pode ter é dormir com a consciência tranquila, sabendo que agradou a Deus. Esse tipo de paz o dinheiro não compra. É como ter um ouro que brilha dentro de você e te dá alegria mesmo quando as coisas ao redor estão complicadas.", tags: ["paz", "valor"] },
          { ordem: 4, icone: "⚖️", titulo: "Deus Cuida de Você", conteudo: "Quando você coloca Deus em primeiro lugar, Ele cuida de todas as suas outras necessidades. Não tenha medo de 'perder' algo por ser fiel ao Senhor. Ele é o dono de tudo e sabe como te abençoar de maneiras que você nem imagina. Confie no cuidado dEle hoje e sempre.", tags: ["confiança", "provisão"] }
        ],
        promessa: "Deus prometeu que nunca abandonará aqueles que confiam nEle de todo o coração.",
        meditacao: "Seja corajoso nas suas decisões de hoje; o Senhor está ao seu lado para te fortalecer."
      }
    }
  },
  {
    data: "2026-06-25",
    manha: {
      original: {
        versiculo: { texto: "(…) sobe a um monte alto (…)", referencia: "Is 40:9" },
        topicos: [
          { ordem: 1, icone: "⛰️", titulo: "Escalada Espiritual", conteudo: "O conhecimento de Cristo é semelhante a escalar uma montanha. Na base, vemos apenas o pequeno vale ao redor; conforme subimos, a perspectiva se amplia e satisfaz a alma com cenas maiores. A vida cristã requer essa subida constante para descobrir novas belezas no Salvador.", tags: ["crescimento", "visão"] },
          { ordem: 2, icone: "🔭", titulo: "Perspectiva Ampliada", conteudo: "Quando inicialmente cremos, vemos senão pouco de Cristo. Quanto mais alto subimos através da experiência, mais descobrimos Sua glória. Quem já conquistou o cume? O amor de Cristo excede todo entendimento, e cada novo passo revela mistérios e graças que antes não podíamos imaginar.", tags: ["conhecimento", "glória"] },
          { ordem: 3, icone: "🧗", titulo: "Provação e Subida", conteudo: "Cada experiência e cada provação é como subir a outro cume da montanha da fidelidade divina. Paulo, mesmo idoso e em um calabouço, podia dizer com ênfase: 'Eu sei em quem tenho crido', pois sua vida tinha sido uma sucessão de escaladas que o levaram a ver melhor o seu Senhor.", tags: ["perseverança", "experiência"] },
          { ordem: 4, icone: "⛅", titulo: "O Topo da Fé", conteudo: "A morte para o crente é conquistar o topo da montanha, de onde se pode ver toda a fidelidade e amor do Senhor de forma plena. Levanta-te para um alto monte hoje; não se contente com a visão limitada do vale, mas busque as alturas da comunhão e do conhecimento de Jesus.", tags: ["eternidade", "comunhão"] }
        ],
        promessa: "Quanto mais você buscar a Deus, mais Ele revelará as maravilhas do Seu amor e da Sua glória.",
        meditacao: "Não fique parado na base; cada oração e ato de fé te leva um passo mais alto na visão de Cristo."
      },
      simples: {
        versiculo: { texto: "Suba a um monte bem alto e anuncie a boa notícia.", referencia: "Is 40:9" },
        topicos: [
          { ordem: 1, icone: "⛰️", titulo: "Subindo com Deus", conteudo: "Conhecer a Deus é como fazer uma trilha em uma montanha. No começo, a gente vê pouca coisa, mas conforme vamos caminhando e aprendendo, a vista vai ficando cada vez mais bonita. Não desista se a caminhada parecer difícil; o que você vai ver lá de cima vale muito a pena.", tags: ["esforço", "beleza"] },
          { ordem: 2, icone: "🔭", titulo: "Novas Descobertas", conteudo: "Sempre há algo novo para aprender sobre o amor de Jesus. Não ache que você já sabe tudo. Cada dia é uma chance de descobrir um detalhe diferente do carinho de Deus por você. É uma aventura que nunca acaba e que sempre traz surpresas maravilhosas para o nosso coração.", tags: ["aprendizado", "surpresa"] },
          { ordem: 3, icone: "🧗", titulo: "Vencer os Obstáculos", conteudo: "As dificuldades da vida são como partes íngremes da montanha. Elas servem para nos deixar mais fortes e nos levar para lugares mais altos. Quando superamos um problema com a ajuda de Deus, conseguimos olhar para trás e ver como Ele foi fiel em cada passo que demos.", tags: ["força", "vitória"] },
          { ordem: 4, icone: "⛅", titulo: "Vista do Alto", conteudo: "O objetivo da nossa vida é estar cada vez mais perto de Deus. Quando buscamos a presença dEle, as preocupações do mundo parecem menores e a paz de Deus preenche tudo. Que tal tirar um tempo hoje para 'subir a montanha' e conversar com o seu Pai do céu?", tags: ["paz", "oração"] }
        ],
        promessa: "Jesus prometeu que quem O procura com dedicação sempre O encontrará de braços abertos.",
        meditacao: "Aproxime-se de Deus hoje e Ele Se aproximará de você com muito amor e luz."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "A pomba, porém, não achou repouso para a planta do seu pé (…)", referencia: "Gn 8:9" },
        topicos: [
          { ordem: 1, icone: "🕊️", titulo: "Descanso na Arca", conteudo: "O crente não pode encontrar descanso fora da Arca que é Jesus Cristo. Se você encontra satisfação plena em ocupações mundanas e pecados, sua profissão de fé é vã. A alma regenerada é como a pomba de Noé: ela voa sobre as águas do mundo, mas só encontra repouso real quando volta para o Senhor.", tags: ["descanso", "jesus"] },
          { ordem: 2, icone: "🏜️", titulo: "Sede de Deus", conteudo: "Não podemos viver nas areias do deserto; queremos o maná que desce do alto. Nossas próprias fontes humanas secam, mas bebemos da Rocha que nos segue, e essa Rocha é Cristo. Se você sente que o mundo é uma miséria sem a presença de Deus, tenha bom ânimo: isso prova que você é um filho de Deus.", tags: ["necessidade", "filiação"] },
          { ordem: 3, icone: "🚫", titulo: "Vaidade das Vaidades", conteudo: "Sem o Senhor, o farto lagar e o celeiro cheio não podem dar satisfação; são apenas vaidade. A alma que se alimenta de Cristo canta com vigor, pois Ele farta a boca de bens e renova a mocidade. Fora dEle, tudo é vazio e passageiro; nEle, tudo ganha sentido e valor eterno.", tags: ["vazio", "plenitude"] },
          { ordem: 4, icone: "❤️", titulo: "O Amado é Meu", conteudo: "O crente não pode ficar sem o seu Senhor; palavras são inadequadas para expressar a Sua preciosidade. Se a sua alma não tem descanso no pecado, você não é como o pecador impenitente. Cristo não se esqueceu de você, pois você não se esqueceu dEle. Busque o repouso no seio do Salvador esta noite.", tags: ["amor", "segurança"] }
        ],
        promessa: "Aquele que busca o seu descanso em Jesus nunca será decepcionado, pois nEle a alma encontra paz real.",
        meditacao: "Pare de tentar encontrar paz nas coisas do mundo; volte para os braços de Jesus, o seu verdadeiro lar."
      },
      simples: {
        versiculo: { texto: "A pomba não encontrou lugar para pousar e voltou para a arca.", referencia: "Gn 8:9" },
        topicos: [
          { ordem: 1, icone: "🕊️", titulo: "Onde é o Seu Lugar", conteudo: "Sabe aquele sentimento de que as coisas do mundo não te satisfazem por completo? Isso é bom! Significa que o seu coração foi feito para algo maior. Assim como a pomba de Noé voltou para a arca quando não achou terra firme, nós devemos sempre voltar para Jesus para encontrar descanso.", tags: ["paz", "casa"] },
          { ordem: 2, icone: "🏜️", titulo: "Sede de Algo Real", conteudo: "As coisas divertidas do mundo passam rápido e deixam a gente com 'sede' de novo. Só Jesus tem o 'maná' e a 'água' que realmente matam a fome da nossa alma. Se você sente que precisa de Deus para ser feliz, alegre-se: isso é sinal de que você é um filho amado dEle.", tags: ["satisfação", "deus"] },
          { ordem: 3, icone: "🚫", titulo: "Cuidado com o Vazio", conteudo: "Ter muito dinheiro ou brinquedos novos é legal, mas sem Deus, tudo isso acaba parecendo vazio depois de um tempo. Jesus é o que dá sentido a tudo o que temos. Ele renova as nossas forças e nos dá uma alegria que não depende do que acontece ao nosso redor.", tags: ["alegria", "sentido"] },
          { ordem: 4, icone: "❤️", titulo: "Sempre Perto", conteudo: "Jesus nunca se esquece de você. Ele está sempre de braços abertos, esperando que você tire um tempo para conversar com Ele. Se você não se sente bem fazendo o que é errado, é porque o Espírito de Deus mora em você e te guia para o melhor caminho. Descanse no amor dEle hoje.", tags: ["carinho", "proteção"] }
        ],
        promessa: "Jesus prometeu dar descanso para todo aquele que estiver cansado e sobrecarregado.",
        meditacao: "Entregue suas preocupações para Jesus antes de dormir; Ele cuida de você com todo o carinho."
      }
    }
  },
  {
    data: "2026-06-26",
    manha: {
      original: {
        versiculo: { texto: "(…) e foste semelhante a nós", referencia: "Is 14:10" },
        topicos: [
          { ordem: 1, icone: "⚠️", titulo: "Perigo da Hipocrisia", conteudo: "Qual será a desgraça do professor apóstata quando sua alma aparecer diante de Deus? O hipócrita que repreende outros, mas vive no pecado oculto, enfrentará a vergonha final diante das multidões. Cuidado com o caminho para o inferno: aqueles que professam andar na estrada do céu, mas têm o coração longe de Deus.", tags: ["alerta", "verdade"] },
          { ordem: 2, icone: "🔍", titulo: "Autoexame Rigoroso", conteudo: "Examinai-vos a vós mesmos, se permaneceis na fé. Olhe bem para o seu estado e veja se você está realmente em Cristo. É fácil dar um veredicto leniente para si mesmo, mas a justiça requer rigor. Seja justo com todos, porém rigoroso consigo mesmo na análise da sua sinceridade espiritual.", tags: ["exame", "fé"] },
          { ordem: 3, icone: "🧱", titulo: "Edificar sobre a Rocha", conteudo: "Se a sua vida não estiver construída sobre a Rocha, quando cair a casa, grande será a sua queda. A aparência de piedade sem o fundamento em Jesus não suportará a tempestade do juízo. Que o Senhor lhe dê sinceridade, constância e firmeza para que você nunca seja levado a se desviar do caminho estreito.", tags: ["segurança", "caráter"] },
          { ordem: 4, icone: "🚪", titulo: "Caminho de Volta", conteudo: "Bunyan retrata o terrível destino daqueles que fingem ser cristãos: ser arrastado da porta do céu para a perdição por causa da falsidade. Não brinque com a religião; busque uma união real e vital com o Salvador, onde o seu viver privado corresponda à sua profissão pública de fé.", tags: ["honestidade", "eternidade"] }
        ],
        promessa: "Aquele que é sincero de coração e confia verdadeiramente em Cristo nunca será envergonhado.",
        meditacao: "Peça a Deus hoje um coração puro e uma fé que não seja apenas de palavras, mas de verdade e vida."
      },
      simples: {
        versiculo: { texto: "Agora você é como nós e está tão fraco quanto nós.", referencia: "Is 14:10" },
        topicos: [
          { ordem: 1, icone: "⚠️", titulo: "Verdade por Dentro", conteudo: "Seguir a Jesus não é apenas ir à igreja ou falar palavras bonitas; é sobre quem somos quando ninguém está olhando. Deus vê o nosso coração e ama a sinceridade. Não tente parecer bom por fora se por dentro você está guardando coisas ruins. Seja honesto com Deus.", tags: ["honestidade", "coração"] },
          { ordem: 2, icone: "🔍", titulo: "Olhar para Si", conteudo: "De vez em quando, pare e pense: 'Eu estou realmente tentando ser como Jesus?'. Não faça isso para se sentir culpado, mas para pedir ajuda a Deus para melhorar. É como olhar no espelho para limpar o rosto: o objetivo é ficar pronto e limpo para o Senhor.", tags: ["reflexão", "melhora"] },
          { ordem: 3, icone: "🧱", titulo: "Base Forte", conteudo: "Construa a sua vida nas coisas que Jesus ensinou. Se você fizer o que é certo, a sua fé vai ser forte como uma casa feita de tijolos e não vai cair quando os problemas aparecerem. Confiar em Jesus de verdade é a única garantia de que tudo vai terminar bem.", tags: ["fé", "segurança"] },
          { ordem: 4, icone: "🚪", titulo: "Amizade Real", conteudo: "Jesus quer ser seu amigo de verdade, e não apenas um 'conhecido'. Amigos de verdade contam tudo um para o outro e são leais. Que a sua amizade com Jesus seja profunda e sincera, para que você sinta a alegria de pertencer a Ele em todos os momentos do dia.", tags: ["amizade", "paz"] }
        ],
        promessa: "Jesus prometeu que quem O segue com sinceridade terá a luz da vida e nunca andará em trevas.",
        meditacao: "Abra o seu coração para Jesus hoje e deixe que Ele te guie pelo caminho da verdade."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) havendo escapado da corrupção, que pela concupiscência há no mundo", referencia: "2Pe 1:4" },
        topicos: [
          { ordem: 1, icone: "✨", titulo: "Viver no Poder", conteudo: "Desapareça para sempre todo pensamento de ceder ao desejo da carne se você vive no poder do seu Senhor ressuscitado. Haverá desgraça se o homem vivo em Cristo habitar na corrupção do pecado. Como podemos participar do cálice do Senhor e ainda beber o cálice do mal? A vida divina não pode ser presa na luxúria.", tags: ["poder", "santidade"] },
          { ordem: 2, icone: "🕊️", titulo: "Escapar das Armadilhas", conteudo: "Certamente, crente, você está liberto dos pecados; porventura escapou você também das armadilhas mais sutis do orgulho, da preguiça e da segurança carnal? Busque viver acima do mundanismo e da avareza. É para isso que você foi enriquecido com os tesouros da graça de Deus.", tags: ["vigilância", "liberdade"] },
          { ordem: 3, icone: "👑", titulo: "Coroa do Cristão", conteudo: "Busque a santidade; ela é a coroa e a glória do cristão. Uma igreja profana é inútil ao mundo e risaria do inferno. Você é sacerdote e realeza de Deus: aja como tal e reine sobre suas paixões. Não se associe com o que é impuro, pois o céu é a tua porção e o seu viver deve ser celeste.", tags: ["nobreza", "recompensa"] },
          { ordem: 4, icone: "🛡️", titulo: "Fé e Vida", conteudo: "Não pode haver fé no coração a menos que haja santidade na vida. As promessas de Deus estão sobre você para te fortalecer. Deseje viver como alguém que tem um nome comprado pelo sangue de Jesus, não conhecendo qualquer outra vergonha senão a de desonrar ao seu amado Mestre.", tags: ["fidelidade", "caráter"] }
        ],
        promessa: "Deus te deu poder para vencer as tentações e viver uma vida santa que agrada ao coração dEle.",
        meditacao: "Lembre-se da sua dignidade como filho de Deus; viva hoje de um jeito que honre o nome de Jesus."
      },
      simples: {
        versiculo: { texto: "Nós escapamos da corrupção que existe no mundo por causa dos maus desejos.", referencia: "2Pe 1:4" },
        topicos: [
          { ordem: 1, icone: "✨", titulo: "Vida Nova", conteudo: "Quando aceitamos Jesus, Ele nos dá uma vida nova e limpa. Não faz sentido voltar a fazer as coisas erradas que fazíamos antes. É como tomar um banho e colocar uma roupa limpa: a gente não quer se sujar na lama de novo. Jesus te dá forças para escolher o que é bom.", tags: ["escolhas", "limpeza"] },
          { ordem: 2, icone: "🕊️", titulo: "Livre de Verdade", conteudo: "Deus nos libertou das 'correntes' do pecado. Agora somos livres para amar e fazer o bem. Cuidado com o orgulho ou com a preguiça, que são armadilhas silenciosas. Use a liberdade que Jesus te deu para ajudar os outros e para ficar cada vez mais perto de Deus.", tags: ["liberdade", "cuidado"] },
          { ordem: 3, icone: "👑", titulo: "Você é Especial", conteudo: "Você é como um príncipe ou uma princesa do Reino de Deus. Por isso, as suas atitudes devem ser dignas de quem pertence à família real do céu. Trate as pessoas com carinho, seja honesto e brilhe a luz de Jesus por onde você passar. Esse é o seu maior tesouro.", tags: ["valor", "atitude"] },
          { ordem: 4, icone: "🛡️", titulo: "Fé na Prática", conteudo: "Acreditar em Jesus de verdade muda o nosso jeito de viver. Se dizemos que temos fé, as nossas ações devem mostrar isso. Peça a Deus hoje: 'Senhor, me ajuda a viver de um jeito que Te agrade e que mostre o Teu amor para todo mundo'. Ele vai ficar muito feliz em te ajudar.", tags: ["prática", "amor"] }
        ],
        promessa: "Jesus prometeu que o Espírito Santo estaria com você para te guiar e te proteger do mal.",
        meditacao: "Durma com o coração em paz, sabendo que você pertence a Deus e que Ele cuida de você."
      }
    }
  },
  {
    data: "2026-06-27",
    manha: {
      original: {
        versiculo: { texto: "(…) somente que, indo, não vades longe (…)", referencia: "Ex 8:28" },
        topicos: [
          { ordem: 1, icone: "🐍", titulo: "Cilada do Compromisso", conteudo: "Essa é uma astuta palavra de Faraó: ele barganharia para que os israelitas não fossem 'muito longe'. Da mesma forma, o mundo recomenda o caminho do acordo e da 'moderação'. Multidões de cristãos cedem a esse conselho para sua própria ruína, tentando conciliar a luz com as trevas.", tags: ["alerta", "separação"] },
          { ordem: 2, icone: "🏜️", titulo: "Deserto da Separação", conteudo: "Se quisermos seguir totalmente ao Senhor, temos de ir imediatamente para o deserto da separação e deixar o Egito do mundo carnal para trás. Devemos abandonar suas máximas e prazeres pecaminosos para ir ao lugar onde o Senhor chama os Seus santificados. O compromisso com o erro é o início da queda.", tags: ["decisão", "santidade"] },
          { ordem: 3, icone: "🔥", titulo: "Longe do Perigo", conteudo: "Quando a cidade está incendiada, nossa casa não deve estar perto das chamas. O mais longe de uma víbora, melhor; e o mais longe da conformidade com o mundo, melhor. A proximidade com o pecado convida à infestação da alma. Saí do meio deles e apartai-vos, diz o Senhor, para sua própria segurança.", tags: ["segurança", "proteção"] },
          { ordem: 4, icone: "🎺", titulo: "Chamado Total", conteudo: "A morte para o mundo e o sepultamento com Cristo são experiências que mentes carnais tratam com escárnio. Não tema ser considerado 'excessivamente meticuloso' na verdade. Siga a trombeta que chama para a pureza total, pois o Senhor deseja um povo zeloso e completamente dedicado a Ele.", tags: ["fidelidade", "zelo"] }
        ],
        promessa: "Ao se separar do mal e buscar a Deus por inteiro, você encontrará a proteção e o favor do Senhor.",
        meditacao: "Não tente ficar 'no limite' com o mundo; corra para o centro da vontade de Deus, onde é seguro."
      },
      simples: {
        versiculo: { texto: "Podem ir, mas não vão muito longe.", referencia: "Ex 8:28" },
        topicos: [
          { ordem: 1, icone: "🐍", titulo: "Não Caia na Armadilha", conteudo: "Às vezes, as pessoas tentam nos convencer de que não precisamos ser 'tão certinhos' ou que um 'pecadinho' não faz mal. Isso é uma armadilha. Jesus quer que sejamos inteiros para Ele. Não tente ficar com um pé no caminho de Deus e outro no caminho do que é errado.", tags: ["escolhas", "cuidado"] },
          { ordem: 2, icone: "🏜️", titulo: "Seguir por Inteiro", conteudo: "Seguir a Jesus é uma aventura completa! Deixe para trás as coisas ruins que te puxam para baixo. Quando decidimos obedecer a Deus em tudo, descobrimos uma liberdade e uma alegria que quem fica 'em cima do muro' nunca vai conhecer. Vá fundo no amor de Deus!", tags: ["coragem", "alegria"] },
          { ordem: 3, icone: "🔥", titulo: "Longe do Mal", conteudo: "Se você sabe que algo pode te fazer mal ou te afastar de Deus, fique o mais longe possível disso. Não brinque com o fogo. Estar perto de Jesus é o lugar mais seguro do mundo. Quanto mais longe estivermos das coisas ruins, mais brilhante será a luz de Deus na nossa vida.", tags: ["segurança", "paz"] },
          { ordem: 4, icone: "🎺", titulo: "Escolha o Melhor", conteudo: "Muitas pessoas podem não entender por que você prefere as coisas de Deus, mas não ligue para isso. O importante é o que Deus pensa de você. Ele te chamou para ser especial e para viver uma vida incrível. Escute a voz de Jesus e siga-O com todo o seu coração hoje.", tags: ["foco", "jesus"] }
        ],
        promessa: "Jesus prometeu que estaria com você todos os dias para te guiar no caminho da vida e da luz.",
        meditacao: "Seja corajoso na sua fé hoje; ser amigo de Jesus é a melhor escolha que você pode fazer."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Cada um fique na vocação em que foi chamado", referencia: "1Co 7:20" },
        topicos: [
          { ordem: 1, icone: "👞", titulo: "Santidade no Trabalho", conteudo: "Não é apenas sendo ministro que se vive para Deus. O Senhor é grandemente glorificado em uma tenda de sapateiro onde o trabalhador canta o amor do Salvador. Não é o ofício ou a posição, mas a seriedade e a graça que nos permitem magnificar o Altíssimo em nossa vida diária comum.", tags: ["trabalho", "serviço"] },
          { ordem: 2, icone: "🚜", titulo: "Glorificar em Tudo", conteudo: "O nome de Jesus é glorificado tanto pelos pobres carroceiros que abençoam a Deus como pelo grande evangelista. Toda atividade comercial e todo chamado honesto podem ser santificados pelo evangelho para fins nobres. Não considere pouco o seu chamado; ele é o seu campo missionário atual.", tags: ["vocação", "propósito"] },
          { ordem: 3, icone: "📖", titulo: "Exemplos Bíblicos", conteudo: "Na Bíblia, as formas mais humildes de trabalho estão ligadas a grandes atos de fé. Não esteja descontente com sua posição; permaneça nela a menos que tenha certeza do chamado para algo novo. Encha o seu derredor atual com o louvor a Deus e Ele mostrará se precisar de você em outra coisa.", tags: ["contentamento", "fidelidade"] },
          { ordem: 4, icone: "😌", titulo: "Paz e Satisfação", conteudo: "Ponha de lado a atormentante ambição e abrace a pacífica satisfação. Mostrar um espírito sincero e ter o favor de Deus é uma riqueza maior do que todo o comércio do mundo. Um grama de tranquilidade no coração vale uma tonelada de ouro. Seja fiel onde Deus te colocou hoje.", tags: ["paz", "descanso"] }
        ],
        promessa: "Deus será glorificado em você e através de você exatamente onde você está agora.",
        meditacao: "Não espere 'ser alguém importante' para servir a Deus; cada tarefa de hoje pode ser um ato de adoração."
      },
      simples: {
        versiculo: { texto: "Cada um deve continuar na condição em que estava quando Deus o chamou.", referencia: "1Co 7:20" },
        topicos: [
          { ordem: 1, icone: "👞", titulo: "Deus no Dia a Dia", conteudo: "Você não precisa ter um emprego 'especial' na igreja para agradar a Deus. Você pode glorificar ao Senhor lavando louça, estudando ou ajudando alguém. O que importa é o carinho e a dedicação que você coloca no que faz, sabendo que está fazendo para Jesus.", tags: ["atitude", "valor"] },
          { ordem: 2, icone: "🚜", titulo: "Você é um Missionário", conteudo: "Onde quer que você esteja agora, esse é o lugar onde Deus quer que você brilhe. Seja na escola, no trabalho ou em casa, as pessoas ao seu redor precisam ver o amor de Deus através de você. Trate todos com bondade e faça o seu melhor; isso agrada muito ao coração de Deus.", tags: ["propósito", "luz"] },
          { ordem: 3, icone: "📖", titulo: "Ser Fiel no Pouco", conteudo: "Na Bíblia, Deus usou pessoas comuns que faziam trabalhos simples para realizar coisas incríveis. Não fique triste se o que você faz parece pequeno; se você for fiel no pouco, Deus te confiará muito. O importante é estar disponível para Ele em qualquer situação.", tags: ["fidelidade", "confiança"] },
          { ordem: 4, icone: "😌", titulo: "Coração Calmo", conteudo: "Em vez de ficar sonhando com o que você não tem, aproveite o que Deus te deu hoje. Ter o sorriso de Deus sobre a sua vida traz uma paz que dinheiro nenhum pode comprar. Descanse sabendo que você está exatamente onde precisa estar para aprender e crescer com o Senhor.", tags: ["paz", "gratidão"] }
        ],
        promessa: "Deus prometeu abençoar o trabalho das suas mãos quando você faz tudo com amor por Ele.",
        meditacao: "Agradeça a Deus pelo seu dia e peça que Ele te use amanhã no lugar onde você estiver."
      }
    }
  },
  {
    data: "2026-06-28",
    manha: {
      original: {
        versiculo: { texto: "Olhando para Jesus (…)", referencia: "Hb 12:2" },
        topicos: [
          { ordem: 1, icone: "👁️", titulo: "Foco Correto", conteudo: "É sempre obra do Espírito Santo desviar nossos olhos de nós mesmos e direcioná-los para Jesus. Satanás tenta o oposto, sussurrando sobre nossos pecados, falta de fé ou de alegria. Nunca encontraremos conforto olhando para dentro; a segurança vem de olhar para o Salvador.", tags: ["foco", "jesus"] },
          { ordem: 2, icone: "🛡️", titulo: "Cristo é Tudo", conteudo: "Não é a tua crença ou tua alegria que te salva, é Cristo. Não é nem mesmo a tua fé, embora ela seja o instrumento, mas o sangue e os méritos dEle. Não olhe para a mão com que se agarra a Cristo, mas para Cristo; não para a tua esperança, mas para a Fonte dela.", tags: ["salvação", "graça"] },
          { ordem: 3, icone: "🕊️", titulo: "Paz na Contemplação", conteudo: "Nunca encontraremos felicidade examinando nossas orações ou sentimentos; é o que Jesus é que dá descanso à alma. Se quisermos vencer a Satanás e ter paz com Deus, devemos estar olhando para Jesus constantemente. Deixe que a morte e os méritos dEle refresquem a tua mente.", tags: ["paz", "descanso"] },
          { ordem: 4, icone: "🌅", titulo: "Hábito Diário", conteudo: "Mantenha teus olhos apenas nEle ao levantar e ao deitar. Não deixe esperanças ou medos se colocarem entre você e Jesus. Siga-O firmemente e Ele nunca te deixará. Olhar para Jesus é a arma definitiva contra a incredulidade e a tristeza espiritual que tanto nos afligem.", tags: ["disciplina", "fidelidade"] }
        ],
        promessa: "Ao olhar para Jesus, você encontrará a paz e a força necessárias para vencer qualquer desafio.",
        meditacao: "Tire os olhos dos seus problemas e das suas falhas hoje; fixe o seu olhar na perfeição e no amor de Jesus."
      },
      simples: {
        versiculo: { texto: "Mantenham os olhos fixos em Jesus.", referencia: "Hb 12:2" },
        topicos: [
          { ordem: 1, icone: "👁️", titulo: "Olhar para o Alvo", conteudo: "Sabe quando a gente está aprendendo a andar de bicicleta e precisa olhar para frente? Na vida cristã é igual. Se ficarmos olhando só para os nossos erros, a gente desanima. Mas se olharmos para Jesus, ganhamos coragem e força para continuar tentando e acertando.", tags: ["foco", "ânimo"] },
          { ordem: 2, icone: "🛡️", titulo: "Jesus é a Nossa Força", conteudo: "O que nos salva não é o quanto somos 'fortes' na fé, mas o quanto Jesus é poderoso. Pense em uma criança segurando a mão do pai: não é a força da mãozinha dela que a protege, mas a mão forte do pai. Confie no poder de Jesus para te segurar e te proteger sempre.", tags: ["segurança", "confiança"] },
          { ordem: 3, icone: "🕊️", titulo: "Paz de Verdade", conteudo: "A verdadeira paz não vem de sentir que somos perfeitos, mas de saber que Jesus nos ama mesmo quando falhamos. Quando você se sentir triste ou culpado, lembre-se do que Jesus fez por você na cruz. Esse amor é o que acalma o nosso coração e nos dá alegria de novo.", tags: ["paz", "amor"] },
          { ordem: 4, icone: "🌅", titulo: "Todo Dia com Ele", conteudo: "Comece e termine o seu dia pensando em Jesus. Fale com Ele como quem fala com um amigo querido. Não deixe o medo ou as preocupações ocuparem todo o espaço da sua mente. Jesus prometeu que nunca vai te deixar sozinho; confie nessa promessa e siga em frente.", tags: ["amizade", "presença"] }
        ],
        promessa: "Jesus prometeu que estaria com você até o fim e que te ajudaria a completar a sua jornada.",
        meditacao: "Jesus te ama e está cuidando de tudo; olhe para Ele e sinta a Sua paz."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "(…) mas a vara de Arão tragou as varas deles", referencia: "Ex 7:12" },
        topicos: [
          { ordem: 1, icone: "🌿", titulo: "Vitória do Princípio", conteudo: "Sempre que um princípio divino é lançado no coração, ele engolirá todos os seus inimigos. As doces atrações da cruz cortejam e conquistam o coração, fazendo o mundano buscar as esferas superiores. A obra de Deus em nós é poderosa para superar qualquer oposição satânica ou carnal.", tags: ["vitória", "poder"] },
          { ordem: 2, icone: "🔨", titulo: "Cruz que Destrói", conteudo: "O diabo pode lançar velhos pecados como serpentes diante de nós, mas a cruz de Jesus os destrói a todos. A fé em Cristo acaba rapidamente com as acusações. Jesus é o Quebrador que destrói as provações mundanas, as tentações e a incredulidade com a Sua autoridade soberana.", tags: ["libertação", "fé"] },
          { ordem: 3, icone: "🔥", titulo: "Paixão Dominante", conteudo: "Com um amor apaixonado por Jesus, dificuldades são superadas e sacrifícios se tornam prazeres. Se a religião é uma paixão que consome o coração, ela suportará a provação. Examine-se: a sua fé tem provado o poder que lhe foi dado do céu? Deixe que o amor a Jesus seja a força dominante em sua alma.", tags: ["amor", "zelo"] },
          { ordem: 4, icone: "🏆", titulo: "Triunfo Final", conteudo: "A vara de Arão provou sua origem divina ao engolir as falsificações. Assim também a verdadeira graça triunfará sobre todas as ilusões do mundo. Se Cristo está em alguma coisa em sua vida, Ele deve estar em todas as coisas. Não descanse até que a Sua presença seja o centro de tudo o que você faz.", tags: ["soberania", "totalidade"] }
        ],
        promessa: "O poder de Deus em sua vida é superior a qualquer ataque ou tentação do inimigo.",
        meditacao: "Confie que a graça de Deus vai vencer cada dificuldade que você enfrentar hoje."
      },
      simples: {
        versiculo: { texto: "O cajado de Arão engoliu os cajados dos outros.", referencia: "Ex 7:12" },
        topicos: [
          { ordem: 1, icone: "🌿", titulo: "O Bem Sempre Vence", conteudo: "Deus é muito mais poderoso do que qualquer coisa ruim. Quando deixamos Jesus entrar no nosso coração, a luz dEle expulsa toda a escuridão. É como se o amor de Deus fosse 'engolindo' o medo e a tristeza, deixando apenas a alegria e a paz no lugar.", tags: ["vitória", "luz"] },
          { ordem: 2, icone: "🔨", titulo: "Fim da Culpa", conteudo: "Satanás gosta de nos lembrar das coisas erradas que fizemos no passado para nos deixar tristes. Mas a morte de Jesus na cruz apagou todos os nossos erros. Quando confiamos em Jesus, as acusações perdem o poder. Você está perdoado e livre para começar de novo com Deus.", tags: ["perdão", "liberdade"] },
          { ordem: 3, icone: "🔥", titulo: "Amor que Transforma", conteudo: "Quando amamos Jesus de verdade, as coisas difíceis ficam mais fáceis de suportar. O amor por Ele nos dá uma força que a gente nem sabia que tinha. Deixe que o carinho por Jesus seja a coisa mais importante do seu dia e você verá como tudo ao seu redor vai mudar para melhor.", tags: ["amor", "força"] },
          { ordem: 4, icone: "🏆", titulo: "Deus no Controle", conteudo: "No final das contas, o plano de Deus é o que vai dar certo. Não se preocupe com quem tenta te desanimar ou com as dificuldades do mundo. O poder de Deus em você é invencível. Entregue tudo nas mãos de Jesus e descanse, sabendo que Ele já venceu a batalha por você.", tags: ["confiança", "paz"] }
        ],
        promessa: "Jesus prometeu que nada poderá te separar do amor dEle e que Ele te dará a vitória.",
        meditacao: "Sinta o abraço de Jesus nesta noite; o Seu poder te protege e te sustenta."
      }
    }
  },
  {
    data: "2026-06-29",
    manha: {
      original: {
        versiculo: { texto: "(…) assim também aos que em Jesus dormem, Deus os tornará a trazer com ele", referencia: "1Ts 4:14" },
        topicos: [
          { ordem: 1, icone: "😴", titulo: "Sono de Descanso", conteudo: "A morte para o crente é descrita como um sono em Jesus, uma ideia ligada ao repouso total. O corpo descansa de seus trabalhos enquanto a alma entra em seu jardim de verão de facilidades. É o fechamento da porta da alma para os intrusos e o início de um Sabbath eterno de paz.", tags: ["morte", "descanso"] },
          { ordem: 2, icone: "✨", titulo: "Despertar Glorioso", conteudo: "Que despertar será o dos santos! Foram colocados para descansar cansados e desgastados, mas acordarão em beleza e glória. A atrofiada semente do corpo físico dará lugar a uma bela flor espiritual. O inverno da sepultura cede à primavera da redenção e ao verão da glória eterna.", tags: ["ressurreição", "esperança"] },
          { ordem: 3, icone: "🕊️", titulo: "Presença Imediata", conteudo: "A alma não dorme em insensibilidade; ela está diante do trono de Deus na hora da morte, tal como Jesus prometeu ao ladrão na cruz. Eles louvam ao Senhor dia e noite em Seu templo, cantando aleluia Àquele que os lavou de seus pecados. O descanso é apenas para o corpo fatigado pela labuta terrena.", tags: ["céu", "comunhão"] },
          { ordem: 4, icone: "🛡️", titulo: "Guardados por Anjos", conteudo: "Os herdeiros da glória dormem guardados por anjos observadores e separados por mistérios eternos até a plenitude da redenção. Bendita é a morte que nos despe desta roupa de trabalho para nos vestir com as vestes nupciais da incorruptibilidade. Bem-aventurados são aqueles que dormem seguros em Jesus.", tags: ["proteção", "eternidade"] }
        ],
        promessa: "Aqueles que morrem em Cristo descansarão de suas dores e acordarão para a vida eterna e gloriosa.",
        meditacao: "Não tema o fim da vida terrena; para o cristão, ele é apenas o início de um descanso perfeito nos braços de Deus."
      },
      simples: {
        versiculo: { texto: "Aqueles que morrem em Jesus serão trazidos por Deus com Ele.", referencia: "1Ts 4:14" },
        topicos: [
          { ordem: 1, icone: "😴", titulo: "Dormir em Paz", conteudo: "Para quem segue Jesus, a morte é como um sono tranquilo depois de um dia longo de trabalho. É um momento de descanso total onde não há mais cansaço, dor ou tristeza. Deus cuida de nós enquanto 'dormimos' e nos prepara para um novo dia maravilhoso que nunca vai acabar.", tags: ["paz", "descanso"] },
          { ordem: 2, icone: "✨", titulo: "Acordar Lindo", conteudo: "Imagine dormir cansado e acordar com toda a energia do mundo e com um corpo perfeito! É assim que será o nosso despertar com Jesus. Tudo o que era 'feio' ou 'estragado' em nós será consertado. Seremos cheios de beleza e alegria, brilhando como o sol na presença de Deus.", tags: ["esperança", "glória"] },
          { ordem: 3, icone: "🕊️", titulo: "Com Deus Agora", conteudo: "Quem parte para estar com Jesus não fica 'dormindo' de verdade; a sua alma vai direto para perto de Deus. É uma festa contínua no céu! Eles estão felizes, cantando e aproveitando a companhia do nosso melhor Amigo. O corpo descansa, mas o coração do cristão já está celebrando no paraíso.", tags: ["alegria", "céu"] },
          { ordem: 4, icone: "🛡️", titulo: "Segurança Total", conteudo: "Nada pode nos separar do amor de Deus, nem mesmo a morte. Ele nos protege em todos os momentos. Podemos viver sem medo do futuro, sabendo que Jesus já venceu a morte por nós e que Ele tem o controle de tudo. Você está seguro nas mãos do Pai hoje e para sempre.", tags: ["confiança", "proteção"] }
        ],
        promessa: "Jesus prometeu que prepararia um lugar especial para você na casa do Pai para viverem juntos.",
        meditacao: "A vida com Deus é eterna; aproveite cada momento de hoje sabendo que o melhor ainda está por vir."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "Deus o desamparou, para tentá-lo, para saber tudo o que havia no seu coração", referencia: "2Cr 32:31" },
        topicos: [
          { ordem: 1, icone: "⚠️", titulo: "Perigo da Autojustiça", conteudo: "Ezequias exaltou-se internamente e a segurança carnal permitiu que a graça fosse retirada por um momento. Se a graça de Deus se ausentasse do melhor cristão, haveria pecado suficiente no coração para fazê-lo o pior dos transgressores. Somos dependentes da presença de Deus a cada segundo.", tags: ["humildade", "dependência"] },
          { ordem: 2, icone: "🌙", titulo: "Luz Emprestada", conteudo: "Tal como a lua, nós tomamos nossa luz emprestada do Sol da Justiça. Brilhantes como somos quando a graça brilha em nós, somos a própria escuridão quando o Senhor Se retira. Se deixados a nós mesmos, esfriaríamos em indiferença e vacilaríamos em direção às malignas paixões.", tags: ["graça", "reflexo"] },
          { ordem: 3, icone: "🙏", titulo: "Clamor pela Presença", conteudo: "Clame a Deus: 'Senhor, não retire Teu Espírito Santo de nós!'. Precisamos que Ele nos regue a cada momento para que ninguém nos faça dano. Seja no vale da humilhação ou na montanha da exaltação, a proteção de Deus é a nossa única salvaguarda contra o orgulho e o desânimo.", tags: ["oração", "proteção"] },
          { ordem: 4, icone: "🛡️", titulo: "Guarda em Todo Lugar", conteudo: "Precisamos de Deus na juventude, quando as paixões são fortes, e na velhice, quando podemos nos tornar presunçosos. Precisamos dEle trabalhando, sofrendo ou descansando. Em todos os lugares e tempos, o clamor deve ser: 'Guarda-nos, ó Deus!', pois sem Ti não podemos permanecer em pé.", tags: ["vigilância", "fidelidade"] }
        ],
        promessa: "Deus prometeu guardar os Seus filhos de dia e de noite para que nada os destrua.",
        meditacao: "Não confie na sua própria força hoje; peça a Jesus que te segure pela mão e te guie em cada passo."
      },
      simples: {
        versiculo: { texto: "Deus deixou que ele fizesse o que queria para testar o seu coração.", referencia: "2Cr 32:31" },
        topicos: [
          { ordem: 1, icone: "⚠️", titulo: "Sempre com Deus", conteudo: "Às vezes a gente acha que já é 'forte o suficiente' e que não precisa tanto de Deus. Mas a verdade é que precisamos dEle em cada respiração. Sem a ajuda de Jesus, a gente acaba se perdendo e fazendo escolhas ruins. Ficar perto dEle é o que nos mantém no caminho certo.", tags: ["humildade", "jesus"] },
          { ordem: 2, icone: "🌙", titulo: "Brilhando a Luz dEle", conteudo: "Nós somos como a lua: não temos luz própria, apenas refletimos a luz do sol. Se ficarmos longe de Jesus, o nosso brilho acaba. Mas quando estamos perto dEle, as pessoas conseguem ver a bondade e o amor de Deus através de nós. Mantenha-se conectado com a Fonte da Luz.", tags: ["luz", "atitude"] },
          { ordem: 3, icone: "🙏", titulo: "Pedir Ajuda Sempre", conteudo: "Não tenha vergonha de dizer: 'Senhor, eu preciso de Ti!'. Essa é a oração mais inteligente que existe. Deus ama quando reconhecemos que Ele é o nosso herói e protetor. Ele tem prazer em nos segurar pela mão e nos ajudar a vencer as dificuldades do dia a dia.", tags: ["oração", "confiança"] },
          { ordem: 4, icone: "🛡️", titulo: "Proteção Total", conteudo: "Deus quer te guardar em todos os momentos: quando você está feliz, quando está triste, quando é jovem ou quando for mais velho. Ele é como um escudo ao seu redor. Confie na proteção dEle e não tente resolver tudo sozinho. Com Jesus ao seu lado, você está sempre seguro.", tags: ["segurança", "paz"] }
        ],
        promessa: "O Senhor prometeu que nunca te deixaria nem te abandonaria.",
        meditacao: "Termine o seu dia entregando tudo nas mãos de Deus; Ele sabe cuidar de você melhor do que ninguém."
      }
    }
  },
  {
    data: "2026-06-30",
    manha: {
      original: {
        versiculo: { texto: "E eu dei-lhes a glória que a mim me deste (…)", referencia: "Jo 17:22" },
        topicos: [
          { ordem: 1, icone: "🎁", titulo: "Liberalidade Superlativa", conteudo: "Eis a superlativa generosidade do Senhor Jesus: Ele nos deu o Seu tudo. Não ficou satisfeito em nos dar apenas uma parte, mas compartilha conosco tudo o que tem. Ele nos faz assentar à Sua mesa e participar do banquete celestial como co-herdeiros de Suas glórias e graças.", tags: ["generosidade", "herança"] },
          { ordem: 2, icone: "👑", titulo: "Co-herdeiros com Cristo", conteudo: "Jesus terá Sua noiva tão rica como Ele mesmo. Não há uma glória ou uma graça que Ele possua que não compartilhe com Seus redimidos. Ele esvaziou todo o Seu espólio para os cofres da Igreja e fez comuns todas as coisas. Somos elevados à mesma dignidade real que o nosso Salvador.", tags: ["realeza", "união"] },
          { ordem: 3, icone: "🔑", titulo: "Acesso Total", conteudo: "Não há um aposento em Sua casa cuja chave Ele retenha de Seu povo. Ele nos dá plena liberdade para tomar tudo o que Ele tem e nos convida a nos apropriarmos de tanto quanto pudermos carregar. A plenitude sem limites da Sua auto-suficiência é tão livre para nós como o ar que respiramos.", tags: ["liberdade", "plenitude"] },
          { ordem: 4, icone: "🍷", titulo: "Beber Abundantemente", conteudo: "Cristo colocou o jarro do Seu amor e graça aos lábios dos crentes, convidando-os a beber para sempre. Como não se pode esgotá-lo, somos convidados a beber abundantemente, pois é todo nosso. Que maior prova de comunhão e amor o céu poderia fornecer do que esse compartilhamento total?", tags: ["amor", "comunhão"] }
        ],
        promessa: "Em Cristo, você tem acesso a todas as riquezas e glórias do Reino de Deus como um co-herdeiro amado.",
        meditacao: "Não viva como um mendigo espiritual hoje; aproprie-se das riquezas que Jesus já colocou à sua disposição."
      },
      simples: {
        versiculo: { texto: "Eu dei a eles a mesma glória que tu me deste.", referencia: "Jo 17:22" },
        topicos: [
          { ordem: 1, icone: "🎁", titulo: "Tudo para Você", conteudo: "Jesus é incrivelmente generoso! Ele não deu apenas um 'pouquinho' de ajuda, Ele deu tudo o que tinha para nós. Imagine receber a herança do Rei do Universo! É exatamente isso que aconteceu: por causa de Jesus, agora somos donos de todas as riquezas espirituais de Deus.", tags: ["presente", "riqueza"] },
          { ordem: 2, icone: "👑", titulo: "Príncipe de Deus", conteudo: "Você foi elevado à posição de príncipe ou princesa no Reino de Deus. Tudo o que Jesus conquistou, Ele divide com você. Você tem o mesmo direito de falar com o Pai e de receber o carinho dEle que Jesus tem. Sinta-se amado e valorizado, pois você é da família real!", tags: ["identidade", "valor"] },
          { ordem: 3, icone: "🔑", titulo: "Casa Aberta", conteudo: "A casa de Deus está de portas abertas para você. Jesus te deu a 'chave' para conversar com o Pai e pedir ajuda a qualquer hora. Não há segredos ou lugares proibidos para quem ama a Deus. Use essa liberdade para ficar cada vez mais perto do seu Criador e amigo.", tags: ["acesso", "oração"] },
          { ordem: 4, icone: "🍷", titulo: "Fonte Inesgotável", conteudo: "O amor e a bondade de Jesus são como uma fonte que nunca seca. Você pode beber dessa paz e dessa alegria todos os dias, e nunca vai acabar. Sinta-se à vontade para pedir mais força e mais carinho de Deus; Ele adora te abençoar e te ver feliz dEle.", tags: ["amor", "alegria"] }
        ],
        promessa: "Toda a glória e o amor de Jesus estão disponíveis para você hoje e por toda a eternidade.",
        meditacao: "Comece o seu dia celebrando a sorte de ser um co-herdeiro de Jesus Cristo."
      }
    },
    noite: {
      original: {
        versiculo: { texto: "nada há que te seja demasiado difícil", referencia: "Jr 32:17" },
        topicos: [
          { ordem: 1, icone: "🌍", titulo: "Poder Criador", conteudo: "Ah, Senhor Deus! Tu fizeste os céus e a terra com o Teu grande poder. Nada há que Te seja demasiado difícil. Esse é o fundamento da nossa confiança: o Deus que criou o universo é o mesmo que cuida dos detalhes da nossa vida. Nenhuma situação está além do alcance do Seu braço estendido.", tags: ["onipotência", "criação"] },
          { ordem: 2, icone: "⚖️", titulo: "Fé Contra a Razão", conteudo: "Jeremias comprou um campo enquanto a cidade estava cercada, algo que a razão carnal condenaria. Mas foi o suficiente que o seu Deus lhe ordenasse. A verdadeira fé heróica ousa fazer coisas que parecem tolas aos olhos do mundo, confiando que Deus será justificado diante de Seus filhos.", tags: ["fé", "obediência"] },
          { ordem: 3, icone: "🛡️", titulo: "Exemplos de Confiança", conteudo: "Noé construindo a arca, Abraão oferecendo seu filho, Moisés desprezando os tesouros do Egito; todos agiram contra a lógica humana sob o comando de Deus. O Senhor lhes deu uma rica recompensa. Se nos aventurarmos mais nas promessas de Deus, entraremos em um mundo de maravilhas.", tags: ["história", "fidelidade"] },
          { ordem: 4, icone: "🌟", titulo: "Infusão de Fé", conteudo: "Quisera Deus que tivéssemos uma infusão mais potente dessa fé heróica nos tempos modernos. Deixe que a confiança de Jeremias seja a nossa hoje. Não limite o que Deus pode fazer na sua vida com base na sua lógica limitada. Se Ele disse, Ele cumprirá, por mais impossível que pareça.", tags: ["coragem", "esperança"] }
        ],
        promessa: "Para o seu Deus, não existem problemas impossíveis ou situações difíceis demais para serem resolvidas.",
        meditacao: "Entregue o seu 'impossível' para o Deus que criou as estrelas; Ele tem todo o poder para te ajudar."
      },
      simples: {
        versiculo: { texto: "Para Deus nada é impossível.", referencia: "Jr 32:17" },
        topicos: [
          { ordem: 1, icone: "🌍", titulo: "O Deus do Impossível", conteudo: "Deus criou o mundo inteiro, as estrelas e os mares com apenas uma palavra. Imagine o poder que Ele tem! Se Ele consegue cuidar de todo o universo, Ele com certeza consegue cuidar dos seus problemas. Para o Senhor, não existe nada difícil demais ou complicado demais.", tags: ["poder", "confiança"] },
          { ordem: 2, icone: "⚖️", titulo: "Confiar de Olhos Fechados", conteudo: "Às vezes, Deus nos pede para fazer coisas que não parecem fazer sentido na hora. Mas confiar nEle é acreditar que Ele sabe o que está fazendo, mesmo quando a gente não entende. Ser corajoso para obedecer a Deus traz recompensas que a gente nem imagina.", tags: ["fé", "obediência"] },
          { ordem: 3, icone: "🛡️", titulo: "Heróis da Fé", conteudo: "Pense em Noé construindo um barco gigante ou em Moisés abrindo o mar. Eles acreditaram em Deus quando tudo parecia impossível. Você também pode ser um herói da fé hoje, confiando que Deus vai abrir os caminhos para você e te dar a vitória nas suas lutas.", tags: ["coragem", "exemplo"] },
          { ordem: 4, icone: "🌟", titulo: "Deus Resolve", conteudo: "Não importa o tamanho do seu desafio, Deus é maior. Pare de olhar para a dificuldade e comece a olhar para o tamanho do seu Deus. Ele te ama e quer te mostrar coisas maravilhosas. Acredite nas promessas dEle e veja como a sua vida vai se encher de milagres e alegria.", tags: ["esperança", "milagre"] }
        ],
        promessa: "Deus prometeu fazer coisas grandes e firmes na sua vida se você apenas confiar nEle.",
        meditacao: "Durma tranquilo sabendo que o Deus do impossível está cuidando do seu amanhã."
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
  console.log('🚀 Iniciando Carga Fiel de Junho (Bloco 3: 21-30)...');
  for (const day of batch) {
    await saveToObsidian(day);
    await uploadToSupabase(day);
  }
  console.log('🏁 Bloco 3 de Junho (21-30) concluído.');
}

run();
