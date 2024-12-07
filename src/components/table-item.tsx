import { useState } from "react";
import { GetListResponseModel } from "../data/data-controller";
import { DropdownMenu } from "./dropdown-menu";

interface TableItemProps {
  item: GetListResponseModel;
}

export function TableItem({ item }: TableItemProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <tr className="">
      <td className="p-3">
        <p className="text-sm opacity-60">{item.name}</p>
        <p className="text-[10px] opacity-40">
          Creation date: {item.creationDate}
        </p>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <img
            src={item.manager.img}
            alt=""
            className="w-[24px] h-[24px] object-cover rounded-full"
          />
          <p className="text-xs opacity-60">{item.manager.name}</p>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <img
            src={item.assigned.img}
            alt=""
            className="w-[24px] h-[24px] object-cover rounded-full"
          />
          <p className="text-xs opacity-60">{item.assigned.name}</p>
        </div>
      </td>
      <td>
        <div className="flex">
          <p className="border-2 p-1 text-xs text-[#595959] rounded-md border-[#D9D9D9] bg-[#F5F5F5]">
            {item.status ? "Enabled" : "Disabled"}
          </p>
        </div>
      </td>
      <td>
        <button
          className="relative"
          type="button"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <i className="fa-solid fa-ellipsis-vertical" />
          {isOpenMenu && <DropdownMenu id={item.id} name={item.name} />}
        </button>
      </td>
    </tr>
  );
}
