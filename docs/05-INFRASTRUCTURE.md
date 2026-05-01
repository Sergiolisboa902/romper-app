---
tags:
  - projeto/infra
  - devops
  - setup
---
# ⚙️ Infraestrutura e Integrações

Este documento rastreia o estado das conexões externas do projeto.

## Stack Tecnológica
- **Framework:** Next.js (App Router, TypeScript)
- **Estilização:** Vanilla CSS (CSS Modules)
- **Banco de Dados:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## Estrutura de Diretórios
```
src/
├── app/          # Rotas e layout (Next.js App Router)
├── components/   # Componentes UI reutilizáveis
├── lib/          # Configurações (Supabase, clientes API)
└── styles/       # CSS global e temas
```

## 🔗 Serviços Vinculados
- [ ] **GitHub:** [Link do Repositório]
- [ ] **Vercel:** [Link do Deploy]
- [ ] **Supabase:** [URL do Projeto]

## 🔑 Checklist de Variáveis de Ambiente (.env)
- [ ] NEXT_PUBLIC_SUPABASE_URL
- [ ] SUPABASE_SERVICE_ROLE_KEY

---
**Conexões:**
- [[01-ARCHITECTURE|Ver Stack Técnica]]
- [[04-JOURNAL|Registrar alteração de Infra no Log]]
