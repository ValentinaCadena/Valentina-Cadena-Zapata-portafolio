import React from 'react';
import ProgressBar from '../atoms/progressBar';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center text-black text-center p-6 space-y-6">
      <img src="/profPic.jpg" alt="Foto de perfil" className="w-32 h-32 rounded-full object-cover" />
      <div>
        <h2 className="text-xl text-black font-semibold">Valentina Cadena</h2>
        <p className="text-black">Estudiante de Ingeniería Web</p>
      </div>
      <div className="text-sm text-left text-black w-full">
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
          <ProgressBar name='Español' number='100%' color='blue'></ProgressBar>
          <ProgressBar name='Inglés' number='80%' color='blue'></ProgressBar>
        </div>
      </div>
      <div className="w-full">
        <p className="font-semibold">Lenguajes</p>
        <div className="space-y-2 text-left">
          <ProgressBar name='JavaScript' number='90%' color='green'></ProgressBar>
          <ProgressBar name='Python' number='60%' color='green'></ProgressBar>
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