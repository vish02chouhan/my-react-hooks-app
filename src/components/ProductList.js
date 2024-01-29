import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const ProductList = () => {
    const { dispatch } = useContext(CartContext);
  
    // Placeholder products data
    const products = [
      { id: 1, name: 'Product 1', price: 100 },
      // ... other products
    ];
  
    const addToCart = (product) => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    };
  
    return (
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product">
            <span className="product-name">{product.name}</span>
            <span className="product-price">${product.price}</span>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
          </li>
        ))}
      </ul>
    );
  };
  

export default ProductList;
