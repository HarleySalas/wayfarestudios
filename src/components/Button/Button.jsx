import React from "react";
import { Link } from "gatsby";

import "./Button.scss";

const Button = props => {
  const btnStyle = `
  button
  ${props.btnStyle === "primary" && "button--primary"}
  ${props.btnStyle === "black" && "button--black"}
  ${props.btnStyle === "white" && "button--white"}
  ${!props.btnSize && "button--md"}
  ${props.rounded && "button--rounded"}
  ${props.addClass && props.addClass}
  `;

  const btnElement = (
    <button
      className={btnStyle}
      onClick={props.onClick}
      ref={props.btnRef}
      data-text={props.btnText}
    >
      {/* {props.btnText} */}
    </button>
  );

  if (props.linkTo) {
    return <Link to={props.linkTo}>{btnElement}</Link>;
  }

  return btnElement;
};

export default Button;
