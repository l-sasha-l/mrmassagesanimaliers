import React from 'react';
import { ExternalLink } from 'lucide-react';

const Avis = () => {
  const avis = [
    {
      id: 1,
      nom: "Alicia",
      texte: "Coucou! Fandango était top aujourd'hui, plus de gêne ni rien merci beaucoup",
      note: 5,
      source: "sms",
      // date: "2024-01-15"
    },
    {
      id: 2,
      nom: "Chloé", 
      texte: "Coucou Morgane, Des p'tites nouvelles d'Eclat après ma séance d'aujourd'hui : je l'ai trouvé très en forme, souple et énergique. Merci beaucoup pour ton travail",
      note: 5,
      source: "sms",
      // date: "2024-01-10"
    },
    {
      id: 3,
      nom: "Jeanne", 
      texte: "Super massage et super masseuse ! Je recommande vivement :)",
      note: 5,
      source: "google",
      // date: "2024-01-10"
    }
  ];

  const urlGoogle = "https://g.co/kgs/FHf4ry1";

  return (
    <section id='avis' className="bg-[#ae907e]">
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {avis.map((avis) => (
            <div
              key={avis.id}
              className="relative bg-[#fffcf4] shadow rounded-lg p-4"
            >
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    avis.source === 'google'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {avis.source === 'google' ? 'Google' : 'SMS'}
                </span>
              </div>

              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < avis.note ? "text-yellow-400" : "text-gray-300"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <p className="mb-2 text-gray-800">{avis.texte}</p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{avis.nom}</span>
                {/* <span>{new Date(avis.date).toLocaleDateString()}</span> */}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => window.open(urlGoogle, '_blank')}
          className="mt-6 flex items-center gap-2 mx-auto px-4 py-2 bg-[#fffcf4] text-[#785444] font-bold rounded-lg hover:opacity-80"
          //text-[#734930]
        >
          Ajouter un avis
          <ExternalLink size={16} />
        </button>
      </div>
    </section>
  );
};

export default Avis;
