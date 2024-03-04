import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private map: any;
  private lat: number = 48.90015361966651;
  private long: number = 3.040132059205996;

  constructor() { }



  ngOnInit() {
    //this.map = L.map("map").setView([this.lat, this.long], 13);
    this.map = L.map("map", {
      center: [this.lat, this.long],
      zoom: 13,
      zoomControl: true, // Désactiver le contrôle de zoom
      dragging: false, // Désactiver le déplacement de la carte
      doubleClickZoom: false, // Désactiver le zoom double clic
      scrollWheelZoom: false, // Désactiver le zoom à la molette
      boxZoom: true, // Désactiver le zoom de zone
      touchZoom: true // Désactiver le zoom tactile
    });

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
