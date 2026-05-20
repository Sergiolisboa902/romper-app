"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface MapScreenProps {
  onStartLesson: (lessonId: string) => void;
}

interface Lesson {
  id: string;
  id_tema: string;
  ordem: number;
  titulo: string;
}

interface Theme {
  id: string;
  titulo: string;
  ordem: number;
  lessons: Lesson[];
}

interface Track {
  id: string;
  titulo: string;
  ordem: number;
  themes: Theme[];
}

interface FlatLesson extends Lesson {
  track_title: string;
  track_ordem: number;
  theme_title: string;
}

export const MapScreen: React.FC<MapScreenProps> = ({ onStartLesson }) => {
  const [lessons, setLessons] = useState<FlatLesson[]>([]);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [journeyTitle, setJourneyTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // Paleta de cores vibrantes para as trilhas
  const trackColors = ['#58cc02', '#1cb0f6', '#ff4b4b', '#a560f6', '#ff9600', '#f1c40f'];

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const { data: stats } = await supabase.from('user_stats').select('current_journey_id').eq('user_id', 'user_teste_01').maybeSingle();
        const journeyId = stats?.current_journey_id;
        if (!journeyId) { setLoading(false); return; }

        const { data: journey } = await supabase.from('journeys').select('titulo').eq('id', journeyId).single();
        setJourneyTitle(journey?.titulo || "");

        const { data: tracksData } = await supabase.from('tracks').select('*, themes (*, lessons (*))').eq('journey_id', journeyId).order('ordem', { ascending: true });
        const { data: userProgress } = await supabase.from('progresso_licoes').select('licao_id, status').eq('user_id', 'user_teste_01');
        setCompletedLessons(new Set(userProgress?.filter(p => p.status === 'concluida').map(p => p.licao_id) || []));

        const flat: FlatLesson[] = [];
        (tracksData || []).forEach(track => {
          const sortedThemes = (track.themes || []).sort((a: any, b: any) => a.ordem - b.ordem);
          sortedThemes.forEach((theme: any) => {
            const sortedLessons = (theme.lessons || []).sort((a: any, b: any) => a.ordem - b.ordem);
            sortedLessons.forEach((lesson: any) => {
              flat.push({ ...lesson, track_title: track.titulo, track_ordem: track.ordem, theme_title: theme.titulo });
            });
          });
        });
        setLessons(flat);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div id="map-screen" className="tab-content active" style={{ overflow: 'hidden' }}>
        <div className="journey-fixed-header">
          <div className="skeleton skeleton-header" style={{ width: '150px' }}></div>
        </div>
        <div className="skeleton skeleton-track" style={{ marginTop: '20px' }}></div>
        <div className="learning-path zigzag" style={{ opacity: 0.5 }}>
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className={`node-container pos-${['left', 'center', 'right', 'center'][i % 4]}`}>
              <div className="skeleton skeleton-node"></div>
              <div className="skeleton" style={{ height: '12px', width: '60px' }}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (lessons.length === 0) return <div style={{ padding: 40, textAlign: 'center' }}><h3>Nenhuma Jornada Ativa</h3></div>;

  const groupedTracks: { [key: string]: { title: string, ordem: number, lessons: FlatLesson[] } } = {};
  lessons.forEach(l => {
    if (!groupedTracks[l.track_title]) groupedTracks[l.track_title] = { title: l.track_title, ordem: l.track_ordem, lessons: [] };
    groupedTracks[l.track_title].lessons.push(l);
  });
  const sortedTrackTitles = Object.keys(groupedTracks).sort((a, b) => groupedTracks[a].ordem - groupedTracks[b].ordem);

  let foundNext = false;
  const positions = ['pos-left', 'pos-center', 'pos-right', 'pos-center'];
  let globalIndex = 0;

  return (
    <div id="map-screen" className="tab-content active">
      <div className="journey-fixed-header">
        <h2>{journeyTitle}</h2>
      </div>

      {sortedTrackTitles.map((trackTitle, trackIdx) => {
        const trackColor = trackColors[trackIdx % trackColors.length];
        
        return (
          <section key={trackTitle} className="track-section" style={{ '--track-color': trackColor } as React.CSSProperties}>
            <div className="track-sticky-header">
              <span className="unit-tag">TRILHA {groupedTracks[trackTitle].ordem}</span>
              <h3>{trackTitle}</h3>
            </div>

            <div className="learning-path zigzag">
              {groupedTracks[trackTitle].lessons.map((lesson) => {
                const posClass = positions[globalIndex % 4];
                const isCompleted = completedLessons.has(lesson.id);
                let statusClass = 'locked';
                let icon = '🔒';

                if (isCompleted) {
                  statusClass = 'completed';
                  icon = '✅';
                } else if (!foundNext) {
                  statusClass = 'active';
                  icon = '⭐';
                  foundNext = true;
                }

                globalIndex++;
                return (
                  <div key={lesson.id} className={`node-container ${statusClass} ${posClass}`}>
                    <div className="node-button" onClick={() => statusClass !== 'locked' && onStartLesson(lesson.id)}>
                      <span className="icon">{icon}</span>
                    </div>
                    <span className="node-label">
                      {lesson.theme_title}
                    </span>
                    {statusClass === 'active' && <div className="current-popup">COMEÇAR</div>}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};