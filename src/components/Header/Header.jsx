import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="info">
          <h1 className="brand">Social Media Dashboard</h1>
          <p className="description">Total Followers: 23,004</p>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
