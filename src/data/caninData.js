import photoCanin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg';
import photoCanin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-14-15.jpg';
import photoCanin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-14-17.jpg';

export const caninData = {
    title: "Canins",
    backgroundColor: "bg-[#ae907e]",
    cards: [
      {
        title: "Séances individuelles",
        image: photoCanin1,
        bgColor: "bg-[#fffcf4]",
        textColor: "text-[#734930]",
        bulletColor: "bg-[#734930]",
        priceList: [
          'Massage confort "Simple" (adultes) : 55 €',
          'Massage confort "Simple" (jeunes/vieillissants) : 40 €',
          'Massage enveloppement "Max" : 75 €',
          'Enveloppement 1 zone* : 7 €',
          'Enveloppement seul corps complet : 30 €'
        ]
      },
      {
        title: "Forfaits",
        image: photoCanin2,
        bgColor: "bg-[#fffcf4]",
        textColor: "text-[#734930]",
        bulletColor: "bg-[#734930]",
        priceList: [
          'Massage prépa : 25 €',
          'Massage récup : 35 €',
          'Pack concours (prépa + récup) : 50 €',
          'Enveloppement 1 zone* : 7 €'
        ]
      },
      {
        title: "Services spéciaux",
        image: photoCanin3,
        bgColor: "bg-[#fffcf4]",
        textColor: "text-[#734930]",
        bulletColor: "bg-[#734930]",
        priceList: [
          'Forfait premium: 5 Séances "Simple" : 260 €',
          'Forfait Gold 10 "Simple" : 495 €',
          'Forfait Mixte 10 "Simple" Inter-espèce : -10% au total',
          'Forfait Prestige 10 "Max" : 635 €'
        ]
      }
    ]
  };