// Tipado de las props que recibe la barra de progreso
type ProgressBarProps = {
  name: string;   // Nombre de la habilidad o categoría que se está midiendo
  number: number; // Porcentaje de progreso (0–100)
};

// Componente visual que muestra una barra de progreso con el nombre y el porcentaje
const ProgressBar = ({ name, number }: ProgressBarProps) => {
  return (
    <div className="text-sm">
      {/* Encabezado: nombre a la izquierda y porcentaje a la derecha */}
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{number}%</p>
      </div>

      {/* Contenedor de la barra de fondo */}
      <div className="w-full h-2 bg-gray-200 rounded">
        {/* Barra de progreso rellena dinámicamente según el valor de "number" */}
        <div
          className="h-full bg-purple-500 rounded border-gray-200 border-2"
          style={{ width: `${number}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
