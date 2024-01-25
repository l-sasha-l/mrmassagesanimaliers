import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mr-massages-animaliers';

  loader = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loader = true;
      } else if (event instanceof NavigationEnd) {
        // Simule un délai de chargement de 2 secondes (ajuste selon tes besoins)
        setTimeout(() => {
          this.loader = false;
        }, 2000);
      }
    });
  }


  ngOnInit(): void {
    // setTimeout(() => {
    //   this.loader = false;
    // }, 1000);
  }
}
