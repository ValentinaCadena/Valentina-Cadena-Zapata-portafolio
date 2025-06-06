import { Icon } from "@iconify/react";

// Props que recibe el componente: una función para cerrar el modal
interface ModalInfoProps {
  onClose: () => void;
}

// ModalInfo: Modal centrado que incluye un formulario básico de contratación
const ModalInfo = ({ onClose }: ModalInfoProps) => {
  return (
    // Fondo semitransparente que cubre toda la pantalla (posición fija)
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Contenedor principal del modal */}
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative">
        {/* Botón de cierre, ubicado en la esquina superior derecha */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        {/* Título del formulario */}
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Formulario de Contratación
        </h2>

        {/* Formulario de entrada */}
        <form className="flex flex-col gap-4 text-black">
          <input
            type="text"
            placeholder="Tu nombre"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="¿Qué necesitas?"
            className="p-2 border border-gray-300 rounded resize-none h-24"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white p-3 rounded hover:bg-purple-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalInfo;
