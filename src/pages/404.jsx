import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";
import ContactCTA from "../components/ContactCTA/ContactCTA";

import NotFound from "../components/PageSections/NotFound/NotFound";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
    <ContactCTA />
  </Layout>
);

export default NotFoundPage;
