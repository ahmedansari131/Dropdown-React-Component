import { DropdownContent, FloatingDropdown, List } from "./components";

function App() {
  return (
    <>
      <FloatingDropdown label={"Hello Dropdown"}>
        <DropdownContent>
          <List listName={"Home"} />
          <List listName={"Home"} />
          <List listName={"Home"} />
          <List listName={"Home"} />
          <List listName={"Home"} />
          <List listName={"Home"} />
          <List listName={"Home"} />
          <List listName={"Home"} />
        </DropdownContent>
      </FloatingDropdown>
    </>
  );
}

export default App;
