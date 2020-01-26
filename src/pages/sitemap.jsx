import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";
import NavTopBg from "../components/NavTopBg/NavTopBg";
import Sitemap from "../components/PageSections/SitemapPage/Sitemap";
import ContactCTA from "../components/ContactCTA/ContactCTA";

const sitemap = () => {
  return (
    <Layout>
      <SEO title="Sitemap" />
      <NavTopBg />
      <Sitemap />
      <ContactCTA />
    </Layout>
  );
};

export default sitemap;
