import { Component } from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent {
  tarifsEquins: any[] = [
    {
      Titre: 'Tarifs équins',

      pack: 'Pour tous',
      image: '/assets/picture/tarifs/PHOTO-2023-12-04-21-11-45.jpg',
      massages: [
        { type: 'Massage confort "Simple" (adultes)', prix: 75 },
        { type: 'Massage confort "Simple" (bébés/retraités)', prix: 60 },
        { type: 'Massage enveloppement "Max"', prix: 110 },
        { type: 'Drainage lymphatique', prix: 50 },
        { type: 'Enveloppement 1 zone*', prix: 15 },
        { type: 'Enveloppement seul corps complet', prix: 70 },

      ]
    },
    {
      pack: 'Suivi Sportif',
      image: '/assets/picture/tarifs/PHOTO-2023-12-04-21-11-31.jpg',
      massages: [
        { type: 'Massage prépa', prix: 35 },
        { type: 'Massage récup', prix: 45 },
        { type: 'Pack concours (prépa + récup)', prix: 70 },
        { type: 'Enveloppement 1 zone*', prix: 15 },

      ]
    },
    {
      pack: 'Packs**',
      image: '/assets/picture/tarifs/PHOTO-2023-12-04-21-11-59.jpg',
      massages: [
        { type: 'Forfait premium: 5 Séances "Simple"', prix: 350 },
        { type: 'Forfait Gold 10 "Simple"', prix: 675 },
        { type: 'Forfait Mixte 10 "Simple" Inter-espèce', prix: '-10% au total' },
        { type: 'Forfait Prestige 10 "Max"', prix: 935 },

      ]
    },
  ];

  tarifsCanins: any[] = [
    {
      Titre: 'Tarifs canins',

      pack: 'Pour tous',
      image: '/assets/picture/tarifs/PHOTO-2023-12-04-21-14-15.jpg',
      massages: [
        { type: 'Massage confort "Simple" (adultes)', prix: 55 },
        { type: 'Massage confort "Simple" (jeunes/vieillissants)', prix: 40 },
        { type: 'Massage enveloppement "Max"', prix: 75 },
        { type: 'Enveloppement 1 zone*', prix: 7 },
        { type: 'Enveloppement seul corps complet', prix: 30 },

      ]
    },
    {
      pack: 'Suivi Sportif',
      image: '/assets/picture/tarifs/PHOTO-2023-12-04-21-14-17.jpg',
      massages: [
        { type: 'Massage prépa', prix: 25 },
        { type: 'Massage récup', prix: 35 },
        { type: 'Pack concours (prépa + récup)', prix: 50 },
        { type: 'Enveloppement 1 zone*', prix: 7 },

      ]
    },
    {
      pack: 'Packs**',
      image: '/assets/picture/tarifs/PHOTO-2023-12-04-21-13-38.jpg',
      massages: [
        { type: 'Forfait premium: 5 Séances "Simple"', prix: 260 },
        { type: 'Forfait Gold 10 "Simple"', prix: 495 },
        { type: 'Forfait Mixte 10 "Simple" Inter-espèce', prix: '-10% au total' },
        { type: 'Forfait Prestige 10 "Max"', prix: 635 },

      ]
    },
  ];

  formatPrix(prix: string | number): string {
    if (typeof prix === 'number') {
      return prix + ' €';
    } else {
      return prix; // Si c'est une chaîne, renvoyer telle quelle
    }
  }

}
