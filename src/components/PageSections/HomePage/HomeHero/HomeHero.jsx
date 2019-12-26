import React from "react";

import "./HomeHero.scss";

import HeroImg from "./assets/home-hero-edited.jpg";

import Button from "../../../Button/Button";

const HomeHero = () => {
  return (
    <header className="home-hero">
      <img src={HeroImg} alt="mountain peak" className="home-hero__img" />
      <div className="home-hero__img__overlay"></div>
      <div className="container home-hero__container">
        <h1 className="home-hero__heading">
          <span className="home-hero__heading__span">
            <span className="home-hero__heading__span__inner">
              Elevating Your
            </span>
          </span>
          <span className="home-hero__heading__span">
            <span className="home-hero__heading__span__inner">
              Digital Presence
            </span>
          </span>
        </h1>
        <span className="home-hero__sub-heading">
          Web Design, Development & Marketing Agency
        </span>
        <div className="home-hero__btn-wrapper">
          <Button
            btnText="Get a Free Proposal"
            btnStyle="primary"
            linkTo="/contact"
          />
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
