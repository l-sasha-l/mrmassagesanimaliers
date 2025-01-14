import photoEquin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-31.jpg';
import photoEquin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg';
import photoEquin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-11-59.jpg';

// data/equinData.js
export const equinData = {
    title: "Equins",
    backgroundColor: "bg-[#ae907e]",
    cards: [
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
            "Massage prépa: 35 €",
            "Massage récup: 45 €",
            "Pack concours (prépa + récup): 70 €",
            "Enveloppement 1 zone*: 15 €"
        ]
      },
      {
        title: "Packs**",
        image: photoEquin3,
        bgColor: "bg-[#fffcf4]",
        textColor: "text-[#734930]",
        bulletColor: "bg-[#734930]",
        priceList: [
            'Forfait premium: 5 Séances "Simple": 350 €',
            'Forfait Gold 10 "Simple": 675 €',
            'Forfait Mixte 10 "Simple" Inter-espèce: -10% au total',
            'Forfait Prestige 10 "Max": 935 €'
        ]
      }
    ]
  };