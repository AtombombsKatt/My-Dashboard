import { useTheme } from "../Hooks/useTheme";
import { themes, type Theme } from "../Styles/ThemeColors";
export default function ThemeSelector() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {(Object.keys(themes) as Theme[]).map((t) => (
        <button
          key={t}
          onClick={() => toggleTheme(t)}
          style={{
            backgroundColor: themes[t].background,
            color: themes[t].text,
            padding: "6px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            border: theme === t ? "2px solid yellow" : "none",
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
