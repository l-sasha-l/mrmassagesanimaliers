// import React, { useState } from 'react';

// export default function Avis() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [reviews, setReviews] = useState([
//     { id: 1, name: 'Jean', rating: 5, comment: 'Excellent service !' },
//     { id: 2, name: 'Marie', rating: 4, comment: 'Très satisfait.' }
//   ]);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     rating: '',
//     comment: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setReviews([...reviews, { ...formData, id: Date.now() }]);
//     setFormData({ name: '', rating: '', comment: '' });
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       {/* Liste des avis */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {reviews.map(review => (
//           <div key={review.id} className="p-4 border rounded-lg shadow">
//             <div className="flex items-center gap-2 mb-2">
//               <strong>{review.name}</strong>
//               <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
//             </div>
//             <p className="text-gray-600">{review.comment}</p>
//           </div>
//         ))}
//       </div>

//       {/* Bouton d'ajout */}
//       <button 
//         onClick={() => setIsModalOpen(true)}
//         className="mt-6 mx-auto flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//       >
//         + Ajouter un avis
//       </button>

//       {/* Modale */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <h2 className="text-xl font-bold mb-4">Laissez votre avis</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 className="w-full border rounded p-2"
//                 placeholder="Votre nom"
//                 value={formData.name}
//                 onChange={(e) => setFormData({...formData, name: e.target.value})}
//                 required
//               />
//               <input
//                 className="w-full border rounded p-2"
//                 type="number"
//                 min="1"
//                 max="5"
//                 placeholder="Note (1-5)"
//                 value={formData.rating}
//                 onChange={(e) => setFormData({...formData, rating: e.target.value})}
//                 required
//               />
//               <textarea
//                 className="w-full border rounded p-2"
//                 placeholder="Votre commentaire"
//                 value={formData.comment}
//                 onChange={(e) => setFormData({...formData, comment: e.target.value})}
//                 required
//               />
//               <div className="flex gap-2">
//                 <button 
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 >
//                   Envoyer
//                 </button>
//                 <button 
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from 'react';

// export default function ReviewSystem() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [reviews, setReviews] = useState([
//     { id: 1, name: 'Jean', rating: 5, comment: 'Excellent service !', status: 'approved' },
//     { id: 2, name: 'Marie', rating: 4, comment: 'Très satisfait.', status: 'approved' }
//   ]);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     rating: '',
//     comment: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newReview = {
//       ...formData,
//       id: Date.now(),
//       status: 'pending'
//     };

//     // Envoyer un email à l'administrateur
//     const emailContent = `
//       Nouvel avis à valider :
//       Nom: ${formData.name}
//       Note: ${formData.rating}
//       Commentaire: ${formData.comment}
//       Lien de validation: www.votresite.com/admin
//     `;
//     console.log('Email envoyé:', emailContent);

//     setReviews([...reviews, newReview]);
//     setFormData({ name: '', rating: '', comment: '' });
//     setIsModalOpen(false);
//   };

//   // Afficher uniquement les avis approuvés
//   const approvedReviews = reviews.filter(review => review.status === 'approved');

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {approvedReviews.map(review => (
//           <div key={review.id} className="p-4 border rounded-lg shadow">
//             <div className="flex items-center gap-2 mb-2">
//               <strong>{review.name}</strong>
//               <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
//             </div>
//             <p className="text-gray-600">{review.comment}</p>
//           </div>
//         ))}
//       </div>

//       <button 
//         onClick={() => setIsModalOpen(true)}
//         className="mt-6 mx-auto flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//       >
//         + Ajouter un avis
//       </button>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <h2 className="text-xl font-bold mb-4">Laissez votre avis</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 className="w-full border rounded p-2"
//                 placeholder="Votre nom"
//                 value={formData.name}
//                 onChange={(e) => setFormData({...formData, name: e.target.value})}
//                 required
//               />
//               <input
//                 className="w-full border rounded p-2"
//                 type="number"
//                 min="1"
//                 max="5"
//                 placeholder="Note (1-5)"
//                 value={formData.rating}
//                 onChange={(e) => setFormData({...formData, rating: e.target.value})}
//                 required
//               />
//               <textarea
//                 className="w-full border rounded p-2"
//                 placeholder="Votre commentaire"
//                 value={formData.comment}
//                 onChange={(e) => setFormData({...formData, comment: e.target.value})}
//                 required
//               />
//               <div className="flex gap-2">
//                 <button 
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 >
//                   Envoyer
//                 </button>
//                 <button 
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//                 >
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

//TODO

//V1 Combinaison des avis googles API + avis a la main 

//https://g.co/kgs/FHf4ry1

// import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { ExternalLink } from 'lucide-react';

// const Avis = () => {
//   const avis = [
//     {
//       id: 1,
//       nom: "Marie L.",
//       texte: "Service exceptionnel, je recommande vivement !",
//       note: 5,
//       source: "google",
//       date: "2024-01-15"
//     },
//     {
//       id: 2,
//       nom: "Pierre D.",
//       texte: "Très satisfait de la prestation, équipe professionnelle.",
//       note: 4,
//       source: "sms",
//       date: "2024-01-10"
//     }
//   ];

//   const urlGoogle = "https://g.co/kgs/FHf4ry1";

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {avis.map((avis) => (
//           <Card key={avis.id} className="relative">
//             <CardContent className="pt-6">
//               <div className="absolute top-3 right-3">
//                 <span className={`px-2 py-1 text-xs rounded-full ${
//                   avis.source === 'google' 
//                     ? 'bg-blue-100 text-blue-800' 
//                     : 'bg-green-100 text-green-800'
//                 }`}>
//                   {avis.source === 'google' ? 'Google' : 'SMS'}
//                 </span>
//               </div>
              
//               <div className="flex items-center mb-2">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className={i < avis.note ? "text-yellow-400" : "text-gray-300"}>
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
              
//               <p className="mb-2">{avis.texte}</p>
//               <div className="flex justify-between text-sm text-gray-600">
//                 <span>{avis.nom}</span>
//                 <span>{new Date(avis.date).toLocaleDateString()}</span>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <button 
//         onClick={() => window.open(urlGoogle, '_blank')}
//         className="mt-6 flex items-center gap-2 mx-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         Voir tous nos avis
//         <ExternalLink size={16} />
//       </button>
//     </div>
//   );
// };

// export default Avis;

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
