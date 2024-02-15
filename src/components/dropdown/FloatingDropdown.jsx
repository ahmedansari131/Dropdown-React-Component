import React, {
  useEffect,
  useState,
  useId,
  useLayoutEffect,
  useRef,
} from "react";
import { KeyboardArrowDownIcon } from "..";
import useDropdown from "../../context/dropdownContext";

const DropdownWrapper = (props) => {
  const { label, list } = props;
  const generateId = useId();
  const { dropdownState, dropdownController } = useDropdown();
  const dropdownRef = useRef(null);
  const [positionY, setPositionY] = useState("top-full");

  const clickOutsideHandler = () => {
    window.addEventListener("click", (e) => {
      if (dropdownRef.current && e.target.contains(dropdownRef.current)) {
        dropdownController(null);
      }
    });
  };

  const adjustPosition = () => {
    if (dropdownRef.current) {
      const { top } = dropdownRef.current.getBoundingClientRect();
      if (top + dropdownRef.current.clientHeight >= window.innerHeight) {
        setPositionY("bottom-full -translate-y-2");
      } else {
        setPositionY("top-full");
      }
    }
  };

  useLayoutEffect(() => {
    adjustPosition();
  }, [dropdownState]);

  useEffect(() => {
    clickOutsideHandler();
  }, [dropdownRef.current]);

  return (
    <div className="text-gray-100 min-w-80">
      <div className="relative w-full">
        <div
          id={`dropdown-${generateId}`}
          onClick={(e) => dropdownController(e.target.id)}
          className="w-full border border-slate-600 cursor-pointer px-3 py-2 rounded-md flex items-center justify-between"
        >
          {label || "Label"}
          <span className="pointer-events-none">
            <KeyboardArrowDownIcon />
          </span>
        </div>

        <div
          ref={dropdownRef}
          className={`absolute ${positionY} left-0 w-full bg-slate-700 py-2 cursor-pointer rounded-md -z-10 ${
            dropdownState && dropdownState === "dropdown-" + generateId
              ? "translate-y-2 z-10 transition-all duration-300"
              : "h-0 -translate-y-5 overflow-hidden"
          }`}
        >
          <ul>
            {list.map((item) => (
              <li key={item} className="py-2 px-3 hover:bg-slate-800 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownWrapper;
