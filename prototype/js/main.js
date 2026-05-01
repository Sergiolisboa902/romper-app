document.addEventListener('DOMContentLoaded', () => {
    console.log('Romper Prototype Loaded');

    // Lógica de Troca de Abas
    const navItems = document.querySelectorAll('.nav-item[data-tab], .btn-back[data-tab], .see-all[data-tab], .nav-main-btn[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    const journeyCards = document.querySelectorAll('.journey-card.clickable');

    function switchTab(targetTabId) {
        tabContents.forEach(tab => {
            tab.classList.remove('active');
            if (tab.id === targetTabId) {
                tab.classList.add('active');
            }
        });

        // Atualiza estado visual do menu (itens normais e botão principal)
        document.querySelectorAll('.nav-item, .nav-main-btn').forEach(i => i.classList.remove('active'));
        
        const activeNav = document.querySelector(`[data-tab="${targetTabId}"]`);
        if (activeNav) activeNav.classList.add('active');
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = item.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Abrir Mapa da Jornada ao clicar no Card do Catálogo
    journeyCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            document.getElementById('current-journey-name').textContent = title;
            switchTab('map-screen');
        });
    });

    // Link 'Ver Trilha' no Hub
    const seeAllLink = document.querySelector('.see-all');
    if (seeAllLink) {
        seeAllLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('map-screen');
        });
    }

    // Lógica simples para a tela de lição (se estiver nela)
    const options = document.querySelectorAll('.option-card');
    const feedback = document.querySelector('.feedback-container');
    const continueBtn = document.querySelector('.btn-primary');

    if (options.length > 0) {
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Remove seleções anteriores
                options.forEach(o => o.classList.remove('selected', 'correct', 'wrong'));
                
                // Marca como selecionada
                option.classList.add('selected');

                // Simulação de verificação (Saul é a resposta correta no exemplo)
                const isCorrect = option.dataset.answer === 'correct';
                
                // Mostrar feedback após um pequeno delay ou imediatamente
                setTimeout(() => {
                    if (isCorrect) {
                        option.classList.remove('selected');
                        option.classList.add('correct');
                        showFeedback('Correto!', 'Saul foi ungido rei por Samuel, tornando-se o primeiro rei de Israel. (1 Samuel 10)', 'correct');
                    } else {
                        option.classList.remove('selected');
                        option.classList.add('wrong');
                        // Poderia mostrar feedback de erro aqui
                    }
                }, 100);
            });
        });
    }

    function showFeedback(title, text, type) {
        if (feedback) {
            feedback.classList.add('show', type);
            feedback.querySelector('.feedback-header span:last-child').textContent = title;
            feedback.querySelector('.feedback-text').textContent = text;
        }
    }

    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            if (feedback && feedback.classList.contains('show')) {
                // No protótipo, apenas volta para a home ao concluir
                window.location.href = 'index.html';
            } else {
                alert('Selecione uma resposta primeiro!');
            }
        });
    }
});
