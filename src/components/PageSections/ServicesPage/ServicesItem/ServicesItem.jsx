import React, { useRef } from "react";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby";
import "./ServicesItem.scss";

import { useObserver } from "../../../utils";

import ThreePointTitle from "../../../ThreePointTitle/ThreePointTitle";

import Chevron from "../../../../shared/chevron.svg";

const ServicesItem = ({ subtitle, titleOne, titleTwo, content, linkTo }) => {
  const ref = useRef(null);
  const animated = useObserver(ref);

  return (
    <Link
      // fade
      to={linkTo}
      // duration={0.24}
      className={`services-item ${animated && "active"}`}
    >
      <ThreePointTitle
        whiteBg
        sm
        subtitle={subtitle}
        titleOne={titleOne}
        titleTwo={titleTwo}
      />
      <span className="services-item__content" ref={ref}>
        {content}
      </span>
      <Chevron className="services-item__chevron" />
    </Link>
  );
};

export default ServicesItem;
