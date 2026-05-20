"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { BottomNav, TabId } from '@/components/layout/BottomNav';
import { MapScreen } from '@/components/screens/MapScreen';
import { JourneysScreen } from '@/components/screens/JourneysScreen';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { DevocionalScreen } from '@/components/screens/DevocionalScreen';
import { LessonPlayer } from '@/components/lesson/LessonPlayer';
import { supabase } from '@/lib/supabase';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState<TabId>('home-hub');
  const [userStats, setUserStats] = useState({ xp: 0, streak: 0, hearts: 5 });
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchStats = useCallback(async () => {
    const { data, error } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', 'user_teste_01')
      .single();

    if (data && !error) {
      setUserStats({
        xp: data.total_xp || 0,
        streak: data.streak || 0,
        hearts: 5
      });
      
      // Comentado para permitir que o usuário veja a HomeScreen (Hub) ao carregar
      // if (data.current_journey_id && activeTab === 'home-hub' && refreshKey === 0) {
      //   setActiveTab('map-screen');
      // }
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const handleStartLesson = (id: string) => {
    setActiveLessonId(id);
  };

  const handleSelectJourney = (id: string) => {
    setRefreshKey(prev => prev + 1);
    setActiveTab('map-screen');
  };

  const handleCloseLesson = (completed: boolean) => {
    setActiveLessonId(null);
    if (completed) {
      setRefreshKey(prev => prev + 1);
      fetchStats();
    }
  };

  return (
    <div className="app-container">
      {activeLessonId ? (
        <LessonPlayer 
          lessonId={activeLessonId} 
          userId="user_teste_01" 
          onClose={handleCloseLesson} 
        />
      ) : (
        <>
          <AppHeader 
            xp={userStats.xp} 
            streak={userStats.streak} 
            hearts={userStats.hearts} 
          />

          <main className="content">
            {activeTab === 'home-hub' && (
              <HomeScreen 
                onStartLesson={handleStartLesson} 
                userStats={userStats} 
                onNavigate={(tab) => setActiveTab(tab)}
              />
            )}

            {activeTab === 'map-screen' && (
              <MapScreen key={refreshKey} onStartLesson={handleStartLesson} />
            )}

            {activeTab === 'jornadas-screen' && (
              <JourneysScreen onSelectJourney={handleSelectJourney} />
            )}

            {activeTab === 'devocional-screen' && (
              <DevocionalScreen />
            )}

            {activeTab === 'biblia-screen' && (
              <div className="tab-content active">
                 <p style={{ padding: 20, textAlign: 'center' }}>Bíblia em Construção</p>
              </div>
            )}
          </main>

          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </>
      )}
    </div>
  );
}
