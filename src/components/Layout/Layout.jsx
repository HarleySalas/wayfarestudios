import React from "react";
import "./Layout.scss";

import "../../styles/base.scss";
import "../../styles/layout.scss";
import "../../styles/typography.scss";

import { ScrollProvider } from "../../context/ScrollContext";

import SEO from "./SEO/SEO";
import Navbar from "./Navbar/Navbar";
import Page from "./Page/Page";
import Footer from "./Footer/Footer";

const Layout = ({ children, title }) => {
  return (
    <ScrollProvider>
      <div className="Layout">
        <SEO title={title} />
        <Navbar />
        <Page>{children}</Page>
      </div>
      <Footer />
    </ScrollProvider>
  );
};

export default Layout;
