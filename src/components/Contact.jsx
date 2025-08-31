import { motion } from "framer-motion";
import dsBhati from "../assets/images/phioto11.jpeg";
import boni from "../assets/images/boni.jpeg";
import ankit from "../assets/images/photo14.jpeg";
import kapil from "../assets/images/photo13.jpeg";

export default function Contact() {
  const contacts = [
    {
      name: "Dhingram Singh Bhati",
      role: "Chairman, Royal Maid & Royal Dairy | Founder",
      phone: "+91 9891305252",
      img: dsBhati,
    },
    {
      name: "Surender Singh Rawat",
      role: "Founder of TFG Sports | Director, RK Sports Complex",
      phone: "+91 9289535252",

      img: boni,
    },
    {
      name: "Ankit Bhardwaj",
      role: "Finance Director | Co-Founder",
      phone: "+91 9289545252",

      img: ankit,
    },
    {
      name: "Kapil Bhati",
      role: "Cricketer & Mentor | Co-Founder",
      phone: "+91 9818774142",

      img: kapil,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold mb-12 text-center"
      >
        Contact Us
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {contacts.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
            />
            <h4 className="text-lg font-semibold">{person.name}</h4>
            <p className="text-sm text-gray-600 mb-2">{person.role}</p>
            <p className="text-sm">📞 {person.phone}</p>
            <p className="text-sm">✉️ {person.email}</p>
          </motion.div>
        ))}
      </div>

      {/* Address Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-sm sm:text-base md:text-lg"
      >
        📍 <strong>SMVDK Sportsworld Pvt. Ltd</strong>, Sector 142, FNG Road,
        Noida
      </motion.div>
    </section>
  );
}
