import React, { useState, useEffect, useContext } from "react";
import "./NavbarScroll.scss";
import NavbarLogo from "../NavbarLogo/NavbarLogo";
import MenuIcon from "../MenuIcon/MenuIcon";

import { ScrollContext } from "../../../../context/ScrollContext";

const NavbarScroll = () => {
  const [scrollHeight] = useContext(ScrollContext);
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const fiftyVh = window.innerHeight / 2;

    if (scrollHeight >= fiftyVh && !scrollNav) {
      setScrollNav(true);
    } else if (scrollHeight < fiftyVh && scrollNav) {
      setScrollNav(false);
    }
  }, [scrollHeight, scrollNav]);

  return (
    <nav className={`navbar-scroll ${scrollNav && "active"}`}>
      <div className="container navbar-scroll__container">
        <NavbarLogo navScroll />
        <MenuIcon />
      </div>
    </nav>
  );
};

export default NavbarScroll;
