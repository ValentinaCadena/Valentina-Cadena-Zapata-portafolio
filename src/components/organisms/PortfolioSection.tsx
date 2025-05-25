import React from 'react';

const projects = [
  {
    title: 'Landing Page ONG',
    description: 'Diseño e implementación de una página institucional.',
    image: '/project1.jpg'
  },
  {
    title: 'App de Tareas y entregas',
    description: 'Gestión de tareas con React y Firebase.',
    image: '/project2.jpg'
  }
];

const PortfolioSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Portafolio</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {projects.map((project, index) => (
          <div key={index} className="min-w-[280px] bg-white rounded shadow p-4">
            <img src={project.image} alt={project.title} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-2 font-semibold">{project.title}</h3>
            <p className="text-sm text-black">{project.description}</p>
            <button className="mt-2 text-blue-600 hover:underline">Saber más</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;