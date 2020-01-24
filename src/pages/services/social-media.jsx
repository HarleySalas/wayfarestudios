import React from "react";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/Layout/SEO/SEO";

import NavTopBg from "../../components/NavTopBg/NavTopBg";
import ServiceContent from "../../components/PageSections/ServicePage/ServiceContent/ServiceContent";
import ServiceChannels from "../../components/PageSections/ServicePage/ServiceChannels/ServiceChannels";
import ServiceSteps from "../../components/PageSections/ServicePage/ServiceSteps/ServiceSteps";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const serviceSocialMedia = () => {
  return (
    <Layout>
      <SEO title="Social Media" />
      <NavTopBg />
      <ServiceContent
        subtitle="Social Media"
        titleOne="Management"
        titleTwo="Awareness"
        content="Expanding your social reach. We build strategies, manage accounts, engage with audiences, and curate content with our design team, which drive results. By constantly researching new trends, analyzing data from your pages, and trying new things, you’re certain to not only look great, but to achieve goals. When interacting with your audiences, you can rest assured, you’ll have a dedicated account manager, which knows your business and treats it as if it were their own."
      />
      <ServiceChannels
        channels={[
          "Social Media Management",
          "Content Strategy",
          "Brand Awareness Strategy",
          "Audience Interaction",
          "Review Management",
          "Engagement Analytics",
          "Chat Bots",
        ]}
      />
      <ServiceSteps
        steps={[
          {
            title: "Discover",
            content:
              "Starting with your existing brand identity, or one that we build with you, we take the time completely understand you. A comprehensive understanding of your objectives and current status across all of your social platforms is vital. These things ensure that we create content and strategies that both represent your brand in the best way possible, and drive success.",
          },
          {
            title: "Research",
            content:
              "We always conduct a thorough competitor analysis and gather data on the audience you already have, as well as the audience you’re targeting. Before creating a strategy, it’s important to understand where you’re at and what sort of data is going to get you to where you want to be.",
          },
          {
            title: "Strategize",
            content:
              "After doing a thorough audit of your current social media pages and utilizing our research data, we establish key points of focus moving forward. In some cases, we discover things about your audience that you weren’t aware of, which merits directions initially not discussed. We’ll communicate all of our findings with you, in order to reach a strategy you’re happy and confident with.",
          },
          {
            title: "Implement",
            content:
              "The first thing we’ll do is work with creative to make sure that all of your profile images, cover photos and media content look great, are formatted properly and align with your brand. With a rock solid strategy, your dedicated account manager will continually work with our creative and marketing teams,  to ensure consistent results.",
          },
          {
            title: "Optimize",
            content:
              "By gathering data of your social media performance and staying on top of your market, we’ll be able to pin-point new strategies and trends that’ll keep driving your brand forwards. We don’t just post content, we use social media as a tool to strategically grow your business.",
          },
        ]}
      />
      <ContactCTA />
    </Layout>
  );
};

export default serviceSocialMedia;
