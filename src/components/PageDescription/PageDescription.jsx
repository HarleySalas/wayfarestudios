import React, { useRef } from "react";
import "./PageDescription.scss";

import CornerDots from "./assets/dots-corner-01.svg";

import { useObserver } from "../utils";

const PageDescription = ({ description, heading, content }) => {
  const ref = useRef(null);
  const animated = useObserver(ref);

  return (
    <section className="page-description">
      <CornerDots className="page-description__corner-dots" />
      <div className="container page-description__container">
        <div className="page-description__description-wrapper">
          <span
            className={`page-description__description ${animated && "active"}`}
          >
            {description}
          </span>
        </div>
        <div className="page-description__content-wrapper">
          <div className="page-description__heading-wrapper">
            <h2 className="page-description__heading" ref={ref}>
              <span className="page-description__heading__span">
                <span
                  className={`page-description__heading__span__inner ${animated &&
                    "active"}`}
                >
                  {heading}
                </span>
              </span>
            </h2>
            <div
              className={`page-description__heading__line ${animated &&
                "active"}`}
            ></div>
          </div>
          <p className={`page-description__content ${animated && "active"}`}>
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageDescription;
