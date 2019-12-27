import React from "react";
import NavbarTop from "./NavbarTop/NavbarTop";
import NavbarScroll from "./NavbarScroll/NavbarScroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarTop />
      <NavbarScroll />
    </nav>
  );
};

export default Navbar;
