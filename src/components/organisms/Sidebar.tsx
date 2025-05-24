import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 space-y-6">
      <img src="/profile.jpg" alt="Foto de perfil" className="w-32 h-32 rounded-full object-cover" />
      <div>
        <h2 className="text-xl font-semibold">Valentina Pérez</h2>
        <p className="text-gray-500">Estudiante de Ingeniería Web</p>
      </div>
      <div className="text-sm text-left w-full">
        <p className="font-semibold">Contacto:</p>
        <ul className="pl-2 space-y-1">
          <li>Bogotá, Colombia</li>
          <li>valentina@email.com</li>
          <li>+57 300 000 0000</li>
        </ul>
      </div>
      <div className="w-full">
        <p className="font-semibold">Idiomas</p>
        <div className="space-y-2 text-left">
          <div>
            <p>Español</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="w-[100%] h-full bg-blue-500 rounded"></div>
            </div>
          </div>
          <div>
            <p>Inglés</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="w-[75%] h-full bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="font-semibold">Lenguajes</p>
        <div className="space-y-2 text-left">
          <div>
            <p>JavaScript</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="w-[90%] h-full bg-green-500 rounded"></div>
            </div>
          </div>
          <div>
            <p>Python</p>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div className="w-[60%] h-full bg-green-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="font-semibold">Habilidades</p>
        <ul className="list-disc list-inside text-left">
          <li>Trabajo en equipo</li>
          <li>Comunicación efectiva</li>
          <li>Resolución de problemas</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;