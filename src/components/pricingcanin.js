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