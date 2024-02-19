import React, {
  useEffect,
  useState,
  useId,
  useLayoutEffect,
  useRef,
} from "react";
import { KeyboardArrowDownIcon, Label } from "..";
import useDropdown from "../../context/dropdownContext";
import cn from "../../utils/cn";

const DropdownWrapper = (props) => {
  const { label, children, className, hover = false } = props;
  const generateId = useId();
  const { dropdownState, dropdownController } = useDropdown();
  const dropdownRef = useRef(null);
  const [positionY, setPositionY] = useState("top-full");

  const mouseEnterHandler = () => {
    if (hover) {
      dropdownController(generateId, hover);
    }
  };

  const mouseClickHandler = () => {
    if (!hover) {
      dropdownController(generateId, hover);
    }
  };

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

  const dropdownContentStyle = {
    defaultStyle: "absolute left-0 w-full cursor-pointer -z-10",
    isOpen: "z-10 transition-all duration-300",
    isClose: "h-0 -translate-y-6 overflow-hidden",
  };

  return (
    <>
      <div className="w-full relative rounded-md ">
        <Label
          className={className}
          onMouseEnter={mouseEnterHandler}
          onClick={mouseClickHandler}
          label={label}
          icon={
            <KeyboardArrowDownIcon
              style={{
                transition: "transform 0.2s ease-in-out",
                transform:
                  dropdownState === generateId
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
              }}
            />
          }
        />
        <div data-element-gap="true" className="h-2"></div>

        <div
          ref={dropdownRef}
          className={cn(
            dropdownContentStyle.defaultStyle,
            positionY,
            {
              [dropdownContentStyle.isOpen]: dropdownState === generateId,
              [dropdownContentStyle.isClose]: dropdownState !== generateId,
            }
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DropdownWrapper;
