import React from "react";
import "./ServiceContent.scss";

import ThreePointTitle from "../../../ThreePointTitle/ThreePointTitle";

import Emblem from "../../../../shared/Emblem-Fill-Stroke_fillable.svg";

const ServiceContent = ({ subtitle, titleOne, titleTwo, content }) => {
  return (
    <div className="service-content">
      <Emblem className="service-content__emblem" />
      <div className="container service-content__container">
        <div className="service-content__left">
          <ThreePointTitle
            lg
            whiteBg
            subtitle={subtitle}
            titleOne={titleOne}
            titleTwo={titleTwo}
          />
        </div>
        <div className="service-content__right">
          <p className="service-content__content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
