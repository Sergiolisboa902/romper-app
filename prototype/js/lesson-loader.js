import { ContentParser } from './content-parser.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Iniciando carregamento da lição...');
    const container = document.getElementById('exercise-render');
    
    // Caminho relativo a partir de /prototype/lesson.html
    const lessonPath = '../content/jornadas/panorama-biblico/01-antigo-testamento/01-pentateuco/01-genesis/01-a-criacao.md';
    
    console.log('Buscando arquivo em:', lessonPath);
    const lessonData = await ContentParser.loadLesson(lessonPath);
    
    if (!lessonData || lessonData.blocks.length === 0) {
        console.error('Falha ao processar dados da lição:', lessonData);
        document.querySelector('.question').textContent = 'Erro ao carregar o arquivo Markdown. Verifique o console (F12).';
        return;
    }

    console.log('Lição carregada com sucesso:', lessonData.metadata.titulo);

    // Lógica de "Playlist" de blocos (para o protótipo, mostraremos um de cada vez ou todos em sequência)
    // Vamos focar em renderizar o primeiro bloco de pergunta encontrado como exemplo
    const firstQuestion = lessonData.blocks.find(b => b.type === 'PERGUNTA');

    if (firstQuestion) {
        renderQuestion(firstQuestion);
    }

    function renderQuestion(block) {
        headerTitle.textContent = block.subType.replace('_', ' ');
        questionText.textContent = block.content.question;
        
        optionsList.innerHTML = '';
        block.content.options.forEach((opt, index) => {
            const char = String.fromCharCode(65 + index);
            const card = document.createElement('div');
            card.className = 'option-card';
            card.dataset.answer = opt.correct ? 'correct' : 'wrong';
            card.innerHTML = `
                <div class="option-badge">${char}</div>
                <span class="option-text">${opt.text}</span>
            `;
            
            card.addEventListener('click', () => handleSelection(card, block));
            optionsList.appendChild(card);
        });
    }

    function handleSelection(card, block) {
        document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected', 'correct', 'wrong'));
        card.classList.add('selected');

        const isCorrect = card.dataset.answer === 'correct';
        const feedback = document.querySelector('.feedback-container');

        setTimeout(() => {
            if (isCorrect) {
                card.classList.replace('selected', 'correct');
                feedback.classList.add('show', 'correct');
                feedback.querySelector('.feedback-text').textContent = "Excelente! Você está dominando a Criação.";
            } else {
                card.classList.replace('selected', 'wrong');
            }
        }, 200);
    }
});
