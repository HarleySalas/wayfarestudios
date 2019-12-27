import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./NavbarLogo.scss";

const NavbarLogo = ({ navTop, navScroll }) => {
  return (
    <AniLink fade to="/" duration={0.24} className="navbar__top__logo">
      <span
        className={`navbar__logo__span ${navTop && "navtop"} ${navScroll &&
          "navscroll"}`}
      >
        Wayfare{" "}
      </span>
      <span
        className={`navbar__logo__span ${navTop && "navtop"} ${navScroll &&
          "navscroll"}`}
      >
        Studios
      </span>
    </AniLink>
  );
};

export default NavbarLogo;
