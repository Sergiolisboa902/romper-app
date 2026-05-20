"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Narrator } from '../Narrator';

interface QuoteTemplateProps {
  text: string;
  reference: string;
  characterId: string;
  mood: string;
}

/**
 * LAYOUT: A CITAÇÃO (Card Focus)
 * Identidade: Card centralizado com aspas, Narrador pequeno como assinatura.
 * Slots: [Quote Card (Center)], [Narrator Signature (Bottom-Right)]
 */
export const QuoteTemplate: React.FC<QuoteTemplateProps> = ({ 
  text, 
  reference, 
  characterId, 
  mood 
}) => {
  return (
    <div className="template-container quote-template" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100%',
      padding: '20px'
    }}>
      {/* SLOT: QUOTE CARD (CENTER) */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ 
          padding: '50px 35px', 
          background: 'linear-gradient(145deg, #ffffff, #f8f8fa)', 
          borderRadius: '32px', 
          border: '2px solid var(--accent-gold)', 
          borderBottomWidth: '10px',
          position: 'relative',
          boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
          width: '100%',
          maxWidth: '450px'
        }}
      >
        {/* Aspas Decorativas */}
        <span style={{ position: 'absolute', top: '15px', left: '25px', fontSize: '80px', color: 'var(--accent-gold)', opacity: 0.15, fontFamily: 'serif', lineHeight: 1 }}>"</span>
        
        <p style={{ 
          fontStyle: 'italic', 
          marginBottom: '30px', 
          fontSize: '1.5rem', 
          lineHeight: '1.6', 
          color: '#1a1a2e',
          textAlign: 'center',
          fontWeight: '600',
          position: 'relative',
          zIndex: 1
        }}>
          {text}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '15px' }}>
          <span style={{ color: 'var(--accent-gold)', fontWeight: '900', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            {reference}
          </span>
          
          {/* SLOT: NARRATOR SIGNATURE */}
          <div style={{ 
            width: '50px', 
            height: '50px', 
            background: 'var(--card-bg)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            overflow: 'hidden', 
            border: '2px solid var(--accent-gold)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <Narrator 
              characterId={characterId} 
              mood="padrao" 
              size={50} 
              animation="none" 
            />
          </div>
        </div>
      </motion.div>

      {/* FOOTER TEXT */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8 }}
        style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.9rem', color: 'white', letterSpacing: '2px', fontWeight: '800' }}
      >
        GUARDE ESTA PALAVRA NO CORAÇÃO
      </motion.p>
    </div>
  );
};
