import { motion } from "framer-motion";

const LeftSideImage = ({ url }) => {
  return (
    <div className="relative w-full h-64 md:h-screen">
      {/* Full-width background image */}
      <img
        src={url}
        alt="Bookshelf"
        className="absolute inset-0 w-full h-full object-cover blur-[2px] md:blur-sm brightness-90"
      />

      {/* Dark overlay with centered text */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4 md:p-10">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-center"
        >
          Welcome to BookWorld 📚
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-base sm:text-lg md:text-xl max-w-xl drop-shadow-md"
        >
          Discover and shop your favorite books from thousands of titles.  
          Login or continue with Google/Apple to start reading today.
        </motion.p>
      </div>
    </div>
  );
};

export default LeftSideImage;
