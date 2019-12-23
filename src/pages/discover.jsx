import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";

import DiscoverHeader from "../components/PageSections/DiscoverPage/DiscoverHeader/DiscoverHeader";
import DiscoverAbout from "../components/PageSections/DiscoverPage/DiscoverAbout/DiscoverAbout";

const discover = () => {
  return (
    <Layout>
      <SEO title="Discover" />
      <DiscoverHeader />
      <DiscoverAbout />
    </Layout>
  );
};

export default discover;
