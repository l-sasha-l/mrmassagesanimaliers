import React, { useState, useEffect } from 'react';
// Importer la vidéo locale
import videoMassage from '../assets/mp4/video-massage.mp4';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll pour détecter si la page est scrollée
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);  // Détecter le scroll au-delà de 100px
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="relative h-screen w-full">
      {/* Vidéo en arrière-plan */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoMassage}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay pour foncer légèrement la vidéo */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Menu de navigation qui s'affiche après scroll ou en mobile */}
      <nav
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${
          isScrolled ? 'bg-black bg-opacity-75 p-4' : 'bg-transparent p-4'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Logo</div>

          {/* Bouton burger visible dès le début sur mobile et après scroll sur desktop */}
          <button
            className={`text-white focus:outline-none transition-all ${
              isScrolled ? 'block' : 'md:hidden'
            }`} // Le bouton burger apparaît après le scroll en grand écran
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menu mobile/burger qui s'affiche après avoir cliqué sur le bouton */}
        {isMobileMenuOpen && (
          <div className="mt-4">
            <ul className="flex flex-col md:space-x-8 space-y-4 md:space-y-0 text-white text-lg">
              <li><a href="#presentation" className="hover:text-gray-300">Présentation</a></li>
              <li><a href="#pricing" className="hover:text-gray-300">Tarifs</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#map" className="hover:text-gray-300">Carte</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Menu centré au milieu de l'écran visible avant scroll uniquement en grand écran */}
      <div className={`absolute inset-0 hidden md:flex justify-center items-center text-center transition-all duration-500 ${
        isScrolled ? 'opacity-0' : 'opacity-100'
      }`}>
        <ul className="flex space-x-8 text-white text-4xl font-bold">
          <li><a href="#presentation" className="hover:text-gray-300">Présentation</a></li>
          <li><a href="#pricing" className="hover:text-gray-300">Tarifs</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          <li><a href="#map" className="hover:text-gray-300">Carte</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
