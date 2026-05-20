"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Narrator } from '../Narrator';

interface ScribeTemplateProps {
  characterId: string;
  mood: string;
  message: string;
  subtype?: string;
}

/**
 * LAYOUT: O ESCRIBA (Side-Split)
 * Identidade: Narrador na esquerda, Balão na direita.
 * Slots: [Narrator (Left)], [Message (Right)]
 */
export const ScribeTemplate: React.FC<ScribeTemplateProps> = ({ characterId, mood, message, subtype }) => {
  return (
    <div className="template-container scribe-template" style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '20px',
      height: '100%',
      padding: '10px'
    }}>
      {/* SLOT: NARRATOR (LEFT) */}
      <div className="narrator-slot" style={{ flex: '0 0 140px' }}>
        <Narrator 
          characterId={characterId} 
          mood={mood} 
          size={140} 
          animation="none" 
        />
      </div>

      {/* SLOT: MESSAGE (RIGHT) */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, x: 20 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        className="speech-bubble-main scribe-bubble"
        style={{ 
          flex: 1, 
          padding: '25px',
          boxShadow: '10px 10px 0 rgba(0,0,0,0.15)'
        }}
      >
        <div className="exercise-type" style={{ fontSize: '10px', color: 'var(--accent-blue)', marginBottom: '8px', fontWeight: '800', textTransform: 'uppercase' }}>
          {subtype || 'REGISTRO'}
        </div>
        <div style={{ fontSize: '1.2rem', lineHeight: '1.5', color: 'white', fontWeight: '400' }}>
          {message}
        </div>
      </motion.div>
    </div>
  );
};
