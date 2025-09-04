import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Truck,
  Users,
  TrendingUp,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import images from "../constants/images";

export default function AboutUs() {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>
          LogiProTech - Connecting Farmers, Customers & Logistics Seamlessly
        </title>
        <meta
          name="description"
          content="LogiProTech is the smart platform bridging farmers, customers, and logistics providers. We enable secure payments, shared logistics, verified farmers, and real-time market insights for an efficient agricultural supply chain."
        />
        <meta
          name="keywords"
          content="LogiProTech, agriculture platform, farm produce marketplace, secure payments, shared logistics, verified farmers, market price updates, agro-logistics, digital farming, supply chain innovation, farmer to customer, buy farm produce online, logistics provider for farmers, crop price trends, Nigerian agriculture platform, escrow payments, GPS tracking for logistics"
        />
      </head>

      <section className="relative bg-gradient-to-br from-gray-900 via-black to-green-950 text-white min-h-screen py-20 px-6 lg:px-20 flex flex-col">
        <div className="absolute inset-0 bg-black/40"></div>

      

        {/* Hero */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6"
          >
            Building the Future of{" "}
            <span className="text-yellow-300">Agriculture & Logistics</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-100 mb-10 sm:mb-12 px-2"
          >
            At <span className="font-semibold text-yellow-200">LogiProTech</span>,
            we connect farmers, customers, and logistics providers into one
            seamless ecosystem. Our mission is to make food distribution smarter,
            faster, and more trustworthy for everyone.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="relative z-10 max-w-6xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-md text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-200 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
              To empower farmers with access to markets, customers with fresh
              produce, and logistics providers with reliable demand — creating a
              transparent, sustainable, and fair agricultural supply chain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-md text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-200 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
              To become Africa’s leading agri-tech logistics platform, ensuring
              that no crop goes to waste, no farmer is left behind, and every
              customer has access to affordable, fresh produce.
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <div className="relative z-10 max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-12">
            Why Choose <span className="text-yellow-300">LogiProTech</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />,
                title: "Verified Farmers",
                desc: "We connect customers with trusted, vetted farmers delivering fresh produce.",
              },
              {
                icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />,
                title: "Shared Logistics",
                desc: "Affordable logistics with GPS tracking for safe, reliable deliveries.",
              },
              {
                icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />,
                title: "Secure Payments",
                desc: "Escrow-based transactions ensuring fairness for both farmers & buyers.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />,
                title: "Market Insights",
                desc: "Stay updated with real-time crop prices and agricultural market trends.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white/10 rounded-xl shadow-lg p-5 sm:p-6 hover:bg-white/20 transition text-center"
              >
                <div className="flex justify-center mb-3">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-200">
                  {feature.title}
                </h3>
                <p className="text-gray-100 text-xs sm:text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="relative z-10 max-w-6xl mx-auto mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-12">
            How It <span className="text-yellow-300">Works</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              "Farmers list fresh produce",
              "Customers place secure orders",
              "Logistics deliver with GPS tracking",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                className="bg-white/10 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-md flex flex-col items-center"
              >
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 mb-3" />
                <p className="text-gray-100 text-sm sm:text-base">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="relative z-10 max-w-6xl mx-auto mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-12">
            Meet Our <span className="text-yellow-300">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: "Abiola Olayanju",
                role: "Founder & CEO",
                img: images.team1,
              },
              {
                name: "James Micheal",
                role: "Head of Logistics",
                img: images.team2,
              },
              {
                name: "Ajibade Wasiu",
                role: "Tech Lead",
                img: images.team3,
              },
              {
                name: "Amara Obi",
                role: "Community Manager",
                img: images.team4,
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="bg-white/10 rounded-xl shadow-lg p-5 sm:p-6 hover:bg-white/20 transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover border-2 border-yellow-300"
                />
                <h3 className="text-base sm:text-lg font-bold text-yellow-200">
                  {member.name}
                </h3>
                <p className="text-gray-100 text-xs sm:text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
