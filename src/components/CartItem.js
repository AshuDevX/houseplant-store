import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "80px", marginRight: "1rem" }}
      />
      <div style={{ flex: 1 }}>
        <h4>{item.name}</h4>
        <p>
          ₹{item.price} x {item.quantity}
        </p>
        <div>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
