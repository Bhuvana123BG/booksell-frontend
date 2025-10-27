import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItemCard from "./CartItemCard";
import api from "../axiosConfig";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // 🔹 Fetch cart items
  const fetchCart = async () => {
    try {
      const response = await api.get("/api/cart");
      setCartItems(response.data);
    } catch (err) {
      navigate("/login");
      console.error("Error fetching cart:", err);
    }
  };

  // 🔹 Increase quantity
  const handleIncrease = (itemId, quantity) =>
    updateQuantity(itemId, quantity + 1);

  // 🔹 Decrease quantity
  const handleDecrease = (itemId, quantity) => {
    if (quantity > 1) updateQuantity(itemId, quantity - 1);
  };

  // 🔹 Update quantity
  const updateQuantity = async (itemId, newQuantity) => {
    try {
      await api.put(`/api/cart/update/${itemId}`, { quantity: newQuantity });
      fetchCart();
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  // 🔹 Remove item
  const handleRemove = async (itemId) => {
    try {
      await api.delete(`/api/cart/remove/${itemId}`);
      fetchCart();
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  // 🔹 Checkout
  const checkOut = async () => {
    try {
      await api.post(`/api/orders/checkout`);
      alert("Successfully ordered items!");
      fetchCart();
    } catch (err) {
      console.error("Error during checkout:", err);
    }
  };

  // 💰 Calculate total
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.book.price * item.quantity,
    0
  );

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center sm:text-left">
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg text-center">
          Your cart is empty.
        </p>
      ) : (
        <>
          {/* 🧺 Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onIncrease={() => handleIncrease(item.id, item.quantity)}
                onDecrease={() => handleDecrease(item.id, item.quantity)}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>

          {/* 🧾 Order Summary */}
          <div className="mt-8 border-t pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <div className="text-lg sm:text-xl font-semibold text-gray-700">
              Total Items: {cartItems.length}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-blue-700">
              Total: ₹{totalPrice.toFixed(2)}
            </div>
          </div>

          {/* ✅ Checkout Button */}
          <div className="flex justify-center sm:justify-end mt-6">
            <button
              className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              onClick={checkOut}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
