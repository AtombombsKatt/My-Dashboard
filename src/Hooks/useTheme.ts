import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context )throw new Error("usetheme must be inside themeprovider")
        return context;
}