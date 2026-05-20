const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function processImage() {
    const inputPath = 'public/characters/moises/ChatGPT Image 13 de mai. de 2026, 20_44_35.png';
    const outputDir = 'public/characters/moises';
    
    console.log('📖 Lendo imagem com fundo preto...');
    const image = await Jimp.read(inputPath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    const colWidth = Math.floor(width / 3);
    const rowHeight = Math.floor(height / 2);
    
    const moods = [
        { name: 'padrao.png', x: 0, y: 0 },
        { name: 'explicando.png', x: colWidth, y: 0 },
        { name: 'orando.png', x: colWidth * 2, y: 0 },
        { name: 'bravo.png', x: 0, y: rowHeight },
        { name: 'tabuas.png', x: colWidth, y: rowHeight },
        { name: 'brilhante.png', x: colWidth * 2, y: rowHeight }
    ];

    for (const mood of moods) {
        console.log(`✂️  Recortando ${mood.name}...`);
        
        const cropped = image.clone().crop({ x: mood.x, y: mood.y, w: colWidth, h: rowHeight });
        
        // Remoção de Fundo PRETO (Black-to-Transparent)
        cropped.scan(0, 0, cropped.bitmap.width, cropped.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            const brightness = (r + g + b) / 3;

            // Se for muito escuro (preto puro ou quase), fica transparente
            if (brightness < 15) {
                this.bitmap.data[idx + 3] = 0;
            } 
            // Se for fumaça/sombra escura (franja), aplica transparência suave
            else if (brightness < 50) {
                const alpha = Math.floor((brightness / 50) * 255);
                this.bitmap.data[idx + 3] = Math.min(this.bitmap.data[idx + 3], alpha);
            }
        });

        cropped.autocrop();

        const outputPath = path.join(outputDir, mood.name);
        await cropped.write(outputPath);
        console.log(`✅ Salvo: ${outputPath}`);
    }

    console.log('✨ Todas as expressões do Moisés foram processadas!');
}

processImage().catch(console.error);
