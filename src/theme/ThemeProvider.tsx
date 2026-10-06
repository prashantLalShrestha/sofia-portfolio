import { useCallback, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { ThemeContext } from "./context";
import { tokens } from "./tokens";
import type { Theme } from "./tokens";
function variables(theme: Theme) {
  const styles: Record<string, string> = {};
  for (const [key, value] of Object.entries(tokens.colors[theme]))
    styles[`--${key}`] = value;
  for (const [key, value] of Object.entries(tokens.fonts))
    styles[`--font-${key}`] = value;
  for (const [key, value] of Object.entries(tokens.space))
    styles[`--space-${key}`] = value;
  for (const [key, value] of Object.entries(tokens.radius))
    styles[`--radius-${key}`] = value;
  styles["--layout-max"] = tokens.layout.max;
  styles["--motion"] = tokens.motion.normal;
  return styles as CSSProperties;
}
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  const toggleTheme = useCallback(() => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("sofia-theme-v1", next);
    } catch {
      /* Private browsing can disable storage. */
    }
  }, [theme]);
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={value}>
      <div className="theme-root" data-theme={theme} style={variables(theme)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
