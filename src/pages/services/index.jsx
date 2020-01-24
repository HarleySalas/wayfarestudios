import React from "react";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/Layout/SEO/SEO";

import ServicesHeader from "../../components/PageSections/ServicesPage/ServicesHeader/ServicesHeader";
import ServicesAbout from "../../components/PageSections/ServicesPage/ServicesAbout/ServicesAbout";
// import ServicesCategory from "../components/PageSections/ServicesPage/ServicesCategory/ServicesCategory";
import ServicesList from "../../components/PageSections/ServicesPage/ServicesList/ServicesList";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const services = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <ServicesHeader />
      <ServicesAbout />
      <ServicesList />
      {/* <ServicesCategory
        subtitle="Bespoke"
        titleOne="Web Design +"
        titleTwo="Development"
        content="By focusing on your business needs first, we design with your success as our priority. By using no site builders, templates, or themes, we provide highly performant, beautiful and functional products with ultra-modern technologies.
        "
        deliverables={[
          "Prototyping",
          "Web Design",
          "Front-end",
          "Back-end",
          "Mobile Responsive",
          "Mobile Applications",
          "E-Commerce",
          "CMS Solutions",
          "Custom Software",
          "API Integrations",
        ]}
      />
      <ServicesCategory
        subtitle="Creative"
        titleOne="Branding +"
        titleTwo="Print Media"
        content="Everything we do is towards the evolution and success of your brand. We’re ready to help you maintain the great presence you already have, or to create a new one from the ground up. A great brand always opens the door to more business opportunities."
        deliverables={[
          "Logos",
          "Brand/Style Guides",
          "Clothing Design",
          "Promotional Materials",
          "Stationary",
          "Signage",
          "Product Packaging",
        ]}
      />
      <ServicesCategory
        subtitle="Social Media"
        titleOne="Management +"
        titleTwo="Marketing"
        content="Through active engagement and strategic campaigns, we’re experts at increasing traffic to anywhere and making your brand awareness skyrocket. Rather you want to build steady organic growth, or invest in paid advertising, we’ve got you covered."
        deliverables={[
          "Social Media Management",
          "Copywriting",
          "Pay Per Click Ads",
          "SEO Optimization",
          "Creative Marketing",
          "Analytics",
        ]}
      /> */}
      <ContactCTA />
    </Layout>
  );
};

export default services;
