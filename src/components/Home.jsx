import { useEffect, useState } from "react";
import api from "./axiosConfig";
import HeroSection from "./book/HeroSection";
import PopularBooks from "./book/PopularBooks";
import AllBooks from "./book/AllBooks";

const Home = () => {
  const [search, setSearch] = useState("");
  const [popularBooks, setPopularBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [selectedView, setSelectedView] = useState("popular");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch popular books (public)
  const fetchPopularBooks = async () => {
    try {
      const response = await api.get("/api/popular-books");
      setPopularBooks(response.data);
    } catch (err) {
      console.error("Error fetching popular books:", err);
    }
  };

  // ✅ Fetch all books (requires login)
  const fetchBooks = async (searchText = "") => {
    try {
      const endpoint = searchText
        ? `/api/books?search=${encodeURIComponent(searchText)}`
        : "/api/books";
      const response = await api.get(endpoint);
      setAllBooks(response.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  // ✅ Initial load — only popular books first (no login required)
  useEffect(() => {
    const loadInitialData = async () => {
      await fetchPopularBooks();
      setLoading(false);
    };
    loadInitialData();
  }, []);

  // ✅ Fetch all books when needed (user logged in OR searches)
  useEffect(() => {
    if (search || selectedView === "all") {
      fetchBooks(search);
    }
  }, [search, selectedView]);

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

  // ✅ Filtering logic
  const filteredAllBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPopularBooks = popularBooks.filter((p) =>
    p.book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 space-y-12 bg-gray-50">
      <HeroSection
        search={search}
        setSearch={setSearch}
        sectionVariant={sectionVariant}
        selectedView={selectedView}
        setSelectedView={(view) => {
          setSelectedView(view);
          setSearch(""); // ✅ Clear search when dropdown changes
        }}
      />

      {/* ✅ Rendering logic */}
      {search ? (
        <AllBooks
          books={filteredAllBooks}
          cardVariant={cardVariant}
          sectionVariant={sectionVariant}
        />
      ) : selectedView === "popular" ? (
        <PopularBooks
          books={filteredPopularBooks}
          cardVariant={cardVariant}
          sectionVariant={sectionVariant}
        />
      ) : (
        <AllBooks
          books={allBooks}
          cardVariant={cardVariant}
          sectionVariant={sectionVariant}
        />
      )}
    </div>
  );
};

export default Home;
