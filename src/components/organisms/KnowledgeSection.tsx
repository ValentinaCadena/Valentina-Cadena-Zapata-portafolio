import React from "react";
import KnowledgeBox from "../atoms/knowledgeBox";

// Organismo KnowledgeSection: sección que muestra diferentes áreas de conocimiento
// Presenta un título, descripción y una grilla responsiva con varios KnowledgeBox (átomos)
const KnowledgeSection = () => {
  return (
    <div>
      {/* Contenedor centrado para título y descripción */}
      <div className="text-center">
        {/* Título principal con tamaños responsivos para legibilidad */}
        <h1 className="text-[#2b2b2b] text-xl sm:text-2xl lg:text-4xl font-bold">
          Conocimiento
        </h1>
        {/* Descripción con márgenes horizontales y padding adaptados según pantalla */}
        <p className="text-[#767676] px-10 pb-10 pt-6 text-sm sm:text-base lg:mx-24 xl:mx-48">
          En ésta sección podrás ver todo el conocimiento que tengo dividido en
          diferentes áreas, todo en torno al desarrollo web y la creación de
          interfaces amigables para el usuario.
        </p>
      </div>

      {/* Grilla responsiva que adapta columnas según el tamaño de pantalla */}
      <div className="grid grid-cols-1 object-center md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Cada KnowledgeBox es un átomo que muestra título, texto descriptivo e ícono */}
        <KnowledgeBox
          title="Desarrollo Web"
          text="Blog, E-Commerce"
          icon="tabler:device-desktop-code"
          iconColor="indigo"
        />
        <KnowledgeBox
          title="Diseño UI/UX"
          text="Aplicaciones Móviles, Diseño de Sitios Web"
          icon="typcn:pencil"
          iconColor="indigo"
        />
        <KnowledgeBox
          title="Diseño de Sonido"
          text="Mezcla de voz, creación de Beats"
          icon="icon-park-outline:microphone"
          iconColor="indigo"
        />
        <KnowledgeBox
          title="Diseño de Videojuegos"
          text="Diseño de Personajes, Propiedades & Objetos"
          icon="icon-park-outline:game-ps"
          iconColor="indigo"
        />
        <KnowledgeBox
          title="Fotografía"
          text="Retrato, Producción de Fotografía"
          icon="icon-park-outline:success-picture"
          iconColor="indigo"
        />
        <KnowledgeBox
          title="Publicidad"
          text="Compra ya en mercado libre y llévate hasta un 60% de descuento en pantallas y dispositivos de la marca Huawei..."
          iconColor="indigo"
          redirecText="ORDENA AHORA >"
        />
      </div>
    </div>
  );
};

export default KnowledgeSection;
