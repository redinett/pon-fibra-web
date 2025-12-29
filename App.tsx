
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Planes } from './components/Planes';
import { Beneficios } from './components/Beneficios';
import { Cobertura } from './components/Cobertura';
import { Footer } from './components/Footer';
import { TopBar } from './components/TopBar';
import { LibroReclamaciones } from './components/LibroReclamaciones';
import { ComoPagar } from './components/ComoPagar';
import { PoliticaPrivacidad } from './components/PoliticaPrivacidad';
import { PlanesView } from './components/PlanesView';
import { Dudas } from './components/Dudas';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'reclamaciones' | 'como-pagar' | 'politica-privacidad' | 'planes' | 'dudas'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigate = (target: 'home' | 'reclamaciones' | 'como-pagar' | 'politica-privacidad' | 'planes' | 'dudas') => {
    setView(target);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar onNavigate={navigate} currentView={view} />
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero onNavigate={navigate} />
            <Planes />
            <Beneficios />
            <Cobertura />
          </>
        ) : view === 'reclamaciones' ? (
          <LibroReclamaciones />
        ) : view === 'como-pagar' ? (
          <ComoPagar />
        ) : view === 'politica-privacidad' ? (
          <PoliticaPrivacidad />
        ) : view === 'planes' ? (
          <PlanesView />
        ) : (
          <Dudas />
        )}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
