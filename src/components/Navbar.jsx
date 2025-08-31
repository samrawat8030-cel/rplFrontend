import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpeg"; // ✅ your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check if we are on homepage (for scroll links)
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo + Title */}
        <RouterLink to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="RPL League Logo"
            className="h-10 w-10 sm:h-16 sm:w-16 object-contain rounded-full"
          />
          <span className="text-lg sm:text-2xl font-bold tracking-wide">
            RPL NCR LEAGUE
          </span>
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {isHome ? (
            <>
              <ScrollLink
                to="upcoming"
                smooth
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                Upcoming
              </ScrollLink>
              <ScrollLink
                to="previous"
                smooth
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                Leagues
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                About
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth
                offset={-80}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            <RouterLink to="/" className="hover:text-yellow-400 transition">
              Home
            </RouterLink>
          )}

          {/* Always visible routes */}
          <RouterLink
            to="/register"
            className="hover:text-yellow-400 transition"
          >
            Register
          </RouterLink>
          <RouterLink
            to="/payment"
            className="hover:text-yellow-400 transition"
          >
            Payment
          </RouterLink>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 text-white flex flex-col items-center space-y-6 py-6">
          {isHome ? (
            <>
              <ScrollLink
                onClick={toggleMenu}
                to="upcoming"
                smooth
                offset={-80}
                className="cursor-pointer hover:text-yellow-400"
              >
                Upcoming
              </ScrollLink>
              <ScrollLink
                onClick={toggleMenu}
                to="previous"
                smooth
                offset={-80}
                className="cursor-pointer hover:text-yellow-400"
              >
                Leagues
              </ScrollLink>
              <ScrollLink
                onClick={toggleMenu}
                to="contact"
                smooth
                offset={-80}
                className="cursor-pointer hover:text-yellow-400"
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            <RouterLink
              onClick={toggleMenu}
              to="/"
              className="cursor-pointer hover:text-yellow-400"
            >
              Home
            </RouterLink>
          )}

          <ScrollLink
            onClick={toggleMenu}
            to="about"
            smooth
            offset={-80}
            className="cursor-pointer hover:text-yellow-400"
          >
            About
          </ScrollLink>

          <RouterLink
            onClick={toggleMenu}
            to="/register"
            className="cursor-pointer hover:text-yellow-400"
          >
            Register
          </RouterLink>
          <RouterLink
            onClick={toggleMenu}
            to="/payment"
            className="cursor-pointer hover:text-yellow-400"
          >
            Payment
          </RouterLink>
        </div>
      )}
    </nav>
  );
}
