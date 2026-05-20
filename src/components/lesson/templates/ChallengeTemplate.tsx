"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Narrator } from '../Narrator';

interface ChallengeTemplateProps {
  question: string;
  characterId: string;
  mood: string;
  mascotMessage: string | null;
  children: React.ReactNode;
}

/**
 * LAYOUT: O DESAFIO (Interactive)
 * Identidade: Pergunta no topo, Opções na esquerda, Narrador na direita.
 * Slots: [Question (Top)], [Options (Left)], [Narrator (Right)]
 */
export const ChallengeTemplate: React.FC<ChallengeTemplateProps> = ({ 
  question, 
  characterId, 
  mood, 
  mascotMessage,
  children 
}) => {
  return (
    <div className="template-container challenge-template" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '25px',
      height: '100%'
    }}>
      
      {/* SLOT: QUESTION (TOP) */}
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'left', color: 'white', padding: '0 5px', lineHeight: '1.3' }}
      >
        {question}
      </motion.h2>

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', flex: 1 }}>
        {/* SLOT: OPTIONS (LEFT) */}
        <div className="options-slot" style={{ flex: 1, alignSelf: 'center' }}>
          {children}
        </div>

        {/* SLOT: NARRATOR (RIGHT) */}
        <div className="narrator-slot" style={{ flex: '0 0 120px', paddingBottom: '20px' }}>
          <Narrator 
            characterId={characterId} 
            mood={mood} 
            size={120} 
            animation={mood !== 'padrao' ? 'pulse' : 'float'}
            showBubble={!!mascotMessage}
            bubbleText={mascotMessage}
          />
        </div>
      </div>
    </div>
  );
};
