
import React from 'react';

const detailedPlans = [
  {
    id: '1',
    name: 'PLAN BÁSICO',
    speed: '80',
    price: '40',
    benefit: 'Perfecto para clases virtuales y redes sociales.',
    features: ['100% Fibra Óptica', 'Internet Ilimitado', 'Instalación 24-72h', 'Soporte Local'],
    icon: 'wifi'
  },
  {
    id: '2',
    name: 'PLAN ESTÁNDAR',
    speed: '100',
    price: '50',
    featured: true,
    benefit: 'Ideal para streaming en 4K y múltiples dispositivos.',
    features: ['Streaming Ultra HD', 'Alta Disponibilidad', 'Router Dual Band', 'Tecnología de Punta'],
    icon: 'rocket_launch'
  },
  {
    id: '3',
    name: 'PLAN PREMIUM',
    speed: '150',
    price: '60',
    benefit: 'La máxima potencia para gamers y trabajo pesado.',
    features: ['Gaming Sin Lag', 'Latencia Mínima', 'Prioridad de Soporte', 'Ideal para Negocios'],
    icon: 'sports_esports'
  }
];

export const PlanesView: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Subpage Section */}
      <section className="bg-[#1e3a8a] py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pon-fuchsia/10 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-pon-fuchsia text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] mb-6">
            Internet Hogar en Cutervo
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
            ELIGE TU VELOCIDAD <br/>
            <span className="text-pon-fuchsia">Y VUELA EN LA RED</span>
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium opacity-80">
            Planes diseñados para lo que realmente necesitas. Sin sorpresas, sin límites de descarga y con atención inmediata vía WhatsApp.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detailedPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`flex flex-col rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-4 ${
                  plan.featured 
                    ? 'bg-white shadow-[0_40px_80px_-15px_rgba(231,31,118,0.3)] ring-4 ring-pon-fuchsia scale-105 z-10' 
                    : 'bg-gray-50 shadow-xl border border-gray-100'
                }`}
              >
                {plan.featured && (
                  <div className="bg-pon-fuchsia text-white text-center py-3 font-black text-xs uppercase tracking-widest">
                    RECOMENDADO PARA FAMILIAS
                  </div>
                )}
                
                <div className="p-10 flex-grow">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-[#1e3a8a] font-black text-sm uppercase tracking-widest mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-6xl font-black text-[#1e3a8a] tracking-tighter">{plan.speed}</span>
                        <span className="text-xl font-bold text-gray-400">Mbps</span>
                      </div>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.featured ? 'bg-pon-fuchsia text-white' : 'bg-[#1e3a8a] text-white'}`}>
                      <span className="material-symbols-outlined text-3xl">{plan.icon}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 font-bold text-sm mb-8 leading-relaxed">
                    {plan.benefit}
                  </p>

                  <div className="space-y-4 mb-10">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-green-600 text-sm font-black">check</span>
                        </div>
                        <span className="text-sm font-bold text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-gray-100">
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-xl font-black text-[#1e3a8a]">S/</span>
                      <span className="text-5xl font-black text-[#1e3a8a]">{plan.price}</span>
                      <span className="text-gray-400 font-bold ml-1">x mes</span>
                    </div>
                  </div>
                </div>

                <div className="p-10 pt-0">
                  <a 
                    href={`https://wa.me/51966578223?text=Hola%20PON%20FIBRA,%20estoy%20interesado%20en%20el%20${plan.name}%20de%20${plan.speed}Mbps`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center font-black py-5 rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-sm ${
                      plan.featured 
                        ? 'bg-pon-fuchsia text-white hover:brightness-110 shadow-pink-200' 
                        : 'bg-[#1e3a8a] text-white hover:bg-[#152a64]'
                    }`}
                  >
                    Contratar Ahora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#1e3a8a] rounded-[50px] p-10 md:p-20 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">¿DUDAS SOBRE QUÉ PLAN <br/><span className="text-pon-fuchsia">ES EL IDEAL PARA TI?</span></h2>
               <div className="flex flex-col items-center justify-center gap-6">
                  <a 
                    href="https://wa.me/51966578223?text=Hola%20PON%20FIBRA,%20deseo%20asesoría%20sobre%20sus%20planes." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl"
                  >
                    <span className="material-symbols-outlined font-black">chat</span> ASESORÍA POR WHATSAPP
                  </a>
                  <p className="text-sm font-bold opacity-60 uppercase tracking-tighter mt-4">Atención exclusiva por WhatsApp: 966 578 223</p>
               </div>
               <p className="mt-12 text-xs font-bold opacity-40 uppercase tracking-[0.3em]">www.ponfibra.pe</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
