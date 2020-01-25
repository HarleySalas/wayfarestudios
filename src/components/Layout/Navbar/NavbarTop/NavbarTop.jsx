import React from "react";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby";
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
            <Link
              // fade
              to="/discover"
              // duration={0.24}
              className="navbar__top__link"
              activeClassName="active"
              data-text="Discover"
            >
              Discover
            </Link>
          </li>
          <li className="navbar__top__li">
            <Link
              // fade
              to="/services"
              // duration={0.24}
              className="navbar__top__link"
              activeClassName="active"
              data-text="Services"
            >
              Services
            </Link>
          </li>
          <li className="navbar__top__li">
            <Link
              // fade
              to="/cases"
              // duration={0.24}
              className="navbar__top__link"
              activeClassName="active"
              data-text="Case Studies"
            >
              Case Studies
            </Link>
          </li>
          <li className="navbar__top__li">
            <Link
              // fade
              to="/contact"
              // duration={0.24}
              className="navbar__top__link"
              activeClassName="active"
              data-text="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
