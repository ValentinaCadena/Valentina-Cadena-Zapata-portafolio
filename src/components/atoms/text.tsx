type TextProps = {
  text1: string;
  text2: string;
  color?: string;
  state?: string;
};



const Text = ({ text1, text2, state }: TextProps) => {
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
        <p className={`${stateClass}`}>{text2}</p>
      </div>
  );
};

export default Text;
