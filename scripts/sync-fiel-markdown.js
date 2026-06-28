require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const mesesNomes = {
  '01': '01-Janeiro',
  '02': '02-Fevereiro',
  '03': '03-Março',
  '04': '04-Abril',
  '05': '05-Maio',
  '06': '06-Junho',
  '07': '07-Julho',
  '08': '08-Agosto',
  '09': '09-Setembro',
  '10': '10-Outubro',
  '11': '11-Novembro',
  '12': '12-Dezembro'
};

async function gerarMarkdownFiel() {
  console.log('🚀 Iniciando geração local de arquivos Markdown para a versão Fiel...');

  // 1. Buscar todos os devocionais originais (onde reside a coluna texto_fiel)
  const { data: devocionais, error } = await supabase
    .from('devocionais')
    .select('data, periodo, versiculo, promessa, meditacao, texto_fiel')
    .eq('versao', 'original');

  if (error) {
    console.error('❌ Erro ao buscar devocionais:', error.message);
    return;
  }

  console.log(`📋 Encontrados ${devocionais.length} registros para processar localmente.`);

  let criados = 0;

  for (const dev of devocionais) {
    if (!dev.texto_fiel) {
      console.log(`⚠️ Registro ${dev.data} (${dev.periodo}) não possui texto_fiel populado. Pulando.`);
      continue;
    }

    try {
      const dataStr = dev.data; // Formato: YYYY-MM-DD
      const [ano, mes, dia] = dataStr.split('-');
      const nomeMes = mesesNomes[mes];
      
      if (!nomeMes) {
        console.warn(`⚠️ Mês inválido ou não suportado: ${mes} na data ${dataStr}`);
        continue;
      }

      // Diretorio de destino: content/Devocionais/Ano/Mês
      const dirDest = path.join(__dirname, '..', 'content', 'Devocionais', ano, nomeMes);
      if (!fs.existsSync(dirDest)) {
        fs.mkdirSync(dirDest, { recursive: true });
      }

      const periodoSlug = dev.periodo === 'Manhã' ? 'manha' : 'noite';
      const fileName = `${dataStr}-${periodoSlug}-fiel.md`;
      const filePath = path.join(dirDest, fileName);

      // Formatar a data para exibição DD/MM/YYYY
      const dataExibicao = `${dia}/${mes}/${ano}`;

      // Montar o conteúdo Markdown
      const mdContent = `---
data: ${dataStr}
periodo: ${dev.periodo}
versiculo: "${dev.versiculo.referencia}"
versao: fiel
tags: [devocional, ${periodoSlug}, fiel]
---

# Devocional da ${dev.periodo} (fiel) — ${dataExibicao}

> "${dev.versiculo.texto}"
> — ${dev.versiculo.referencia}

${dev.texto_fiel}

---
> 💬 **Promessa:** "${dev.promessa || ''}"

✨ **Meditação:** ${dev.meditacao || ''}
`;

      fs.writeFileSync(filePath, mdContent, 'utf8');
      console.log(`✅ Arquivo gerado: ${fileName}`);
      criados++;
    } catch (e) {
      console.error(`❌ Erro ao processar arquivo para ${dev.data} (${dev.periodo}):`, e.message);
    }
  }

  console.log('\n======================================');
  console.log(`🎉 Sincronização local finalizada!`);
  console.log(`✅ Arquivos Markdown criados: ${criados}`);
  console.log('======================================');
}

gerarMarkdownFiel();
