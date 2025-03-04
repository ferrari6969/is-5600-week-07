import React from 'react';
import { useCart } from '../state/CartProvider';  // ✅ Use the custom hook

export default function OrderButton({ product }) {
  const { addToCart } = useCart();  // ✅ Now using the correct hook

  const handleClick = () => {
    console.log("Adding to cart", product);
    addToCart(product);
  };

  return (
    <button className="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black" onClick={handleClick}>
      Add to Cart
    </button>
  );
}
