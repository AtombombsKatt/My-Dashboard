import { useTheme } from "../Hooks/useTheme";
import { themes } from "../Styles/ThemeColors";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`${themes[theme].background} ${themes[theme].text} p-2 rounded`}
      onClick={() => toggleTheme(theme === "default" ? "dark" : "default")}
    >
      Byt tema (nuvarande: {theme})
    </button>
  );
}
