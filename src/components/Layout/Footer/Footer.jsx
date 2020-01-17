import React from "react";
import { Link } from "gatsby";

import "./Footer.scss";

import Logo from "./assets/logo-portrait.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__row">
          <div className="footer__col">
            {/* <span className="footer__logo">Wayfare Studios</span> */}
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
          <div className="footer__col">
            <span className="footer__col-title">Latest Insights</span>
            <ul className="footer__ul">
              <li className="footer__li footer__li--disabled">
                Coming Soon...
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__col-bottom">
            <Link to="/sitemap" className="footer__link">
              Sitemap
            </Link>
            <Link to="/privacy" className="footer__link">
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
