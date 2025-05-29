import React from 'react';
import Card from '../molecules/Card';

// Organismo ProfileSection: sección que combina una tarjeta descriptiva y una imagen de perfil
// Presenta el perfil profesional con texto, botón de acción y foto, organizados en un layout flexible y responsivo
const ProfileSection = () => {
  return (
    // Contenedor principal con fondo blanco, sombra, bordes redondeados y flexbox para organización
    // En pantallas grandes (lg) el contenido se organiza en fila, en pantallas pequeñas en columna
    <section className="bg-white rounded shadow items-center flex flex-col lg:flex-row">
      
      {/* Componente Card (molécula) que muestra descripción, texto del botón y un ícono */}
      <Card
        className="p-10 lg:pr-0"
        text="Soy desarrolladora Front-end con 3 años de experiencia en herramientas como NextJS, Javascript, ReactJS, Typescript y muchas más."
        textButton="CONTRÁTAME"
        icon="tabler:arrow-narrow-right"
      />

      {/* Imagen de perfil con varias clases responsivas para ajustar su tamaño en distintos breakpoints */}
      <img
        src="/profPic-nobg.png"
        alt="Foto Perfil"
        className="w-52 sm:w-64 md:w-[350px] lg:w-96 lg:mt-auto xl:w-full xl:p-0"
      />

      {/* Comentario: Foto, nombre, descripción y botón que abre un Modal (la acción está en Card) */}
    </section>
  );
};

export default ProfileSection;
