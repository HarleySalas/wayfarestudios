import React from "react";
import "./ServiceChannels.scss";

const ServiceChannels = ({ channels }) => {
  return (
    <div className="service-channels">
      <div className="container service-channels__container">
        <ul className="service-channels__ul">
          {channels.map((service, index) => (
            <li className="service-channels__li" key={index}>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceChannels;
