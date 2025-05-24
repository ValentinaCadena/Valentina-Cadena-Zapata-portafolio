import React from 'react';

const education = [
  {
    institution: 'Universidad de los Andes',
    dates: '2021 - Actualidad',
    title: 'Ingeniería de Sistemas',
    description: 'Estudios centrados en desarrollo web, bases de datos y UX.'
  },
  {
    institution: 'Colegio San José',
    dates: '2010 - 2020',
    title: 'Bachillerato',
    description: 'Formación académica general con énfasis en tecnología.'
  }
];

const EducationSection = () => {
  return (
    <section className="space-y-6">
      {education.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded shadow">
          <h3 className="font-bold text-xl">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.institution} - {item.dates}</p>
          <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default EducationSection;