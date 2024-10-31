// import React from 'react';

// function Pricing() {
//   return (
//     <section id="pricing" className="py-16 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Tarifs Équins</h2>

//         {/* Carrousel de cartes */}
//         <div className="flex overflow-x-scroll hide-scroll-bar space-x-6 px-4 md:px-0 justify-center">
//           {/* Card 1 */}
//           <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <div className="bg-blue-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//               Pour tous
//             </div>
//             <div className="p-6">
//               <ul className="text-lg mb-4">
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Massage confort "Simple" (adultes)</span>
//                   <span className="ml-4">75 €</span>
//                 </li>
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Massage confort "Simple" (bébés/retraités)</span>
//                   <span className="ml-4">60 €</span>
//                 </li>
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Massage enveloppement "Max"</span>
//                   <span className="ml-4">110 €</span>
//                 </li>
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Drainage lymphatique</span>
//                   <span className="ml-4">50 €</span>
//                 </li>
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Enveloppement 1 zone*</span>
//                   <span className="ml-4">15 €</span>
//                 </li>
//                 <li className="flex justify-between py-2">
//                   <span className="mr-4">Enveloppement seul corps complet</span>
//                   <span className="ml-4">70 €</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <div className="bg-green-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//               Suivi Sportif
//             </div>
//             <div className="p-6">
//               <ul className="text-lg mb-4">
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Massage prépa</span>
//                   <span className="ml-4">35 €</span>
//                 </li>
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Massage récup</span>
//                   <span className="ml-4">45 €</span>
//                 </li>
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Pack concours (prépa + récup)</span>
//                   <span className="ml-4">70 €</span>
//                 </li>
//                 <li className="flex justify-between py-2">
//                   <span className="mr-4">Enveloppement 1 zone*</span>
//                   <span className="ml-4">15 €</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <div className="bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//               Packs**
//             </div>
//             <div className="p-6">
//               <ul className="text-lg mb-4">
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Forfait premium: 5 Séances "Simple"</span>
//                   <span className="ml-4">350 €</span>
//                 </li>
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Forfait Gold: 10 Séances "Simple"</span>
//                   <span className="ml-4">675 €</span>
//                 </li>
//                 <li className="flex justify-between py-2 border-b border-gray-300">
//                   <span className="mr-4">Forfait Mixte: 10 Séances Inter-espèce</span>
//                   <span className="ml-4">-10% au total</span>
//                 </li>
//                 <li className="flex justify-between py-2">
//                   <span className="mr-4">Forfait Prestige: 10 Séances "Max"</span>
//                   <span className="ml-4">935 €</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Pricing;

import React from 'react';
import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

function PricingEquin() {
  return (
    <section id="pricing-equin" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Tarifs Équins</h2>

        {/* Carrousel de cartes alignées horizontalement */}
        <div className="flex overflow-x-scroll hide-scroll-bar space-x-6 px-4 md:px-0 justify-center">
          {/* Card 1 */}
          <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
            <div>
              <div className="bg-blue-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
                Pour tous
              </div>
              <div className="p-6">
                <ul className="text-lg mb-4">
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Massage confort "Simple" (adultes)</span>
                    <span className="ml-4">75 €</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Massage confort "Simple" (bébés/retraités)</span>
                    <span className="ml-4">60 €</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Massage enveloppement "Max"</span>
                    <span className="ml-4">110 €</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Drainage lymphatique</span>
                    <span className="ml-4">50 €</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="mr-4">Enveloppement 1 zone*</span>
                    <span className="ml-4">15 €</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="mr-4">Enveloppement seul corps complet</span>
                    <span className="ml-4">70 €</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Photo arrondie en bas */}
            <div className="flex justify-center mt-4 mb-4">
              <img
                src={photoEquin1} // Première photo
                alt="Equin 1"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
            <div>
              <div className="bg-green-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
                Suivi Sportif
              </div>
              <div className="p-6">
                <ul className="text-lg mb-4">
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Massage prépa</span>
                    <span className="ml-4">35 €</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Massage récup</span>
                    <span className="ml-4">45 €</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Pack concours (prépa + récup)</span>
                    <span className="ml-4">70 €</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="mr-4">Enveloppement 1 zone*</span>
                    <span className="ml-4">15 €</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Photo arrondie en bas */}
            <div className="flex justify-center mt-4 mb-4">
              <img
                src={photoEquin2} // Deuxième photo
                alt="Equin 2"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
            <div>
              <div className="bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
                Packs**
              </div>
              <div className="p-6">
                <ul className="text-lg mb-4">
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Forfait premium: 5 Séances "Simple"</span>
                    <span className="ml-4">350 €</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Forfait Gold: 10 Séances "Simple"</span>
                    <span className="ml-4">675 €</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-300">
                    <span className="mr-4">Forfait Mixte: 10 Séances Inter-espèce</span>
                    <span className="ml-4">-10% au total</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="mr-4">Forfait Prestige: 10 Séances "Max"</span>
                    <span className="ml-4">935 €</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Photo arrondie en bas */}
            <div className="flex justify-center mt-4 mb-4">
              <img
                src={photoEquin3} // Troisième photo
                alt="Equin 3"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingEquin;

