"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

import { TabId } from '@/components/layout/BottomNav';

interface HomeScreenProps {
  onStartLesson: (lessonId: string) => void;
  userStats: { xp: number; streak: number; hearts: number };
  onNavigate: (tab: TabId) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStartLesson, userStats, onNavigate }) => {
  const [nextLesson, setNextLesson] = useState<{ id: string; titulo: string } | null>(null);
  const [todayDevocional, setTodayDevocional] = useState<any>(null);
  const [journeyTitle, setJourneyTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadResumeData() {
      try {
        setLoading(true);

        // Obter data local
        const now = new Date();
        const mes = now.getMonth() + 1;
        const dia = now.getDate();
        const searchDate = `2026-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;

        // Buscar devocional do dia (prioridade para o período atual)
        const currentHour = now.getHours();
        const periodoPref = (currentHour >= 18 || currentHour < 5) ? "Noite" : "Manhã";

        const { data: devocional } = await supabase
          .from('devocionais')
          .select('*')
          .eq('data', searchDate);

        if (devocional && devocional.length > 0) {
           const preferred = devocional.find(d => d.periodo === periodoPref) || devocional[0];
           setTodayDevocional(preferred);
        }

        const { data: stats } = await supabase
          .from('user_stats')
          .select('current_journey_id')
          .eq('user_id', 'user_teste_01')
          .maybeSingle();

        if (!stats?.current_journey_id) {
          setLoading(false);
          return;
        }

        const { data: journey } = await supabase
          .from('journeys')
          .select('titulo')
          .eq('id', stats.current_journey_id)
          .single();

        setJourneyTitle(journey?.titulo || "");

        // Encontrar a próxima lição
        const { data: tracks } = await supabase
          .from('tracks')
          .select(`
            id,
            ordem,
            themes (
              id,
              titulo,
              ordem,
              lessons (id, ordem)
            )
          `)
          .eq('journey_id', stats.current_journey_id)
          .order('ordem', { ascending: true });

        const { data: progress } = await supabase
          .from('progresso_licoes')
          .select('licao_id')
          .eq('user_id', 'user_teste_01')
          .eq('status', 'concluida');

        const completedIds = new Set(progress?.map(p => p.licao_id) || []);

        let found = null;
        if (tracks) {
          // Ordenar trilhas, temas e lições manualmente para garantir consistência
          const sortedTracks = [...tracks].sort((a, b) => a.ordem - b.ordem);
          
          for (const track of sortedTracks) {
            const sortedThemes = [...(track.themes || [])].sort((a: any, b: any) => a.ordem - b.ordem);
            for (const theme of sortedThemes) {
              const sortedLessons = [...(theme.lessons || [])].sort((a: any, b: any) => a.ordem - b.ordem);
              for (const lesson of sortedLessons) {
                if (!completedIds.has(lesson.id)) {
                  found = { id: lesson.id, titulo: theme.titulo }; // Usando titulo do tema para contexto
                  break;
                }
              }
              if (found) break;
            }
            if (found) break;
          }
        }
        setNextLesson(found);
      } catch (err) {
        console.error("Erro ao carregar dados de retomada:", err);
      } finally {
        setLoading(false);
      }
    }
    loadResumeData();
  }, []);

  if (loading) {
    return (
      <div className="tab-content active" style={{ padding: 40, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Preparando seu dia...</p>
      </div>
    );
  }

  return (
    <div className="tab-content active" style={{ paddingBottom: 20 }}>
      {/* Banner de Boas-vindas */}
      <section className="hub-section" style={{ marginTop: 20 }}>
        <div className="welcome-banner" style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>Olá, Explorador! 👋</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: 4 }}>Sua jornada de hoje espera por você.</p>
        </div>

        {/* Card de Continuidade */}
        {nextLesson ? (
          <div className="unit-card-mini" style={{ 
            border: '2px solid var(--accent-gold)', 
            boxShadow: '0 8px 30px rgba(240, 192, 64, 0.15)',
            background: 'linear-gradient(145deg, var(--unit-bg), #1a1a40)'
          }}>
            <div className="goal-status" style={{ 
              fontSize: '0.65rem', 
              letterSpacing: 2, 
              color: 'var(--accent-gold)',
              fontWeight: 800
            }}>CONTINUAR APRENDENDO</div>
            <h3 style={{ fontSize: '1.15rem', margin: '12px 0 20px', color: 'white' }}>
              {journeyTitle}: <span style={{ color: 'var(--accent-gold)' }}>{nextLesson.titulo}</span>
            </h3>
            <button 
              className="btn-continue" 
              onClick={() => onStartLesson(nextLesson.id)}
              style={{ 
                width: '100%', 
                cursor: 'pointer',
                padding: '14px',
                fontSize: '0.9rem',
                boxShadow: '0 4px 0 #b08d20'
              }}
            >
              RETOMAR AGORA
            </button>
          </div>
        ) : (
          <div className="unit-card-mini">
            <h3 style={{ fontSize: '1.1rem' }}>Pronto para uma nova jornada?</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '12px 0 20px' }}>
              Parabéns! Você concluiu todas as lições desta jornada. Escolha um novo desafio!
            </p>
            <button className="btn-read" style={{ width: '100%', padding: 12 }}>VER JORNADAS</button>
          </div>
        )}
      </section>

      {/* Devocional do Dia */}
      <section className="hub-section">
        <div className="section-header">
          <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 800 }}>Devocional do Dia</h2>
          <span className="date" style={{ opacity: 0.8 }}>
            {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase()}
          </span>
        </div>
        <div 
          className="devotional-card" 
          onClick={() => onNavigate('devocional-screen')}
          style={{ 
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            background: 'linear-gradient(135deg, #16213e, #0f3460)'
          }}
        >
          <div className="devotional-content">
            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-gold)' }}>
              {todayDevocional ? todayDevocional.topicos[0].titulo : "Alimento Diário"}
            </h3>
            <p style={{ 
              fontStyle: 'italic', 
              margin: '12px 0', 
              fontSize: '0.9rem', 
              lineHeight: 1.5,
              color: '#e0e0e0'
            }}>
              {todayDevocional ? `"${todayDevocional.versiculo.texto.substring(0, 80)}..."` : "Clique para ler a meditação de hoje e fortalecer sua fé."}
            </p>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 800 }}>
              {todayDevocional ? todayDevocional.versiculo.referencia : "LEITURA DE HOJE"}
            </span>
          </div>
          <div className="devotional-icon" style={{ fontSize: '2.8rem', opacity: 0.9 }}>
            {todayDevocional?.periodo === "Noite" ? "✨" : "📖"}
          </div>
        </div>
      </section>

      {/* Meta Diária */}
      <section className="hub-section">
        <div className="section-header">
          <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 800 }}>Sua Meta Diária</h2>
        </div>
        <div className="daily-goal-mini" style={{ background: '#16213e', padding: '16px 20px' }}>
          <div className="goal-info-mini" style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>XP de Hoje</span>
              <span className="goal-status" style={{ color: 'var(--accent-gold)' }}>30 / 50 XP</span>
            </div>
            <div className="mini-bar" style={{ height: 10, background: '#0a0a1a' }}>
              <div className="fill" style={{ 
                width: '60%', 
                background: 'linear-gradient(90deg, var(--accent-gold), #ffda70)',
                boxShadow: '0 0 10px rgba(240, 192, 64, 0.3)'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Versículo de Incentivo */}
      <div style={{ 
        textAlign: 'center', 
        padding: '30px 20px', 
        marginTop: 10, 
        opacity: 0.5,
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <p style={{ fontSize: '0.8rem', fontStyle: 'italic', lineHeight: 1.4 }}>
          "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho."
        </p>
        <p style={{ fontSize: '0.65rem', fontWeight: 900, marginTop: 8, letterSpacing: 1 }}>SALMOS 119:105</p>
      </div>
    </div>
  );
};
