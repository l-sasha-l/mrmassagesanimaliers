import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker from '../assets/picture/marker.png';


const Map = () => {
  const Epicentre = [48.8837, 3.1251]; // Coordonnées de Pierre-Levée

  // Création de l'icône personnalisée
  const customIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [100, 150], // Taille de l'icône
    iconAnchor: [20, 50], // Point d'ancrage de l'icône (centre bas)
    popupAnchor: [0, -50], // Point d'ancrage de la popup
    className: 'custom-marker'
  });

  return (
    <section id="deplacement" className="py-20 bg-[#fffcf4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#785444] mb-4">Zone d'intervention</h2>
          <p className="text-lg text-[#785444]/90 max-w-2xl mx-auto">
            Découvrez nos zones de déplacement et tarifs associés
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Carte */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px] z-10">
            <MapContainer
              center={Epicentre}
              zoom={9}
              className="h-full w-full"
              style={{ background: '#f8f9fa' }}
              dragging={false}      // Désactive le déplacement de la carte
              scrollWheelZoom={true} // Permet le zoom avec la molette
              doubleClickZoom={true} // Permet le zoom au double-clic
              touchZoom={true}      // Permet le zoom tactile
              zoomControl={true}    // Affiche les boutons +/- pour le zoom
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              <Marker position={Epicentre} icon={customIcon}>
                <Popup>
                  <div className="text-center p-2">
                    <p className="font-medium text-[#785444] text-lg">Pierre-Levée</p>
                    <p className="text-sm text-[#785444]/80">Point de départ</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Informations */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#785444] mb-6">
              Frais de déplacement
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-[#785444] pl-4">
                <p className="text-[#785444]/90 font-medium">
                  Les 20 premiers kilomètres réels autour de Pierre-Levée (77) vous sont offerts.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-[#785444]"></div>
                  <p className="text-[#785444]/80">De 21 à 30 km → 10€</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-[#785444]"></div>
                  <p className="text-[#785444]/80">De 31 à 40 km → 20€</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-[#785444]"></div>
                  <p className="text-[#785444]/80">De 41 à 50 km → 30€</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-[#785444]"></div>
                  <p className="text-[#785444]/80">Au-delà de 50 km → sur devis</p>
                </div>
              </div>

              <div className="bg-[#785444]/5 p-4 rounded-lg space-y-2 mt-6">
                <p className="text-[#785444]/90 text-sm">
                  Péage à votre charge
                </p>
                <p className="text-[#785444]/90 text-sm">
                  Frais divisibles par le nombre d'animaux au même endroit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;