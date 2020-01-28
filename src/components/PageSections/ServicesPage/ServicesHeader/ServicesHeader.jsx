import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// import HeroImg from "./assets/services-hero.jpg";

import PageHeader from "../../../PageHeader/PageHeader";

const ServicesHeader = () => {
  const data = useStaticQuery(graphql`
    query ServicesHeroImg {
      image: file(relativePath: { eq: "services-hero.jpg" }) {
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
      alt="New York City Skyline"
      title="Services"
      // subtitle="Create Your Future"
      subtitle="From Vision To Reality"
    />
  );
};

export default ServicesHeader;
