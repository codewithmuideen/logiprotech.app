import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaPhone,
  FaMapMarkerAlt,
  FaWeightHanging,
  FaBicycle,
  FaShippingFast,
  FaCalendarAlt,
  FaTimesCircle,
  FaCheckCircle,
  FaTruck,
  FaBus,
  FaShuttleVan,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

// Dummy Nigerian Parcel Data
const parcelData = {
  "PAKG1285": {
    sender: {
      name: "Dr. Adebayo Olaleye",
      address: "Block B, Garki Area 2, Abuja, FCT",
      contact: "+234 809 123 4567",
    },
    recipient: {
      name: "Funke Adejumo",
      address: "No. 7, Lekki Phase 1, Lagos, Lagos State",
      contact: "+234 701 234 5678",
    },
    parcelDetails: {
      weight: "7,700 lbs (3500 kg)",
      width: "8 ft (96 in)",
      height: "11.25 ft (135 in)",
      length: "29 ft (348 in)",
      price: "0.00",
      type: "Deliver to Recipient",
      branchAccepted: "Logistics Hub, Lagos, Nigeria",
      status: "Item Accepted by Courier",
      mode: "Truck",
      expectedDelivery: "5-7 Business Days",
    },
  },
  "PAKG2504": {
    sender: {
      name: "Mr. Chinedu Okafor",
      address: "45 Aba Road, Port Harcourt, Rivers State",
      contact: "+234 812 345 6789",
    },
    recipient: {
      name: "Aminu Sani",
      address: "Plot 10, Kano City Centre, Kano, Kano State",
      contact: "+234 908 765 4321",
    },
    parcelDetails: {
      weight: "500 kg",
      width: "4 ft (48 in)",
      height: "6 ft (72 in)",
      length: "10 ft (120 in)",
      price: "0.00",
      type: "Deliver to Recipient",
      branchAccepted: "Logistics Hub, Port Harcourt, Nigeria",
      status: "Processed & In Transit",
      mode: "Van",
      expectedDelivery: "3-5 Business Days",
    },
  },
  "PAKG1990": {
    sender: {
      name: "Ms. Zainab Musa",
      address: "3 Yakubu Gowon Way, Kaduna, Kaduna State",
      contact: "+234 803 111 2222",
    },
    recipient: {
      name: "Kemi Johnson",
      address: "Street 22, Akure Gardens, Akure, Ondo State",
      contact: "+234 706 333 4444",
    },
    parcelDetails: {
      weight: "5 kg",
      width: "1 ft (12 in)",
      height: "1 ft (12 in)",
      length: "1.5 ft (18 in)",
      price: "0.00",
      type: "Deliver to Recipient",
      branchAccepted: "Logistics Hub, Kaduna, Nigeria",
      status: "Out for Delivery",
      mode: "Bike",
      expectedDelivery: "1-2 Business Days",
    },
  },
  "PAKG0707": {
    sender: {
      name: "Engr. Nnamdi Eze",
      address: "2 Enugu-Onitsha Expressway, Enugu, Enugu State",
      contact: "+234 805 555 6666",
    },
    recipient: {
      name: "Fatima Bello",
      address: "GRA Estate, Wuse 2, Abuja, FCT",
      contact: "+234 907 777 8888",
    },
    parcelDetails: {
      weight: "150 kg",
      width: "3 ft (36 in)",
      height: "4 ft (48 in)",
      length: "7 ft (84 in)",
      price: "0.00",
      type: "Deliver to Recipient",
      branchAccepted: "Logistics Hub, Enugu, Nigeria",
      status: "Delivered",
      mode: "Bus",
      expectedDelivery: "Delivered on 2023-10-26",
    },
  },
};

export default function TrackingPage() {
  const [trackingCode, setTrackingCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentParcel, setCurrentParcel] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = trackingCode.trim().toUpperCase();
    if (parcelData[code]) {
      setCurrentParcel(parcelData[code]);
    } else {
      setCurrentParcel(null);
    }
    setModalOpen(true);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -200 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.8, y: 200, transition: { duration: 0.3 } },
  };

  const getTransportIcon = (mode) => {
    switch (mode.toLowerCase()) {
      case "bike":
        return <FaBicycle className="text-green-400" />;
      case "bus":
        return <FaBus className="text-green-400" />;
      case "van":
        return <FaShuttleVan className="text-green-400" />;
      case "truck":
        return <FaTruck className="text-green-400" />;
      default:
        return <FaShippingFast className="text-green-400" />;
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-green-950 text-white overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full max-w-lg bg-black/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-green-900/50 flex flex-col items-center"
      >
        <div className="flex items-center justify-between w-full mb-8">
          <h1 className="text-3xl font-extrabold text-green-300 tracking-tight">
            Track Your Order
          </h1>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg cursor-pointer"
          >
            <Link to="/">
              <FaHome className="text-xl" />
            </Link>
          </motion.div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <label className="text-green-200 font-semibold text-lg">
            Enter Your Tracking Code
          </label>
          <div className="relative">
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="e.g. ABCD0000"
              className="w-full pl-12 pr-4 py-4 rounded-full border border-green-700 bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-600/50 text-lg shadow-sm transition-all duration-300"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 text-xl" />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-4 rounded-full font-bold text-xl shadow-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300"
          >
            Track Now
          </motion.button>
        </form>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gradient-to-br from-gray-900 via-black to-green-950
                         text-white rounded-3xl shadow-2xl p-10 
                         w-full max-w-3xl relative border border-green-800/50 
                         max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition-colors"
              >
                <MdClose size={28} />
              </button>

              {currentParcel ? (
                <div>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="flex justify-center mb-4"
                    >
                      <FaCheckCircle className="text-7xl text-green-400" />
                    </motion.div>
                    <h2 className="text-3xl font-extrabold text-green-300">
                      Parcel Details
                    </h2>
                    <p className="text-lg text-gray-300 mt-2">
                      Tracking Code:{" "}
                      <span className="font-bold text-white">
                        {trackingCode.trim().toUpperCase()}
                      </span>
                    </p>
                  </div>

                  {/* Grid Layout */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Sender */}
                    <div className="p-4 border border-green-700/50 rounded-lg bg-black/30">
                      <h3 className="text-xl font-bold text-green-300 mb-3">
                        Sender
                      </h3>
                      <p className="flex items-center gap-3 text-gray-300">
                        <FaHome className="text-green-400" />{" "}
                        {currentParcel.sender.name}
                      </p>
                      <p className="flex items-center gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-green-400" />{" "}
                        {currentParcel.sender.address}
                      </p>
                      <p className="flex items-center gap-3 text-gray-300">
                        <FaPhone className="text-green-400" />{" "}
                        {currentParcel.sender.contact}
                      </p>
                    </div>

                    {/* Recipient */}
                    <div className="p-4 border border-green-700/50 rounded-lg bg-black/30">
                      <h3 className="text-xl font-bold text-green-300 mb-3">
                        Recipient
                      </h3>
                      <p className="flex items-center gap-3 text-gray-300">
                        <FaHome className="text-green-400" />{" "}
                        {currentParcel.recipient.name}
                      </p>
                      <p className="flex items-center gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-green-400" />{" "}
                        {currentParcel.recipient.address}
                      </p>
                      <p className="flex items-center gap-3 text-gray-300">
                        <FaPhone className="text-green-400" />{" "}
                        {currentParcel.recipient.contact}
                      </p>
                    </div>
                  </div>

                  {/* Parcel Info */}
                  <div className="mt-6 p-4 border border-green-700/50 rounded-lg bg-black/30 space-y-3">
                    <h3 className="text-xl font-bold text-green-300 mb-3">
                      Parcel Info
                    </h3>
                    <p className="flex items-center gap-3 text-gray-300">
                      <FaWeightHanging className="text-green-400" /> Weight:{" "}
                      {currentParcel.parcelDetails.weight}
                    </p>
                    <p className="flex items-center gap-3 text-gray-300">
                      {getTransportIcon(currentParcel.parcelDetails.mode)} Mode:{" "}
                      {currentParcel.parcelDetails.mode}
                    </p>
                    <p className="flex items-center gap-3 text-gray-300">
                      <FaShippingFast className="text-green-400" /> Status:{" "}
                      <span className="font-bold text-green-300 ml-1">
                        {currentParcel.parcelDetails.status}
                      </span>
                    </p>
                    <p className="flex items-center gap-3 text-gray-300">
                      <FaCalendarAlt className="text-green-400" /> Expected
                      Delivery: {currentParcel.parcelDetails.expectedDelivery}
                    </p>
                    <p className="flex items-center gap-3 text-gray-300">
                      <FaMapMarkerAlt className="text-green-400" /> Branch
                      Accepted: {currentParcel.parcelDetails.branchAccepted}
                    </p>
                    <p className="flex items-center gap-3 text-gray-300">
                      Dimensions: {currentParcel.parcelDetails.length} L x{" "}
                      {currentParcel.parcelDetails.width} W x{" "}
                      {currentParcel.parcelDetails.height} H
                    </p>
                  </div>

                  {/* Close Button */}
                  <div className="text-center mt-8">
                    <motion.button
                      onClick={() => setModalOpen(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:bg-green-700 transition-all"
                    >
                      Back to Tracking
                    </motion.button>
                  </div>
                </div>
              ) : (
                // ❌ Error Message
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="flex justify-center mb-6"
                  >
                    <FaTimesCircle className="text-7xl text-red-500" />
                  </motion.div>
                  <h2 className="text-3xl font-extrabold text-red-500 mb-4">
                    Oops! Error
                  </h2>
                  <p className="text-gray-300 text-lg">
                    No tracking code found for{" "}
                    <span className="font-bold text-white">
                      {trackingCode.trim().toUpperCase()}
                    </span>
                    . Please double-check or{" "}
                    <Link
                      to="/contact"
                      className="text-green-400 underline font-semibold hover:text-green-300 transition-colors"
                    >
                      contact support
                    </Link>
                    .
                  </p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="mt-8 bg-gray-700 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-gray-600 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
