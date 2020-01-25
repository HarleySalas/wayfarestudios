import React from "react";
import { Link } from "gatsby";
import "./Footer.scss";

import Logo from "./assets/logo-portrait.svg";
import Emblem from "../../../shared/Emblem-Fill-Stroke_fillable.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Emblem className="footer__emblem" />
      <div className="container footer__container">
        <div className="footer__row">
          <div className="footer__col">
            <Logo className="footer__logo" />
            <span className="footer__contact">
              <a href="tel:7862042362">+1 (786) 204 - 2362</a>
            </span>
            <span className="footer__contact">
              <a href="mailto:hello@wayfarestudios.com">
                hello@wayfarestudios.com
              </a>
            </span>
          </div>
          <div className="footer__col">
            <div className="footer__ul-wrapper">
              <span className="footer__col-title">Links</span>
              <ul className="footer__ul">
                <li className="footer__li">
                  <Link to="/" className="footer__li__link">
                    Home
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/discover" className="footer__li__link">
                    Discover
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/services" className="footer__li__link">
                    Services
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/cases" className="footer__li__link">
                    Case Studies
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/contact" className="footer__li__link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__ul-wrapper">
              <span className="footer__col-title">Services</span>
              <ul className="footer__ul">
                <li className="footer__li">
                  <Link to="/services/advertising" className="footer__li__link">
                    Advertising
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/services/branding" className="footer__li__link">
                    Branding
                  </Link>
                </li>
                <li className="footer__li">
                  <Link
                    to="/services/web-development"
                    className="footer__li__link"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="footer__li">
                  <Link
                    to="/services/social-media"
                    className="footer__li__link"
                  >
                    Social Media
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/services/seo" className="footer__li__link">
                    SEO
                  </Link>
                </li>
                <li className="footer__li">
                  <Link to="/services/analytics" className="footer__li__link">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__col-bottom">
            <Link to="/sitemap" className="footer__link secondary">
              Sitemap
            </Link>
            <Link to="/privacy" className="footer__link secondary">
              Privacy Policy
            </Link>
          </div>
          <div className="footer__col-bottom">
            <span className="footer__copyright">
              &copy; 2019 - {new Date().getFullYear()} Wayfare Studios, LLC.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
