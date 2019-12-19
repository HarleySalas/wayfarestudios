import React from "react";
import { Link } from "gatsby";
import "./NavbarLogo.scss";

const NavbarLogo = () => {
  return (
    <Link to="/" className="navbar__top__logo">
      <span className="navbar__logo__span">Wayfare </span>
      <span className="navbar__logo__span">Studios</span>
    </Link>
  );
};

export default NavbarLogo;
