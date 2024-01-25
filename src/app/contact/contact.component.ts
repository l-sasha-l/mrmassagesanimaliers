import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private map: any;
  private lat: number = 48.90015361966651;
  private long: number = 3.040132059205996;
  private api_key: string = "5b3ce3597851110001cf6248c68be52424cd4b59995212a40d34014a";

  requestAPI() {
    const request = new XMLHttpRequest();
    const apiUrl = "https://api.openrouteservice.org/v2/isochrones/driving-car";
    const body = {
      locations: [[this.lat, this.long], [this.lat, this.long]],
      range: [300, 200],
      range_type:"distance",
      units:"km"
    };

    request.open('POST', apiUrl);
    request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', this.api_key);

    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          console.log('Response:', response);
          this.displayIsochrone(response);
        } else {
          console.error('Error:', request.status, request.statusText);
          // Ajoutez un traitement pour gérer les erreurs
        }
      }
    };

    request.send(JSON.stringify(body));
  }

  
  displayIsochrone(response: any) {
    if (response.features && response.features.length > 0) {

      const isochroneLayer = L.geoJSON(response.features[0]);
  
      // Ajoutez la couche à la carte Leaflet
      isochroneLayer.addTo(this.map);
  
      // Réglez le zoom et la vue pour afficher toute la couche isochrone
      this.map.fitBounds(isochroneLayer.getBounds());
    } else {
      console.error('Aucune entité isochrone dans la réponse.');
    }
  }
  
  


  ngOnInit() {
    this.map = L.map("map").setView([48.90015361966651, 3.040132059205996], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.requestAPI();
}

  constructor() { }

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
