const fs = require('fs');

const text = fs.readFileSync('scripts/extracao_maio.txt', 'utf8');
const lines = text.split('\n');

// Localizar Maio (Linha 12149) até Junho (Linha 15200 aprox)
const maioContent = lines.slice(12148, 15200).join('\n');

fs.writeFileSync('scripts/maio_bruto.txt', maioContent);
console.log('✅ Arquivo maio_bruto.txt criado com sucesso.');
