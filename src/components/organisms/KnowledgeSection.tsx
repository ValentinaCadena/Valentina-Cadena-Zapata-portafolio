import React from "react";
import KnowledgeBox from "../atoms/knowledgeBox";

const KnowledgeSection = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#2b2b2b] text-4xl font-bold">Conocimiento</h1>
        <p className="text-[#767676] px-10 pb-10 pt-6 mx-72">
          En ésta sección podrás ver todo el conocimiento que tengo dividido en
          diferentes áreas, todo en torno al desarrollo web y la creación de
          interfaces amigables para el usuario.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <KnowledgeBox
          title="Desarrollo Web"
          text="Blog, E-Commerce"
          icon="tabler:device-desktop-code"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Diseño UI/UX"
          text="Aplicaciones Móviles, Diseño de Sitios Web"
          icon="typcn:pencil"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Diseño de Sonido"
          text="Mezcla de voz, creación de Beats"
          icon="icon-park-outline:microphone"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Diseño de Videojuegos"
          text="Diseño de Personajes, Propiedades & Objetos"
          icon="icon-park-outline:game-ps"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Fotografía"
          text="Retrato, Producción de Fotografía"
          icon="icon-park-outline:success-picture"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Publicidad"
          text="Compra ya en mercado libre y llévate hasta un 60% de descuento en pantallas y dispositivos de la marca Huawei..."
          iconColor="indigo"
          redirecText="ORDENA AHORA >"
        ></KnowledgeBox>
      </div>
    </div>
  );
};

export default KnowledgeSection;
