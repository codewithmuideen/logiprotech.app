import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative">
        
        {/* Back Home */}
       <Link to="/">
        <button className="absolute top-4 left-4 text-gray-600 hover:text-green-600 transition">
          <FaHome size={22} />
        </button>
       </Link>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Please choose how you want to continue
        </p>

        {/* Role Buttons */}
        <div className="space-y-4">
          <a href="login.php">
            <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition">
            Continue as Farmer
          </button>
          </a>

          <a href="login.php">
            <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition">
            Continue as Customer
          </button>
          </a>

        <a href="login.php">
            <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transform transition">
            Continue as Rider 
          </button>
        </a>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center mt-8">
          Powered by <span className="font-semibold text-green-600">Logiprotech</span>
        </p>
      </div>
    </div>
  );
}
