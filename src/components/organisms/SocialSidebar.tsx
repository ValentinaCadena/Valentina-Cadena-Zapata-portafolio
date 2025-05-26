import React from "react";
import Icons from "../atoms/icons";

const SocialSidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-start pt-20 bg-white h-screen w-full">
        <h1 className="text-black text-lg font-semibold">Links</h1>
        <Icons icon="mdi:facebook"></Icons>
        <Icons icon="mdi:instagram"></Icons>
        <Icons icon="mdi:twitter"></Icons>
        <Icons icon="mdi:linkedin"></Icons>
        <Icons icon="mdi:github"></Icons>
        <Icons icon="mdi:youtube"></Icons>
        <Icons icon="mdi:web"></Icons>
        
    </div>
  );
};

export default SocialSidebar;
