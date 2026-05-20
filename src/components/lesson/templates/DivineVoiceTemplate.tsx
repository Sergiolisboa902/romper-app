"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Narrator } from '../Narrator';

interface DivineVoiceTemplateProps {
  characterId: string;
  mood: string;
  text: string;
  reference: string;
}

/**
 * LAYOUT: A VOZ DIVINA (Inverted)
 * Identidade: Narrador pequeno no topo, Card de Versículo centralizado.
 * Slots: [Narrator (Top/Avatar)], [Scripture (Center)]
 */
export const DivineVoiceTemplate: React.FC<DivineVoiceTemplateProps> = ({ characterId, mood, text, reference }) => {
  return (
    <div className="template-container divine-voice-template" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100%'
    }}>

      {/* SLOT: NARRATOR (TOP/AVATAR) */}
      <div className="narrator-avatar-slot" style={{ 
        marginBottom: '-35px', 
        zIndex: 10,
        background: 'var(--card-bg)',
        borderRadius: '50%',
        border: '4px solid var(--accent-gold)',
        padding: '5px',
        boxShadow: '0 0 30px rgba(240, 192, 64, 0.4)'
      }}>
        <Narrator 
          characterId={characterId} 
          mood={mood} 
          size={80} 
          animation="pulse" 
        />
      </div>

      {/* SLOT: SCRIPTURE (CENTER) */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ 
          padding: '60px 30px 40px', 
          background: 'linear-gradient(135deg, #ffffff, #f0f0f5)', 
          borderRadius: '40px', 
          borderBottom: '12px solid var(--accent-gold)',
          width: '100%',
          maxWidth: '450px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
      >
        <p style={{ 
          fontSize: '1.6rem', 
          lineHeight: '1.6', 
          color: '#1a1a2e', 
          textAlign: 'center', 
          fontStyle: 'italic',
          fontWeight: '700' 
        }}>
          "{text}"
        </p>
        <div style={{ 
          marginTop: '30px', 
          textAlign: 'right', 
          color: 'var(--accent-gold)', 
          fontWeight: '900',
          fontSize: '1rem',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          — {reference}
        </div>
      </motion.div>
    </div>
  );
};

