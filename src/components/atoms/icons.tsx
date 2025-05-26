import { Icon } from "@iconify/react";

interface IconsProps {
  icon: string;
  url: string;
}

const Icons = ({ icon, url }: IconsProps) => {
  const redireccionar = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      className="rounded-full bg-violet-400 p-2.5 hover:bg-violet-500 transition"
      onClick={redireccionar}
    >
      <Icon icon={icon} width={25} height={25}></Icon>
    </button>
  );
};

export default Icons;
