import CartActionTypes from "./cart-action-types";

export const ToggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
