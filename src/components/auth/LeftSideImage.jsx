import { motion } from "framer-motion";

const LeftSideImage = ({ url }) => {
  return (
    <div className="md:w-1/2 w-full relative hidden md:block">
      {/* Blurred background image */}
      <img
        src={url}
        alt="Bookshelf"
        className="h-full w-full object-cover blur-sm"
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-6">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg"
        >
          Welcome to BookWorld 📚
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-lg md:text-xl max-w-md drop-shadow-md"
        >
          Discover and shop your favorite books from thousands of titles. Login
          or continue with Google/Apple to start reading today.
        </motion.p>
      </div>
    </div>
  );
};

export default LeftSideImage;
