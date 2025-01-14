// import React from 'react';
// import photoCanin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg'; // Import de la première image
// import photoCanin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg'; // Import de la deuxième image
// import photoCanin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg'; // Import de la troisième image

// function PricingCanin() {
//     return (
//         <section id="pricing-canin" className="py-16 bg-gray-100">
//           <div className="container mx-auto">
//             <h2 className="text-4xl font-bold text-center mb-12">Tarifs Canins</h2>
    
//             {/* Carrousel de cartes alignées horizontalement */}
//             <div className="flex overflow-x-visible space-x-6 px-4 md:px-0 justify-center">
//               {/* Card 1 */}
//               <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//                 <div>
//                   <div className="bg-yellow-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//                     Pour tous
//                   </div>
//                   <div className="p-6">
//                     <ul className="text-lg mb-4">
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Massage confort "Simple" (adultes)</span>
//                         <span className="ml-4">55€</span>
//                       </li>
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Massage confort "Simple" (jeunes/vieillissants)</span>
//                         <span className="ml-4">40€</span>
//                       </li>
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Massage enveloppement "Max"</span>
//                         <span className="ml-4">75€</span>
//                       </li>
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Enveloppement 1 zone*</span>
//                         <span className="ml-4">7€</span>
//                       </li>
//                       <li className="flex justify-between py-2">
//                         <span className="mr-4">Enveloppement seul corps complet</span>
//                         <span className="ml-4">30€</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 {/* Photo arrondie en bas */}
//                 <div className="flex justify-center mt-4 mb-4">
//                   <img
//                     src={photoCanin1} // Première photo
//                     alt="Canin 1"
//                     className="rounded-full w-32 h-32 object-cover"
//                   />
//                 </div>
//               </div>
    
//               {/* Card 2 */}
//               <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//                 <div>
//                   <div className="bg-purple-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//                     Suivi Sportif
//                   </div>
//                   <div className="p-6">
//                     <ul className="text-lg mb-4">
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Massage prépa</span>
//                         <span className="ml-4">25€</span>
//                       </li>
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Massage récup</span>
//                         <span className="ml-4">35€</span>
//                       </li>
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Pack concours (prépa + récup)</span>
//                         <span className="ml-4">50€</span>
//                       </li>
//                       <li className="flex justify-between py-2">
//                         <span className="mr-4">Enveloppement 1 zone*</span>
//                         <span className="ml-4">7€</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 {/* Photo arrondie en bas */}
//                 <div className="flex justify-center mt-4 mb-4">
//                   <img
//                     src={photoCanin2} // Deuxième photo
//                     alt="Canin 2"
//                     className="rounded-full w-32 h-32 object-cover"
//                   />
//                 </div>
//               </div>
    
//               {/* Card 3 */}
//               <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//                 <div>
//                   <div className="bg-teal-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//                     Packs**
//                   </div>
//                   <div className="p-6">
//                     <ul className="text-lg mb-4">
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Forfait premium: 5 Séances "Simple"</span>
//                         <span className="ml-4">260€</span>
//                       </li>
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Forfait Gold 10 "Simple"</span>
//                         <span className="ml-4">495€</span>
//                       </li>
//                       <li className="flex justify-between py-2 border-b border-gray-300">
//                         <span className="mr-4">Forfait Mixte 10 "Simple" Inter-espèce</span>
//                         <span className="ml-4">-10% au total</span>
//                       </li>
//                       <li className="flex justify-between py-2">
//                         <span className="mr-4">Forfait Prestige 10 "Max"</span>
//                         <span className="ml-4">635€</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 {/* Photo arrondie en bas */}
//                 <div className="flex justify-center mt-4 mb-4">
//                   <img
//                     src={photoCanin3} // Troisième photo
//                     alt="Canin 3"
//                     className="rounded-full w-32 h-32 object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       );
//     }

// export default PricingCanin;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoCanin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg';
// import photoCanin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg';
// import photoCanin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg';

// function PricingCanin() {
//   return (
//     <section id="pricing-canin" className="py-16 bg-gray-100 overflow-hidden">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Tarifs Canins</h2>

//         {/* Swiper pour carrousel de cartes */}
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           navigation={true}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="px-4 md:px-0 justify-center"
//         >
//           {/* Card 1 */}
//           <SwiperSlide className="flex justify-center">
//             <div className="min-w-[300px] max-w-xs mx-auto bg-white rounded-lg shadow-lg transform transition-transform duration-200 md:hover:scale-105 flex flex-col justify-between">
//               <div>
//                 <div className="bg-yellow-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Pour tous</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage confort "Simple" (adultes)</span>
//                       <span className="ml-4">55€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage confort "Simple" (jeunes/vieillissants)</span>
//                       <span className="ml-4">40€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage enveloppement "Max"</span>
//                       <span className="ml-4">75€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Enveloppement 1 zone*</span>
//                       <span className="ml-4">7€</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Enveloppement seul corps complet</span>
//                       <span className="ml-4">30€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoCanin1} alt="Canin 1" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 2 */}
//           <SwiperSlide className="flex justify-center">
//             <div className="min-w-[300px] max-w-xs mx-auto bg-white rounded-lg shadow-lg transform transition-transform duration-200 md:hover:scale-105 flex flex-col justify-between">
//               <div>
//                 <div className="bg-purple-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Suivi Sportif</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage prépa</span>
//                       <span className="ml-4">25€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage récup</span>
//                       <span className="ml-4">35€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Pack concours (prépa + récup)</span>
//                       <span className="ml-4">50€</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Enveloppement 1 zone*</span>
//                       <span className="ml-4">7€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoCanin2} alt="Canin 2" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 3 */}
//           <SwiperSlide className="flex justify-center">
//             <div className="min-w-[300px] max-w-xs mx-auto bg-white rounded-lg shadow-lg transform transition-transform duration-200 md:hover:scale-105 flex flex-col justify-between">
//               <div>
//                 <div className="bg-teal-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Packs**</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait premium: 5 Séances "Simple"</span>
//                       <span className="ml-4">260€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait Gold 10 "Simple"</span>
//                       <span className="ml-4">495€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait Mixte 10 "Simple" Inter-espèce</span>
//                       <span className="ml-4">-10% au total</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Forfait Prestige 10 "Max"</span>
//                       <span className="ml-4">635€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoCanin3} alt="Canin 3" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default PricingCanin;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import photoCanin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg';
import photoCanin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg';
import photoCanin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg';

function PricingCanin() {
  const cards = [
    {
      title: "Pour tous",
      image: photoCanin1,
      bgColor: "bg-[#fffcf4]",
      textColor: "text-[#734930]",
      bulletColor: "bg-[#734930]",
      priceList: [
        "Massage équin : 65€",
        "Massage équin + enveloppement* : 90€",
        "Séance découverte : 50€",
        "Consultation bien-être : 45€"
      ]
    },
    {
      title: "Suivi Sportif",
      image: photoCanin2,
      bgColor: "bg-[#fffcf4]",
      textColor: "text-[#734930]",
      bulletColor: "bg-[#734930]",
      priceList: [
        "Massage équin préparation sportive : 40€",
        "Massage équin récupération : 40€",
        "Suivi compétition (journée) : 150€",
        "Programme personnalisé : sur devis"
      ]
    },
    {
      title: "Packs**",
      image: photoCanin3,
      bgColor: "bg-[#fffcf4]",
      textColor: "text-[#734930]",
      bulletColor: "bg-[#734930]",
      priceList: [
        "Forfait 4 séances : 250€",
        "Forfait 10 séances : 585€",
        "Pack préparation compétition : 350€",
        "Possibilité d'autres forfaits sur demande"
      ]
    }
  ];

  const renderPriceList = (priceList, bulletColor) => (
    <ul className="space-y-4 text-lg">
      {priceList.map((item, index) => (
        <React.Fragment key={index}>
          <li className="flex items-center">
            <span className={`w-2 h-2 ${bulletColor} rounded-full mr-4`}></span>
            {item}
          </li>
          {index < priceList.length - 1 && (
            <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          )}
        </React.Fragment>
      ))}
    </ul>
  );

  return (
    <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
      <div className="flex items-center justify-center mb-12 px-4">
        <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
        <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
          Equins
        </h1>
        <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView="auto"
          //loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="pricing-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 5
            }
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
                {/* Solution 1: Image redimensionnée sur mobile */}
                <div className="w-full md:w-1/2 h-48 md:h-full">
                  <img 
                    src={card.image} 
                    alt={`Equin ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Solution 2: Image masquée sur mobile (en commentaire) */}
                {/* <div className="hidden md:block w-full md:w-1/2">
                  <img 
                    src={card.image} 
                    alt={`Equin ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div> */}

                <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
                  <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
                  {renderPriceList(card.priceList, card.bulletColor)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .pricing-swiper {
          padding-bottom: 50px;
        }

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 300ms ease;
        }

        @media (min-width: 1024px) {
          .swiper-slide {
            opacity: 0.5;
            transform: scale(0.8);
          }

          .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
          }
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #fffcf4 !important;
        }

        .swiper-pagination-bullet {
          background: #fffcf4 !important;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};


export default PricingCanin;