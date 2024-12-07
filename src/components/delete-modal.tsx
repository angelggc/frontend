import { useContext } from "react";
import { DeleteContext } from "../hooks/use-delete-modal";
import { Data } from "../data/data-context";

export function DeleteModal() {
  const deleteContext = useContext(DeleteContext);

  const dataController = useContext(Data);

  const handleDelete = () => {
    if (deleteContext.dataToDelete) {
      dataController.deleteProject(deleteContext.dataToDelete.id);
      deleteContext.setDataToDelete(undefined);
      window.location.reload();
    }
  };

  return (
    <>
      {deleteContext.dataToDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
            <div className="bg-white rounded shadow-md p-6 max-w-md">
              <p>
                ¿Estás seguro de que quieres eliminar este el project{" "}
                {deleteContext.dataToDelete.name}?
              </p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => deleteContext.setDataToDelete(undefined)}
                  className="mr-2"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
