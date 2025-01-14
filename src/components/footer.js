// // src/components/Footer.js
// import React from 'react';

// const Footer = ({ onOpenMentionsLegales }) => {
//   return (
//     <footer className="bg-gray-800 p-4 text-center">
//       <button
//         onClick={onOpenMentionsLegales}
//         className="text-white underline"
//       >
//         Mentions légales
//       </button>
//     </footer>
//   );
// };

// export default Footer;

// Footer.js
import React from 'react';

const Footer = ({ onOpenMentionsLegales }) => {
  return (
    <footer className="bg-[#785444] p-6 text-center">
      <button
        onClick={onOpenMentionsLegales}
        className="text-[#fffcf4] hover:opacity-80 transition-opacity duration-300 text-sm md:text-base border-b border-[#fffcf4]/30 hover:border-[#fffcf4] pb-0.5"
      >
        Mentions légales
      </button>
      <div className="text-[#fffcf4] transition-opacity duration-300 text-xs md:text-base border-b border-[#fffcf4]/30 pb-0.5">
      <br/>©2025 MR Massages animaliers. 
      <br/>Tous droits reservés 
      <br/>Site conçu par: MR MASSAGES ANIMALIERS.
      </div>
    </footer>
  );
};

export default Footer;