
import React from 'react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    title: 'Velocidad real y estable',
    description: 'Videollamadas fluidas, juegos sin lag y streaming en 4K sin interrupciones durante todo el día.',
    icon: 'speed',
  },
  {
    title: 'Soporte técnico local',
    description: 'Estamos en Cutervo. Te atendemos por WhatsApp o teléfono rápidamente. Nada de robots eternos.',
    icon: 'support_agent',
  },
  {
    title: 'Precio final transparente',
    description: 'Sin letras pequeñas. Tarifa clara desde el primer día. Pagas lo que contratas.',
    icon: 'price_check',
  },
];

export const Beneficios: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-12 md:mb-16 border-l-8 border-pon-fuchsia pl-6">
          Beneficios <span className="text-pon-fuchsia">PON FIBRA</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-10 bg-gray-50 rounded-[40px] hover:bg-pink-50 transition-all duration-500 flex flex-col items-start gap-6 border-2 border-transparent hover:border-pink-100"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl text-pon-fuchsia">{benefit.icon}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-black text-[#1e3a8a] group-hover:text-pon-fuchsia transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
