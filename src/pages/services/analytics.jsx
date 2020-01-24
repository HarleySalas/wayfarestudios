import React from "react";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/Layout/SEO/SEO";

import NavTopBg from "../../components/NavTopBg/NavTopBg";
import ServiceContent from "../../components/PageSections/ServicePage/ServiceContent/ServiceContent";
import ServiceChannels from "../../components/PageSections/ServicePage/ServiceChannels/ServiceChannels";
import ServiceSteps from "../../components/PageSections/ServicePage/ServiceSteps/ServiceSteps";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const serviceAnalytics = () => {
  return (
    <Layout>
      <SEO title="Advertising" />
      <NavTopBg />
      <ServiceContent
        subtitle="Business"
        titleOne="Analytics"
        titleTwo="Research"
        content="Utilizing industry standard tools, or sometimes even building our own tools for unique situations, we can assist you in measuring performance results in just about any scenario. From ad-spend performance and organic conversion rates to determining which employees are the cause of bad reviews, we’re able to get to the bottom of just about any statistic."
      />
      <ServiceChannels
        channels={[
          "Google Analytics",
          "Web Traffic Reports",
          "Conversion Rate Reports",
          "Custom Reports",
          "Custom Data Software",
        ]}
      />
      <ServiceSteps
        steps={[
          {
            title: "Utilize",
            content:
              "For most digital applications, we work with industry standard tools to gather data and as mentioned, we even build custom solutions. If there’s data you need, but no solutions you can think of, we’ll do the research and determine the best way we can gather that data.",
          },
          {
            title: "Measure",
            content:
              "With information gathered from one, or multiple sources, we aggregate that data with your spending and areas of focus in order to determine the effectiveness of each avenue you’ve taken. Reports can be provided either once, or on-going. ",
          },
          {
            title: "Strategize",
            content:
              "For all instances, we can analyze our data reports and provide insight, as to what avenues can be cost effectively refined, further invested in, or even cut. When something needs to work, but doesn’t, or you’d like us to stay on top of new opportunities, we can conduct research, audience/user studies, and do whatever it takes to get to the bottom of a challenge.",
          },
        ]}
      />
      <ContactCTA />
    </Layout>
  );
};

export default serviceAnalytics;
