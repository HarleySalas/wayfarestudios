import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import PageHeader from "../../../PageHeader/PageHeader";
// import CasesImg from "./assets/cases-hero.jpg";

const CasesHeader = () => {
  const data = useStaticQuery(graphql`
    query CasesHeroImg {
      image: file(relativePath: { eq: "cases-hero.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <PageHeader
      img={data.image.childImageSharp.fluid}
      alt="Busy Business Street"
      title="Case Studies"
      subtitle="Partnerships That Thrive"
    />
  );
};

export default CasesHeader;
