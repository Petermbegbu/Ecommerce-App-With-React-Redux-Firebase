import React from "react";
import "./cart-icon.css";
import { connect } from "react-redux";
import { ToggleCart } from "../../redux/cart/cart-action-creator";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import { selectItemCount } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon-div" onClick={toggleCart}>
    <ShoppingIcon className="cart-icon" />
    <span className="count">{itemCount}</span>
  </div>
);

// const mapStateToProps = (state) => ({
//   itemCount: selectItemCount(state),
// });

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(ToggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
