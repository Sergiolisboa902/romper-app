---
tags: [projeto/tecnico]
# 🏗️ Arquitetura do Projeto Romper

## 📍 Metodologia: Prototipagem em Camadas
O desenvolvimento do Romper segue um ciclo de validação progressiva antes da codificação final:

1.  **Fase 0.1 - Prototipagem Visual (Concluído):** Definição de UI/UX, Design System e navegação base (HTML/CSS).
2.  **Fase 0.2 - Prototipagem de Conteúdo (Em Andamento):** Estruturação de dados, curadoria de lições, formatação de devocionais e modelagem da Bíblia.
3.  **Fase 0.3 - Prototipagem de Gamificação:** Definição de regras de XP, Streaks, Ligas e feedbacks de progresso.

---

## 1. Design (Identidade e Interface) - [Status: Validado]
... (restante do conteúdo mantido)
Responsável pela materialização visual da marca e pela usabilidade.
- **Identidade Visual:** Sistema de cores, tipografia e iconografia (foco em modernidade e autoridade bíblica).
- **Design System:** Biblioteca de componentes reutilizáveis (UI Kit) para consistência entre Web e futuros apps.
- **Interface (UI):** Prototipagem das telas core (Dashboard, Player, Mapa da Bíblia).

## 2. Conteúdo de Estudo (O Coração)
Responsável pela curadoria e entrega do conhecimento.
- **Arquitetura da Informação:** Organização em Trilhas, Cursos, Módulos e Aulas.
- **CMS (Gestão de Conteúdo):** Estrutura de dados para cadastro de vídeos, textos complementares e quizzes.
- **Padronização:** Formato obrigatório por aula (vídeo + texto + quiz + reflexão).

## 3. Experiência do Usuário e Gamificação (A Retenção)
Responsável por transformar o aprendizado em um hábito constante.
- **Jornada do Usuário (UX):** Fluxo de onboarding e retenção (ciclos de estudo).
- **Motor de Gamificação:** Lógica de XP, níveis, streaks (sequências), medalhas e desbloqueios visuais.
- **Feedback:** Sistema de notificações e dashboards de progresso.

---

## Estrutura Técnica
- **Banco de Dados:** Lógica de desbloqueio progressivo e progresso do usuário.
- **Integração:** Os pilares comunicam-se via API, onde o Conteúdo provê os dados, o Design define a exibição e a Gamificação gerencia o estado de progresso.

---

## 🚀 Plano de Transição: Protótipo para Produção
Para garantir que o trabalho da Fase Zero não seja perdido, a migração seguirá o seguinte protocolo técnico:

### 1. Migração Visual (Blueprint Técnico)
- **HTML para JSX:** As estruturas semânticas do protótipo serão transformadas em componentes React (`src/components`).
- **CSS Vanilla para Global/Modules:** O arquivo `style.css` será mantido como a fundação visual do projeto, garantindo fidelidade de 100% ao design aprovado.
- **Roteamento:** A lógica de abas do `main.js` será substituída pelo `next/navigation` (App Router).

### 2. Dinamização de Dados
- **Conteúdo:** Textos estáticos (Devocionais, Lições, Livros da Bíblia) serão movidos para tabelas no Supabase.
- **Estado do Usuário:** O progresso (streaks, XP, lições concluídas) será gerenciado via Supabase Auth e PostgreSQL.

### 3. Workflow de Deploy
- **Repositório:** O código migrado será mantido em um novo repositório limpo, respeitando o `.gitignore`.
- **Pipeline CI/CD:** Conexão GitHub -> Vercel para deploys automáticos a cada commit.

---
*Última atualização: 01 de maio de 2026 - Estratégia de Transição validada.*
