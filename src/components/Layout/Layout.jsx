import React from "react";
import "./Layout.scss";

import "../../styles/base.scss";
import "../../styles/layout.scss";
import "../../styles/typography.scss";

import { ScrollProvider } from "../../context/ScrollContext";

import SEO from "./SEO/SEO";
import Page from "./Page/Page";

const Layout = ({ children, title }) => {
  return (
    <ScrollProvider>
      <div className="Layout">
        <SEO title={title} />
        <Page>{children}</Page>
      </div>
    </ScrollProvider>
  );
};

export default Layout;
