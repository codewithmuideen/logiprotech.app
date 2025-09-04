import React from "react";

const FeaturesCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 mb-5 shadow-md">
        <Icon className="text-white text-3xl" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeaturesCard;
