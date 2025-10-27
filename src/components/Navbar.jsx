import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Home } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-10 py-4 bg-white shadow-md sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-wide">
          <Link to="/">📚 BookVerse</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-4">
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
              >
                Register
              </Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <Link
                to="/cart"
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                <ShoppingCart size={18} /> View Cart
              </Link>

              {/* User Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  <User size={20} />
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <Link
                      to="/profile"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      👤 Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      📦 Orders
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-md flex flex-col items-center py-4 sm:hidden">
            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  className="block w-4/5 text-center py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block w-4/5 text-center py-2 mt-2 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <Link
                  to="/cart"
                  className="flex items-center justify-center gap-2 w-4/5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  <ShoppingCart size={18} /> View Cart
                </Link>
                <Link
                  to="/profile"
                  className="block w-4/5 text-center py-2 mt-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  👤 Profile
                </Link>
                <Link
                  to="/orders"
                  className="block w-4/5 text-center py-2 mt-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  📦 Orders
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="block w-4/5 text-center py-2 mt-2 rounded-lg text-red-600 hover:bg-red-50 transition"
                >
                  🚪 Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>

      {/* ✅ Bottom Navigation (Mobile Only) */}
      {isLoggedIn && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around py-2 sm:hidden z-50">
          <Link
            to="/"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <Home size={22} />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/cart"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <ShoppingCart size={22} />
            <span className="text-xs">Cart</span>
          </Link>
          <Link
            to="/orders"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            📦
            <span className="text-xs">Orders</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
