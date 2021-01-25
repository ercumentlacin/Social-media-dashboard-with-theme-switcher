import React from "react";

const ThemeSwitcher = () => {
  return (
    <div className="theme-switch">
      <strong>Dark Mode</strong>
      <label class="checkbox__container">
        <input type="checkbox" />
        <span class="x"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
