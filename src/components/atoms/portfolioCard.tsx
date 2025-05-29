import { useState } from "react";
import Image from "next/image";
import PortfolioModalInfo from "../molecules/portfolioModalInfo";

// Tipado de las props que recibe la tarjeta de portafolio
interface PortfolioCardProps {
  image: string;       // Imagen principal del proyecto
  title: string;       // Título del proyecto
  text: string;        // Descripción corta
  hypertext: string;   // Texto que abre el modal
  gitText: string;     // Texto de enlace al repositorio (usado en el modal)
  image1?: string;     // Imágenes adicionales para mostrar en el modal
  image2?: string;
  image3?: string;
  image4?: string;
  tech1?: string;      // Tecnologías utilizadas, se muestran en el modal
  tech2?: string;
  tech3?: string;
  tech4?: string;
  tech5?: string;
}

// Componente que muestra una tarjeta de proyecto con imagen, resumen y acceso a más detalles
const PortfolioCard = ({
  image,
  title,
  text,
  hypertext,
  gitText,
  image1,
  image2,
  image3,
  image4,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
}: PortfolioCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto

  const handleOpen = () => setIsModalOpen(true);   // Abre el modal
  const handleClose = () => setIsModalOpen(false); // Cierra el modal

  return (
    <div className="relative bg-white max-w-sm w-[90%] sm:w-[80%] md:w-2/3 lg:w-1/2 xl:w-1/3 lg:h-[420px] xl:h-[450px] flex-shrink-0 pt-8">
      
      {/* Imagen principal del proyecto */}
      <div className="w-full relative aspect-video">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Contenido de la tarjeta: título, descripción corta y enlace para más información */}
      <div className="p-2 sm:p-4 lg:p-5 space-y-2">
        <h1 className="text-[#2b2b2b] text-center text-base lg:text-lg font-semibold">
          {title}
        </h1>

        {/* Descripción truncada a 2 líneas */}
        <p className="text-[#767676] line-clamp-2 text-sm lg:text-base">
          {text}
        </p>

        {/* Texto que abre el modal al hacer clic */}
        <p
          onClick={handleOpen}
          className="text-violet-500 underline hover:cursor-pointer hover:text-violet-600 text-base lg:text-lg font-semibold"
        >
          {hypertext}
        </p>
      </div>

      {/* Modal que muestra detalles ampliados del proyecto */}
      {isModalOpen && (
        <PortfolioModalInfo
          image={image}
          title={title}
          description={text}
          gitText={gitText}
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          tech1={tech1}
          tech2={tech2}
          tech3={tech3}
          tech4={tech4}
          tech5={tech5}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default PortfolioCard;
