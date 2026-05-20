require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-11",
    manha: {
      versiculo: { texto: "(…) eis que eu estou convosco todos os dias (…)", referencia: "Mt 28:20" },
      topicos: [
        { ordem: 1, icone: "🧱", titulo: "Rocha Inamovível", conteudo: "É bom que haja uma rocha firme em meio às ondas do mar da vida. Não construa tua casa sobre as areias movediças de um mundo traiçoeiro, mas sobre esta pedra que permanece sólida.", tags: ["segurança", "eternidade"] },
        { ordem: 2, icone: "💎", titulo: "Tesouro Seguro", conteudo: "Põe teu tudo em Cristo; coloque todos os teus afetos sobre a Sua pessoa, toda a tua esperança em Seu mérito e poderás rir da perda e desafiar a destruição.", tags: ["cristo", "esperança"] },
        { ordem: 3, icone: "🕯️", titulo: "Luz na Escuridão", conteudo: "A sombria morte apagará a tua vela em breve. Oh! como é doce ter a luz do sol quando a vela se extinguir! Una o teu coração com Aquele que nunca te deixará.", tags: ["consolo", "luz"] },
        { ordem: 4, icone: "🤝", titulo: "O Amigo Fiel", conteudo: "Vá, conte teus segredos Àquele Amigo que é mais chegado que um irmão. Confie suas preocupações Àquele que nunca será tomado de ti. Ele é o mesmo hoje e eternamente.", tags: ["amizade", "fidelidade"] }
      ],
      promessa: "Eis que eu estou convosco todos os dias; é suficiente para a minha alma viver.",
      meditacao: "Não coloque seus afetos naquilo que enferruja, mas sobre Aquele que permanece fiel."
    },
    noite: {
      versiculo: { texto: "Tão-somente esforça-te e tem mui bom ânimo (…)", referencia: "Js 1:7" },
      topicos: [
        { ordem: 1, icone: "🛡️", titulo: "Sem Covardia", conteudo: "Deus deseja que Seus servos estejam de bom ânimo. Ele nos quer sem cuidados, sem dúvidas, sem covardia. O desânimo é uma enfermidade para ser levada ao Médico.", tags: ["coragem", "ânimo"] },
        { ordem: 2, icone: "🎭", titulo: "Vestidos de Louvor", conteudo: "Podemos ir enlutados como estamos; Ele afasta de nós o espírito angustiado e nos veste em vestidos de louvor, pois há motivo para nos alegrarmos.", tags: ["alegria", "louvor"] },
        { ordem: 3, icone: "🚩", titulo: "Espírito Heróico", conteudo: "O cristão deve ser de espírito corajoso para glorificar o Senhor. Se ele ficar temeroso, desonrará seu Deus e será um mau exemplo para os outros.", tags: ["testemunho", "exemplo"] },
        { ordem: 4, icone: "⚔️", titulo: "Resistência a Satanás", conteudo: "A menos que sua coragem seja mantida, Satanás será demais para você. A alegria do Senhor será a vossa força, e nenhum demônio avançará contra ti.", tags: ["combate", "vitória"] }
      ],
      promessa: "O homem que labuta regozijando-se em seu Deus tem garantido o êxito.",
      meditacao: "Aquele que semeia na esperança colhe em alegria; portanto, esforça-te!"
    }
  },
  {
    data: "2026-05-12",
    manha: {
      versiculo: { texto: "(…) e me manifestarei a ele", referencia: "Jo 14:21" },
      topicos: [
        { ordem: 1, icone: "✨", titulo: "Revelações Especiais", conteudo: "O Senhor Jesus dá revelações especiais de Si mesmo ao Seu povo de uma forma particular que nenhuma leitura ou pregação poderia fornecer.", tags: ["revelação", "intimidade"] },
        { ordem: 2, icone: "🌌", titulo: "Céu na Terra", conteudo: "Quando Jesus Se manifesta ao Seu povo é o céu na Terra, é o paraíso em embrião, é a felicidade iniciada. Elas exercem sagrada influência sobre o coração.", tags: ["felicidade", "experiência"] },
        { ordem: 3, icone: "🙇", titulo: "Efeito da Humildade", conteudo: "Se um homem diz ser grande por suas manifestações, ele nunca teve comunhão com Jesus. O Senhor atenta para o humilde, mas ao soberbo conhece de longe.", tags: ["humildade", "caráter"] },
        { ordem: 4, icone: "🧼", titulo: "Fruto da Santidade", conteudo: "Santidade certamente se segue a uma manifestação real. Deus não concederá Seus favores aos ímpios; Suas obras devem corresponder ao que dizem.", tags: ["santidade", "integridade"] }
      ],
      promessa: "Haverá três efeitos de nos aproximarmos de Jesus: humildade, felicidade e santidade.",
      meditacao: "Manifestações de Cristo são o limiar do céu em nossas almas."
    },
    noite: {
      versiculo: { texto: "(…) não temas descer ao Egito (…)", referencia: "Gn 46:3" },
      topicos: [
        { ordem: 1, icone: "🐪", titulo: "Novos Panoramas", conteudo: "Jacó deve ter estremecido ao deixar a terra de seu pai. Crentes são muitas vezes chamados a perigos inexperientes; busquem a direção do Senhor.", tags: ["direção", "coragem"] },
        { ordem: 2, icone: "☀️", titulo: "Presença Garantida", conteudo: "Quão abençoado é se sentir seguro sabendo que o Senhor está conosco. Até o vale da sombra da morte se torna brilhante com essa garantia.", tags: ["segurança", "consolo"] },
        { ordem: 3, icone: "🌊", titulo: "Passagem Incólume", conteudo: "Todos os fiéis passarão incólumes pela tribulação da vida e pelo terror da morte. A proteção divina impede qualquer medo ou incredulidade.", tags: ["proteção", "fé"] },
        { ordem: 4, icone: "🚀", titulo: "Vá em Frente", conteudo: "Sem o nosso Deus, devemos temer nos mover, mas quando Ele nos convida, será perigoso demorar. Leitor, vá em frente e não temas.", tags: ["obediência", "ação"] }
      ],
      promessa: "Eu descerei contigo ao Egito, e certamente te farei tornar a subir.",
      meditacao: "O amor de nosso Pai irradia como o sol em toda sua força, mesmo além do oceano."
    }
  },
  {
    data: "2026-05-18",
    manha: {
      versiculo: { texto: "(…) nele habita corporalmente toda a plenitude da divindade; e estais perfeitos nele (…)", referencia: "Cl 2:9-10" },
      topicos: [
        { ordem: 1, icone: "✝️", titulo: "A Divindade a Serviço", conteudo: "Todos os atributos de Cristo estão a nossa disposição. Ele fez Seu divino poder subserviente a nossa salvação para nos tornar completos.", tags: ["cristo", "divindade"] },
        { ordem: 2, icone: "⚔️", titulo: "Defesa Combinada", conteudo: "Sua onipotência, onisciência e infalibilidade estão todos combinados para nossa defesa. Ele emparelha Sua Divindade na carruagem da salvação.", tags: ["poder", "proteção"] },
        { ordem: 3, icone: "💎", titulo: "Herança Perpétua", conteudo: "Sua graça vasta e firme fidelidade nos estão pactuados como nossa herança perpétua. Cada músculo do Seu poder é utilizado para nós.", tags: ["herança", "graça"] },
        { ordem: 4, icone: "🌿", titulo: "Direção e Conforto", conteudo: "Sua sabedoria é a nossa direção; Seu conhecimento nossa instrução; Seu amor nosso conforto; Sua misericórdia nosso consolo.", tags: ["amor", "sabedoria"] }
      ],
      promessa: "Ele abre os recessos do Monte de Deus e nos convida a cavar por tesouros escondidos em Suas minas.",
      meditacao: "Invoque-O com a confiança de que Ele já prometeu mediar por você."
    },
    noite: {
      versiculo: { texto: "(…) depois (…)", referencia: "Hb 12:11" },
      topicos: [
        { ordem: 1, icone: "🌤️", titulo: "Brilho após a Chuva", conteudo: "Nenhuma calma é mais profunda do que aquela que sucede uma tempestade. Vitoriosos banquetes são para soldados bem exercitados.", tags: ["paz", "vitória"] },
        { ordem: 2, icone: "⛰️", titulo: "Monte da Dificuldade", conteudo: "Depois de subir o 'Monte da Dificuldade' é que nos sentamos para descansar. Nossas dores deixam uma linha prateada de luz por trás.", tags: ["perseverança", "descanso"] },
        { ordem: 3, icone: "💎", titulo: "Riqueza nas Perdas", conteudo: "O cristão recebe primeiro suas piores coisas, mas elas são boas coisas 'depois'. Ele se torna rico por suas perdas e vive por sua morte.", tags: ["providência", "maturidade"] },
        { ordem: 4, icone: "⏳", titulo: "Obra da Paciência", conteudo: "Se as suas noites escuras são brilhantes como dias terrenos, como serão seus dias 'depois'? Deixe a paciência ter sua obra perfeita.", tags: ["paciência", "esperança"] }
      ],
      promessa: "A paz, doce e profunda paz, que segue a horrível turbulência que uma vez reinou.",
      meditacao: "Quem não carregaria a presente cruz por uma coroa que virá 'depois'?"
    }
  },
  {
    data: "2026-05-19",
    manha: {
      versiculo: { texto: "Vi os servos a cavalo, e os príncipes andando sobre a terra como servos", referencia: "Ec 10:7" },
      topicos: [
        { ordem: 1, icone: "🏇", titulo: "Inversão de Papéis", conteudo: "Presunçosos usurpam lugares altos enquanto o verdadeiramente grande lamenta na obscuridade. Esse mistério um dia alegrará os justos.", tags: ["providência", "justiça"] },
        { ordem: 2, icone: "🚶", titulo: "O Servo dos Servos", conteudo: "Nosso Senhor andou o caminho do cansaço, o Servo dos servos. Não se admire se Seus seguidores forem desprezados como inferiores.", tags: ["jesus", "humildade"] },
        { ordem: 3, icone: "🌍", titulo: "Mundo de Cabeça para Baixo", conteudo: "Filhos de Satanás reinam na Terra com arrogância. Hamã está no pátio enquanto Mardoqueu senta no portão; Saul reina enquanto Davi vagueia.", tags: ["mundo", "soberba"] },
        { ordem: 4, icone: "👑", titulo: "Reinar em Cristo", conteudo: "Não permitamos que paixões carnais cavalguem enquanto capacidades nobres andem na poeira. A graça deve reinar como um príncipe.", tags: ["graça", "autodomínio"] }
      ],
      promessa: "A eternidade corrigirá os equívocos do tempo quando a roda girar.",
      meditacao: "Devemos reinar em Cristo sobre o triplo reino do espírito, alma e corpo."
    },
    noite: {
      versiculo: { texto: "(…) e pediu para si a morte (…)", referencia: "1Rs 19:4" },
      topicos: [
        { ordem: 1, icone: "🔥", titulo: "Carruagem de Fogo", conteudo: "Elias, destinado ao céu sem ver a morte, pediu para morrer. Temos aqui prova que Deus nem sempre responde à oração em espécie, mas em efeito.", tags: ["oração", "soberania"] },
        { ordem: 2, icone: "💎", titulo: "Prata por Diamantes", conteudo: "Se o Senhor não pagar em prata, Ele o fará em ouro; se não em ouro, em diamantes. Ele deu a Elias algo melhor do que pediu.", tags: ["fé", "recompensa"] },
        { ordem: 3, icone: "⚖️", titulo: "Limites da Oração", conteudo: "Muitas vezes pedimos mal para satisfação da nossa vontade. Quando pedimos em contrariedade aos decretos da providência, não recebemos.", tags: ["vontade", "discernimento"] },
        { ordem: 4, icone: "⚓", titulo: "Firme em Oração", conteudo: "Esteja firme em oração nesta noite de fervorosa intercessão. Preste atenção naquilo que você pede e espere o equivalente superior.", tags: ["intercessão", "confiança"] }
      ],
      promessa: "Deus ouviu e respondeu dando algo infinitamente melhor do que o solicitado.",
      meditacao: "Nosso Pai celestial não tomou Seu desanimado servo conforme sua palavra apressada."
    }
  },
  {
    data: "2026-05-20",
    manha: {
      versiculo: { texto: "(…) maravilhosas as tuas beneficências (…)", referencia: "Sl 17:7" },
      topicos: [
        { ordem: 1, icone: "❤️", titulo: "Amor do Coração", conteudo: "Os favores do Mestre são realizados com o amor de Seu coração. Ele molha nosso bocado em Seu próprio prato e tempera as provisões.", tags: ["amor", "provisão"] },
        { ordem: 2, icone: "💰", titulo: "Moedas de Ouro", conteudo: "Quando coloca em nossas mãos as moedas da Sua graça, acompanha o presente com uma pressão tão calorosa que o modo é tão precioso quanto o benefício.", tags: ["graça", "preciosidade"] },
        { ordem: 3, icone: "🧺", titulo: "Cesta de Ouro", conteudo: "As ricas esmolas são colocadas em uma cesta de ouro por Sua presença. Há um coração sangrando estampado na face de Suas beneficências.", tags: ["misericórdia", "sacrifício"] },
        { ordem: 4, icone: "🍯", titulo: "Favo de Mel", conteudo: "Há uma doçura em Seu favo de mel que não poderia estar lá a menos que a essência da afeição de Sua alma tivesse sido misturada.", tags: ["doçura", "comunhão"] }
      ],
      promessa: "Ele dá liberalmente e não censura; regozija-Se em Sua misericórdia.",
      meditacao: "Que possamos continuamente provar e conhecer essa rara bem-aventurança!"
    },
    noite: {
      versiculo: { texto: "Atraí-os com cordas humanas, com laços de amor (…)", referencia: "Os 11:4" },
      topicos: [
        { ordem: 1, icone: "🪢", titulo: "Laços de Amor", conteudo: "Nosso Pai muitas vezes nos atrai com laços de amor, mas respondemos lentamente. Ele nos atrai para exercermos a mais simples fé nEle.", tags: ["atração", "fé"] },
        { ordem: 2, icone: "🚪", titulo: "Salão de Banquetes", conteudo: "Jesus nos convida a avançar para o salão de banquetes e cear com Ele, mas hesitamos na soleira. Nosso frio coração deveria se envergonhar.", tags: ["intimidade", "convite"] },
        { ordem: 3, icone: "💍", titulo: "Casamento da Aliança", conteudo: "Ele nos exalta para sermos ossos de Seus ossos, casados com Ele pela aliança. Eis aqui o amor que não recebe qualquer negação.", tags: ["aliança", "união"] },
        { ordem: 4, icone: "🌾", titulo: "Cordéis de Aflição", conteudo: "Se não obedecermos às suaves atrações, Ele mandará aflição para nos conduzir. Não recuse os laços de amor para não sofrer o azorrague.", tags: ["disciplina", "obediência"] }
      ],
      promessa: "Eu sou digno de tua total confiança; lança teus cuidados sobre Mim.",
      meditacao: "Aproximemo-nos dEle agora; sacode o pó dos teus cuidados e veste louvor."
    }
  }
];

// Funções de salvamento e upload...
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
  console.log(`✅ ${dayData.data} processado (Upsert).`);
}

async function run() {
  console.log('🚀 Bloco 2: 11-20 de Maio...');
  for (const day of batch) {
    await saveToObsidian(day);
    await uploadToSupabase(day);
  }
}
run();
