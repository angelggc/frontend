import { PropsWithChildren } from "react";

type ButtonType = "button" | "reset" | "submit";

interface ButtonProps extends PropsWithChildren {
  type?: ButtonType;
}

export function Button({ children, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-[#F5222D] text-white flex items-center justify-center gap-1 rounded-md"
    >
      {children}
    </button>
  );
}
