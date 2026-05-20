const fs = require('fs');
const text = fs.readFileSync('scripts/extracao_maio.txt', 'utf8');
const lines = text.split('\n');

// Início aproximado de Junho: 15230
// Fim aproximado de Junho: 18205
const junhoContent = lines.slice(15230, 18205).join('\n');

fs.writeFileSync('scripts/junho_bruto.txt', junhoContent);
console.log('✅ Arquivo junho_bruto.txt criado com sucesso.');
