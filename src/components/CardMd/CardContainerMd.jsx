import React from "react";
import "./card-container-md.css";
import CardMd from "./CardMd";

const CardContainerMd = () => {
  const socialMd = ["facebook", "twitter", "instagram", "linkedin"];
  const getSocialMd = socialMd.map((i) => <CardMd />);
  return <div className="card-container-md">{getSocialMd}</div>;
};

export default CardContainerMd;
