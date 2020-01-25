import React, { useRef } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby";
import "./HomeServicesService.scss";

import { useObserver } from "../../../../utils";

import ThreePointTitle from "../../../../ThreePointTitle/ThreePointTitle";

import Chevron from "../../../../../shared/chevron.svg";

const HomeServicesService = ({
  subtitle,
  titleOne,
  titleTwo,
  content,
  linkTo,
}) => {
  const ref = useRef(null);
  const animated = useObserver(ref);
  return (
    <Link
      // fade
      to={linkTo}
      // duration={0.24}
      className={`home-services__service ${animated && "active"}`}
    >
      <ThreePointTitle
        whiteBg
        sm
        subtitle={subtitle}
        titleOne={titleOne}
        titleTwo={titleTwo}
      />
      <span className="home-services__service__content" ref={ref}>
        {content}
      </span>
      <Chevron className="home-services__service__chevron" />
    </Link>
  );
};

export default HomeServicesService;
