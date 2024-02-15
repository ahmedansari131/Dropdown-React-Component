import React, { useState } from "react";

const useDropdownController = () => {
  const [dropdownState, setDropdownState] = useState(null);

  const dropdownController = (id) => {
    if ((id === dropdownState) | null) {
      setDropdownState(null);
      return;
    }

    setDropdownState(id);
  };

  return { dropdownState, dropdownController };
};

export default useDropdownController;



















// import React, { useState } from "react";

// const useDropdownController = (props) => {
//   const [dropdownId, setDropdownId] = useState([]);
//   const dropdownController = (id) => {
//     if (dropdownId.includes(id)) {
//       setDropdownId(dropdownId.filter((item) => item !== id));
//       return;
//     }
//     setDropdownId([...dropdownId, id]);
//   };

//   return { dropdownId, dropdownController };
// };

// export default useDropdownController;
