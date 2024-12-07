import { useState } from "react";
import { DropdownMenu } from "./dropdown-menu";
import { GetListResponseModel } from "../data/data-controller";

interface ItemProps {
  item: GetListResponseModel;
}

export function Item({ item }: ItemProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="border bg-white px-3  h-[80px] flex flex-col justify-center">
      <div className="flex justify-between relative">
        <div>
          <p className="text-sm opacity-60">{item.name}</p>
          <p className="text-[10px] opacity-40">
            Creation date: {item.creationDate}
          </p>
        </div>
        <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <i className="fa-solid fa-ellipsis-vertical" />
        </button>
        {isOpenMenu && <DropdownMenu id={item.id} name={item.name} />}
      </div>
      <div className="flex items-center gap-2">
        <img
          src={item.assigned.img}
          alt=""
          className="w-[24px] h-[24px] object-cover rounded-full"
        />
        <p className="text-xs opacity-60">{item.assigned.name}</p>
      </div>
    </div>
  );
}
