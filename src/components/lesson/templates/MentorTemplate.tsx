"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Narrator } from '../Narrator';

interface MentorTemplateProps {
  characterId: string;
  mood: string;
  message: string;
  subtype?: string;
}

/**
 * LAYOUT: O MENTOR (Top-Down)
 * Identidade: Balão em cima, Narrador no centro.
 * Slots: [Message (Top)], [Narrator (Center)]
 */
export const MentorTemplate: React.FC<MentorTemplateProps> = ({ characterId, mood, message, subtype }) => {
  return (
    <div className="template-container mentor-template" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '30px',
      height: '100%',
      padding: '20px'
    }}>
      {/* SLOT: MESSAGE (TOP) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="speech-bubble-main"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <div className="exercise-type" style={{ fontSize: '11px', color: 'var(--accent-gold)', marginBottom: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {subtype || 'ENSINO'}
        </div>
        <div style={{ fontSize: '1.3rem', lineHeight: '1.5', fontWeight: '500', color: 'white' }}>
          {message}
        </div>
      </motion.div>

      {/* SLOT: NARRATOR (CENTER) */}
      <div className="narrator-slot">
        <Narrator 
          characterId={characterId} 
          mood={mood} 
          size={220} 
          animation="float" 
        />
      </div>
    </div>
  );
};
