import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/photo5.jpeg";

export default function Hero() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide"
        >
          RPL NCR Gramin League 2025
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl"
        >
          Bigger, Better & Stronger! 16 Franchises • ₹2 Lakh Player Purse •
          Professional Broadcast • Huge Rewards
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRegister}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-400 transition shadow-xl"
        >
          Register Now
        </motion.button>
      </div>
    </section>
  );
}
