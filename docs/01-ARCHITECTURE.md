---
tags: [projeto/tecnico]
---
# 🏗️ Arquitetura do Projeto Romper

## 📍 Nível Zero: Prototipagem Visual (Fase Atual)
Antes da implementação do framework (Next.js), o projeto inicia na Fase Zero para garantir a excelência da Experiência do Usuário (UX) e a fidelidade da Interface (UI).
- **Objetivo:** Validar o fluxo de navegação e o "look and feel" usando HTML/CSS estático.
- **Ferramenta de Visualização:** Live Server.
- **Entregáveis:** Protótipos das telas core (Dashboard, Player de Vídeo, Mapa da Bíblia).

## 1. Design (Identidade e Interface)
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
