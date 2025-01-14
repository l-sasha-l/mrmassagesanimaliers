// import React from 'react';
// import photo from '../assets/picture/photohades.jpg'; // Import de votre image locale

// function Presentation() {
//   return (
//     <section id="presentation" className="py-16 bg-gray-100">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-24">
//         {/* Texte à gauche avec une largeur maximale et padding */}
//         <div className="md:w-1/2 max-w-lg">
//           <h2 className="text-4xl font-bold mb-4">Présentation</h2>
//           <h3 className="text-2xl font-semibold mb-4">QUI SUIS-JE</h3>
//           <p className="text-lg leading-relaxed mb-6">
//             Bonjour, moi c'est Morgane. Passionnée depuis toujours par les animaux, j'ai maintenant
//             l'honneur de travailler avec eux mais surtout pour eux.
//           </p>
//           <h3 className="text-2xl font-semibold mb-4">LE MÊME MASSAGE POUR TOUS ?</h3>
//           <p className="text-lg leading-relaxed mb-6">
//             Chaque animal est différent, c'est pour cela que plusieurs évaluations sont faites au
//             préalable. Cela me permet de créer un massage sur mesure pour chacun.
//           </p>
//           <h3 className="text-2xl font-semibold mb-4">POUR QUI ? POUR QUOI ?</h3>
//           <p className="text-lg leading-relaxed">
//             Pour tous les animaux, jeunes, vieillissants, sportifs, de compagnie ou de loisir... Pour
//             accompagner la croissance, en préparation ou récupération de compétition, pour leur
//             offrir un moment de détente physique et mental.
//           </p>
//         </div>

//         {/* Image à droite avec la photo importée, taille agrandie sur desktop */}
//         <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
//           <img
//             src={photo} // Utilisation de l'image importée
//             alt="Morgane"
//             className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-lg" // Agrandir sur desktop
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Presentation;

// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import useInView from '../hook/useInView.js'; // Assurez-vous que le hook est dans le même dossier ou ajustez le chemin
// import photo from '../assets/picture/photohades.jpg';

// // Composant pour afficher le texte en animation progressive
// const AnimatedText = ({ text, isInView }) => {
//   return (
//     <motion.div
//       className="text-lg leading-relaxed"
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={{
//         visible: {
//           opacity: 1,
//           transition: {
//             staggerChildren: 0.05, // Intervalle entre chaque lettre
//           },
//         },
//         hidden: { opacity: 0 },
//       }}
//     >
//       {text.split("").map((char, index) => (
//         <motion.span key={index} variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}>
//           {char}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// function Presentation() {
//   const ref = useRef();
//   const isInView = useInView(ref); // Utilise le hook pour détecter si la section est visible

//   return (
//     <section id="presentation" className="py-16 bg-gray-100" ref={ref}>
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-24">
        
//         {/* Texte avec effet d'écriture progressive */}
//         <div className="md:w-1/2 max-w-lg">
//           <h2 className="text-4xl font-bold mb-4">Présentation</h2>
//           <h3 className="text-2xl font-semibold mb-4">QUI SUIS-JE</h3>
//           <AnimatedText text="Bonjour, moi c'est Morgane. Passionnée depuis toujours par les animaux, j'ai maintenant l'honneur de travailler avec eux mais surtout pour eux." isInView={isInView} />
//           <h3 className="text-2xl font-semibold mb-4">LE MÊME MASSAGE POUR TOUS ?</h3>
//           <AnimatedText text="Chaque animal est différent, c'est pour cela que plusieurs évaluations sont faites au préalable. Cela me permet de créer un massage sur mesure pour chacun." isInView={isInView} />
//           <h3 className="text-2xl font-semibold mb-4">POUR QUI ? POUR QUOI ?</h3>
//           <AnimatedText text="Pour tous les animaux, jeunes, vieillissants, sportifs, de compagnie ou de loisir... Pour accompagner la croissance, en préparation ou récupération de compétition, pour leur offrir un moment de détente physique et mental." isInView={isInView} />
//         </div>

//         {/* Image à droite */}
//         <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
//           <img
//             src={photo}
//             alt="Morgane"
//             className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Presentation;

// import React, { useRef } from 'react';
// import photo from '../assets/picture/photohades.jpg';
// import useInView from '../animation/useInView';
// import AnimatedSection from '../animation/AnimatedSection';

// function Presentation() {
//   const ref = useRef();
//   const isInView = useInView(ref);

//   const textArray = [
//     "Présentation",
//     "QUI SUIS-JE",
//     "Bonjour, moi c'est Morgane. Passionnée depuis toujours par les animaux, j'ai maintenant l'honneur de travailler avec eux mais surtout pour eux.",
//     "LE MÊME MASSAGE POUR TOUS ?",
//     "Chaque animal est différent, c'est pour cela que plusieurs évaluations sont faites au préalable. Cela me permet de créer un massage sur mesure pour chacun.",
//     "POUR QUI ? POUR QUOI ?",
//     "Pour tous les animaux, jeunes, vieillissants, sportifs, de compagnie ou de loisir... Pour accompagner la croissance, en préparation ou récupération de compétition, pour leur offrir un moment de détente physique et mental.",
//   ];

//   return (
//     <section id="presentation" className="py-16 bg-gray-100" ref={ref}>
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-24">
        
//         {/* Texte avec effet d'écriture progressive sur chaque ligne */}
//         <div className="md:w-1/2 max-w-lg">
//           <AnimatedSection textArray={textArray} isInView={isInView} />
//         </div>

//         {/* Image à droite */}
//         <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
//           <img
//             src={photo}
//             alt="Morgane"
//             className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Presentation;

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
