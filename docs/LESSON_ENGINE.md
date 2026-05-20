# 📖 Guia do Motor de Lições (Lesson Engine)

Este documento é o manual oficial para a criação de lições no Projeto Romper. Ele detalha como a interface reage ao conteúdo escrito no Obsidian.

---

## 1. Estrutura do Arquivo (.md)

Cada lição deve residir em `content/jornadas/` e seguir este formato de metadados:

```markdown
---
titulo: Introdução a Gênesis
jornada: panorama-biblico
trilha: pentateuco
tema: genesis
ordem: 1
xp: 20
---

# Título de Exibição
[CONTEÚDO DA LIÇÃO AQUI]
```

---

## 🖼️ 2. Biblioteca de Templates (Layouts)

Os templates definem como o narrador e o texto se posicionam na tela. Você pode trocar o template em qualquer bloco da lição.

| Template | Nome Técnico | Visual | Melhor Uso |
|---|---|---|---|
| **O Mentor** | `mentor` | Narrador no centro, Balão no topo. | Instruções diretas e boas-vindas. |
| **O Escriba** | `scribe` | Narrador na esquerda, Texto na direita. | Narrativas, diálogos e curiosidades. |
| **A Voz Divina** | `divine_voice` | Personagem no topo (avatar), Card central. | Versículos bíblicos e Palavra de Deus. |
| **O Desafio** | `challenge` | Opções na esquerda, Narrador embaixo-direita. | Perguntas de múltipla escolha. |
| **A Revelação** | `revelation` | Narrador gigante ao fundo, Texto central. | Conclusões e mensagens espirituais. |
| **A Citação** | `quote` | Card central com aspas, Narrador pequeno. | Citações de autores ou reflexões curtas. |
| **O Orador** | `speaker` | Balão no topo, Narrador no centro, Slots extras. | Dicas rápidas durante exercícios. |

---

## 🎭 3. Sistema de Moods (Expressões)

O narrador muda de expressão instantaneamente com base na tag `MOOD`.

**Moods Padrão (Suportados por todos):**
- `padrao`: Postura neutra e serena.
- `feliz`: Sorriso e braços abertos.
- `triste`: Expressão de lamento ou compaixão.
- `orando`: Olhos fechados e mãos postas.
- `explicando`: Gesticulando com as mãos (ensino).

**Moods de Sistema (Feedback Automático):**
- `acerto`: Reação rápida de celebração.
- `erro`: Reação de dúvida ou "tente novamente".
- `fim`: Pose de finalização da lição.

---

## 📝 4. Sintaxe de Conteúdo (Tags)

O motor de lições processa o texto baseado em blocos delimitados por tags:

### Bloco de Ensino (Estímulo)
Usado para passar informação. O usuário apenas lê e clica em "Continuar".
```markdown
[ESTÍMULO:ENSINO]
TEMPLATE: scribe
CHARACTER: moises
MOOD: explicando
Gênesis significa 'Origem'. É aqui que tudo começa!
```

### Bloco de Versículo
Destaque especial para a Palavra de Deus.
```markdown
[ESTÍMULO:VERSICULO]
TEMPLATE: divine_voice
MOOD: orando
TEXTO: No princípio, criou Deus os céus e a terra.
REFERENCIA: Gênesis 1:1
```

### Bloco de Pergunta (Desafio)
Exige interação do usuário. Perda de vida em caso de erro.
```markdown
[PERGUNTA:MULTIPLA_ESCOLHA]
TEMPLATE: challenge
MOOD: pensativo
Pergunta: Quem construiu a Arca?
- Moisés
- Noé (CORRETA)
- Abraão
```

---

## ⚙️ 5. Lógica de Funcionamento da Tela

1.  **Troca de Personagem:** Se você usar `CHARACTER: nome` em um bloco, o narrador muda apenas naquela etapa. Se omitir, o sistema usa o narrador padrão do Livro (Tema).
2.  **Barra de Progresso:** A barra no topo é dividida automaticamente pelo número de blocos (`[...]`) definidos no arquivo.
3.  **Vidas (Hearts):** Se o usuário errar uma pergunta, o personagem faz o mood `erro` e um coração é deduzido. Com 0 vidas, a lição é interrompida.
4.  **Checkpoints:** O progresso é salvo a cada clique em "Continuar". Se o app fechar, o usuário volta de onde parou.
5.  **Finalização:** Ao chegar no último bloco, o sistema dispara o confete e soma o XP definido no topo do arquivo ao perfil do usuário.

---
*Dica de Ouro: Sempre alterne os templates entre um bloco e outro para manter a tela "viva" e o usuário engajado!*
