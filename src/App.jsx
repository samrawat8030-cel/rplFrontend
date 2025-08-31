import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PreviousLeagues from "./components/PreviousLeagues";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UpcomingEvents from "./components/UpComingEvents";
import Register from "./components/Register";
import Payment from "./components/Payment";
import WhatsAppButton from "./components/Whatsapp";
import Sponsors from "./components/Sponsors";
import CoreMember from "./components/CoreMember";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* ✅ Navbar stays at top */}
        <Navbar />

        {/* ✅ Main content grows to push footer down */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <UpcomingEvents />
                  <PreviousLeagues />
                  <About />
                  <CoreMember />
                  <Sponsors />
                  <Contact />
                </>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>

        {/* ✅ Fixed Footer */}
        <Footer />

        {/* ✅ Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
