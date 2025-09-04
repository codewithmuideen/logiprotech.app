import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";

const products = [
  { name: "Fresh Tomatoes", price: "₦15,000 / basket (~2 kg)", img: images.tomato },
  { name: "Onions", price: "₦5,000 / bag (~1 kg)", img: images.onion },
  { name: "Red Peppers", price: "₦14,000 / basket (~1 kg)", img: images.pepper },
  { name: "Yam Tubers", price: "₦6,000 / piece (est.)", img: images.yam },
  { name: "Maize (Corn)", price: "₦10,000 / ear (est.)", img: images.maize },
  { name: "Palm Oil (Pack)", price: "₦20,000 / pack (est.)", img: images.palmoil },
  { name: "Plantain", price: "₦5,000 / bunch (est.)", img: images.plaintain },
  { name: "Cassava", price: "₦6,000 / tuber (est.)", img: images.cassava },
  { name: "Rice (Local)", price: "₦30,000 / 50 kg bag (est.)", img: images.rice },
  { name: "Groundnuts", price: "₦6,000 / 1 kg bag (est.)", img: images.groundnut },
  { name: "Vegetables (Ugu)", price: "₦2,000 / bunch (est.)", img: images.vegetable },
  { name: "Catfish (Fresh)", price: "₦8,000 / kg (est.)", img: images.catfish },
];


export default function Marketplace() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-green-950 text-white py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Marketplace
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Browse a wide selection of fresh farm produce from verified farmers.
          Book your orders securely and enjoy timely delivery with LogiProTech.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
          >
            {/* Product Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-lime-300 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-4">{product.price}</p>
              <Link
                to="/shop"
                className="inline-block bg-lime-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-lime-400 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
