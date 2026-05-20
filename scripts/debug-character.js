require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkThemeCharacter() {
  console.log('🔍 Verificando character_id no banco...');
  const { data, error } = await supabase
    .from('themes')
    .select('id, titulo, character_id')
    .eq('id', '01-01-01-00-genesis')
    .maybeSingle();

  if (error) console.error('❌ Erro:', error.message);
  else console.log('✅ Resultado:', data);

  console.log('\n🔍 Verificando lição de Gênesis...');
  const { data: lesson, error: lError } = await supabase
    .from('lessons')
    .select('id, id_tema, themes(character_id)')
    .eq('id_tema', '01-01-01-00-genesis')
    .limit(1);
    
  if (lError) console.error('❌ Erro na lição:', lError.message);
  else console.log('✅ Join da lição:', JSON.stringify(lesson, null, 2));
}

checkThemeCharacter();
