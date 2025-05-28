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
      <div className="flex gap-20 overflow-x-auto scroll-smooth justify-around max-w-[1390px]">
        <PortfolioCard image="/darien.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/cvProject.png" title="Cómo hacer templates web" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
        <PortfolioCard image="/image2.png" title="Proyecto Arka 2025" text="Proyecto desarrollado en el curso de Java 2025 usando MongoDB y otras herramientas, además de la realización de pruebas unitarias" hypertext="Ver más >" gitText="https://github.com/ValentinaCadena/Valentina-Cadena-Zapata-portafolio"></PortfolioCard>
      </div>
    </div>
  );
};

export default PortfolioSection;
