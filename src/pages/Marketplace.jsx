import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaTrash, FaUserPlus } from "react-icons/fa";

// Sample marketplace items (30 products)
const sampleCrops = [
  { id: 1, name: "Tomatoes", price: 120, location: "Lagos", image: "https://source.unsplash.com/300x200/?tomato" },
  { id: 2, name: "Maize", price: 80, location: "Ibadan", image: "https://source.unsplash.com/300x200/?maize" },
  { id: 3, name: "Cabbage", price: 60, location: "Abuja", image: "https://source.unsplash.com/300x200/?cabbage" },
  { id: 4, name: "Carrots", price: 90, location: "Kaduna", image: "https://source.unsplash.com/300x200/?carrot" },
  { id: 5, name: "Yam", price: 150, location: "Enugu", image: "https://source.unsplash.com/300x200/?yam" },
  { id: 6, name: "Pepper", price: 50, location: "Lagos", image: "https://source.unsplash.com/300x200/?pepper" },
  { id: 7, name: "Onion", price: 70, location: "Kano", image: "https://source.unsplash.com/300x200/?onion" },
  { id: 8, name: "Spinach", price: 40, location: "Abuja", image: "https://source.unsplash.com/300x200/?spinach" },
  { id: 9, name: "Okra", price: 55, location: "Lagos", image: "https://source.unsplash.com/300x200/?okra" },
  { id: 10, name: "Sweet Potato", price: 100, location: "Enugu", image: "https://source.unsplash.com/300x200/?sweet-potato" },
  { id: 11, name: "Potatoes", price: 110, location: "Ibadan", image: "https://source.unsplash.com/300x200/?potato" },
  { id: 12, name: "Watermelon", price: 200, location: "Kano", image: "https://source.unsplash.com/300x200/?watermelon" },
  { id: 13, name: "Pineapple", price: 250, location: "Enugu", image: "https://source.unsplash.com/300x200/?pineapple" },
  { id: 14, name: "Mango", price: 180, location: "Lagos", image: "https://source.unsplash.com/300x200/?mango" },
  { id: 15, name: "Cucumber", price: 60, location: "Kaduna", image: "https://source.unsplash.com/300x200/?cucumber" },
  { id: 16, name: "Lettuce", price: 45, location: "Abuja", image: "https://source.unsplash.com/300x200/?lettuce" },
  { id: 17, name: "Broccoli", price: 130, location: "Ibadan", image: "https://source.unsplash.com/300x200/?broccoli" },
  { id: 18, name: "Cauliflower", price: 140, location: "Lagos", image: "https://source.unsplash.com/300x200/?cauliflower" },
  { id: 19, name: "Green Beans", price: 70, location: "Kaduna", image: "https://source.unsplash.com/300x200/?green-beans" },
  { id: 20, name: "Eggplant", price: 80, location: "Kano", image: "https://source.unsplash.com/300x200/?eggplant" },
  { id: 21, name: "Strawberry", price: 300, location: "Lagos", image: "https://source.unsplash.com/300x200/?strawberry" },
  { id: 22, name: "Banana", price: 90, location: "Abuja", image: "https://source.unsplash.com/300x200/?banana" },
  { id: 23, name: "Apple", price: 220, location: "Ibadan", image: "https://source.unsplash.com/300x200/?apple" },
  { id: 24, name: "Pear", price: 210, location: "Enugu", image: "https://source.unsplash.com/300x200/?pear" },
  { id: 25, name: "Avocado", price: 180, location: "Lagos", image: "https://source.unsplash.com/300x200/?avocado" },
  { id: 26, name: "Ginger", price: 95, location: "Kano", image: "https://source.unsplash.com/300x200/?ginger" },
  { id: 27, name: "Garlic", price: 85, location: "Kaduna", image: "https://source.unsplash.com/300x200/?garlic" },
  { id: 28, name: "Chili", price: 75, location: "Abuja", image: "https://source.unsplash.com/300x200/?chili" },
  { id: 29, name: "Coconut", price: 120, location: "Enugu", image: "https://source.unsplash.com/300x200/?coconut" },
  { id: 30, name: "Pumpkin", price: 150, location: "Lagos", image: "https://source.unsplash.com/300x200/?pumpkin" },
];

const Marketplace = () => {
  const [user, setUser] = useState(null);
  const [crops, setCrops] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ crop: "", location: "", minPrice: "", maxPrice: "" });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => setCrops(sampleCrops), []);

  const handleAddToCart = (item) => {
    if (!user) return alert("⚠️ You must sign up to place an order.");
    setCart((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const handleCheckout = () => {
    alert("🟢 Checkout successful via escrow. Our logistics team will contact you.");
    setCart([]);
  };

  const filteredCrops = crops.filter((item) => {
    const matchesCrop = filters.crop ? item.name.toLowerCase().includes(filters.crop.toLowerCase()) : true;
    const matchesLocation = filters.location ? item.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
    const matchesMinPrice = filters.minPrice ? item.price >= parseFloat(filters.minPrice) : true;
    const matchesMaxPrice = filters.maxPrice ? item.price <= parseFloat(filters.maxPrice) : true;
    return matchesCrop && matchesLocation && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AgriMarketplace</h1>
        <div className="flex items-center gap-4">
          {user ? (
            <span>Welcome, {user}</span>
          ) : (
            <button
              onClick={() => setUser("Farmer John")}
              className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30"
            >
              <FaUserPlus /> Sign Up
            </button>
          )}
          <button onClick={() => setShowCart((prev) => !prev)} className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Filters */}
      <div className="p-4 flex flex-wrap gap-4 bg-white shadow-md">
        <input
          type="text"
          placeholder="Filter by crop"
          value={filters.crop}
          onChange={(e) => setFilters({ ...filters, crop: e.target.value })}
          className="p-2 border rounded-lg flex-1"
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="p-2 border rounded-lg flex-1"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          className="p-2 border rounded-lg w-32"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="p-2 border rounded-lg w-32"
        />
      </div>

      {/* Marketplace Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCrops.map((crop) => (
          <div key={crop.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition">
            <img src={crop.image} alt={crop.name} className="h-40 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{crop.name}</h2>
                <p className="text-gray-600">Location: {crop.location}</p>
                <p className="text-green-600 font-semibold">₦{crop.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(crop)}
                className="mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-start pt-20 z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-4">Your Cart</h3>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-500">₦{item.price}</p>
                      </div>
                      <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-between items-center font-bold">
                  <span>Total:</span>
                  <span>₦{cart.reduce((acc, item) => acc + item.price, 0)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Checkout via Escrow
                </button>
              </>
            )}
            <button onClick={() => setShowCart(false)} className="mt-4 w-full py-2 border rounded-lg hover:bg-gray-100">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
