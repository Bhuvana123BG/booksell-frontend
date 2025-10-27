import { motion } from "framer-motion";
import BookCard from "./BookCard";

const PopularBooks = ({ books, cardVariant, sectionVariant }) => {
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-4 sm:px-6 md:px-10 py-8 sm:py-12"
    >
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-gray-800 border-l-4 border-blue-600 pl-3">
        🌟 Popular Books
      </h2>

      {/* Books Grid */}
      {books.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {books.map((p, i) => (
            <motion.div
              key={p.id}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.08 }}
            >
              <BookCard book={p.book} />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center text-sm sm:text-base mt-6">
          No popular books found.
        </p>
      )}
    </motion.section>
  );
};

export default PopularBooks;
