import React from "react";
import cn from "../../utils/cn";

const DropdownContent = (props) => {
  const { className, children } = props;

  return (
    <div className={cn("bg-slate-700 py-2 rounded-md", className)}>
      {children}
    </div>
  );
};

export default DropdownContent;
