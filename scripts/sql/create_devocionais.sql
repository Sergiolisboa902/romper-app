-- SQL para criar a tabela de devocionais no Supabase
-- Execute este comando no SQL Editor do seu dashboard Supabase

CREATE TABLE IF NOT EXISTS devocionais (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  data DATE NOT NULL,
  periodo TEXT NOT NULL, -- Manhã, Tarde, Noite
  versiculo JSONB NOT NULL, -- { texto: string, referencia: string }
  topicos JSONB NOT NULL, -- array de { ordem, icone, titulo, conteudo, tags }
  promessa TEXT,
  meditacao TEXT,
  versao TEXT DEFAULT 'original', -- original ou simples
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_devocionais_data ON devocionais (data);
CREATE INDEX IF NOT EXISTS idx_devocionais_periodo ON devocionais (periodo);
CREATE INDEX IF NOT EXISTS idx_devocionais_data_periodo ON devocionais (data, periodo);

-- RLS (Row Level Security) - Ajuste conforme sua política
ALTER TABLE devocionais ENABLE ROW LEVEL SECURITY;

-- Política de leitura pública (exemplo)
CREATE POLICY "Permitir leitura pública de devocionais" 
ON devocionais FOR SELECT 
USING (true);
