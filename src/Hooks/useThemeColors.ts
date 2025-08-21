import { themes } from "../Styles/ThemeColors";
import { useTheme } from "./useTheme";

export function useThemeColors(){
    const { theme } = useTheme();
    const colors = themes[theme];
    return colors;
}