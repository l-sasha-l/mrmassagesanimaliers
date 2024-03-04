import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const SCROLL_OFFSET = 20;

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('separating', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('inactive => active', animate('1s ease-in-out')),
      transition('active => separating', animate('0.5s ease-in-out')),
    ])
  ]
})
export class PresentationComponent implements OnInit {
  scrollState: string = 'active';
  scrollProgress: number = 0; // Ajoute cette ligne pour déclarer la propriété

  presentationSections: { title: string, content: string }[] = [
    {
      title: "QUI SUIS-JE",
      content: "Bonjour, moi c'est Morgane. Passionnée depuis toujours par les animaux, j'ai maintenant l'honneur de travailler avec eux mais surtout pour eux."
    },
    {
      title: "LE MÊME MASSAGE POUR TOUS ?",
      content: "Chaque animal est différent, c'est pour cela que plusieurs évaluations sont faites au préalable. Cela me permet de créer un massage sur mesure pour chacun."
    },
    {
      title: "POUR QUI ? POUR QUOI ?",
      content: "Pour tous les animaux, jeunes, vieillissants, sportifs, de compagnie ou de loisir... Pour accompagner la croissance, en préparation ou récupération de compétition, pour leur offrir un moment de détente physique et mental."
    }
  ];

  constructor() { }

  resetScrollPosition: number = 1000; // Exemple de position de réinitialisation

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sectionElement = document.querySelector('.presentation');
    if (sectionElement instanceof HTMLElement) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = sectionElement.offsetTop;

      const startSeparation = sectionPosition + sectionElement.offsetHeight * 1.3;
      const endSeparation = sectionPosition + sectionElement.offsetHeight * 1.7;

      if (scrollPosition > startSeparation && scrollPosition < endSeparation) {
        const separationProgress = (scrollPosition - startSeparation) / (endSeparation - startSeparation);
        this.scrollState = 'separating';
        this.scrollProgress = separationProgress;
      } else if (scrollPosition > endSeparation) {
        this.scrollState = 'inactive';
      } else {
        if (scrollPosition > this.resetScrollPosition) {
          // Réinitialiser l'animation si la position de défilement est supérieure à resetScrollPosition
          this.scrollProgress = 0;
        } else {
          this.scrollState = 'active';
        }
      }
    }
  }

  ngOnInit() {
    this.checkScroll();
  }
}
