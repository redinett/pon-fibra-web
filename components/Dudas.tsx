
import React from 'react';
import { Logo } from './Logo';

export const Dudas: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Estilo Volante */}
      <section className="bg-pon-fuchsia pt-12 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
             <div className="bg-white p-2 rounded-full shadow-2xl mb-8 transform hover:scale-105 transition-transform overflow-hidden">
                <Logo className="h-40 w-40 object-contain" />
             </div>
             
             <div className="bg-white text-pon-fuchsia px-10 py-4 rounded-[30px] shadow-xl mb-6 inline-flex items-center gap-4">
                <span className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">INTERNET</span>
             </div>

             <div className="text-white space-y-2">
                <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                  100% FIBRA ÓPTICA
                </h1>
                <p className="text-xl md:text-3xl font-black text-yellow-300 italic tracking-tight opacity-90">
                  Contrata el internet que necesitas, <span className="underline">NO el que te venden</span>
                </p>
             </div>
          </div>
        </div>
        
        {/* Curva decorativa inferior */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
           <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.11,1200,0.47V0Z" fill="#ffffff"></path>
           </svg>
        </div>
      </section>

      {/* Título de Sección */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
         <div className="bg-pon-fuchsia text-white py-4 px-10 rounded-full shadow-2xl text-center">
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-widest">RESOLVEMOS TUS DUDAS</h2>
         </div>
      </div>

      {/* Contenido de Dudas */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Dudas Item 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-pon-fuchsia tracking-tight leading-tight">
              ¿Por qué debería contratar el servicio de PON Fibra?
            </h3>
            <div className="bg-gray-50 p-8 rounded-[40px] border-2 border-gray-100 shadow-sm leading-relaxed text-slate-700 font-medium">
              <p className="mb-4">Porque brindamos una atención preferencial vía WhatsApp a todos nuestros clientes, resolvemos tus dudas e inconvenientes al instante y contamos con asesores siempre pendiente de tus inquietudes.</p>
              <p className="text-[#1e3a8a] font-black uppercase tracking-tight text-lg">
                Además, <span className="text-pon-fuchsia">siempre te cobraremos lo mismo</span>, NO aumentamos el precio luego de 2 o 3 meses.
              </p>
            </div>
          </div>

          {/* Dudas Item 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-pon-fuchsia tracking-tight leading-tight">
              ¿Cuánto tiempo demora la instalación del servicio?
            </h3>
            <div className="bg-gray-50 p-8 rounded-[40px] border-2 border-gray-100 shadow-sm leading-relaxed text-slate-700 font-medium">
              <p className="mb-4">El mismo día que contrates PON Fibra, instalamos el internet con fibra óptica en tu hogar.</p>
              <p className="flex items-center gap-3 font-black text-[#1e3a8a] text-lg">
                <span className="material-symbols-outlined text-pon-fuchsia">router</span>
                Dejamos un Router de doble banda para que todos tus dispositivos se conecten sin problemas.
              </p>
            </div>
          </div>

          {/* Dudas Item 3 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-pon-fuchsia tracking-tight leading-tight">
              Si quiero cambiar mi clave WiFi, ¿qué debo hacer?
            </h3>
            <div className="bg-gray-50 p-8 rounded-[40px] border-2 border-gray-100 shadow-sm leading-relaxed text-slate-700 font-medium">
              <p className="mb-4">
                Comunícate con nuestro <strong className="text-pon-fuchsia">WhatsApp</strong> de atención al cliente al <strong className="text-[#1e3a8a] font-black">966 578 223</strong> y coordinaremos para cambiar tu clave WiFi.
              </p>
              <p className="font-bold opacity-80 italic">
                Además, te explicará cómo hacerlo tú mismo con nuestra app personalizada.
              </p>
            </div>
          </div>

          {/* Dudas Item 4 */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-pon-fuchsia tracking-tight leading-tight">
              ¿Emiten algún Comprobante de Pago?
            </h3>
            <div className="bg-gray-50 p-8 rounded-[40px] border-2 border-gray-100 shadow-sm leading-relaxed text-slate-700 font-medium">
              <p>
                Por supuesto, somos una empresa autorizada por el <strong className="text-[#1e3a8a]">MTC</strong> y la <strong className="text-[#1e3a8a]">SUNAT</strong> para emitir boletas de venta y, si lo prefieres, facturas electrónicas.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer CTA Estilo Volante */}
      <section className="bg-gray-50 py-20">
         <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-[50px] shadow-2xl overflow-hidden border-8 border-pon-fuchsia flex flex-col items-center text-center p-12 space-y-8">
               
               <div className="flex items-center gap-6 flex-wrap justify-center">
                  <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg">
                     <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <div className="bg-pon-fuchsia text-white px-4 py-1 rounded-lg text-xs font-black uppercase tracking-widest mb-1">PIDE PON FIBRA POR WHATSAPP</div>
                    <div className="text-4xl md:text-5xl font-black text-[#1e3a8a] tracking-tighter">966 578 223</div>
                  </div>
               </div>

               <div className="w-full h-1 bg-gray-100 rounded-full"></div>

               <a 
                 href="https://wa.me/51966578223" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-2xl md:text-3xl font-black text-pon-fuchsia hover:underline tracking-tight"
               >
                 Escribir a WhatsApp
               </a>

            </div>
         </div>
      </section>
    </div>
  );
};
