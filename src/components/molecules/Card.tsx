import { Icon } from "@iconify/react";
import ModalInfo from "../molecules/ModalInfo";
import { useState } from "react";

// Tipado de las props que recibe el componente
interface CardProps {
  text: string;           // Texto descriptivo que se muestra debajo del título
  textButton: string;     // Texto del botón (ej: "Conóceme")
  icon: string;           // Ícono que se muestra en el botón
  className?: string;     // Clases adicionales para personalizar el contenedor principal
}

// Componente Card que muestra información introductoria y abre un modal al hacer clic en el botón
const Card = ({ text, textButton, icon, className }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado que controla la visibilidad del modal

  const handleOpen = () => setIsModalOpen(true);         // Abre el modal
  const handleClose = () => setIsModalOpen(false);       // Cierra el modal

  return (
    <div className={className}>
      {/* Título principal con énfasis en "Front-end" y responsividad en cada parte del div*/}
      <h1 className="text-[#2b2b2b] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Soy Valentina Cadena, Desarrolladora{" "}
        <span className="text-purple-700">Front-end</span>
      </h1>

      {/* Texto descriptivo */}
      <p className="py-10 text-[#767676] text-sm sm:text-lg md:text-xl lg:text-lg xl:text-base">{text}</p>

      {/* Botón que abre el modal, con ícono incluido */}
      <button
        onClick={handleOpen}
        className="bg-purple-400 text-black p-4 flex text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg gap-2 items-center rounded hover:bg-purple-500 transition"
      >
        <span>{textButton}</span>
        <Icon icon={icon} />
      </button>

      {/* Modal que se muestra si isModalOpen es true */}
      {isModalOpen && <ModalInfo onClose={handleClose} />}
    </div>
  );
};

export default Card;
