import React from "react";
import "./Layout.scss";

import { ScrollProvider } from "../../context/ScrollContext";

import SEO from "./SEO/SEO";
import Navbar from "./Navbar/Navbar";
import Page from "./Page/Page";
import CustomerChat from "./CustomerChat/CustomerChat";
import Footer from "./Footer/Footer";

const Layout = ({ children, title }) => {
  return (
    <ScrollProvider>
      <div className="Layout">
        <SEO title={title} />
        <Navbar />
        <Page>{children}</Page>
        <CustomerChat />
      </div>
      <Footer />
    </ScrollProvider>
  );
};

export default Layout;
