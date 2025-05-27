import React from "react";
import EducationBox from "../molecules/educationBox";

const EducationSection = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#2b2b2b] text-4xl font-bold">Educación</h1>
        <p className="text-[#767676] px-10 pb-10 pt-6 mx-72">
          En ésta sección podrás ver un resumen de mis estudios realizados,
          instituciones donde me gradué y certificados que saqué.
        </p>
      </div>
      <div className="bg-white px-8 border-b-white">
        <EducationBox
          title="Universidad de Antioquia"
          leftText="Estudiante"
          rightText="Oct 2019 - Actualidad"
          rightTitle="Certificate of Web Development"
          rightDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde facere deleniti eius tenetur explicabo doloribus natus, saepe delectus cumque quasi laborum nostrum ab maxime dolorum quibusdam, magni, quidem assumenda!"
        ></EducationBox>
        <EducationBox
          className="border-y-2"
          title="Universidad de Antioquia"
          leftText="Estudiante"
          rightText="Oct 2019 - Actualidad"
          rightTitle="Certificate of Web Development"
          rightDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde facere deleniti eius tenetur explicabo doloribus natus, saepe delectus cumque quasi laborum nostrum ab maxime dolorum quibusdam, magni, quidem assumenda!"
        ></EducationBox>
        <EducationBox
          title="Universidad de Antioquia"
          leftText="Estudiante"
          rightText="Oct 2019 - Actualidad"
          rightTitle="Certificate of Web Development"
          rightDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde facere deleniti eius tenetur explicabo doloribus natus, saepe delectus cumque quasi laborum nostrum ab maxime dolorum quibusdam, magni, quidem assumenda!"
        ></EducationBox>
      </div>
    </div>
  );
};

export default EducationSection;
