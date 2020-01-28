import React from "react";
import Img from "gatsby-image";
import "./PageHeader.scss";

const PageHeader = ({ img, alt, title, subtitle }) => {
  return (
    <section className="page-header">
      <div className="page-header__background__backdrop"></div>
      {/* {img && <img className="page-header__background" src={img} alt={alt} />} */}
      {img && (
        <Img
          fluid={img}
          fadeIn={true}
          durationFadeIn={500}
          placeholderStyle={{ opacity: 0 }}
          draggable={false}
          alt={alt}
          className="page-header__img-wrapper"
          imgStyle={{
            opacity: 0.72,
            animation:
              "fadeIn 2.24s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
            userSelect: "none",
          }}
        />
      )}
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
