import { useState } from "react";

const useDropdownController = () => {
  const [dropdownState, setDropdownState] = useState(null);
  const dropdownController = (id, isHoverState) => {
    if ((id === dropdownState && !isHoverState) | null) {
      setDropdownState(null);
      return;
    }

    setDropdownState(id);
  };

  return { dropdownState, dropdownController };
};

export default useDropdownController;
