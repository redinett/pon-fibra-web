
import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (view: 'home' | 'reclamaciones' | 'como-pagar' | 'politica-privacidad' | 'planes' | 'dudas') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleDownloadContract = () => {
    alert("Iniciando descarga: Contrato de Prestación del Servicio de Acceso a Internet Fijo Prepago (Aprobado por OSIPTEL)");
  };

  return (
    <footer className="bg-[#1e3a8a] text-white pt-20 pb-10 border-t-[10px] border-pon-fuchsia relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
         <svg width="400" height="400" viewBox="0 0 100 100">
            <circle cx="100" cy="0" r="80" fill="white" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-16">
          
          <div className="space-y-6">
            <h4 className="text-xl font-black text-fuchsia-400 tracking-wider uppercase">Contacto Directo</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <Logo className="h-12 w-auto" />
                 <span className="text-2xl font-black tracking-tight">PON FIBRA</span>
              </div>
              <p className="text-blue-200 font-medium">Proveedor de internet fibra óptica en Cutervo. Atención inmediata por WhatsApp.</p>
              <div className="flex flex-col gap-3 pt-2">
                <a 
                  href="https://wa.me/51966578223" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-fuchsia-400 transition group"
                >
                  <span className="material-symbols-outlined text-[#25D366] group-hover:scale-110 transition font-black">chat</span>
                  <span className="font-bold text-xl">966 578 223</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-fuchsia-400">location_on</span>
                  <span className="font-bold">Cutervo, Cajamarca, Perú</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black text-fuchsia-400 tracking-wider uppercase">Información Legal</h4>
            <ul className="space-y-4 font-bold text-blue-100">
              <li><button onClick={() => onNavigate('politica-privacidad')} className="hover:text-fuchsia-400 transition-all flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span> Política de Privacidad
              </button></li>
              <li><button onClick={() => onNavigate('dudas')} className="hover:text-fuchsia-400 transition-all flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span> ¿Tienes Dudas? (Preguntas Frecuentes)
              </button></li>
              <li>
                <button onClick={() => onNavigate('reclamaciones')} className="hover:text-fuchsia-400 transition-all flex items-center gap-2 w-full text-left">
                  <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span> Libro de Reclamaciones
                </button>
              </li>
              <li className="pt-2">
                <button 
                  onClick={handleDownloadContract}
                  className="bg-pon-fuchsia/20 hover:bg-pon-fuchsia text-white border-2 border-pon-fuchsia/50 px-4 py-2 rounded-xl transition-all flex items-center gap-3 text-sm group"
                >
                  <span className="material-symbols-outlined text-xl group-hover:animate-bounce">download</span>
                  Modelo de Contrato (OSIPTEL)
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black text-fuchsia-400 tracking-wider uppercase">Nota Importante</h4>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
              <p className="text-xs text-blue-200 leading-relaxed font-medium">
                Sujeto a factibilidad técnica. La velocidad mínima garantizada es el 70% de la velocidad máxima contratada. Atención al cliente única por WhatsApp al 966 578 223.
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 text-center space-y-4">
          <p className="text-xs text-blue-300/60 font-medium">
            © 2024 PON FIBRA CUTERVO. Todos los derechos reservados. <br className="md:hidden"/>
            www.ponfibra.pe | Registro de Empresas de Telecomunicaciones.
          </p>
        </div>
      </div>

      <a 
        href="https://wa.me/51966578223" 
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center animate-bounce border-4 border-white/20"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892-2.096 0-4.14-.546-5.946-1.587L0 24zm6.55-1.585l.361.214a9.852 9.852 0 005.031 1.378h.005c5.448 0 9.882-4.437 9.885-9.885a9.82 9.82 0 00-2.893-6.994 9.825 9.825 0 00-6.988-2.898c-5.451 0-9.887 4.435-9.888 9.884-.001 2.097.547 4.143 1.51 5.26l.235.374-1.001 3.65 3.74-.982zm10.921-7.032c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
      </a>
    </footer>
  );
};
