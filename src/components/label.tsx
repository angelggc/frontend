import { PropsWithChildren } from "react";

interface LabelProps extends PropsWithChildren {
  htmlFor: string;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-sm text-[#262626]">
      {children}
    </label>
  );
}
