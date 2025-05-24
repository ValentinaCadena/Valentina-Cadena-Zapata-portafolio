type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ onClick, disabled, children }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
  >
    {children}
  </button>
);

export default Button;

