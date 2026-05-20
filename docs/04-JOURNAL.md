---
tags: [projeto/diario]
---
# 📓 Diário de Bordo: Projeto Romper

Este documento registra as decisões técnicas, avanços e bloqueios do projeto.

## 07 de maio de 2026
### 🛠️ Marco: Carga Completa dos 66 Livros e Mapa Contínuo
Como Engenheiro de Software e Conteúdo, finalizamos a fundação pedagógica e técnica do MVP.

- **Resolução Técnica e Saneamento:**
    - **Cleanup de Dados:** Removidas lições órfãs de testes anteriores. A tabela `lessons` agora possui exatamente 66 registros (um resumo por livro).
    - **Mapa em Zigzag Contínuo:** Refatorada a lógica no `main.js` para renderizar todas as trilhas da jornada de forma fluida, eliminando a limitação de exibição única.
    - **Ordenação Hierárquica:** Implementada lógica de ordenação `Trilha > Tema > Lição`, garantindo a sequência bíblica correta na interface.

- **Consolidação de Conteúdo:**
    - **Densidade Pedagógica:** Todos os 66 livros foram atualizados com resumos oficiais do PDF (3 estímulos de texto e 2 perguntas por lição).
    - **Sincronização Automatizada:** O script `sync-obsidian.js` foi corrigido com uma whitelist de schema e está 100% funcional.

- **Estado Atual:** Protótipo funcional com carga real de dados. Pronto para transição.

## 08 de maio de 2026
### 🚀 Marco: Migração para Next.js e Núcleo Funcional do App
Finalizamos a transição do protótipo estático para uma aplicação web moderna e escalável.

- **Migração Arquitetural:**
    - **Framework:** Next.js 14 (App Router) com TypeScript e ESM.
    - **Navegação SPA:** Implementada navegação por abas dinâmicas (Home, Mapa, Jornadas, Bíblia, Devocional) sem recarregamento de página.
    - **Componentização:** O Mapa em Zigzag e o Motor de Lições foram totalmente reescritos como componentes React funcionais e reativos.

- **Integração e Sincronização:**
    - **Supabase Real-time:** O app agora consome dados diretamente do banco de dados para renderizar o mapa e salvar o progresso das lições.
    - **Correção de Esquema:** Identificada e corrigida a ausência da coluna `current_journey_id` na tabela `user_stats`, permitindo a seleção persistente de cursos.
    - **Checkpoints:** Implementada lógica de salvamento de progresso durante as lições, permitindo retomada e ganho de XP automático.

- **Estado Atual:** Aplicação Next.js funcional com fluxo completo validado (Seleção -> Mapa -> Lição -> XP).

## 11 de maio de 2026
### 📱 Marco: Mobile PWA e Sprites de Personagem
Foco na experiência móvel no iOS e preparação de ativos visuais para narradores dinâmicos.

- **PWA e Mobile Setup:**
    - **iOS Web App:** Configuração de manifest e metadados para funcionamento "Standalone" no Safari.
    - **Automação de Ícones:** Integração do `pwa-asset-generator`. Agora, o comando `npm run icons` gera todos os ícones e Splash Screens necessários para iPhone/iPad a partir da logo original.

- **Processamento de Personagens:**
    - **Paulo (Spritesheet):** A imagem composta do Apóstolo Paulo foi recortada em 10 expressões individuais (feliz, orando, lendo, pensativo, escrevendo, etc.) e salva em `public/characters/paulo/`.
    - **Sistema de Emoções:** Validada arquitetura JSONB para narradores com expressões reativas (alegria, alerta, reverencia).

- **Estado Atual:** Projeto consolidado em estado estável. PWA configurado. Ativos de imagem do Paulo prontos para futura integração na UI.

## 12 de maio de 2026
### 🎨 Marco: HomeScreen (Hub) e Biblioteca de Templates Reativos
... (conteúdo anterior) ...

## 13 de maio de 2026
### 🎭 Marco: Personagens 2.0 e Refinamento de UX
Dia marcado pela evolução da infraestrutura de personagens e correção de bugs críticos de interface.

- **Moisés & Noé (Mestres):** 
    - Criação de fichas técnicas detalhadas incluindo **Aparência Física** para consistência em IA.
    - Moisés assumiu como narrador padrão de todo o **Pentateuco**.
    - Processamento de sprites com técnica "Black-to-Transparent" para contornos perfeitos.
- **Infraestrutura Online:**
    - Transição completa para o **Supabase Storage**.
    - Componente `Narrator` agora é híbrido (Local/Storage).
    - Criada a tabela `characters` para alimentar a futura rede social dos heróis bíblicos.
- **Refinamento do LessonPlayer:**
    - **UX:** Feedback de acerto/erro agora perfeitamente centralizado na base.
    - **Lógica:** Barra de progresso corrigida para ser 100% fiel ao número de blocos.
    - **Sessão:** Botão "Reiniciar" agora limpa o progresso local e remoto corretamente.
- **Documentação de Elite:**
    - Criado o `LESSON_ENGINE.md` detalhando cada template e mood para autores de conteúdo.

- **Estado Atual:** O projeto atingiu maturidade visual e técnica para o MVP. O caminho para a "Rede Social Bíblica" está pavimentado e as lições iniciais estão com qualidade profissional.

## 15 de maio de 2026
### 🎨 Marco: Experiência Premium e Identidade Visual da Trilha
Dia focado na evolução estética da trilha de aprendizado e polimento de UX para o estado "Pronto para Produção".

- **Refatoração da Trilha (Mapa):**
    - **Stacked Sticky Headers:** Implementada lógica de cabeçalhos empilhados. O título da Jornada fica fixo no topo (Premium Gold), e o título da Trilha assume um comportamento `sticky` mudando conforme a rolagem.
    - **Cores Dinâmicas:** Cada trilha agora possui uma cor vibrante única que se aplica tanto ao seu cabeçalho quanto aos botões de lição nela contidos.
    - **Zigzag Agressivo:** Aumentada a amplitude lateral do caminho utilizando `translateX`, proporcionando uma percepção de "estrada" muito mais clara.
    - **Nodes Inteligentes:** Lições bloqueadas agora são renderizadas em cinza sólido, destacando apenas o caminho percorrido e o próximo passo (Estrela com animação de pulso).

- **Otimização de UX & Performance:**
    - **Skeleton Screens:** Implementados estados de carregamento pulsantes tanto no Mapa quanto no Motor de Lições, eliminando o texto estático e melhorando a percepção de velocidade.
    - **Lógica de Progresso:** Removida a restrição de vidas para fase de testes e implementado o bloqueio de avanço em caso de erro (usuário deve acertar para progredir).
    - **Correção Visual:** Ajustado o `ScribeTemplate` com seta lateral alinhada à boca do personagem e corrigida a sobreposição (z-index) da trilha sob o cabeçalho.

- **Identidade Visual:**
    - **Logo Oficial:** Substituído o logotipo textual/emoji por imagem oficial (`logo.png`) no cabeçalho com alinhamento refinado.

- **Estado Atual:** O aplicativo atingiu um nível de polimento visual comparável aos grandes players do mercado (ex: Duolingo). A navegação é imersiva, rápida e intuitiva.

## 20 de maio de 2026
### 🗓️ Marco: Saneamento e Carga Fiel dos Devocionais (Junho)
Dia dedicado à garantia de integridade do conteúdo devocional e padronização do banco de dados.

- **Integridade de Dados e Saneamento:**
    - **Carga de Junho:** Concluído o upload de 30 dias de devocionais (01 a 30 de Junho), totalizando 120 novos registros (Manhã/Noite e Original/Simples).
    - **Esquema de Dados:** Padronizado o uso de colunas `periodo` e `versao` em vez de colunas JSONB aninhadas, permitindo queries mais eficientes e flexibilidade na interface.
    - **Correção de ID:** Implementada lógica de `id` baseada na data (`YYYY-MM-DD`) para facilitar a busca e evitar duplicidade.

- **Sincronização com o Ecossistema:**
    - **Obsidian Sync:** Gerados arquivos Markdown para todos os dias de Junho em `content/Devocionais/2026/06-Junho`, mantendo a base de conhecimento local atualizada.
    - **Automação:** Criação e execução de scripts de lote (`upload-junho-batch0` a `batch3`) para processamento massivo de texto bruto para JSON estruturado.

- **Estado Atual:** Base devocional de Junho totalmente operacional no banco de dados e sincronizada localmente. Pronto para a implementação da interface de leitura diária.

---
*Assinado: Equipe Romper*
