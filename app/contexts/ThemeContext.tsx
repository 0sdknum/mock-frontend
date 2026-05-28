"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function applyTheme(t: Theme) {
  if (typeof window === "undefined") return;
  const html = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (t === "dark" || (t === "system" && prefersDark)) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");

  // Read saved preference on mount
  useEffect(() => {
    const stored = (localStorage.getItem("doxy_theme") as Theme) ?? "system";
    setThemeState(stored);
    applyTheme(stored);
  }, []);

  // Apply whenever theme changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("doxy_theme", theme);

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme]);

  function setTheme(t: Theme) {
    setThemeState(t);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
