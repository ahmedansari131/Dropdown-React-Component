import { createContext, useContext } from "react";

export const DropdownContext = createContext({
    dropdownState: null,
    dropdownController: () => {},
})

export const DropdownProvider = DropdownContext.Provider

export default function useDropdown()  {
    return useContext(DropdownContext)
}