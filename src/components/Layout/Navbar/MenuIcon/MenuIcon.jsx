import React from "react";
import "./MenuIcon.scss";

import { useToggle } from "../../../utils";

import MenuModal from "../MenuModal/MenuModal";

const MenuIcon = ({ navTop, navScroll }) => {
  const [menuOpen, toggle] = useToggle(false);

  return (
    <>
      <button
        className={`menu-icon ${navTop && "navtop"} ${navScroll &&
          "navscroll"} ${menuOpen && "active"}`}
        onClick={toggle}
      >
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line"></span>
      </button>
      {menuOpen && <MenuModal />}
    </>
  );
};

export default MenuIcon;
