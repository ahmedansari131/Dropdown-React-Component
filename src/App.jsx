import { FloatingDropdown } from "./components";
import { DropdownProvider } from "./context/dropdownContext";
import { useDropdownController } from "./hooks";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

function App() {
  const { dropdownState, dropdownController } = useDropdownController();

  const dropdownContent = [
    {
      name: "Home",
      icon: <KeyboardArrowDown />,
      listFunctionHandler: () => {
        alert("Hello World");
      },
    },
    {
      name: "About",
      icon: "",
      listFunctionHandler: () => {},
    },
    {
      name: "Service",
      icon: "",
      listFunctionHandler: () => {},
    },
    {
      name: "Contact",
      icon: "",
      listFunctionHandler: () => {},
    },
  ];

  return (
    <DropdownProvider value={{ dropdownState, dropdownController }}>
      <div className="w-full h-screen bg-slate-900 flex justify-center items-center gap-5">
        <FloatingDropdown
          children={dropdownContent}
          label={"Hover"}
          hover={true}
        />

        <FloatingDropdown label={"Click"} children={dropdownContent} />
      </div>
    </DropdownProvider>
  );
}

export default App;
