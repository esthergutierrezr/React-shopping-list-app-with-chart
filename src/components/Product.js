import React from "react";
import { CartContext } from "../Context/CartContext";

function Product(props) {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.price}</p>
      <p>{props.category}</p>
      <p>{props.description}</p>
      <img src={props.image} alt="image" />
      {props.addProductToCart && (
        <button onClick={() => addToCart(props)}>Add to Cart</button>
      )}
      {props.removeProductFromCart && (
        <button onClick={() => removeFromCart(props)}>Remove from Cart</button>
      )}
    </div>
  );
}

export default Product;
