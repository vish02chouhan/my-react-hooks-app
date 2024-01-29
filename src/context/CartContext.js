import React, { createContext, useReducer } from 'react';

const CartContext = createContext({
    cartState: { items: [] },
    dispatch: () => {}
  });
  

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      // other cases...
      default:
        return state;
    }
  };
  

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
