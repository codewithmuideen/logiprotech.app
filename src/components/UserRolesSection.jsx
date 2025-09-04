import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import images from "../constants/images"; // Ensure correct paths

const UserRolesSection = () => {
  const [activeTab, setActiveTab] = useState("farmers");

  const tabsData = [
    {
      id: "farmers",
      label: "Farmers",
      description:
        "We empower farmers through access to mechanization services, demo plots, and practical training sessions. These initiatives help farmers boost productivity, adopt modern techniques, and achieve higher yields in a sustainable way.",
      image: images.user4,
      link: { text: "Learn More", href: "#" },
    },
    {
      id: "customers",
      label: "Customers",
      description:
        "Our customers benefit from reliable and affordable access to tractor services, spare parts, and financing options. We focus on delivering value by ensuring timely service delivery and transparent pricing across all our hubs.",
      image: images.user1,
      link: { text: "See Services", href: "#" },
    },
    {
      id: "operators",
      label: "Logistics Operators",
      description:
        "We train and certify logistics operators and technicians in collaboration with local institutions. This ensures a professional workforce capable of maintaining equipment, supporting farmers, and driving sustainable mechanization growth.",
      image: images.user5,
      link: { text: "Join as Operator", href: "#" },
    },
  ];

  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="relative bg-[#0F0F0F] text-white py-16 sm:py-20 font-sans overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-1/4 left-1/4 animate-blob"></div>
        <div className="absolute w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 bottom-1/4 right-1/4 animate-blob animation-delay-2000"></div>
        <div className="absolute w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/60 backdrop-blur-md p-2 rounded-full flex flex-wrap md:flex-nowrap items-center gap-2 shadow-xl border border-gray-700">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none
                  ${
                    activeTab === tab.id
                      ? "bg-gradient-to-br from-lime-400 to-emerald-500 text-gray-900 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl shadow-black/70 border border-gray-700/50">
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] w-full">
            {/* Background Image */}
            {tabsData.map((tab) => (
              <div
                key={tab.id + "-bg"}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeTab === tab.id
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {tab.image && (
                  <img
                    src={tab.image}
                    alt={tab.label}
                    className="w-full h-full object-cover brightness-[0.6] blur-[2px]"
                  />
                )}
              </div>
            ))}

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 md:p-14 bg-black/40 backdrop-blur-sm transition-opacity duration-700 ease-in-out">
              {activeContent && (
                <div
                  key={activeContent.id + "-text"}
                  className="text-center max-w-xl animate-fade-in-up"
                >
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light text-gray-100 mb-6 drop-shadow-lg">
                    {activeContent.description}
                  </p>
                  {activeContent.link && (
                    <a
                      href={activeContent.link.href}
                      className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-lime-500 to-emerald-600 text-gray-900 text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {activeContent.link.text}{" "}
                      <FiExternalLink className="ml-2" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes fadeInMoveUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInMoveUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default UserRolesSection;
