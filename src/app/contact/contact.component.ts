import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private map: any;
  private lat: number = 48.90015361966651;
  private long: number = 3.040132059205996;


  ngOnInit() {
    this.map = L.map("map").setView([this.lat, this.long], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  }

  callPhoneNumber(): void {
    window.location.href = 'tel:+33687933416';
  }

  sendEmail(): void {
    window.location.href = 'mailto:mr_massages.animaliers@yahoo.com';
  }

  openInstagramProfile(): void {
    // Remplacez "test" par le nom d'utilisateur Instagram approprié
    window.open('https://www.instagram.com/mr_massages.animaliers/');
  }
}
