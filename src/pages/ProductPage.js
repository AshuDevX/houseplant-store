import PlantCard from "../components/PlantCard";
import plantData from "../assets/plants";

const ProductPage = () => {
  const categories = ["Succulents", "Ferns", "Indoor"];

  return (
    <div style={{ padding: "2rem" }}>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {plantData
              .filter((p) => p.category === category)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
