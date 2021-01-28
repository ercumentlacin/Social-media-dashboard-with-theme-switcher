import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./theme-switcher.css";

const ThemeSwitcher = () => {
  const [checked, setChecked] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggle } = theme;
  useEffect(() => {
    toggleTheme();
  }, [checked]);

  return (
    <div className="theme-switch">
      <strong>Dark Mode</strong>
      <label className="checkbox__container">
        <input
          checked={checked}
          onChange={() => setChecked(!checked)}
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
