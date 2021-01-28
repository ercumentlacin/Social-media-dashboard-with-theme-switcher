import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./card-sm.css";

const CardSm = (props) => {
  const { svg, name, count, today, increase } = props;

  const { theme } = useContext(ThemeContext);
  const { bg, topBg, cardBg, text, textWhite, isDark } = theme;
  let increaseColor;
  increase ? (increaseColor = "mediumseagreen") : (increaseColor = "indianred");
  return (
    <div
      style={{
        backgroundColor: cardBg,
        color: text,
      }}
      className="card-sm"
    >
      <div className="adress">
        <span>{name}</span>
        <img width={20} src={svg} alt="social media icon" />
      </div>

      <div className="stats">
        <p>
          <strong style={{ color: textWhite }}>{count}</strong>
        </p>

        <span style={{ color: increaseColor, fontWeight: 700 }}>
          {increase ? (
            <i className="fas fa-caret-up"></i>
          ) : (
            <i className="fas fa-caret-down"></i>
          )}{" "}
          {today} Today
        </span>
      </div>
    </div>
  );
};

export default CardSm;
