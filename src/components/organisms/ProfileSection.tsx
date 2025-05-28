import React from 'react';
import Card from '../molecules/Card';

const ProfileSection = () => {
  return (
    <section className=" bg-white rounded shadow items-center flex flex-col lg:flex-row">
      <Card className='p-10 lg:pr-0' text='Soy desarrolladora Front-end con 3 años de experiencia en herramientas como NextJS, Javascript, ReactJS, Typescript y muchas más.' textButton='CONTRÁTAME' icon='tabler:arrow-narrow-right'></Card>
      <img src="/profPic-nobg.png" alt="Foto Perfil" className='w-52 sm:w-64 md:w-[350px] lg:w-96 lg:mt-auto xl:w-full xl:p-0'/>      
      {/* Foto, nombre, descripción, botón que abre Modal */}
    </section>
  );
};

export default ProfileSection;