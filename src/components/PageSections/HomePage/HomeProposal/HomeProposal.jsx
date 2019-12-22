import React, { useRef } from "react";
import "./HomeProposal.scss";

import { useObserver } from "../../../utils";

import ProposalImg from "./assets/proposal-bg.jpg";
import Button from "../../../Button/Button";

const HomeProposal = () => {
  const ref = useRef(null);
  const animated = useObserver(ref);

  return (
    <section className="home-proposal">
      <img
        src={ProposalImg}
        alt="City Overview"
        className="home-proposal__img"
      />
      <div className="home-proposal__img__overlay"></div>
      <div className="container home-proposal__container">
        <h2 className="home-proposal__heading" ref={ref}>
          <span className="home-proposal__heading__span">
            <span
              className={`home-proposal__heading__span__inner ${animated &&
                "active"}`}
            >
              Have a Project in Mind?
            </span>
          </span>
        </h2>
        <span className={`home-proposal__span ${animated && "active"}`}>
          We'd love to hear about it, let's do something great!
        </span>
        <Button btnText="Contact Us" btnStyle="white" rounded addClass={`home-proposal__cta ${animated && "active"}`} />
      </div>
    </section>
  );
};

export default HomeProposal;
