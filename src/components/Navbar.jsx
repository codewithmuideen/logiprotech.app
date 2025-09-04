import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import images from "../constants/images";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Logistics", path: "/logistics" },
    { title: "Products", path: "/products" },
    { title: "Tracking", path: "/tracking" },
    { title: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20">
      <div className="flex items-center justify-between px-6 md:px-12 py-3 md:py-4">
        {/* Logo */}
        <Link to="/">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={images.loga}
            alt="Company Logo"
            className="w-14 h-14 md:w-16 md:h-16"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-white font-semibold text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `relative transition-colors duration-300 hover:text-green-400 group 
                ${isActive ? "text-green-300" : "text-white/80"}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.title}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-300 ease-out 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}

          <div className="flex items-center gap-4 ml-4">
            <FaUserCircle className="text-3xl text-green-300" />
            <a
              href="https://logiprotech.app/agro-app"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold shadow-lg 
                         hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              Login
            </a>
          </div>
        </nav>

        {/* Mobile Toggle + Login */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="https://logiprotech.app/agro-app"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold shadow-md 
                       hover:from-green-600 hover:to-green-700 transition-all duration-300"
          >
            Login
          </a>
          <button
            className="text-white text-3xl p-1 rounded-md hover:bg-white/20 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-[calc(100%+10px)] right-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl 
                       w-64 flex flex-col p-6 space-y-5 md:hidden border border-gray-200"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-800 font-medium text-lg relative group block py-1 
                  hover:text-green-600 transition-colors duration-300 
                  ${isActive ? "text-green-700 font-bold" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
