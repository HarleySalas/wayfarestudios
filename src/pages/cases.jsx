import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";
import ContactCTA from "../components/ContactCTA/ContactCTA";

import CasesHeader from "../components/PageSections/CasesPage/CasesHeader/CasesHeader";

const cases = () => {
  return (
    <Layout>
      <SEO title="Cases" />
      <CasesHeader />
      <ContactCTA />
    </Layout>
  );
};

export default cases;
