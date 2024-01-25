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
  scrollState: string = 'inactive';
  scrollProgress: number = 0; // Ajoute cette ligne pour déclarer la propriété

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sectionElement = document.querySelector('.presentation');
    if (sectionElement instanceof HTMLElement) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = sectionElement.offsetTop;

      const startSeparation = sectionPosition + sectionElement.offsetHeight * 1;
      const endSeparation = sectionPosition + sectionElement.offsetHeight * 1.5;

      if (scrollPosition > startSeparation && scrollPosition < endSeparation) {
        const separationProgress = (scrollPosition - startSeparation) / (endSeparation - startSeparation);
        this.scrollState = 'separating';
        this.scrollProgress = separationProgress;
      } else if (scrollPosition > endSeparation) {
        this.scrollState = 'inactive';
      } else {
        this.scrollState = 'active';
      }
    }
  }

  ngOnInit() {
    this.checkScroll();
  }
}
