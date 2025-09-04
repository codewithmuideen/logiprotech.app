import React from "react";
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

export default function OurServices() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-green-950 text-white py-20 px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Our <span className="text-lime-400">Products</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          At <span className="text-lime-400 font-semibold">LogiProTech</span>, 
          we are redefining agriculture with technology-driven solutions.  
          From secure payments to optimized logistics, we provide everything 
          farmers, customers, and logistics providers need for a seamless supply chain.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out backdrop-blur-md"
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
    </section>
  );
}
