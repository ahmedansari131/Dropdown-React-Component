import React from "react";
import cn from "../../utils/cn";
import Icon from "../icon/Icon";

const Label = ({ label, icon, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-gray-800 text-gray-100 border border-slate-600 cursor-pointer px-3 py-2 rounded-md flex items-center justify-between select-none",
        className
      )}
    >
      {label || "Label"}
      {icon && <Icon icon={icon} />}
    </div>
  );
};

export default Label;
