import { Component, HostListener, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import anime from 'animejs/lib/anime.es.js';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.animateTitle();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }

  }

  navigateTo(sectionId: string): void {
    this.router.navigate([], {
      fragment: sectionId,
      relativeTo: this.route
    });
    this.scrollToSection(sectionId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100; // Ajustez cette valeur selon vos besoins
  }

  // header.component.ts

  animateTitle() {
    const titleElement = document.querySelector('.site-title');
    if (titleElement && titleElement.textContent) {
      const letters = titleElement.textContent.split('');
      titleElement.textContent = ''; // Effacez le texte initial

      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        titleElement.appendChild(span);
      });

      anime.timeline({ loop: false })
        .add({
          targets: '.site-title span',
          translateX: [40, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 2000,
          delay: (el, i) => 500 + 30 * i,
        });
    }
  }
}
