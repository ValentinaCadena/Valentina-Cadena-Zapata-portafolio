import { Icon } from "@iconify/react";

interface IconTextProps {
  icon: string; // Nombre del ícono, por ejemplo, 'search', 'user', etc.
  text: string;
};

const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <div className="flex gap-2">
        <Icon icon={icon} width="25" height="25" color="violet"/>
      <span>{text}</span>
  </div>
  )
}

export default IconText;
