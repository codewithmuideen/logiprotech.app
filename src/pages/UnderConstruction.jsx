// src/pages/UnderConstruction.jsx
import { motion } from "framer-motion";
import { Clock, Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2a87a9] via-[#596164] to-[#4a4842] text-white font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-lg text-center p-10 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10"
      >
        {/* Logo or Icon */}
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Construction className="w-20 h-20 text-[#65c13b] drop-shadow-xl" />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2a87a9] via-[#65c13b] to-[#97eb60] bg-clip-text text-transparent">
          Website Under Construction
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-8">
          We’re crafting something amazing at{" "}
          <span className="font-semibold text-[#97eb60]">LogiProTech</span>.  
          Stay tuned for the future of agriculture and logistics innovation.
        </p>

        {/* Countdown Placeholder */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-4 text-gray-200"
        >
          <Clock className="w-6 h-6 text-[#2a87a9] animate-pulse" />
          <span className="text-lg text-[#97eb60]">Innovation is Loading...</span>
        </motion.div>

        {/* Future Notify Button Placeholder */}
        {/* Example:
        <button className="mt-6 px-6 py-3 bg-[#2a87a9] text-white font-semibold rounded-xl shadow-md hover:bg-[#65c13b] transition">
          Notify Me
        </button>
        */}
      </motion.div>
    </div>
  );
}
