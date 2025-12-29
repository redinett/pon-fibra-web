
import React from 'react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: '1',
    name: 'PLAN BÁSICO',
    speed: 80,
    description: 'FIBRA ÓPTICA + VELOCIDAD ESTABLE',
    price: 40,
    regularPrice: 80,
    feature: 'Ideal Hogar',
    featureIcon: 'wifi',
  },
  {
    id: '2',
    name: 'PLAN ESTÁNDAR',
    speed: 100,
    description: 'FIBRA ÓPTICA + MAYOR POTENCIA',
    price: 50,
    regularPrice: 100,
    isPopular: true,
    feature: 'Streaming 4K',
    featureIcon: 'rocket_launch',
  },
  {
    id: '3',
    name: 'PLAN PREMIUM',
    speed: 150,
    description: 'FIBRA ÓPTICA + GAMING',
    price: 60,
    regularPrice: 120,
    feature: 'Ultra Baja Latencia',
    featureIcon: 'sports_esports',
  },
];

export const Planes: React.FC = () => {
  return (
    <section id="planes" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight">
            Planes Recomendados
          </h2>
          <div className="w-24 h-2 bg-pon-fuchsia mx-auto rounded-full shadow-sm shadow-fuchsia-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4 ${
                plan.isPopular 
                  ? 'shadow-[0_25px_60px_-15px_rgba(231,31,118,0.2)] border-4 border-pon-fuchsia scale-105 z-10' 
                  : 'shadow-xl shadow-gray-200 border border-gray-100 hover:shadow-2xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-[#1e3a8a] text-[10px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest">
                  MÁS POPULAR
                </div>
              )}

              <div className={`${plan.isPopular ? 'bg-[#1e3a8a]' : 'bg-gray-100'} py-4 text-center`}>
                <span className={`text-xs font-black tracking-widest uppercase ${plan.isPopular ? 'text-white' : 'text-gray-500'}`}>
                  {plan.name}
                </span>
              </div>

              <div className="p-8 text-center flex-grow">
                <div className={`${plan.isPopular ? 'bg-pon-fuchsia' : 'bg-[#1e3a8a]'} text-white text-[10px] font-black px-4 py-1.5 rounded-full inline-block mb-6 uppercase tracking-tight whitespace-nowrap`}>
                  ¡INSTALACIÓN GRATIS!
                </div>

                <div className="text-pon-fuchsia font-black text-6xl md:text-7xl mb-2 flex items-baseline justify-center">
                  {plan.speed} 
                  <span className="text-xl md:text-2xl text-gray-300 font-bold ml-1 uppercase">Mbps</span>
                </div>
                
                <p className="text-gray-400 text-[10px] md:text-xs font-bold tracking-widest mb-8 uppercase">
                  {plan.description}
                </p>

                <div className="bg-pink-50 rounded-2xl p-4 mb-8 flex items-center justify-center gap-3">
                  <span className="text-pon-fuchsia font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">{plan.featureIcon}</span>
                    {plan.feature}
                  </span>
                </div>

                <div className="flex justify-center items-end gap-1 mb-2">
                  <span className="text-2xl font-black text-[#1e3a8a] mb-2">S/</span>
                  <span className="text-6xl font-black text-[#1e3a8a] tracking-tighter">{plan.price}</span>
                  <span className="text-gray-400 font-bold mb-2 ml-1 text-sm">x mes</span>
                </div>
                
                <p className="text-xs text-transparent select-none font-bold">
                  Sin sorpresas en tu recibo
                </p>

                {plan.isPopular && (
                   <div className="mt-4 inline-block bg-pink-100 text-pon-fuchsia px-4 py-1 rounded-lg text-xs font-black uppercase tracking-tighter">
                      Alta Velocidad Constante
                   </div>
                )}
              </div>

              <div className="p-8 pt-0">
                <a 
                  href={`https://wa.me/51966578223?text=Hola%20PON%20FIBRA,%20deseo%20contratar%20el%20${plan.name}%20de%20${plan.speed}Mbps`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center font-black py-5 rounded-2xl shadow-lg transition-all active:scale-95 transform text-lg ${
                    plan.isPopular 
                      ? 'bg-gradient-to-r from-orange-500 to-pon-fuchsia text-white hover:brightness-110' 
                      : 'bg-pon-fuchsia hover:brightness-110 text-white'
                  }`}
                >
                  Lo quiero
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-16">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-pon-fuchsia"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};
