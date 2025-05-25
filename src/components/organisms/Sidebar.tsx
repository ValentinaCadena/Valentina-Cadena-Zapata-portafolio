import React from 'react';
import ProgressBar from '../atoms/progressBar';
import Text from '../atoms/text';
import IconText from '../atoms/iconText';

const Sidebar = () => {
  return (
    <div className="flex flex-col text-left items-center p-10 space-y-6">
      <img src="/profPic.jpg" alt="Foto de perfil" className="w-32 h-32 rounded-full object-cover" />
      <div>
        <h2 className="text-xl text-black font-semibold">Valentina Cadena</h2>
        <p className="text-gray-500 mt-2 text-center">Front-end Developer</p>
      </div>
      <div className="border-t-2 border-b-2 text-black w-full py-4">
        <ul className="pl-2 space-y-1">
          <li><Text text1='Age:' text2='23'></Text></li>
          <li><Text text1='Residence:' text2='BD'></Text></li>
          <li><Text text1='Freelance:' text2='Available'  color='lime'></Text></li>
          <li><Text text1='Address:' text2='Aranjuez, Antioquia'></Text></li>
        </ul>
      </div>
      <div className="w-full">
        <p className="font-semibold text-black text-center">Idiomas</p>
        <div className="space-y-2 text-left text-gray-500">
          <ProgressBar name='Español' number='100%' color='blue'></ProgressBar>
          <ProgressBar name='Inglés' number='80%' color='blue'></ProgressBar>
        </div>
      </div>
      <div className="w-full border-t-2 border-b-2 py-4">
        <p className="font-semibold text-black text-center">Lenguajes</p>
        <div className="space-y-2 text-left text-gray-500">
          <ProgressBar name='JavaScript' number='90%' color='green'></ProgressBar>
          <ProgressBar name='Python' number='60%' color='green'></ProgressBar>
        </div>
      </div>
      <div className="w-full">
        <p className="font-semibold text-black">Extra Skills</p>
        <div className="list-disc list-inside text-left text-gray-500">
          <IconText icon='mdi:crop-square' text='Bootstrap, Materialize'></IconText>
          <IconText icon='mdi:crop-square' text='Stylus, Sass, Less'></IconText>
          <IconText icon='mdi:crop-square' text='Gulp, Webpack, Grund'></IconText>
          <IconText icon='mdi:crop-square' text='GIT Knowledge'></IconText>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;