import logo from "../assets/logo.png"; // Reference to logo.png

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Kendra Logo" className="h-10 mr-2" />
        <h1 className="text-white text-xl font-bold">Kendra Billing</h1>
      </div>
      <div className="space-x-4">
        <a href="/" className="text-white hover:underline">Home</a>
        <a href="/billing" className="text-white hover:underline">Billing</a>
        <a href="/inventory" className="text-white hover:underline">Inventory</a>
      </div>
    </nav>
  );
}

export default Navbar;