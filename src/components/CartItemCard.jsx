import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const CartItemCard = ({ item, onRemove }) => {
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
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">
            {book.description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-3">
          <p className="text-blue-700 font-bold text-lg">
            ₹{book.price} × {quantity}
          </p>
          <p className="text-gray-700 font-semibold">
            Total: ₹{(book.price * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        <Trash2 size={20} />
      </button>
    </motion.div>
  );
};

export default CartItemCard;
