export type Theme = "default" | "dark" | "light";

export const themes: Record<Theme, { background: string; text: string; sidebar: string; navbar: string; container: string }> = {
  default: {
    background: "#242424",
    text: "text-black",
    sidebar: "#4F8EF7",
    navbar: "bg-[#e5e7eb]/100",
    container: "bg-slate-200"
  },
  dark: {
    background: "#1E1E1E",
    text: "#ffffff",
    sidebar: "#111111",
    navbar: "bg-gray-900/30 backdrop-blur-md border border-gray-700/50",
    container: "bg-gray-900/30 backdrop-blur-md border border-gray-700/50"
  },
  light: {
    background: "bg-[#cccccc]",
    text: "text-black",
    sidebar: "#4F8EF7",
    navbar: "bg-[#e5e7eb]",
    container: "bg-slate-200"
  },
};
