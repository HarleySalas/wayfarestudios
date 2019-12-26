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
      <div className="container">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default contact;
