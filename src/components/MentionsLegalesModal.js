// // src/components/MentionsLegalesModal.js
// import React from 'react';

// const MentionsLegalesModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg max-w-4xl w-full mx-4 max-h-full overflow-y-auto relative">
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 text-red-500 font-bold text-lg"
//         >
//           Fermer
//         </button>
        
//         <h1 className="text-2xl md:text-3xl font-bold mb-4">Mentions légales</h1>

//         <section className="mb-6">
//           <h2 className="text-lg md:text-2xl font-semibold mb-2">1. Éditeur du site</h2>
//           <p>Nom de la société / Nom de l’entrepreneur : [Nom de votre entreprise ou votre nom]</p>
//           <p>Statut juridique : [ex: SAS, SARL, auto-entrepreneur]</p>
//           <p>Capital social : [Montant du capital]</p>
//           <p>Siège social : [Adresse du siège social]</p>
//           <p>Numéro de téléphone : [Numéro de téléphone]</p>
//           <p>Email : [Adresse email]</p>
//           <p>Numéro SIRET : [Numéro de SIRET]</p>
//           <p>Numéro RCS : [Numéro RCS]</p>
//           <p>Directeur de publication : [Nom du directeur]</p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-lg md:text-2xl font-semibold mb-2">2. Hébergeur du site</h2>
//           <p>Nom de l’hébergeur : [Nom de l’hébergeur]</p>
//           <p>Adresse de l’hébergeur : [Adresse de l’hébergeur]</p>
//           <p>Téléphone de l’hébergeur : [Numéro de téléphone]</p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-lg md:text-2xl font-semibold mb-2">3. Propriété intellectuelle</h2>
//           <p>L’ensemble du contenu de ce site est la propriété exclusive de [Nom de l’entreprise]. Toute reproduction est interdite sans autorisation.</p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-lg md:text-2xl font-semibold mb-2">4. Responsabilité</h2>
//           <p>Les informations sont présentées à titre indicatif. [Nom de l'entreprise] ne saurait être tenue responsable de l’utilisation de ces informations.</p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-lg md:text-2xl font-semibold mb-2">5. Absence de collecte de données</h2>
//           <p>Ce site ne collecte ni cookies ni données personnelles.</p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-lg md:text-2xl font-semibold mb-2">6. Droit applicable et juridiction</h2>
//           <p>Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront compétents.</p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default MentionsLegalesModal;


// MentionsLegalesModal.js
import React from 'react';

const MentionsLegalesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#785444]/30 backdrop-blur-sm z-50 p-4">
      <div className="bg-[#fffcf4] p-8 rounded-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative shadow-xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[#785444] hover:opacity-70 transition-opacity duration-300 font-medium text-lg px-4 py-2 rounded-lg hover:bg-[#785444]/10"
        >
          Fermer
        </button>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-[#785444]">Mentions légales</h1>

        <div className="space-y-8">
          {[
            {
              title: "1. Éditeur du site",
              content: [
                "Nom de la société / Nom de l'entrepreneur : MR MASSAGES ANIMALIERS / Morgane RIEHL",
                "Statut juridique : auto-entrepreneur",
                "Siège social : Pierre-levée",
                "Numéro de téléphone : 06.87.93.34.16",
                "Email : mr_massages.animaliers@yahoo.com",
                "Numéro SIRET : 98007417300017",
                "Numéro RCS : 980074173",
                "Directeur de publication : RIEHL Morgane"
              ]
            },
            {
              title: "2. Hébergeur du site",
              content: [
                "Nom de l'hébergeur : [Nom de l'hébergeur]",
                "Adresse de l'hébergeur : [Adresse de l'hébergeur]",
                "Téléphone de l'hébergeur : [Numéro de téléphone]"
              ]
            },
            {
              title: "3. Propriété intellectuelle",
              content: [
                "L'ensemble du contenu de ce site est la propriété exclusive de MR MASSAGES ANIMALIERS. Toute reproduction est interdite sans autorisation."
              ]
            },
            {
              title: "4. Responsabilité",
              content: [
                "Les informations sont présentées à titre indicatif. MR MASSAGES ANIMALIERS ne saurait être tenue responsable de l'utilisation de ces informations."
              ]
            },
            {
              title: "5. Absence de collecte de données",
              content: [
                "Ce site ne collecte ni cookies ni données personnelles."
              ]
            },
            {
              title: "6. Droit applicable et juridiction",
              content: [
                "Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront compétents."
              ]
            }
          ].map((section, index) => (
            <section key={index} className="pb-6 border-b border-[#785444]/10 last:border-0">
              <h2 className="text-lg md:text-2xl font-semibold mb-4 text-[#785444]">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.content.map((text, i) => (
                  <p key={i} className="text-[#785444]/80">
                    {text}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesModal;