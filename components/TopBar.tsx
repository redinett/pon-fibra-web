
import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#1e3a8a] text-white text-[10px] md:text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-1 md:space-y-0">
        <span className="font-medium tracking-wide">Instalación 24-72h · Cobertura en Cutervo · Atención personalizada</span>
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://clientes.portalinternet.io/accounts/login/?empresa=pon-fibra" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-fuchsia-400 transition flex items-center gap-1.5 font-bold uppercase tracking-tighter"
          >
            <span className="material-symbols-outlined text-[14px]">account_circle</span>
            Zona de Clientes
          </a>
        </div>
      </div>
    </div>
  );
};
