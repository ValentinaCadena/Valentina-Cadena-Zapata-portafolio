interface PortfolioCardProps {
  image: string;
  title: string;
  text: string;
  hypertext: string;
}

const PortfolioCard = ({
  image,
  title,
  text,
  hypertext,
}: PortfolioCardProps) => {
  return (
    <div className="bg-white w-400">
      <img src={image} alt="Proyecto 1" className="pt-12" />
      <div className="p-5 space-y-2">
        <h1 className="text-[#2b2b2b] text-center text-lg font-semibold">
          {title}
        </h1>
        <p className="text-[#767676]">{text}</p>
        <p className="text-yellow-500 underline hover:cursor-pointer text-lg font-semibold">
          {hypertext}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
