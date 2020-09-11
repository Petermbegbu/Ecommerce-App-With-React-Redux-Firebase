import React from "react";
import "./CartDropdown.css";
import CustomButton from "../Custom-Button/CustomButton";
import CartItem from "../cart-items/cart-items";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { ToggleCart } from "../../redux/cart/cart-action-creator";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="emptyMessage">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(ToggleCart());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
