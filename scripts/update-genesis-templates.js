const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const genesisContent = [
  {
    "type": "estímulo",
    "subtype": "introdução",
    "template": "speaker",
    "mood": "feliz",
    "content": {
      "text": "Olá! Eu sou Paulo. Hoje vamos iniciar nossa jornada pelo começo de tudo: o livro de Gênesis!"
    }
  },
  {
    "type": "estímulo",
    "subtype": "ensino",
    "template": "speaker",
    "mood": "explicando",
    "content": {
      "text": "Gênesis significa 'Origem'. É aqui que aprendemos como Deus criou o mundo e iniciou Sua aliança com a humanidade."
    }
  },
  {
    "type": "estímulo",
    "subtype": "versiculo",
    "template": "quote",
    "mood": "lendo",
    "content": {
      "text": "No princípio, criou Deus os céus e a terra.",
      "reference": "Gênesis 1:1"
    }
  },
  {
    "type": "pergunta",
    "subtype": "multipla_escolha",
    "template": "challenge",
    "mood": "pensativo",
    "content": {
      "question": "O que significa a palavra 'Gênesis'?",
      "options": ["Final", "Origem", "Caminho", "Promessa"],
      "correct_index": 1
    }
  },
  {
    "type": "estímulo",
    "subtype": "conclusão",
    "template": "speaker",
    "mood": "animado",
    "content": {
      "text": "Excelente! Você deu o primeiro passo para entender a história da nossa fé. Vamos continuar?"
    }
  }
];

async function updateGenesis() {
  console.log("🚀 Atualizando a lição de Gênesis com o novo sistema de templates...");
  
  const { data, error } = await supabase
    .from('lessons')
    .update({ content: genesisContent })
    .eq('id', 'intro-genesis');

  if (error) {
    console.error("❌ Erro ao atualizar:", error);
  } else {
    console.log("✅ Lição 'intro-genesis' atualizada com sucesso!");
  }
}

updateGenesis();
