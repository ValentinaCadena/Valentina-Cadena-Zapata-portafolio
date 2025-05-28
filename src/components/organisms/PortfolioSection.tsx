import React from "react";
import PortfolioCard from "../atoms/portfolioCard";

const PortfolioSection = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#2b2b2b] text-xl sm:text-2xl lg:text-4xl font-bold">Portafolio</h1>
        <p className="text-[#767676] px-10 pb-10 pt-6 text-sm sm:text-base lg:mx-24 xl:mx-48">
          En ésta sección encontrarás mis principales y más influyentes proyectos, desarrollados con distintas herramientas y bajo diferentes modalidades y metodologías de trabajo.
        </p>
      </div>
      <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 overflow-x-auto justify-around max-w-[1390px]">
        <PortfolioCard image="/darien.png" title="Aplicación Rally" text="Aplicación completa para Rally diseñada para gestionar participantes, etapas, tiempos y clasificaciones en tiempo real, con arquitectura full stack y enfoque en rendimiento y experiencia de usuario." hypertext="Ver más >" gitText="https://github.com/joan-munoz04/Rally-Project" tech1="NextJS" tech2="Typescript" tech3="MySQL" tech4="Java" tech5="GitHub" image1="/darien1.png" image2="/darien2.png" image3="/darien3.png" image4="/darien4.png"></PortfolioCard>
        <PortfolioCard image="/cvProject.png" title="Creación CV" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio" tech1="NextJS" tech2="Typescript" tech3="React" tech4="Vercel" tech5="GitHub" image1="/cvProject1.png" image2="/cvProject2.png" image3="/cvProject3.png" image4="/cvProject4.png"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto Backend ARKA enfocado en el desarrollo de un sistema de almacenamiento eficiente, con gestión de inventarios, control de entradas y salidas, y estructura modular basada en API REST." hypertext="Ver más >" gitText="https://github.com/" tech1="MongoDB" tech2="Java" tech3="SpringBoot" tech4="Git" tech5="MySQL"></PortfolioCard>
        <PortfolioCard image="/image1.png" title="Proyecto Computación Móvil" text="Proyecto de aplicación para transportadora de paquetes desarrollado en Kotlin, orientado a la gestión de envíos, seguimiento en tiempo real y control logístico, con enfoque en eficiencia y usabilidad." hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/LabsCM20251-Gr08" tech1="Kotlin" tech2="Android Studio" tech3="Jetpack Compose" tech4="GitHub" tech5="FireBase"></PortfolioCard>
      </div>
    </div>
  );
};

export default PortfolioSection;
