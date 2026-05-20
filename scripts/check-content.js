require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkLessonsContent() {
  console.log('🔍 Validando conteúdo das lições...');
  const { data: lessons, error } = await supabase
    .from('lessons')
    .select('id, titulo, content')
    .limit(5);

  if (error) {
    console.error('❌ Erro ao buscar lições:', error.message);
  } else {
    lessons.forEach(l => {
      console.log(`\n📖 Lição: ${l.titulo} (${l.id})`);
      if (!l.content || l.content.length === 0) {
        console.error('   ❌ ERRO: Campo "content" está VAZIO.');
      } else {
        console.log(`   ✅ Content OK: ${l.content.length} blocos.`);
        console.log(`   Exemplo do primeiro bloco:`, JSON.stringify(l.content[0], null, 2));
      }
    });
  }
}

checkLessonsContent();
