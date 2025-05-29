import React from "react";
import Icons from "../atoms/icons";

/**
 * Organismo SocialSidebar: barra lateral con enlaces a redes sociales
 * 
 * - Barra vertical sticky que se mantiene visible al hacer scroll.
 * - Ubicada en el lado derecho de la pantalla.
 * - Contiene título y una lista de íconos con enlaces a redes sociales.
 * - Cada ícono es un átomo reutilizable Icons, que recibe icono y URL.
 * - Diseño limpio y responsivo con espacio entre íconos y padding superior.
 * - Fondo blanco y texto en gris oscuro para buena legibilidad.
 */
const SocialSidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-start pt-20 bg-white h-screen sticky top-0 right-0 w-full">
      {/* Título de la barra lateral */}
      <h1 className="text-[#2b2b2b] text-base md:text-lg font-semibold">Links</h1>

      {/* Íconos con enlaces a redes sociales, reutilizando átomo Icons */}
      <Icons icon="mdi:facebook" url="https://www.facebook.com/valentina.cadenazapata" />
      <Icons icon="mdi:instagram" url="https://www.instagram.com/valentinazapata2015/" />
      <Icons icon="tabler:brand-x" url="https://x.com/?lang=es" />
      <Icons icon="mdi:linkedin" url="https://www.linkedin.com/in/valentina-cadena-zapata-a75358223/" />
      <Icons icon="mdi:github" url="https://github.com/ValentinaCadena" />
      <Icons icon="mdi:youtube" url="https://www.youtube.com/@ValentinaCadenaZapata" />
      <Icons icon="mdi:web" url="https://valentina-cadena-zapata-portafolio.vercel.app" />
    </div>
  );
};

export default SocialSidebar;
