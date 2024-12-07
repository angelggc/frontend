import { useNavigate } from "react-router-dom";
import { useDeleteModal } from "../hooks/use-delete-modal";

interface DropdownMenuProps {
  id: string;
  name: string;
}

export function DropdownMenu({ id, name }: DropdownMenuProps) {
  const nav = useNavigate();

  const onDelete = useDeleteModal();

  return (
    <>
      <div className="bg-gray-200 flex flex-col gap-0.5 w-[181px] h-[76px] rounded-md shadow-md absolute z-10 right-1 top-8 cursor-pointer">
        <div
          className="bg-white h-full rounded-t-md flex items-center px-4 gap-3"
          onClick={() => nav(`/edit/${id}`)}
        >
          <i className="fa-regular fa-pen-to-square text-xs"></i>
          <p className="text-xs">Edit</p>
        </div>
        <div
          onClick={() => onDelete({ id, name })}
          className="bg-white h-full flex rounded-b-md items-center px-4 gap-3"
        >
          <i className="fa-regular fa-trash-can text-xs"></i>
          <p className="text-xs">Delete</p>
        </div>
      </div>
    </>
  );
}
