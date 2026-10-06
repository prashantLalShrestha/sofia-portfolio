import { createContext, useContext } from "react";
import type { Theme } from "./tokens";
export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);
export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("ThemeProvider is required");
  return value;
}
