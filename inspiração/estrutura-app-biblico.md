# Estrutura de Conteúdo — App de Estudo Bíblico

## Hierarquia

```
Jornada
└── Seção ⚡ OPCIONAL
    └── Trilha
        └── Divisão ⚡ OPCIONAL
            └── Tema
                └── Lição
                    ├── Estímulos
                    └── Perguntas
```

---

## Níveis

### Jornada
O curso completo. Ex: "Panorama Bíblico", "Fundamentos da Fé", "Apologética".

### Seção ⚡ OPCIONAL
Agrupa Trilhas quando o volume exige. Use apenas quando houver muitas trilhas que se encaixam em um grupo maior.
Ex: No Panorama Bíblico → "Pentateuco", "Evangelhos", "Cartas de Paulo".
Jornadas menores vão direto de Jornada para Trilha, sem Seção.

### Trilha
O caminho de estudo dentro da Jornada (ou Seção). Ex: "Gênesis", "A Vida de Jesus".

### Divisão ⚡ OPCIONAL
Agrupa Temas dentro de uma Trilha quando o conteúdo é extenso. Use apenas quando os temas puderem ser organizados em blocos temáticos naturais.
Ex: Na Trilha "Gênesis" → "Primórdios da Humanidade" agrupa os temas "A Criação", "Adão e Eva", "Caim e Abel".
Trilhas menores vão direto de Trilha para Tema, sem Divisão.

### Tema
Subdivisão da Trilha (ou Divisão). Um assunto específico. Ex: "A Criação", "Adão e Eva", "Noé e o Dilúvio".

### Lição
Unidade mínima de estudo. Contém uma sequência de **Estímulos** e **Perguntas** intercalados.

---

## Estímulos (conteúdo consumido dentro da Lição)

Cada lição pode ter inúmeros estímulos, em qualquer ordem:

- `texto` — conteúdo escrito em markdown
- `video` — vídeo externo ou interno
- `imagem` — imagem ilustrativa com legenda
- `audio` — narração, música ou trecho de sermão
- `versiculo` — versículo formatado para memorização (referência + texto + versão)
- `curiosidade` — bloco de destaque com contexto histórico ou aplicação prática

---

## Perguntas (avaliação dentro da Lição)

Cada lição pode ter inúmeras perguntas, de tipos variados:

- `multipla_escolha` — uma resposta correta entre várias opções
- `multipla_selecao` — mais de uma resposta correta
- `verdadeiro_falso` — afirmação para julgar
- `completar_lacuna` — completar um versículo ou frase
- `ordenar` — reorganizar palavras ou eventos na ordem correta
- `associacao` — ligar colunas (personagem ↔ livro, evento ↔ referência)
- `digitacao_livre` — digitar a resposta sem opções
