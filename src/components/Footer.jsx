import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-6 bg-black text-white text-center text-sm sm:text-base px-2"
    >
      <p>
        &copy; {new Date().getFullYear()} RPL Cricket League. All rights
        reserved.
      </p>
    </motion.footer>
  );
}
