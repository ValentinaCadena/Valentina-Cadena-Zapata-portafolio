import { Icon } from "@iconify/react";

// Tipado de las props que recibe el componente
interface KnowledgeBoxProps {
  title: string;         // Título principal del box
  text: string;          // Descripción o contenido del box
  icon?: string;         // Ícono opcional (nombre del ícono de Iconify)
  iconColor: string;     // Color del ícono
  redirecText?: string;  // Texto del enlace opcional
}

// Componente que representa una caja informativa con ícono, texto y un enlace opcional
const KnowledgeBox = ({ title, text, icon, iconColor, redirecText }: KnowledgeBoxProps) => {
  return (
    <div className="bg-white w-full flex flex-col items-center text-center p-2 sm:p-8 gap-2">
      
      {/* Renderiza el ícono solo si se proporciona */}
      {icon && (
        <Icon
          icon={icon}
          color={iconColor}
          className="w-12 h-12 sm:w-[68px] sm:h-[68px]"
        />
      )}

      {/* Título del box */}
      <h1 className="text-[#2B2B2B] font-semibold">{title}</h1>

      {/* Texto descriptivo */}
      <p className="text-[#767676] text-sm mb-4">{text}</p>

      {/* Enlace opcional a una página externa */}
      <a
        className="text-purple-400 hover:text-purple-500 text-xs"
        href="http://mercadolibre.com"
        target="_blank"
      >
        {redirecText}
      </a>
    </div>
  );
};

export default KnowledgeBox;
