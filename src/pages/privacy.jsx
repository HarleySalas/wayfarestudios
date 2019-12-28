import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";
import PrivacyPage from "../components/PageSections/PrivacyPage/PrivacyPage";

const privacy = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <PrivacyPage />
    </Layout>
  );
};

export default privacy;
