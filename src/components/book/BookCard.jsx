import { motion } from "framer-motion";
import { useState } from "react";
import BookDetail from "./BookDetail";
import api from "../axiosConfig";

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setLoading(true);
    try {
      const response = await api.post("/api/cart/add", {
        bookId: book.id,
        quantity: 1,
      });
      alert(response.data.message || "Book added to cart successfully!");
    } catch (err) {
      console.error("Error adding to cart:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Book Card */}
      <motion.div
        className="bg-white w-full sm:w-64 md:w-72 lg:w-64 h-auto rounded-2xl p-4 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between border border-gray-100 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        onClick={() => setShowModal(true)}
      >
        {/* Book Image */}
        <div className="flex justify-center">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-52 sm:h-56 md:h-60 object-cover rounded-lg"
          />
        </div>

        {/* Book Details */}
        <div className="mt-3 text-center flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
              {book.title}
            </h2>
            <p className="text-gray-600 text-sm italic mt-1">{book.author}</p>
          </div>

          <div className="mt-3">
            <p className="text-blue-700 font-bold text-lg sm:text-xl">₹{book.price}</p>
            <button
              className={`mt-3 w-full ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition font-semibold text-sm sm:text-base`}
              onClick={handleAddToCart}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && <BookDetail setShowModal={setShowModal} book={book} />}
    </>
  );
};

export default BookCard;
