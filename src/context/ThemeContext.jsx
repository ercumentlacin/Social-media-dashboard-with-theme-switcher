import React, { useState, createContext, useEffect } from "react";
import { darkTheme, lightTheme } from "../data/themes";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme"));
    if (savedTheme) {
      return savedTheme;
    } else {
      return darkTheme;
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkTheme));
  }, []);

  const toggleTheme = () => {
    if (theme.name === "dark") {
      // to light

      localStorage.setItem("theme", JSON.stringify(lightTheme));

      setTheme(lightTheme);
    } else {
      // to dark
      localStorage.setItem("theme", JSON.stringify(darkTheme));
      setTheme(darkTheme);
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
