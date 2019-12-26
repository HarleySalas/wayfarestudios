import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";
import ContactCTA from "../components/ContactCTA/ContactCTA";

import ContactHeader from "../components/PageSections/ContactPage/ContactHeader/ContactHeader";

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactHeader />
    </Layout>
  );
};

export default contact;
