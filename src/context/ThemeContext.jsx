import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem("portfolio-accent") || "marine";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("portfolio-accent", accentColor);
  }, [accentColor]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({ isDark, toggleTheme, accentColor, setAccentColor }),
    [isDark, toggleTheme, accentColor]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};