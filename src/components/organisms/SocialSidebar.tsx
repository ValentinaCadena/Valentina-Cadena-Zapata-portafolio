import React from "react";
import Icons from "../atoms/icons";

const SocialSidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-start pt-20 bg-white h-screen w-full">
      <h1 className="text-[#2b2b2b] text-lg font-semibold">Links</h1>

      <Icons icon="mdi:facebook" url="https://www.facebook.com/valentina.cadenazapata" />
      <Icons icon="mdi:instagram" url="https://www.instagram.com/valentinazapata2015/" />
      <Icons icon="tabler:brand-x" url="https://x.com/?lang=es" />
      <Icons icon="mdi:linkedin" url="https://www.linkedin.com/in/valentina-cadena-zapata-a75358223/" />
      <Icons icon="mdi:github" url="https://github.com/ValentinaCadena" />
      <Icons icon="mdi:youtube" url="https://www.youtube.com/@ValentinaCadenaZapata"/>
      <Icons icon="mdi:web" url="https://valentina-cadena-zapata-portafolio-9fs02cx4x.vercel.app"/>
    </div>
  );
};

export default SocialSidebar;
