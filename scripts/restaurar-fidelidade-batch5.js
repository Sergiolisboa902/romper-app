require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-27",
    manha: {
      versiculo: { texto: "Morava, pois, Mefibosete em Jerusalém, porquanto sempre comia à mesa do rei, e era coxo de ambos os pés", referencia: "2Sm 9:13" },
      topicos: [
        { ordem: 1, icone: "🍽️", titulo: "Lugar à Mesa", conteudo: "Mefibosete não era um grande embelezamento para uma mesa real, porém ele tinha um lugar permanente à mesa de Davi, pois o rei podia ver em seu rosto as características do amado Jônatas. Assim como Mefibosete, podemos clamar ao Rei da Glória: 'Quem é teu servo, para teres olhado para um cão morto tal como eu?'; contudo, ainda assim, o Senhor nos favorece com o mais familiar relacionamento com Ele, pois vê em nosso semblante a lembrança de Seu amado Jesus.", tags: ["adoção", "favor"] },
        { ordem: 2, icone: "🏰", titulo: "Pobreza e Provisão", conteudo: "Tal é o amor que o Pai nutre para com Seu unigênito que, por Sua causa, Ele eleva Seus humildes irmãos, da pobreza e do banimento, para a companhia da corte, lugar nobre, e provisão real. A deformidade deles não lhes poderá roubar seus privilégios. Claudicação não é empecilho para filiação; o aleijado é herdeiro tanto como se pudesse correr. Nosso direito não manca, embora a nossa força o possa. A mesa do rei é um nobre esconderijo.", tags: ["herança", "graça"] },
        { ordem: 3, icone: "🛡️", titulo: "Glória nas Fraquezas", conteudo: "No banquete do evangelho aprendemos glória nas fraquezas, porque o poder de Cristo descansa sobre nós. No entanto, a deficiência grave pode causar danos aos santos mais amados. Santos cuja fé é fraca e o conhecimento é escasso são grandes perdedores; eles estão expostos a muitos inimigos e não conseguem seguir o rei por onde quer que Ele vá. Essa deficiência frequentemente resulta em quedas e má assistência na infância espiritual.", tags: ["fraqueza", "proteção"] },
        { ordem: 4, icone: "🤲", titulo: "Socorro do Senhor", conteudo: "A má assistência espiritual faz com que os convertidos muitas vezes caiam em um desânimo de onde nunca se recuperaram, e pecados, em outros casos, traz ossos quebrados. Senhor, ajuda o coxo a saltar como um cervo, e satisfaça todo o Teu povo com o pão da Tua mesa! Que a fraqueza de nossa fé seja suprida pela abundância da Tua mesa real, e que nunca nos falte o alimento que nos sustenta na caminhada.", tags: ["fortalecimento", "consolo"] }
      ],
      promessa: "Claudicação não é empecilho para filiação; o aleijado é herdeiro tanto como o que corre.",
      meditacao: "O poder de Cristo descansa sobre nossas fraquezas, tornando a mesa do Rei um esconderijo seguro."
    },
    noite: {
      versiculo: { texto: "Quem é teu servo, para teres olhado para um cão morto tal como eu?", referencia: "2Sm 9:8" },
      topicos: [
        { ordem: 1, icone: "🙇", titulo: "Humildade e Graça", conteudo: "Se Mefibosete foi assim humilde diante da gentileza de Davi, como devemos ser na presença de nosso misericordioso Senhor? Quanto mais graça nós temos, menos pensamos em nós mesmos, pois a graça, tal como a luz, revela nossa impureza. Santos eminentes não sabiam ao que se comparar, porque o sentimento deles de indignidade era claro e aguçado. 'Eu sou um ramo seco e murcho, ossos secos', dizia Rutherford.", tags: ["humildade", "revelação"] },
        { ordem: 2, icone: "🐶", titulo: "Cão Morto", conteudo: "Os seres mais simples da natureza apresentam uma mente humilde para quererem se elevar, pois eles nunca estiveram no pecado. Um cão pode ser animal simples, mas com um pouco de bondade, logo é conquistado a amar seu mestre e lhe é fiel; contudo, nós nos esquecemos da bondade do Senhor. O termo 'cão morto' é a mais expressiva de todas as expressões de desprezo, porém não é a mais forte para expressar a auto-aversão dos crentes.", tags: ["arrependimento", "caráter"] },
        { ordem: 3, icone: "🧬", titulo: "Poeira Vivificada", conteudo: "Eles pesam a si mesmos na balança do santuário e encontram vaidade em sua natureza. Na melhor das hipóteses, nós somos senão barro, poeira vivificada, meros montes de terra que estão de pé; porém, vistos como pecadores, somos monstros, de fato. Que seja publicado no céu, como uma maravilha, que o Senhor Jesus colocou Seu coração de amor sobre nós tal como somos. Embora sejamos poeira e cinzas, iremos magnificar Sua graça.", tags: ["maravilha", "redenção"] },
        { ordem: 4, icone: "💒", titulo: "Noiva Escolhida", conteudo: "Porventura seu coração não encontraria descanso no céu? Acaso precisaria vir Ele a estas tendas de Kedar por uma esposa e escolher uma noiva sobre quem o sol olhou? Ó, céus e terra, rompam em louvor e deem toda a glória ao nosso doce Senhor Jesus, que nos amou quando estávamos mortos em nossos pecados e nos elevou à dignidade de Sua amada e escolhida noiva.", tags: ["amor", "adoração"] }
      ],
      promessa: "O Senhor Jesus colocou Seu coração de amor sobre nós tal como somos, poeira e cinzas.",
      meditacao: "Quanto mais graça temos, menos pensamos em nós mesmos, pois a luz da graça revela nossa impureza."
    }
  },
  {
    data: "2026-05-28",
    manha: {
      versiculo: { texto: "(…) e aos que justificou a estes também glorificou", referencia: "Rm 8:30" },
      topicos: [
        { ordem: 1, icone: "👑", titulo: "Coroa de Glória", conteudo: "Tu podes ser pobre, ou estar em sofrimento, ou ser desconhecido, mas, para teu encorajamento, analise o teu chamado. Tão certo como és hoje um filho de Deus, todas as tuas provações, em breve, terão fim, e serás rico para todos os intentos de bem-aventurança. Aguarde um pouco, e esta cabeça cansada usará a coroa de glória, e esta mão de trabalhos agarrará o ramo de palmeira da vitória.", tags: ["glória", "vitória"] },
        { ordem: 2, icone: "🔥", titulo: "Vínculo Inquebrável", conteudo: "Não lamente os teus problemas, mas antes, alegre-se, pois em breve estarás onde 'não haverá mais morte, nem pranto, nem clamor, nem dor'. Os carros de fogo estão em tua porta. Se Ele te chamou, nada pode separar-te do Seu amor. Aflição não pode romper o vínculo; o fogo da perseguição não pode queimar o elo; o martelo do inferno não pode quebrar a corrente.", tags: ["segurança", "amor"] },
        { ordem: 3, icone: "🕯️", titulo: "Voz do Chamado", conteudo: "Tu estás seguro; essa voz que te chamou no princípio irá chamar-te mais uma vez da terra ao céu, da escuridão da morte para os esplendores inexpríveis da imortalidade. Tenha certeza, o coração dAquele que te justificou bate com amor infinito por ti. Em breve, tu estarás com o Glorificado, onde é a tua porção; tu estás esperando aqui apenas para que sejas feito adequado para tua herança.", tags: ["imortalidade", "herança"] },
        { ordem: 4, icone: "👼", titulo: "Asas dos Anjos", conteudo: "Uma vez feito adequado, as asas dos anjos te suspenderão para longe, para o monte da paz, e alegria, e bem-aventurança, em um lugar longe de um mundo de sofrimento e pecado, com Deus eternamente encerrado, onde tu descansarás para todo o sempre. A canção eterna está quase nos teus lábios e os portões do céu já estão abertos diante de ti. Alegra-te na certeza da tua glorificação final.", tags: ["céu", "descanso"] }
      ],
      promessa: "Nada pode separar você do amor de Deus; se Ele te justificou, Ele também te glorificará.",
      meditacao: "Aguarde um pouco; a cabeça cansada usará a coroa de glória e a mão de trabalhos o ramo da vitória."
    },
    noite: {
      versiculo: { texto: "Disto me recordarei na minha mente; por isso esperarei", referencia: "Lm 3:21" },
      topicos: [
        { ordem: 1, icone: "🧠", titulo: "Escrava do Desânimo", conteudo: "A memória é frequentemente escrava do desânimo. Mentes em desespero recordam cada mau presságio do passado e o expandem sobre cada característica sombria no presente; assim, a memória apresenta à mente um copo de fel misturado com absinto. Não há, contudo, necessidade para isso. A sabedoria pode facilmente transformar a memória em um anjo de conforto e luz.", tags: ["mente", "sabedoria"] },
        { ordem: 2, icone: "⚔️", titulo: "Espada de Dois Gumes", conteudo: "Essa mesma lembrança pode ser treinada para ter, a sua direita, uma riqueza de sinais de esperança. Assim foi a experiência de Jeremias; no verso anterior, a memória trouxe humilhação: 'Minha alma se abate dentro de mim'; porém, agora, essa mesma memória restaurou-lhe a vida e o conforto. Como uma espada de dois gumes, sua memória matou primeiro o seu orgulho e, em seguida, o seu desespero.", tags: ["esperança", "firmeza"] },
        { ordem: 3, icone: "🕯️", titulo: "Lâmpada do Conforto", conteudo: "Se quisermos exercer nossas memórias de forma sábia, podemos, em nossas angústias mais sombrias, acender um fósforo que iluminará a lâmpada do conforto ao cavarmos as cinzas do passado. Encontraremos luz para o presente voltando-se para o livro da verdade e para o trono da graça. Que a misericórdia do Senhor seja o nosso lembrar e Suas obras de graça o nosso treinar.", tags: ["consolo", "misericórdia"] },
        { ordem: 4, icone: "🌸", titulo: "Botões de Alegria", conteudo: "Abramos o livro da lembrança, iluminado com memoriais de misericórdia, e logo estaremos felizes. Assim, a memória pode ser, como Coleridge chama, 'os primeiros botões de alegria', e quando o Consolador Divino dirigi-la ao Seu serviço, ela poderá ser o primeiro entre os confortos terrenos. Treine sua mente para recordar a fidelidade de Deus em vez dos medos passados.", tags: ["alegria", "gratidão"] }
      ],
      promessa: "A memória treinada pela sabedoria transforma as cinzas do passado em lâmpadas de conforto.",
      meditacao: "Use sua memória para matar o orgulho e o desespero, recordando as ricas misericórdias do Senhor."
    }
  },
  {
    data: "2026-05-29",
    manha: {
      versiculo: { texto: "Tu odeias a impiedade (…)", referencia: "Sl 45:7" },
      topicos: [
        { ordem: 1, icone: "⚡", titulo: "Ódio ao Pecado", conteudo: "Dificilmente poderá haver bondade em um homem se ele não estiver irado com o pecado. Quem ama a verdade deve odiar todo caminho de falsidade; quão nosso Senhor Jesus o odiava quando veio a tentação! Três vezes O atacou, porém sempre se defrontou com: 'Para trás de mim, Satanás'. Jesus demonstrou Seu ódio em lágrimas de piedade e em palavras severas contra os hipócritas.", tags: ["justiça", "caráter"] },
        { ordem: 2, icone: "🩸", titulo: "Morte da Maldade", conteudo: "Jesus sobremaneira odiava a maldade que sangrou até ferir-Lhe o coração; Ele morreu para que ela morresse; Ele foi enterrado para que ela fosse enterrada; e Ele ressuscitou para esmagá-la para sempre sob Seus pés. Cristo está no Evangelho, e este Evangelho se opõe à maldade em todas as suas formas. Impiedade veste a si mesma em justas vestes, mas os preceitos de Jesus a expulsam.", tags: ["redenção", "vitória"] },
        { ordem: 3, icone: "⚔️", titulo: "Guerra Interior", conteudo: "No coração onde Jesus reina, que guerra há entre Cristo e Belial! E quando nosso Redentor voltar para ser nosso Juiz, estas palavras trovejarão: 'Apartai-vos de mim, malditos', manifestando Seu repúdio à iniquidade. Tão caloroso como é o Seu amor para com os pecadores, tão caloroso é o Seu ódio ao pecado; tão perfeita como é a Sua justiça, tão completa será a destruição da maldade.", tags: ["combate", "santidade"] },
        { ordem: 4, icone: "🏺", titulo: "Óleo de Alegria", conteudo: "Ó glorioso campeão da justiça e destruidor do mal, 'por isso Deus, o teu Deus, te ungiu com óleo de alegria mais do que a teus companheiros' (Hb 1:9). Sejamos seguidores de Cristo no Seu ódio sagrado por tudo que é impio, buscando a pureza de coração e a retidão de vida que Ele exemplificou e que a Sua graça nos capacita a cultivar dia após dia.", tags: ["unção", "retidão"] }
      ],
      promessa: "Deus ungiu o Campeão da Justiça com óleo de alegria acima de todos os Seus companheiros.",
      meditacao: "Aquele que ama a verdade deve necessariamente odiar a falsidade; que o nosso ódio ao pecado seja proporcional ao nosso amor por Cristo."
    },
    noite: {
      versiculo: { texto: "(…) Maldito diante do Senhor seja o homem que se levantar e reedificar esta cidade de Jericó (…)", referencia: "Js 6:26" },
      topicos: [
        { ordem: 1, icone: "🧱", titulo: "Vencer o Erro", conteudo: "Uma vez que foi amaldiçoado aquele que reconstruir Jericó, muito mais será aquele que trabalha para restaurar sistemas de erro entre nós. Na época de nossos pais, gigantescas paredes caíram pelo poder da fé e pela rajada de suas trombetas com o evangelho; agora, existem alguns que gostariam de reconstruir esse sistema maldito. Ó Senhor, digna-Te de frustrar seus malignos esforços.", tags: ["fé", "zelo"] },
        { ordem: 2, icone: "🧹", titulo: "Limpeza em Casa", conteudo: "É para nós uma séria questão ser cuidadosamente purificado de todos os erros que tendem a promover o espírito de apostasia; quando fizermos uma limpeza em casa, devemos buscar nos opor a sua propagação no exterior. Este último pode ser feito, em segredo, por fervorosa oração, e, em público, pelo testemunho decidido e pela instrução dos jovens na verdade.", tags: ["pureza", "oração"] },
        { ordem: 3, icone: "📖", titulo: "Difundir a Bíblia", conteudo: "Devemos ajudar a fundo o espalhar da luz de um lado a outro da Terra. Estamos fazendo tudo o que podemos para Jesus e pelo evangelho? O que estamos fazendo para difundir a Bíblia, que é maldição e veneno ao erro? Estamos lançando no exterior bons escritos do evangelho? Lutero disse: 'O diabo odeia penas de ganso', pois escritores inspirados têm feito muitos danos ao seu reino.", tags: ["testemunho", "verdade"] },
        { ordem: 4, icone: "🚩", titulo: "Zelo pelo Senhor", conteudo: "Se os milhares que, esta noite, ao lerem esta curta palavra, fizerem todo o possível para impedir a reconstrução de sistemas malditos, a glória do Senhor prosperará entre os filhos dos homens. Não sejamos negligentes, pois a negligência joga a favor do erro. Leitor, o que você pode fazer? O que você irá fazer para que a verdade de Cristo continue a brilhar sem impedimentos?", tags: ["ação", "fidelidade"] }
      ],
      promessa: "O Senhor frustra os esforços dos que tentam reconstruir sistemas de erro contra o Seu evangelho.",
      meditacao: "Não sejamos negligentes na difusão da verdade, pois o diabo teme a luz da Bíblia e as 'penas de ganso' dos escritores cristãos."
    }
  },
  {
    data: "2026-05-30",
    manha: {
      versiculo: { texto: "Apanhai-nos as raposas, as raposinhas, que fazem mal às vinhas (…)", referencia: "Ct 2:15" },
      topicos: [
        { ordem: 1, icone: "🦊", titulo: "Pequenos Pecados", conteudo: "Um pequeno espinho pode causar muito sofrimento. Uma pequena nuvem pode esconder o sol. Raposinhas estragam as vinhas, e pequenos pecados fazem mal ao tenro coração. Esses pequenos pecados se encravam na alma e a tornam tão cheia daquilo que é odioso a Cristo que Ele não manterá qualquer relação confortável de amizade e comunhão conosco.", tags: ["vigilância", "santidade"] },
        { ordem: 2, icone: "🧱", titulo: "Barreira Oculta", conteudo: "Jesus não andará com Seu povo a menos que eles expulsem todos os pecados conhecidos. 'Si guardardes os meus mandamentos, permanecereis no meu amor'. Alguns cristãos raramente desfrutam da presença de seu Salvador. Como pode ser isso? O que tem afastado Cristo de ti? Ele esconde Seu rosto por detrás da parede dos teus pecados, construída de pequenos seixos.", tags: ["comunhão", "obediência"] },
        { ordem: 3, icone: "🌊", titulo: "Gotas e Grãos", conteudo: "O mar é feito de gotas; as rochas são feitas de grãos; e o mar que te separa de Cristo pode ser preenchido com as gotas de teus pequenos pecados, e a rocha que tem destruído tua embarcação pode ter sido feita pelo trabalho diário dos insetos do coral de teus pequenos pecados. Si queres viver com Cristo e ter comunhão com Ele, tome muito cuidado com os detalhes.", tags: ["perigo", "consciência"] },
        { ordem: 4, icone: "🏹", titulo: "Vá à Caça", conteudo: "As raposinhas fazem mal às vinhas porque as nossas vinhas estão em flor. Jesus convida-o a ir com Ele apanhá-las. Assim como Sansão, Ele certamente apanhará as raposas a um só tempo, e com facilidade. Vá com Ele à caça. Não permita que pequenos deslizes roubem a doçura da presença do Amado em sua vida diária. Expulse o mal e floresça para Deus.", tags: ["vitória", "ação"] }
      ],
      promessa: "Si você guardar os mandamentos de Jesus, permanecerá no amor dEle.",
      meditacao: "Pequenos pecados são como gotas que juntas formam um mar de separação entre a alma e Cristo; apanhe as raposinhas!"
    },
    noite: {
      versiculo: { texto: "(…) para que não sirvamos mais ao pecado", referencia: "Rm 6:6" },
      topicos: [
        { ordem: 1, icone: "🔥", titulo: "Brincar com Fogo", conteudo: "Cristão, o que tens que fazer com o pecado? Porventura não te custou o suficiente? Pobre criança queimada, brincas tu com fogo? Já estiveste entre as garras do leão e queres entrar pela segunda vez em seu covil? Porventura não recebeste o suficiente da antiga serpente? Não envenenou ela todas as tuas veias uma vez, e tu brincas sobre a toca da áspide novamente?", tags: ["vigilância", "alerta"] },
        { ordem: 2, icone: "⛓️", titulo: "Antiga Escravidão", conteudo: "Oh, não sejas tão louco! Será que o pecado alguma vez concedeu a ti real prazer? Si assim o for, volte para o teu antigo trabalho, e use novamente as cadeias. Contudo, uma vez que o pecado nunca te deu o que prometeu, mas te enganou com mentiras, não sejas enlaçado novamente; sejas livre, e deixe a lembrança da tua antiga escravidão te proibir de entrar na rede.", tags: ["liberdade", "memória"] },
        { ordem: 3, icone: "💰", titulo: "Preço Alto", conteudo: "O pecado é contrário aos desígnios de amor eterno, os quais estão voltados somente para tua pureza. Cristãos nunca pecam a bom preço; eles pagam muito alto pela iniquidade. Transgressão destrói a paz, obscurece a comunhão, impede a oração, traz trevas sobre a alma. Há ainda um argumento maior: cada vez que se 'serve ao pecado', de novo crucificam o Filho de Deus.", tags: ["paz", "consagração"] },
        { ordem: 4, icone: "🔙", titulo: "Volta para Jesus", conteudo: "Pode você suportar esse pensamento? Si você caiu em algum pecado especial hoje, pode ser que meu Mestre tenha lhe enviado essa admoestação para trazê-lo de volta antes que se desvie para longe. Volta para Jesus; Sua graça ainda é a mesma. Com choro e arrependimento, venhas tu ao escabelo de Seus pés e serás outra vez recebido em Seu coração e posto sobre a rocha.", tags: ["arrependimento", "graça"] }
      ],
      promessa: "A graça de Jesus permanece a mesma para o crente que volta com arrependimento sincero.",
      meditacao: "Os cristãos nunca pecam por um preço baixo; a transgressão custa a paz de espírito e a doçura da comunhão."
    }
  },
  {
    data: "2026-05-31",
    manha: {
      versiculo: { texto: "(…) também o rei passou o ribeiro de Cedrom (…)", referencia: "2Sm 15:23" },
      topicos: [
        { ordem: 1, icone: "🌊", titulo: "Cedrom Sombrio", conteudo: "Davi passou por esse sombrio ribeiro fugindo de seu filho traidor. O homem segundo o coração de Deus não foi isento de problemas. Ele era o Ungido e o Aflito. Por que esperar escapar dos problemas si os mais nobres esperaram com cinzas sobre suas cabeças? O Rei dos reis não foi favorecido com caminho mais real; Ele passou pelo imundo Cedrom, por onde a sujeira fluía.", tags: ["aflição", "exemplo"] },
        { ordem: 2, icone: "🤝", titulo: "Angústia Compartilhada", conteudo: "Deus teve um filho sem pecado, mas nem um único sem o castigo da vara. Jesus foi tentado em todos os aspectos tal como nós somos. Qual é a nossa Cedrom esta manhã? É um amigo infiel, um triste luto, uma reprovação? O Rei passou sobre todos eles. 'Em toda a angústia deles ele foi angustiado'. A ideia de estranheza em nossas provações deve ser banida para sempre.", tags: ["empatia", "cristo"] },
        { ordem: 3, icone: "🚩", titulo: "Companhia de Pranteadores", conteudo: "Aquele que é a Cabeça de todos os santos conhece, por experiência, a dor que pensamos ser tão peculiar. Todos os cidadãos de Sião devem ser livres na Companhia Honrosa de Pranteadores, em que o Príncipe Emanuel é Chefe e Capitão. No final, veremos que cada ribeiro de Cedrom foi um passo necessário em direção à cidade de paz, onde não haverá mais lamento.", tags: ["unidade", "consolo"] },
        { ordem: 4, icone: "🏁", titulo: "Triunfo Final", conteudo: "Davi voltou em triunfo para sua cidade, e o Davi do Senhor ressuscitou vitorioso da sepultura; vamos ter bom ânimo, porque nós também alcançaremos a vitória. Ainda nos alegraremos em tirar água das fontes da salvação, apesar de agora termos de passar pelos ribeiros nocivos do pecado e tristeza. Coragem, soldados da cruz, o próprio rei triunfou e assim será com você.", tags: ["vitória", "esperança"] }
      ],
      promessa: "O próprio Rei triunfou depois de passar pelo Cedrom, e assim será com você.",
      meditacao: "A ideia de estranheza em nossas provações deve ser banida; o Príncipe Emanuel conhece cada uma de nossas dores."
    },
    noite: {
      versiculo: { texto: "Ele é o que (…) sara todas as tuas enfermidades", referencia: "Sl 103:3" },
      topicos: [
        { ordem: 1, icone: "🩺", titulo: "Grande Médico", conteudo: "Humilhante é a afirmação: que todos nós sofremos debaixo da doença do pecado. Que conforto é saber que temos um grande Médico capaz e disposto a nos curar! Suas curas são muito rápidas, pois há vida em um olhar para Ele; Suas curas são profundas, pois Ele atinge o centro da doença; portanto, Suas curas são seguras e certas. Ele nunca falha, e a doença nunca volta.", tags: ["cura", "pecado"] },
        { ordem: 2, icone: "❤️", titulo: "Coração Novo", conteudo: "Não há qualquer recaída onde Cristo cura, nenhum medo que Seus pacientes possam ser meramente tratados por algum tempo, pois Jesus faz deles novos seres; um coração novo é o que Ele lhes dá, e neles coloca um espírito reto (Sl 51:10). Ele é muito habilidoso em todas as doenças e lida com cada uma delas com a autoridade de quem criou o homem do pó.", tags: ["regeneração", "poder"] },
        { ordem: 3, icone: "💉", titulo: "Remédio do Sangue", conteudo: "O Seu remédio é o Seu próprio sangue. Ele não oferece poções amargas que apenas mitigam os sintomas, mas derramou Sua vida para que pudéssemos ser restaurados. Cada ferida em Sua carne é um bálsamo para as nossas; cada gota de Suor de sangue é um tônico para a nossa fraqueza. Nenhuma doença de alma é resistente ao poder do sacrifício do Cordeiro de Deus.", tags: ["redenção", "sacrifício"] },
        { ordem: 4, icone: "🌅", titulo: "Saúde Eterna", conteudo: "Vá a Ele esta noite, crente cansado e doente. Não há necessidade de consulta agendada ou ouro para pagar o tratamento. Ele cura 'liberalmente e não censura'. Deixe que a alegria da saúde restaurada inunde o teu ser enquanto descansais nEle. Em breve, estaremos na terra onde 'nenhum habitante dirá: Estou doente', pois o grande Médico completará Sua obra em nós na glória.", tags: ["gratidão", "céu"] }
      ],
      promessa: "As curas de Jesus são rápidas, profundas, certas e gratuitas para todos os que O buscam.",
      meditacao: "Jesus faz de Seus pacientes novos seres, dando-lhes um coração novo e um espírito reto."
    }
  }
];

async function run() {
  console.log('🚀 Restaurando Fidelidade (Bloco 5: 27-31 de Maio)...');
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
  console.log('🏁 Bloco 5 concluído. Restauração Total Finalizada!');
}
run();
