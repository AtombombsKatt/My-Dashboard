export type Theme = "default" | "dark" | "light";

export const themes: Record<Theme, { background: string; text: string; sidebar: string }> = {
  default: {
    background: "#242424",
    text: "#ffffff",
    sidebar: "#4F8EF7",
  },
  dark: {
    background: "#1E1E1E",
    text: "#ffffff",
    sidebar: "#111111",
  },
  light: {
    background: "#cccccc",
    text: "#000000",
    sidebar: "#4F8EF7",
  },
};
