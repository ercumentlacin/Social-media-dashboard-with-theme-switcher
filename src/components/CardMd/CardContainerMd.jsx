import React from "react";
import "./card-container-md.css";
import CardMd from "./CardMd";
import cardData from "../../data/cardData";

const CardContainerMd = () => {
  const socialMd = ["facebook", "twitter", "instagram", "linkedin"];
  const getSocialMd = cardData.map((socialMedia) => (
    <CardMd
      svg={socialMedia.svg}
      nickname={socialMedia.nickname}
      followersCount={socialMedia.followersCount}
      type={socialMedia.type}
      today={socialMedia.today}
      increase={socialMedia.increase}
    />
  ));
  return <div className="card-container-md">{getSocialMd}</div>;
};

export default CardContainerMd;
