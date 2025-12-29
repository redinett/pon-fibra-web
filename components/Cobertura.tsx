
import React from 'react';

export const Cobertura: React.FC = () => {
  return (
    <section id="cobertura" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-8 border-l-8 border-fuchsia-500 pl-6">
          Cobertura
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Actualmente contamos con disponibilidad total en <strong className="text-[#1e3a8a] font-black">Cutervo</strong> y principales zonas aledañas.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Valida tu distrito al enviar el formulario o escríbenos directamente. 
              ¿No estás seguro? Envíanos tu ubicación por WhatsApp y lo confirmamos en minutos.
            </p>
            <div className="pt-4">
              <a 
                href="https://wa.me/51966578223?text=Hola%20PON%20FIBRA,%20quiero%20consultar%20cobertura%20en%20mi%20zona." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:bg-[#1a337a] transition-all"
              >
                CONSULTAR DISPONIBILIDAD
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3 aspect-video bg-white rounded-[40px] shadow-2xl border-8 border-white flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
            <div className="relative z-10 text-center space-y-4">
              <div className="w-20 h-20 bg-fuchsia-100 text-fuchsia-500 rounded-full mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">map</span>
              </div>
              <p className="text-gray-400 font-black tracking-widest uppercase text-sm">Mapa de cobertura zona Cutervo</p>
            </div>
            {/* Map Placeholder Graphic */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path d="M0 20 L100 20 M20 0 L20 100 M80 0 L80 100 M0 50 L100 50" stroke="#d946ef" strokeWidth="0.5" fill="none" />
                  <circle cx="50" cy="50" r="5" fill="#d946ef" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
