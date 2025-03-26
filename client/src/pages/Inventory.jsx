import InventoryItem from "../components/InventoryItem";
import placeholder from "../assets/product-placeholder.jpg";

function Inventory() {
  const sampleItem = { name: "Product A", category: "Govigyan", price: 100, stock: 10 };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Inventory</h2>
      <InventoryItem item={sampleItem} image={placeholder} />
    </div>
  );
}

export default Inventory;