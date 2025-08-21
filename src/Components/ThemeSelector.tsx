import { Sun, Moon, CloudSun } from "lucide-react";
import { useTheme } from "../Hooks/useTheme";
import { themes, type Theme } from "../Styles/ThemeColors";


const themeIcons: Record<Theme, React.ReactNode> = {
  default: <CloudSun className="w-6 h-6" />,
  dark: <Moon className="w-6 h-6" />,
  light: <Sun className="w-6 h-6" />,
};


export default function ThemeSelector() {
  const { theme, toggleTheme } = useTheme();
 
  function handleClick(t: Theme){
    toggleTheme(t);

  }


  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {(Object.keys(themes) as Theme[]).map((t) => (
        <button
          key={t}
          onClick={() => handleClick(t)}
          className={`px-3 py-2 rounded 
            ${theme === t ? "text-yellow-400 border-2 border-yellow-400" : "text-gray-400"}
          `}
          style={{ backgroundColor: themes[t].background }}
        >
          {themeIcons[t]}
        </button>
      ))}
    </div>
  );
}
