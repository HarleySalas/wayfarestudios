import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./NavbarLogo.scss";

import Logo from "./assets/logo-landscape.svg";

const NavbarLogo = ({ navTop, navScroll }) => {
  return (
    <AniLink fade to="/" duration={0.24} className="navbar__top__logo">
      <Logo
        className={`navbar__logo ${navTop && "navtop"} ${navScroll &&
          "navscroll"}`}
      />
    </AniLink>
  );
};

export default NavbarLogo;
