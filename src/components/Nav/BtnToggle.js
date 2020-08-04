import React from "react";

export default (props) => {
  return (
    <ul className="btn-mobile-toggle" onClick={props.onClick} role="button">
      <li></li>
      <li></li>
    </ul>
  );
};
