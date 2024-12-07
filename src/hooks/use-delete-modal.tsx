import { createContext, PropsWithChildren, useContext, useState } from "react";

export const DeleteContext = createContext<{
  dataToDelete: { id: string; name: string } | undefined;
  setDataToDelete: (data: { id: string; name: string } | undefined) => void;
}>({
  dataToDelete: { id: "", name: "" },
  setDataToDelete: (data: { id: string; name: string } | undefined) => {},
});

export function DeleteContextProvider({ children }: PropsWithChildren) {
  const [dataToDelete, setDataToDelete] = useState<{
    id: string;
    name: string;
  }>();
  return (
    <DeleteContext.Provider value={{ dataToDelete, setDataToDelete }}>
      {children}
    </DeleteContext.Provider>
  );
}

export function useDeleteModal() {
  const deleteContext = useContext(DeleteContext);

  return deleteContext.setDataToDelete;
}
