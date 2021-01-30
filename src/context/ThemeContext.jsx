import React, { useState, createContext } from "react";
import { darkTheme, lightTheme } from "../data/themes";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeStorage, setThemeStorage] = useState(
    localStorage.setItem("theme", JSON.stringify(darkTheme))
  );
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  const toggleTheme = () => {
    if (theme.name === "dark") {
      // to light
      setThemeStorage(
        localStorage.setItem("theme", JSON.stringify(lightTheme))
      );
      setTheme(JSON.parse(localStorage.getItem("theme")));
    } else {
      // to dark
      setThemeStorage(localStorage.setItem("theme", JSON.stringify(darkTheme)));
      setTheme(JSON.parse(localStorage.getItem("theme")));
    }
  };
  console.log(theme);

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
