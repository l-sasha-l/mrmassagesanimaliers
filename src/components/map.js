import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker from '../assets/picture/marker.png';

const COGNAC_POSITION = [45.71280718539304, -0.298026133009971];
const FREE_KILOMETERS = 20;
const PRICE_PER_KM = 0.5; // 0.5 centimes = 0.005 euros

const Map = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const customIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [60, 84],
    iconAnchor: [30, 84],
    className: 'custom-marker'
  });

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (address.length < 3) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=5`
        );
        const data = await response.json();
        setSuggestions(data.features || []);
      } catch (error) {
        console.error('Erreur lors de la recherche d\'adresses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [address]);

  const handleSelectAddress = async (feature) => {
    setAddress(feature.properties.label);
    setSuggestions([]);
    setError(null);
    setIsLoading(true);

    try {
      const [lon, lat] = feature.geometry.coordinates;
      
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${COGNAC_POSITION[1]},${COGNAC_POSITION[0]};${lon},${lat}?overview=false`
      );
      const data = await response.json();

      if (data.code === 'Ok' && data.routes && data.routes[0]) {
        const distanceInKm = Math.round(data.routes[0].distance / 1000);
        setDistance(distanceInKm);
        
        const extraKm = Math.max(0, distanceInKm - FREE_KILOMETERS);
        const calculatedPrice = extraKm * PRICE_PER_KM;
        setPrice(calculatedPrice);
      } else {
        setError("Impossible de calculer l'itinéraire pour cette adresse");
      }
    } catch (error) {
      console.error('Erreur lors du calcul de la distance:', error);
      setError("Une erreur est survenue lors du calcul de la distance");
    } finally {
      setIsLoading(false);
    }
  };

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
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px] z-10">
            <MapContainer
              center={COGNAC_POSITION}
              zoom={9}
              className="h-full w-full"
              style={{ background: '#f8f9fa' }}
              dragging={false}
              scrollWheelZoom={true}
              doubleClickZoom={true}
              touchZoom={true}
              zoomControl={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={COGNAC_POSITION} icon={customIcon} interactive={false} />
            </MapContainer>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-[#785444] text-center">
                Frais de déplacement
              </h3>

              <div className="border-l-4 border-[#785444] pl-4">
                <p className="text-[#785444] font-medium leading-relaxed">
                  Les 20 premiers kilomètres réels autour de Boutier-Saint-tojan (16) vous sont offerts. Les suivants à 50 centimes / kilomètres
                </p>
              </div>

              <div className="bg-[#785444]/5 p-6 rounded-lg space-y-4">
                <p className="text-[#785444]/90 text-base">
                  Péage à votre charge
                </p>
                <p className="text-[#785444]/90 text-base">
                  Frais divisibles par le nombre d'animaux au même endroit
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#785444] hover:bg-[#785444]/80 text-white py-2 px-4 rounded-md transition-colors"
              >
                Calculer les frais de déplacement
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#785444]">Calculateur de frais</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-700">
                  Attention : Les montants affichés sont donnés à titre indicatif et peuvent varier. Pour obtenir une confirmation du tarif exact, veuillez nous contacter directement.
                </p>
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Votre adresse
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#785444]"
                  placeholder="Saisissez votre adresse"
                  autoComplete="off"
                />
                
                {isLoading && (
                  <div className="absolute right-2 top-9">
                    <div className="animate-spin h-5 w-5 border-2 border-[#785444] border-t-transparent rounded-full"></div>
                  </div>
                )}

                {suggestions.length > 0 && (
                  <div className="absolute z-10 w-full bg-white border rounded-md shadow-lg mt-1">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion.properties.id}
                        onClick={() => handleSelectAddress(suggestion)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {suggestion.properties.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-md text-sm">
                  {error}
                </div>
              )}

              {distance !== null && !error && (
                <div className="space-y-4 p-4 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-600">
                    Distance par la route : {distance} km
                  </p>
                  <p className="text-sm text-gray-600">
                    {distance <= FREE_KILOMETERS ? (
                      "Déplacement gratuit !"
                    ) : (
                      `Prix estimé : ${price.toFixed(2)}€`
                    )}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    *Prix indicatif hors péage
                  </p>
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Map;