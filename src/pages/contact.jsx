import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";
import NavTopBg from "../components/NavTopBg/NavTopBg";

// import ContactHeader from "../components/PageSections/ContactPage/ContactHeader/ContactHeader";
import ContactForm from "../components/PageSections/ContactPage/ContactForm/ContactForm";

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <NavTopBg />
      {/* <ContactHeader /> */}

      <ContactForm />
    </Layout>
  );
};

export default contact;
