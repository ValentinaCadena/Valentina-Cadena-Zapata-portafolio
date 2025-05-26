type ProgressBarProps = {
  name: string;
  number: number;
  color: string;
};

const ProgressBar = ({ name, number }: ProgressBarProps) => {
  return (
    <div className="text-sm">
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{number}%</p>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div className={`h-full bg-purple-500 rounded border-gray-200 border-2`} style={{ width: `${number}%`}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
