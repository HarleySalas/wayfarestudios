import React from "react";
import "./DiscoverWork.scss";

import SectionTitle from "../../../SectionTitle/SectionTitle";

import StudyImg from "./assets/study.jpg";
import StrategizeImg from "./assets/strategy.jpg";
import IterateImg from "./assets/iterate.jpg";
import DecideImg from "./assets/decide.jpg";
import CreateImg from "./assets/create.jpg";
import ReviseImg from "./assets/revise.jpg";

import DiscoverWorkCard from "./DiscoverWorkCard/DiscoverWorkCard";

const DiscoverWork = () => {
  return (
    <section className="discover-work">
      <div className="discover-work__heading-wrapper">
        <SectionTitle description="discover" title="How We Work" centered />
      </div>
      <div className="container discover-work__container">
        <DiscoverWorkCard
          img={StudyImg}
          alt="computer and notebook"
          title="Discover"
          content={`No matter the project, the first thing we must discover is you. Understanding not only your business, but your competitors in order to deliver a result that meets your requirements and makes you stand out among the crowd.`}
        />
        <DiscoverWorkCard
          img={StrategizeImg}
          alt="Chess board"
          title="Strategize"
          content={`Just because something looks pretty, it doesn’t mean it’ll provide results. After understanding the challenges you face, we need to ensure your requirements align with your goals.`}
        />
        <DiscoverWorkCard
          img={IterateImg}
          alt="design protoyping"
          title="Iterate"
          content={`The first idea is rarely the greatest result. By communicating an array of prototypes and concepts with you, it allows the final product to be everything that you expected, and potentially more.`}
        />
        <DiscoverWorkCard
          img={DecideImg}
          alt="decision making"
          title="Decide"
          content={`With strategy, requirements and goals in mind, the best tool, or channels need to be defined. Creating without the future in mind can cause headaches in the future. This is why we don’t provide cookie-cutter services. Everything is tailored to your needs, so that the greatest result is achieved.`}
        />
        <DiscoverWorkCard
          img={CreateImg}
          alt="Creating a brand"
          title="Create"
          content={`Only after we’ve studied, strategized, iterated and decided the best direction for the project, do we create the final result. During this process, the best tools, technology and expertise are used to unify and provide a seamless delivery.`}
        />
        <DiscoverWorkCard
          img={ReviseImg}
          alt="revision team working"
          title="Maintain"
          content="Many agencies, or freelancers do a job and forget about you afterwards. But, we love going along with the process. As markets change, opportunities arise, or new challenges are met, we adapt. We’re always ready to utilize analytics and translate existing projects in to new directions, making sure that your brand is always at it’s best."
        />
      </div>
    </section>
  );
};

export default DiscoverWork;
