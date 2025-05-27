import { Icon } from "@iconify/react";

interface ModalInfoProps {
  onClose: () => void;
}

const ModalInfo = ({ onClose }: ModalInfoProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        <h2 className="text-2xl font-bold text-purple-700 mb-6">Formulario de Contratación</h2>

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
