import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";

import ServicesHeader from "../components/PageSections/ServicesPage/ServicesHeader/ServicesHeader";
import ServicesAbout from "../components/PageSections/ServicesPage/ServicesAbout/ServicesAbout";
import ContactCTA from "../components/ContactCTA/ContactCTA";

const services = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <ServicesHeader />
      <ServicesAbout />
      <ContactCTA />
    </Layout>
  );
};

export default services;
