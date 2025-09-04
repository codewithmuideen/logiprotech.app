import React from "react";
import FeaturesCard from "./FeaturesCard";
import {
  MdOutlineVerified, // Quality Assurance
  MdOutlineAttachMoney, // Cost Efficient
  MdOutlineVisibility, // Transparency
  MdOutlineCategory, // Product Variety
} from "react-icons/md";

const FeaturesSection = () => {
  const features = [
    {
      icon: MdOutlineVerified,
      title: "Product Quality",
      description:
        "Farmers can directly sell their products to customers, ensuring that the products are of high quality and fresh.",
    },
    {
      icon: MdOutlineAttachMoney,
      title: "Cost Efficient",
      description:
        "Direct selling reduces middlemen costs, making products more affordable for customers.",
    },
    {
      icon: MdOutlineVisibility,
      title: "Transparency",
      description:
        "Buyers can clearly see product details, ensuring trust and openness in the process.",
    },
    {
      icon: MdOutlineCategory,
      title: "Product Variety",
      description:
        "Customers can access a wide range of farm produce from different verified farmers.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-green-950 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Left 'Our Features' Box */}
        <div className="bg-gradient-to-br from-lime-500/90 to-emerald-600/80 backdrop-blur-md flex items-center justify-center p-10 rounded-2xl shadow-xl md:col-span-1 lg:col-span-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg text-center">
            Our Features
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2 lg:col-span-3">
          {features.map((feature, index) => (
            <FeaturesCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
