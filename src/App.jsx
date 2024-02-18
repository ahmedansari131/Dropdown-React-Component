import { DropdownContent, FloatingDropdown, Label, List } from "./components";
import { DropdownProvider } from "./context/dropdownContext";
import { useDropdownController } from "./hooks";

function App() {
  const { dropdownState, dropdownController } = useDropdownController();

  return (
    <DropdownProvider value={{ dropdownState, dropdownController }}>
      <div className="w-full h-screen bg-slate-900 flex justify-center items-center gap-5">
        <FloatingDropdown label={"Dropdown"}>
          <DropdownContent>
            <List listName={"Home"} onClick={() => alert("Hello")} />
            <List listName={"About"} />
            <List listName={"Service"} />
            <List listName={"Contact"} />
          </DropdownContent>
        </FloatingDropdown>
        <FloatingDropdown label={"Dropdown"} hover={true}>
          <DropdownContent>
            <List listName={"Home"} />
            <List listName={"About"} />
            <List listName={"Service"} />
            <List listName={"Contact"} />
          </DropdownContent>
        </FloatingDropdown>
      </div>
    </DropdownProvider>
  );
}

export default App;
