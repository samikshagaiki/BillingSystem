import BillCard from "../components/BillCard";

function Billing() {
  const sampleBill = {
    category: "Govigyan",
    items: [{ name: "Product A", price: 100, quantity: 2 }],
    total: 200,
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Billing</h2>
      <BillCard bill={sampleBill} />
    </div>
  );
}

export default Billing;