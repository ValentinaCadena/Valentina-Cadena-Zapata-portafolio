import { Icon } from "@iconify/react/dist/iconify.js";

interface IconsProps {
  icon: string;
}

const Icons = ({ icon }: IconsProps) => {
  return (
    <button className="rounded-full bg-violet-400 p-2.5">
      <Icon icon={icon} width={25} height={25}></Icon>
    </button>
  );
};

export default Icons;
