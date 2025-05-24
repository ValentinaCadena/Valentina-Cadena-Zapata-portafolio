import React from 'react';

const ModalInfo = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Más sobre mí</h2>
        <p>Este modal puede contener información adicional, experiencias, enlaces a GitHub, certificaciones, etc.</p>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Cerrar</button>
      </div>
    </div>
  );
};

export default ModalInfo;