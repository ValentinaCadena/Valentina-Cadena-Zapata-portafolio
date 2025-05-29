// Tipado de las props que recibe el componente
interface EducationCardProps {
    title: string;       // Título principal de la tarjeta (ej. nombre del curso o institución)
    leftText: string;    // Texto alineado a la izquierda (ej. descripción o nivel académico)
    rightText: string;   // Texto destacado, normalmente alineado a la derecha (ej. año, estado)
}

// Componente funcional que representa una tarjeta informativa para la sección de educación
const EducationCard = ({ title, leftText, rightText }: EducationCardProps) => {
    return (
        <div className="w-full h-auto text-[#2b2b2b] space-y-5 text-center">
            {/* Título de la tarjeta con estilo responsivo */}
            <h1 className="font-semibold text-base sm:text-lg">{title}</h1>

            {/* Contenedor del contenido informativo, cambia de columna a fila en pantallas grandes */}
            <div className="flex flex-col text-sm sm:text-base gap-y-4 lg:flex-row gap-x-6">
                {/* Texto informativo principal (izquierda) */}
                {leftText}

                {/* Texto destacado con fondo violeta y estilo más pequeño */}
                <span className="bg-violet-500 text-white text-xs p-1">{rightText}</span>
            </div>
        </div>
    );
};

export default EducationCard;
