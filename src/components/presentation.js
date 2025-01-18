import React, { useRef, useEffect, useState } from 'react';
import photo from '../assets/picture/photohades.jpg';
import useInView from '../animation/useInView';
import AnimatedSection from '../animation/AnimatedSection';

function Presentation() {
  const ref = useRef();
  const isInView = useInView(ref);

  const textArray = [
    { text: "Présentation", bold: true },
    { text: "QUI SUIS-JE", bold: true },
    "Bonjour, moi c'est Morgane. Passionnée depuis toujours par les animaux, j'ai maintenant l'honneur de travailler avec eux mais surtout pour eux.",
    { text: "LE MÊME MASSAGE POUR TOUS ?", bold: true },
    "Chaque animal est différent, c'est pour cela que plusieurs évaluations sont faites au préalable. Cela me permet de créer un massage sur mesure pour chacun.",
    { text: "POUR QUI ? POUR QUOI ?", bold: true },
    "Pour tous les animaux, jeunes, vieillissants, sportifs, de compagnie ou de loisir... Pour accompagner la croissance, en préparation ou récupération de compétition, pour leur offrir un moment de détente physique et mental.",
  ];

  // Vérifie si l'utilisateur est sur mobile et déclenche l'animation
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Vérifie au premier rendu
    window.addEventListener('resize', checkMobile); // Vérifie sur redimensionnement
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="presentation" className="py-16 bg-gray-100 rounded-b-2xl" ref={ref} style={{ backgroundColor: '#fffcf4' }}>
      {/* <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-24"> */}
            <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-24"
        // style={{ fontFamily: 'Itim, sans-serif', color: '#785444' }}
        style={{ color: '#785444' }}
      >
      
      <div className="md:w-1/2 max-w-lg">
        <AnimatedSection
          textArray={textArray.map((item) =>
            typeof item === 'string' ? item : (
              <span className={item.bold ? 'font-bold' : ''}>{item.text}</span>
            )
          )}
          isInView={isInView || isMobile}
        />
      </div>
        
        {/* <div className="md:w-1/2 max-w-lg">
          <AnimatedSection textArray={textArray} isInView={isInView || isMobile} />
        </div> */}

        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={photo}
            alt="Morgane"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
            style={{ borderColor: '#785444', borderWidth: '2px' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
