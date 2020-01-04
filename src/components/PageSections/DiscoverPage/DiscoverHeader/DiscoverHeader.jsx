import React from "react";
import HeaderImg from "./assets/discover-hero.jpg";

import PageHeader from "../../../PageHeader/PageHeader";

const DiscoverHeader = () => {
  return (
    <PageHeader
      img={HeaderImg}
      alt="Earth from outerspace"
      title="Discover"
      subtitle="The Solution For Your Brand"
    />
  );
};

export default DiscoverHeader;
