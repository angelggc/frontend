/* eslint-disable jsx-a11y/alt-text */
import { PropsWithChildren } from "react";
import { Container } from "./container";

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="flex flex-col gap-1">
      <div className="bg-white shadow">
        <Container>
          <p className="p-3">LOGO</p>
        </Container>
      </div>
      <div className=" bg-white shadow">
        <Container>
          <div className="flex justify-between items-center px-2 py-1">
            {children}
          </div>
        </Container>
      </div>
    </header>
  );
}
