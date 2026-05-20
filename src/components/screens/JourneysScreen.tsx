"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface JourneysScreenProps {
  onSelectJourney: (id: string) => void;
}

interface Journey {
  id: string;
  titulo: string;
  descricao: string;
}

export const JourneysScreen: React.FC<JourneysScreenProps> = ({ onSelectJourney }) => {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);
const [selectingId, setSelectingId] = useState<string | null>(null);

useEffect(() => {
  async function loadJourneys() {
    setLoading(true);
    const { data, error } = await supabase
      .from('journeys')
      .select('*')
      .order('ordem', { ascending: true });

    if (data && !error) {
      setJourneys(data);
    }
    setLoading(false);
  }

  loadJourneys();
}, []);

const handleSelect = async (id: string) => {
  if (selectingId) return;

  setSelectingId(id);
  console.log(`🎯 JourneysScreen: Tentando salvar jornada ${id} para user_teste_01...`);

  try {
    // 1. Tentar UPSERT
    const { data, error } = await supabase
      .from('user_stats')
      .upsert({ 
        user_id: 'user_teste_01', 
        current_journey_id: id 
      }, { onConflict: 'user_id' })
      .select();

    if (error) {
      console.error("❌ JourneysScreen: Erro detalhado do Supabase:", error);
      alert(`Erro ao salvar: ${error.message} (${error.code})`);
    } else {
      console.log("✅ JourneysScreen: Sucesso!", data);
      onSelectJourney(id);
    }
  } catch (err: any) {
    console.error("❌ JourneysScreen: Erro de exceção:", err);
    alert(`Erro inesperado: ${err.message}`);
  } finally {
    setSelectingId(null);
  }
};
if (loading) return <p style={{ padding: 40, textAlign: 'center' }}>Carregando jornadas...</p>;

return (
  <div id="jornadas-screen" className="tab-content active">
    <section className="hub-section">
      <div className="section-header">
        <h2 style={{ fontSize: '1.2rem', margin: '20px 0' }}>Catálogo de Jornadas</h2>
      </div>

      <div className="journey-list">
        {journeys.map(j => (
          <div 
            key={j.id} 
            className={`journey-card clickable ${selectingId === j.id ? 'active' : ''}`} 
            onClick={() => handleSelect(j.id)}
            style={{ opacity: selectingId && selectingId !== j.id ? 0.5 : 1 }}
          >
            <div className="journey-icon" style={{ background: 'var(--accent-gold)' }}>
              {selectingId === j.id ? '⏳' : '📖'}
            </div>
            <div className="journey-details">
              <h3>{j.titulo}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {selectingId === j.id ? 'Selecionando...' : (j.descricao || 'Explore esta jornada de conhecimento.')}
              </p>
...

                <div className="journey-progress">
                  <div className="mini-bar"><div className="fill" style={{ width: '0%' }}></div></div>
                  <span style={{ fontSize: '0.7rem' }}>0%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
