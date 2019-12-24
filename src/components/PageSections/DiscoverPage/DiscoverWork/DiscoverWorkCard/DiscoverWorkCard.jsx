import React, { useRef } from "react";
import "./DiscoverWorkCard.scss";

import { useObserver } from "../../../../utils";

const DiscoverWorkCard = ({ img, alt, title, content }) => {
  const imgRef = useRef(null);
  const imgAnimated = useObserver(imgRef);

  const contentRef = useRef(null);
  const contentAnimated = useObserver(contentRef);

  return (
    <div className="discover-work__card">
      <div
        className={`discover-work__card__img-wrapper ${imgAnimated &&
          "active"}`}
        ref={imgRef}
      >
        <img src={img} alt={alt} className="discover-work__card__img" />
      </div>
      <h3
        className={`discover-work__card__title ${contentAnimated && "active"}`}
        ref={contentRef}
      >
        {title}
      </h3>
      <p
        className={`discover-work__card__content ${contentAnimated &&
          "active"}`}
      >
        {content}
      </p>
    </div>
  );
};

export default DiscoverWorkCard;
