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