import React, { useState, useEffect } from "react";
import ProgressBar from "../atoms/progressBar";
import Text from "../atoms/text";
import IconText from "../atoms/iconText";
import { Icon } from "@iconify/react";

/**
 * Organismo Sidebar: barra lateral lateral responsiva y funcional para perfil
 * 
 * - Permite mostrar/ocultar la barra en pantallas pequeñas mediante un botón flotante.
 * - Siempre visible en pantallas grandes (≥1024px).
 * - Contiene información personal (foto, nombre, título).
 * - Muestra detalles personales mediante el átomo Text.
 * - Presenta barras de progreso con conocimientos e idiomas usando ProgressBar.
 * - Lista habilidades adicionales con íconos y texto (IconText).
 * - Usa transición suave para la apertura/cierre y responsive widths con Tailwind.
 */
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Detecta cambios en el tamaño de pantalla para forzar sidebar abierta en lg+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    };

    handleResize(); // Verifica al montar
    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 
        Botón flotante para abrir/cerrar sidebar en pantallas pequeñas 
        - Posición fija, encima del contenido (z-index alto)
        - Solo visible en sm y md, oculto en lg+
        - Ícono gira 180° según estado abierto/cerrado
      */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-white shadow-md rounded-full p-2 transition-transform duration-300 sm:block lg:hidden"
        aria-label={isOpen ? "Cerrar barra lateral" : "Abrir barra lateral"}
      >
        <Icon
          icon="mdi:chevron-left"
          className={`text-2xl text-[#2b2b2b] transform transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      {/* 
        Sidebar contenedor
        - Posición fija izquierda, ocupa toda la altura
        - Ancho responsive según breakpoint (60% móvil hasta 15% 2xl)
        - Aparece/desaparece con transformaciones CSS (translateX)
        - Scroll si el contenido excede la altura
      */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen bg-white transition-transform duration-300 ease-in-out overflow-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          w-[60%] border-r-2 sm:w-[45%] md:w-[32%] lg:w-[23%] xl:w-[20%] 2xl:w-[15%]`}
      >
        {/* Contenido principal: información personal, habilidades y detalles */}
        <div className="flex flex-col text-left items-center py-10 px-4 gap-4">
          
          {/* Foto perfil con indicador de estado en esquina */}
          <div className="relative">
            <img
              src="/profPic.jpg"
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full object-cover"
            />
            <span className="absolute bottom-2.5 right-2.5 w-4 h-4 bg-green-500 rounded-full" aria-label="En línea"></span>
          </div>

          {/* Nombre y profesión */}
          <h2 className="text-lg text-black text-center font-semibold">Valentina Cadena</h2>
          <p className="text-gray-500 mt-2 mb-10 text-center text-sm">Front-end Developer</p>

          {/* Datos personales con borde superior e inferior */}
          <div className="border-t-2 border-b-2 text-black w-full py-4">
            <ul className="pl-2 space-y-1">
              {/* Átomos Text reutilizados para par etiquetas y valores */}
              <li><Text text1="Edad:" text2="23" /></li>
              <li><Text text1="Residencia:" text2="Col" /></li>
              <li><Text text1="Freelance:" text2="Available" state="Available" /></li>
              <li><Text text1="Ubicación:" text2="Medellín, Antioquia" /></li>
            </ul>
          </div>

          {/* Idiomas con barra de progreso */}
          <div className="w-full">
            <p className="font-semibold text-black text-start mb-2 m-1">Idiomas</p>
            <div className="space-y-2 text-left text-gray-500">
              <ProgressBar name="Español" number={100} />
              <ProgressBar name="Inglés" number={60} />
            </div>
          </div>

          {/* Lenguajes de programación con barra de progreso y bordes */}
          <div className="w-full border-t-2 border-b-2 py-4">
            <p className="font-semibold text-black text-center mb-2 m-1">Lenguajes</p>
            <div className="space-y-2 text-left text-gray-500">
              <ProgressBar name="Java" number={80} />
              <ProgressBar name="Python" number={70} />
              <ProgressBar name="Javascript" number={60} />
              <ProgressBar name="Typescript" number={50} />
              <ProgressBar name="PHP" number={20} />
            </div>
          </div>

          {/* Habilidades adicionales con lista y íconos */}
          <div className="w-full">
            <p className="font-semibold text-black">Habilidades adicionales</p>
            <div className="list-disc list-inside text-left text-gray-500 border-b-2 py-2 text-sm">
              <IconText icon="tabler:squares" text="SQL, MySQL" />
              <IconText icon="tabler:squares" text="MongoDB" />
              <IconText icon="tabler:squares" text="Git, GitHub" />
              <IconText icon="tabler:squares" text="Azure DevOps" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
