require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function probeColumns() {
  const table = 'user_stats';
  const columns = ['current_journey_id', 'journey_id', 'jornada_id', 'active_journey_id', 'id_jornada', 'jornada_atual_id'];
  
  for (const col of columns) {
    const { error } = await supabase.from(table).select(col).limit(1);
    if (!error) {
      console.log(`✅ Coluna encontrada em ${table}: ${col}`);
    } else {
      console.log(`❌ Coluna ${col} NÃO encontrada: ${error.message}`);
    }
  }
}

probeColumns();
