"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type NarratorMood = 
  | 'padrao' 
  | 'feliz' 
  | 'triste' 
  | 'bravo' 
  | 'pensativo' 
  | 'orando' 
  | 'lendo' 
  | 'escrevendo' 
  | 'explicando' 
  | 'animado' 
  | 'cansado' 
  | 'acerto' 
  | 'erro' 
  | 'fim';

interface NarratorProps {
  characterId: string; // Pode ser um ID (paulo) ou uma URL completa (supabase storage)
  mood?: NarratorMood | string;
  size?: number | string;
  animation?: 'float' | 'bounce' | 'pulse' | 'none';
  className?: string;
  showBubble?: boolean;
  bubbleText?: string | null;
}

export const Narrator: React.FC<NarratorProps> = ({ 
  characterId, 
  mood = 'padrao', 
  size = 150, 
  animation = 'float',
  className = '',
  showBubble = false,
  bubbleText = null
}) => {
  const isEmoji = !['paulo', 'noe', 'moises', 'pombinha'].includes(characterId.toLowerCase()) && !characterId.startsWith('http');
  
  // Lógica de resolução de imagem:
  // 1. Se characterId é uma URL (Storage), usa ela diretamente (assumindo que o mood já faz parte da lógica ou URL)
  // 2. Se characterId é um ID local, busca em /characters/ID/mood.png
  const getImagePath = (char: string, m: string) => {
    if (char.startsWith('http')) {
      // Se for URL, assumimos que ela aponta para uma pasta ou arquivo específico.
      // No caso de pastas no Storage, a convenção pode ser URL/mood.png
      return char.endsWith('.png') || char.endsWith('.jpg') ? char : `${char}/${m}.png`;
    }
    return `/characters/${char}/${m}.png`;
  };

  const animationVariants = {
    float: {
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" as const }
    },
    bounce: {
      y: [0, -20, 0],
      transition: { repeat: Infinity, duration: 2, ease: "easeOut" as const }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" as const }
    },
    none: {}
  };

  const moodVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    react: { scale: [1, 1.1, 1], transition: { duration: 0.3 } }
  };

  return (
    <div className={`narrator-root ${className}`} style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      position: 'relative' 
    }}>
      <AnimatePresence>
        {showBubble && bubbleText && (
          <motion.div 
            initial={{ scale: 0, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 10 }}
            className="narrator-bubble"
            style={{ 
              background: 'white', 
              color: '#1a1a2e', 
              padding: '10px 15px', 
              borderRadius: '18px', 
              fontSize: '12px', 
              fontWeight: '800', 
              marginBottom: '12px', 
              textAlign: 'center', 
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 2,
              maxWidth: '120px'
            }}
          >
            {bubbleText}
            {/* Seta do balão */}
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid white'
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={`${characterId}-${mood}`}
        variants={moodVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          animate={animation !== 'none' ? animationVariants[animation] : {}}
        >
          {isEmoji ? (
            <span style={{ fontSize: typeof size === 'number' ? `${size / 2}px` : '40px' }}>
              {characterId === 'pombinha' ? '🕊️' : '👤'}
            </span>
          ) : (
            <img 
              src={getImagePath(characterId, mood)} 
              alt={characterId}
              style={{ 
                width: typeof size === 'number' ? `${size}px` : size,
                height: 'auto',
                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))'
              }}
              onError={(e) => { 
                const target = e.target as HTMLImageElement;
                if (target.src.endsWith('padrao.png')) {
                  // Se já tentou o padrão e falhou, para
                  return;
                }
                target.src = getImagePath(characterId, 'padrao'); 
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
