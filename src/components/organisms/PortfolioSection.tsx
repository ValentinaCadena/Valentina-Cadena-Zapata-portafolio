import React from "react";
import PortfolioCard from "../atoms/portfolioCard";

const PortfolioSection = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#2b2b2b] text-4xl font-bold">Portafolio</h1>
        <p className="text-[#767676] p-10 mx-72">
          En ésta sección encontrarás mis principales y más influyentes proyectos, desarrollados con distintas herramientas y bajo diferentes modalidades y metodologías de trabajo.
        </p>
      </div>
      <div className="flex gap-28 justify-center overflow-auto">
        <PortfolioCard image="/profPic.jpg" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >"></PortfolioCard>
        <PortfolioCard image="/profPic.jpg" title="Cómo hacer templates web" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >"></PortfolioCard>
        <PortfolioCard image="/profPic.jpg" title="Construyendo una app móvil" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >"></PortfolioCard>
      </div>
    </div>
  );
};

export default PortfolioSection;
