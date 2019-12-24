import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/SEO/SEO";

import HomeHero from "../components/PageSections/HomePage/HomeHero/HomeHero";
import HomeMission from "../components/PageSections/HomePage/HomeMission/HomeMission";
import HomeServices from "../components/PageSections/HomePage/HomeServices/HomeServices";
import HomeIndustries from "../components/PageSections/HomePage/HomeIndustries/HomeIndustries";
import ContactCTA from "../components/ContactCTA/ContactCTA";
const IndexPage = () => (
  <Layout>
    <SEO />
    <HomeHero />
    <HomeMission />
    <HomeServices />
    <HomeIndustries />
    <ContactCTA />
  </Layout>
);

export default IndexPage;
