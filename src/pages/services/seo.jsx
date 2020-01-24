import React from "react";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/Layout/SEO/SEO";

import NavTopBg from "../../components/NavTopBg/NavTopBg";
import ServiceContent from "../../components/PageSections/ServicePage/ServiceContent/ServiceContent";
import ServiceChannels from "../../components/PageSections/ServicePage/ServiceChannels/ServiceChannels";
import ServiceSteps from "../../components/PageSections/ServicePage/ServiceSteps/ServiceSteps";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const serviceSEO = () => {
  return (
    <Layout>
      <SEO title="SEO" />
      <NavTopBg />
      <ServiceContent
        subtitle="Search Engine"
        titleOne="Optimization"
        titleTwo="Marketing"
        content="Combining creative, with strategic execution. Our advertising campaigns begin with understanding your customers and aligning with your brand. Capable of utilizing multiple platforms, building bulletproof strategies, and effectively targeting your ideal audience. We’re constantly studying new trends and emerging platforms to achieve the most with your budget. As a passionate, full-service creative and marketing agency, we not only make things look amazing, we stop at nothing for results to exceed your every expectation."
      />
      <ServiceChannels
        channels={[
          "SEO",
          "Google Search Ads",
          "Ad Targeting Audits",
          "Keyword Analysis",
          "Content Development",
          "Performance Analytics",
          "Link Building",
        ]}
      />
      <ServiceSteps
        steps={[
          {
            title: "Audit",
            content:
              "We audit websites and search advertisements thoroughly and effectively. For websites, we cover dozens of important elements that every website should have, like positive keywords, negative keywords, image optimization, page load times, and just about everything under the sun. For search ads, we’re quick to determine whether an ad is truly being targeted properly. By understanding the position you’re in and analyzing the results you currently have, it allows us to pinpoint areas of focus moving forwards.",
          },
          {
            title: "Research",
            content:
              "No matter if we’re doing an SEO fix-up, or a huge ad campaign, we always analyze what your competitors are doing, as well as perform an extensive keyword study. Our objective is to always out-perform your greatest competitor. To do that, we perform a thorough analysis, which influences our decisions going forward.",
          },
          {
            title: "Adjust",
            content:
              "Once we’ve got a solid understanding of what you’re missing and whats working for your competitors, we make the adjustments necessary to begin the process of catching up. There’s a lot of detail that goes in to ranking higher. As a full service web development, creative and marketing agency, there’s no bases we’ll have trouble covering.",
          },
          {
            title: "Maintain",
            content:
              "As targeting opportunities shift, or markets change, we effectively analyze data to understand what needs to be done, and we execute.",
          },
        ]}
      />
      <ContactCTA />
    </Layout>
  );
};

export default serviceSEO;
