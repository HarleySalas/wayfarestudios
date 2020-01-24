import React from "react";

import Layout from "../../components/Layout/Layout";
import SEO from "../../components/Layout/SEO/SEO";

import NavTopBg from "../../components/NavTopBg/NavTopBg";
import ServiceContent from "../../components/PageSections/ServicePage/ServiceContent/ServiceContent";
import ServiceChannels from "../../components/PageSections/ServicePage/ServiceChannels/ServiceChannels";
import ServiceSteps from "../../components/PageSections/ServicePage/ServiceSteps/ServiceSteps";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const serviceBranding = () => {
  return (
    <Layout>
      <SEO title="Advertising" />
      <NavTopBg />
      <ServiceContent
        subtitle="Creative"
        titleOne="Branding"
        titleTwo="Design"
        content="Building new brands from the ground up, or expanding upon ones that already exist. We take the time to understand your business and vision. Our full-service agency connects audiences to brands, and provides you with an identity be proud of.  No-matter the goal you have, we’re ready to utilize a multitude of strategies to effectively reach them. "
      />
      <ServiceChannels
        channels={[
          "Brand Identity",
          "Logos",
          "Product Label Design",
          "Creative Advertising",
          "Print Media",
          "Direct Mail",
          "Email",
        ]}
      />
      <ServiceSteps
        steps={[
          {
            title: "Discover",
            content:
              "The beginning of our process always begins with understanding your business, vision, objectives, and target customer or audience. When building a brand, we take special care in assuring that your story is told, powerfully. When designing new elements for existing brand identities, you can always depend on a result, which wholly aligns with your brand.",
          },
          {
            title: "Iterate",
            content:
              "With a solid discovery of your business, that understanding is kept at the forefront of our thought process. Regardless of project type, we always create multiple iterations of design concepts. We then present them to you, either for your final final decision, or you may choose for us to gather input from people fitting your target audience.",
          },
          {
            title: "Validate",
            content:
              "Upon request, we launch audience studies to gather data on brand perception, using different design iterations. In some instances, it even reveals new directions, which could compliment a project’s outcome. This assures an ideal outcome.",
          },
          {
            title: "Refine",
            content:
              "Once a final design direction has been decided upon, we move to refinement. During this time, we’ll make necessary modifications from your input, or audience study results, if applicable. Careful attention is given to every element, ensuring that all bases are covered.",
          },
          {
            title: "Launch",
            content:
              "Once a final design direction has been decided upon, we move to refinement. During this time, we’ll make necessary modifications from your input, or audience study results, if applicable. Careful attention is given to every element, ensuring that all bases are covered.",
          },
        ]}
      />
      <ContactCTA />
    </Layout>
  );
};

export default serviceBranding;
