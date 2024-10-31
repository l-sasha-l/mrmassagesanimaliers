import React from 'react';
import photoCanin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg'; // Import de la première image
import photoCanin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg'; // Import de la deuxième image
import photoCanin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg'; // Import de la troisième image

function PricingCanin() {
    return (
        <section id="pricing-canin" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Tarifs Canins</h2>
    
            {/* Carrousel de cartes alignées horizontalement */}
            <div className="flex overflow-x-scroll hide-scroll-bar space-x-6 px-4 md:px-0 justify-center">
              {/* Card 1 */}
              <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
                <div>
                  <div className="bg-yellow-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
                    Pour tous
                  </div>
                  <div className="p-6">
                    <ul className="text-lg mb-4">
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Massage confort "Simple" (adultes)</span>
                        <span className="ml-4">55 €</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Massage confort "Simple" (jeunes/vieillissants)</span>
                        <span className="ml-4">40 €</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Massage enveloppement "Max"</span>
                        <span className="ml-4">75 €</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Enveloppement 1 zone*</span>
                        <span className="ml-4">7 €</span>
                      </li>
                      <li className="flex justify-between py-2">
                        <span className="mr-4">Enveloppement seul corps complet</span>
                        <span className="ml-4">30 €</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Photo arrondie en bas */}
                <div className="flex justify-center mt-4 mb-4">
                  <img
                    src={photoCanin1} // Première photo
                    alt="Canin 1"
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
              </div>
    
              {/* Card 2 */}
              <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
                <div>
                  <div className="bg-purple-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
                    Suivi Sportif
                  </div>
                  <div className="p-6">
                    <ul className="text-lg mb-4">
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Massage prépa</span>
                        <span className="ml-4">25 €</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Massage récup</span>
                        <span className="ml-4">35 €</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Pack concours (prépa + récup)</span>
                        <span className="ml-4">50 €</span>
                      </li>
                      <li className="flex justify-between py-2">
                        <span className="mr-4">Enveloppement 1 zone*</span>
                        <span className="ml-4">7 €</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Photo arrondie en bas */}
                <div className="flex justify-center mt-4 mb-4">
                  <img
                    src={photoCanin2} // Deuxième photo
                    alt="Canin 2"
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
              </div>
    
              {/* Card 3 */}
              <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
                <div>
                  <div className="bg-teal-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
                    Packs**
                  </div>
                  <div className="p-6">
                    <ul className="text-lg mb-4">
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Forfait premium: 5 Séances "Simple"</span>
                        <span className="ml-4">260 €</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Forfait Gold 10 "Simple"</span>
                        <span className="ml-4">495 €</span>
                      </li>
                      <li className="flex justify-between py-2 border-b border-gray-300">
                        <span className="mr-4">Forfait Mixte 10 "Simple" Inter-espèce</span>
                        <span className="ml-4">-10% au total</span>
                      </li>
                      <li className="flex justify-between py-2">
                        <span className="mr-4">Forfait Prestige 10 "Max"</span>
                        <span className="ml-4">635 €</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Photo arrondie en bas */}
                <div className="flex justify-center mt-4 mb-4">
                  <img
                    src={photoCanin3} // Troisième photo
                    alt="Canin 3"
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

export default PricingCanin;
