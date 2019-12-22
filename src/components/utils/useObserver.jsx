import { useState, useEffect, useContext } from "react";

import { ScrollContext } from "../../context/ScrollContext";

const useObserver = ref => {
  const [observed, setObserved] = useState(false);
  const [scrollHeight] = useContext(ScrollContext);

  useEffect(() => {
    // let observePosition = window.innerHeight / 1.2 + scrollHeight;

    // if (observePosition >= ref.current.offsetTop && !observed) {
    //   setObserved(true);
    // }

    let objScreenTop = ref.current.getBoundingClientRect().top;
    let offset = window.innerHeight / 1.2;

    if (objScreenTop <= offset && !observed) {
      setObserved(true);
    }
  }, [scrollHeight, observed, ref]);

  return observed;
};

export default useObserver;
