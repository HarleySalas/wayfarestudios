import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";

import ContactHeader from "../components/PageSections/ContactPage/ContactHeader/ContactHeader";
import ContactForm from "../components/PageSections/ContactPage/ContactForm/ContactForm";

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactHeader />

      <ContactForm />
    </Layout>
  );
};

export default contact;
