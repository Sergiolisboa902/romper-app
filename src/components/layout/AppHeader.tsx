"use client";

import React from 'react';

interface AppHeaderProps {
  xp: number;
  streak: number;
  hearts: number;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ xp, streak, hearts }) => {
  return (
    <header className="app-header">
      <div className="user-status">
        <div className="brand">
          <img src="/logo.png" alt="Romper Logo" className="brand-logo" style={{ height: '32px', width: 'auto' }} />
        </div>
        <div className="stats">
          <div className="stat-item streak">
            <span>🔥</span>
            <span className="stat-value">{streak}</span>
          </div>
          <div className="stat-item gems">
            <span>💎</span>
            <span className="stat-value">{xp}</span>
          </div>
          <div className="stat-item hearts">
            <span>❤️</span>
            <span className="stat-value">{hearts}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
