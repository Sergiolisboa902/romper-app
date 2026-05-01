---
tags: [projeto/diario]
---
# 📓 Diário de Bordo: Registro de Lições Aprendidas

## 30 de abril de 2026
Este registro documenta as lições aprendidas para garantir que o próximo ciclo de desenvolvimento seja livre dos obstáculos técnicos enfrentados.

### 🧠 O que aprendemos (Lições Técnicas)
1. **Gestão de Dependências no Git:** Jamais adicionar `node_modules` ao Git. O limite de 100MB do GitHub causa falhas de push. O uso rigoroso do `.gitignore` é obrigatório desde o primeiro comando.
2. **Ambiente de Build na Vercel:** Configurações de `type: commonjs` no `package.json` conflitam com o padrão ESM (ECMAScript Modules) do Next.js moderno na Vercel. A configuração deve permanecer padrão.
3. **Pipeline Obsidian-Supabase:** A abordagem "Content-as-Code" (Markdown -> Git -> Supabase) é extremamente eficiente, mas requer que a integridade referencial do banco (FKs) seja respeitada na ordem de inserção (Módulos antes de Aulas).
4. **Histórico do Git:** Limpar arquivos gigantes de commits passados exige o uso de ferramentas de reescrita de histórico; prevenir o envio é sempre mais barato que corrigir o passado.

### 🏗️ Estrutura que funciona
- **Stack:** Next.js (ESM), Supabase (PostgreSQL), Vanilla CSS.
- **Estrutura:** Mobile-first com foco em três pilares (Design, Conteúdo, Gamificação).
- **Protocolo de Deploy:** `.gitignore` > Git Commit > GitHub > Vercel (Configuração via Web).

### 🚀 Preparo para o Recomeço
... (conteúdo anterior mantido)

## 01 de maio de 2026
### 🛠️ Início da Fase Zero: Prototipagem de Alta Fidelidade
Decidimos inverter a ordem convencional e focar 100% na interface antes de tocar no código do framework ou backend.
- **Motivação:** Garantir que a "alma" do projeto (o design e a gamificação visual) esteja sólida e aprovada.
- **Abordagem:** Desenvolvimento de protótipos estáticos usando HTML5 e Vanilla CSS, testados via Live Server.
- **Status:** Arquitetura atualizada para "Nível Zero". Pronto para iniciar a primeira tela.

### 📝 Próximos Passos:
1. Criar estrutura da pasta `/prototype`. (Concluído)
2. Desenvolver o esqueleto HTML/CSS da Dashboard principal. (Concluído)
3. Criar a tela de lição interativa. (Concluído)
4. Refinar animações e interatividade no JS.

## 01 de maio de 2026 (Continuação)
### ✅ Entrega do Protótipo de Alta Fidelidade (v1.0)
Concluímos a estrutura base da interface visual conforme planejado no Nível Zero.
- **Implementado:**
    - `prototype/index.html`: Dashboard com trilha de aprendizado inspirada no Duolingo.
    - `prototype/lesson.html`: Estrutura de lição com lógica de feedback visual.
    - `prototype/css/style.css`: Design System inicial com paleta "Bíblia Viva".
    - `prototype/js/main.js`: Lógica básica de interação e navegação.
- **Destaques:** Trilha com nós ativos (pulsantes), concluídos e bloqueados; Navbar mobile-first; Sistema de cores consistente.

**Próximo Passo:** Revisar o protótipo com o Live Server e começar a planejar a transição para componentes Next.js.

## 01 de maio de 2026 (Refinamento)
### 🔄 Reformulação da Home: Hub de Conteúdo
Após feedback, transformamos a tela inicial em um Hub centralizado para facilitar o acesso aos quatro pilares do app.
- **Novas Seções Implementadas:**
    1. **Devocional:** Card destacado com o tema do dia.
    2. **Avanço:** Versão compacta da trilha com progresso da meta diária.
    3. **Comunidade:** Feed simplificado com atividades de células e amigos.
    4. **Notícias:** Slider com eventos e novidades da comunidade.
- **Interatividade:** Preparada a estrutura para alternância de conteúdo (futuramente via Tabs ou Scroll).

**Próximo Passo:** Adicionar a tela completa da "Trilha de Aprendizado" (Avanço) como uma página separada para manter o mapa estilo Duolingo acessível.

## 01 de maio de 2026 (Expansão)
### 📑 Sistema de Abas e Tela de Jornadas
... (mantido)
- **Ajuste de Navegação:** Removida a aba "Ligas" e movida a aba "Jornadas" para a segunda posição no menu inferior, simplificando o fluxo principal.

**Próximo Passo:** Implementar a tela de Perfil com estatísticas e conquistas.

## 01 de maio de 2026 (Consolidação de Fluxo)
### 🔄 Reorganização da Navegação Principal
Ajustamos o menu inferior para refletir as três áreas core do app para o aluno:
1. **Início (Hub):** Visão geral, devocional e comunidade.
2. **Trilha (Mapa):** A jornada que o aluno está cursando no momento (Mapa em zigzag).
3. **Jornadas (Catálogo):** Lista de todas as jornadas disponíveis para iniciar.

**Mudanças Técnicas:**
- O Mapa agora é uma aba fixa no menu inferior (`🗺️ Trilha`).
- Ao clicar em uma jornada no catálogo, o aluno é levado para a aba Trilha com o título atualizado.
- O link "Ir para o Mapa" no Hub agora redireciona corretamente para a segunda aba.

## 01 de maio de 2026 (Refinamento de UI)
### 📏 Menu Nivelado e Destaque Visual
Ajustamos o menu inferior para uma estética mais equilibrada e moderna, mantendo a hierarquia clara.
- **Nivelamento:** Todos os 5 ícones estão agora na mesma altura, eliminando o estilo FAB (elevado).
- **Marcação da Trilha:** A aba central (Trilha) possui uma marcação circular sutil e persistente, indicando que é a área principal.
- **Sistema de Destaque:** 
    - A aba selecionada agora muda para a cor dourada (`--accent-gold`).
    - Adicionado um ponto indicador acima do ícone ativo para reforçar a posição do usuário.
    - Quando a Trilha está ativa, o círculo de marcação preenche-se totalmente com a cor de destaque.
- **Consistência:** A lógica de abas foi unificada para tratar itens normais e o botão central da mesma forma.
- **Reforço de Marcação (Ajuste):** Intensificada a barra superior e o brilho da Trilha quando selecionada, garantindo visibilidade máxima.

**Próximo Passo:** Adicionar transições suaves de opacidade ao trocar de aba.

## 01 de maio de 2026 (Refinamento de Mapa)
### 🗺️ Implementação do Mapa da Jornada (Zigzag)
Criamos a tela de detalhe que exibe o progresso real do aluno dentro de uma jornada escolhida.
- **Visual:** Layout em zigzag (estilo Duolingo) com nós posicionados à esquerda, centro e direita.
- **Interatividade:**
    - Clicar em um card na aba "Jornadas" abre o mapa correspondente.
    - Clicar em "Ver Trilha" no Hub também leva ao mapa.
    - Adicionado botão de "Voltar" dentro do mapa para retornar à lista.
- **Novos Elementos UI:** "Banner de Unidade" (Verde) e "Popup de Começar" sobre o nó ativo.

**Próximo Passo:** Adicionar animações de transição entre as abas para melhorar a fluidez.

## 01 de maio de 2026 (Conteúdo)
### 📝 Início da Fase 0.2: Prototipagem de Conteúdo
Iniciamos a estruturação das jornadas no formato Markdown para Obsidian.
- **Material de Referência:** Recebido o arquivo `736134155-Panorama-Biblico-2024.pdf` na pasta de inspiração.
- **Estratégia:** O conteúdo será organizado hierarquicamente (Jornada > Seção > Trilha > Tema > Lição) com metadados YAML para futura automação com Supabase.
- **Versionamento:** Git inicializado e progresso do design salvo.

**Próximo Passo:** Analisar o PDF e gerar a estrutura de pastas da primeira jornada.
