import { motion } from "framer-motion";
import dsBhati from "../assets/images/phioto11.jpeg";
import boni from "../assets/images/boni.jpeg";
import ankit from "../assets/images/photo14.jpeg";
import kapil from "../assets/images/photo13.jpeg";

export default function About() {
  const founders = [
    {
      name: "D.S. Bhati",
      role: "Chairman of Royal Maid & Royal Dairy",
      description: `From transport to real estate and FMCG, his entrepreneurial journey reflects versatility and vision. 
        Deeply committed to community development and sports, he spearheaded the RK Sports Complex, built as both 
        a sports hub and a center for healthier lifestyles. Under his leadership, SMVDK Sportsworld continues to 
        inspire sports growth and community engagement.`,
      image: dsBhati, // 👉 replace with real image path
    },
    {
      name: "Surender Singh Rawat",
      role: "Founder of TFG Sports",
      description: `A visionary entrepreneur whose journey began with small cricket tournaments in Delhi NCR and grew to 
        international roles like managing the Dambulla Vikings in the Lanka Premier League 2020. 
        As Director of Events at RK Sports Complex and promoter of SMVDK Sportsworld Pvt. Ltd., 
        he continues to drive the game forward.`,
      image: boni, // 👉 replace with real image path
    },
    {
      name: "Ankit Bhardwaj",
      role: "Finance Strategist",
      description: `A finance maestro with a vision to revolutionize sports infrastructure. His expertise ensures that 
        SMVDK Sportsworld is a sustainable enterprise, focusing on building state-of-the-art facilities that cater to 
        both grassroots talents and professional athletes. Ankit's passion lies in creating environments where sports 
        enthusiasts can thrive and aspire.`,
      image: ankit, // 👉 replace with real image path
    },
    {
      name: "Kapil Bhati",
      role: "Cricketer & Mentor",
      description: `An accomplished cricketer whose deep-rooted connection with the game fuels his desire to give back to 
        the sports community. As one of the promoters of SMVDK Sportsworld, Kapil channels his on-field experience to 
        mentor young athletes, creating pathways for them to transition from local grounds to international arenas.`,
      image: kapil, // 👉 replace with real image path
    },
  ];

  return (
    <section id="about" className="py-20 container mx-auto px-4">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        About Us
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
