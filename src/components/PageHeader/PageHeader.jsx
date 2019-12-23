import React from "react";
import "./PageHeader.scss";

const PageHeader = ({ img, alt, title, subtitle }) => {
  return (
    <section className="page-header">
      <img className="page-header__background" src={img} alt={alt} />
      <div className="page-header__container">
        <h1 className="page-header__title">
          <span className="page-header__title__span">
            <span className="page-header__title__span__inner">{title}</span>
          </span>
        </h1>
        <span className="page-header__subtitle">{subtitle}</span>
      </div>
    </section>
  );
};

export default PageHeader;
