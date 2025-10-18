import { useState } from "react";
import CartItemCard from "./CartItemCard";
import { cartItems as initialCartItems } from "../data/books";

const Cart = () => {
  // 🛍️ Initialize cart from imported data
  const [cartItems, setCartItems] = useState(initialCartItems);

  // ➕ Increase quantity
  const handleIncrease = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ➖ Decrease quantity
  const handleDecrease = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ❌ Remove item
  const handleRemove = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // 💰 Calculate total
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.book.price * item.quantity,
    0
  );

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            ))}
          </div>

          {/* 🧾 Order Summary */}
          <div className="flex justify-between items-center mt-8 border-t pt-4">
            <div className="text-lg font-semibold text-gray-700">
              Total Items: {cartItems.length}
            </div>
            <div className="text-xl font-bold text-blue-700">
              Total: ₹{totalPrice.toFixed(2)}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
