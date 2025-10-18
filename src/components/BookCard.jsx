import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  return (
    <motion.div
      className="bg-white w-64 h-[420px] rounded-2xl p-4 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between border border-gray-100"
      whileHover={{ scale: 1.05 }}
    >
      {/* Book Image */}
      <div className="flex justify-center">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>

      {/* Book Details */}
      <div className="mt-4 text-center flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {book.title}
          </h2>
          <p className="text-gray-600 text-sm italic mt-1">{book.author}</p>
        </div>
        <div className="mt-2">
          <p className="text-blue-700 font-bold text-lg">₹{book.price}</p>
          <button className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
