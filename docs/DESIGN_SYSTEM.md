# 🎨 Design System: Bíblia Viva

Este documento serve como guia mestre para a criação de conteúdo visual e evolução da interface do Projeto Romper.

## 👥 1. Guia de Personagens (Assets)

Para manter a consistência, todos os personagens devem ser exportados em **PNG Transparente** e organizados em:
`public/characters/[nome-do-personagem]/[mood].png`

### 🤖 Prompts para Copiar e Colar (DALL-E 3 / Midjourney)

#### Prompt Mestre (Estilo Visual)
> Crie um pack de sprites para o personagem [NOME DO PERSONAGEM]. Estilo: 2D Flat Illustration, amigável, premium mobile game, cores vibrantes com sombreamento suave (cel shading). Fundo: Transparente (PNG). O personagem deve estar centralizado e em alta resolução (1024x1024).

#### Prompts para Expressões (Moods)
Copie o prompt abaixo para cada arquivo necessário, substituindo o mood:

*   **padrao.png:** `[Prompt Mestre] + Postura neutra, olhando para frente, braços ao lado do corpo.`
*   **explicando.png:** `[Prompt Mestre] + Personagem gesticulando com as mãos como se estivesse apresentando uma ideia ou ensinando.`
*   **pensativo.png:** `[Prompt Mestre] + Mão no queixo, olhar lateral para cima, expressão de dúvida ou reflexão.`
*   **orando.png:** `[Prompt Mestre] + Olhos fechados, mãos postas em oração, expressão de profunda paz e reverência.`
*   **animado.png:** `[Prompt Mestre] + Braços abertos, sorriso largo, expressão de grande alegria e celebração.`

### Padrão de Nomenclatura de Moods:

- `padrao`: Postura neutra (usado como fallback).
- `explicando`: Gesticulando com as mãos (Ideal para `scribe`).
- `pensativo`: Mão no queixo ou olhar lateral (Ideal para `challenge`).
- `orando`: Olhos fechados e mãos postas (Ideal para `divine_voice`).
- `animado`: Expressão de celebração (Ideal para `revelation`).

---

## 🖼️ 2. Biblioteca de Templates (Layouts)

Cada template define uma "personalidade espacial" para a lição.

### `mentor` (MentorTemplate)
- **Visual:** Narrador no centro, balão em cima.
- **Uso:** Instruções claras e diretas.

### `scribe` (ScribeTemplate)
- **Visual:** Split lateral (Personagem esquerda, Texto direita).
- **Uso:** Diálogos, cartas e curiosidades.

### `divine_voice` (DivineVoiceTemplate)
- **Visual:** Narrador pequeno no topo, Card central gigante.
- **Uso:** Versículos bíblicos e Palavra de Deus.

### `challenge` (ChallengeTemplate)
- **Visual:** Narrador embaixo-direita, Opções na esquerda.
- **Uso:** Perguntas e interações.

### `revelation` (RevelationTemplate)
- **Visual:** Narrador gigante e translúcido ao fundo, Texto central puro.
- **Uso:** Conclusões e mensagens épicas.

---

## 📝 3. Sintaxe Obsidian (Fonte da Verdade)

Para usar personagens e templates específicos no Obsidian:

```markdown
[ESTÍMULO:TIPO]
TEMPLATE: scribe
CHARACTER: noe
MOOD: explicando
Aqui vai o texto...
```

*Nota: Se `CHARACTER` for omitido, o sistema usará o narrador padrão definido no arquivo do Tema.*
