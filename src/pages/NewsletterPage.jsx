import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope } from "react-icons/fa";

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (subscribers.includes(email)) {
      setMessage("⚠️ You are already subscribed!");
    } else {
      setSubscribers([...subscribers, email]);
      setMessage("✅ You have been subscribed!");
    }

    setEmail("");
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-indigo-950 text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Back Home */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 bg-gray-800/80 hover:bg-indigo-500 hover:text-black 
        transition-all px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
      >
        <FaHome className="text-lg" /> Home
      </Link>

      {/* Newsletter Box */}
      <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-10 max-w-md w-full shadow-lg">
        <div className="text-center">
          <FaEnvelope className="text-5xl text-indigo-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Join Our Newsletter</h1>
          <p className="text-gray-300 mb-6">
            Stay updated with the latest news, tips, and offers.
          </p>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-indigo-500 outline-none text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-black px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Subscribe
          </button>
        </form>

        {/* Status Message */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("✅")
                ? "text-green-400"
                : message.includes("⚠️")
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
