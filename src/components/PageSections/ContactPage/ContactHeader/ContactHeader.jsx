import React from "react";

import PageHeader from "../../../PageHeader/PageHeader";

import ContactImg from "./assets/contact-hero.jpg";

const ContactHeader = () => {
  return (
    <PageHeader
      img={ContactImg}
      alt="Plane Flying Over City"
      title="Contact"
      subtitle="Let's Build Your Brand"
    />
  );
};

export default ContactHeader;
