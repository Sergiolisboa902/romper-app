/**
 * ContentParser.js
 * Utilitário para converter o formato Markdown/Obsidian do Romper em dados para a UI.
 */
export const ContentParser = {
    /**
     * Carrega um arquivo MD e retorna um objeto estruturado
     */
    async loadLesson(path) {
        try {
            const response = await fetch(path);
            const text = await response.text();
            return this.parse(text);
        } catch (error) {
            console.error('Erro ao carregar lição:', error);
            return null;
        }
    },

    /**
     * Faz o parse do texto bruto do Markdown
     */
    parse(rawText) {
        const result = {
            metadata: {},
            blocks: []
        };

        // 1. Extrair Frontmatter (YAML-like)
        const frontmatterMatch = rawText.match(/^---\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
            const lines = frontmatterMatch[1].split('\n');
            lines.forEach(line => {
                const [key, ...val] = line.split(':');
                if (key) result.metadata[key.trim()] = val.join(':').trim().replace(/['"]/g, '');
            });
        }

        // 2. Extrair Blocos [TIPO]
        // Remove o frontmatter para focar no conteúdo
        const body = rawText.replace(/^---\n[\s\S]*?\n---/, '');
        
        // Regex para encontrar blocos como [TEXTO], [VERSICULO], [PERGUNTA:TIPO]
        const blockRegex = /\[([A-Z:]+)\]\n([\s\S]*?)(?=\n\[|$)/g;
        let match;

        while ((match = blockRegex.exec(body)) !== null) {
            const tag = match[1];
            const content = match[2].trim();
            
            const block = {
                type: tag.split(':')[0],
                subType: tag.split(':')[1] || null,
                content: this.parseBlockContent(content, tag)
            };
            
            result.blocks.push(block);
        }

        return result;
    },

    /**
     * Trata o conteúdo interno de cada bloco
     */
    parseBlockContent(text, tag) {
        if (tag.includes('PERGUNTA:MULTIPLA_ESCOLHA')) {
            const lines = text.split('\n');
            const question = lines[0].replace('Pergunta:', '').trim();
            const options = lines.slice(1).map(l => {
                return {
                    text: l.replace('- ', '').replace('(CORRETA)', '').trim(),
                    correct: l.includes('(CORRETA)')
                };
            });
            return { question, options };
        }

        if (tag === 'VERSICULO') {
            const parts = text.split('\n');
            const data = {};
            parts.forEach(p => {
                const [k, ...v] = p.split(':');
                if (k) data[k.trim().toLowerCase()] = v.join(':').trim();
            });
            return data;
        }

        if (tag === 'VERDADEIRO_FALSO') {
            const parts = text.split('\n');
            const data = {};
            parts.forEach(p => {
                const [k, ...v] = p.split(':');
                if (k) data[k.trim().toLowerCase()] = v.join(':').trim();
            });
            return data;
        }

        return text; // Texto simples ou Markdown básico
    }
};
