type ProgressBarProps = {
  name: string;
  number: string;
  color: string;
};

const ProgressBar = ({ name, number, color }: ProgressBarProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div className={`w-[${number}] h-full bg-${color}-500 rounded`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
