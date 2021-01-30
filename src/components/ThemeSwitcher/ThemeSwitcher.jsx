import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./theme-switcher.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme.name === "dark" ? true : false);
  let { toggle } = theme;

  return (
    <div className="theme-switch">
      <strong>Dark Mode</strong>
      <label className="checkbox__container">
        <input
          onChange={() => setChecked(!checked)}
          onClick={toggleTheme}
          checked={checked}
          type="checkbox"
        />
        <span
          style={{
            backgroundImage: toggle,
            transition: "all 250ms ease-in-out",
          }}
          className="x"
        ></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
