import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919289535252"; // 👉 Replace with your WhatsApp number
  const message = "Hello! I'm interested in RPL NCR Gramin League."; // default text

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
