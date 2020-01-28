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
              Forged through passion of design, technology, and business,
              <strong> Wayfare Studios</strong> is driven to make visions become
              reality. By taking time to truly understand our client’s
              objectives, utilizing the greatest technologies available, and
              never settling for sub-par results, we redefine what “putting the
              client first” means. Always striving to exceed your every
              expectation, unparalleled service is our commitment to building
              relationships that stand the test of time.
              {/* Wayfare Studios strives to create long-lasting client
              relationships by providing unparalleled service. Working with
              businesses of all sizes, our results driven services are tailored
              specifically to your needs, while always involving you in the
              process. All of our work is bespoke, ensuring that you receive
              great attention to detail, and all of your requirements are met.
              Our mission is only a success when your growth exceeds
              expectations. */}
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
