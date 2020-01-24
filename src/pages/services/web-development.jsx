import React from "react";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/Layout/SEO/SEO";

import NavTopBg from "../../components/NavTopBg/NavTopBg";
import ServiceContent from "../../components/PageSections/ServicePage/ServiceContent/ServiceContent";
import ServiceChannels from "../../components/PageSections/ServicePage/ServiceChannels/ServiceChannels";
import ServiceSteps from "../../components/PageSections/ServicePage/ServiceSteps/ServiceSteps";
import ServiceTech from "../../components/PageSections/ServicePage/ServiceTech/ServiceTech";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const serviceWebDevelopment = () => {
  return (
    <Layout>
      <SEO title="Web Development" />
      <NavTopBg />
      <ServiceContent
        subtitle="Bespoke"
        titleOne="Web Design"
        titleTwo="Development"
        content="We understand that each business has its own set of unique challenges and objectives. We also firmly believe that each brand’s identity should be carried exceptionally across all platforms. This is why we don’t use copy-paste solutions. We build from the ground up, ensuring that the outcome is entirely suited to your needs and identity. Utilizing the best technologies available, we always deliver highly performant, optimized and visually stunning results."
      />
      <ServiceChannels
        channels={[
          "Web Design",
          "UI/UX",
          "Mobile-Responsive",
          "Front-end Web Development",
          "Back-end Web Development",
          "Software Development",
          "E-Commerce",
          "CMS Solutions",
          "Apps",
          "API Integratons",
        ]}
      />
      <ServiceSteps
        steps={[
          {
            title: "Discover",
            content:
              "We take the time to understand your business. The first step is always to understand your objectives, the brand we need to represent, and who your audience is. This ensures a final product that will not only please you, but function extremely well.",
          },
          {
            title: "Strategize",
            content:
              "With your project goals and brand in mind, we dive deeper to create a comprehensive, results focused strategy. A full competitor and market research analysis is conducted to understand what’s working for others. We identify those key points and brainstorm about how we can be even more effective. With every project, we strive to provide a finished product that outperforms your competitors on every front.",
          },
          {
            title: "Prototype",
            content:
              "Once we have a solid understanding of your brand and a bulletproof strategy,  we create prototypes for you to review. Depending on your budget, these prototypes can be more of a blueprint for what we’ll build, or even something that appears exactly like the finished result. We prototype to ensure that we’ve hit the nail on the head and that you’ll be satisfied with the outcome, before we even start developing.",
          },
          {
            title: "Validate",
            content:
              "prototype, and gather data. In instances to which users test prototypes, we’ll use that data to make modifications to the prototype, making the final result align directly with what works for users. The main objective here is to get your approval, so that when development is finished, you’re certain it’ll meet your requirements and function as expected.",
          },
          {
            title: "Build",
            content:
              "Based on your requirements, we’ll build with whichever technologies best suit your needs. We are a full fledged web and software development agency, only working with what we believe to be the best technologies available. Combined with our world-class creative and marketing teams, the result is sure to be visually stunning, functional, highly performant and most importantly, effective for your business.",
          },
          {
            title: "Maintain",
            content:
              "We stand behind our work. Although we strive for projects to consist of zero bugs, we’re always here to fix them if they do occur. For site updates and modifications, we’ll always be attentive to your needs, ensuring that everything is kept to the highest possible standard. In the event you wish to maintain your own content, we’re capable of implementing both already existing content management systems, or building custom solutions.",
          },
        ]}
      />
      <ServiceTech />
      <ContactCTA />
    </Layout>
  );
};

export default serviceWebDevelopment;
