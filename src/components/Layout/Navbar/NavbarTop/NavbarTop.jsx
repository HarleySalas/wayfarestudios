import React from "react";
import { Link } from "gatsby";
import "./NavbarTop.scss";

import NavbarLogo from "../NavbarLogo/NavbarLogo";

const NavbarTop = () => {
  return (
    <div className="navbar__top">
      <div className="container navbar__top__container">
        <NavbarLogo />

        <ul className="navbar__top__ul">
          <li className="navbar__top__li">
            <Link to="/discover" className="navbar__top__link">
              Discover
            </Link>
          </li>
          <li className="navbar__top__li">
            <Link to="/services" className="navbar__top__link">
              Services
            </Link>
          </li>
          <li className="navbar__top__li">
            <Link to="/case-studies" className="navbar__top__link">
              Case Studies
            </Link>
          </li>
          <li className="navbar__top__li">
            <Link to="/contact" className="navbar__top__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
