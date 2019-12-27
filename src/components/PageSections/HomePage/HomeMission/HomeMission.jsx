import React, { useRef } from "react";
import "./HomeMission.scss";

import Button from "../../../Button/Button";
import CornerDots from "./assets/dots-corner-01.svg";

import { useObserver } from "../../../utils";

const HomeMission = () => {
  const headingRef = useRef(null);
  const ctaRef = useRef(null);
  const animated = useObserver(headingRef);
  const ctaAnimated = useObserver(ctaRef);

  return (
    <>
      <section className="home-mission">
        <CornerDots className="home-mission__corner-dots" />
        <div className="container home-mission__container">
          <div className="home-mission__description-wrapper">
            <span
              className={`home-mission__description ${animated && "active"}`}
            >
              Who We Are
            </span>
          </div>
          <div className="home-mission__content-wrapper">
            <div className="home-mission__heading-wrapper">
              <h2 className="home-mission__heading" ref={headingRef}>
                <span className="home-mission__heading__span">
                  <span
                    className={`home-mission__heading__span__inner ${animated &&
                      "active"}`}
                  >
                    Our Mission
                  </span>
                </span>
              </h2>
              <div
                className={`home-mission__heading__line ${animated &&
                  "active"}`}
              ></div>
            </div>
            <p className={`home-mission__content ${animated && "active"}`}>
              Wayfare Studios strives to create long-lasting client
              relationships by providing unparalleled service. Working with
              businesses of all sizes, our results driven services are tailored
              specifically to your needs, while always involving you in the
              process. All of our work is bespoke, ensuring that you receive
              great attention to detail, and all of your requirements are met.
              Our mission is only a success when your growth exceeds
              expectations.
            </p>
            <div ref={ctaRef}>
              <Button
                btnText="Discover More"
                btnStyle="primary"
                addClass={`home-mission__cta ${ctaAnimated && "active"}`}
                linkTo="/discover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMission;
