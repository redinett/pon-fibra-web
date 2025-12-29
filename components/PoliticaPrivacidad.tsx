
import React from 'react';

export const PoliticaPrivacidad: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-[#1e3a8a] tracking-tight uppercase">
            Política de Privacidad
          </h1>
          <div className="w-24 h-2 bg-pon-fuchsia mx-auto rounded-full"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            Protección de Datos Personales - Ley N° 29733 (Perú)
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1e3a8a] uppercase border-l-4 border-pon-fuchsia pl-4">1. Introducción</h2>
            <p>
              En <strong>PON FIBRA</strong> (en adelante, "la Empresa"), con RUC 20606525860, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal de acuerdo con la <strong>Ley N° 29733, Ley de Protección de Datos Personales</strong>, y su Reglamento aprobado por el Decreto Supremo N° 003-2013-JUS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1e3a8a] uppercase border-l-4 border-pon-fuchsia pl-4">2. Información Recopilada</h2>
            <p>
              Recopilamos datos personales necesarios para la prestación del servicio de internet de fibra óptica, tales como:
            </p>
            <ul className="list-disc pl-6 font-medium space-y-2">
              <li>Nombres y apellidos completos.</li>
              <li>Documento Nacional de Identidad (DNI) o Carné de Extranjería.</li>
              <li>Dirección de domicilio (para instalación y facturación).</li>
              <li>Número de teléfono celular y correo electrónico.</li>
              <li>Datos de ubicación para validación de cobertura técnica.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1e3a8a] uppercase border-l-4 border-pon-fuchsia pl-4">3. Finalidad del Tratamiento</h2>
            <p>
              Sus datos personales serán tratados para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 font-medium space-y-2">
              <li>Gestionar la contratación y provisión del servicio de internet.</li>
              <li>Atender consultas, solicitudes de soporte técnico y reclamos.</li>
              <li>Emisión de comprobantes de pago electrónicos.</li>
              <li>Informar sobre cambios en el servicio, mantenimiento de red o nuevas ofertas comerciales (siempre que se cuente con su consentimiento).</li>
              <li>Cumplir con las obligaciones legales ante los organismos reguladores como OSIPTEL.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1e3a8a] uppercase border-l-4 border-pon-fuchsia pl-4">4. Banco de Datos y Seguridad</h2>
            <p>
              La información se almacena en nuestro banco de datos personales titularidad de PON FIBRA. Hemos implementado todas las medidas de seguridad técnicas, organizativas y legales para evitar cualquier alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1e3a8a] uppercase border-l-4 border-pon-fuchsia pl-4">5. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a ejercer sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO)</strong> sobre su información personal. 
            </p>
            <p>
              Para ejercer estos derechos, puede enviar una solicitud detallada a nuestro correo electrónico: <strong className="text-pon-fuchsia">ponfibra@gmail.com</strong> o acercarse a nuestras oficinas en Cutervo, Cajamarca.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1e3a8a] uppercase border-l-4 border-pon-fuchsia pl-4">6. Consentimiento</h2>
            <p>
              Al proporcionar sus datos a través de nuestros formularios en <strong>www.ponfibra.pe</strong> o WhatsApp, usted otorga su consentimiento previo, informado, expreso e inequívoco para el tratamiento de sus datos personales bajo los términos aquí expuestos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#1e3a8a] uppercase border-l-4 border-pon-fuchsia pl-4">7. Cambios en la Política</h2>
            <p>
              PON FIBRA se reserva el derecho de modificar esta política para adaptarla a novedades legislativas o jurisprudenciales. Cualquier cambio será publicado oportunamente en este mismo sitio web.
            </p>
          </section>

        </div>

        {/* Pie de página de la política */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">
            Última actualización: Mayo 2024
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-pon-fuchsia font-black text-sm uppercase hover:underline"
          >
            Volver arriba
          </button>
        </div>

      </div>
    </div>
  );
};
