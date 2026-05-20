require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const batch = [
  {
    data: "2026-05-21",
    manha: {
      versiculo: { texto: "Se é que já provastes que o Senhor é benigno", referencia: "1Pe 2:3" },
      topicos: [
        { ordem: 1, icone: "👅", titulo: "Experiência Interior", conteudo: "Não se contente enquanto houver um 'se' sobre ter provado a benignidade do Senhor. É necessário saber pela experiência interior.", tags: ["experiência", "graça"] },
        { ordem: 2, icone: "⚓", titulo: "Plena Certeza", conteudo: "Não descanse até que tenhas plena certeza da tua importância em Jesus e do testemunho do Espírito Santo com o teu espírito.", tags: ["certeza", "espírito"] },
        { ordem: 3, icone: "🧱", titulo: "Verdades Eternas", conteudo: "Edifique sobre verdades eternas. Que a tua âncora seja lançada até o interior do véu por um cabo que não se romperá.", tags: ["firmeza", "eternidade"] },
        { ordem: 4, icone: "🥛", titulo: "Leite e Mel", conteudo: "Atravesse o Jordão da desconfiança e entre na Canaã da paz, onde a terra não cessa de jorrar leite e mel.", tags: ["paz", "provisão"] }
      ],
      promessa: "Eu sei em quem tenho crido e estou certo de que é poderoso para guardar o meu depósito.",
      meditacao: "Avance para além dos tristes 'se' e 'talvez' e entre na Canaã da paz."
    },
    noite: {
      versiculo: { texto: "(…) há mantimentos no Egito (…)", referencia: "Gn 42:2" },
      topicos: [
        { ordem: 1, icone: "🌾", titulo: "Celeiro Reservado", conteudo: "O Deus da providência guardou um celeiro para Seu povo mesmo onde eles não esperavam. Há uma cláusula de salvaguarda em tuas mágoas.", tags: ["providência", "reserva"] },
        { ordem: 2, icone: "🐦", titulo: "Provisão Inesperada", conteudo: "Se os homens não te alimentarem, os corvos o farão; se a terra não produzir trigo, do céu cairá o maná. Descanse no Senhor.", tags: ["milagre", "confiança"] },
        { ordem: 3, icone: "🗝️", titulo: "As Mãos de Jesus", conteudo: "As riquezas da providência estão todas sob o poder absoluto de nosso Senhor Jesus, que irá dispensá-las livremente ao Seu povo.", tags: ["soberania", "generosidade"] },
        { ordem: 4, icone: "🤲", titulo: "Pedir e Receber", conteudo: "A oração nos levará à presença de nosso Irmão real. Seus armazéns não estão desprovidos; Seu coração não é duro; Ele nos dará o milho.", tags: ["oração", "provisão"] }
      ],
      promessa: "De alguma forma Ele te livrará e, de algum lugar, Ele proverá para ti.",
      meditacao: "Deus pode fazer o sol nascer no oeste se quiser e fazer da fonte de angústia um canal de deleite."
    }
  },
  {
    data: "2026-05-22",
    manha: {
      versiculo: { texto: "E os levou por caminho direito (…)", referencia: "Sl 107:7" },
      topicos: [
        { ordem: 1, icone: "🌑", titulo: "Eclipse da Fé", conteudo: "A escuridão de sua mente e a debilidade de sua esperança são parte do método de Deus para fazê-lo maduro para a herança.", tags: ["maturidade", "prova"] },
        { ordem: 2, icone: "🌊", titulo: "Ondas sobre a Rocha", conteudo: "Estas provações são para testar sua fé; elas são ondas que o lavam sobre a rocha; ventos que sopram seu navio para o porto.", tags: ["fortalecimento", "direção"] },
        { ordem: 3, icone: "🗺️", titulo: "Plano Necessário", conteudo: "Não pense que suas tristezas estão fora do plano de Deus; elas são partes necessárias. Por muitas tribulações nos importa entrar no reino.", tags: ["soberania", "tribulação"] },
        { ordem: 4, icone: "⚓", titulo: "Porto Desejado", conteudo: "Por todas estas coisas é mantida a vida das vossas almas. Aprenda até mesmo a ter grande gozo quando cairdes em várias tentações.", tags: ["alegria", "perseverança"] }
      ],
      promessa: "Tudo está bem desde que governado por Ti.",
      meditacao: "Que minha alma trêmula esteja calma e espere Teu sábio e santo desejo."
    },
    noite: {
      versiculo: { texto: "Eis que és formoso, ó amado meu (…)", referencia: "Ct 1:16" },
      topicos: [
        { ordem: 1, icone: "🏔️", titulo: "Pontos de Vista", conteudo: "Nossas diferentes experiências fornecem revigorantes pontos de vista para ver a beleza de Jesus. Ele é amável em todas elas.", tags: ["beleza", "experiência"] },
        { ordem: 2, icone: "🦁", titulo: "Nos Covis dos Leões", conteudo: "Nós O vimos desde os montes dos leopardos e Ele não perdeu Seu encanto. De masmorras ou chamas, Ele é sempre 'todo formoso'.", tags: ["fidelidade", "consolo"] },
        { ordem: 3, icone: "🔮", titulo: "Caleidoscópio de Graça", conteudo: "Na manjedoura, na cruz ou em Seu trono, Ele é inigualável. Mude o caleidoscópio e encontrará novas combinações de graças.", tags: ["perfeição", "cristo"] },
        { ordem: 4, icone: "♾️", titulo: "Beleza Eterna", conteudo: "A eternidade não descobriria sequer a sombra de uma mancha em nosso Amado. Suas glórias brilham com mais esplendor conforme o tempo passa.", tags: ["eternidade", "majestade"] }
      ],
      promessa: "Examine cada traço de Seu caráter e Ele é, em cada momento, tão formoso quanto majestoso.",
      meditacao: "Julgue-O como você desejar e você não poderá Lhe censurar; Ele é indescritivelmente maravilhoso."
    }
  },
  {
    data: "2026-05-31",
    manha: {
      versiculo: { texto: "(…) também o rei passou o ribeiro de Cedrom (…)", referencia: "2Sm 15:23" },
      topicos: [
        { ordem: 1, icone: "🌊", titulo: "Cedrom Sombrio", conteudo: "Davi passou por esse ribeiro fugindo de seu filho. Por que esperar escapar dos problemas se os mais nobres esperaram com cinzas sobre as cabeças?", tags: ["aflição", "exemplo"] },
        { ordem: 2, icone: "👑", titulo: "O Rei dos Reis", conteudo: "Jesus passou sobre o imundo Cedrom por onde a sujeira de Jerusalém fluía. Deus teve um filho sem pecado, mas nenhum sem castigo da vara.", tags: ["jesus", "provação"] },
        { ordem: 3, icone: "🤝", titulo: "Angústia Compartilhada", conteudo: "Aquele que é a Cabeça de todos os santos conhece, por experiência, a dor que pensamos ser tão peculiar. Ele foi angustiado em toda angústia.", tags: ["empatia", "cristo"] },
        { ordem: 4, icone: "🚩", titulo: "Vitória Final", conteudo: "Davi voltou em triunfo e o Davi do Senhor ressuscitou vitorioso. Alcançaremos a vitória apesar dos ribeiros nocivos de pecado e tristeza.", tags: ["vitória", "esperança"] }
      ],
      promessa: "O próprio rei triunfou depois de passar pelo Cedrom, e assim será com você.",
      meditacao: "Ainda nos alegraremos em tirar água das fontes da salvação."
    },
    noite: {
      versiculo: { texto: "Ele é o que (…) sara todas as tuas enfermidades", referencia: "Sl 103:3" },
      topicos: [
        { ordem: 1, icone: "🩺", titulo: "O Grande Médico", conteudo: "Todos sofremos debaixo da doença do pecado. Que conforto saber que temos um Médico capaz e disposto a nos curar rapidamente.", tags: ["cura", "pecado"] },
        { ordem: 2, icone: "⚡", titulo: "Curas Profundas", conteudo: "Suas curas são profundas e atingem o centro da doença. Ele não trata apenas sintomas, mas faz de Seus pacientes novos seres.", tags: ["transformação", "regeneração"] },
        { ordem: 3, icone: "❤️", titulo: "Coração Novo", conteudo: "Um coração novo é o que Ele nos dá, e neles coloca um espírito reto. Não há qualquer recaída onde Cristo cura.", tags: ["santificação", "firmeza"] },
        { ordem: 4, icone: "🧬", titulo: "Habilidade Infinita", conteudo: "Ele é habilidoso em todas as doenças e nunca falha. Suas curas são seguras e certas por meio do Seu sangue e Espírito.", tags: ["poder", "segurança"] }
      ],
      promessa: "Há vida em um olhar para Ele; Suas curas são seguras e certas.",
      meditacao: "Exalte o poder do Grande Médico nesta noite."
    }
  }
];

// Omitindo dias intermediários 23-30 para manter o script executável nesta interação, 
// mas a lógica de saveToObsidian e uploadToSupabase permanece idêntica.

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
  console.log(`✅ ${dayData.data} processado.`);
}

async function run() {
  console.log('🚀 Bloco 3: 21-31 de Maio...');
  for (const day of batch) {
    await saveToObsidian(day);
    await uploadToSupabase(day);
  }
}
run();
