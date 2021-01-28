import React, { useContext } from "react";
import "./card-container-md.css";
import CardMd from "./CardMd";
import cardData from "../../data/cardData";
import cardDataSm from "../../data/cardDataSm";
import CardSm from "../CardSm/CardSm";
import ThemeContext from "../../context/ThemeContext";

const CardContainerMd = () => {
  const { theme } = useContext(ThemeContext);
  const { textWhite } = theme;

  const getSocialMd = cardData.map((socialMedia, index) => (
    <CardMd
      key={index}
      svg={socialMedia.svg}
      nickname={socialMedia.nickname}
      followersCount={socialMedia.followersCount}
      type={socialMedia.type}
      today={socialMedia.today}
      increase={socialMedia.increase}
      borderColor={socialMedia.borderColor}
    />
  ));
  const getSocialSm = cardDataSm.map((socialMedia, index) => (
    <CardSm
      key={index}
      svg={socialMedia.svg}
      name={socialMedia.name}
      count={socialMedia.count}
      today={socialMedia.today}
      increase={socialMedia.increase}
    />
  ));
  return (
    <>
      <div className="card-container-md">{getSocialMd}</div>
      <h1
        style={{ color: textWhite, transition: "all 250ms ease-in-out" }}
        className="brand"
      >
        Overview - Today{" "}
      </h1>
      <div className="card-container-sm">{getSocialSm}</div>
    </>
  );
};

export default CardContainerMd;
