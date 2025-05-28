import { Icon } from "@iconify/react";

interface PortfolioModalInfoProps {
  image: string;
  title: string;
  description: string;
  gitText: string;
  image1?: string;
  image2?: string;
  image3?: string;
  tech1?: string;
  tech2?: string;
  tech3?: string;
  tech4?: string;
  tech5?: string;
  onClose: () => void;
}

const PortfolioModalInfo = ({
  image,
  title,
  description,
  gitText,
  image1,
  image2,
  image3,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  onClose,
}: PortfolioModalInfoProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:max-w-4xl xl:w-full relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 w-full max-w-25 h-auto max-h-96 object-contain"
        />
        <h2 className="text-xl font-semibold mb-2 text-[#2b2b2b]">{title}</h2>
        <p className="text-[#767676]">{description}</p>

        {/* BONUS: Espacio para agregar enlaces u otros detalles */}
        <div className="mt-4">
          <h3 className="font-semibold text-[#2b2b2b]">Tecnologías usadas:</h3>
          <ul className="list-disc list-inside text-[#767676]">
            <li>{tech1}</li>
            <li>{tech2}</li>
            <li>{tech3}</li>
            <li>{tech4}</li>
            <li>{tech5}</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4 text-[#767676]">
          <img src={image1} alt="Imagen 1" className="rounded" />
          <img src={image2} alt="Imagen 2" className="rounded" />
          <img src={image3} alt="Imagen 3" className="rounded" />
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href={gitText}
            target="_blank"
            className="bg-[#2b2b2b] text-white px-4 py-2 gap-2 rounded hover:bg-[#5b5b5b] flex"
          >
            Ver código
            <Icon icon="mdi:github" width={25} height={25}></Icon>
          </a>
          <a
            href="https://demo.com"
            target="_blank"
            className="bg-violet-600 text-white px-4 py-2 gap-2 rounded hover:bg-violet-500 flex"
          >
            Ver demo
            <Icon icon="material-symbols-light:motion-play" width={25} height={25}></Icon>
          </a>
        </div>

        <div className="mt-4">
          <a
            href="#"
            target="_blank"
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
