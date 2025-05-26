import React from "react";
import KnowledgeBox from "../atoms/knowledgeBox";

const KnowledgeSection = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#2b2b2b] text-4xl font-bold">My Knowledge</h1>
        <p className="text-[#767676] p-10 mx-72">
          En ésta sección podrás ver todo el conocimiento que tengo dividido en
          diferentes áreas, todo en torno al desarrollo web y la creación de
          interfaces amigables para el usuario.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <KnowledgeBox
          title="Web Development"
          text="Blog, E-Commerce"
          icon="tabler:device-desktop-code"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="UI/UX Design"
          text="Mobile App, Website Design"
          icon="mdi:code"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Sound Design"
          text="Voice Over, Beat Making"
          icon="icon-park-outline:microphone"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Web Development"
          text="Blog, E-Commerce"
          icon="icon-park-outline:game-ps"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Photography"
          text="Portrait, Product Photography"
          icon="icon-park-outline:success-picture"
          iconColor="indigo"
        ></KnowledgeBox>
        <KnowledgeBox
          title="Advertising"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."
          iconColor="indigo"
          redirecText="ORDER NOW >"
        ></KnowledgeBox>
      </div>
    </div>
  );
};

export default KnowledgeSection;
