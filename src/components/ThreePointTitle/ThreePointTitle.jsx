import React from "react";
import "./ThreePointTitle.scss";

const ThreePointTitle = ({
  sm,
  lg,
  blackBg,
  primaryBg,
  whiteBg,
  subtitle,
  titleOne,
  titleTwo,
}) => {
  if (sm) {
    return (
      <h3
        className={`three-point-title ${blackBg && "blackBg"} ${primaryBg &&
          "primaryBg"} ${whiteBg && "whiteBg"} sm`}
      >
        <span className="three-point-title__subtitle">{subtitle}</span>
        <span className="three-point-title__title">
          {titleOne} <span className="plus">+</span>
        </span>
        <span className="three-point-title__title">{titleTwo}</span>
      </h3>
    );
  }

  if (lg) {
    return (
      <h1
        className={`three-point-title ${blackBg && "blackBg"} ${primaryBg &&
          "primaryBg"} ${whiteBg && "whiteBg"} lg`}
      >
        <span className="three-point-title__subtitle">{subtitle}</span>
        <span className="three-point-title__title">
          {titleOne} <span className="plus">+</span>
        </span>
        <span className="three-point-title__title">{titleTwo}</span>
      </h1>
    );
  }
};

export default ThreePointTitle;
