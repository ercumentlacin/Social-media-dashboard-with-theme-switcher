import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./cardMd.css";

const CardMd = (props) => {
  const { svg, nickname, followersCount, type, today, increase } = props;
  const { theme } = useContext(ThemeContext);
  const { bg, topBg, cardBg, text, textWhite, isDark } = theme;
  let increaseColor;
  increase ? (increaseColor = "mediumseagreen") : (increaseColor = "indianred");

  return (
    <div style={{ backgroundColor: cardBg, color: text }} className="card-md">
      <div className="adress">
        <img width={20} src={svg} alt="social media icon" />

        <span>{nickname}</span>
      </div>
      <p>
        <strong style={{ color: textWhite }}>{followersCount}</strong>
      </p>
      <p className="type">{type.toUpperCase()}</p>
      <span style={{ color: increaseColor, fontWeight: 700 }}>
        {increase ? (
          <i className="fas fa-caret-up"></i>
        ) : (
          <i className="fas fa-caret-down"></i>
        )}{" "}
        {today} Today
      </span>
    </div>
  );
};

export default CardMd;
