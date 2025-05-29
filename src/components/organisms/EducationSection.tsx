import React from "react";
import EducationBox from "../molecules/educationBox";

// Organismo EducationSection: sección que agrupa y presenta la información educativa
// Usa varios EducationBox (moléculas) para mostrar distintos niveles y certificados
const EducationSection = () => {
  return (
    <div>
      {/* Contenedor del título y descripción centrados */}
      <div className="text-center">
        {/* Título principal con tamaño y peso tipográfico responsivo */}
        <h1 className="text-[#2b2b2b] text-xl sm:text-2xl lg:text-4xl font-bold">
          Educación
        </h1>
        {/* Descripción breve con margen horizontal y padding ajustados según pantalla */}
        <p className="text-[#767676] px-10 pb-10 pt-6 text-sm sm:text-base lg:mx-24 xl:mx-48">
          En ésta sección podrás ver un resumen de mis estudios realizados,
          instituciones donde me gradué y certificados que saqué.
        </p>
      </div>

      {/* Contenedor blanco para los EducationBox con padding horizontal */}
      <div className="bg-white px-8 border-b-white">
        {/* Cada EducationBox representa un ítem educativo con título, roles, fechas y descripciones */}
        <EducationBox
          title="Universidad de Antioquia"
          leftText="Estudiante"
          rightText="Oct 2019 - Actualidad"
          rightTitle="Ingeniería de Sistemas"
          rightDescription="Ingeniera de Sistemas con formación en el diseño, desarrollo y gestión de soluciones tecnológicas, con enfoque en la optimización de procesos mediante software, redes y sistemas de información. "
        />
        <EducationBox
          className="border-y-2" // Esta instancia tiene bordes arriba y abajo para separar visualmente
          title="Colegio María Auxiliadora"
          leftText="Estudiante"
          rightText="Ene 2008 - Nov 2018"
          rightTitle="Educación básica y media, bachillerato"
          rightDescription="Bachiller Académico con formación integral en ciencias, humanidades y competencias básicas, orientado al desarrollo del pensamiento crítico y el aprendizaje continuo."
        />
        <EducationBox
          title="AceleraTI"
          leftText="Estudiante"
          rightText="Abr 2025 - Actualidad"
          rightTitle="Certificado de Desarrollo Backend"
          rightDescription="Curso de Desarrollo Backend enfocado en la construcción de la lógica del servidor, manejo de bases de datos y creación de API RESTful, aplicando buenas prácticas de programación."
        />
      </div>
    </div>
  );
};

export default EducationSection;
