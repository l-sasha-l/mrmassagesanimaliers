import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import videoMassage from '../assets/mp4/video-massage.mp4';
import logo from '../assets/picture/logo-clair.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  // Définir un mapping entre les titres du menu et les IDs des sections
  const menuItems = [
    { title: 'Présentation', id: 'presentation' },
    { title: 'Tarifs', id: 'pricingsection' },
    { title: 'Carte', id: 'deplacement' },
    { title: 'Avis', id: 'avis' },
    { title: 'Contact', id: 'contact' }

  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Détermine si on scroll vers le haut
      if (currentScrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]); // Ajout de lastScrollY comme dépendance

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="relative h-screen w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoMassage}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <nav className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      } ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="relative z-30">
              <img 
                src={logo} 
                alt="Logo" 
                className={`transition-all duration-500 rounded-full object-cover ${
                  isScrolled ? 'w-16 h-16' : 'w-32 h-32'
                }`}
              />
            </div>

            <button
              className={`relative z-30 text-white focus:outline-none ${
                isMobile || isScrolled ? 'block' : 'hidden'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div 
          className={`fixed inset-0 z-10 bg-black/95 transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            top: '0',
            height: '100vh',
            position: 'fixed'
          }}
        >
          <div className="h-full flex items-center justify-center px-4">
            <ul className="flex flex-col items-center space-y-12">
              {menuItems.map((item, index) => (
                <li 
                  key={item.title}
                  className={`transform transition-all duration-500 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <a
                    href={`#${item.id}`}
                    className="text-white text-4xl font-light tracking-wider hover:text-gray-300 transition-colors relative group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                    <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenu centré desktop */}
      <div className={`absolute inset-0 hidden md:flex flex-col justify-center items-center text-center transition-all duration-1000 ${
        isScrolled ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        {/* Menu centré */}
        <div className="mb-24">
          <ul className="flex space-x-16 text-white text-2xl font-light tracking-wider">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a
                  href={`#${item.id}`}
                  className="relative group transition-all duration-300 hover:text-gray-200"
                >
                  {item.title}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Titre harmonisé */}
        <div className="text-white space-y-2">
          <h1 className="text-6xl font-light tracking-widest">
            MR MASSAGES
          </h1>
          <p className="text-4xl font-light tracking-wider text-gray-200">
            ANIMALIERS
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;