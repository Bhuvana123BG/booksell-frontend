import { motion } from "framer-motion";
import BookCard from "./BookCard";

const AllBooks = ({ books, cardVariant, sectionVariant }) => {
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-4 sm:px-6 md:px-10 py-8"
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 border-b-4 border-green-500 inline-block mx-auto pb-1">
        📚 All Books
      </h2>

      {/* Books Grid */}
      {books.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.05 }}
              className="flex justify-center"
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-8 text-base sm:text-lg">
          No books found.
        </p>
      )}
    </motion.section>
  );
};

export default AllBooks;
