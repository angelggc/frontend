import { createContext, PropsWithChildren } from "react";
import { DataController } from "./data-controller";

export const Data = createContext(new DataController());

export function DataContext({ children }: PropsWithChildren) {
  return <Data.Provider value={new DataController()}>{children}</Data.Provider>;
}
