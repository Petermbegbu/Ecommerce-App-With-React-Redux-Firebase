import React from "react";
import "./CustomButton.css";

const CustomButton = ({ children, addToCartBtn, ...otherProps }) => (
  <button
    className={`${addToCartBtn ? "addToCartBtn" : "button"}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
