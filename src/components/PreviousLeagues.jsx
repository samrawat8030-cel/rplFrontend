import { motion } from "framer-motion";
import photo1 from "../assets/images/photo1.jpeg";
import photo2 from "../assets/images/photo2.jpeg";
import photo3 from "../assets/images/photo4.jpeg";

export default function PreviousLeagues() {
  const images = [photo1, photo2, photo3];

  return (
    <section id="previous" className="py-20 container mx-auto px-4 text-center">
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold mb-6"
      >
        Previous League
      </motion.h3>

      <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
        Our 64-team tournament was a grand success with{" "}
        <strong>
          ₹1,51,000/- Winner Prize, Runner-up, ₹71,000/- Third Place ₹51,000/-
          Fourth Place ₹31,000/-
        </strong>
        . Over <strong>300+ hours of live broadcast</strong> with 6 cameras,
        DRS, and national reach!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`league-${idx}`}
            className="rounded-xl shadow-lg w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </section>
  );
}
