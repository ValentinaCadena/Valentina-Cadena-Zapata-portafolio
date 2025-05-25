type TextProps = {
  text1: string;
  text2: string;
  color?: string;
};

const Text = ({ text1, text2, color }: TextProps) => {
  return (
      <div className="flex justify-between">
        <p>{text1}</p>
        <p className={`text-${color}-500`}>{text2}</p>
      </div>
  );
};

export default Text;
