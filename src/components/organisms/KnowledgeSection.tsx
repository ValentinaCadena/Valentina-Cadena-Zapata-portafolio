import React from 'react';

const knowledges = [
  { title: 'HTML & CSS', description: 'Estructura y estilos para sitios responsivos.', icon: '🌐' },
  { title: 'JavaScript', description: 'Programación dinámica y moderna.', icon: '🧠' },
  { title: 'React', description: 'Componentes reutilizables y estados.', icon: '⚛️' },
  { title: 'TailwindCSS', description: 'Diseño rápido y con utilidad.', icon: '🎨' },
];

const KnowledgeSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {knowledges.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded shadow flex items-start space-x-4">
          <span className="text-3xl">{item.icon}</span>
          <div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default KnowledgeSection;