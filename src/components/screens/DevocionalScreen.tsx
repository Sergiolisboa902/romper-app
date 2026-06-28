"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import "@/styles/devocional.css";

interface Topico {
  ordem: number;
  icone: string;
  titulo: string;
  conteudo: string;
  tags: string[];
}

interface Devocional {
  id: string;
  data: string;
  periodo: string;
  versao: string;
  versiculo: {
    texto: string;
    referencia: string;
  };
  topicos: Topico[];
  promessa: string;
  meditacao: string;
}

export const DevocionalScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [devocionais, setDevocionais] = useState<Devocional[]>([]);
  const [activeTab, setActiveTab] = useState<"Manhã" | "Noite">("Manhã");
  const [version, setVersion] = useState<"original" | "simples" | "fiel">("original");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDevocional() {
      setLoading(true);
      
      const mes = currentDate.getMonth() + 1;
      const dia = currentDate.getDate();
      
      // Busca perpétua: Procuramos por registros do mês e dia, ignorando o ano.
      // Como os dados estão salvos com o ano 2026, vamos "mapear" a busca para esse ano base.
      const searchDate = `2026-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;

      const { data, error } = await supabase
        .from("devocionais")
        .select("*")
        .eq("data", searchDate)
        .eq("versao", version);

      if (!error && data && data.length > 0) {
        setDevocionais(data);
        
        // Lógica de período inteligente: só muda automaticamente se for a data de "HOJE" real
        const today = new Date();
        const isRealToday = currentDate.getDate() === today.getDate() && 
                           currentDate.getMonth() === today.getMonth();

        if (isRealToday) {
          const currentHour = today.getHours();
          // Manhã: 05h às 17h | Noite: 18h às 04h
          const periodoSugerido = (currentHour >= 18 || currentHour < 5) ? "Noite" : "Manhã";
          
          // Só muda se o devocional do período sugerido existir
          if (data.some(d => d.periodo === periodoSugerido)) {
            setActiveTab(periodoSugerido);
          }
        }
      } else {
        setDevocionais([]);
      }
      setLoading(false);
    }

    fetchDevocional();
  }, [currentDate, version]);

  const changeDate = (days: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  const formatDateDisplay = () => {
    return currentDate.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'long',
      year: currentDate.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  if (loading) return <div className="devocional-screen">Carregando alimento espiritual...</div>;

  const manha = devocionais.find((d) => d.periodo === "Manhã");
  const noite = devocionais.find((d) => d.periodo === "Noite");

  const renderPanel = (d: Devocional | undefined, type: "manha" | "noite") => {
    if (!d) return <div className="section">Devocional não encontrado para este período nesta versão.</div>;

    if (version === 'fiel') {
      const textoCorrido = (d as any).texto_fiel || "";
      const versiculo = d.versiculo || { texto: '', referencia: '' };
      return (
        <div className="mobile-panel">
          <div className={`verse-card ${type}`}>
            <p className="verse-text">{versiculo.texto}</p>
            <div className="verse-ref">{versiculo.referencia}</div>
          </div>

          <div className="fiel-card">
            {textoCorrido ? (
              <p className="fiel-text">{textoCorrido}</p>
            ) : (
              <div style={{ textAlign: 'center', color: 'var(--text-soft)', padding: '20px 0' }}>
                <p>Texto clássico na íntegra em processamento.</p>
                <p style={{ fontSize: '0.8rem', marginTop: 10, opacity: 0.8 }}>
                  Por favor, utilize a versão Original ou Simples enquanto isso.
                </p>
              </div>
            )}
          </div>

          {d.promessa && (
            <div className="promise">
              {d.promessa}
            </div>
          )}

          {d.meditacao && (
            <div className="reflection">
              <div className="reflection-label">✨ Meditação</div>
              <p className="reflection-text">{d.meditacao}</p>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="mobile-panel">
        <div className={`verse-card ${type}`}>
          <p className="verse-text">{d.versiculo.texto}</p>
          <div className="verse-ref">{d.versiculo.referencia}</div>
        </div>

        {(d.topicos || []).map((t, i) => (
          <div key={i} className={`section s${(i % 5) + 1}`}>
            <span className="section-icon">{t.icone}</span>
            <div className="section-title">{t.titulo}</div>
            <p className="section-text">{t.conteudo}</p>
          </div>
        ))}

        {d.promessa && (
          <div className="promise">
            {d.promessa}
          </div>
        )}

        {d.meditacao && (
          <div className="reflection">
            <div className="reflection-label">✨ Meditação</div>
            <p className="reflection-text">{d.meditacao}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="devocional-screen">
      <div className="devocional-container">
        {/* Header */}
        <div className="dev-header">
          <div className="sun-wrap">
            <div className="sun">
              <div className="sun-circle"></div>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <div
                  key={deg}
                  className="sun-ray"
                  style={{
                    transform: `translate(-50%,-50%) rotate(${deg}deg) translateY(-16px) translate(50%,50%)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="dev-tag">☀️ ROMPER DIÁRIO</div>
          <h1 className="dev-title">Manhã &amp; Noite</h1>
          <p className="dev-subtitle">
            {activeTab === "Manhã" ? manha?.versiculo.referencia : noite?.versiculo.referencia}
          </p>

          {/* Seletor de Versão de 3 Estados */}
          <div className="version-toggle-container">
            <div className="version-selector-tabs">
              <button 
                type="button"
                className={`version-tab-item ${version === 'fiel' ? 'active' : ''}`}
                onClick={() => setVersion('fiel')}
              >
                Fiel
              </button>
              <button 
                type="button"
                className={`version-tab-item ${version === 'original' ? 'active' : ''}`}
                onClick={() => setVersion('original')}
              >
                Original
              </button>
              <button 
                type="button"
                className={`version-tab-item ${version === 'simples' ? 'active' : ''}`}
                onClick={() => setVersion('simples')}
              >
                Simples
              </button>
            </div>
            <span className="version-text-label">
              {version === 'fiel' && 'Linguagem Original (Íntegra)'}
              {version === 'original' && 'Linguagem Original (Tópicos)'}
              {version === 'simples' && 'Versão Simplificada (Tópicos)'}
            </span>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="dev-tab-bar">
          <button
            className={`dev-tab-btn ${activeTab === "Manhã" ? "active-manha" : ""}`}
            onClick={() => setActiveTab("Manhã")}
          >
            📖 Manhã
          </button>
          <button
            className={`dev-tab-btn ${activeTab === "Noite" ? "active-noite" : ""}`}
            onClick={() => setActiveTab("Noite")}
          >
            ✨ Noite
          </button>
        </div>

        {/* Content View */}
        <div className="dev-content-wrapper">
          {activeTab === "Manhã" ? renderPanel(manha, "manha") : renderPanel(noite, "noite")}
        </div>

        {/* Date Navigation */}
        <div className="date-nav-bar">
          <button className="date-nav-btn" onClick={() => changeDate(-1)}>
            ‹ Anterior
          </button>
          <div className="date-nav-display">
            <span className="date-nav-value">{formatDateDisplay()}</span>
          </div>
          <button className="date-nav-btn" onClick={() => changeDate(1)}>
            Próximo ›
          </button>
        </div>

        {/* Closing */}
        <div className="closing">
          <div className="closing-line"></div>
          Que seu dia seja repleto da presença de Deus 🌤️
        </div>
      </div>
    </div>
  );
};
