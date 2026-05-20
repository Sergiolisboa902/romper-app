"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Narrator } from '../Narrator';

interface RevelationTemplateProps {
  characterId: string;
  message: string;
}

/**
 * LAYOUT: A REVELAÇÃO (Imersivo / Épico)
 * Identidade: Narrador GRANDE e esfumaçado no fundo, Texto central puro.
 * Slots: [Background Narrator], [Message (Center)]
 */
export const RevelationTemplate: React.FC<RevelationTemplateProps> = ({ characterId, message }) => {
  return (
    <div className="template-container revelation-template" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* SLOT: BACKGROUND NARRATOR */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1, zIndex: 0 }}>
        <Narrator 
          characterId={characterId} 
          mood="padrao" 
          size={500} 
          animation="float" 
        />
      </div>

      {/* SLOT: MESSAGE (CENTER) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ zIndex: 1, textAlign: 'center', padding: '0 30px' }}
      >
        <p style={{ 
          fontSize: '1.8rem', 
          lineHeight: '1.4', 
          color: 'white', 
          fontWeight: '800',
          textShadow: '0 0 20px rgba(240, 192, 64, 0.6), 0 0 40px rgba(0,0,0,0.8)'
        }}>
          {message}
        </p>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 1, duration: 1 }}
          style={{ height: '4px', background: 'var(--accent-gold)', margin: '40px auto', borderRadius: '2px', boxShadow: '0 0 15px var(--accent-gold)' }}
        />
      </motion.div>
    </div>
  );
};
