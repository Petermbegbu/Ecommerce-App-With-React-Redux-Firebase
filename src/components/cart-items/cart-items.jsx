import React from "react";
import "./cart-items.css";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className="row outerDiv">
    <div className="col-4">
      <img className="cart-img" src={imageUrl} alt="item" />
    </div>
    <div className="col-8">
      <div>{name}</div>
      <div>
        ${price} x {quantity}
      </div>
    </div>
  </div>
);

export default CartItem;
