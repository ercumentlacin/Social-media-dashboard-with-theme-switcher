import React, { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [constrat, setConstrat] = useState("light");
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark"); // bg color
    constrat === "light" ? setConstrat("dark") : setConstrat("light"); // text color
  };
  const value = {
    theme,
    constrat,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
