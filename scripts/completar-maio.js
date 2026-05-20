require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-13",
    manha: {
      versiculo: { texto: "(…) O choro pode durar uma noite, mas a alegria vem pela manhã", referencia: "Sl 30:5" },
      topicos: [
        { ordem: 1, icone: "🌙", titulo: "Noite de Provação", conteudo: "Cristão! Se estás em uma noite de provação, pense no dia de amanhã. Tua cabeça pode estar coroada com problemas agora, mas usarás uma coroa estrelada em breve.", tags: ["paciência", "esperança"] },
        { ordem: 2, icone: "🌾", titulo: "Aguarde a Safra", conteudo: "O lavrador espera até colher sua safra. Seja paciente! Em mais alguns alvoreceres, você será aportado na justa enseada de Canaã.", tags: ["paciência", "recompensa"] },
        { ordem: 3, icone: "✨", titulo: "Prossiga com Ousadia", conteudo: "Nossas provações parecerão leves e momentâneas aflições quando olharmos para trás do céu. Se a noite nunca esteve tão escura, a manhã vem.", tags: ["coragem", "perspectiva"] },
        { ordem: 4, icone: "🎶", titulo: "Harpa Celestial", conteudo: "Tua mão pode estar repleta com cuidados agora, mas tocarás as cordas da harpa celestial em pouco tempo. Alegria, crente, por ter tão segura esperança.", tags: ["louvor", "céu"] }
      ],
      promessa: "O choro pode durar uma noite, mas a alegria vem pela manhã.",
      meditacao: "Viver na expectativa que antecede o céu é o segredo da força cristã."
    },
    noite: {
      versiculo: { texto: "O Senhor é a minha porção (…)", referencia: "Sl 119:57" },
      topicos: [
        { ordem: 1, icone: "💰", titulo: "Porção Superior", conteudo: "Alguns têm sua porção no campo ou na cidade, mas o que é ouro em comparação ao teu Deus? Tu tens a Deus, e nEle tens mais do que tudo.", tags: ["provisão", "satisfação"] },
        { ordem: 2, icone: "🎺", titulo: "Fama e Aplausos", conteudo: "Fama e aplausos não podem ajudar uma consciência perturbada nem preparar-te para o Jordão. Mas com Deus, cada desejo é atendido na vida ou na morte.", tags: ["vaidade", "eternidade"] },
        { ordem: 3, icone: "🏠", titulo: "Rico de Fato", conteudo: "Com Deus por tua porção, tu és rico de fato, pois Ele irá suprir tua necessidade, confortar o teu coração e trazer-te ao final para casa.", tags: ["riqueza", "consolo"] },
        { ordem: 4, icone: "🤝", titulo: "Ter de Tudo", conteudo: "Esaú disse 'tenho bastante', mas Jacó disse 'tenho de tudo'. Esta é uma observação muito elevada para mentes carnais.", tags: ["gratidão", "plenitude"] }
      ],
      promessa: "Ele irá suprir tua necessidade e estar contigo no vale sombrio.",
      meditacao: "Não inveje a porção do mundo; a tua porção é o próprio Deus."
    }
  },
  {
    data: "2026-05-14",
    manha: {
      versiculo: { texto: "(…) co-herdeiros de Cristo (…)", referencia: "Rm 8:17" },
      topicos: [
        { ordem: 1, icone: "🏰", titulo: "Direito Aquisitivo", conteudo: "Como herdeiro de tudo, Cristo nos admitiu reivindicar toda a criação como nossa em virtude da co-herança ratificada com Seu povo.", tags: ["herança", "identidade"] },
        { ordem: 2, icone: "👑", titulo: "Sacerdócio Real", conteudo: "Ele descoroou a Si mesmo para que pudéssemos ter uma coroação de glória. O trono de Cristo, o cetro e o tesouro são todos seus.", tags: ["realeza", "honra"] },
        { ordem: 3, icone: "🤝", titulo: "Compartilhar a Glória", conteudo: "Cristo considera Sua perfeita felicidade compartilhar com Seu povo. Ele deu-nos a glória que o Pai Lhe deu.", tags: ["união", "generosidade"] },
        { ordem: 4, icone: "😊", titulo: "Gozos Completos", conteudo: "Os sorrisos de Seu Pai são mais doces para Ele pois Seu povo os compartilha. Ele nos chama para entrar em Sua alegria.", tags: ["felicidade", "comunhão"] }
      ],
      promessa: "Eu dei-lhes a glória que a mim me deste.",
      meditacao: "Tudo o que Cristo tem, Ele compartilha com Sua amada Igreja."
    },
    noite: {
      versiculo: { texto: "Entre os seus braços recolherá os cordeirinhos (…)", referencia: "Is 40:11" },
      topicos: [
        { ordem: 1, icone: "🐑", titulo: "Coração Tenro", conteudo: "O Bom Pastor recolhe os cordeirinhos porque qualquer fragilidade derrete Seu coração. Ele os comprou com Seu sangue e é responsável por cada um.", tags: ["cuidado", "compaixão"] },
        { ordem: 2, icone: "🛡️", titulo: "Proteção das Provas", conteudo: "Às vezes Ele os recolhe por não permitir que suportem muitas provações, lidando de forma benevolente com sua pequena força.", tags: ["preservação", "bondade"] },
        { ordem: 3, icone: "🍼", titulo: "Fé Simples", conteudo: "Ele os recolhe dando-lhes uma fé simples que segura a promessa tal como está, conferindo-lhes um grau incomum de confiança.", tags: ["simplicidade", "fé"] },
        { ordem: 4, icone: "🤗", titulo: "Afeição sem Limites", conteudo: "Estar em Seus braços é ter afeição sem limites e perfeita segurança. Quem poderia prejudicá-los ali? Teriam de ferir primeiro o Pastor.", tags: ["amor", "descanso"] }
      ],
      promessa: "Nos Seus braços, quem poderia prejudicá-los?",
      meditacao: "Não somos suficientemente sensíveis à infinita ternura de Jesus."
    }
  },
  {
    data: "2026-05-15",
    manha: {
      versiculo: { texto: "(…) é justificado todo aquele que crê", referencia: "At 13:39" },
      topicos: [
        { ordem: 1, icone: "⚡", titulo: "Imediata Justificação", conteudo: "O crente recebe uma imediata justificação no momento em que se aproxima de Cristo. Não é um fruto produzido pouco a pouco.", tags: ["justiça", "fé"] },
        { ordem: 2, icone: "🏛️", titulo: "Absolvidos Hoje", conteudo: "Estamos hoje absolvidos no tribunal de Deus. Não há pecado no Livro de Deus contra um sequer de Seu povo neste exato momento.", tags: ["perdão", "tribunal"] },
        { ordem: 3, icone: "🧼", titulo: "Sem Mancha", conteudo: "Não há mancha nem nódoa que remanesça sobre qualquer crente aos olhos do Juiz de toda a Terra. Estamos aceitos no Amado.", tags: ["pureza", "aceitação"] },
        { ordem: 4, icone: "🏃", titulo: "Responsabilidade Presente", conteudo: "Que esse presente privilégio nos desperte. Enquanto a vida continua, vamos gastar e ser gastos para o nosso doce Senhor Jesus.", tags: ["serviço", "gratidão"] }
      ],
      promessa: "Agora nenhuma condenação há para os que estão em Cristo Jesus.",
      meditacao: "Estamos tão justificados como os que andam de linho branco no céu."
    },
    noite: {
      versiculo: { texto: "(…) justos aperfeiçoados", referencia: "Hb 12:23" },
      topicos: [
        { ordem: 1, icone: "⚖️", titulo: "Dois Tipos de Perfeição", conteudo: "Precisamos da perfeição da justificação em Jesus e da perfeição da santificação operada pelo Espírito Santo.", tags: ["doutrina", "santidade"] },
        { ordem: 2, icone: "🧼", titulo: "Fim da Obra", conteudo: "Deus terminará a obra que começou; Ele apresentará minha alma sem mancha ou defeito. O pecado e a morte serão totalmente removidos.", tags: ["esperança", "promessa"] },
        { ordem: 3, icone: "🔥", titulo: "Batismo de Fogo", conteudo: "Meu espírito terá seu último batismo no fogo do Espírito Santo ao atravessar o Jordão, tornando-me apto para o Pai no céu.", tags: ["transformação", "céu"] },
        { ordem: 4, icone: "🌱", titulo: "Obra Presente", conteudo: "Para uma boa esperança é preciso a purificação mesmo agora. A obra da graça deve habitar em nós para ser aperfeiçoada depois.", tags: ["preparação", "vigilância"] }
      ],
      promessa: "Deus terminará a obra que já começou.",
      meditacao: "Nenhum anjo será mais puro do que eu serei através do sangue e do Espírito."
    }
  },
  {
    data: "2026-05-16",
    manha: {
      versiculo: { texto: "(…) Deus, que abundantemente nos dá todas as coisas para delas gozarmos", referencia: "1Tm 6:17" },
      topicos: [
        { ordem: 1, icone: "⛲", titulo: "Fluxo Incessante", conteudo: "Nosso Senhor está sempre concedendo. Ele é a rocha no deserto enviando correntes de vida e o manancial de amor transbordando.", tags: ["generosidade", "graça"] },
        { ordem: 2, icone: "🗓️", titulo: "Sete Dias de Festa", conteudo: "Há sete dias de festa em Suas semanas. Quem já se levantou de Sua mesa insatisfeito? Suas misericórdias se renovam a cada manhã.", tags: ["provisão", "satisfação"] },
        { ordem: 3, icone: "⏳", titulo: "Asas das Horas", conteudo: "As asas de nossas horas estão cobertas com a prata de Sua bondade. O rio do tempo carrega as areias douradas de Seu favor.", tags: ["tempo", "misericórdia"] },
        { ordem: 4, icone: "🎻", titulo: "Louvor Incessante", conteudo: "Como minha alma exaltará Aquele que diariamente nos enche com benefícios? Que o meu louvor possa ser tão incessante quanto Sua generosidade.", tags: ["louvor", "gratidão"] }
      ],
      promessa: "Ele abundantemente nos dá todas as coisas para delas gozarmos.",
      meditacao: "Despertai, saltério e harpa; eu mesmo despertarei ao romper da alva."
    },
    noite: {
      versiculo: { texto: "(…) este vale se encherá de tanta água (…)", referencia: "2Rs 3:17" },
      topicos: [
        { ordem: 1, icone: "🕳️", titulo: "Fazei Covas", conteudo: "A Igreja deve, por suas ações e orações, estar pronta para ser abençoada; ela deve fazer poços, e o Senhor irá preenchê-los.", tags: ["preparação", "fé"] },
        { ordem: 2, icone: "🤫", titulo: "Bênção Silenciosa", conteudo: "De uma forma silenciosa e misteriosa, os poços foram cheios sem vento ou chuva. O Senhor tem Seus próprios meios soberanos de agir.", tags: ["mistério", "soberania"] },
        { ordem: 3, icone: "🌊", titulo: "Abundância Extraordinária", conteudo: "A provisão foi suficiente à necessidade de todos. No evangelho, todas as necessidades da igreja são satisfeitas pelo poder divino.", tags: ["provisão", "plenitude"] },
        { ordem: 4, icone: "⛏️", titulo: "O que estou Fazendo?", conteudo: "Que poços estou eu cavando para Jesus? Ó Senhor, fazei-me pronto para receber a bênção que Tu estás disposto a conceder.", tags: ["serviço", "expectativa"] }
      ],
      promessa: "Este vale se encherá de tanta água que bebereis vós e os vossos animais.",
      meditacao: "É nossa gratidão receber dEle, e não ordenar a Ele."
    }
  },
  {
    data: "2026-05-17",
    manha: {
      versiculo: { texto: "(…) também deve andar como ele andou.", referencia: "1Jo 2:6" },
      topicos: [
        { ordem: 1, icone: "🏃", titulo: "Pelo Próprio Bem", conteudo: "Os cristãos devem imitar Cristo se desejam estar com a alma saudável, escapar da doença do pecado e apreciar o vigor da graça.", tags: ["crescimento", "santidade"] },
        { ordem: 2, icone: "🍷", titulo: "Pela Felicidade", conteudo: "Se desejam sagrada e alegre comunhão com Jesus e ser elevados das preocupações deste mundo, andem como Ele andou.", tags: ["felicidade", "comunhão"] },
        { ordem: 3, icone: "🛡️", titulo: "Pela Causa de Cristo", conteudo: "Inconsistências ferem o evangelho mais que críticos. Se amas o Salvador, seja uma carta de Cristo conhecida por todos.", tags: ["testemunho", "exemplo"] },
        { ordem: 4, icone: "👣", titulo: "Seguir os Passos", conteudo: "Não há nada que mais ajude a caminhar em direção ao céu como levar a imagem de Jesus no coração governando todos os atos.", tags: ["direção", "caráter"] }
      ],
      promessa: "O poder do Espírito Santo capacita a caminhar nos Seus passos.",
      meditacao: "O que faria Jesus? Esta deve ser a bússola de cada ação."
    },
    noite: {
      versiculo: { texto: "(…) Tu és o meu servo, a ti escolhi (…)", referencia: "Is 41:9" },
      topicos: [
        { ordem: 1, icone: "🧤", titulo: "Uniforme de Servo", conteudo: "Se recebemos a graça, somos servos de Deus, vestindo Seu uniforme e obedecendo aos Seus mandamentos. Fomos libertos do pecado.", tags: ["serviço", "obediência"] },
        { ordem: 2, icone: "♾️", titulo: "Escolha Eterna", conteudo: "Nós não O escolhemos primeiro, mas Ele nos escolheu muito antes do tempo ou espaço serem criados por causa de Sua graça soberana.", tags: ["eleição", "graça"] },
        { ordem: 3, icone: "💍", titulo: "Amor Constante", conteudo: "Nosso Salvador não tem um amor inconstante. Ele Se casou com Sua igreja na eternidade e Jeová odeia o repúdio.", tags: ["fidelidade", "aliança"] },
        { ordem: 4, icone: "⚓", titulo: "Elo de Gratidão", conteudo: "A escolha eterna é o elo que une nossa gratidão e Sua fidelidade. Ele sabia quão obstinados seríamos e mesmo assim nos escolheu.", tags: ["segurança", "gratidão"] }
      ],
      promessa: "Porquanto com amor eterno te amei.",
      meditacao: "Deveras sou Teu servo; soltaste as minhas ataduras."
    }
  },
  {
    data: "2026-05-23",
    manha: {
      versiculo: { texto: "O Senhor aperfeiçoará o que me toca (…)", referencia: "Sl 138:8" },
      topicos: [
        { ordem: 1, icone: "⚓", titulo: "Confiança Divina", conteudo: "Não confie em sua própria força ou resolução. Toda confiança que não esteja fundada na Rocha eterna cairá sobre nós em ruínas.", tags: ["confiança", "firmeza"] },
        { ordem: 2, icone: "🏗️", titulo: "Obra do Senhor", conteudo: "É o Senhor que começou a boa obra e é Ele quem irá continuá-la. Se houver alguma costura nossa na veste da justiça, estaremos perdidos.", tags: ["soberania", "graça"] },
        { ordem: 3, icone: "🛡️", titulo: "Contra a Incredulidade", conteudo: "A incredulidade diz que você nunca vencerá o pecado ou as tentações. Mas Deus aperfeiçoará o que começou e nos levará ao porto.", tags: ["vitória", "perseverança"] },
        { ordem: 4, icone: "🏗️", titulo: "Tudo dEle", conteudo: "Ele fez tudo, deve fazer tudo e fará tudo. Nossa confiança está inteiramente no que o Senhor fará por nós.", tags: ["dependência", "glória"] }
      ],
      promessa: "O Senhor aperfeiçoará o que começou em nós.",
      meditacao: "Nunca estaremos muito confiantes enquanto confiarmos apenas nEle."
    },
    noite: {
      versiculo: { texto: "Não me compraste por dinheiro cana aromática (…)", referencia: "Is 43:24" },
      topicos: [
        { ordem: 1, icone: "🏺", titulo: "Frieza de Coração", conteudo: "Israel tornou-se mesquinho em suas ofertas, evidenciando a frieza do coração. Leitor, você dá em justa proporção ao que recebe?", tags: ["generosidade", "caráter"] },
        { ordem: 2, icone: "🩸", titulo: "Preço de Sangue", conteudo: "Jesus deu Seu sangue por nós. O que deveríamos dar a Ele? Somos dEle e tudo o que temos, pois Ele nos comprou para Si mesmo.", tags: ["consagração", "sacrifício"] },
        { ordem: 3, icone: "🌸", titulo: "Sinais de Afeição", conteudo: "Tu recebes nossos pobres presentes como se fossem preciosos, tal como o ramo de flores silvestres que a criança traz para a mãe.", tags: ["amor", "aceitação"] },
        { ordem: 4, icone: "🌾", titulo: "Primeiros Frutos", conteudo: "Nunca seremos mesquinhos para Ti novamente. Te daremos os primeiros frutos do nosso crescimento e diremos: 'do que é Teu, To damos'.", tags: ["dízimo", "devoção"] }
      ],
      promessa: "Tu recebes com simpatia o menor sinal sincero de afeição.",
      meditacao: "Nada é tão caro quanto o tributo do Teu incomparável amor."
    }
  },
  {
    data: "2026-05-24",
    manha: {
      versiculo: { texto: "Bendito seja Deus, que não rejeitou a minha oração (…)", referencia: "Sl 66:20" },
      topicos: [
        { ordem: 1, icone: "❄️", titulo: "Orações Frias", conteudo: "Se formos honestos, ficaremos maravilhados como Deus respondeu nossas petições fracas e poucas, distantes daquela fé perseverante.", tags: ["oração", "misericórdia"] },
        { ordem: 2, icone: "☁️", titulo: "Luz da Shekinah", conteudo: "Quando negligenciaste o propiciatório, Deus não o abandonou. A nuvem luminosa sempre foi visível entre as asas dos querubins.", tags: ["presença", "fidelidade"] },
        { ordem: 3, icone: "⚡", titulo: "Espasmos de Súplica", conteudo: "É maravilhoso que o Senhor considere esses espasmos intermitentes de importunação que vêm e vão conforme nossas necessidades.", tags: ["dependência", "graça"] },
        { ordem: 4, icone: "🕊️", titulo: "Oração no Espírito", conteudo: "Deixe Sua bondade tocar nossos corações para que possamos ser achados orando em todo o tempo com toda oração no Espírito.", tags: ["comunhão", "espírito"] }
      ],
      promessa: "Deus não rejeitou a minha oração nem apartou de mim a sua misericórdia.",
      meditacao: "Deus ouve mesmo quando oramos mal; quão grande é Sua paciência!"
    },
    noite: {
      versiculo: { texto: "Somente deveis portar-vos dignamente conforme o evangelho (…)", referencia: "Fp 1:27" },
      topicos: [
        { ordem: 1, icone: "🏙️", titulo: "Cidadania Celestial", conteudo: "Nossas ações como cidadãos da Nova Jerusalém devem ser dignas. O evangelho é simples, então sejamos simples em nossos hábitos.", tags: ["conduta", "identidade"] },
        { ordem: 2, icone: "🛡️", titulo: "Eminentemente Verdadeiro", conteudo: "O evangelho é ouro sem escória e destemido. Temos de ser igualmente fiéis e firmes, proclamando a verdade quer gostem ou não.", tags: ["verdade", "coragem"] },
        { ordem: 3, icone: "🍯", titulo: "Doçura de Atos", conteudo: "O evangelho é gentil e amoroso. Vamos procurar ganhar os outros pela doçura de nossas palavras, com união e tenra compaixão.", tags: ["gentileza", "amor"] },
        { ordem: 4, icone: "🧼", titulo: "Conformidade com Cristo", conteudo: "O evangelho é santo. Devemos evitar tudo o que dificulte nossa perfeita conformidade com Cristo e esforçar-nos dia a dia.", tags: ["santidade", "esforço"] }
      ],
      promessa: "Portai-vos de modo que glorifique o Senhor.",
      meditacao: "Que sua vida seja uma carta de Cristo, lida por todos os homens."
    }
  },
  {
    data: "2026-05-25",
    manha: {
      versiculo: { texto: "Não me desampares, Senhor (…)", referencia: "Sl 38:21" },
      topicos: [
        { ordem: 1, icone: "👶", titulo: "Ajuda dos Pais", conteudo: "A criança necessita sempre da ajuda dos pais enquanto aprende a andar. O navio sem piloto desvia-se do curso. Não podemos nada sem ajuda.", tags: ["dependência", "proteção"] },
        { ordem: 2, icone: "☀️", titulo: "Na Luz e nas Trevas", conteudo: "Precisamos desta oração em todas as ocasiões. Não me desampares em minhas alegrias nem em minhas tristezas.", tags: ["constância", "oração"] },
        { ordem: 3, icone: "🛡️", titulo: "Refúgio nas Asas", conteudo: "A galinha não abandona sua ninhada. Encubra-me com as Tuas penas e permita-me encontrar refúgio debaixo de Tuas asas.", tags: ["segurança", "abrigo"] },
        { ordem: 4, icone: "⚓", titulo: "Sustenta-me", conteudo: "Não me desampares no dia da minha fé mais forte para que não se degenere em presunção. Sem Ti sou fraco, contigo sou forte.", tags: ["firmeza", "humildade"] }
      ],
      promessa: "O Senhor é o meu refúgio e a minha fortaleza.",
      meditacao: "Sustenta-me, Senhor, e serei salvo em cada passo da jornada."
    },
    noite: {
      versiculo: { texto: "tornaram para Jerusalém (…) lhes contaram o que lhes acontecera (…)", referencia: "Lc 24:33,35" },
      topicos: [
        { ordem: 1, icone: "🕯️", titulo: "Lâmpada para os Pés", conteudo: "O amor era uma lâmpada para seus pés. Eles se esqueceram da escuridão e viajaram de volta para contar a alegre notícia.", tags: ["amor", "testemunho"] },
        { ordem: 2, icone: "🗣️", titulo: "Propriedade Comum", conteudo: "Os primeiros cristãos eram entusiasmados para proclamar o que sabiam. Eles fizeram das suas experiências uma propriedade comum.", tags: ["comunhão", "evangelismo"] },
        { ordem: 3, icone: "🧩", titulo: "Testemunho Completo", conteudo: "O que João viu precisava ser completado por Pedro e Maria. Temos dons peculiares para o aperfeiçoamento de todo o corpo de Cristo.", tags: ["unidade", "igreja"] },
        { ordem: 4, icone: "🚩", titulo: "Diga as Grandes Coisas", conteudo: "Não oculte a preciosa verdade. Levante-se e diga que grandes coisas Deus tem mostrado à sua alma. Não deixe a labuta pesar.", tags: ["coragem", "ação"] }
      ],
      promessa: "Onde dois ou três estiverem reunidos, Eu estarei no meio deles.",
      meditacao: "Dê seu testemunho sobre Jesus; sua história é parte do plano de Deus."
    }
  },
  {
    data: "2026-05-26",
    manha: {
      versiculo: { texto: "Lança o teu cuidado sobre o Senhor, e ele te susterá (…)", referencia: "Sl 55:22" },
      topicos: [
        { ordem: 1, icone: "⚖️", titulo: "Natureza do Pecado", conteudo: "Cuidado em excesso tem a natureza do pecado. A essência dos cuidados é a suposição de que somos mais sábios que Deus.", tags: ["preocupação", "orgulho"] },
        { ordem: 2, icone: "💧", titulo: "Cisterna Rota", conteudo: "Aquele que leva sua própria carga é tentado a usar meios errados. Vai-se à cisterna rota em vez de ao manancial de águas vivas.", tags: ["dependência", "escolha"] },
        { ordem: 3, icone: "❄️", titulo: "Amor que Esfria", conteudo: "A ansiedade nos faz duvidar da benignidade de Deus e faz com que nosso amor por Ele esfrie, entristecendo o Espírito.", tags: ["fé", "espírito"] },
        { ordem: 4, icone: "⚓", titulo: "Fé Simples", conteudo: "Através da fé simples, lance cada fardo sobre Ele e não fique inquieto por coisa alguma. Ele nos manterá perto dEle.", tags: ["confiança", "paz"] }
      ],
      promessa: "Tu conservarás em paz aquele cuja mente está firme em Ti.",
      meditacao: "Não tente fazer por Deus aquilo que Ele prometeu fazer por você."
    },
    noite: {
      versiculo: { texto: "(…) permanecer na fé (…)", referencia: "At 14:22" },
      topicos: [
        { ordem: 1, icone: "🚩", titulo: "Emblema dos Santos", conteudo: "Perseverança é o emblema dos santos. Conquistar fez-me o que sou, e conquistar me sustenta. Seu lema deve ser: Excelso.", tags: ["perseverança", "vitória"] },
        { ordem: 2, icone: "🎡", titulo: "Feira das Vaidades", conteudo: "O mundo busca fazer você cessar sua peregrinação e se assentar na 'Feira das Vaidades'. A carne procura iludi-lo e impedi-lo.", tags: ["mundo", "vigilância"] },
        { ordem: 3, icone: "🏹", titulo: "Alvo de Satanás", conteudo: "Satanás fará muitos ataques contra sua perseverança; ela será o alvo de todas as suas flechas. Ele sussurrará para você desistir.", tags: ["combate", "firmeza"] },
        { ordem: 4, icone: "🛡️", titulo: "Ponha o Escudo", conteudo: "Cristão, ponha seu escudo perto de sua armadura e clame a Deus para que possa perseverar até o fim. Fique firme nos credos.", tags: ["proteção", "doutrina"] }
      ],
      promessa: "Aquele que perseverar até o fim será salvo.",
      meditacao: "A conquista do ontem não é suficiente para a batalha de amanhã; persevere."
    }
  },
  {
    data: "2026-05-27",
    manha: {
      versiculo: { texto: "Mefibosete (…) sempre comia à mesa do rei, e era coxo de ambos os pés", referencia: "2Sm 9:13" },
      topicos: [
        { ordem: 1, icone: "🍽️", titulo: "Mesa Real", conteudo: "Davi via em Mefibosete as características do amado Jônatas. O Senhor nos favorece porque vê em nós a lembrança de Jesus.", tags: ["favor", "adoção"] },
        { ordem: 2, icone: "🐶", titulo: "Cão Morto", conteudo: "Podemos clamar: 'Quem é Teu servo para teres olhado para um cão morto?'. A deformidade não nos rouba os privilégios reais.", tags: ["humildade", "honra"] },
        { ordem: 3, icone: "🏰", titulo: "Glória nas Fraquezas", conteudo: "O aleijado é herdeiro tanto como o que corre. A mesa do rei é um nobre esconderijo para pernas defeituosas; Seu poder descansa sobre nós.", tags: ["graça", "poder"] },
        { ordem: 4, icone: "🦴", titulo: "Perigo das Quedas", conteudo: "Santos cuja fé é fraca são grandes perdedores; estão expostos a inimigos. Senhor, ajuda o coxo a saltar como um cervo.", tags: ["vigilância", "fortalecimento"] }
      ],
      promessa: "Claudicação não é empecilho para filiação.",
      meditacao: "Satisfaça todo o Teu povo com o pão da Tua mesa real."
    },
    noite: {
      versiculo: { texto: "Quem é teu servo, para teres olhado para um cão morto tal como eu?", referencia: "2Sm 9:8" },
      topicos: [
        { ordem: 1, icone: "🙇", titulo: "Graça e Luz", conteudo: "Quanto mais graça temos, menos pensamos em nós mesmos, pois a graça revela nossa impureza. Santos eminentes sentiam-se indignos.", tags: ["humildade", "revelação"] },
        { ordem: 2, icone: "🧬", titulo: "Poeira Vivificada", conteudo: "Na melhor das hipóteses, somos senão barro e poeira. Vistos como pecadores, somos monstros de fato. Que a graça seja uma maravilha.", tags: ["natureza", "pecado"] },
        { ordem: 3, icone: "💒", titulo: "Esposa de Cristo", conteudo: "Porventura Jesus não encontraria descanso no céu? Acaso precisaria vir por uma esposa sobre quem o sol olhou nestas tendas?", tags: ["amor", "maravilha"] },
        { ordem: 4, icone: "🎺", titulo: "Rompam em Louvor", conteudo: "Céus e terra, deem toda a glória ao nosso doce Senhor Jesus. Embora sejamos cinzas, magnificaremos a grandeza da Sua graça.", tags: ["louvor", "glória"] }
      ],
      promessa: "O Senhor Jesus colocou Seu coração de amor sobre nós tal como somos.",
      meditacao: "A auto-aversão do crente é o prelúdio para a exaltação da graça divina."
    }
  },
  {
    data: "2026-05-28",
    manha: {
      versiculo: { texto: "(…) e aos que justificou a estes também glorificou", referencia: "Rm 8:30" },
      topicos: [
        { ordem: 1, icone: "👑", titulo: "Coroa de Glória", conteudo: "Tuas provações em breve terão fim. Esta cabeça cansada usará a coroa de glória e esta mão agarrará a palmeira da vitória.", tags: ["esperança", "glória"] },
        { ordem: 2, icone: "🔥", titulo: "Vínculo Inquebrável", conteudo: "Se Ele te chamou, nada pode separar-te de Seu amor. O fogo da perseguição não pode queimar o elo; o inferno não quebra a corrente.", tags: ["segurança", "amor"] },
        { ordem: 3, icone: "👼", titulo: "Asas dos Anjos", conteudo: "Tu estás esperando aqui apenas para ser feito adequado para a herança. Uma vez feito, as asas te suspenderão para o monte da paz.", tags: ["transição", "céu"] },
        { ordem: 4, icone: "🎵", titulo: "Canção Eterna", conteudo: "Os carros de fogo estão em tua porta. A canção eterna está quase nos teus lábios. Os portões do céu estão abertos diante de ti.", tags: ["alegria", "eternidade"] }
      ],
      promessa: "Nada pode separar-te do Seu amor.",
      meditacao: "O coração dAquele que te justificou bate com amor infinito por ti."
    },
    noite: {
      versiculo: { texto: "Disto me recordarei na minha mente; por isso esperarei", referencia: "Lm 3:21" },
      topicos: [
        { ordem: 1, icone: "🧠", titulo: "Escrava do Desânimo", conteudo: "A memória é frequentemente escrava do desânimo, apresentando um copo de fel. Mas a sabedoria pode transformá-la em anjo de conforto.", tags: ["mente", "sabedoria"] },
        { ordem: 2, icone: "⚔️", titulo: "Espada de Dois Gumes", conteudo: "Jeremias usou a memória para matar seu orgulho e seu desespero. Ela trouxe humilhação e, em seguida, restaurou a vida e o conforto.", tags: ["luta", "esperança"] },
        { ordem: 3, icone: "🕯️", titulo: "Lâmpada do Conforto", conteudo: "Em nossas angústias, podemos acender um fósforo que iluminará a lâmpada do conforto ao cavarmos as cinzas do passado.", tags: ["consolo", "passado"] },
        { ordem: 4, icone: "🌸", titulo: "Botões de Alegria", conteudo: "Abramos o livro da lembrança iluminado com memoriais de misericórdia. A memória pode ser o primeiro entre os confortos terrenos.", tags: ["gratidão", "paz"] }
      ],
      promessa: "As misericórdias do Senhor são a causa de não sermos consumidos.",
      meditacao: "Treine sua memória para ser um arquivo de esperança e não de lamentos."
    }
  },
  {
    data: "2026-05-29",
    manha: {
      versiculo: { texto: "Tu odeias a impiedade (…)", referencia: "Sl 45:7" },
      topicos: [
        { ordem: 1, icone: "⚡", titulo: "Irai-vos e não Pequeis", conteudo: "Dificilmente haverá bondade em um homem se ele não estiver irado com o pecado. Quem ama a verdade deve odiar a falsidade.", tags: ["justiça", "caráter"] },
        { ordem: 2, icone: "⚔️", titulo: "Guerra Interior", conteudo: "No coração onde Jesus reina, que guerra há entre Cristo e Belial! Jesus expulsou a impiedade do templo e não a tolerará na Igreja.", tags: ["santidade", "combate"] },
        { ordem: 3, icone: "🩸", titulo: "Morte da Maldade", conteudo: "Ele morreu para que a maldade morresse; foi enterrado para que ela fosse enterrada e ressuscitou para esmagá-la sob Seus pés.", tags: ["redenção", "vitória"] },
        { ordem: 4, icone: "⚖️", titulo: "Destruição Completa", conteudo: "Tão perfeito como é Sua justiça, tão completa será a destruição de todas as formas de maldade. Ele é o campeão da justiça.", tags: ["julgamento", "gloria"] }
      ],
      promessa: "Deus te ungiu com óleo de alegria mais do que a teus companheiros.",
      meditacao: "O ódio ao pecado é a prova do amor pela santidade."
    },
    noite: {
      versiculo: { texto: "(…) Maldito seja o homem que se levantar e reedificar Jericó (…)", referencia: "Js 6:26" },
      topicos: [
        { ordem: 1, icone: "🧱", titulo: "Paredes que Caíram", conteudo: "As paredes do erro caíram pelo poder da fé e perseverança. Senhor, frustra os esforços de quem busca reconstruir sistemas malditos.", tags: ["fé", "história"] },
        { ordem: 2, icone: "🧹", titulo: "Limpeza em Casa", conteudo: "Devemos ser purificados de todos os erros e nos opor à sua propagação no exterior, na igreja e no mundo por fervorosa oração.", tags: ["pureza", "oração"] },
        { ordem: 3, icone: "📖", titulo: "Veneno ao Erro", conteudo: "O que estamos fazendo para difundir a Bíblia? Estamos lançando no exterior bons escritos do evangelho? O diabo odeia penas de ganso.", tags: ["testemunho", "verdade"] },
        { ordem: 4, icone: "🚩", titulo: "Glória do Senhor", conteudo: "Se fizermos todo o possível para impedir a reconstrução do erro, a glória do Senhor prosperará. Leitor, o que você irá fazer?", tags: ["ação", "zelo"] }
      ],
      promessa: "A verdade do Senhor permanece para sempre.",
      meditacao: "Seja um defensor da luz contra as ações obscuras dos sistemas de erro."
    }
  },
  {
    data: "2026-05-30",
    manha: {
      versiculo: { texto: "Apanhai-nos as raposas, as raposinhas, que fazem mal às vinhas (…)", referencia: "Ct 2:15" },
      topicos: [
        { ordem: 1, icone: "🦊", titulo: "Pequenos Pecados", conteudo: "Um pequeno espinho causa muito sofrimento. Raposinhas estragam as vinhas e pequenos pecados fazem mal ao tenro coração.", tags: ["vigilância", "coração"] },
        { ordem: 2, icone: "🧱", titulo: "Parede de Pecados", conteudo: "Cristo esconde Seu rosto por trás da parede dos teus pecados. Esse muro pode ser construído de pequenos seixos como de pedras grandes.", tags: ["comunhão", "santidade"] },
        { ordem: 3, icone: "🌊", titulo: "Mar de Gotas", conteudo: "O mar é feito de gotas e a rocha que destrói tua embarcação pode ser feita pelo trabalho diário dos insetos de teus pequenos pecados.", tags: ["perigo", "alerta"] },
        { ordem: 4, icone: "🏹", titulo: "Vá à Caça", conteudo: "Jesus convida-o a ir com Ele apanhá-las. Assim como Sansão, Ele apanhará as raposas com facilidade. Vá com Ele.", tags: ["vitória", "ação"] }
      ],
      promessa: "Se guardardes os meus mandamentos, permanecereis no meu amor.",
      meditacao: "Não se contente sem a companhia de Cristo por causa de pecados 'insignificantes'."
    },
    noite: {
      versiculo: { texto: "(…) para que não sirvamos mais ao pecado", referencia: "Rm 6:6" },
      topicos: [
        { ordem: 1, icone: "🔥", titulo: "Brincar com Fogo", conteudo: "Pobre criança queimada, brincas tu com fogo? Já estiveste entre as garras do leão e queres entrar pela segunda vez em seu covil?", tags: ["vigilância", "sabedoria"] },
        { ordem: 2, icone: "⛓️", titulo: "Antiga Escravidão", conteudo: "O pecado nunca te deu o que prometeu, mas te enganou. Deixe a lembrança da tua antiga escravidão te proibir de entrar na rede.", tags: ["liberdade", "memória"] },
        { ordem: 3, icone: "💰", titulo: "Preço Alto", conteudo: "Os cristãos nunca pecam a bom preço. Transgressão destrói a paz, obscurece a comunhão e impede a oração. Não sejas escravo.", tags: ["paz", "oração"] },
        { ordem: 4, icone: "🔙", titulo: "Volta para Jesus", conteudo: "Se você caiu em pecado hoje, meu Mestre lhe envia essa admoestação. Volta para Jesus; Sua graça ainda é a mesma para ti.", tags: ["arrependimento", "graça"] }
      ],
      promessa: "Os teus pecados estão perdoados; vai-te em paz.",
      meditacao: "Cada vez que se serve ao pecado, de novo crucificam o Filho de Deus."
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
  for (const p of ['manha', 'noite']) {
    const d = dayData[p];
    if (!d) continue;
    const filePath = path.join(dir, `${dayData.data}-${p}.md`);
    fs.writeFileSync(filePath, `---
data: ${dayData.data}
periodo: ${p === 'manha' ? 'Manhã' : 'Noite'}
versiculo: "${d.versiculo.referencia}"
tags: [devocional, ${p}, ${d.topicos[0].tags[0]}]
---
# Devocional da ${p === 'manha' ? 'Manhã' : 'Noite'} — ${dayData.data.split('-').reverse().join('/')}
> "${d.versiculo.texto}"
> — ${d.versiculo.referencia}
${d.topicos.map(t => `## ${t.icone} ${t.titulo}\n${t.conteudo}`).join('\n\n')}
---
> 💬 **Promessa:** "${d.promessa}"
✨ **Meditação:** ${d.meditacao}
`);
  }
}

async function uploadToSupabase(dayData) {
  for (const p of ['manha', 'noite']) {
    const d = dayData[p];
    if (!d) continue;
    const { error } = await supabase.from('devocionais').upsert({
      data: dayData.data,
      periodo: p === 'manha' ? 'Manhã' : 'Noite',
      versiculo: d.versiculo,
      topicos: d.topicos,
      promessa: d.promessa,
      meditacao: d.meditacao
    }, { onConflict: 'data, periodo' });
    if (error) console.error(`❌ Erro ${dayData.data}-${p}:`, error.message);
  }
  console.log(`✅ ${dayData.data} preenchido.`);
}

async function run() {
  console.log('🚀 Completando o mês de Maio (Dias 13-17 e 23-30)...');
  for (const day of batch) {
    await saveToObsidian(day);
    await uploadToSupabase(day);
  }
  console.log('🏁 Revisão concluída. Todo o mês de Maio está carregado!');
}
run();
