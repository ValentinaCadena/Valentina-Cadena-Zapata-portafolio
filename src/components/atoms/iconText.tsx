import { Icon } from "@iconify/react";

// Tipado de las props que recibe el componente
interface IconTextProps {
  icon: string; // Nombre del ícono a mostrar (por ejemplo, 'tabler:star', 'mdi:code-tags')
  text: string; // Texto que acompaña al ícono
}

// Componente funcional que muestra un ícono junto a un texto, usado para representar habilidades, herramientas, etc.
const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <div className="flex gap-2">
      {/* Ícono proporcionado por Iconify con tamaño fijo y color violeta */}
      <Icon icon={icon} width="25" height="25" color="violet" />
      {/* Texto descriptivo al lado del ícono */}
      <span>{text}</span>
    </div>
  );
};

export default IconText;
