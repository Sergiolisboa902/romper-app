# 🎭 Procedimento: Criar Novo Personagem

Siga este protocolo sempre que o usuário solicitar a criação de um novo personagem para o App Romper.

## 1. Criação do Arquivo no Obsidian
Crie um novo arquivo em `content/personagens/[id].md` seguindo rigorosamente este template de metadados:

```markdown
---
id: [slug_do_personagem]
nome: [Nome Completo]
handle: "@[username_social]"
bio: "[Biografia curta e inspiradora]"
aparencia: "[Descrição física detalhada para prompts de IA]"
versiculo: "[Livro Cap:Ver]"
storage: "characters/[id]"
moods: ["padrao", "feliz", "triste", ...]
verificado: true
attributes:
  sabedoria: [0-100]
  fe: [0-100]
  [atributo_personalizado]: [0-100]
---

# [Nome do Personagem]
Breve descrição narrativa aqui.
```

## 2. Regras de Preenchimento
- **ID:** Deve ser único, em minúsculas e sem espaços (ex: `moises`, `maria_madalena`).
- **Aparencia:** Descreva características marcantes (cor da pele, olhos, barba, vestimentas, acessórios). Isso serve como base para manter a consistência em futuras gerações de imagens por IA.
- **Storage:** Sempre aponte para `characters/[id]`. Este é o caminho onde as imagens devem ser enviadas no Supabase Storage.
- **Moods:** Liste apenas os nomes dos arquivos `.png` que existirão no Storage (sem a extensão).
- **Attributes:** Use valores de 0 a 100 para compor o gráfico de atributos do perfil social.

## 3. Sincronização
Após criar ou editar o arquivo no Obsidian, você **DEVE** executar o script de sincronização para atualizar o banco de dados:

```bash
node scripts/sync-obsidian.js
```

## 4. Ativos Visuais (Lembrete ao Usuário)
Sempre informe ao usuário que as imagens correspondentes aos moods listados devem ser enviadas para o Supabase Storage no caminho especificado em `storage`. O Obsidian não armazena as imagens locais.
