
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-14 w-auto" }) => {
  const [error, setError] = useState(false);

  // Intentamos cargar la imagen física que el usuario proporcionó.
  // El usuario debe nombrar su archivo como 'logo-pon-fibra.png'
  if (!error) {
    return (
      <img 
        src="logo-pon-fibra.png" 
        alt="PON FIBRA" 
        className={className}
        onError={() => setError(true)}
      />
    );
  }

  // Fallback SVG de alta fidelidad si la imagen no carga
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="100" cy="100" r="98" fill="#e71f76" />
      
      {/* P */}
      <path d="M45 70H75C82 70 85 73 85 80V95C85 102 82 105 75 105H60V130H45V70ZM60 90H70V85H60V90Z" fill="white" />
      
      {/* O con fibras (Estilizada según imagen) */}
      <path d="M115 75L95 100L105 125L125 100L115 75Z" fill="white" />
      <rect x="105" y="95" width="10" height="15" fill="#e71f76" transform="rotate(-15 110 102.5)" />
      
      {/* Líneas de Fibra (4 líneas diagonales saliendo de la O) */}
      <line x1="118" y1="85" x2="135" y2="55" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="125" y1="90" x2="142" y2="60" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="132" y1="95" x2="149" y2="65" stroke="white" strokeWidth="3" strokeLinecap="round" />

      {/* N */}
      <path d="M135 70H150L170 110V70H185V130H170L150 90V130H135V70Z" fill="white" />
      
      {/* Fibra */}
      <text 
        x="100" 
        y="165" 
        fill="white" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="22" 
        textAnchor="middle" 
        letterSpacing="2"
      >
        Fibra
      </text>
    </svg>
  );
};
