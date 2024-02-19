import React from "react";
import Icon from "../icon/Icon";
import cn from "../../utils/cn";

const List = ({ listName, icon, className, ...props }) => {
  return (
    <li
      className={cn(
        "text-gray-100 py-2 px-3 hover:bg-slate-800 text-sm flex items-center gap-3",
        className
      )}
      {...props}
    >
      {icon && <Icon />}

      {listName}
    </li>
  );
};

export default List;
