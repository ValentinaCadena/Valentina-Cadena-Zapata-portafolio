import React from "react";
import ProgressBar from "../atoms/progressBar";
import Text from "../atoms/text";
import IconText from "../atoms/iconText";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-white text-left w-72 min-w-72 items-center p-10 gap-4 h-screen overflow-auto sticky top-0 left-0">
      <div className="relative">
        <img
          src="/profPic.jpg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full object-cover"
        />
        <span className="absolute bottom-2.5 right-2.5 w-4 h-4 bg-green-500 rounded-full"></span>
      </div>
      <div>
        <h2 className="text-lg text-black font-semibold">Valentina Cadena</h2>
        <p className="text-gray-500 mt-2 mb-10 text-center text-sm">
          Front-end Developer
        </p>
      </div>
      <div className="border-t-2 border-b-2 text-black w-full py-4">
        <ul className="pl-2 space-y-1">
          <li>
            <Text text1="Edad:" text2="23"></Text>
          </li>
          <li>
            <Text text1="Residencia:" text2="Col"></Text>
          </li>
          <li>
            <Text text1="Freelance:" text2="Available" state="Available"></Text>
          </li>
          <li>
            <Text text1="Ubicación:" text2="Medellín, Antioquia"></Text>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <p className="font-semibold text-black text-start mb-2 m-1">Idiomas</p>
        <div className="space-y-2 text-left text-gray-500">
          <ProgressBar name="Español" number={100}></ProgressBar>
          <ProgressBar name="Inglés" number={60}></ProgressBar>
        </div>
      </div>
      <div className="w-full border-t-2 border-b-2 py-4">
        <p className="font-semibold text-black text-center mb-2 m-1">Lenguajes</p>
        <div className="space-y-2 text-left text-gray-500">
          <ProgressBar name="Java" number={80} ></ProgressBar>
          <ProgressBar name="Python" number={70}></ProgressBar>
          <ProgressBar name="Javascript" number={60}></ProgressBar>
          <ProgressBar name="Typescript" number={50}></ProgressBar>
          <ProgressBar name="PHP" number={20}></ProgressBar>
        </div>
      </div>
      <div className="w-full">
        <p className="font-semibold text-black">Habilidades adicionales</p>
        <div className="list-disc list-inside text-left text-gray-500 border-b-2 py-2 text-sm">
          <IconText
            icon="tabler:squares"
            text="SQL, MySQL"
          ></IconText>
          <IconText icon="tabler:squares" text="MongoDB"></IconText>
          <IconText
            icon="tabler:squares"
            text="Git, GitHub"
          ></IconText>
          <IconText icon="tabler:squares" text="Azure DevOps"></IconText>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
