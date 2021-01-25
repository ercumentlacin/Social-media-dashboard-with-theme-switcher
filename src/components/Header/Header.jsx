import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./header.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { bg, topBg, cardBg, text, textWhite, isDark } = theme;

  return (
    <header
      style={{
        backgroundColor: topBg,
        color: textWhite,
        transition: "all 250ms ease-in-out",
      }}
    >
      <div className="header__container">
        <div className="info">
          <h1 className="brand">Social Media Dashboard</h1>
          <p
            style={{ color: text, transition: "all 250ms ease-in-out" }}
            className="description"
          >
            Total Followers: 23,004
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
