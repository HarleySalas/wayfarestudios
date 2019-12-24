import React, { useRef } from "react";
import "./ContactCTA.scss";

import { useObserver } from "../utils";

import ProposalImg from "./assets/proposal-bg.jpg";
import Button from "../Button/Button";

const ContactCTA = () => {
  const ref = useRef(null);
  const animated = useObserver(ref);

  return (
    <section className="contact-cta">
      <img src={ProposalImg} alt="City Overview" className="contact-cta__img" />
      <div className="contact-cta__img__overlay"></div>
      <div className="container contact-cta__container">
        <h2 className="contact-cta__heading" ref={ref}>
          <span className="contact-cta__heading__span">
            <span
              className={`contact-cta__heading__span__inner ${animated &&
                "active"}`}
            >
              Have a Project in Mind?
            </span>
          </span>
        </h2>
        <span className={`contact-cta__span ${animated && "active"}`}>
          We'd love to hear about it, let's do something great!
        </span>
        <Button
          btnText="Contact Us"
          btnStyle="white"
          rounded
          addClass={`contact-cta__cta ${animated && "active"}`}
        />
      </div>
    </section>
  );
};

export default ContactCTA;
