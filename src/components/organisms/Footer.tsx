import React from 'react';

// Organismo Footer: pie de página simple con texto centrado y copyright
const Footer = () => {
  return (
    // Footer con fondo blanco, texto centrado y colores tipográficos definidos
    // La tipografía es responsiva, aumentando de tamaño en pantallas medianas y grandes
    <footer className="text-center text-[#2b2b2b] p-5 bg-white justify-center text-xs md:text-sm lg:text-base">
      {/* Texto de derechos reservados */}
      <p>© 2025 Valentina Cadena Zapata. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
