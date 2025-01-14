import photoCanin1 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg';
import photoCanin2 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-14-15.jpg';
import photoCanin3 from '../assets/picture/tarifs/PHOTO-2023-12-04-21-14-17.jpg';

// data/caninData.js
export const caninData = {
    title: "Canins",
    // backgroundColor: "bg-[#ae907e]",
    backgroundColor: "bg-[#ae907e]",
    cards: [
      {
        title: "Séances individuelles",
        image: photoCanin1,
        bgColor: "bg-[#fffcf4]",
        textColor: "text-[#734930]",
        bulletColor: "bg-[#734930]",
        priceList: [
          "Massage canin : 45€",
          "Massage canin + enveloppement* : 70€",
          "Séance découverte : 35€",
          "Consultation bien-être : 30€"
        ]
      },
      {
        title: "Forfaits",
        image: photoCanin2,
        bgColor: "bg-[#fffcf4]",
        textColor: "text-[#734930]",
        bulletColor: "bg-[#734930]",
        priceList: [
          "Forfait 3 séances : 120€",
          "Forfait 6 séances : 225€",
          "Forfait senior : 180€",
          "Forfait post-opératoire : 200€"
        ]
      },
      {
        title: "Services spéciaux",
        image: photoCanin3,
        bgColor: "bg-[#fffcf4]",
        textColor: "text-[#734930]",
        bulletColor: "bg-[#734930]",
        priceList: [
          "Suivi rééducation : 160€",
          "Programme sportif : 140€",
          "Bilan comportemental : 50€",
          "Consultation à domicile : +15€"
        ]
      }
    ]
  };