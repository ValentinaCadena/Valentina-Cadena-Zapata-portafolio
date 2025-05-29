// Tipado de las props que recibe el componente
type TextProps = {
  text1: string;         // Texto a la izquierda (puede ser una etiqueta o categoría)
  text2: string;         // Texto a la derecha (valor o estado)
  state?: string;        // Estado que determina el color del texto2 (ej: "Available", "Busy", etc.)
};

// Componente que muestra dos textos en una línea y aplica color condicional al segundo
const Text = ({ text1, text2, state }: TextProps) => {
  // Determina la clase de color basada en el estado
  const stateClass =
    state === "Available"
      ? "text-green-500"
      : state === "Busy"
      ? "text-red-500"
      : state === "Off Work"
      ? "text-yellow-500"
      : "";

  return (
    <div className="flex justify-between text-sm">
      <p>{text1}</p>
      {/* Aplica la clase de color según el estado si está presente */}
      <p className={`${stateClass}`}>{text2}</p>
    </div>
  );
};

export default Text;
