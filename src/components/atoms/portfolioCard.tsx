import { useState } from "react";
import Image from "next/image";
import PortfolioModalInfo from "../molecules/portfolioModalInfo";

interface PortfolioCardProps {
  image: string;
  title: string;
  text: string;
  hypertext: string;
  gitText: string;
  image1?: string;
  image2?: string;
  image3?: string;
}

const PortfolioCard = ({
  image,
  title,
  text,
  hypertext,
  gitText,
  image1,
  image2,
  image3
}: PortfolioCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className="relative bg-white max-w-sm w-1/3 h-[480px] flex-shrink-0 pt-8">
      <div className="w-full relative aspect-video">
        <Image src={image} alt={title} layout="fill" objectFit="contain"></Image>
      </div>
      <div className="p-5 space-y-2">
        <h1 className="text-[#2b2b2b] text-center text-lg font-semibold">
          {title}
        </h1>
        <p className="text-[#767676] line-clamp-2">{text}</p>
        <p
          onClick={handleOpen}
          className="text-yellow-500 underline hover:cursor-pointer hover:text-yellow-600 text-lg font-semibold"
        >
          {hypertext}
        </p>
      </div>

      {isModalOpen && (
        <PortfolioModalInfo
          image={image}
          title={title}
          description={text}
          gitText={gitText}
          image1={image1}
          image2={image2}
          image3={image3}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default PortfolioCard;
