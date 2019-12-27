import React from "react";
import "./NotFound.scss";

import PageHeader from "../../PageHeader/PageHeader";

import HeroImg from "./assets/404-img.jpg";

import Button from "../../Button/Button";

const NotFound = () => {
  return (
    <div>
      <PageHeader
        img={HeroImg}
        alt="Lost In Antarctica"
        title="Error Code: 404"
        subtitle="Page Not Found"
      />
      <div className="container not-found__container">
        <h3 className="not-found__title">Return to the Home Page</h3>
        <Button btnText="Home Page" linkTo="/" btnStyle="primary" />
      </div>
    </div>
  );
};

export default NotFound;
