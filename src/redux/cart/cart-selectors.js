import { createSelector } from "reselect";

//This gets the redux state from the rootReducer
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectItemCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
    0
  )
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQty, cartItem) =>
      accumulatedQty + cartItem.quantity * cartItem.price,
    0
  )
);
