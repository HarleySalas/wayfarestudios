import React from "react";
import "./ServicesList.scss";

import ServicesItem from "../ServicesItem/ServicesItem";

import Emblem from "../../../../shared/Emblem-Fill-Stroke_fillable.svg";

const ServicesList = () => {
  return (
    <section className="services-list">
      <Emblem className="services-list__emblem" />
      <div className="container services-list__container">
        <div className="services-list__wrapper">
          <ServicesItem
            subtitle="Effective"
            titleOne="Advertising"
            titleTwo="Strategy"
            linkTo="/services/advertising"
            content="Your goals, aligned with creative and strategic execution.
            For applications both physical and digital, we provide solutions to reach your target audience."
          />
          <ServicesItem
            subtitle="Creative"
            titleOne="Branding"
            titleTwo="Design"
            linkTo="/services/branding"
            content="Your brand, meets creative evolution.
            We’re ready to help you maintain the brand you already have, or build a new one from the ground up."
          />
          <ServicesItem
            subtitle="Bespoke"
            titleOne="Web Design"
            titleTwo="Development"
            linkTo="/services/web-development"
            content="Your business needs, attended to.
            Combining creative, with technical skills and integrating your business objectives, from the start."
          />
          <ServicesItem
            subtitle="Social Media"
            titleOne="Management"
            titleTwo="Awareness"
            linkTo="/services/social-media"
            content="Your audience, engaged.
            Delivering the right message and unifying modern strategies to foster growth."
          />
          <ServicesItem
            subtitle="Search Engine"
            titleOne="Optimization"
            titleTwo="Marketing"
            linkTo="/services/seo"
            content="Your website, at its greatest reach.
            Covering all bases to connect with your ideal audience, both organically and paid."
          />
          <ServicesItem
            subtitle="Business"
            titleOne="Analytics"
            titleTwo="Research"
            linkTo="/services/analytics"
            content="Your results, understood.
            Measuring your results, while defining the best direction to build upon."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
