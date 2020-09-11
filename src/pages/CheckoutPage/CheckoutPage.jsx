import React from "react";
import "./CheckoutPage.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { selectTotalPrice } from "../../redux/cart/cart-selectors";
import CheckoutItems from "../../components/checkout-item/checkout-item";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>DESCRIPTION</th>
          <th>QUALITY</th>
          <th>PRICE</th>
          <th>REMOVE</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          <CheckoutItems key={cartItem.id} cartItem={cartItem} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th>TOTAL:</th>
          <th>N{totalPrice}</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalPrice,
  });

export default connect(mapStateToProps)(CheckoutPage);
