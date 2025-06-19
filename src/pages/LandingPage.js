import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/plant-bg.jpg")',
        height: "100vh",
        backgroundSize: "cover",
        color: "white",
        padding: "2rem",
      }}
    >
      <h1>Welcome to GreenLeaf 🌿</h1>
      <p>Your go-to place for beautiful houseplants delivered to your door.</p>
      <Link to="/products">
        <button style={{ padding: "1rem", marginTop: "1rem" }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
