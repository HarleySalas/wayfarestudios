import React, { useEffect, useContext } from "react";
import throttle from "lodash/fp/throttle";

import { ScrollContext } from "../../../context/ScrollContext";

const Page = ({ children }) => {
  // //track window scroll height
  const [, setScrollHeight] = useContext(ScrollContext);

  const handleScroll = throttle(172, () => {
    setScrollHeight(window.scrollY);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return <div className="page">{children}</div>;
};

export default Page;
