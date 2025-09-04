import React from "react";
import { motion } from "framer-motion";
import { Leaf, Truck, Users, TrendingUp } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white py-20 px-6 lg:px-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          About <span className="text-yellow-300">LogiProTech</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-100 mb-12"
        >
          LogiProTech is the smart platform bridging{" "}
          <span className="font-semibold text-yellow-200">farmers, customers</span>, 
          and <span className="font-semibold text-yellow-200">logistics providers</span>.  
          We empower agriculture with secure payments, shared logistics, verified farmers, and 
          real-time market insights — building a trusted and efficient supply chain for the future.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Leaf className="w-10 h-10 text-yellow-300" />,
              title: "Verified Farmers",
              desc: "We connect customers with trusted, vetted farmers delivering fresh produce."
            },
            {
              icon: <Truck className="w-10 h-10 text-yellow-300" />,
              title: "Shared Logistics",
              desc: "Affordable logistics with GPS tracking for safe, reliable deliveries."
            },
            {
              icon: <Users className="w-10 h-10 text-yellow-300" />,
              title: "Secure Payments",
              desc: "Escrow-based transactions ensuring fairness for both farmers & buyers."
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-yellow-300" />,
              title: "Market Insights",
              desc: "Stay updated with real-time crop prices and agricultural market trends."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white/10 rounded-2xl shadow-lg p-6 hover:bg-white/20 transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-200">{feature.title}</h3>
              <p className="text-gray-100 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
