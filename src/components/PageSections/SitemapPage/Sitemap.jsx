import React from "react";
import { Link } from "gatsby";
import "./Sitemap.scss";

import SectionTitle from "../../SectionTitle/SectionTitle";

const Sitemap = () => {
  return (
    <div className="sitemap">
      <div className="container sitemap__container">
        <SectionTitle description="Wayfare Studios" title="Sitemap" />
        <div className="sitemap__wrapper">
          <div className="sitemap__list">
            <h2 className="sitemap__list__title">Main</h2>
            <ul className="sitemap__list__ul">
              <li className="sitemap__list__li">
                <Link className="sitemap__list__link" to="/">
                  Home
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link className="sitemap__list__link" to="/Discover">
                  Discover
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link className="sitemap__list__link" to="/services">
                  Services
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link className="sitemap__list__link" to="/cases">
                  Case Studies
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link className="sitemap__list__link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="sitemap__list">
            <h2 className="sitemap__list__title">Services</h2>
            <ul className="sitemap__list__ul">
              <li className="sitemap__list__li">
                <Link
                  className="sitemap__list__link"
                  to="/services/advertising"
                >
                  Advertising
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link className="sitemap__list__link" to="/services/branding">
                  Branding
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link
                  className="sitemap__list__link"
                  to="/services/web-development"
                >
                  Web Development
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link
                  className="sitemap__list__link"
                  to="/services/social-media"
                >
                  Social Media
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link className="sitemap__list__link" to="/services/seo">
                  SEO
                </Link>
              </li>
              <li className="sitemap__list__li">
                <Link className="sitemap__list__link" to="/services/analytics">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
