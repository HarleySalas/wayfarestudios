import React from "react";

import PageHeader from "../../../PageHeader/PageHeader";
import CasesImg from "./assets/cases-hero.jpg";

const CasesHeader = () => {
  return (
    <PageHeader
      img={CasesImg}
      alt="Busy Businesses"
      title="Case Studies"
      subtitle="Partnerships That Thrive"
    />
  );
};

export default CasesHeader;
