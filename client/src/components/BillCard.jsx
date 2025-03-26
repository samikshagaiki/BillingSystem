function BillCard({ bill }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{bill.category} Bill</h3>
        <ul className="mt-2">
          {bill.items.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item.name} - ₹{item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p className="mt-2 font-bold">Total: ₹{bill.total}</p>
      </div>
    );
  }
  
  export default BillCard;