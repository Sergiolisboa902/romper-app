require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-16",
    manha: {
      versiculo: { texto: "(…) Deus, que abundantemente nos dá todas as coisas para delas gozarmos", referencia: "1Tm 6:17" },
      topicos: [
        { ordem: 1, icone: "⛲", titulo: "Fluxo Incessante", conteudo: "Nosso Senhor Jesus está sempre concedendo, e em nenhum instante sequer Ele retira Sua mão. Enquanto houver um vaso de graça que não esteja cheio até a borda, o óleo não será suspenso. Ele é um sol que sempre brilha; Ele é o maná sempre caindo em volta do acampamento; Ele é a rocha no deserto, sempre enviando correntes de vida do Seu lado perfurado; a chuva de Sua graça está sempre caindo; o rio de Sua generosidade está sempre fluindo, e o manancial de Seu amor está constantemente transbordando.", tags: ["generosidade", "graça"] },
        { ordem: 2, icone: "🗓️", titulo: "Banquetes Diários", conteudo: "Assim como o Rei nunca morre, Sua graça nunca falhará. Todos os dias nós colhemos Seu fruto, e diariamente os Seus ramos se curvam para nossas mãos com uma refrescante provisão de misericórdia. Há sete dias de festa em Suas semanas, e tantos quantos são os dias, são os banquetes em Seus anos. Quem já voltou de Sua porta sem ser abençoado? Quem já se levantou de Sua mesa insatisfeito, ou de Seu seio sem que estivesse no paraíso?", tags: ["provisão", "satisfação"] },
        { ordem: 3, icone: "⏳", titulo: "Asas das Horas", conteudo: "Suas misericórdias se renovam a cada manhã, e revigoram todas as noites. Quem pode conhecer a multidão de Seus benefícios? Cada grão de areia que cai na ampulheta é senão um seguidor tardio de uma miríade de misericórdias. As asas de nossas horas estão cobertas com a prata de Sua bondade, e com o ouro amarelo de Sua afeição (Sl 68:13). O rio do tempo carrega as areias douradas de Seu favor.", tags: ["tempo", "misericórdia"] },
        { ordem: 4, icone: "🎻", titulo: "Louvor Incessante", conteudo: "As incontáveis estrelas são como os porta-estandartes da mais inumerável hoste de bênçãos. Como minha alma exaltará Aquele que diariamente nos enche com benefícios e que nos coroa de benignidade? Ó, que o meu louvor possa ser tão incessante quanto Sua generosidade! Ó língua miserável, como podes ficar em silêncio? 'Despertai, saltério e harpa; eu mesmo despertarei ao romper da alva' (Sl 57:8).", tags: ["louvor", "gratidão"] }
      ],
      promessa: "Ele abundantemente nos dá todas as coisas para delas gozarmos; Sua graça nunca falhará.",
      meditacao: "Que o meu louvor possa ser tão incessante quanto Sua generosidade diária."
    },
    noite: {
      versiculo: { texto: "(…) este vale se encherá de tanta água, que bebereis vós, o vosso gado e os vossos animais", referencia: "2Rs 3:16-17" },
      topicos: [
        { ordem: 1, icone: "🕳️", titulo: "Fazei Covas", conteudo: "Os exércitos dos três reis estavam sedentos; Deus estava prestes a enviar água e o profeta anunciou a bênção. Aqui está um exemplo do desamparo humano; todos aqueles valentes não poderiam obter sequer uma gota de água. Do mesmo modo, o povo do Senhor perde todo o tino; eles veem a vaidade do ser humano e aprendem, por experiência, onde a sua ajuda pode ser encontrada.", tags: ["desamparo", "fé"] },
        { ordem: 2, icone: "⛏️", titulo: "Preparação Silenciosa", conteudo: "Silenciosamente, as pessoas fizeram uma preparação acreditando na bênção divina; eles cavaram poços onde o líquido seria guardado. A Igreja deve, por suas ações e orações, estar pronta para ser abençoada; ela deve fazer poços, e o Senhor irá preenchê-los. Isso deve ser feito com fé, com a plena certeza que a bênção está prestes a descer.", tags: ["preparação", "expectativa"] },
        { ordem: 3, icone: "🤫", titulo: "Bênção Misteriosa", conteudo: "Pouco a pouco, a benção foi concedida de um modo singular. Não foi como no caso de Elias, em que a chuva verteu das nuvens, mas, de uma forma silenciosa e misteriosa, os poços foram cheios. O Senhor tem Seus próprios meios soberanos de agir; Ele não está vinculado às formas e ao tempo como nós estamos, mas faz o que Lhe agrada entre os filhos dos homens.", tags: ["soberania", "mistério"] },
        { ordem: 4, icone: "🌊", titulo: "Provisão Abundante", conteudo: "É nossa gratidão receber dEle, e não ordenar a Ele. Devemos notar a extraordinária abundância da provisão, pois ela foi suficiente à necessidade de todos. No evangelho, todas as necessidades da igreja são satisfeitas pelo poder divino em resposta à oração. Ó Senhor, fazei-me pronto para receber a bênção que Tu estás tão disposto a conceder.", tags: ["provisão", "plenitude"] }
      ],
      promessa: "O Senhor preencherá os poços que cavardes com extraordinária abundância.",
      meditacao: "O que estou fazendo para Jesus? Que poços estou eu cavando para receber Sua bênção?"
    }
  },
  {
    data: "2026-05-17",
    manha: {
      versiculo: { texto: "(…) também deve andar como ele andou.", referencia: "1Jo 2:6" },
      topicos: [
        { ordem: 1, icone: "🏃", titulo: "Pelo Próprio Bem", conteudo: "Por que os cristãos devem imitar a Cristo? Devem fazê-lo para o próprio bem deles. Se desejam estar com a alma em um estado saudável, se desejam escapar da doença do pecado, se desejam apreciar o vigor do crescimento da graça, que Jesus lhes seja por modelo. Para a própria felicidade deles, se desejam sagrada e alegre comunhão com Jesus, que eles andem como Jesus andou.", tags: ["santidade", "saúde"] },
        { ordem: 2, icone: "👣", titulo: "Seguir os Passos", conteudo: "Não há nada que mais possa ajudá-lo a caminhar em direção ao céu como levar a imagem de Jesus em seu coração para governar todos os seus atos. É quando, pelo poder do Espírito Santo, você está capacitado a caminhar com Jesus, em Seus próprios passos, que você será mais feliz e mais reconhecido por ser filho de Deus. Pedro, quando distante, era inseguro e inquieto.", tags: ["exemplo", "direção"] },
        { ordem: 3, icone: "🛡️", titulo: "Cuidado com o Inimigo", conteudo: "Ah! pobre religião, foste dolorosamente alvejada por cruéis inimigos; contudo, não foste ferida tão perigosamente por teus inimigos como por teus amigos. Quem fez essas feridas? O professor que faz uso do punhal da hipocrisia; o homem que, com pretextos, entra no aprisco, inquietando o rebanho mais que o leão do lado de fora. Não há arma tão mortal como a de Judas: um beijo.", tags: ["vigilância", "hipocrisia"] },
        { ordem: 4, icone: "🚩", titulo: "Pela Causa de Cristo", conteudo: "Professores inconsistentes ferem o evangelho mais que o crítico escarnecedor. No entanto, pela causa de Cristo, imite Seu exemplo. Cristão, amas o teu Salvador? É teu desejo que Ele seja glorificado? Estás desejoso que as almas sejam ganhas para Ele? Se assim o for, imite a Jesus; seja uma 'carta de Cristo, conhecida e lida por todos os homens' (2Co 3:2).", tags: ["testemunho", "gloria"] }
      ],
      promessa: "O Espírito Santo capacita o crente a caminhar nos passos de Jesus e ser reconhecido como filho de Deus.",
      meditacao: "Seja uma 'carta de Cristo', conhecida e lida por todos os homens, andando como Ele andou."
    },
    noite: {
      versiculo: { texto: "(…) Tu és o meu servo, a ti escolhi (…)", referencia: "Is 41:9" },
      topicos: [
        { ordem: 1, icone: "🧤", titulo: "Servo do Rei", conteudo: "Se nós recebemos a graça de Deus, o seu efeito prático foi o de nos tornar servos de Deus. Podemos ser servos inúteis, mas somos Seus servos, vestindo Seu uniforme, nos alimentando a Sua mesa. Fomos servos do pecado, mas Aquele que nos libertou nos tomou para Sua família e nos ensinou obediência a Sua vontade. 'Deveras sou teu servo; soltaste as minhas ataduras' (Sl 116:16).", tags: ["serviço", "libertação"] },
        { ordem: 2, icone: "♾️", titulo: "Escolha Eterna", conteudo: "O Senhor nos chama de Seus escolhidos: 'A ti escolhi'. Nós não O escolhemos primeiro, mas Ele que nos escolheu. A mudança deve ser atribuída à graça soberana. O olho da soberania nos escolheu e a voz da imutável graça declarou: 'Porquanto com amor eterno te amei' (Jr 31:3). Antes do tempo ser criado, Deus havia escrito em Seu coração os nomes do Seu povo.", tags: ["eleição", "graça"] },
        { ordem: 3, icone: "💍", titulo: "Amor Constante", conteudo: "Que conforto há aqui! Porventura o Senhor, que nos amou por tanto tempo, irá nos lançar fora? Ele sabia quão obstinados seríamos e, mesmo assim, fez a escolha. Nosso Salvador não tem um amor inconstante. Ele não Se sente encantado por um tempo e, em seguida, a lança fora. Não; Ele Se casou com ela na eternidade, e Jeová 'odeia o repúdio' (Ml 2:16).", tags: ["fidelidade", "aliança"] },
        { ordem: 4, icone: "⚓", titulo: "Elo Inquebrável", conteudo: "A escolha eterna é o elo que une nossa gratidão e Sua fidelidade que nada pode renunciar. Podemos descansar no amor que não depende de nossos méritos, mas da Sua soberana vontade de nos amar. Que esse pensamento nos constranja a servi-Lo com todo o nosso coração e alma, sabendo que somos eternamente dEle.", tags: ["segurança", "gratidão"] }
      ],
      promessa: "Porquanto com amor eterno te amei; Jeová odeia o repúdio e Sua escolha é eterna.",
      meditacao: "A escolha eterna de Deus é o elo inquebrável que sustenta nossa gratidão e Sua fidelidade."
    }
  },
  {
    data: "2026-05-18",
    manha: {
      versiculo: { texto: "(…) nele habita corporalmente toda a plenitude da divindade; e estais perfeitos nele (…)", referencia: "Cl 2:9-10" },
      topicos: [
        { ordem: 1, icone: "✝️", titulo: "Plenitude da Divindade", conteudo: "Todos os atributos de Cristo estão a nossa disposição. Toda a plenitude da Divindade é nossa para nos tornar completos. Ele realizou tudo aquilo que poderia ser feito, pois fez Seu divino poder e divindade subservientes a nossa salvação. Sua onipotência, onisciência e infalibilidade estão todos combinados para nossa defesa. Levanta-te e vê Jesus emparelhando Sua Divindade na carruagem da salvação!", tags: ["divindade", "salvação"] },
        { ordem: 2, icone: "💎", titulo: "Herança Perpétua", conteudo: "Quão vasta é Sua graça, quão firme Sua fidelidade, quão infinito o Seu poder! Tudo isso foi feito pelo Senhor Jesus, colunas do templo da salvação; e todos nos estão pactuados como nossa herança perpétua. Cada gota do amor insondável do coração do Salvador é nossa; cada músculo no braço do poder, cada jóia na coroa da majestade, tudo é nosso, e são utilizados para nós.", tags: ["herança", "graça"] },
        { ordem: 3, icone: "🌿", titulo: "Direção e Conforto", conteudo: "A completude de Cristo é nossa mais rica alegria. Sua sabedoria é a nossa direção; Seu conhecimento nossa instrução; Seu poder nossa proteção; Sua justiça nossa garantia; Seu amor o nosso conforto; Sua misericórdia nosso consolo; Sua imutabilidade nossa confiança. Ele não faz qualquer reserva, mas abre os recessos do Monte de Deus e nos convida a cavar por tesouros.", tags: ["sabedoria", "consolo"] },
        { ordem: 4, icone: "⛏️", titulo: "Saciai-vos dos Favores", conteudo: "'Tudo, tudo, tudo é vosso', diz Ele, 'saciai-vos dos favores e enchei-vos da bondade do Senhor'. Oh! como é doce contemplar a Jesus, e invocá-Lo com a confiança e certeza que, na busca da mediação do Seu amor ou poder, nós estamos pedindo senão aquilo que Ele já fielmente prometeu. Ele nos convida a explorar Suas minas de tesouros celestiais.", tags: ["provisão", "promessa"] }
      ],
      promessa: "Tudo é vosso; saciai-vos dos favores e enchei-vos da bondade do Senhor.",
      meditacao: "Invoque a Jesus com a certeza de que Ele fielmente cumpre tudo o que prometeu mediar por você."
    },
    noite: {
      versiculo: { texto: "(…) depois (…)", referencia: "Hb 12:11" },
      topicos: [
        { ordem: 1, icone: "🌤️", titulo: "Brilho após a Chuva", conteudo: "Quão felizes são os tentados cristãos, 'depois'. Nenhuma calma é mais profunda do que aquela que sucede uma tempestade. Quem não se alegra com o resplendor após a chuva? Vitoriosos banquetes são para soldados bem exercitados. Depois de matar o leão é que comemos o mel; depois de subir o 'Monte da Dificuldade' é que nos sentamos para descansar; depois do 'Vale da Humilhação', surge o resplandecente.", tags: ["paz", "vitória"] },
        { ordem: 2, icone: "🕯️", titulo: "Linha Prateada", conteudo: "Nossas dores, tal como as quilhas dos navios, deixam uma linha prateada de sagrada luz por detrás delas, 'depois'. É a paz, doce e profunda paz, que segue a horrível turbulência que uma vez reinou em nossas atormentadas almas. Veja o feliz estado do cristão! Ele tem as suas melhores coisas 'depois' e, portanto, neste mundo, recebe primeiro as suas piores.", tags: ["consolo", "esperança"] },
        { ordem: 3, icone: "⛰️", titulo: "Riqueza nas Quedas", conteudo: "Até mesmo as suas piores coisas são, 'depois', boas coisas, arando duramente a safra de prazerosas colheitas. Mesmo agora, ele se torna rico por suas perdas, eleva-se em suas quedas, vive por sua morte, e torna-se completo ao ser esvaziado. Se suas graves aflições lhe produzem tantos frutos pacíficos nesta vida, qual será a vindima de alegria 'depois', no céu?", tags: ["providência", "maturidade"] },
        { ordem: 4, icone: "⌛", titulo: "Obra da Paciência", conteudo: "Se as suas noites escuras são tão brilhantes como os dias terrenos, como serão seus dias 'depois'? Se ele pode cantar em um calabouço, quão docemente cantará no céu! Oh, abençoado 'depois'! Quem não carregaria a presente cruz por uma coroa que virá 'depois'? Mas aqui é um trabalho de paciência, pois o descanso não é para hoje. Espera, ó alma, e deixe a paciência ter sua obra perfeita.", tags: ["paciência", "glória"] }
      ],
      promessa: "A paz, doce e profunda paz, segue a horrível turbulência das nossas almas.",
      meditacao: "Espere, ó alma, e deixe a paciência ter sua obra perfeita para o triunfo que virá 'depois'."
    }
  },
  {
    data: "2026-05-20",
    manha: {
      versiculo: { texto: "(…) maravilhosas as tuas beneficências (…)", referencia: "Sl 17:7" },
      topicos: [
        { ordem: 1, icone: "❤️", titulo: "Amor do Coração", conteudo: "Quando damos nossas ofertas juntamente com nosso coração, damos bem. Não é assim com nosso Mestre. Seus favores são sempre realizados com o amor de Seu coração. Ele não nos envia carne fria, porém molha nosso bocado em Seu próprio prato, e tempera nossas provisões com as especiarias de Seus afetos. Quando Ele coloca em nossas mãos as moedas da Sua graça, Ele acompanha o presente com calorosa pressão.", tags: ["amor", "provisão"] },
        { ordem: 2, icone: "💰", titulo: "Modo Precioso", conteudo: "O Seu modo de fazer as beneficências é tão precioso quanto o próprio benefício. Ele entrará em nossas casas com Suas palavras de bondade e não agirá como visitantes exigentes, mas Se assentará ao nosso lado, não desprezando nossa pobreza. Amado, com que sorriso Ele fala! Que frases de ouro caem de Seus lábios de graça! Que abraços de afeto Ele derrama sobre nós!", tags: ["graça", "preciosidade"] },
        { ordem: 3, icone: "🧺", titulo: "Cesta de Ouro", conteudo: "Se Ele tivesse nos dado senão centavos, o modo de Sua doação os teria dourado; as ricas esmolas são colocadas em uma cesta de ouro por Sua confortável presença. É impossível duvidar da sinceridade de Sua caridade, pois há um coração sangrando estampado na face de todas as Suas beneficências. Ele dá liberalmente e não censura, regozijando-Se em Sua misericórdia.", tags: ["misericórdia", "sacrifício"] },
        { ordem: 4, icone: "🍯", titulo: "Essência da Afeição", conteudo: "Não há sequer um olhar frio aos Seus pobres pensionistas; Ele nos pressiona em Seu seio enquanto está derramando Sua vida por nós. Há uma fragrância em Seu nardo que nada senão Seu coração poderia produzir; há uma doçura em Seu favo de mel que não poderia estar lá a menos que a própria essência da afeição de Sua alma tivesse sido misturada. Que possamos continuamente provar essa bem-aventurança!", tags: ["doçura", "comunhão"] }
      ],
      promessa: "Ele dá liberalmente e não censura; Ele Se regozija em Sua misericórdia.",
      meditacao: "Que possamos continuamente provar e conhecer a bem-aventurança das singulares afeições de Cristo."
    },
    noite: {
      versiculo: { texto: "Atraí-os com cordas humanas, com laços de amor (…)", referencia: "Os 11:4" },
      topicos: [
        { ordem: 1, icone: "🪢", titulo: "Laços de Amor", conteudo: "Nosso Pai Celestial muitas vezes nos atrai com laços de amor, mas quão acanhado nós somos para irmos ter com Ele! Ele nos atrai para exercermos a mais simples fé nEle, porém ainda não alcançamos a confiança de Abraão; assim como Marta, nos sobrecarregamos com muito serviço. Nossa deficiente fé traz magreza as nossas almas; não abrimos largamente nossa boca, embora Deus tenha prometido fartá-las.", tags: ["amor", "fé"] },
        { ordem: 2, icone: "🛡️", titulo: "Confiança Total", conteudo: "Será que Ele não está nos atraindo para confiarmos nEle? 'Venha, Meu filho, e confie em Mim. O véu está rasgado; entra em Minha presença; aproxime-se corajosamente ao trono da graça (Hb 4:16). Eu sou digno de tua total confiança; lança teus cuidados sobre Mim. Sacode o pó dos teus cuidados e ponha em ti belas vestes de louvor'. Mas, ai de mim! nós não vamos.", tags: ["confiança", "ânimo"] },
        { ordem: 3, icone: "🚪", titulo: "Salão de Banquetes", conteudo: "Em outra ocasião, Ele nos atrai para uma comunhão mais íntima. Nós estamos sentados na soleira, e Ele nos convida a avançar para o salão de banquetes e cear com Ele (Ct 2:4), mas nós declinamos a honra. Há salões secretos que ainda não nos foram abertos; Jesus nos convida a entrar, mas nós hesitamos. Nosso frio coração deveria se envergonhar! Somos senão pobres amantes do nosso doce Senhor Jesus.", tags: ["comunhão", "intimidade"] },
        { ordem: 4, icone: "🌾", titulo: "Cordéis de Aflição", conteudo: "Jesus nos exalta para sermos ossos de Seus ossos, casados com Ele por um glorioso casamento: a aliança. Se não obedecermos às suaves atrações de Seu amor, Ele mandará aflição para nos conduzir a uma intimidade mais próxima com Ele. Aproximemo-nos a Ele. Que filhos tolos nós somos para recusar esses laços de amor e, assim, trazer sobre nossas costas o azorrague de cordéis!", tags: ["aliança", "disciplina"] }
      ],
      promessa: "Eu sou digno de tua total confiança; lança teus cuidados sobre Mim.",
      meditacao: "Aproximemo-nos de Jesus, não recusando Seus laços de amor para não atrairmos cordéis de aflição."
    }
  }
];

async function run() {
  console.log('🚀 Restaurando Fidelidade (Bloco 3: 16-20 de Maio, exceto 19)...');
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
  console.log('🏁 Bloco 3 concluído.');
}
run();
