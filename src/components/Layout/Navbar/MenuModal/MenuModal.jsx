import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import "./MenuModal.scss";

const MenuModal = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    disableBodyScroll(modalRef.current);

    return () => clearAllBodyScrollLocks();
  }, []);

  return (
    <div className="menu-modal__wrapper">
      <nav className="menu-modal" ref={modalRef}>
        <ul className="menu-modal__ul">
          <li className="menu-modal__li">
            <Link
              to="/discover"
              className="menu-modal__link"
              activeClassName="active"
            >
              Discover
            </Link>
          </li>
          <li className="menu-modal__li">
            <Link
              to="/services"
              className="menu-modal__link"
              activeClassName="active"
            >
              Services
            </Link>
          </li>
          <li className="menu-modal__li">
            <Link
              to="/cases"
              className="menu-modal__link"
              activeClassName="active"
            >
              Case Studies
            </Link>
          </li>
          <li className="menu-modal__li">
            <Link
              to="/contact"
              className="menu-modal__link"
              activeClassName="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuModal;
