
import { createContext, useState, useEffect, type ReactNode } from "react";
import { type Theme} from "../Styles/ThemeColors";


// Definiera tillåtna themes
// type Theme = "default" | "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (newTheme: Theme) => void;
} 
 const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps{
    children: ReactNode;
}

// const themes = {
//    default: {
//         background: "#242424",
//         sidebar: "#4F8EF7",
//     },
//     darkmode: {
//         background: "#242424",
//         sidebar: "#1E1E1E",
//     }
// };


export function ThemeProvider({ children }: ThemeProviderProps) {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  const [theme, setTheme] = useState<Theme>(storedTheme || "default");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;