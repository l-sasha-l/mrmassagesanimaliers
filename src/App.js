import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './components/header';
import Presentation from './components/presentation';
import PricingEquin from './components/PricingEquin';
import PricingCanin from './components/pricingcanin';
import Contact from './components/contact';
import Map from './components/map';
import Avis from './components/avis'
import Footer from './components/footer';
import MentionsLegalesModal from './components/MentionsLegalesModal';
import './styles/typography.css';
import logo from './assets/picture/logoBG.png';
import PricingSection from './components/PricingSection';
import { equinData } from './data/equinData';
import { caninData } from './data/caninData';

// Composant LoadingSpinner
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#fffcf4] flex items-center justify-center z-50">
      <div className="relative">
        <div className="animate-spin-slow w-72 h-72 perspective-1000">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-full h-full object-contain animate-flip"
          />
        </div>
        <p className="text-[#785444] text-lg mt-4 text-center animate-pulse">
          Chargement...
        </p>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMentionsLegalesOpen, setMentionsLegalesOpen] = useState(false);

  const openMentionsLegales = () => setMentionsLegalesOpen(true);
  const closeMentionsLegales = () => setMentionsLegalesOpen(false);

  useEffect(() => {
    // Simule un temps de chargement pour les ressources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 secondes de chargement

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMentionsLegalesOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMentionsLegalesOpen]);


  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Header />
      <main>
        <Presentation />
        
        {/* Section Equin */}
        <PricingSection {...equinData} />
        
        <div className="py-3 bg-[#fffcf4]">
          <div className="max-w-7xl mx-auto flex items-center gap-4 px-4">
            <div className="flex-grow h-px bg-[#734930] opacity-20"></div>
            <span className="text-[#734930] opacity-40 italic">✦</span>
            <div className="flex-grow h-px bg-[#734930] opacity-20"></div>
          </div>
        </div>

        {/* Section Canin */}
        <PricingSection {...caninData} />
        
        <Map />
        <Avis />
        <Contact />
      </main>
      <Footer onOpenMentionsLegales={openMentionsLegales} />
    </div>
  );
}

export default App;