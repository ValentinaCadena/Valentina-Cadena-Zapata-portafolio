import React from 'react';
import Card from '../molecules/Card';

const ProfileSection = () => {
  return (
    <section className=" bg-white rounded shadow items-center flex">
      <Card className='p-10' text='Soy desarrolladora Front-end con 3 años de experiencia en herramientas como NextJS, Javascript, ReactJS, Typescript y muchas más.' textButton='CONTRÁTAME' icon='tabler:arrow-narrow-right'></Card>
      <img src="/profPic-nobg.png" alt="Foto Perfil"/>      
      {/* Foto, nombre, descripción, botón que abre Modal */}
    </section>
  );
};

export default ProfileSection;