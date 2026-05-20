require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const restauracaoFiel = [
  {
    data: "2026-05-19",
    periodo: "Manhã",
    versao: "original",
    versiculo: { texto: "Vi os servos a cavalo, e os príncipes andando sobre a terra como servos", referencia: "Ec 10:7" },
    topicos: [
      { ordem: 1, icone: "🏇", titulo: "Inversão de Papéis", conteudo: "Presunçosos com frequência usurpam os lugares mais altos enquanto o verdadeiramente grande lamenta na obscuridade. Esse é um mistério na providência cuja solução um dia alegrará o coração dos justos; contudo, é um fato tão corriqueiro que nenhum de nós deve murmurar se ele cair como nossa própria sorte. Quando nosso Senhor esteve na Terra, embora fosse o Príncipe dos reis, Ele andou o caminho do cansaço e dos serviços, o Servo dos servos; logo, o que seria de admirar se os Seus seguidores, que são príncipes de descendência real, forem também desprezados como pessoas inferiores e insignificantes?", tags: ["providência", "justiça"] },
      { ordem: 2, icone: "🚶", titulo: "O Mundo Invertido", conteudo: "O mundo está de cabeça para baixo; por isso, o primeiro é o último e o último é o primeiro. Veja como os filhos servis de Satanás reinam na Terra! Em que arrogância eles cavalgam! Como levantam alto seu chifre (Sl 75:4)! Hamã está no pátio interior, enquanto Mardoqueu senta no portão (Et 3:1-3); Davi vagueia pelas montanhas, enquanto Saul reina (1Sm 23:14); Elias está reclamando na caverna, enquanto Jezebel se vangloria no palácio (1Rs 19:9); apesar disso, quem desejaria tomar lugar entre os rebeldes orgulhosos?", tags: ["mundo", "soberba"] },
      { ordem: 3, icone: "⚖️", titulo: "Justiça do Tempo", conteudo: "E quem, por outro lado, não inveja os desprezados santos? Quando a roda gira, aqueles que são os mais baixos sobem e os mais altos afundam. Paciência, então, crente; a eternidade corrigirá os equívocos do tempo. Não vamos cair no erro de permitir que nossas paixões e apetites carnais cavalguem triunfantes enquanto nossas capacidades mais nobres andem na poeira. A graça deve reinar como um príncipe e fazer os membros do corpo instrumentos de justiça.", tags: ["paciência", "eternidade"] },
      { ordem: 4, icone: "👑", titulo: "Reinar em Cristo", conteudo: "O Espírito Santo ama a ordem, e, por isso, Ele coloca nossas forças e faculdades no devido grau e lugar, concedendo o espaço mais elevado às faculdades espirituais que nos ligam ao grande Rei; não perturbemos a organização divina, mas peçamos graça para que possamos manter nosso corpo em submissão e trazê-lo em sujeição. Nós não somos novas criaturas para permitir que nossas paixões governem sobre nós, mas nós, como reis, devemos reinar em Cristo Jesus sobre o triplo reino do espírito, alma e corpo, para a glória de Deus Pai.", tags: ["santidade", "ordem"] }
    ],
    promessa: "A eternidade corrigirá os equívocos do tempo quando a roda girar.",
    meditacao: "Devemos reinar em Cristo sobre o triplo reino do espírito, alma e corpo, para a glória de Deus Pai."
  },
  {
    data: "2026-05-19",
    periodo: "Noite",
    versao: "original",
    versiculo: { texto: "(…) e pediu para si a morte (…)", referencia: "1Rs 19:4" },
    topicos: [
      { ordem: 1, icone: "🔥", titulo: "Carruagem de Fogo", conteudo: "Foi uma coisa notável que o homem que não morreu, a quem Deus havia ordenado uma sorte infinitamente melhor, o homem que foi para o céu em uma carruagem de fogo, e trasladado para que não visse a morte, pudesse, então, orar: 'Toma agora a minha vida, pois não sou melhor do que meus pais' (1Rs 19:4). Temos aqui uma prova memorável que Deus nem sempre responde à oração em espécie, embora sempre o faça em efeito. Ele deu a Elias algo melhor do que aquilo que ele pediu; portanto, verdadeiramente o ouviu e respondeu.", tags: ["oração", "fé"] },
      { ordem: 2, icone: "⚖️", titulo: "Oração e Providência", conteudo: "Estranho foi que o corajoso Elias ficasse tão deprimido pela ameaça de Jezebel a ponto de pedir para morrer; de forma abençoada, nosso Pai celestial não tomou seu desanimado servo conforme sua palavra. Há um limite para a doutrina da oração da fé. Não devemos esperar que Deus nos concederá tudo o que escolhemos pedir. Sabemos que, por vezes, pedimos e não recebemos, porque pedimos mal (Tg 4:3). Se pedimos por aquilo que não está prometido, se for contrário ao espírito que o Senhor quer que cultivemos, se pedimos em contrariedade aos decretos da providência, o Senhor por amor nos nega.", tags: ["oração", "vontade"] },
      { ordem: 3, icone: "⚓", titulo: "Equivalente Superior", conteudo: "O Senhor pode dizer-nos 'Não', mas fazê-lo de uma maneira que contenha todos os efeitos de um 'Sim'. Deus deu a Elias o que era equivalente à morte, e mais do que um equivalente: Ele deu a Elias o céu, em vez da morte, e Elias teria sido o último homem a lamentar que sua oração não foi respondida de acordo com a letra da sua petição. Esteja firme em oração nesta noite de fervorosa intercessão. Preste muita atenção naquilo que você pede e espere por uma resposta, mas não fique surpreso se o Senhor der algo melhor em vez daquilo que você pediu.", tags: ["intercessão", "confiança"] },
      { ordem: 4, icone: "✨", titulo: "Conselho de Fé", conteudo: "Diga-Lhe: 'Senhor, se não for Teu desejo, eu não peço; mas, já que minha oração está de acordo com Teu desejo, responda-me; e mesmo que não esteja, ouve-me e faça o que for melhor para Tua glória e para o meu bem'. O Senhor pode dar prata onde pedimos chumbo; e Ele dará ouro onde pedimos prata; e Ele nos dará diamantes se pedirmos ouro. Confie nEle, pois Ele não negará qualquer coisa boa àqueles que andam retamente.", tags: ["fé", "soberania"] }
    ],
    promessa: "O Senhor dará ouro onde pedimos prata e diamantes onde pedimos ouro.",
    meditacao: "Nosso Pai celestial não tomou Seu desanimado servo conforme sua palavra apressada, mas deu-lhe o céu."
  }
];

async function run() {
  console.log('🚀 Restaurando dia 19 de Maio com fidelidade 100%...');
  for (const entry of restauracaoFiel) {
    await supabase.from('devocionais').upsert(entry, { onConflict: 'data, periodo, versao' });
    console.log(`✅ 2026-05-19 (${entry.periodo}) restaurado fielmente.`);
  }
}
run();
