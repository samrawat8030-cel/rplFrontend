import { motion } from "framer-motion";
import sponsor1 from "../assets/images/sponsor1.jpeg"; // 👉 replace with real logos
import sponsor2 from "../assets/images/sponsor2.jpeg";
import sponsor3 from "../assets/images/sponser3.jpeg";
import sponsor4 from "../assets/images/sponser4.jpeg";
import sponsor5 from "../assets/images/sponser5.jpeg";
import sponsor6 from "../assets/images/sponser6.jpeg";
import sponsor7 from "../assets/images/sponsor7.jpeg";
import sponsor8 from "../assets/images/sponsor8.jpeg";

export default function Sponsors() {
  const sponsors = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor6,
    sponsor7,
    sponsor8,
  ];

  return (
    <section id="sponsors" className="py-20 bg-white text-center px-4">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold mb-4"
      >
        Organizers and Support
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 mb-12"
      >
        The Tournament is backed by reputed partners like:
      </motion.p>

      {/* Sponsor Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center container mx-auto">
        {sponsors.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="max-h-30 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
