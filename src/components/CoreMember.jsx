import { motion } from "framer-motion";
import dsBhati from "../assets/images/phioto11.jpeg";
import core1 from "../assets/images/core1.jpeg";
import core2 from "../assets/images/core2.jpeg";
import core3 from "../assets/images/core3.jpeg";
import core4 from "../assets/images/core4.jpeg";

export default function CoreMember() {
  const founders = [
    {
      name: "Ishwar Bhati",
      role: "Operations Head",
      image: core1, // 👉 replace with real image path
    },
    {
      name: "Sangeet Bhati",
      role: "Marketing Head",
      image: core2, // 👉 replace with real image path
    },
    {
      name: "Pramod Bhati",
      role: "Law and Consultant",
      image: core3, // 👉 replace with real image path
    },
    {
      name: "Raj Singh",
      role: "Managening Head",
      image: core4, // 👉 replace with real image path
    },
  ];

  return (
    <section id="core" className="container mx-auto px-4">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        Our Core Members
      </motion.h3>

      {/* Founders Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-yellow-400/30 transition duration-300"
          >
            {/* Founder Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-yellow-400">
              <img
                src={founder.image}
                alt={founder.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Founder Info */}
            <h4 className="text-xl font-bold text-yellow-400">
              {founder.name}
            </h4>
            <p className="text-sm text-gray-400 mb-3">{founder.role}</p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {founder.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
