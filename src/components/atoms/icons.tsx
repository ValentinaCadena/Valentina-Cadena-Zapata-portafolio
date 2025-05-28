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
      <Icon icon={icon} className="sm:w-6 sm:h-6"></Icon>
    </button>
  );
};

export default Icons;
