"use client";

import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// Importando Biblioteca de Templates (Identidades Visuais Distintas)
import { MentorTemplate } from './templates/MentorTemplate';
import { ScribeTemplate } from './templates/ScribeTemplate';
import { DivineVoiceTemplate } from './templates/DivineVoiceTemplate';
import { ChallengeTemplate } from './templates/ChallengeTemplate';
import { RevelationTemplate } from './templates/RevelationTemplate';
import { QuoteTemplate } from './templates/QuoteTemplate';
import { SpeakerTemplate } from './templates/SpeakerTemplate';

interface LessonStep {
  type: string;
  subtype: string;
  content: any;
  template?: string; // Nome do layout (mentor, scribe, divine_voice, challenge, revelation)
  mood?: string;     // Expressão do narrador
  character_id?: string; // ID do narrador específico desta etapa
}

interface LessonPlayerProps {
  lessonId: string;
  onClose: (completed: boolean) => void;
  userId: string;
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({ lessonId, onClose, userId }) => {
  const [steps, setSteps] = useState<LessonStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | boolean | null>(null);
  const [feedback, setFeedback] = useState<{ show: boolean; correct: boolean; text: string }>({
    show: false,
    correct: false,
    text: ''
  });
  const [session, setSession] = useState<{ id: string | null; acertos: number; erros: number }>({
    id: null,
    acertos: 0,
    erros: 0
  });
  const [resumeModal, setResumeModal] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [lessonData, setLessonData] = useState<any>(null);
  
  // Estados do Narrador Dinâmico
  const [character, setCharacter] = useState({ id: 'pombinha', mood: 'padrao' });
  const [mascotMessage, setMascotMessage] = useState<string | null>(null);
  const [hearts, setHearts] = useState(5);
  const [bgMusicEnabled, setBgMusicEnabled] = useState(false);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  const encorajamentos = [
    "Glória a Deus!", "Isso mesmo!", "Muito bem!", "Servo bom!",
    "Continue assim!", "Amém!", "Sabedoria!", "Excelente!"
  ];

  useEffect(() => {
    bgMusicRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3');
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.05;
    return () => { bgMusicRef.current?.pause(); bgMusicRef.current = null; };
  }, []);

  const toggleMusic = () => {
    if (bgMusicEnabled) bgMusicRef.current?.pause();
    else bgMusicRef.current?.play().catch(() => {});
    setBgMusicEnabled(!bgMusicEnabled);
  };

  useEffect(() => {
    async function initLesson() {
      try {
        setLoading(true);
        // 1. Buscar dados da lição e do tema pai (narrador)
        const { data: lesson, error: lError } = await supabase
          .from('lessons')
          .select('*, themes:theme_id(character_id)')
          .eq('id', lessonId)
          .single();

        if (lError || !lesson) throw new Error('Lição não encontrada.');
        setSteps(lesson.content || []);
        setLessonData(lesson);
        
        // Lógica de Narrador: Lição > Tema > Pombinha
        const charId = (lesson as any).character_id || (lesson as any).themes?.character_id || 'pombinha';
        setCharacter({ id: charId, mood: 'padrao' });

        // Se o primeiro passo tiver um mood específico, aplica
        if (lesson.content && lesson.content[0]?.mood) {
          setCharacter(prev => ({ ...prev, mood: lesson.content[0].mood }));
        }

        const { data: stats } = await supabase.from('user_stats').select('hearts').eq('user_id', userId).single();
        if (stats) setHearts(stats.hearts ?? 5);
        // Desativado para testes: não encerra a lição se estiver sem vidas
        // if (stats && stats.hearts <= 0) { setGameOver(true); setLoading(false); return; }

        const { data: progress } = await supabase
          .from('progresso_licoes')
          .select('*')
          .eq('licao_id', lessonId)
          .eq('user_id', userId)
          .eq('status', 'em_progresso')
          .order('atualizado_em', { ascending: false }).limit(1).single();

        if (progress && progress.bloco_atual > 0) {
          setSession({ id: progress.id, acertos: progress.acertos || 0, erros: progress.erros || 0 });
          setCurrentStep(progress.bloco_atual);
          setResumeModal(true);
        } else {
          await startNewSession(lesson.content.length);
        }
      } catch (err: any) { setError(err.message); } finally { setLoading(false); }
    }
    initLesson();
  }, [lessonId, userId]);

  const startNewSession = async (totalSteps: number) => {
    setCurrentStep(0);
    setSession({ id: null, acertos: 0, erros: 0 });
    setSelectedOption(null);
    setFeedback({ show: false, correct: false, text: '' });
    
    const { data, error: sError } = await supabase
      .from('progresso_licoes')
      .insert({ 
        user_id: userId, 
        licao_id: lessonId, 
        total_blocos: totalSteps, 
        status: 'em_progresso', 
        bloco_atual: 0,
        acertos: 0,
        erros: 0
      })
      .select().single();
    if (data && !sError) setSession({ id: data.id, acertos: 0, erros: 0 });
  };

  const handleNext = async () => {
    const nextStep = currentStep + 1;
    if (nextStep >= steps.length) await finishLesson();
    else {
      setCurrentStep(nextStep);
      setSelectedOption(null);
      setFeedback({ show: false, correct: false, text: '' });
      setMascotMessage(null);
      
      // Lógica de Troca de Personagem & Mood
      const nextBlock = steps[nextStep];
      const themeCharId = lessonData?.themes?.character_id || 'pombinha';
      const stepCharId = nextBlock.character_id || themeCharId;
      const nextMood = nextBlock.mood || 'padrao';
      
      setCharacter({ id: stepCharId, mood: nextMood });
      
      await saveCheckpoint(nextStep);
    }
  };

  const saveCheckpoint = async (stepIndex: number) => {
    if (!session.id) return;
    await supabase.from('progresso_licoes').update({
      bloco_atual: stepIndex, acertos: session.acertos, erros: session.erros, atualizado_em: new Date().toISOString()
    }).eq('id', session.id);
  };

  const finishLesson = async () => {
    const xpBase = lessonData?.xp_reward || 20;
    const bonusPerfeito = session.erros === 0 ? 10 : 0;
    const penalidadeErro = session.erros * 2;
    const xpFinal = Math.max(5, (xpBase + bonusPerfeito) - penalidadeErro);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#f0c040', '#60c8f0', '#ffffff'] });
    if (session.id) {
      await supabase.from('progresso_licoes').update({ status: 'concluida', xp_ganho: xpFinal, concluido_em: new Date().toISOString() }).eq('id', session.id);
      await supabase.rpc('increment_user_xp', { uid: userId, amount: xpFinal });
    }
    setFeedback({ show: true, correct: true, text: `🎉 Parabéns! Você ganhou ${xpFinal} XP!` });
    setCharacter(prev => ({ ...prev, mood: 'fim' }));
    setMascotMessage("Excelente trabalho!");
    setTimeout(() => onClose(true), 3500);
  };

  const playSound = (type: 'correct' | 'wrong') => {
    const sounds = {
      correct: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
      wrong: 'https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3'
    };
    const audio = new Audio(sounds[type]);
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  const handleSelection = async (selected: number | boolean, correct: number | boolean) => {
    if (feedback.correct) return;
    const isCorrect = selected === correct;
    setSelectedOption(selected);
    if (isCorrect) {
      playSound('correct');
      setCharacter(prev => ({ ...prev, mood: 'acerto' }));
      setMascotMessage(encorajamentos[Math.floor(Math.random() * encorajamentos.length)]);
      setSession(prev => ({ ...prev, acertos: prev.acertos + 1 }));
      setFeedback({ show: true, correct: true, text: 'Muito bem! Resposta correta.' });
    } else {
      playSound('wrong');
      setCharacter(prev => ({ ...prev, mood: 'erro' }));
      setSession(prev => ({ ...prev, erros: prev.erros + 1 }));
      setFeedback({ show: true, correct: false, text: 'Ops! Tente novamente.' });
      // Desativado para testes: não perde vida ao errar
      /*
      const newHearts = Math.max(0, hearts - 1);
      setHearts(newHearts);
      await supabase.from('user_stats').update({ hearts: newHearts }).eq('user_id', userId);
      if (newHearts === 0) setTimeout(() => setGameOver(true), 1500);
      */
    }
  };

  const renderStep = () => {
    const currentBlock = steps[currentStep];
    if (!currentBlock) return null;

    const normalize = (str: string) => str?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || "";
    const type = normalize(currentBlock.type);
    const subtype = normalize(currentBlock.subtype);
    
    // Lógica de Seleção de Layout (Prioridade: Template Explícito > Tipo de Conteúdo)
    const layout = currentBlock.template || (subtype === 'versiculo' ? 'divine_voice' : (type === 'estimulo' ? 'mentor' : 'challenge'));

    switch (layout) {
      case 'divine_voice':
        return (
          <DivineVoiceTemplate 
            text={currentBlock.content.text} 
            reference={currentBlock.content.reference} 
            characterId={character.id} 
            mood={character.mood} 
          />
        );
      
      case 'scribe':
        return (
          <ScribeTemplate 
            characterId={character.id} 
            mood={character.mood} 
            message={currentBlock.content.text || currentBlock.content.reference} 
            subtype={subtype.replace(/_/g, ' ')} 
          />
        );

      case 'revelation':
        return (
          <RevelationTemplate 
            characterId={character.id} 
            message={currentBlock.content.text || currentBlock.content.reference} 
          />
        );

      case 'mentor':
        return (
          <MentorTemplate 
            characterId={character.id} 
            mood={character.mood} 
            message={currentBlock.content.text || currentBlock.content.reference} 
            subtype={subtype.replace(/_/g, ' ')} 
          />
        );

      case 'quote':
        return (
          <QuoteTemplate 
            text={currentBlock.content.text} 
            reference={currentBlock.content.reference} 
            characterId={character.id} 
            mood={character.mood} 
          />
        );

      case 'speaker':
        return (
          <SpeakerTemplate 
            characterId={character.id} 
            mood={character.mood} 
            message={currentBlock.content.text || currentBlock.content.reference} 
            subtype={subtype.replace(/_/g, ' ')} 
          />
        );

      case 'challenge':
      default:
        return (
          <ChallengeTemplate 
            question={currentBlock.content.question || "Qual é a resposta correta?"} 
            characterId={character.id} 
            mood={character.mood} 
            mascotMessage={mascotMessage}
          >
            <div className="options-list" style={{ width: '100%' }}>
              {subtype === 'multipla_escolha' && currentBlock.content.options.map((opt: string, idx: number) => (
                <motion.div 
                  key={idx} 
                  whileTap={{ scale: 0.98 }} 
                  className={`option-card ${selectedOption === idx ? (feedback.correct ? 'correct' : 'wrong') : ''}`} 
                  onClick={() => handleSelection(idx, currentBlock.content.correct_index)} 
                  style={{ padding: '16px', marginBottom: '12px', textAlign: 'center' }}
                >
                  <span className="option-text">{opt}</span>
                </motion.div>
              ))}
            </div>
          </ChallengeTemplate>
        );
    }
  };

  if (loading) return (
    <div className="lesson-screen-container" style={{ padding: '20px' }}>
      <div className="lesson-header" style={{ border: 'none', padding: '0 0 20px 0' }}>
        <div className="skeleton skeleton-bar"></div>
      </div>
      <div className="lesson-scene">
        <div className="skeleton" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px' }}></div>
        <div className="speech-bubble-main" style={{ border: 'none', boxShadow: 'none', background: 'rgba(255,255,255,0.05)' }}>
          <div className="skeleton skeleton-text" style={{ width: '90%' }}></div>
          <div className="skeleton skeleton-text" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div style={{ marginTop: 'auto', paddingBottom: '20px' }}>
        <div className="skeleton skeleton-option"></div>
        <div className="skeleton skeleton-option"></div>
        <div className="skeleton skeleton-option"></div>
      </div>
    </div>
  );

  if (gameOver) return (
    <div className="game-over-modal">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="heart-broken">💔</motion.div>
        <h2 style={{ color: 'white', marginBottom: 10 }}>Você está sem vidas!</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 30 }}>Tire um momento para refletir e orar. <br/> Suas vidas recarregarão em breve.</p>
        <button className="btn-primary" onClick={() => onClose(false)}>VOLTAR PARA A TRILHA</button>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, x: feedback.show && !feedback.correct ? [0, -10, 10, -10, 10, 0] : 0 }} 
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.3 }, x: { duration: 0.4 } }}
      className="lesson-screen-container"
    >
      <AnimatePresence>
        {resumeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="lesson-modal active">
            <div className="modal-content">
              <span className="modal-icon">🔄</span>
              <h3>Continuar de onde parou?</h3>
              <p>Identificamos que você já iniciou esta lição anteriormente.</p>
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => { setResumeModal(false); startNewSession(steps.length); }}>REINICIAR</button>
                <button className="btn-primary-duo" onClick={() => setResumeModal(false)}>CONTINUAR</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="lesson-header" style={{ borderBottom: 'none' }}>
        <button className="close-btn" onClick={() => onClose(false)}>✕</button>
        <div className="progress-bar-container">
          {steps.map((_, idx) => (
            <div key={idx} className={`progress-segment ${idx <= currentStep ? 'filled' : ''}`}>
               <div className="segment-fill" style={{ width: idx < currentStep ? '100%' : (idx === currentStep ? '100%' : '0%') }}></div>
            </div>
          ))}
        </div>
        <button onClick={toggleMusic} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', opacity: bgMusicEnabled ? 1 : 0.4, padding: '0 10px' }}>
          {bgMusicEnabled ? '🎵' : '🔇'}
        </button>
        <div className="stat-item hearts" style={{ fontSize: '18px', color: 'var(--accent-red)', fontWeight: 'bold' }}>
          <span>❤️</span><span className="stat-value" style={{ marginLeft: '4px' }}>{hearts}</span>
        </div>
      </header>

      <main className="exercise-container">
        {renderStep()}
      </main>

      {!feedback.show && (
        <footer className="lesson-footer-duo">
            <button 
              className="btn-primary-duo" 
              disabled={selectedOption === null && steps[currentStep] && normalize(steps[currentStep].type) !== 'estimulo'} 
              onClick={steps[currentStep] && normalize(steps[currentStep].type) === 'estimulo' ? handleNext : () => {}}
            >
              {currentStep >= steps.length - 1 ? 'FINALIZAR' : (steps[currentStep] && normalize(steps[currentStep].type) === 'estimulo' ? 'CONTINUAR' : 'VERIFICAR')}
            </button>
        </footer>
      )}

      <AnimatePresence>
        {feedback.show && (
          <motion.div 
            initial={{ y: 100, x: "-50%", opacity: 0 }} 
            animate={{ y: 0, x: "-50%", opacity: 1 }} 
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            style={{ 
              position: 'fixed', 
              bottom: '20px', 
              left: '50%', 
              width: 'calc(100% - 40px)', 
              maxWidth: '440px', 
              background: feedback.correct ? '#2ecc71' : '#ff4b4b', 
              padding: '20px', 
              zIndex: 5000, 
              borderRadius: '24px', 
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'white', marginBottom: '4px', fontSize: '18px', fontWeight: '800' }}>
                      {feedback.correct ? '✨ Muito bem!' : '❌ Ops, tente novamente!'}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', lineHeight: '1.4' }}>
                      {feedback.text}
                    </p>
                </div>
                <button 
                  className="btn-primary-duo" 
                  style={{ 
                    width: 'auto', 
                    padding: '10px 20px', 
                    background: 'white', 
                    color: feedback.correct ? '#2ecc71' : '#ff4b4b', 
                    fontSize: '14px',
                    borderBottom: '4px solid rgba(0,0,0,0.1)' 
                  }} 
                  onClick={feedback.correct ? handleNext : () => {
                    setFeedback({ ...feedback, show: false });
                    setSelectedOption(null);
                  }}
                >
                  {feedback.correct ? 'CONTINUAR' : 'TENTAR NOVAMENTE'}
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const normalize = (str: string) => str?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || "";
