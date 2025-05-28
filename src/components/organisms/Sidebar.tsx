import React, { useState, useEffect } from "react";
import ProgressBar from "../atoms/progressBar";
import Text from "../atoms/text";
import IconText from "../atoms/iconText";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Detecta cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      // Si la ventana es >= 1024px (lg), siempre mostramos la sidebar
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    };

    // Ejecuta al montar y en cada cambio de tamaño
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Botón flotante para abrir/cerrar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-white shadow-md rounded-full p-2 transition-transform duration-300 sm:block lg:hidden"
      >
        <Icon
          icon="mdi:chevron-left"
          className={`text-2xl text-[#2b2b2b] transform transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      {/* Sidebar contenedor */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen bg-white transition-transform duration-300 ease-in-out overflow-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          w-[60%] border-r-2 sm:w-[45%] md:w-[32%] lg:w-[23%] xl:w-[20%] 2xl:w-[15%]`}
      >
        {/* Contenido del Sidebar */}
        <div className="flex flex-col text-left items-center py-10 px-4 gap-4">
          <div className="relative">
            <img
              src="/profPic.jpg"
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full object-cover"
            />
            <span className="absolute bottom-2.5 right-2.5 w-4 h-4 bg-green-500 rounded-full"></span>
          </div>

          <h2 className="text-lg text-black text-center font-semibold">Valentina Cadena</h2>
          <p className="text-gray-500 mt-2 mb-10 text-center text-sm">Front-end Developer</p>

          <div className="border-t-2 border-b-2 text-black w-full py-4">
            <ul className="pl-2 space-y-1">
              <li><Text text1="Edad:" text2="23" /></li>
              <li><Text text1="Residencia:" text2="Col" /></li>
              <li><Text text1="Freelance:" text2="Available" state="Available" /></li>
              <li><Text text1="Ubicación:" text2="Medellín, Antioquia" /></li>
            </ul>
          </div>

          <div className="w-full">
            <p className="font-semibold text-black text-start mb-2 m-1">Idiomas</p>
            <div className="space-y-2 text-left text-gray-500">
              <ProgressBar name="Español" number={100} />
              <ProgressBar name="Inglés" number={60} />
            </div>
          </div>

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
