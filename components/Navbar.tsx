
import React, { useState } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (view: 'home' | 'reclamaciones' | 'como-pagar' | 'politica-privacidad' | 'planes' | 'dudas') => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: 'home' | 'reclamaciones' | 'como-pagar' | 'politica-privacidad' | 'planes' | 'dudas') => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => handleNav('home')} className="flex items-center">
              <Logo className="h-14 w-auto" />
              <span className="ml-3 text-xl font-extrabold text-[#1e3a8a] hidden sm:block uppercase tracking-tighter italic">PON FIBRA</span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNav('home')} className={`font-black text-sm uppercase tracking-wider transition ${currentView === 'home' ? 'text-pon-fuchsia' : 'text-gray-600 hover:text-pon-fuchsia'}`}>Inicio</button>
            <button onClick={() => handleNav('planes')} className={`font-black text-sm uppercase tracking-wider transition ${currentView === 'planes' ? 'text-pon-fuchsia' : 'text-gray-600 hover:text-pon-fuchsia'}`}>Planes</button>
            <button onClick={() => handleNav('dudas')} className={`font-black text-sm uppercase tracking-wider transition ${currentView === 'dudas' ? 'text-pon-fuchsia' : 'text-gray-600 hover:text-pon-fuchsia'}`}>¿Tienes Dudas?</button>
            <button onClick={() => handleNav('como-pagar')} className={`font-black text-sm uppercase tracking-wider transition ${currentView === 'como-pagar' ? 'text-pon-fuchsia' : 'text-gray-600 hover:text-pon-fuchsia'}`}>¿Cómo Pago?</button>
            <button onClick={() => handleNav('reclamaciones')} className={`font-black text-sm uppercase tracking-wider transition ${currentView === 'reclamaciones' ? 'text-pon-fuchsia' : 'text-gray-600 hover:text-pon-fuchsia'}`}>Reclamos</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/51966578223" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white font-black bg-[#25D366] hover:bg-[#1eb855] px-6 py-3 rounded-2xl transition shadow-md text-sm uppercase"
            >
              <span className="material-symbols-outlined text-lg mr-2">chat</span>
              WhatsApp Ventas
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-xl animate-fadeIn">
          <button onClick={() => handleNav('home')} className={`block w-full text-left font-black uppercase tracking-widest py-3 border-b border-gray-50 ${currentView === 'home' ? 'text-pon-fuchsia' : 'text-gray-600'}`}>Inicio</button>
          <button onClick={() => handleNav('planes')} className={`block w-full text-left font-black uppercase tracking-widest py-3 border-b border-gray-50 ${currentView === 'planes' ? 'text-pon-fuchsia' : 'text-gray-600'}`}>Nuestros Planes</button>
          <button onClick={() => handleNav('dudas')} className={`block w-full text-left font-black uppercase tracking-widest py-3 border-b border-gray-50 ${currentView === 'dudas' ? 'text-pon-fuchsia' : 'text-gray-600'}`}>¿Tienes Dudas?</button>
          <button onClick={() => handleNav('como-pagar')} className={`block w-full text-left font-black uppercase tracking-widest py-3 border-b border-gray-50 ${currentView === 'como-pagar' ? 'text-pon-fuchsia' : 'text-gray-600'}`}>¿Cómo Pago mi Recibo?</button>
          <button onClick={() => handleNav('reclamaciones')} className={`block w-full text-left font-black uppercase tracking-widest py-3 ${currentView === 'reclamaciones' ? 'text-pon-fuchsia' : 'text-gray-600'}`}>Libro de Reclamaciones</button>
          <div className="pt-4 flex flex-col gap-3">
             <a 
               href="https://wa.me/51966578223" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full text-center bg-[#25D366] text-white py-4 rounded-2xl font-black text-sm uppercase shadow-lg"
             >
               WhatsApp Directo
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};
