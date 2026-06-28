require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ─────────────────────────────────────────────────────────
// 1. Lê e limpa o texto bruto: remove marcas de página
//    do tipo "-- 535 of 821 --"
// ─────────────────────────────────────────────────────────
function limparTexto(raw) {
  return raw
    .replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '') // remove marcas de página
    .replace(/\r\n/g, '\n')                      // normaliza quebras de linha
    .replace(/\n{3,}/g, '\n\n')                  // reduz linhas em branco excessivas
    .trim();
}

// ─────────────────────────────────────────────────────────
// 2. Faz o parse do arquivo bruto e retorna um mapa:
//    { "2026-05-01_Manhã": "texto...", "2026-05-01_Noite": "texto...", ... }
// ─────────────────────────────────────────────────────────
function parsearBruto(conteudo, ano, mes) {
  const limpo = limparTexto(conteudo);
  const linhas = limpo.split('\n');

  const resultado = {};

  // Regex para detectar início de um devocional:
  // "01 de Maio" ou "1 de Junho" etc.
  const regexData = /^(\d{1,2})\s+de\s+\w+\s*$/i;
  // Regex para detectar início de Manhã ou Noite.
  // IMPORTANTE: não usar \b pois "ã" não é \w e quebraria o word boundary.
  // Aceita tanto "Manhã "texto"" numa linha só quanto "Noite" sozinho na linha.
  const regexPeriodoAlt = /^(Manh[ãa]|Noite)(\s|"|$)/i;

  let diaAtual = null;
  let periodoAtual = null;
  let bufferLinhas = [];

  function salvarBuffer() {
    if (diaAtual !== null && periodoAtual !== null && bufferLinhas.length > 0) {
      const dia = String(diaAtual).padStart(2, '0');
      const chave = `${ano}-${String(mes).padStart(2, '0')}-${dia}_${periodoAtual}`;
      const texto = bufferLinhas.join('\n').replace(/\n{3,}/g, '\n\n').trim();
      if (texto) {
        resultado[chave] = texto;
      }
    }
  }

  for (const linha of linhas) {
    const matchData = linha.match(regexData);

    if (matchData) {
      // Salva o que estava sendo acumulado antes de iniciar novo dia
      salvarBuffer();
      diaAtual = parseInt(matchData[1], 10);
      periodoAtual = null;
      bufferLinhas = [];
      continue;
    }

    if (diaAtual !== null) {
      const matchPeriodo = linha.match(regexPeriodoAlt);
      if (matchPeriodo) {
        // Salva período anterior (ex: Manhã antes de começar Noite)
        salvarBuffer();
        // Normaliza o nome do período
        const nomePeriodo = matchPeriodo[1].toLowerCase().startsWith('manh') ? 'Manhã' : 'Noite';
        periodoAtual = nomePeriodo;
        // A própria linha de título já faz parte do texto
        bufferLinhas = [linha.trim()];
        continue;
      }

      if (periodoAtual !== null) {
        bufferLinhas.push(linha);
      }
    }
  }

  // Salva o último bloco
  salvarBuffer();

  return resultado;
}

// ─────────────────────────────────────────────────────────
// 3. Função principal
// ─────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 Iniciando upload do texto FIEL exato do PDF para o Supabase...\n');

  const arquivos = [
    { arquivo: 'maio_bruto.txt',  ano: 2026, mes: 5 },
    { arquivo: 'junho_bruto.txt', ano: 2026, mes: 6 },
  ];

  // Mapa global: { "2026-05-01_Manhã": "texto...", ... }
  const mapaTextos = {};

  for (const { arquivo, ano, mes } of arquivos) {
    const caminho = path.join(__dirname, arquivo);
    if (!fs.existsSync(caminho)) {
      console.warn(`⚠️  Arquivo não encontrado: ${arquivo}. Pulando.`);
      continue;
    }
    console.log(`📖 Lendo e fazendo parse de: ${arquivo}`);
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    const mapa = parsearBruto(conteudo, ano, mes);
    const qtd = Object.keys(mapa).length;
    console.log(`   → ${qtd} blocos encontrados (manhã + noite)\n`);
    Object.assign(mapaTextos, mapa);
  }

  // Diagnóstico: mostra as primeiras 6 chaves encontradas
  const chaves = Object.keys(mapaTextos);
  console.log(`📊 Total de blocos parseados: ${chaves.length}`);
  console.log('🔍 Primeiras chaves:', chaves.slice(0, 6));
  console.log('');

  // Busca todos os devocionais originais no Supabase
  const { data: devocionais, error } = await supabase
    .from('devocionais')
    .select('id, data, periodo')
    .eq('versao', 'original');

  if (error) {
    console.error('❌ Erro ao buscar devocionais:', error.message);
    return;
  }

  console.log(`📋 ${devocionais.length} registros encontrados no Supabase.\n`);

  let atualizados = 0;
  let semTexto = 0;
  let erros = 0;

  for (const dev of devocionais) {
    // Normaliza: data no formato "2026-05-01", periodo = "Manhã" ou "Noite"
    const chave = `${dev.data}_${dev.periodo}`;
    const texto = mapaTextos[chave];

    if (!texto) {
      console.log(`⚠️  Sem texto do PDF para: ${chave}`);
      semTexto++;
      continue;
    }

    const { error: updateError } = await supabase
      .from('devocionais')
      .update({ texto_fiel: texto })
      .eq('id', dev.id);

    if (updateError) {
      console.error(`❌ Erro ao atualizar ${chave}:`, updateError.message);
      erros++;
    } else {
      console.log(`✅ ${chave}`);
      atualizados++;
    }
  }

  console.log('\n======================================');
  console.log(`🎉 Processamento finalizado!`);
  console.log(`✅ Atualizados com texto do PDF: ${atualizados}`);
  console.log(`⚠️  Sem texto disponível:        ${semTexto}`);
  console.log(`❌ Erros:                        ${erros}`);
  console.log('======================================');
}

main();
