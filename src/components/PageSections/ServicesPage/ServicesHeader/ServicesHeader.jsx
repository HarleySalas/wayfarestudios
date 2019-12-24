import React from "react";

import HeroImg from "./assets/services-hero.jpg";

import PageHeader from "../../../PageHeader/PageHeader";

const ServicesHeader = () => {
  return (
    <PageHeader
      img={HeroImg}
      alt="New York City Skyline"
      title="Services"
      subtitle="Create Your Future"
    />
  );
};

export default ServicesHeader;
