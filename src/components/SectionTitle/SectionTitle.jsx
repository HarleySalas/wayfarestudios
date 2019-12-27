import React, { useRef } from "react";
import "./SectionTitle.scss";

import { useObserver } from "../utils";

const SectionTitle = ({ description, title, centered, margin, marginSm }) => {
  const ref = useRef(null);
  const animated = useObserver(ref);
  return (
    <div
      className={`section-title ${margin &&
        "section-title--margin"} ${marginSm &&
        "section-title--margin-sm"} ${centered && "section-title--centered"}`}
      ref={ref}
    >
      {description && (
        <span className={`section-title__description ${animated && "active"}`}>
          {description}
        </span>
      )}
      <h2 className="section-title__title">
        <span className="section-title__title__span">
          <span
            className={`section-title__title__span__inner ${animated &&
              "active"}`}
          >
            {title}
          </span>
        </span>
      </h2>
      <span className={`section-title__line ${animated && "active"}`}></span>
    </div>
  );
};

export default SectionTitle;
