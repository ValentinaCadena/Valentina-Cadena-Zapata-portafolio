import { Icon } from "@iconify/react";

// Tipado de las props que recibe el componente
interface IconsProps {
  icon: string; // Nombre del ícono a renderizar (ej. 'mdi:linkedin', 'mdi:github')
  url: string;  // URL a la que se redirigirá al hacer clic
}

// Componente funcional que representa un botón con ícono, usado para redes sociales o enlaces externos
const Icons = ({ icon, url }: IconsProps) => {
  // Función que abre el enlace en una nueva pestaña del navegador
  const redireccionar = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      // Botón circular con fondo violeta y efecto hover
      className="rounded-full bg-violet-400 p-2.5 hover:bg-violet-500 transition"
      onClick={redireccionar}
    >
      {/* Ícono proporcionado por Iconify, con tamaño responsivo */}
      <Icon icon={icon} className="sm:w-6 sm:h-6" />
    </button>
  );
};

export default Icons;
