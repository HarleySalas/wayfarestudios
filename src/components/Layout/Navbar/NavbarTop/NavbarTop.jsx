import React from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./NavbarTop.scss";

import NavbarLogo from "../NavbarLogo/NavbarLogo";

const NavbarTop = () => {
  return (
    <div className="navbar__top">
      <div className="container navbar__top__container">
        <NavbarLogo />

        <ul className="navbar__top__ul">
          <li className="navbar__top__li">
            <AniLink
              fade
              to="/discover"
              duration={0.24}
              className="navbar__top__link"
            >
              Discover
            </AniLink>
          </li>
          <li className="navbar__top__li">
            <AniLink
              fade
              to="/services"
              duration={0.24}
              className="navbar__top__link"
            >
              Services
            </AniLink>
          </li>
          <li className="navbar__top__li">
            <AniLink
              fade
              to="/cases"
              duration={0.24}
              className="navbar__top__link"
            >
              Case Studies
            </AniLink>
          </li>
          <li className="navbar__top__li">
            <AniLink
              fade
              to="/contact"
              duration={0.24}
              className="navbar__top__link"
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
