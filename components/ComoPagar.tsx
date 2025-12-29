
import React from 'react';

export const ComoPagar: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Banner Section */}
      <section className="bg-pon-fuchsia relative overflow-hidden pt-12 pb-32 md:pt-20 md:pb-48 clip-path-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-black mb-6 border border-white/30 tracking-widest uppercase">
            SOPORTE DE PAGOS
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight animate-fadeIn">
            ¡Ya Puedes Pagar!<br/>
            <span className="text-yellow-300">TU RECIBO DE INTERNET</span>
          </h1>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto animate-bounce mt-8">
             <span className="material-symbols-outlined text-4xl">expand_more</span>
          </div>
        </div>
        
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 opacity-10">
           <svg width="400" height="400" viewBox="0 0 100 100">
              <circle cx="100" cy="0" r="80" fill="white" />
           </svg>
        </div>
      </section>

      {/* Payment Options Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-24 md:-mt-40 relative z-20 space-y-8">
        
        {/* Banco de la Nación */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border-2 border-white hover:border-gray-100 transition-all group">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              {/* BN Stylized Logo */}
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-white font-bold">account_balance</span>
                </div>
                <div className="text-[#1e3a8a] font-black text-2xl tracking-tighter uppercase italic">
                   Banco de <br/> la Nación
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="bg-red-600 text-white rounded-3xl p-6 shadow-xl shadow-red-100">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Cuenta Corriente</p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight select-all">00-274-026898</h3>
              </div>
              <div className="bg-yellow-400 text-[#1e3a8a] text-center py-3 rounded-2xl font-black text-sm uppercase tracking-wide">
                Solo en Agentes del Banco de la Nación
              </div>
            </div>
          </div>
        </div>

        {/* BCP */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border-2 border-white hover:border-gray-100 transition-all group">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              {/* BCP Stylized Logo */}
              <div className="text-[#1e3a8a] font-black text-5xl tracking-tighter flex items-center">
                <span className="text-orange-500">›</span>BCP<span className="text-orange-500">›</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="bg-[#1e3a8a] text-white rounded-3xl p-6 shadow-xl shadow-blue-200">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Cuenta Corriente</p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight select-all">318-5870-818010</h3>
              </div>
              <div className="bg-sky-500 text-white text-center py-3 rounded-2xl font-black text-sm uppercase tracking-wide shadow-lg shadow-sky-100">
                Solo en Agentes o App del BCP
              </div>
            </div>
          </div>
        </div>

        {/* Yape */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border-2 border-white hover:border-gray-100 transition-all group">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative transform group-hover:scale-110 transition-transform">
                {/* Official Style Yape Logo Implementation */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-cyan-400 rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg">
                    S/
                  </div>
                  <div className="bg-[#742284] px-6 py-4 rounded-3xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-black text-4xl italic tracking-tighter">yape</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="bg-[#742284] text-white rounded-3xl p-6 shadow-xl shadow-purple-200 text-center">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Al celular</p>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight select-all">966 578 223</h3>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Confirmation */}
        <div className="bg-[#25D366] rounded-[40px] p-8 md:p-12 text-white shadow-2xl text-center space-y-6 relative overflow-hidden group">
          {/* Decorative WhatsApp background */}
          <div className="absolute top-0 right-0 opacity-10 -rotate-12 translate-x-1/4 -translate-y-1/4">
             <svg className="w-64 h-64 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892-2.096 0-4.14-.546-5.946-1.587L0 24zm6.55-1.585l.361.214a9.852 9.852 0 005.031 1.378h.005c5.448 0 9.882-4.437 9.885-9.885a9.82 9.82 0 00-2.893-6.994 9.825 9.825 0 00-6.988-2.898c-5.451 0-9.887 4.435-9.888 9.884-.001 2.097.547 4.143 1.51 5.26l.235.374-1.001 3.65 3.74-.982zm10.921-7.032c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
          </div>
          
          <div className="relative z-10">
            <div className="inline-block bg-white text-[#25D366] px-6 py-2 rounded-full font-black text-sm uppercase mb-4 shadow-lg">
              PASO FINAL IMPORTANTE
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase">
              Enviar foto del VOUCHER al WhatsApp
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-[30px] border border-white/30 flex items-center gap-4 group-hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#25D366] shadow-lg">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892-2.096 0-4.14-.546-5.946-1.587L0 24zm6.55-1.585l.361.214a9.852 9.852 0 005.031 1.378h.005c5.448 0 9.882-4.437 9.885-9.885a9.82 9.82 0 00-2.893-6.994 9.825 9.825 0 00-6.988-2.898c-5.451 0-9.887 4.435-9.888 9.884-.001 2.097.547 4.143 1.51 5.26l.235.374-1.001 3.65 3.74-.982zm10.921-7.032c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                </div>
                <span className="text-4xl md:text-5xl font-black tracking-tighter">966 578 223</span>
              </div>
              
              <a 
                href="https://wa.me/51966578223?text=Hola%20PON%20FIBRA,%20aquí%20envío%20mi%20voucher%20de%20pago."
                className="bg-white text-[#25D366] font-black px-10 py-5 rounded-3xl shadow-xl hover:bg-gray-50 transition-all text-xl uppercase tracking-widest active:scale-95"
              >
                ENVIAR AHORA
              </a>
            </div>
            <p className="text-sm font-bold opacity-80 mt-8 tracking-widest uppercase">www.ponfibra.pe</p>
          </div>
        </div>

      </div>

      {/* Note for Customer */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center text-gray-400 font-bold text-xs uppercase tracking-tighter leading-relaxed">
        <p>RECUERDE QUE PARA MANTENER SU SERVICIO ACTIVO DEBE REALIZAR SU PAGO ANTES DE LA FECHA DE VENCIMIENTO.<br/>EL PROCESO DE RECONEXIÓN PUEDE TARDAR HASTA 2 HORAS DESPUÉS DE ENVIADO EL VOUCHER.</p>
        <p className="mt-4">www.ponfibra.pe</p>
      </div>
    </div>
  );
};
