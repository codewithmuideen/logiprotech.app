// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import images from "../constants/images";

export default function HeroSection() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${images.hero_bg})` }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-start px-6 md:px-12 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Growing together.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Connecting Farmers, Customers & Logistics Seamlessly.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-row flex-wrap gap-3">
          <Link to="/contact">
            <button className="px-3 py-2 text-sm sm:px-6 sm:py-4 sm:text-base bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition transform hover:scale-105">
              Request Demo
            </button>
          </Link>
          <Link to="/book">
            <button className="px-3 py-2 text-sm sm:px-6 sm:py-4 sm:text-base bg-green-600 rounded-full hover:bg-green-700 transition transform hover:scale-105">
              Book Now
            </button>
          </Link>
        </div>

        {/* Trusted Section */}
        <div className="mt-10 flex items-center gap-3">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Farmer"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Farmer"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt="Farmer"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>

          <p className="text-sm md:text-base ml-4">
            Trusted by <span className="font-bold">2 Million farmers</span>
            <br />
            <span className="flex items-center text-yellow-400">
              <FaStar className="mr-1" /> 4.9/5
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}
