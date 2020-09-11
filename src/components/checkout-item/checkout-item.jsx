import React from "react";
import "./checkout-item.css";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart-action-creator";

const CheckoutItems = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <tr className="eachRow">
      <td>
        <img className="img" src={imageUrl} alt="item" />
      </td>
      <td>{name}</td>
      <td>
        <span className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        {quantity}
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </td>
      <td>{price}</td>
      <td>
        <span className="delete" onClick={() => clearItem(cartItem)}>
          X
        </span>
      </td>
    </tr>
  );
};

const mapdispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapdispatchToProps)(CheckoutItems);
