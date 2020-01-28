import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./HomeHero.scss";

// import HeroImg from "./assets/home-hero.jpg";

import Button from "../../../Button/Button";

// import Emblem from "../../../../shared/Emblem-Fill-Stroke_fillable.svg";

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query homeHeroImg {
      image: file(relativePath: { eq: "home-hero-bg-3.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className="home-hero">
      <Img
        fluid={data.image.childImageSharp.fluid}
        fadeIn={true}
        durationFadeIn={500}
        placeholderStyle={{ opacity: 0 }}
        draggable={false}
        alt="empire state building overhead"
        className="home-hero__img-wrapper"
        imgStyle={{
          opacity: 0.72,
          animation: "fadeIn 2.24s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
          userSelect: "none",
        }}
      />
      <div className="home-hero__content">
        <div className="container home-hero__container">
          {/* <Emblem className="home-hero__emblem" title="" /> */}
          <h1 className="home-hero__heading">
            <span className="home-hero__heading__span">
              <span className="home-hero__heading__span__inner">
                Elevating Business
              </span>
            </span>
            <span className="home-hero__heading__span">
              <span className="home-hero__heading__span__inner">
                Definitively
              </span>
            </span>
          </h1>
          <span className="home-hero__divider"></span>
          <span className="home-hero__sub-heading">
            Creative, Web &
            <span className="br">
              <br />
            </span>{" "}
            Marketing Agency
          </span>
          <div className="home-hero__btn-wrapper">
            <Button
              btnText="Get a Free Proposal"
              btnStyle="primary"
              linkTo="/contact"
            />
          </div>
        </div>
        <div className="home-hero__bottom">
          <div className="container home-hero__bottom__container">
            <span className="home-hero__bottom__text">
              We make visions become reality
            </span>
          </div>
        </div>
      </div>

      {/* <h1 className="home-hero__title">Wayfare Studios test</h1> */}
    </header>
    // <header className="home-hero">
    //   <div className="home-hero__img__backdrop"></div>
    //   <img src={HeroImg} alt="mountain peak" className="home-hero__img" />
    //   <div className="home-hero__img__overlay"></div>
    //   <div className="container home-hero__container">
    //     <h1 className="home-hero__heading">
    //       <span className="home-hero__heading__span">
    //         <span className="home-hero__heading__span__inner">
    //           Elevating Your
    //         </span>
    //       </span>
    //       <span className="home-hero__heading__span">
    //         <span className="home-hero__heading__span__inner">
    //           Digital Presence
    //         </span>
    //       </span>
    //     </h1>
    //     <span className="home-hero__sub-heading">
    //       Web Design, Development & Marketing Agency
    //     </span>
    //     <div className="home-hero__btn-wrapper">
    //       <Button
    //         btnText="Get a Free Proposal"
    //         btnStyle="primary"
    //         linkTo="/contact"
    //       />
    //     </div>
    //   </div>
    // </header>
  );
};

export default HomeHero;
