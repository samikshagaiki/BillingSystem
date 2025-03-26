function InventoryItem({ item, image }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <img src={image} alt={item.name} className="h-16 w-16 object-cover mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-700">Category: {item.category}</p>
          <p className="text-gray-700">Price: ₹{item.price}</p>
          <p className="text-gray-700">Stock: {item.stock}</p>
        </div>
      </div>
    );
  }
  
  export default InventoryItem;