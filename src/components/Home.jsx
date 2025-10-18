import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookCard from "./BookCard";
import { booksRes, popularRes } from "../data/books";

const Home = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // const [booksRes, popularRes] = await Promise.all([
        //   fetch("http://localhost:8080/books"),
        //   fetch("http://localhost:8080/popular-books"),
        // ]);

        // const booksData = await booksRes.json();
        // const popularData = await popularRes.json();

        const booksData = booksRes;
        const popularData = popularRes;

        setBooks(booksData);
        setPopularBooks(popularData);
      } catch (err) {
        console.error("Error fetching books:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPopularBooks = popularBooks.filter((p) =>
    p.book.title.toLowerCase().includes(search.toLowerCase())
  );

  // Motion variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading books...
      </div>
    );
  }

  return (
    <div className="p-8 space-y-12 bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="text-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl py-16 shadow-sm"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Discover Your Next Favorite Book
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Explore thousands of titles and find stories that inspire you.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books by title..."
            className="w-1/2 px-5 py-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-xl hover:bg-blue-700 transition font-semibold">
            Search
          </button>
        </div>
      </motion.section>

      {/* Popular Books */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-blue-600 pl-3">
          🌟 Popular Books
        </h2>
        {filteredPopularBooks.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredPopularBooks.map((p, i) => (
              <motion.div
                key={p.id}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.1 }}
              >
                <BookCard book={p.book} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No popular books found.</p>
        )}
      </motion.section>

      {/* All Books */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-green-600 pl-3">
          📖 All Books
        </h2>
        {filteredBooks.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredBooks.map((book, i) => (
              <motion.div
                key={book.id}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.05 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No books found.</p>
        )}
      </motion.section>
    </div>
  );
};

export default Home;
