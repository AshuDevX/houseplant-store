import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <header
      style={{
        padding: "1rem",
        background: "#a8e6cf",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>🪴 GreenLeaf</h2>
      <nav>
        <Link to="/products" style={{ marginRight: "20px" }}>
          Products
        </Link>
        <Link to="/cart">🛒 {totalCount}</Link>
      </nav>
    </header>
  );
};

export default Header;
