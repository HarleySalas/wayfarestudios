import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./NavbarTop.scss";

import NavbarLogo from "../NavbarLogo/NavbarLogo";
import MenuIcon from "../MenuIcon/MenuIcon";

const NavbarTop = () => {
  return (
    <div className="navbar__top">
      <div className="container navbar__top__container">
        <NavbarLogo navTop />
        <MenuIcon navTop />
        <ul className="navbar__top__ul">
          <li className="navbar__top__li">
            <AniLink
              fade
              to="/discover"
              duration={0.24}
              className="navbar__top__link"
              activeClassName="active"
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
              activeClassName="active"
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
              activeClassName="active"
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
              activeClassName="active"
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
