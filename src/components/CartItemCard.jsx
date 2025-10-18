import { motion } from "framer-motion";
import { Trash2, Plus, Minus } from "lucide-react";

const CartItemCard = ({ item, onIncrease, onDecrease, onRemove }) => {
  const { book, quantity } = item;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 flex gap-4 hover:shadow-lg transition-all"
      whileHover={{ scale: 1.02 }}
    >
      {/* Book Image */}
      <div className="w-28 h-36 flex-shrink-0">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
          <p className="text-gray-600 text-sm italic">{book.author}</p>
          <p className="text-gray-700 font-semibold mt-1">₹{book.price}</p>
        </div>

        <div className="flex justify-between items-center mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onDecrease(item.id)}
              className="bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition"
            >
              <Minus size={16} />
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => onIncrease(item.id)}
              className="bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Total Price */}
          <p className="text-gray-700 font-semibold">
            ₹{(book.price * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition self-start"
      >
        <Trash2 size={20} />
      </button>
    </motion.div>
  );
};

export default CartItemCard;
