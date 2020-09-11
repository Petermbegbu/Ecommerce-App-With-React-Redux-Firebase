//A function for increasing the quantity of items in cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (cartItemExist) {
    const newCartItem = cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return newCartItem;
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

//A function for decreasing the quantity of items in cart
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    const filteredCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToRemove.id
    );
    return filteredCartItems;
  } else {
    const cartItemQtyreduced = cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    return cartItemQtyreduced;
  }
};
