import React from "react";
import { CartContext } from "../Context/CartContext.js";
import Product from "./Product.js";

function CartList() {
  const { cartProducts } = React.useContext(CartContext);
  return (
    <div>
      <h1>Shopping Chart</h1>
      {cartProducts.map((cartProduct) => (
        <Product {...cartProduct} />
      ))}
    </div>
  );
}

export default CartList;
