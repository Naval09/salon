import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Subtle top gradient */}
      <div className="bg-gradient-to-b from-black/60 via-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Younique Salon Logo"
              className="
      h-14
      sm:h-20
      md:h-24
      lg:h-28
      xl:h-32
      w-auto
      drop-shadow-lg
      transition-transform duration-300 ease-out
      hover:scale-110
    "
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.07 }}
                className="text-white text-lg relative group font-medium"
              >
                {link.name}
                <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-gradient-to-r from-pink-400 to-yellow-300 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}

            {/* Luxury Button */}
            <a
              href="#contact"
              className="px-6 py-2 rounded-full font-semibold text-white 
             bg-gradient-to-r from-pink-700 transparent
             hover:from-pink-600 hover:to-pink-700
             shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/70 backdrop-blur-xl py-5"
            >
              <div className="flex flex-col items-center gap-6">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="bg-gradient-to-r from-pink-500 to-yellow-300 px-6 py-2 rounded-full font-semibold text-white shadow-md"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
