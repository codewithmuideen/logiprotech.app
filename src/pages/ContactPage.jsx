import React, { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaUser,
  FaBuilding,
  FaMobileAlt,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import images from "../constants/images";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => field.trim() === "")) {
      alert("⚠️ Please fill in all required fields before submitting.");
      return;
    }
    alert("✅ Your message has been sent successfully!");
    // Hook backend here (Node.js / PHP API call)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
   className="min-h-screen bg-cover bg-center flex justify-center items-start pt-40 p-6"

      style={{ backgroundImage: `url(${images.hero_bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-950/70 to-black/90 z-0"></div>

      {/* Back to Home */}
 


      {/* Contact Container */}
      <div className="relative z-10 flex flex-col lg:flex-row max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border border-white/10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-10 md:p-12 text-white flex flex-col justify-center bg-gradient-to-br from-red-600/95 to-red-800/80">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Let’s Connect <br /> With You!
          </h1>
          <p className="text-lg mb-8 opacity-90">Talk to a specialist instantly:</p>

          <div className="space-y-4">
            <button className="flex items-center justify-center w-full max-w-xs px-6 py-3 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 shadow-md">
              <FaPhone className="mr-3" /> Call Us
            </button>
            <button className="flex items-center justify-center w-full max-w-xs px-6 py-3 bg-white text-red-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md whitespace-nowrap">
              <FaWhatsapp className="mr-3" /> WhatsApp Chat
            </button>
          </div>

          <div className="mt-10">
            <p className="text-lg">For general enquiries:</p>
            <a
              href="mailto:hello@logiprotech.app"
              className="text-white hover:text-yellow-300 text-lg flex items-center gap-2 mt-2"
            >
              <FaEnvelope /> hello@logiprotech.app
            </a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full lg:w-1/2 p-10 md:p-12 bg-black/70 text-white flex flex-col justify-center">
          <p className="text-center text-lg mb-8 opacity-90">
            Send us a message and we’ll respond shortly.
          </p>

          <form action="contact.php" method="POST" className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First name"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last name"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Business email"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaMobileAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone number"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-5 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="5"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-y transition-all"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg text-lg font-bold hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-xl"
            >
              <FaEnvelope className="mr-3" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
