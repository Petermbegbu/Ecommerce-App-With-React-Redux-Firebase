import React from "react";
import "./cart-icon.css";
import { connect } from "react-redux";
import { ToggleCart } from "../../redux/cart/cart-action-creator";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon-div" onClick={toggleCart}>
    <ShoppingIcon className="cart-icon" />
    <span className="count">{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
    0
  ),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(ToggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
