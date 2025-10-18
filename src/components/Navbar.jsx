import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
        📚 BookVerse
      </h1>

      <div className="flex items-center gap-4">
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Login
        </button>
        <button className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
          Register
        </button>
        <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
          <ShoppingCart size={18} /> View Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
