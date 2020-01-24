import React from "react";
import "./ServiceSteps.scss";

const ServiceSteps = ({ steps }) => {
  return (
    <section className="service-steps">
      <div className="container service-steps__container">
        {steps.map((step, index) => (
          <div className="service-steps__step">
            <div className="service-steps__step__left">
              <div className="service-steps__step__dot"></div>
            </div>
            <div className="service-steps__step__right">
              <h2 className="service-steps__step__title">{step.title}</h2>
            </div>
            <div className="service-steps__step__left">
              <div className="service-steps__step__line"></div>
            </div>
            <div className="service-steps__step__right">
              <p className="service-steps__step__content">{step.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSteps;
