// import React from 'react';

// const contact = () => {
//   return (
//     <section id="contact">
//       <h2>Contactez-nous</h2>
//       {/* <form>
//         <label htmlFor="name">Nom:</label>
//         <input type="text" id="name" name="name" />
        
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" />
        
//         <label htmlFor="message">Message:</label>
//         <textarea id="message" name="message"></textarea>
        
//         <button type="submit">Envoyer</button>
//       </form> */}

//       {/* Phone */}
//       <svg class="h-8 w-8 text-indigo-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
//         <path stroke="none" d="M0 0h24v24H0z" />
//         <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
//       </svg>

//       {/* Mail */}
//       <svg class="h-8 w-8 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
//         <path stroke="none" d="M0 0h24v24H0z"/>  
//         <polyline points="3 9 12 15 21 9 12 3 3 9" />  
//         <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />  
//         <line x1="3" y1="19" x2="9" y2="13" />  
//         <line x1="15" y1="13" x2="21" y2="19" />
//       </svg>

//       {/* Instagram */}
//       <svg class="h-8 w-8 text-indigo-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  
//         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//       </svg>
//     </section>
//   );
// };

// export default contact;


import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      value: "06 87 93 34 16",
      link: "tel:+33687933416",
      description: "Disponible du lundi au samedi"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "mr_massages.animaliers@yahoo.com",
      link: "mailto:mr_massages.animaliers@yahoo.com",
      description: "Réponse sous 24-48h"
    },
    {
      icon: <Instagram size={24} />,
      title: "Instagram", 
      value: "@mr_massages.animaliers",
      link: "https://instagram.com/mr_massages.animaliers",
      description: "Suivez notre actualité"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#fffcf4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#785444] mb-4">Contactez-nous</h2>
          <p className="text-lg text-[#785444] max-w-2xl mx-auto opacity-90">
            Pour toute question ou prise de rendez-vous, n'hésitez pas à nous contacter par le moyen qui vous convient le mieux
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              href={method.link}
              className="group relative p-8 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Arrière-plan décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fffcf4] to-[#fffcf4]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Contenu */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#785444] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#fffcf4]">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#785444] mb-2">
                  {method.title}
                </h3>
                
                {/* <p className="text-lg font-medium text-[#785444] mb-2"> */}
                <p className="text-sm font-medium text-[#785444] mb-2">
                  {method.value}
                </p>
                
                <p className="text-sm text-[#785444]/80">
                  {method.description}
                </p>
              </div>
              
              {/* Bordure animée */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#785444] w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;