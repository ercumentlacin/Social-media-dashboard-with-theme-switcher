import React, { useState, createContext } from "react";
import { darkTheme, lightTheme } from "../data/themes";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    theme.name === "dark" ? setTheme(lightTheme) : setTheme(darkTheme);
  };

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
