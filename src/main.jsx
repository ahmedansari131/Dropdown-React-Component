import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { DropdownProvider } from "./context/dropdownContext.js";
import useDropdownController from "./hooks/useDropdownController.jsx";

const Wrapper = () => {
  // Use the useDropdownController hook here
  const { dropdownState, dropdownController } = useDropdownController();

  return (
    <DropdownProvider value={{ dropdownState, dropdownController }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DropdownProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Wrapper />);
