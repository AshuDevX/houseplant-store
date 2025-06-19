import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            margin: "1rem 0",
          }}
        >
          <img src={item.image} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button
            onClick={() => dispatch(decrement(item.id))}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

      <button onClick={() => alert("Checkout Coming Soon")}>Checkout</button>
    </div>
  );
};

export default CartPage;
