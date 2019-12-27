import React, { useRef } from "react";
import "./ServicesCategory.scss";

import SectionTitle from "../../../SectionTitle/SectionTitle";

import { useObserver } from "../../../utils";

const ServicesCategory = ({
  subtitle,
  titleOne,
  titleTwo,
  content,
  deliverables,
}) => {
  const titleRef = useRef(null);
  const titleAnimated = useObserver(titleRef);

  const contentRef = useRef(null);
  const contentAnimated = useObserver(contentRef);

  const listRef = useRef(null);
  const listAnimated = useObserver(listRef);
  return (
    <section className="services-category">
      <div className="container services-category__container">
        <div className="services-category__content-wrapper">
          <div className="services-category__title-wrapper" ref={titleRef}>
            <span
              className={`services-category__subtitle ${titleAnimated &&
                "active"}`}
            >
              {subtitle}
            </span>
            <h2 className="services-category__title">
              <span className="services-category__title__span">
                <span
                  className={`services-category__title__span__inner ${titleAnimated &&
                    "active"}`}
                >
                  {titleOne}
                </span>
              </span>
              <span className="services-category__title__span">
                <span
                  className={`services-category__title__span__inner ${titleAnimated &&
                    "active"}`}
                >
                  {titleTwo}
                </span>
              </span>
            </h2>
            <div
              className={`services-category__line ${titleAnimated && "active"}`}
            ></div>
          </div>
          {/* <SectionTitle description="services" title={name} marginSm /> */}
          <p
            className={`services-category__content ${contentAnimated &&
              "active"}`}
            ref={contentRef}
          >
            {content}
          </p>
        </div>
        <div className="services-category__list-wrapper">
          <ul
            className={`services-category__ul ${listAnimated && "active"}`}
            ref={listRef}
          >
            {deliverables.map((deliverable, index) => (
              <li className="services-category__deliverable" key={index}>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesCategory;
