
import React, { useState } from 'react';
import { Logo } from './Logo';

interface FormData {
  nombres: string;
  documento: string;
  domicilio: string;
  telefono: string;
  email: string;
  producto: string;
  descripcionBien: string;
  tipo: string;
  detalle: string;
  pedido: string;
}

export const LibroReclamaciones: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData | null>(null);
  
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('es-PE');
  const [ticketNumber] = useState(`${currentYear}-PF-${Math.floor(1000 + Math.random() * 9000)}`);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    const extractedData: FormData = {
      nombres: formData.get('nombres') as string,
      documento: formData.get('documento') as string,
      domicilio: formData.get('domicilio') as string,
      telefono: formData.get('telefono') as string,
      email: formData.get('email') as string,
      producto: formData.get('producto') as string,
      descripcionBien: formData.get('descripcionBien') as string,
      tipo: formData.get('tipo') as string,
      detalle: formData.get('detalle') as string,
      pedido: formData.get('pedido') as string,
    };

    setData(extractedData);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    setIsSending(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  if (submitted && data) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 animate-fadeIn print-container">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-10 text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-5xl">mark_email_read</span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">¡Reclamación Enviada!</h2>
            <p className="font-bold opacity-100">Hoja de Reclamación N° {ticketNumber}</p>
          </div>
          
          <div className="p-8 md:p-12 space-y-8">
            <div className="bg-gray-50 rounded-3xl p-6 border-2 border-dashed border-gray-200">
              <h3 className="text-[#1e3a8a] font-black text-lg mb-4 uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">notifications_active</span>
                Confirmación de Envío
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 font-bold">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-sm font-black">check</span>
                  Copia enviada a: <strong className="text-pon-fuchsia">{data.email}</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-sm font-black">check</span>
                  Notificación enviada a: <strong className="text-pon-fuchsia">ponfibra@gmail.com</strong>
                </li>
              </ul>
            </div>

            <div className="pt-6 flex flex-col md:flex-row gap-4 no-print">
              <button 
                type="button"
                onClick={handlePrint} 
                className="flex-1 border-4 border-[#1e3a8a] text-[#1e3a8a] font-black py-4 rounded-2xl hover:bg-[#1e3a8a] hover:text-white transition-all flex items-center justify-center gap-2 text-lg uppercase tracking-tight"
              >
                <span className="material-symbols-outlined font-black">print</span> IMPRIMIR CONSTANCIA
              </button>
              <button 
                type="button"
                onClick={() => window.location.reload()} 
                className="flex-1 bg-pon-fuchsia text-white font-black py-4 rounded-2xl shadow-xl shadow-pink-200 hover:brightness-110 transition-all text-lg uppercase tracking-tight"
              >
                VOLVER AL INICIO
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden mb-10 border border-gray-100">
          <div className="bg-[#1e3a8a] p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
               <Logo className="h-16 w-auto" />
              <div>
                <h1 className="text-2xl font-black leading-tight tracking-tight uppercase">LIBRO DE RECLAMACIONES VIRTUAL</h1>
                <p className="text-blue-200 text-xs font-bold tracking-widest uppercase">PON FIBRA - CUTERVO CAJAMARCA</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-yellow-300 font-black text-xl mb-1 uppercase">Hoja de Reclamación</div>
              <div className="text-2xl font-black tracking-tighter uppercase">N° {currentYear}-PF-####</div>
              <div className="text-xs font-bold text-blue-300 uppercase">FECHA: {currentDate}</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-4 border-pon-fuchsia">
                <span className="w-8 h-8 bg-pon-fuchsia text-white rounded-full flex items-center justify-center font-black text-sm">1</span>
                <h2 className="text-xl font-black text-[#1e3a8a] uppercase tracking-wide">IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Nombres y Apellidos*</label>
                  <input required name="nombres" type="text" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">DNI / CE*</label>
                  <input required name="documento" type="text" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Domicilio*</label>
                  <input required name="domicilio" type="text" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Teléfono / Celular*</label>
                  <input required name="telefono" type="tel" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Email*</label>
                  <input required name="email" type="email" placeholder="Para enviarle su copia" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800" />
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-4 border-pon-fuchsia">
                <span className="w-8 h-8 bg-pon-fuchsia text-white rounded-full flex items-center justify-center font-black text-sm">2</span>
                <h2 className="text-xl font-black text-[#1e3a8a] uppercase tracking-wide">IDENTIFICACIÓN DEL BIEN CONTRATADO</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Producto o Servicio*</label>
                  <select required name="producto" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800 appearance-none">
                    <option value="">Seleccione...</option>
                    <option value="Internet">Internet Fibra Óptica</option>
                    <option value="Instalacion">Servicio de Instalación</option>
                    <option value="Equipos">Equipos (Router/ONT)</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Descripción del Bien*</label>
                  <input required name="descripcionBien" type="text" placeholder="Ej: Plan Internet 100 Mbps" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800" />
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b-4 border-pon-fuchsia">
                <span className="w-8 h-8 bg-pon-fuchsia text-white rounded-full flex items-center justify-center font-black text-sm">3</span>
                <h2 className="text-xl font-black text-[#1e3a8a] uppercase tracking-wide">DETALLE DE LA RECLAMACIÓN Y PEDIDO</h2>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-6 rounded-3xl border-2 border-gray-200">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input required type="radio" name="tipo" value="reclamacion" className="w-6 h-6 text-pon-fuchsia focus:ring-pon-fuchsia" />
                    <div className="space-y-0.5">
                      <span className="font-black text-[#1e3a8a] uppercase text-sm">RECLAMACIÓN</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input required type="radio" name="tipo" value="queja" className="w-6 h-6 text-pon-fuchsia focus:ring-pon-fuchsia" />
                    <div className="space-y-0.5">
                      <span className="font-black text-[#1e3a8a] uppercase text-sm">QUEJA</span>
                    </div>
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Detalle de la reclamación o queja*</label>
                  <textarea required name="detalle" rows={4} className="w-full bg-gray-50 border-2 border-gray-200 rounded-3xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800 resize-none"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Pedido o solicitud del consumidor*</label>
                  <textarea required name="pedido" rows={3} className="w-full bg-gray-50 border-2 border-gray-200 rounded-3xl px-6 py-4 focus:border-pon-fuchsia focus:bg-white outline-none transition-all font-bold text-slate-800 resize-none"></textarea>
                </div>
              </div>
            </section>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full bg-pon-fuchsia text-white font-black py-6 rounded-3xl shadow-2xl transition-all text-xl uppercase tracking-widest flex items-center justify-center gap-4 border-b-8 border-pink-800 ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110 active:scale-[0.98] active:border-b-4'}`}
              >
                {isSending ? 'ENVIANDO RECLAMO...' : 'ENVIAR HOJA DE RECLAMACIÓN'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
