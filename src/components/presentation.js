import React from 'react';
import photo from '../assets/picture/photohades.jpg'; // Import de votre image locale

function Presentation() {
  return (
    <section id="presentation" className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-6 md:px-24">
        {/* Texte à gauche avec une largeur maximale et padding */}
        <div className="md:w-1/2 max-w-lg">
          <h2 className="text-4xl font-bold mb-4">Présentation</h2>
          <h3 className="text-2xl font-semibold mb-4">QUI SUIS-JE</h3>
          <p className="text-lg leading-relaxed mb-6">
            Bonjour, moi c'est Morgane. Passionnée depuis toujours par les animaux, j'ai maintenant
            l'honneur de travailler avec eux mais surtout pour eux.
          </p>
          <h3 className="text-2xl font-semibold mb-4">LE MÊME MASSAGE POUR TOUS ?</h3>
          <p className="text-lg leading-relaxed mb-6">
            Chaque animal est différent, c'est pour cela que plusieurs évaluations sont faites au
            préalable. Cela me permet de créer un massage sur mesure pour chacun.
          </p>
          <h3 className="text-2xl font-semibold mb-4">POUR QUI ? POUR QUOI ?</h3>
          <p className="text-lg leading-relaxed">
            Pour tous les animaux, jeunes, vieillissants, sportifs, de compagnie ou de loisir... Pour
            accompagner la croissance, en préparation ou récupération de compétition, pour leur
            offrir un moment de détente physique et mental.
          </p>
        </div>

        {/* Image à droite avec la photo importée, taille agrandie sur desktop */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={photo} // Utilisation de l'image importée
            alt="Morgane"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-lg" // Agrandir sur desktop
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
