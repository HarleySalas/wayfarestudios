import { useState, useEffect } from "react";

const useLocationPath = () => {
  const [path, setPath] = useState(null);

  const listenToPopstate = () => {
    let winPath = window.location.pathname;
    setPath(winPath);
  };

  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);

    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);

  return path;
};

export default useLocationPath;
