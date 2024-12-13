import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <button
      className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md transition duration-200 hover:bg-blue-700"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
