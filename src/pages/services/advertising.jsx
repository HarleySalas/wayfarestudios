import React from "react";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/Layout/SEO/SEO";

import NavTopBg from "../../components/NavTopBg/NavTopBg";
import ServiceContent from "../../components/PageSections/ServicePage/ServiceContent/ServiceContent";
import ServiceChannels from "../../components/PageSections/ServicePage/ServiceChannels/ServiceChannels";
import ServiceSteps from "../../components/PageSections/ServicePage/ServiceSteps/ServiceSteps";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const servicesAdvertising = () => {
  return (
    <Layout>
      <SEO title="Advertising" />
      <NavTopBg />
      <ServiceContent
        subtitle="Effective"
        titleOne="Advertising"
        titleTwo="Strategy"
        content="Combining creative, with strategic execution. Our advertising campaigns begin with understanding your customers and aligning with your brand. Capable of utilizing multiple platforms, building bulletproof strategies, and effectively targeting your ideal audience. We’re constantly studying new trends and emerging platforms to achieve the most with your budget. As a passionate, full-service creative and marketing agency, we not only make things look amazing, we stop at nothing for results to exceed your every expectation."
      />
      <ServiceChannels
        channels={[
          "Social Media Ads",
          "Google Search Ads",
          "Display Ads",
          "Creative Advertising",
          "Print Media",
          "Direct Mail",
          "Email",
        ]}
      />
      <ServiceSteps
        steps={[
          {
            title: "Strategize",
            content:
              "Our thought process begins with your objective at the highest level. By simplifying the primary objective and eliminating all other thoughts, we’re able to create a wide variety of campaign strategies, thinking outside the box. In-depth research and trend analysis adds to the viable routes which can be taken. We’re experts at determining and targeting the best audience, maximizing your return on investment.",
          },
          {
            title: "Validate",
            content:
              "Once we have perspective of each possible route, we narrow it down to what we believe is most viable. We then either run low budget pay-per-click ads, or present ad mocks to a test audience, in order to gather data. By analyzing this data, we gain insight as to what will work most effectively. This ensures the highest impact at launch.",
          },
          {
            title: "Integrate",
            content:
              "When strategy is backed by validation, we design, build and integrate the campaign. With extensive experience across pay-per-click advertising, print, design, and brand messaging, we’re certain to execute effectively across a multitude of different avenues. Every detail is carefully attended to, ensuring that your brand is not only represented in the best way possible, but that you reach your audience definitively. ",
          },
          {
            title: "Optimize",
            content:
              "Majority of campaigns are run for an extended period of time, or are launched again at a later time. We’re experts of utilizing industry standard tools to gather performance metrics, as well as crafting solutions which measure effectiveness in unique circumstances. As targeting becomes less effective, or more effective routes are realized, we’ll know exactly what to do. We make campaigns perform even better over time, guaranteed.",
          },
        ]}
      />
      <ContactCTA />
    </Layout>
  );
};

export default servicesAdvertising;
