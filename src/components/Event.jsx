import { motion } from "framer-motion";

export default function UpcomingEvents() {
  const events = [
    { title: "Summer League 2025", date: "Starts from June 10, 2025" },
    { title: "Corporate Cricket Cup", date: "August 2025" },
    { title: "Night Premier League", date: "December 2025" },
  ];

  return (
    <section id="upcoming" className="py-20 bg-gray-100 text-center">
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold mb-6"
      >
        Upcoming Events
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto px-4">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer"
          >
            <h4 className="text-lg sm:text-xl font-semibold">{event.title}</h4>
            <p className="mt-2 text-sm sm:text-base">{event.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
