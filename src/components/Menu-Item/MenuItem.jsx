import React from "react";
import "./MenuItem.css";
import { withRouter } from "react-router-dom";

const MenuItem = ({
  title,
  imageUrl,
  class1,
  class2,
  class3,
  history,
  match,
  linkUrl
}) => (
  <div className={`${class1} my-1`}>
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={class2}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "100% 100%"
      }}
    >
      <div className={class3}>
        <h3>{title}</h3>
        <span>SHOP NOW</span>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
