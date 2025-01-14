
// import React from 'react';
// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// function PricingEquin() {
//   return (
//     <section id="pricing-equin" className="py-16 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Tarifs Équins</h2>

//         {/* Carrousel de cartes alignées horizontalement */}
//         <div className="flex overflow-x-visible space-x-6 px-4 md:px-0 justify-center">
//           {/* Card 1 */}
//           <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//             <div>
//               <div className="bg-blue-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//                 Pour tous
//               </div>
//               <div className="p-6">
//                 <ul className="text-lg mb-4">
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Massage confort "Simple" (adultes)</span>
//                     <span className="ml-4">75€</span>
//                   </li>
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Massage confort "Simple" (bébés/retraités)</span>
//                     <span className="ml-4">60€</span>
//                   </li>
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Massage enveloppement "Max"</span>
//                     <span className="ml-4">110€</span>
//                   </li>
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Drainage lymphatique</span>
//                     <span className="ml-4">50€</span>
//                   </li>
//                   <li className="flex justify-between py-2">
//                     <span className="mr-4">Enveloppement 1 zone*</span>
//                     <span className="ml-4">15€</span>
//                   </li>
//                   <li className="flex justify-between py-2">
//                     <span className="mr-4">Enveloppement seul corps complet</span>
//                     <span className="ml-4">70€</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* Photo arrondie en bas */}
//             <div className="flex justify-center mt-4 mb-4">
//               <img
//                 src={photoEquin1} // Première photo
//                 alt="Equin 1"
//                 className="rounded-full w-32 h-32 object-cover"
//               />
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//             <div>
//               <div className="bg-green-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//                 Suivi Sportif
//               </div>
//               <div className="p-6">
//                 <ul className="text-lg mb-4">
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Massage prépa</span>
//                     <span className="ml-4">35€</span>
//                   </li>
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Massage récup</span>
//                     <span className="ml-4">45€</span>
//                   </li>
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Pack concours (prépa + récup)</span>
//                     <span className="ml-4">70€</span>
//                   </li>
//                   <li className="flex justify-between py-2">
//                     <span className="mr-4">Enveloppement 1 zone*</span>
//                     <span className="ml-4">15€</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* Photo arrondie en bas */}
//             <div className="flex justify-center mt-4 mb-4">
//               <img
//                 src={photoEquin2} // Deuxième photo
//                 alt="Equin 2"
//                 className="rounded-full w-32 h-32 object-cover"
//               />
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//             <div>
//               <div className="bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">
//                 Packs**
//               </div>
//               <div className="p-6">
//                 <ul className="text-lg mb-4">
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Forfait premium: 5 Séances "Simple"</span>
//                     <span className="ml-4">350€</span>
//                   </li>
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Forfait Gold: 10 Séances "Simple"</span>
//                     <span className="ml-4">675€</span>
//                   </li>
//                   <li className="flex justify-between py-2 border-b border-gray-300">
//                     <span className="mr-4">Forfait Mixte: 10 Séances Inter-espèce</span>
//                     <span className="ml-4">-10% au total</span>
//                   </li>
//                   <li className="flex justify-between py-2">
//                     <span className="mr-4">Forfait Prestige: 10 Séances "Max"</span>
//                     <span className="ml-4">935€</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* Photo arrondie en bas */}
//             <div className="flex justify-center mt-4 mb-4">
//               <img
//                 src={photoEquin3} // Troisième photo
//                 alt="Equin 3"
//                 className="rounded-full w-32 h-32 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PricingEquin;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// function PricingEquin() {
//   return (
//     <section id="pricing-equin" className="py-16 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Tarifs Équins</h2>

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
//           className="px-4 md:px-0"
//         >
//           {/* Card 1 */}
//           <SwiperSlide>
//             <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//               <div>
//                 <div className="bg-blue-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Pour tous</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage confort "Simple" (adultes)</span>
//                       <span className="ml-4">75€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage confort "Simple" (bébés/retraités)</span>
//                       <span className="ml-4">60€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage enveloppement "Max"</span>
//                       <span className="ml-4">110€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Drainage lymphatique</span>
//                       <span className="ml-4">50€</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Enveloppement 1 zone*</span>
//                       <span className="ml-4">15€</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Enveloppement seul corps complet</span>
//                       <span className="ml-4">70€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoEquin1} alt="Equin 1" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 2 */}
//           <SwiperSlide>
//             <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//               <div>
//                 <div className="bg-green-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Suivi Sportif</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage prépa</span>
//                       <span className="ml-4">35€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage récup</span>
//                       <span className="ml-4">45€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Pack concours (prépa + récup)</span>
//                       <span className="ml-4">70€</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Enveloppement 1 zone*</span>
//                       <span className="ml-4">15€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoEquin2} alt="Equin 2" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 3 */}
//           <SwiperSlide>
//             <div className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
//               <div>
//                 <div className="bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Packs**</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait premium: 5 Séances "Simple"</span>
//                       <span className="ml-4">350€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait Gold: 10 Séances "Simple"</span>
//                       <span className="ml-4">675€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait Mixte: 10 Séances Inter-espèce</span>
//                       <span className="ml-4">-10% au total</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Forfait Prestige: 10 Séances "Max"</span>
//                       <span className="ml-4">935€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoEquin3} alt="Equin 3" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default PricingEquin;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// function PricingEquin() {
//   return (
//     <section id="pricing-equin" className="py-16 bg-gray-100 overflow-hidden">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Tarifs Équins</h2>

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
//                 <div className="bg-blue-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Pour tous</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage confort "Simple" (adultes)</span>
//                       <span className="ml-4">75€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage confort "Simple" (bébés/retraités)</span>
//                       <span className="ml-4">60€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage enveloppement "Max"</span>
//                       <span className="ml-4">110€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Drainage lymphatique</span>
//                       <span className="ml-4">50€</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Enveloppement 1 zone*</span>
//                       <span className="ml-4">15€</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Enveloppement seul corps complet</span>
//                       <span className="ml-4">70€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoEquin1} alt="Equin 1" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 2 */}
//           <SwiperSlide className="flex justify-center">
//             <div className="min-w-[300px] max-w-xs mx-auto bg-white rounded-lg shadow-lg transform transition-transform duration-200 md:hover:scale-105 flex flex-col justify-between">
//               <div>
//                 <div className="bg-green-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Suivi Sportif</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage prépa</span>
//                       <span className="ml-4">35€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Massage récup</span>
//                       <span className="ml-4">45€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Pack concours (prépa + récup)</span>
//                       <span className="ml-4">70€</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Enveloppement 1 zone*</span>
//                       <span className="ml-4">15€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoEquin2} alt="Equin 2" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 3 */}
//           <SwiperSlide className="flex justify-center">
//             <div className="min-w-[300px] max-w-xs mx-auto bg-white rounded-lg shadow-lg transform transition-transform duration-200 md:hover:scale-105 flex flex-col justify-between">
//               <div>
//                 <div className="bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-t-lg">Packs**</div>
//                 <div className="p-6">
//                   <ul className="text-lg mb-4">
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait premium: 5 Séances "Simple"</span>
//                       <span className="ml-4">350€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait Gold: 10 Séances "Simple"</span>
//                       <span className="ml-4">675€</span>
//                     </li>
//                     <li className="flex justify-between py-2 border-b border-gray-300">
//                       <span className="mr-4">Forfait Mixte: 10 Séances Inter-espèce</span>
//                       <span className="ml-4">-10% au total</span>
//                     </li>
//                     <li className="flex justify-between py-2">
//                       <span className="mr-4">Forfait Prestige: 10 Séances "Max"</span>
//                       <span className="ml-4">935€</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4 mb-4">
//                 <img src={photoEquin3} alt="Equin 3" className="rounded-full w-32 h-32 object-cover" />
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default PricingEquin;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const beige = "[#fffcf4]"
//   const marron = "[#785444]"
//   return (
//     <section id="pricing-equin" className="py-16 bg-[#785444] overflow-hidden">
//       <h2 className="text-4xl text-center	font-light text-[#fffcf4] mb-8">Equin</h2>
//       <div className="container mx-auto px-4"
//       style={{ fontFamily: 'Itim, sans-serif'}}
//       >
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           navigation={true}
//           className="w-full"
//         >
//           {/* Card 1 */}
//           <SwiperSlide>
//             <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
//               <div className="w-full md:w-1/2">
//                 <img src={photoEquin1} alt="Equin 1" className="w-full h-full object-cover" />
//               </div>
//               <div className="w-full md:w-1/2 p-8 bg-[#fffcf4] text-[#785444]">
//                 <h2 className="text-4xl text-center	font-light mb-8">Pour tous</h2>
//                 <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                 <ul className="space-y-4 text-lg">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Massage équin : 65€
//                   </li>
//                   <hr class="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Massage équin + enveloppement* : 90€
//                   </li>
//                   <hr class="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Massage équin préparation ou récupération sportive : 40€
//                   </li>
//                   <hr class="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Forfait 4 séances : 250€
//                   </li>
//                   <hr class="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Forfait 10 séances : 585€
//                   </li>
//                   <hr class="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Possibilité d'autres séances et forfaits en fonction des besoins!
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 2 avec le même format */}
//           <SwiperSlide>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
//               <div className="w-full md:w-1/2">
//                 <img src={photoEquin2} alt="Equin 2" className="w-full h-full object-cover" />
//               </div>
//               <div className="w-full md:w-1/2 p-8 bg-[#B37A4C] text-white">
//                 <h2 className="text-4xl font-light mb-8">Suivi Sportif</h2>
//                 {/* Même contenu que la première carte */}
//                 <ul className="space-y-4 text-lg">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin : 65€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin + enveloppement* : 90€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin préparation ou récupération sportive : 40€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Forfait 4 séances : 250€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Forfait 10 séances : 585€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Possibilité d'autres séances et forfaits en fonction des besoins!
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 3 avec le même format */}
//           <SwiperSlide>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
//               <div className="w-full md:w-1/2">
//                 <img src={photoEquin3} alt="Equin 3" className="w-full h-full object-cover" />
//               </div>
//               <div className="w-full md:w-1/2 p-8 bg-[#B37A4C] text-white">
//                 <h2 className="text-4xl font-light mb-8">Packs**</h2>
//                 {/* Même contenu que la première carte */}
//                 <ul className="space-y-4 text-lg">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin : 65€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin + enveloppement* : 90€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin préparation ou récupération sportive : 40€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Forfait 4 séances : 250€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Forfait 10 séances : 585€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Possibilité d'autres séances et forfaits en fonction des besoins!
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default PricingEquin;

//MOBILE ET TABLETTE
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const beige = "[#fffcf4]";
//   const marron = "[#785444]";
//   //785444
//   //d7b8a4
//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       {/* Nouveau conteneur de titre avec décoration */}
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           navigation={true}
//           className="w-full"
//         >
//           {/* Card 1 */}
//           <SwiperSlide>
//             <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
//               <div className="w-full md:w-1/2">
//                 <img src={photoEquin1} alt="Equin 1" className="w-full h-full object-cover" />
//               </div>
//               <div className="w-full md:w-1/2 p-8 bg-[#fffcf4] text-[#734930]">
//                 <h2 className="text-4xl text-center font-light mb-8">Pour tous</h2>
//                 <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                 <ul className="space-y-4 text-lg">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Massage équin : 65€
//                   </li>
//                   <hr className="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Massage équin + enveloppement* : 90€
//                   </li>
//                   <hr className="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Massage équin préparation ou récupération sportive : 40€
//                   </li>
//                   <hr className="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Forfait 4 séances : 250€
//                   </li>
//                   <hr className="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Forfait 10 séances : 585€
//                   </li>
//                   <hr className="w-48 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 mr-4"></span>
//                     Possibilité d'autres séances et forfaits en fonction des besoins!
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 2 */}
//           <SwiperSlide>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
//               <div className="w-full md:w-1/2">
//                 <img src={photoEquin2} alt="Equin 2" className="w-full h-full object-cover" />
//               </div>
//               <div className="w-full md:w-1/2 p-8 bg-[#B37A4C] text-white">
//                 <h2 className="text-4xl font-light mb-8">Suivi Sportif</h2>
//                 <ul className="space-y-4 text-lg">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin : 65€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin + enveloppement* : 90€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin préparation ou récupération sportive : 40€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Forfait 4 séances : 250€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Forfait 10 séances : 585€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Possibilité d'autres séances et forfaits en fonction des besoins!
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Card 3 */}
//           <SwiperSlide>
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
//               <div className="w-full md:w-1/2">
//                 <img src={photoEquin3} alt="Equin 3" className="w-full h-full object-cover" />
//               </div>
//               <div className="w-full md:w-1/2 p-8 bg-[#B37A4C] text-white">
//                 <h2 className="text-4xl font-light mb-8">Packs**</h2>
//                 <ul className="space-y-4 text-lg">
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin : 65€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin + enveloppement* : 90€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Massage équin préparation ou récupération sportive : 40€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Forfait 4 séances : 250€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Forfait 10 séances : 585€
//                   </li>
//                   <li className="flex items-center">
//                     <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
//                     Possibilité d'autres séances et forfaits en fonction des besoins!
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default PricingEquin;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

//  import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
//  import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
//  import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';


//  const PricingEquin = () => {
//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]"
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#B37A4C]",
//       textColor: "text-white"
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#B37A4C]",
//       textColor: "text-white"
//     }
//   ];

//   const renderPricingList = () => (
//     <ul className="space-y-4 text-lg">
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin : 65€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin + enveloppement* : 90€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin préparation ou récupération sportive : 40€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Forfait 4 séances : 250€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Forfait 10 séances : 585€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Possibilité d'autres séances et forfaits en fonction des besoins!
//       </li>
//     </ul>
//   );

//   return (
//     //ae907e
//     <section id="pricing-equin" className="py-16 bg-[#C9A682] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <div className="relative overflow-hidden">
//           <Swiper
//             modules={[Pagination, Navigation]}
//             spaceBetween={-100}
//             slidesPerView={1.5}
//             centeredSlides={true}
//             loop={true}
//             pagination={{ clickable: true }}
//             navigation={true}
//             className="pricing-swiper"
//             breakpoints={{
//               768: {
//                 slidesPerView: 1.8,
//                 spaceBetween: -150
//               }
//             }}
//           >
//             {cards.map((card, index) => (
//               <SwiperSlide key={index}>
//                 <div className="card-wrapper">
//                   <div className={`rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto`}>
//                     <div className="w-full md:w-1/2">
//                       <img src={card.image} alt={`Equin ${index + 1}`} className="w-full h-full object-cover" />
//                     </div>
//                     <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//                       <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//                       {renderPricingList()}
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding: 50px 0;
//           overflow: visible;
//         }

//         .swiper-slide {
//           transition: all 0.5s ease;
//           opacity: 0.4;
//           transform: translateX(0);
//         }

//         .swiper-slide-active {
//           opacity: 1;
//           z-index: 2;
//           transform: translateX(0);
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//           transform: translateY(-50%);
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         .swiper-button-prev {
//           left: 5%;
//         }

//         .swiper-button-next {
//           right: 5%;
//         }

//         /* Pour que les cartes non actives soient visibles */
//         .swiper-wrapper {
//           align-items: center;
//         }

//         /* Ajustement pour l'effet de profondeur */
//         .card-wrapper {
//           transition: all 0.5s ease;
//           transform: perspective(1000px);
//         }

//         .swiper-slide-active .card-wrapper {
//           transform: perspective(1000px) translateZ(50px);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;


// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const swiperRef = useRef(null);

//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]"
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]"
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]"
//     }
//   ];

//   const handleSlideClick = (index) => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideToLoop(index);
//     }
//   };

//   const renderPricingList = () => (
//     <ul className="space-y-4 text-lg">
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin : 65€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin + enveloppement* : 90€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin préparation ou récupération sportive : 40€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Forfait 4 séances : 250€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Forfait 10 séances : 585€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Possibilité d'autres séances et forfaits en fonction des besoins!
//       </li>
//     </ul>
//   );

//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <div className="relative overflow-hidden">
//           <Swiper
//             ref={swiperRef}
//             modules={[Pagination, Navigation]}
//             spaceBetween={-100}
//             slidesPerView={1.5}
//             centeredSlides={true}
//             loop={true}
//             pagination={{ clickable: true }}
//             navigation={true}
//             className="pricing-swiper"
//             breakpoints={{
//               768: {
//                 slidesPerView: 1.8,
//                 spaceBetween: -150
//               }
//             }}
//           >
//             {cards.map((card, index) => (
//               <SwiperSlide key={index}>
//                 <div 
//                   className="card-wrapper cursor-pointer" 
//                   onClick={() => handleSlideClick(index)}
//                   role="button"
//                   tabIndex={0}
//                   onKeyPress={(e) => {
//                     if (e.key === 'Enter' || e.key === ' ') {
//                       handleSlideClick(index);
//                     }
//                   }}
//                 >
//                   <div className={`rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto`}>
//                     <div className="w-full md:w-1/2">
//                       <img src={card.image} alt={`Equin ${index + 1}`} className="w-full h-full object-cover" />
//                     </div>
//                     <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//                       <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//                       {renderPricingList()}
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding: 50px 0;
//           overflow: visible;
//         }

//         .swiper-slide {
//           transition: all 0.5s ease;
//           opacity: 0.4;
//           transform: translateX(0);
//         }

//         .swiper-slide-active {
//           opacity: 1;
//           z-index: 2;
//           transform: translateX(0);
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//           transform: translateY(-50%);
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         .swiper-button-prev {
//           left: 5%;
//         }

//         .swiper-button-next {
//           right: 5%;
//         }

//         .swiper-wrapper {
//           align-items: center;
//         }

//         .card-wrapper {
//           transition: all 0.5s ease;
//           transform: perspective(1000px);
//         }

//         .swiper-slide-active .card-wrapper {
//           transform: perspective(1000px) translateZ(50px);
//         }

//         .card-wrapper:hover {
//           transform: perspective(1000px) translateZ(30px);
//           cursor: pointer;
//         }

//         .swiper-slide-active .card-wrapper:hover {
//           transform: perspective(1000px) translateZ(60px);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const swiperRef = useRef(null);

//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]"
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]"
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]"
//     }
//   ];

//   const handleSlideClick = (index) => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideToLoop(index);
//     }
//   };

//   const renderPricingList = () => (
//     <ul className="space-y-4 text-lg">
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin : 65€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin + enveloppement* : 90€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Massage équin préparation ou récupération sportive : 40€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Forfait 4 séances : 250€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Forfait 10 séances : 585€
//       </li>
//       <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//       <li className="flex items-center">
//         <span className="w-2 h-2 mr-4"></span>
//         Possibilité d'autres séances et forfaits en fonction des besoins!
//       </li>
//     </ul>
//   );

//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <div className="relative overflow-hidden">
//           <Swiper
//             ref={swiperRef}
//             modules={[Pagination, Navigation]}
//             spaceBetween={-100}
//             slidesPerView={1.5}
//             centeredSlides={true}
//             loop={true}
//             pagination={{ clickable: true }}
//             navigation={true}
//             className="pricing-swiper w-full"
//             breakpoints={{
//               768: {
//                 slidesPerView: 1.8,
//                 spaceBetween: -150
//               }
//             }}
//           >
//             {cards.map((card, index) => (
//               <SwiperSlide key={index} className="!w-auto">
//                 <div 
//                   className="card-wrapper cursor-pointer w-full" 
//                   onClick={() => handleSlideClick(index)}
//                   role="button"
//                   tabIndex={0}
//                   onKeyPress={(e) => {
//                     if (e.key === 'Enter' || e.key === ' ') {
//                       handleSlideClick(index);
//                     }
//                   }}
//                 >
//                   <div className={`rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl mx-auto`}>
//                     <div className="w-full md:w-1/2">
//                       <img src={card.image} alt={`Equin ${index + 1}`} className="w-full h-full object-cover" />
//                     </div>
//                     <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//                       <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//                       {renderPricingList()}
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding: 50px 0;
//           overflow: visible;
//         }

//         .swiper-slide {
//           transition: all 0.5s ease;
//           opacity: 0.4;
//           transform: translateX(0);
//         }

//         .swiper-slide-active {
//           opacity: 1;
//           z-index: 2;
//           transform: translateX(0);
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//           transform: translateY(-50%);
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         .swiper-button-prev {
//           left: 5%;
//         }

//         .swiper-button-next {
//           right: 5%;
//         }

//         .swiper-wrapper {
//           align-items: center;
//         }

//         .card-wrapper {
//           transition: all 0.5s ease;
//           transform: perspective(1000px);
//         }

//         .swiper-slide-active .card-wrapper {
//           transform: perspective(1000px) translateZ(50px);
//         }

//         .card-wrapper:hover {
//           transform: perspective(1000px) translateZ(30px);
//           cursor: pointer;
//         }

//         .swiper-slide-active .card-wrapper:hover {
//           transform: perspective(1000px) translateZ(60px);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     }
//   ];

//   const priceList = [
//     "Massage équin : 65€",
//     "Massage équin + enveloppement* : 90€",
//     "Massage équin préparation ou récupération sportive : 40€",
//     "Forfait 4 séances : 250€",
//     "Forfait 10 séances : 585€",
//     "Possibilité d'autres séances et forfaits en fonction des besoins!"
//   ];

//   const renderPriceList = (bulletColor) => (
//     <ul className="space-y-4 text-lg">
//       {priceList.map((item, index) => (
//         <React.Fragment key={index}>
//           <li className="flex items-center">
//             <span className={`w-2 h-2 ${bulletColor} rounded-full mr-4`}></span>
//             {item}
//           </li>
//           {index < priceList.length - 1 && (
//             <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//           )}
//         </React.Fragment>
//       ))}
//     </ul>
//   );

//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           navigation={true}
//           className="pricing-swiper"
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
//                 <div className="w-full md:w-1/2">
//                   <img 
//                     src={card.image} 
//                     alt={`Equin ${index + 1}`} 
//                     className="w-full h-full object-cover" 
//                   />
//                 </div>
//                 <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//                   <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//                   {renderPriceList(card.bulletColor)}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding-bottom: 50px;
//         }

//         .swiper-slide {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         @media (max-width: 768px) {
//           .swiper-button-next,
//           .swiper-button-prev {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;

// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     }
//   ];

//   const priceList = [
//     "Massage équin : 65€",
//     "Massage équin + enveloppement* : 90€",
//     "Massage équin préparation ou récupération sportive : 40€",
//     "Forfait 4 séances : 250€",
//     "Forfait 10 séances : 585€",
//     "Possibilité d'autres séances et forfaits en fonction des besoins!"
//   ];

//   const renderPriceList = (bulletColor) => (
//     <ul className="space-y-4 text-lg">
//       {priceList.map((item, index) => (
//         <React.Fragment key={index}>
//           <li className="flex items-center">
//             <span className={`w-2 h-2 ${bulletColor} rounded-full mr-4`}></span>
//             {item}
//           </li>
//           {index < priceList.length - 1 && (
//             <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//           )}
//         </React.Fragment>
//       ))}
//     </ul>
//   );

//   // Composant pour l'affichage mobile/tablette
//   const MobileView = () => (
//     <Swiper
//       modules={[Pagination, Navigation]}
//       spaceBetween={30}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//       navigation={true}
//       className="pricing-swiper"
//     >
//       {cards.map((card, index) => (
//         <SwiperSlide key={index}>
//           <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
//             <div className="w-full md:w-1/2">
//               <img 
//                 src={card.image} 
//                 alt={`Equin ${index + 1}`} 
//                 className="w-full h-full object-cover" 
//               />
//             </div>
//             <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//               <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//               {renderPriceList(card.bulletColor)}
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );

//   // Composant pour l'affichage desktop
//   const DesktopView = () => (
//     <div className="relative flex justify-center items-center gap-4">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`transition-all duration-500 cursor-pointer
//             ${index === activeIndex ? 'w-1/2' : 'w-1/4'}`}
//           onClick={() => setActiveIndex(index)}
//         >
//           <div className={`rounded-lg shadow-lg overflow-hidden
//             ${index === activeIndex ? 'scale-105 z-10' : 'scale-95 opacity-75'}`}>
//             <div className="relative">
//               <img 
//                 src={card.image} 
//                 alt={`Equin ${index + 1}`} 
//                 className="w-full h-full object-cover" 
//               />
//               <div className={`absolute inset-0 ${card.bgColor} opacity-30`}></div>
//             </div>
//             <div className={`${card.bgColor} ${card.textColor} p-6`}>
//               <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//               {index === activeIndex && renderPriceList(card.bulletColor)}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         {/* Mobile/Tablet View */}
//         <div className="lg:hidden">
//           <MobileView />
//         </div>

//         {/* Desktop View */}
//         <div className="hidden lg:block">
//           <DesktopView />
//         </div>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding-bottom: 50px;
//         }

//         .swiper-slide {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         @media (max-width: 768px) {
//           .swiper-button-next,
//           .swiper-button-prev {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]"
//     }
//   ];

//   const priceList = [
//     "Massage équin : 65€",
//     "Massage équin + enveloppement* : 90€",
//     "Massage équin préparation ou récupération sportive : 40€",
//     "Forfait 4 séances : 250€",
//     "Forfait 10 séances : 585€",
//     "Possibilité d'autres séances et forfaits en fonction des besoins!"
//   ];

//   const renderPriceList = (bulletColor) => (
//     <ul className="space-y-4 text-lg">
//       {priceList.map((item, index) => (
//         <React.Fragment key={index}>
//           <li className="flex items-center">
//             <span className={`w-2 h-2 ${bulletColor} rounded-full mr-4`}></span>
//             {item}
//           </li>
//           {index < priceList.length - 1 && (
//             <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//           )}
//         </React.Fragment>
//       ))}
//     </ul>
//   );

//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView="auto"
//           loop={true}
//           centeredSlides={true}
//           pagination={{ clickable: true }}
//           navigation={true}
//           className="pricing-swiper"
//           breakpoints={{
//             // Mobile
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 20
//             },
//             // Tablet
//             768: {
//               slidesPerView: 1,
//               spaceBetween: 30
//             },
//             // Desktop
//             1024: {
//               slidesPerView: 1.5,
//               spaceBetween: 5
//             }
//           }}
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
//                 <div className="w-full md:w-1/2">
//                   <img 
//                     src={card.image} 
//                     alt={`Equin ${index + 1}`} 
//                     className="w-full h-full object-cover" 
//                   />
//                 </div>
//                 <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//                   <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//                   {renderPriceList(card.bulletColor)}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding-bottom: 50px;
//         }

//         .swiper-slide {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           transition: all 300ms ease;
//         }

//         /* Style pour les slides non actifs sur desktop */
//         @media (min-width: 1024px) {
//           .swiper-slide {
//             opacity: 0.5;
//             transform: scale(0.8);
//           }

//           .swiper-slide-active {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         @media (max-width: 768px) {
//           .swiper-button-next,
//           .swiper-button-prev {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Massage équin : 65€",
//         "Massage équin + enveloppement* : 90€",
//         "Séance découverte : 50€",
//         "Consultation bien-être : 45€"
//       ]
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Massage équin préparation sportive : 40€",
//         "Massage équin récupération : 40€",
//         "Suivi compétition (journée) : 150€",
//         "Programme personnalisé : sur devis"
//       ]
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Forfait 4 séances : 250€",
//         "Forfait 10 séances : 585€",
//         "Pack préparation compétition : 350€",
//         "Possibilité d'autres forfaits sur demande"
//       ]
//     }
//   ];

//   const renderPriceList = (priceList, bulletColor) => (
//     <ul className="space-y-4 text-lg">
//       {priceList.map((item, index) => (
//         <React.Fragment key={index}>
//           <li className="flex items-center">
//             <span className={`w-2 h-2 ${bulletColor} rounded-full mr-4`}></span>
//             {item}
//           </li>
//           {index < priceList.length - 1 && (
//             <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//           )}
//         </React.Fragment>
//       ))}
//     </ul>
//   );

//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView="auto"
//           loop={true}
//           centeredSlides={true}
//           pagination={{ clickable: true }}
//           navigation={true}
//           className="pricing-swiper"
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 20
//             },
//             768: {
//               slidesPerView: 1,
//               spaceBetween: 30
//             },
//             1024: {
//               slidesPerView: 1.5,
//               spaceBetween: 5
//             }
//           }}
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
//                 <div className="w-full md:w-1/2">
//                   <img 
//                     src={card.image} 
//                     alt={`Equin ${index + 1}`} 
//                     className="w-full h-full object-cover" 
//                   />
//                 </div>
//                 <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//                   <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//                   {renderPriceList(card.priceList, card.bulletColor)}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding-bottom: 50px;
//         }

//         .swiper-slide {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           transition: all 300ms ease;
//         }

//         @media (min-width: 1024px) {
//           .swiper-slide {
//             opacity: 0.5;
//             transform: scale(0.8);
//           }

//           .swiper-slide-active {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         @media (max-width: 768px) {
//           .swiper-button-next,
//           .swiper-button-prev {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';

// const PricingEquin = () => {
//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Massage équin : 65€",
//         "Massage équin + enveloppement* : 90€",
//         "Séance découverte : 50€",
//         "Consultation bien-être : 45€"
//       ]
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Massage équin préparation sportive : 40€",
//         "Massage équin récupération : 40€",
//         "Suivi compétition (journée) : 150€",
//         "Programme personnalisé : sur devis"
//       ]
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Forfait 4 séances : 250€",
//         "Forfait 10 séances : 585€",
//         "Pack préparation compétition : 350€",
//         "Possibilité d'autres forfaits sur demande"
//       ]
//     }
//   ];

//   const renderPriceList = (priceList, bulletColor) => (
//     <ul className="space-y-4 text-lg">
//       {priceList.map((item, index) => (
//         <React.Fragment key={index}>
//           <li className="flex items-center">
//             <span className={`w-2 h-2 ${bulletColor} rounded-full mr-4`}></span>
//             {item}
//           </li>
//           {index < priceList.length - 1 && (
//             <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//           )}
//         </React.Fragment>
//       ))}
//     </ul>
//   );

//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView="auto"
//           loop={true}
//           centeredSlides={true}
//           pagination={{ clickable: true }}
//           navigation={true}
//           className="pricing-swiper"
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 20
//             },
//             768: {
//               slidesPerView: 1,
//               spaceBetween: 30
//             },
//             1024: {
//               slidesPerView: 1.5,
//               spaceBetween: 5
//             }
//           }}
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
//                 {/* Solution 1: Image redimensionnée sur mobile */}
//                 <div className="w-full md:w-1/2 h-48 md:h-full">
//                   <img 
//                     src={card.image} 
//                     alt={`Equin ${index + 1}`} 
//                     className="w-full h-full object-cover" 
//                   />
//                 </div>

//                 {/* Solution 2: Image masquée sur mobile (en commentaire) */}
//                 {/* <div className="hidden md:block w-full md:w-1/2">
//                   <img 
//                     src={card.image} 
//                     alt={`Equin ${index + 1}`} 
//                     className="w-full h-full object-cover" 
//                   />
//                 </div> */}

//                 <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//                   <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//                   {renderPriceList(card.priceList, card.bulletColor)}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding-bottom: 50px;
//         }

//         .swiper-slide {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           transition: all 300ms ease;
//         }

//         @media (min-width: 1024px) {
//           .swiper-slide {
//             opacity: 0.5;
//             transform: scale(0.8);
//           }

//           .swiper-slide-active {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         @media (max-width: 768px) {
//           .swiper-button-next,
//           .swiper-button-prev {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;

//GOOD ONE
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-31.jpg';
// import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
// import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-59.jpg';

// const PricingEquin = () => {
//   const cards = [
//     {
//       title: "Pour tous",
//       image: photoEquin1,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Massage équin : 65€",
//         "Massage équin + enveloppement* : 90€",
//         "Séance découverte : 50€",
//         "Consultation bien-être : 45€"
//       ]
//     },
//     {
//       title: "Suivi Sportif",
//       image: photoEquin2,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Massage équin préparation sportive : 40€",
//         "Massage équin récupération : 40€",
//         "Suivi compétition (journée) : 150€",
//         "Programme personnalisé : sur devis"
//       ]
//     },
//     {
//       title: "Packs**",
//       image: photoEquin3,
//       bgColor: "bg-[#fffcf4]",
//       textColor: "text-[#734930]",
//       bulletColor: "bg-[#734930]",
//       priceList: [
//         "Forfait 4 séances : 250€",
//         "Forfait 10 séances : 585€",
//         "Pack préparation compétition : 350€",
//         "Possibilité d'autres forfaits sur demande"
//       ]
//     }
//   ];

//   const renderPriceList = (priceList, bulletColor) => (
//     <ul className="space-y-4 text-lg">
//       {priceList.map((item, index) => (
//         <React.Fragment key={index}>
//           <li className="flex items-center">
//             <span className={`w-2 h-2 ${bulletColor} rounded-full mr-4`}></span>
//             {item}
//           </li>
//           {index < priceList.length - 1 && (
//             <hr className="w-48 mx-auto h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//           )}
//         </React.Fragment>
//       ))}
//     </ul>
//   );

//   return (
//     <section id="pricing-equin" className="py-16 bg-[#ae907e] overflow-hidden">
//       <div className="flex items-center justify-center mb-12 px-4">
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//         <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
//           Equins
//         </h1>
//         <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4" style={{ fontFamily: 'Itim, sans-serif'}}>
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={30}
//           slidesPerView="auto"
//           //loop={true}
//           centeredSlides={true}
//           pagination={{ clickable: true }}
//           navigation={true}
//           className="pricing-swiper"
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 20
//             },
//             768: {
//               slidesPerView: 1,
//               spaceBetween: 30
//             },
//             1024: {
//               slidesPerView: 1.5,
//               spaceBetween: 5
//             }
//           }}
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
//                 {/* Solution 1: Image redimensionnée sur mobile */}
//                 <div className="w-full md:w-1/2 h-48 md:h-full">
//                   <img 
//                     src={card.image} 
//                     alt={`Equin ${index + 1}`} 
//                     className="w-full h-full object-cover" 
//                   />
//                 </div>

//                 {/* Solution 2: Image masquée sur mobile (en commentaire) */}
//                 {/* <div className="hidden md:block w-full md:w-1/2">
//                   <img 
//                     src={card.image} 
//                     alt={`Equin ${index + 1}`} 
//                     className="w-full h-full object-cover" 
//                   />
//                 </div> */}

//                 <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor}`}>
//                   <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
//                   {renderPriceList(card.priceList, card.bulletColor)}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <style jsx>{`
//         .pricing-swiper {
//           padding-bottom: 50px;
//         }

//         .swiper-slide {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           transition: all 300ms ease;
//         }

//         @media (min-width: 1024px) {
//           .swiper-slide {
//             opacity: 0.5;
//             transform: scale(0.8);
//           }

//           .swiper-slide-active {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #fffcf4 !important;
//         }

//         .swiper-pagination-bullet {
//           background: #fffcf4 !important;
//         }

//         @media (max-width: 768px) {
//           .swiper-button-next,
//           .swiper-button-prev {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PricingEquin;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';

// const MovieCard = ({ title, description, image }) => (
//   <div className="relative w-80 h-96 rounded-lg overflow-hidden">
//     <img 
//       src={image} 
//       alt={title} 
//       className="w-full h-full object-cover"
//     />
//     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//       <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
//       <p className="text-white/80 text-sm line-clamp-2">{description}</p>
//     </div>
//   </div>
// );

// const MovieCarousel = () => {
//   const movies = [
//     {
//       title: "Thor: Ragnarok",
//       description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world.",
//       image: "/path/to/thor-ragnarok.jpg"
//     },
//     {
//       title: "The Suicide Squad",
//       description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and others join the super-secret Task Force X.",
//       image: "/path/to/suicide-squad.jpg"
//     },
//     Ajoutez d'autres films selon vos besoins
//   ];

//   return (
//     <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         modules={[EffectCoverflow]}
//         className="w-full max-w-5xl"
//       >
//         {movies.map((movie, index) => (
//           <SwiperSlide key={index}>
//             <MovieCard {...movie} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MovieCarousel;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import slide_image_1 from '../assets/picture/photohades.jpg';
// import slide_image_2 from '../assets/picture/photohades.jpg';
// import slide_image_3 from '../assets/picture/photohades.jpg';
// import slide_image_4 from '../assets/picture/photohades.jpg';
// import slide_image_5 from '../assets/picture/photohades.jpg';
// import slide_image_6 from '../assets/picture/photohades.jpg';
// import slide_image_7 from '../assets/picture/photohades.jpg';


// function PricingEquin() {
//   return (
//     <div className="container">
//       <h1 className="heading">Flower Gallery</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default PricingEquin;

//https://www.youtube.com/watch?v=OtqxDT0IlHI


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-31.jpg';
import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-59.jpg';

const PricingEquin = () => {
  const cards = [
    {
      title: "Pour tous",
      image: photoEquin1,
      bgColor: "bg-[#fffcf4]",
      textColor: "text-[#734930]",
      bulletColor: "bg-[#734930]",
      priceList: [
        'Massage confort "Simple" (adultes): 75 €',
        'Massage confort "Simple" (bébés/retraités): 60 €',
        'Massage enveloppement "Max": 110 €',
        'Drainage lymphatique: 50 €',
        'Enveloppement 1 zone*: 15 €',       
        'Enveloppement seul corps complet: 70 €'
      ]
    },
    {
      title: "Suivi Sportif",
      image: photoEquin2,
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
      image: photoEquin3,
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
              <div className="rounded-lg shadow-lg overflow-hidden h-[600px] md:h-[500px] w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/2 h-48 md:h-full relative">
                    <div className="absolute inset-0">
                      <img 
                        src={card.image} 
                        alt={`Equin ${index + 1}`} 
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                  </div>

                  <div className={`w-full md:w-1/2 p-8 ${card.bgColor} ${card.textColor} flex flex-col justify-between h-full`}>
                    <h2 className="text-4xl text-center font-light mb-8">{card.title}</h2>
                    <div className="flex-grow overflow-y-auto">
                      {renderPriceList(card.priceList, card.bulletColor)}
                    </div>
                  </div>
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
          height: auto;
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

export default PricingEquin;

