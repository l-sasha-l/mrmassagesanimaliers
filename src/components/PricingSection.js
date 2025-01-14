import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const PricingSection = ({ 
  title, 
  backgroundColor = "bg-[#ae907e]",
  cards 
}) => {
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
    <section id='pricingsection' className={`py-16 ${backgroundColor} overflow-hidden relative`}>
      {/* Titre de la section */}
      <div className="flex items-center justify-center mb-12 px-4">
        <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
        <h1 className="text-4xl md:text-5xl text-[#fffcf4] font-light mx-6 md:mx-10">
          {title}
        </h1>
        <div className="h-[2px] w-16 md:w-32 bg-[#fffcf4] rounded-full"></div>
      </div>

      {/* Contenu du Swiper */}
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
                        alt={`${title} ${index + 1}`} 
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

export default PricingSection;