import React from "react";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby";
import "./NavbarLogo.scss";

import Logo from "./assets/logo-landscape.svg";

const NavbarLogo = ({ navTop, navScroll }) => {
  return (
    <Link to="/" className="navbar__top__logo">
      <Logo
        className={`navbar__logo ${navTop && "navtop"} ${navScroll &&
          "navscroll"}`}
      />
    </Link>
  );
};

export default NavbarLogo;
