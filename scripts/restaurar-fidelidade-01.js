require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const restauracaoFiel = [
  {
    data: "2026-05-01",
    periodo: "Manhã",
    versao: "original",
    versiculo: { texto: "As suas faces são como um canteiro de bálsamo, como flores perfumadas (…)", referencia: "Ct 5:13" },
    topicos: [
      { ordem: 1, icone: "🌸", titulo: "O Mês das Flores", conteudo: "Eis que o mês das flores chegou! Os ventos de março e as chuvas de abril fizeram seu trabalho, e toda a terra é enfeitada com beleza. Venha, minha alma, coloque teu traje de férias e saia para recolher guirlandas de pensamentos celestiais. Tu sabes para onde ir, pois os 'canteiros de bálsamo' são bem conhecidos para ti; tantas vezes sentiste o perfume das 'flores perfumadas' que desejas ir imediatamente para o teu Bem-Amado, e encontrar nEle toda a formosura e toda a alegria.", tags: ["beleza", "primavera"] },
      { ordem: 2, icone: "✝️", titulo: "A Face do Amado", conteudo: "Aquela face uma vez tão rudemente golpeada com a vara, muitas vezes orvalhada com lágrimas de compaixão e maculada com cuspes; aquela face que, ao sorrir com misericórdia, é como fragrância aromática ao meu coração. Tu não escondeste Tua face da vergonha, nem de ser cuspida, ó Senhor Jesus; portanto, encontrarei meu mais precioso deleite em Te louvar. Aquela face foi sulcada pelo arado da aflição, e avermelhada com linhas de sangue que escorriam das têmporas coroadas por espinhos.", tags: ["jesus", "sacrifício"] },
      { ordem: 3, icone: "💎", titulo: "Marcas de Amor", conteudo: "Tais marcas de infinito amor não podem senão deleitar minha alma muito mais do que 'colunas de perfume' (Ct 3:6). Se não posso ver todo o Seu rosto, contemplo Seu perfil, pois o mínimo vislumbre dEle é extremamente refrescante ao meu sentido espiritual, e produz uma variedade de delícias. Em Jesus, encontro não só fragrância, mas um canteiro de bálsamo; não apenas uma flor, mas todos os tipos de doces flores. Ele é, para mim, minha rosa e meu lírio, a tranquilidade do meu coração, meu ramalhete de hena (Ct 1:14).", tags: ["amor", "preciosidade"] },
      { ordem: 4, icone: "🌿", titulo: "Primavera Eterna", conteudo: "Quando Ele está comigo, é mês de Maio durante todo o ano; minha alma sai para lavar seu feliz rosto no orvalho matinal de Sua graça, e consola-se com o canto dos pássaros de Suas promessas. Precioso Senhor Jesus, deixe-me deveras conhecer a bem-aventurança que habita na duradoura e ininterrupta comunhão contigo. Eu sou um pobre inútil, cuja face Te dignaste beijar! Ó, deixe-me Te beijar em troca com os beijos dos meus lábios.", tags: ["comunhão", "graça"] }
    ],
    promessa: "O mínimo vislumbre dEle é extremamente refrescante ao meu sentido espiritual, e produz uma variedade de delícias.",
    meditacao: "Quando Ele está comigo, é mês de Maio durante todo o ano; minha alma sai para lavar seu feliz rosto no orvalho matinal de Sua graça."
  },
  {
    data: "2026-05-01",
    periodo: "Noite",
    versao: "original",
    versiculo: { texto: "EU sou a rosa de Sarom (…)", referencia: "Ct 2:1" },
    topicos: [
      { ordem: 1, icone: "🌹", titulo: "Beleza Superior", conteudo: "O que quer que possa haver de beleza no mundo material, Jesus Cristo possui toda ela em um grau dez vezes superior no mundo espiritual. Entre as flores, a rosa é considerada a mais graciosa, porém Jesus é infinitamente mais gracioso no jardim da alma do que a rosa pode ser nos jardins da terra. Ele ganha o primeiro lugar como o mais belo entre dez mil (Ct 5:10). Ele é o sol, e tudo mais são estrelas; os céus e o dia são escuros em comparação a Ele, pois o rei em Sua formosura (Is 33:17) transcende todas as coisas.", tags: ["beleza", "superioridade"] },
      { ordem: 2, icone: "✨", titulo: "Ouro de Ofir", conteudo: "'Eu sou a rosa de Sarom'. Essa foi a melhor e mais rara das rosas. Jesus não é apenas 'a rosa', mas 'a rosa de Sarom', da mesma forma como Ele chama Sua justiça de 'ouro' e, em seguida, acrescenta: 'Ouro de Ofir', o melhor dos melhores. Ele é absolutamente adorável e o mais encantador. Há uma variedade em Seus encantos. A rosa é agradável aos olhos, e seu aroma é prazeroso e refrescante; assim, cada um dos sentidos da alma encontra plena satisfação em Jesus.", tags: ["justiça", "satisfação"] },
      { ordem: 3, icone: "🏺", titulo: "Frasco da Memória", conteudo: "Até mesmo a lembrança de Seu amor é doce. Segure a rosa de Sarom; puxe pétala por pétala; coloque-as à parte no frasco da memória e você encontrará cada uma delas perfumada muito tempo depois, enchendo a casa com aroma. Cristo satisfaz plenamente o gosto dos espíritos mais instruídos. O maior conhecedor de perfumes está de todo satisfeito com a rosa; no entanto, quando a alma chega ao seu mais alto grau de verdadeira predileção, ela continuará a se satisfazer com Cristo, ou melhor, ela será ainda mais capaz de apreciá-Lo.", tags: ["memória", "gratidão"] },
      { ordem: 4, icone: "♾️", titulo: "Beleza Indefinível", conteudo: "O próprio Céu não possui coisa alguma que supere a rosa de Sarom. Que imagem pode demonstrar por completo Sua beleza? As palavras e as coisas terrenas falham ao tentar Lhe definir. Todos os melhores deleites da Terra juntos retratam debilmente Sua abundante preciosidade. Abençoada rosa, floresça em meu coração para sempre!", tags: ["excelência", "adoração"] }
    ],
    promessa: "O próprio Céu não possui coisa alguma que supere a rosa de Sarom.",
    meditacao: "Todos os melhores deleites da Terra juntos retratam debilmente Sua abundante preciosidade. Abençoada rosa, floresça em meu coração para sempre!"
  }
];

async function run() {
  console.log('🚀 Iniciando Restauração de Fidelidade (Carga 100% igual ao PDF)...');
  for (const entry of restauracaoFiel) {
    const { error } = await supabase.from('devocionais').upsert(entry, { onConflict: 'data, periodo, versao' });
    if (error) console.error(`❌ Erro em ${entry.data}:`, error.message);
    else console.log(`✅ ${entry.data} (${entry.periodo}) restaurado fielmente.`);
  }
}
run();
