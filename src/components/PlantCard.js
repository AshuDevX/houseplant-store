import React from "react";

const PlantCard = ({ plant, onAddToCart, isDisabled }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        width: "200px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={plant.image}
        alt={plant.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>
      <button
        onClick={() => onAddToCart && onAddToCart(plant)}
        disabled={isDisabled}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: isDisabled ? "#aaa" : "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
      >
        {isDisabled ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default PlantCard;
