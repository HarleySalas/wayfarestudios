import React, { useRef } from "react";
import "./HomeServicesCard.scss";

import { useObserver } from "../../../../utils";

const HomeServicesCard = props => {
  const ref = useRef(null);
  const animated = useObserver(ref);

  // if (ref.current) {
  //   console.log(ref.current.getBoundingClientRect());
  // }

  return (
    <div className="home-services__card" ref={ref}>
      <h2
        className={`home-services__card__heading-wrapper ${animated &&
          "active"}`}
      >
        <span className="home-services__card__heading">
          <span className="home-services__card__heading__inner">
            {props.heading}
          </span>
        </span>
        <span className="home-services__card__heading">
          <span className="home-services__card__heading__inner">
            {props.subheading}
          </span>
        </span>
      </h2>
      <p className={`home-services__card__content ${animated && "active"}`}>
        {props.children}
      </p>
    </div>
  );
};

export default HomeServicesCard;
