# 🚀 Guia de Deploy e Credenciais - Planeja+

Este documento contém as informações necessárias para configurar o banco de dados e realizar o deploy do projeto em um novo ambiente (GitHub/Vercel).

## 🔑 Credenciais do Supabase

Atualmente, o projeto utiliza as seguintes credenciais (configuradas em `supabase-config.js`):

- **SUPABASE_URL:** `https://rppctxuvncoqfgjbfczo.supabase.co`
- **SUPABASE_KEY:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcGN0eHV2bmNvcWZnamJmY3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4NjU3ODQsImV4cCI6MjA5MTQ0MTc4NH0.OAzfJCLB7x3VpmRYBis4bvbseCDrfcVtZ6ZuBAjqIr4`

---

## 🗄️ Configuração do Banco de Dados (Supabase)

Se você estiver criando um novo projeto no Supabase, siga estes passos:

1. Acesse o **SQL Editor** no painel do Supabase.
2. Copie o conteúdo do arquivo `supabase-schema.sql` (ou `supabase-schema-compact.sql`) do seu projeto.
3. Cole no editor e clique em **Run**.
4. Isso criará as tabelas `membros`, `transacoes` e `metas` com as estruturas necessárias.

---

## ☁️ Deploy na Vercel

1. Crie um novo projeto na [Vercel](https://vercel.com/).
2. Conecte o seu repositório do GitHub.
3. Como este é um projeto de arquivos estáticos simples:
   - **Framework Preset:** Other (ou deixe detectar automaticamente).
   - **Build Command:** (deixe vazio).
   - **Output Directory:** `.` (diretório raiz).
4. Clique em **Deploy**.

---

## 🐙 Deploy no GitHub Pages

1. Vá nas **Settings** do seu repositório no GitHub.
2. Acesse a aba **Pages**.
3. Em **Build and deployment**, selecione a branch `main` (ou a branch principal) e a pasta `/ (root)`.
4. Salve e aguarde alguns minutos para o link ser gerado.

---

## 📝 Notas Importantes

- **Segurança:** As chaves do Supabase estão expostas no cliente (`supabase-config.js`). Para um ambiente de produção real, é altamente recomendável configurar **RLS (Row Level Security)** no Supabase para proteger os dados.
- **PWA:** O projeto possui `manifest.json` e `service-worker.js`, o que permite a instalação como um aplicativo no celular após o deploy em HTTPS.
