import React, { useState } from "react";

const DropdownContent = (props) => {
  const { list } = props;

  return (
    <div>
      {list && (
        <ul>
          {list.map((item) => (
            <li
              key={item?.name}
              className="py-2 px-3 hover:bg-slate-800 text-sm flex items-center gap-3"
              onClick={(e) => {
                item?.listFunctionHandler();
              }}
            >
              {item?.icon && <span>{item?.icon}</span>}

              {item?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownContent;
