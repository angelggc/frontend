import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center">
      <div className="container">{children}</div>
    </div>
  );
}
