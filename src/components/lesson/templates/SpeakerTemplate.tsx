"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Narrator } from '../Narrator';

interface SpeakerTemplateProps {
  characterId: string;
  mood: string;
  message: string;
  subtype?: string;
  children?: React.ReactNode;
}

/**
 * LAYOUT: O ORADOR (Center-Focus)
 * Identidade: Balão em cima, Narrador no centro, Conteúdo extra embaixo.
 * Slots: [Message (Top)], [Narrator (Center)], [Content (Bottom)]
 */
export const SpeakerTemplate: React.FC<SpeakerTemplateProps> = ({ 
  characterId, 
  mood, 
  message, 
  subtype,
  children 
}) => {
  return (
    <div className="template-container speaker-template" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '25px',
      height: '100%',
      padding: '20px'
    }}>
      {/* SLOT: MESSAGE (TOP) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="speech-bubble-main"
        style={{ width: '100%', maxWidth: '420px' }}
      >
        <div className="exercise-type" style={{ fontSize: '11px', color: 'var(--accent-gold)', marginBottom: '8px', fontWeight: '800', textTransform: 'uppercase' }}>
          {subtype || 'DICA'}
        </div>
        <div style={{ fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '500', color: 'white' }}>
          {message}
        </div>
      </motion.div>

      {/* SLOT: NARRATOR (CENTER) */}
      <div className="narrator-slot">
        <Narrator 
          characterId={characterId} 
          mood={mood} 
          size={180} 
          animation="float" 
        />
      </div>

      {/* SLOT: CONTENT (BOTTOM) */}
      <div className="content-slot" style={{ width: '100%', maxWidth: '400px' }}>
        {children}
      </div>
    </div>
  );
};
