# 📖 App de Estudo Bíblico — Instruções de Sistema (Inspirado no Duolingo)

## Visão Geral

Criar um aplicativo de estudo bíblico gamificado, inspirado na mecânica e nas telas do Duolingo. O objetivo é tornar o estudo da Bíblia consistente, progressivo e motivador, usando elementos de jogos como pontos, sequências diárias, ligas e recompensas.

---

## 🗺️ Estrutura de Telas

### 1. Tela de Onboarding
- Apresentação do app com animações simples
- Perguntas iniciais para personalizar a experiência:
  - "Qual é seu objetivo?" (ex: ler a Bíblia toda, estudar um livro específico, aprender sobre personagens bíblicos)
  - "Quanto tempo por dia você quer dedicar?" (5min / 10min / 15min / 20min+)
  - "Qual é seu nível de conhecimento bíblico?" (Iniciante / Intermediário / Avançado)
- Com base nas respostas, o app monta um plano de estudos personalizado

---

### 2. Tela Inicial (Home)
- **Trilha de Aprendizado** visual, em formato de caminho/mapa
- Cada ponto da trilha representa uma **Unidade** (ex: "Criação", "Êxodo", "Vida de Jesus")
- Dentro de cada unidade há várias **Lições** desbloqueadas progressivamente
- Indicadores visíveis de:
  - XP do dia
  - Streak (sequência de dias consecutivos)
  - Vidas restantes
  - Meta diária (anel de progresso)

---

### 3. Tela de Lição
Cada lição contém entre 10 a 15 exercícios variados. Tipos de exercícios possíveis:

#### Tipos de Exercícios
| Tipo | Descrição |
|------|-----------|
| **Múltipla Escolha** | "Quem foi o primeiro rei de Israel?" com 4 opções |
| **Completar Versículo** | "No princípio, Deus criou os ___" |
| **Associação de Pares** | Ligar personagem ao livro bíblico correspondente |
| **Ordenar Versículo** | Reorganizar palavras embaralhadas de um versículo |
| **Verdadeiro ou Falso** | Afirmação sobre a Bíblia para o usuário julgar |
| **Digitação Livre** | Digitar o versículo correto após ouvir o áudio |
| **Escuta e Resposta** | Ouvir versículo narrado e responder sobre o conteúdo |

#### Mecânicas da Lição
- Barra de progresso no topo mostrando avanço na lição
- Feedback imediato: ✅ correto (verde) / ❌ errado (vermelho) com explicação
- Perda de vida ao errar (padrão: 5 vidas por sessão)
- XP ganho ao completar (varia por dificuldade)
- Animação de celebração ao concluir a lição

---

### 4. Tela de Perfil
- Avatar do usuário (personalizável)
- Nome e estatísticas principais:
  - 🔥 Streak atual (dias consecutivos)
  - ⭐ XP total acumulado
  - 📚 Lições completadas
  - 🏆 Conquistas desbloqueadas
- Gráfico semanal de atividade
- Botão de compartilhar progresso

---

### 5. Sistema de Ligas
- Usuários agrupados em ligas semanais por XP
- Divisões progressivas:
  - 🪨 Pedra
  - 🥉 Bronze
  - 🥈 Prata
  - 🥇 Ouro
  - 💎 Diamante
  - ✨ Mestre Bíblico
- Top 10 da liga sobem de divisão; últimos 5 descem
- Ranking em tempo real com XP acumulado na semana
- Recompensas ao subir de liga (cristais, itens especiais)

---

### 6. Tela de Conquistas
- Badges desbloqueáveis por marcos atingidos, por exemplo:
  - "Primeira Lição Completa"
  - "7 Dias Seguidos"
  - "Conhecedor do Antigo Testamento"
  - "Memorizou 10 Versículos"
  - "Completou o Livro de João"
- Conquistas bloqueadas aparecem como silhuetas para motivar

---

### 7. Loja (Cristais)
- Moeda interna chamada **Cristais** (💎) ou **Talentos** (referência bíblica)
- Formas de ganhar: completar lições, sequências, desafios
- O que comprar:
  - ❤️ Vidas extras
  - 🛡️ Proteção de streak (mantém o streak mesmo sem estudar 1 dia)
  - 🎨 Temas visuais para o app
  - 🧩 Desafios especiais (ex: Quiz dos Profetas)

---

### 8. Missões e Desafios
- **Missões Diárias** (renovam todo dia):
  - "Complete 1 lição hoje" → +10 XP
  - "Acerte 5 exercícios seguidos" → +15 XP
  - "Estude por 10 minutos" → +20 XP
- **Desafios Semanais**:
  - "Complete 5 lições esta semana"
  - "Conquiste 200 XP"
- **Missões Especiais** (datas comemorativas):
  - Semana Santa, Natal, Pentecostes, etc.

---

### 9. Plano de Leitura (Opcional)
- Planos de leitura bíblica integrados ao sistema de gamificação
- Exemplos de planos:
  - "Bíblia em 1 Ano"
  - "Novo Testamento em 90 dias"
  - "Salmos e Provérbios em 30 dias"
- Marcador de progresso visual
- Notificação diária lembrando da leitura

---

## 🎮 Sistema de Gamificação

### XP (Pontos de Experiência)
| Ação | XP Ganho |
|------|----------|
| Completar lição fácil | +10 XP |
| Completar lição média | +20 XP |
| Completar lição difícil | +30 XP |
| Completar sem errar | +50 XP (bônus) |
| Missão diária | +10 a +20 XP |
| Desafio semanal | +50 XP |

### Vidas
- Padrão: **5 vidas** por sessão
- Perde 1 vida por erro
- Recarregam ao longo do tempo (ex: 1 vida a cada 30 min)
- Ou recarregam totalmente ao início do dia

### Streak (Sequência Diária)
- Contador de dias consecutivos de estudo
- Notificação de lembrete antes da meia-noite
- Proteção de streak disponível na loja
- Marcos de streak com recompensas (7 dias, 30 dias, 100 dias...)

---

## 🔔 Notificações
- Lembrete diário configurável pelo usuário
- Alerta de streak em risco ("Você ainda não estudou hoje!")
- Notificação de nova liga semanal
- Aviso de missão diária disponível
- Celebração de conquista desbloqueada

---

## 📐 Estrutura de Conteúdo Bíblico

### Organização Sugerida
```
Trilha Principal
├── Unidade 1: A Criação e o Início
│   ├── Lição 1: Gênesis — A Criação
│   ├── Lição 2: Adão e Eva
│   ├── Lição 3: Caim e Abel
│   └── Lição 4: Noé e o Dilúvio
├── Unidade 2: Os Patriarcas
│   ├── Lição 1: Abraão e a Aliança
│   ├── Lição 2: Isaac e Jacó
│   └── Lição 3: José no Egito
├── Unidade 3: Moisés e o Êxodo
│   └── ...
├── Unidade 4: Os Reis de Israel
│   └── ...
├── Unidade 5: Os Profetas
│   └── ...
├── Unidade 6: A Vida de Jesus
│   └── ...
└── Unidade 7: A Igreja Primitiva
    └── ...
```

---

## 🎨 Identidade Visual Sugerida
- **Paleta de cores**: Tons de azul royal, dourado e branco (remetendo a pergaminhos e céu)
- **Mascote**: Um personagem temático bíblico (ex: uma pomba, um leão, uma chama)
- **Tipografia**: Fonte moderna mas com personalidade (evitar genérica como Arial)
- **Ícones**: Estilo flat com elementos bíblicos (pergaminho, cruz, estrela de Davi, peixe)

---

## 📱 Plataformas Alvo
- iOS e Android (React Native ou Flutter recomendados)
- Versão web opcional como complemento

---

## 🔐 Autenticação e Perfis
- Login por e-mail, Google ou Apple ID
- Perfil salvo na nuvem (progresso sincronizado entre dispositivos)
- Modo offline: lições já baixadas funcionam sem internet

---

## 💡 Diferenciais do App Bíblico vs Duolingo
| Funcionalidade | Duolingo | App Bíblico |
|----------------|----------|-------------|
| Conteúdo | Idiomas | Bíblia Sagrada |
| Mascote | Coruja Duo | Pomba / Leão |
| Moeda | Gems | Talentos / Cristais |
| Ligas | Divisões de idioma | Divisões por conhecimento bíblico |
| Missões especiais | Eventos culturais | Datas do calendário cristão |
| Áudio | Pronúncia de palavras | Narração de versículos |

---

*Documento gerado para orientar o desenvolvimento de um app de estudo bíblico gamificado.*
