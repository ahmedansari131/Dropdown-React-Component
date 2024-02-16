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
  const { label, list, hover = false } = props;
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

  const mouseEnterHandler = () => {
    if (hover) {
      dropdownController(generateId, hover);
    }
  };

  const mouseLeaveHandler = (e) => {
    if (
      hover &&
      dropdownRef.current &&
      (!e.target.contains(dropdownRef.current) ||
        e.target.contains(dropdownRef.current))
    ) {
      dropdownController(null);
    }
  };

  const mouseClickHandler = () => {
    if (!hover) {
      dropdownController(generateId, hover);
    }
  };

  useLayoutEffect(() => {
    adjustPosition();
  }, [dropdownState]);

  useEffect(() => {
    clickOutsideHandler();
  }, [dropdownRef.current]);

  return (
    <div
      className="text-gray-100 min-w-80 relative"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={mouseClickHandler}
    >
      <div className=" w-full">
        <div className="w-full border border-slate-600 cursor-pointer px-3 py-2 rounded-md flex items-center justify-between select-none">
          {label || "Label"}
          <span className="pointer-events-none relative ">
            <KeyboardArrowDownIcon
              style={{
                transition: "transform 0.2s ease-in-out",
                transform:
                  dropdownState === generateId
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
              }}
            />
          </span>
        </div>

        <div className="h-2 "></div>

        <div
          ref={dropdownRef}
          onMouseLeave={mouseLeaveHandler}
          className={`absolute ${positionY} left-0 w-full bg-slate-700 py-2 cursor-pointer rounded-md -z-10 ${
            dropdownState === generateId
              ? "z-10 transition-all duration-300"
              : "h-0 -translate-y-6 overflow-hidden"
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
