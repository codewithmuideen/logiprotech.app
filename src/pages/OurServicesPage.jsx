import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import {
  MdOutlineDesignServices,
  MdOutlineSecurity,
  MdOutlineCloudQueue,
  MdOutlineSpeed,
  MdOutlineSupportAgent,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";

const services = [
  {
    icon: <MdOutlineDesignServices className="text-4xl text-lime-400" />,
    title: "Smart Agriculture Solutions",
    desc: "We design digital tools that empower farmers with seamless market access, crop management, and real-time data insights.",
  },
  {
    icon: <MdOutlineSecurity className="text-4xl text-emerald-400" />,
    title: "Secure Transactions",
    desc: "With escrow payments and fraud protection, both farmers and buyers enjoy safe and transparent financial dealings.",
  },
  {
    icon: <MdOutlineCloudQueue className="text-4xl text-cyan-400" />,
    title: "Cloud-Based Platform",
    desc: "Our platform is scalable and accessible anywhere, connecting farmers, logistics providers, and customers globally.",
  },
  {
    icon: <MdOutlineSpeed className="text-4xl text-orange-400" />,
    title: "Optimized Logistics",
    desc: "Shared logistics with GPS tracking ensures fresh produce delivery, reduced costs, and better efficiency.",
  },
  {
    icon: <MdOutlineSupportAgent className="text-4xl text-pink-400" />,
    title: "24/7 Support",
    desc: "We provide dedicated customer support for farmers, logistics providers, and customers at every step.",
  },
  {
    icon: <MdOutlineIntegrationInstructions className="text-4xl text-yellow-400" />,
    title: "Market Insights & Analytics",
    desc: "Stay ahead with real-time price trends, analytics, and data-driven insights for smarter decisions.",
  },
];

export default function OurServicesPage() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-green-950 text-white pt-10">
      {/* Back to Home Button */}
      

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto pt-28 pb-16 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Our <span className="text-lime-400">Products</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          At <span className="text-lime-400 font-semibold">LogiProTech</span>, 
          we are redefining agriculture with technology-driven solutions.  
          From secure payments to optimized logistics, we provide everything 
          farmers, customers, and logistics providers need for a seamless supply chain.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 lg:px-20 pb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700 
            rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 
            transition-all duration-300 ease-in-out backdrop-blur-md"
          >
            <div className="mb-5 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-lime-300 text-center">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-900/70 py-20 px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why <span className="text-lime-400">Choose Us?</span>
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-6 border border-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-lime-400 mb-4">Innovation</h3>
            <p className="text-gray-300">We bring cutting-edge technology to transform farming, logistics, and trade.</p>
          </div>
          <div className="text-center p-6 border border-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-lime-400 mb-4">Trust & Transparency</h3>
            <p className="text-gray-300">Escrow-based payments and fraud protection build confidence for all parties.</p>
          </div>
          <div className="text-center p-6 border border-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-lime-400 mb-4">Global Access</h3>
            <p className="text-gray-300">Our cloud-based platform ensures scalability and global reach for farmers.</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How <span className="text-lime-400">It Works</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {[
            { step: "01", title: "Sign Up", desc: "Farmers, customers, and logistics providers join our secure platform." },
            { step: "02", title: "Connect", desc: "Farmers list produce, buyers place orders, and logistics providers get assigned." },
            { step: "03", title: "Secure Payment", desc: "Transactions are protected with escrow and fraud prevention tools." },
            { step: "04", title: "Delivery & Tracking", desc: "Real-time GPS tracking ensures timely and fresh delivery." },
            { step: "05", title: "Grow Together", desc: "Access insights, analytics, and tools to scale sustainably." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold text-xl">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-lime-500 to-green-600 text-black py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Join the Future of Agriculture?</h2>
        <p className="mb-8 text-lg">
          Empower your farming journey with <span className="font-semibold">LogiProTech</span>.  
          Experience seamless, secure, and innovative solutions today.
        </p>
        <Link
          to="/contact"
          className="bg-black text-lime-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
