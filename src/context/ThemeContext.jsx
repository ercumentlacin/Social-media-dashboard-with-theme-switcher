import React, { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isDark: true,
    bg: "hsl(230, 17%, 14%)",
    topBg: " hsl(232, 19%, 15%)",
    cardBg: "hsl(228, 28%, 20%)",
    text: "hsl(228, 34%, 66%)",
    textWhite: "hsl(0, 0%, 100%)",
    toggle: "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",
  });
  const toggleTheme = () => {
    theme.isDark
      ? setTheme({
          isDark: false,
          bg: "hsl(0, 0%, 100%)",
          topBg: "hsl(225, 100%, 98%)",
          cardBg: "hsl(227, 47%, 96%)",
          text: "hsl(228, 12%, 44%)",
          textWhite: "black",
          toggle: "linear-gradient(hsl(230, 22%, 74%), hsl(230, 22%, 74%))",
        })
      : setTheme({
          isDark: true,
          bg: "hsl(230, 17%, 14%)",
          topBg: " hsl(232, 19%, 15%)",
          cardBg: "hsl(228, 28%, 20%)",
          text: "hsl(228, 34%, 66%)",
          textWhite: "hsl(0, 0%, 100%)",
          toggle: "linear-gradient(hsl(210, 78%, 56%) , hsl(146, 68%, 55%))",
        });
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
