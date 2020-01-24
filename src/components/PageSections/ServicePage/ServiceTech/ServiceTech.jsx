import React from "react";
import "./ServiceTech.scss";

import ReactIcon from "../../../../shared/technologies/react-icon.svg";
import GatsbyIcon from "../../../../shared/technologies/gatsby-icon.svg";
import NextIcon from "../../../../shared/technologies/next-icon.svg";
import NodeIcon from "../../../../shared/technologies/node-icon.svg";
import MongodbIcon from "../../../../shared/technologies/mongodb-icon.svg";
import PostgresIcon from "../../../../shared/technologies/postgresql-icon.svg";
import NetlifyIcon from "../../../../shared/technologies/netlify-icon.svg";
import AwsIcon from "../../../../shared/technologies/aws-icon.svg";
import ShopifyIcon from "../../../../shared/technologies/shopify-icon.svg";
import WordpressIcon from "../../../../shared/technologies/wordpress-seeklogo.com.svg";

import SectionTitle from "../../../SectionTitle/SectionTitle";

const ServiceTech = () => {
  return (
    <section className="service-tech">
      <div className="container service-tech__container">
        {/* <h2 className="service-tech__title">Technologies We Use</h2> */}
        <SectionTitle
          description="Web Development"
          title="Technologies We Use"
          margin
          centered
        />
        <div className="service-tech__tech-wrapper">
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech">
              <div className="service-tech__tech__icon-wrapper">
                <ReactIcon className="service-tech__tech__icon" />
              </div>
              <span className="service-tech__tech__name">React</span>
            </div>
          </a>
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech">
              <div className="service-tech__tech__icon-wrapper">
                <GatsbyIcon className="service-tech__tech__icon" />
              </div>
              <span className="service-tech__tech__name">Gatsby</span>
            </div>
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech">
              <div className="service-tech__tech__icon-wrapper">
                <NextIcon className="service-tech__tech__icon" />
              </div>
              <span className="service-tech__tech__name">Next</span>
            </div>
          </a>
          <a
            href="https://nodejs.org/en/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech">
              <div className="service-tech__tech__icon-wrapper">
                <NodeIcon className="service-tech__tech__icon" />
              </div>
              <span className="service-tech__tech__name">Node</span>
            </div>
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech__wrapper">
              <div className="service-tech__tech">
                <div className="service-tech__tech__icon-wrapper">
                  <MongodbIcon className="service-tech__tech__icon" />
                </div>
                <span className="service-tech__tech__name">MongoDB</span>
              </div>
            </div>
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech">
              <div className="service-tech__tech__icon-wrapper">
                <PostgresIcon className="service-tech__tech__icon" />
              </div>
              <span className="service-tech__tech__name">PostgreSQL</span>
            </div>
          </a>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech">
              <div className="service-tech__tech__icon-wrapper">
                <NetlifyIcon className="service-tech__tech__icon" />
              </div>
              <span className="service-tech__tech__name">Netlify</span>
            </div>
          </a>
          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech__wrapper">
              <div className="service-tech__tech">
                <div className="service-tech__tech__icon-wrapper">
                  <AwsIcon className="service-tech__tech__icon" />
                </div>
                <span className="service-tech__tech__name">AWS</span>
              </div>
            </div>
          </a>
          <a
            href="https://shopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech">
              <div className="service-tech__tech__icon-wrapper">
                <ShopifyIcon className="service-tech__tech__icon" />
              </div>
              <span className="service-tech__tech__name">Shopify</span>
            </div>
          </a>
          <a
            href="https://wordpress.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-tech__tech__link"
          >
            <div className="service-tech__tech">
              <div className="service-tech__tech__icon-wrapper">
                <WordpressIcon className="service-tech__tech__icon" />
              </div>
              <span className="service-tech__tech__name">Wordpress</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTech;
