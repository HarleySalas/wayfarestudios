import React from "react";
import "./ThreePointTitle.scss";

const ThreePointTitle = ({
  sm,
  blackBg,
  primaryBg,
  whiteBg,
  subtitle,
  titleOne,
  titleTwo,
}) => {
  return (
    <h3
      className={`three-point-title ${blackBg && "blackBg"} ${primaryBg &&
        "primaryBg"} ${whiteBg && "whiteBg"} ${sm && "sm"}`}
    >
      <span className="three-point-title__subtitle">{subtitle}</span>
      <span className="three-point-title__title">
        {titleOne} <span className="plus">+</span>
      </span>
      <span className="three-point-title__title">{titleTwo}</span>
    </h3>
  );
};

export default ThreePointTitle;
