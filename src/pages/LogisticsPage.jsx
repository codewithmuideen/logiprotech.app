import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, FaTruck, FaMapMarkedAlt, FaShippingFast, 
  FaSnowflake, FaShieldAlt, FaBoxes 
} from "react-icons/fa";

export default function LogisticsPage() {
  const features = [
    {
      icon: <FaTruck className="text-4xl text-lime-400" />,
      title: "Optimized Routes",
      desc: "We use AI-powered route planning to reduce delivery times and fuel costs.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-emerald-400" />,
      title: "Real-Time GPS Tracking",
      desc: "Track your goods every step of the way with accurate GPS monitoring.",
    },
    {
      icon: <FaShippingFast className="text-4xl text-cyan-400" />,
      title: "Fast & Reliable Delivery",
      desc: "We ensure quick, secure, and reliable deliveries for both short and long distances.",
    },
    {
      icon: <FaSnowflake className="text-4xl text-blue-400" />,
      title: "Cold Chain Logistics",
      desc: "Specialized vehicles maintain freshness for perishable goods like fruits and vegetables.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
      title: "Secure & Transparent",
      desc: "All deliveries are escrow-backed with fraud protection and real-time updates.",
    },
    {
      icon: <FaBoxes className="text-4xl text-pink-400" />,
      title: "Scalable Fleet Management",
      desc: "From small vans to large trucks, we provide flexible fleet solutions to fit your cargo needs.",
    },
  ];

  const steps = [
    { step: "1", title: "Request Pickup", desc: "Farmers or buyers request logistics services via our platform." },
    { step: "2", title: "Route Planning", desc: "We optimize routes for cost efficiency and reduced delivery times." },
    { step: "3", title: "Real-Time Tracking", desc: "Track your shipment live from pickup to delivery." },
    { step: "4", title: "Delivery & Confirmation", desc: "Goods delivered safely with digital confirmation." },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-green-950 text-white pt-10">
      {/* Back to Home */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 bg-gray-800/80 hover:bg-lime-500 hover:text-black 
        transition-all px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
      >
        
      </Link>

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto pt-28 pb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Smart <span className="text-lime-400">Logistics</span> Solutions
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          At <span className="text-lime-400 font-semibold">LogiProTech</span>, we make logistics smarter, faster, 
          and more transparent. From optimized routes to cold chain storage, 
          we ensure agricultural products reach markets fresh and on time.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 lg:px-20 pb-20">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700 
            rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-lime-300 text-center">{f.title}</h3>
            <p className="text-gray-300 text-sm text-center">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Process Steps */}
      <div className="bg-gray-800/50 py-16 px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It <span className="text-lime-400">Works</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="text-center max-w-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-lime-500 text-black font-bold text-lg mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Optimize Your Deliveries?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join thousands of farmers, buyers, and logistics providers using 
          <span className="text-lime-400"> LogiProTech </span> to reduce costs, 
          improve efficiency, and guarantee freshness.
        </p>
        <Link
          to="/contact"
          className="bg-lime-500 hover:bg-lime-600 text-black px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
