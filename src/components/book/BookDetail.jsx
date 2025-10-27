import { motion } from "framer-motion";
import api from "../axiosConfig";
import { useState } from "react";

const BookDetail = ({ setShowModal, book, cart }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const response = await api.post("/api/cart/add", {
        bookId: book.id,
        quantity: 1,
      });

      alert(response.data.message || "Book added to cart successfully!");
      setShowModal(false); // Close modal after adding
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add to cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-2 sm:px-4">
      <motion.div
        className="bg-white w-full sm:w-[90%] md:w-[600px] rounded-2xl p-4 sm:p-6 shadow-xl relative max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
          onClick={() => setShowModal(false)}
        >
          ×
        </button>

        {/* Book Image */}
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-52 sm:h-64 object-cover rounded-lg mb-4"
        />

        {/* Book Details */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 text-center sm:text-left">
          {book.title}
        </h2>
        <p className="text-gray-600 italic mb-3 text-center sm:text-left">
          by {book.author}
        </p>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
          {book.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-between text-gray-700 mb-4 text-sm sm:text-base gap-2">
          <p>
            <span className="font-semibold">ISBN:</span> {book.isbn}
          </p>
          <p>
            <span className="font-semibold">Stock:</span> {book.stockQuantity}
          </p>
        </div>

        {/* Price and Button */}
        <div className="text-center sm:text-right">
          <p className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
            ₹{book.price}
          </p>
          {!cart && (
            <button
              className={`${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition font-semibold w-full sm:w-auto`}
              onClick={handleAddToCart}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookDetail;
