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
