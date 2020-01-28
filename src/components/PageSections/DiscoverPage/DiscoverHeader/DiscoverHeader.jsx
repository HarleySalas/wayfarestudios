import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import PageHeader from "../../../PageHeader/PageHeader";

const DiscoverHeader = () => {
  const data = useStaticQuery(graphql`
    query discoverHeroImg {
      image: file(relativePath: { eq: "discover-hero.jpg" }) {
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
      alt="Downtown Miami Overhead"
      title="Discover"
      subtitle="The Solution For Your Brand"
    />
  );
};

export default DiscoverHeader;
