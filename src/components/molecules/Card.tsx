import { Icon } from "@iconify/react/dist/iconify.js";
import ModalInfo from "../organisms/ModalInfo";
import { useState } from "react";

interface CardProps {
  text: string;
  textButton: string;
  icon: string;
  className?: string;
}

const Card = ({ text, textButton, icon, className }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className={className}>
      <h1 className="text-[#2b2b2b] text-5xl font-bold">
        Soy Valentina Cadena, Desarrolladora{" "}
        <span className={`text-purple-700`}>Front-end</span>
      </h1>
      <p className="py-10 text-[#767676]">{text}</p>
      <button
        onClick={handleOpen}
        className="bg-purple-400 text-black p-4 flex gap-2 items-center rounded hover:bg-purple-500 transition"
      >
        <span>{textButton}</span>
        <Icon icon={icon}></Icon>
      </button>

      {isModalOpen && <ModalInfo onClose={handleClose} />}
    </div>
  );
};

export default Card;
