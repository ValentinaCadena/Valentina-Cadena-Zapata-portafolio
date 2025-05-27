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
      <div>
        <PortfolioCard></PortfolioCard>
      </div>
    </div>
  );
};

export default PortfolioSection;
