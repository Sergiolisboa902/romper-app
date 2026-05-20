"use client";

import React from 'react';

export type TabId = 'home-hub' | 'map-screen' | 'jornadas-screen' | 'devocional-screen' | 'biblia-screen';

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bottom-nav">
      <button 
        className={`nav-item ${activeTab === 'home-hub' ? 'active' : ''}`} 
        onClick={() => onTabChange('home-hub')}
      >
        <span className="nav-icon">🏠</span>
        <span className="nav-text">Início</span>
      </button>
      
      <button 
        className={`nav-item ${activeTab === 'jornadas-screen' ? 'active' : ''}`} 
        onClick={() => onTabChange('jornadas-screen')}
      >
        <span className="nav-icon">📚</span>
        <span className="nav-text">Jornadas</span>
      </button>

      <div 
        className={`nav-main-btn ${activeTab === 'map-screen' ? 'active' : ''}`}
        onClick={() => onTabChange('map-screen')}
      >
        <div className="nav-icon-container">
          <span className="nav-icon">🗺️</span>
        </div>
        <span className="nav-text">Trilha</span>
      </div>

      <button 
        className={`nav-item ${activeTab === 'devocional-screen' ? 'active' : ''}`}
        onClick={() => onTabChange('devocional-screen')}
      >
        <span className="nav-icon">🙏</span>
        <span className="nav-text">Devocional</span>
      </button>

      <button 
        className={`nav-item ${activeTab === 'biblia-screen' ? 'active' : ''}`}
        onClick={() => onTabChange('biblia-screen')}
      >
        <span className="nav-icon">📖</span>
        <span className="nav-text">Bíblia</span>
      </button>
    </nav>
  );
};
