import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [font, setFont] = useState("sans");

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ font, setFont, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
