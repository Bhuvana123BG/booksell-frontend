import { motion } from "framer-motion";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";
import BookDetail from "../book/BookDetail";

const CartItemCard = ({ item, onIncrease, onDecrease, onRemove }) => {
  const { book, quantity } = item;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl shadow-md p-4 sm:p-5 border border-gray-100 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition-all"
        whileHover={{ scale: 1.02 }}
        onClick={() => setShowModal(true)}
      >
        {/* Book Image */}
        <div className="w-full sm:w-28 h-44 sm:h-36 mx-auto sm:mx-0 flex-shrink-0">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col justify-between flex-1 text-center sm:text-left">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
              {book.title}
            </h2>
            <p className="text-gray-600 text-sm italic">{book.author}</p>
            <p className="text-gray-700 font-semibold mt-2 text-base">
              ₹{book.price}
            </p>
          </div>

          {/* Quantity & Price Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 sm:gap-0">
            {/* Quantity Controls */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDecrease(item.id);
                }}
                className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
              >
                <Minus size={16} />
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIncrease(item.id);
                }}
                className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Total Price */}
            <p className="text-gray-700 font-semibold text-base sm:text-lg">
              ₹{(book.price * quantity).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Remove Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(item.id);
          }}
          className="absolute sm:static top-3 right-3 text-red-500 hover:text-red-700 transition"
        >
          <Trash2 size={20} />
        </button>
      </motion.div>

      {showModal && (
        <BookDetail setShowModal={setShowModal} book={book} cart={true} />
      )}
    </>
  );
};

export default CartItemCard;
