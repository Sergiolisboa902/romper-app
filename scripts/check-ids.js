require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function listThemes() {
  console.log('📋 Listando Temas e Personagens configurados...');
  const { data, error } = await supabase
    .from('themes')
    .select('id, titulo, character_id');

  if (error) {
    console.error('❌ Erro ao listar temas:', error.message);
  } else {
    console.table(data);
  }

  console.log('\n📖 Verificando relacionamento na primeira lição de Gênesis...');
  const { data: lesson, error: lError } = await supabase
    .from('lessons')
    .select('id, titulo, theme_id, themes:theme_id(id, character_id)')
    .ilike('titulo', '%Gênesis%')
    .limit(1)
    .single();

  if (lError) {
    console.error('❌ Erro na lição:', lError.message);
  } else {
    console.log('✅ Dados da lição encontrada:', JSON.stringify(lesson, null, 2));
  }
}

listThemes();
