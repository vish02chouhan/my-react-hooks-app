import React, { useContext } from 'react';
import CartContext  from '../context/CartContext';

const Cart = () => {
    const { cartState } = useContext(CartContext);
    if (!cartState) {
      return <div>Loading...</div>;
    }
  
    // Calculate total
    const total = cartState.items.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div>
        <h2>Cart</h2>
        <ul className="cart-items">
          {cartState.items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartState.items.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} - ${item.price}
              </li>
            ))
          )}
        </ul>
        <p className="total">Total: ${total}</p>
      </div>
    );
  };
  

export default Cart;
