---
tags: [projeto/tecnico]
# 🏗️ Arquitetura do Projeto Romper

## 📍 Metodologia: Prototipagem em Camadas
O desenvolvimento do Romper segue um ciclo de validação progressiva antes da codificação final:

1.  **Fase 0.1 - Prototipagem Visual (Concluído):** Definição de UI/UX, Design System e navegação base (HTML/CSS).
2.  **Fase 0.2 - Prototipagem de Conteúdo (Concluído - Nível 1):** Estruturação dos 66 livros da Bíblia, curadoria de resumos e modelagem inicial no Supabase.
3.  **Fase 0.3 - Prototipagem de Gamificação (Concluído - Nível 1):** Implementação de regras de XP, Streaks e carregamento dinâmico de lições via Supabase.

---

## 🚀 Novo Marco: Motor de Conteúdo Escalável (07/05/2026)
Consolidamos a infraestrutura necessária para suportar jornadas massivas de estudo.

### 1. Sistema de Sincronização (Content-as-Code)
- **Script:** `sync-obsidian.js` refatorado para ser resiliente a schemas dinâmicos (Whitelist).
- **Mapeamento:** Hierarquia rígida `Jornada > Trilha > Tema > Lição` sincronizada automaticamente entre Obsidian e Supabase.
- **Identidade:** Geração automática de IDs únicos para lições baseados em nomenclatura de arquivos.

### 2. Interface Dinâmica e Contínua
- **Renderização:** O mapa em zigzag foi evoluído para carregar toda a jornada de forma contínua, eliminando a fragmentação por trilhas.
- **Banners de Divisão:** Inserção automática de marcadores visuais no mapa baseados nos metadados de trilha do banco.

### 3. Motor de Design Reativo (Lições)
- **Biblioteca de Templates:** O `LessonPlayer` atua como um orquestrador de layouts (`mentor`, `scribe`, `divine_voice`, `challenge`, `revelation`).
- **Arquitetura de Slots:** Cada template é um componente isolado que gerencia sua própria identidade espacial, permitindo evolução independente.
- **Narrativa Multi-Ator:** Suporte para troca dinâmica de personagens e expressões dentro do fluxo da lição, garantindo engajamento emocional.

---

## 1. Design (Identidade e Interface) - [Status: Validado]
Responsável pela materialização visual da marca e pela usabilidade.
- **Identidade Visual:** Sistema de cores, tipografia e iconografia.
- **Design System:** Biblioteca de componentes reutilizáveis.

## 2. Conteúdo de Estudo (O Coração) - [Status: Produção em Escala]
Responsável pela curadoria e entrega do conhecimento.
- **Arquitetura da Informação:** Organização em Trilhas, Temas e Lições.
- **Status Atual:** 66 resumos bíblicos ativos e interativos.

---

## 🛠️ Stack Tecnológica (Confirmada)
- **Frontend:** Next.js (ESM), Vanilla CSS (para preservação do design original).
- **Backend/DB:** Supabase (Auth, PostgreSQL, Storage).
- **Integração:** SDK Supabase + Custom Sync Script.

---
*Atualizado em 07 de maio de 2026: Conclusão da carga massiva e correção do mapa contínuo.*
