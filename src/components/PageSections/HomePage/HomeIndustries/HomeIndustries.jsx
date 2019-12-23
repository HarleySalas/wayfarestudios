import React, { useRef } from "react";
import "./HomeIndustries.scss";

import { useObserver } from "../../../utils";

import ConstructionIcon from "./assets/icon_construction.svg";
import LawIcon from "./assets/icon_law.svg";
import HealthcareIcon from "./assets/icon_healthcare.svg";
import FinanceIcon from "./assets/icon_finance.svg";
import FoodIcon from "./assets/icon_food.svg";
import TechnologyIcon from "./assets/icon_technology.svg";
import RealEstateIcon from "./assets/icon_real-estate.svg";
import EcommerceIcon from "./assets/icon_e-commerce.svg";
import SmallBusinessIcon from "./assets/icon_small-business.svg";
import EntertainmentIcon from "./assets/icon_entertainment.svg";

const HomeIndustries = () => {
  const headingRef = useRef(null);
  const headingAnimated = useObserver(headingRef);

  const constructionRef = useRef(null);
  const constructionAnimated = useObserver(constructionRef);
  const lawRef = useRef(null);
  const lawAnimated = useObserver(lawRef);
  const healthcareRef = useRef(null);
  const healthcareAnimated = useObserver(healthcareRef);
  const financeRef = useRef(null);
  const financeAnimated = useObserver(financeRef);
  const foodRef = useRef(null);
  const foodAnimated = useObserver(foodRef);
  const technologyRef = useRef(null);
  const technologyAnimated = useObserver(technologyRef);
  const realEstateRef = useRef(null);
  const realEstateAnimated = useObserver(realEstateRef);
  const ecommerceRef = useRef(null);
  const ecommerceAnimated = useObserver(ecommerceRef);
  const smallBusinessRef = useRef(null);
  const smallBusinessAnimated = useObserver(smallBusinessRef);
  const entertainmentRef = useRef(null);
  const entertainmentAnimated = useObserver(entertainmentRef);

  return (
    <section className="home-industries">
      <div className="container home-industries__container">
        <div className="home-industries__heading-wrapper" ref={headingRef}>
          <span
            className={`home-industries__heading-description ${headingAnimated &&
              "active"}`}
          >
            Clientele
          </span>
          <h2 className="home-industries__heading">
            <span className="home-industries__heading__span">
              <span
                className={`home-industries__heading__span__inner ${headingAnimated &&
                  "active"}`}
              >
                Industries we specialize in
              </span>
            </span>
          </h2>
          <div
            className={`home-industries__heading-line ${headingAnimated &&
              "active"}`}
          ></div>
        </div>
        <div className="home-industries__content-wrapper">
          <div className="home-industries__icon-wrapper" ref={constructionRef}>
            <ConstructionIcon
              className={`home-industries__icon ${constructionAnimated &&
                "active"}`}
            />
            <span
              className={`home-industries__icon-title ${constructionAnimated &&
                "active"}`}
            >
              Construction
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={lawRef}>
            <LawIcon
              className={`home-industries__icon ${lawAnimated && "active"}`}
            />
            <span
              className={`home-industries__icon-title ${lawAnimated &&
                "active"}`}
            >
              Law
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={healthcareRef}>
            <HealthcareIcon
              className={`home-industries__icon ${healthcareAnimated &&
                "active"}`}
            />
            <span
              className={`home-industries__icon-title ${healthcareAnimated &&
                "active"}`}
            >
              Healthcare
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={financeRef}>
            <FinanceIcon
              className={`home-industries__icon ${financeAnimated && "active"}`}
            />
            <span
              className={`home-industries__icon-title ${financeAnimated &&
                "active"}`}
            >
              Finance
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={foodRef}>
            <FoodIcon
              className={`home-industries__icon ${foodAnimated && "active"}`}
            />
            <span
              className={`home-industries__icon-title ${foodAnimated &&
                "active"}`}
            >
              Food
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={technologyRef}>
            <TechnologyIcon
              className={`home-industries__icon ${technologyAnimated &&
                "active"}`}
            />
            <span
              className={`home-industries__icon-title ${technologyAnimated &&
                "active"}`}
            >
              Technology
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={realEstateRef}>
            <RealEstateIcon
              className={`home-industries__icon ${realEstateAnimated &&
                "active"}`}
            />
            <span
              className={`home-industries__icon-title ${realEstateAnimated &&
                "active"}`}
            >
              Real Estate
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={ecommerceRef}>
            <EcommerceIcon
              className={`home-industries__icon ${ecommerceAnimated &&
                "active"}`}
            />
            <span
              className={`home-industries__icon-title ${ecommerceAnimated &&
                "active"}`}
            >
              E-Commerce
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={smallBusinessRef}>
            <SmallBusinessIcon
              className={`home-industries__icon ${smallBusinessAnimated &&
                "active"}`}
            />
            <span
              className={`home-industries__icon-title ${smallBusinessAnimated &&
                "active"}`}
            >
              Small Business
            </span>
          </div>
          <div className="home-industries__icon-wrapper" ref={entertainmentRef}>
            <EntertainmentIcon
              className={`home-industries__icon ${entertainmentAnimated &&
                "active"}`}
            />
            <span
              className={`home-industries__icon-title ${entertainmentAnimated &&
                "active"}`}
            >
              Entertainment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIndustries;
