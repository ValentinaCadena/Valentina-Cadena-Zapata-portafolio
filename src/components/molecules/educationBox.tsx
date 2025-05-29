import EducationCard from "../atoms/educationCard";

// Tipado de las props que recibe el componente
interface EducationBoxProps {
  title: string;             // Título del bloque de educación (por ejemplo: "Universidad X")
  leftText: string;          // Texto a la izquierda (ej: carrera o institución)
  rightText: string;         // Etiqueta destacada (ej: años o nivel)
  rightTitle: string;        // Título de la sección de descripción a la derecha
  rightDescription: string;  // Texto descriptivo detallado
  className?: string;        // Clases adicionales para el contenedor principal
}

// Componente EducationBox: combina un componente EducationCard (izquierda) con texto descriptivo (derecha) y responsividad en cada elemento donde se necesita
const EducationBox = ({
  className,
  title,
  leftText,
  rightText,
  rightTitle,
  rightDescription,
}: EducationBoxProps) => {
  return (
    <div
      className={`${className} flex p-2 space-x-2 gap-x-2 sm:py-4 sm:space-x-4 md:space-x-8 md:p-4 lg:space-x-16 lg:p-12 xl:space-x-32`}
    >
      {/* Tarjeta de educación (lado izquierdo) */}
      <div className="min-w-[40%] lg:min-w-0">
        <EducationCard
          title={title}
          leftText={leftText}
          rightText={rightText}
        />
      </div>

      {/* Sección de texto descriptivo (lado derecho) */}
      <div className="text-start w-2/3 space-y-5">
        <h1 className="text-[#2b2b2b] text-base sm:text-lg">{rightTitle}</h1>
        <p className="text-[#767676] sm:line-clamp-none text-sm sm:text-base">
          {rightDescription}
        </p>
      </div>
    </div>
  );
};

export default EducationBox;
