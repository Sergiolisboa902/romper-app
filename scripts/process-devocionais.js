require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { PDFParse } = require('pdf-parse'); 

async function extractText(filePath) {
    try {
        console.log(`📄 Lendo arquivo: ${filePath}`);
        const dataBuffer = fs.readFileSync(filePath);
        
        // Instanciar o parser com o buffer
        const parser = new PDFParse({ data: dataBuffer });
        
        // Obter o texto
        const result = await parser.getText();
        
        console.log('✅ Texto extraído com sucesso.');
        
        // Salvar em um arquivo de texto para análise
        const output = `scripts/extracao_maio.txt`;
        fs.writeFileSync(output, result.text);
        
        console.log(`\n📝 Texto salvo em '${output}'.`);
        
        // Limpar memória
        await parser.destroy();
        
    } catch (error) {
        console.error('❌ Erro:', error.message);
    }
}

const file = process.argv[2];
if (!file) {
    console.log('Uso: node scripts/process-devocionais.js <caminho_do_pdf>');
} else {
    extractText(file);
}
