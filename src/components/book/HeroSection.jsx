import { motion } from "framer-motion";
import { useState } from "react";

const HeroSection = ({ search, setSearch, sectionVariant, selectedView, setSelectedView }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <motion.section
      className="text-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl py-10 sm:py-16 shadow-sm px-4"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-700 mb-3 sm:mb-4 leading-snug">
        Discover Your Next Favorite Book
      </h1>

      <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
        Explore thousands of titles and find stories that inspire you.
      </p>

      {/* Search + Dropdown Container */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-2 relative">
        {/* Search Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search books by title..."
          className="w-full sm:w-1/2 px-4 sm:px-5 py-3 rounded-xl sm:rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />

        {/* Search Button */}
        <button
          className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-xl sm:rounded-r-xl hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
        >
          Search
        </button>

        {/* Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-5 py-3 rounded-xl hover:bg-green-700 transition font-semibold text-sm sm:text-base"
          >
            {selectedView === "all" ? "All Books" : "Popular Books"} ▼
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-full sm:w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
              <button
                onClick={() => {
                  setSelectedView("all");
                  setIsDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-blue-50"
              >
                All Books
              </button>
              <button
                onClick={() => {
                  setSelectedView("popular");
                  setIsDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-blue-50"
              >
                Popular Books
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
