import { FloatingDropdown } from "./components";
import { DropdownProvider } from "./context/dropdownContext";
import { useDropdownController } from "./hooks";

function App() {
  const { dropdownState, dropdownController } = useDropdownController();
  
  return (
    <DropdownProvider value={{ dropdownState, dropdownController }}>
      <div className="w-full h-screen bg-slate-900 flex justify-center items-center gap-5">
        <FloatingDropdown label={"Hover"} hover={true} list={["Home", "About", "Services", "Contact"]} />
        <FloatingDropdown label={"Click"} list={["Home", "About", "Services", "Contact"]} />
        <FloatingDropdown label={"Click"} list={["Home", "About", "Services", "Contact"]} />
      </div>
    </DropdownProvider>
  );
}

export default App;
