import { Icon } from "@iconify/react";

// Props que recibe el componente para mostrar detalles de un proyecto y función para cerrar el modal
interface PortfolioModalInfoProps {
  image: string; // Imagen principal del proyecto
  title: string; // Título del proyecto
  description: string; // Descripción del proyecto
  gitText: string; // URL al repositorio GitHub
  image1?: string; // Imágenes adicionales opcionales
  image2?: string;
  image3?: string;
  image4?: string;
  tech1?: string; // Tecnologías usadas (hasta 5)
  tech2?: string;
  tech3?: string;
  tech4?: string;
  tech5?: string;
  onClose: () => void; // Función para cerrar el modal
}

const PortfolioModalInfo = ({
  image,
  title,
  description,
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
  onClose,
}: PortfolioModalInfoProps) => {
  return (
    // Fondo fijo con transparencia para oscurecer el contenido detrás del modal
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
      {/* Contenedor principal blanco del modal con padding y bordes redondeados, tamaño responsivo */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:max-w-4xl xl:w-full relative max-h-[92vh] overflow-y-auto">
        
        {/* Botón para cerrar el modal en esquina superior derecha */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        {/* Imagen principal del proyecto, con tamaño máximo y contención para no deformar */}
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 w-full max-w-25 h-auto max-h-96 object-contain"
        />

        {/* Título del proyecto */}
        <h2 className="text-xl font-semibold mb-2 text-[#2b2b2b]">{title}</h2>

        {/* Descripción del proyecto */}
        <p className="text-[#767676]">{description}</p>

        {/* Sección para listar tecnologías usadas */}
        <div className="mt-4">
          <h3 className="font-semibold text-[#2b2b2b]">Tecnologías usadas:</h3>
          <ul className="list-disc list-inside text-[#767676]">
            {/* Cada tecnología es opcional, puede ser undefined */}
            <li>{tech1}</li>
            <li>{tech2}</li>
            <li>{tech3}</li>
            <li>{tech4}</li>
            <li>{tech5}</li>
          </ul>
        </div>

        {/* Grid con imágenes adicionales en 2 columnas con espacios */}
        <div className="grid grid-cols-2 gap-2 mt-4 text-[#767676]">
          {/* Cada imagen es opcional, si no se pasa prop, no se muestra */}
          <img src={image1} alt="Imagen 1" className="rounded" />
          <img src={image2} alt="Imagen 2" className="rounded" />
          <img src={image3} alt="Imagen 3" className="rounded" />
          <img src={image4} alt="Imagen 4" className="rounded" />
        </div>

        {/* Botones para ver el código en GitHub y demo del proyecto, con iconos y estilos */}
        <div className="flex space-x-4 mt-4">
          <a
            href={gitText}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b2b2b] text-white px-4 py-2 gap-2 rounded hover:bg-[#5b5b5b] flex items-center"
          >
            Ver código
            <Icon icon="mdi:github" width={25} height={25} />
          </a>
          <a
            href="https://demo.com" // URL demo está hardcodeada, podría parametrizarse
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 text-white px-4 py-2 gap-2 rounded hover:bg-violet-500 flex items-center"
          >
            Ver demo
            <Icon icon="material-symbols-light:motion-play" width={25} height={25} />
          </a>
        </div>

        {/* Enlace adicional para proyecto en línea, actualmente sin URL real */}
        <div className="mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            Ver proyecto en línea
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModalInfo;
