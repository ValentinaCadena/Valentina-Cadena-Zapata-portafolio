import React from "react";
import Icons from "../atoms/icons";

const SocialSidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-start pt-20 bg-white h-screen w-full">
      <h1 className="text-black text-lg font-semibold">Links</h1>

      <Icons icon="mdi:facebook" url="https://www.facebook.com/Valentina-Cadena" />
      <Icons icon="mdi:instagram" url="https://www.instagram.com/Valentina-Cadena" />
      <Icons icon="mdi:twitter" url="https://www.twitter.com/Valentina-Cadena" />
      <Icons icon="mdi:linkedin" url="https://www.linkedin.com/in/Valentina-Cadena" />
      <Icons icon="mdi:github" url="https://www.github.com/Valentina-Cadena" />
      <Icons icon="mdi:youtube" url="https://www.youtube.com/Valentina-Cadena"/>
      <Icons icon="mdi:web" url="https://www.Valentina-Cadena-portafolio.com"/>
    </div>
  );
};

export default SocialSidebar;
