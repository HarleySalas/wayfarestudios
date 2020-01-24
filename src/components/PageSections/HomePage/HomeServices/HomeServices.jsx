import React, { useRef } from "react";
import "./HomeServices.scss";

import Button from "../../../Button/Button";
// import HomeServicesCard from "./HomeServicesCard/HomeServicesCard";
import HomeServicesService from "./HomeServicesService/HomeServicesService";

import { useObserver } from "../../../utils";

import Emblem from "../../../../shared/Emblem-Fill-Stroke_fillable.svg";

const HomeServices = () => {
  const headingRef = useRef(null);
  const headingAnimated = useObserver(headingRef);
  const btnRef = useRef(null);
  const btnAnimated = useObserver(btnRef);

  return (
    <section className="home-services">
      <Emblem className="home-services__emblem" />
      <div className="container home-services__container">
        <div className="home-services__heading-wrapper" ref={headingRef}>
          <span
            className={`home-services__heading-description ${headingAnimated &&
              "active"}`}
          >
            What We Do
          </span>
          <h2 className="home-services__heading">
            <span className="home-services__heading__span">
              <span
                className={`home-services__heading__span__inner ${headingAnimated &&
                  "active"}`}
              >
                Services
              </span>
            </span>
          </h2>
          <span
            className={`home-services__heading-line ${headingAnimated &&
              "active"}`}
          ></span>
        </div>

        <div className="home-services__services-wrapper">
          <HomeServicesService
            subtitle="Effective"
            titleOne="Advertising"
            titleTwo="Strategy"
            content="Reach your audience."
            linkTo="/services/advertising"
          />
          <HomeServicesService
            subtitle="Creative"
            titleOne="Branding"
            titleTwo="Design"
            content="Differentiate yourself."
            linkTo="/services/branding"
          />
          <HomeServicesService
            subtitle="Bespoke"
            titleOne="Web Design"
            titleTwo="Development"
            content="Create the best solution."
            linkTo="/services/web-development"
          />
          <HomeServicesService
            subtitle="Social Media"
            titleOne="Management"
            titleTwo="Awareness"
            content="Engage your audience."
            linkTo="/services/social-media"
          />
          <HomeServicesService
            subtitle="Search Engine"
            titleOne="Optimization"
            titleTwo="Marketing"
            content="Drive new traffic."
            linkTo="/services/seo"
          />
          <HomeServicesService
            subtitle="Business"
            titleOne="Analytics"
            titleTwo="Research"
            content="Measure results."
            linkTo="/services/analytics"
          />
        </div>
        {/* <div className="home-services__heading-wrapper" ref={headingRef}>
          <span
            className={`home-services__heading-description ${headingAnimated &&
              "active"}`}
          >
            What We Do
          </span>
          <h2 className="home-services__heading">
            <span className="home-services__heading__span">
              <span
                className={`home-services__heading__span__inner ${headingAnimated &&
                  "active"}`}
              >
                Services
              </span>
            </span>
          </h2>
          <span
            className={`home-services__heading-line ${headingAnimated &&
              "active"}`}
          ></span>
        </div>
        <div className="home-services__card-wrapper">
          <HomeServicesCard
            heading="Bespoke"
            subheading="Web Design <span class='blue'>+</span><br/>Development"
          >
            Creating an unparalleled, optimized user experience, focused on your
            needs. Anything from small landing pages, to big e-commerce sites
            and software, with blazing fast speed.
          </HomeServicesCard>
          <HomeServicesCard
            heading="Creative"
            subheading="Branding <span class='blue'>+</span><br/>Print Media"
          >
            Bringing your vision to life, and providing you with an identity to
            be proud of. Nothing about our process is cookie cutter, or copy and
            paste. We build brands with their own, unique face.
          </HomeServicesCard>
          <HomeServicesCard
            heading="Social Media"
            subheading="Management <span class='blue'>+</span><br/>Marketing"
          >
            Building your audience and expanding your reach to new heights. Our
            strategic campaigns are focused on both short and long-term growth,
            that provide tangible results.
          </HomeServicesCard>
        </div> */}
        <Button
          btnText="Learn More"
          btnStyle="black"
          addClass={`home-services__cta ${btnAnimated && "active"}`}
          btnRef={btnRef}
          linkTo="/services"
        />
      </div>
    </section>
  );
};

export default HomeServices;
