import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaTrash, FaUserPlus, FaTimes, FaSearch, FaHome } from "react-icons/fa";
import images from "../constants/images";
import { Link } from "react-router-dom";
// Updated sample products with new prices and descriptions
const sampleProducts = [
  { id: 1, name: "Tomatoes", price: 18500, displayPrice: "₦18,500 / 5 kg basket", location: "Lagos", description: "Juicy, ripe, and locally sourced.", image: images.tomato },
  { id: 2, name: "Maize", price: 12000, displayPrice: "₦12,000 / 10 kg bag", location: "Ibadan", description: "Sweet, crisp, non-GMO.", image: images.maize },
  { id: 3, name: "Cabbage", price: 8000, displayPrice: "₦8,000 / head", location: "Abuja", description: "Fresh, crisp, and organic.", image:images.cabbage},
  { id: 4, name: "Carrots", price: 12000, displayPrice: "₦12,000 / 5 kg bag", location: "Kaduna", description: "Naturally sweet, farm-fresh.", image: images.carrot },
  { id: 5, name: "Yam", price: 15500, displayPrice: "₦15,500 / tuber", location: "Enugu", description: "Hearty and nutritious staple.", image: images.yam },
  { id: 6, name: "Onions", price: 10000, displayPrice: "₦10,000 / 5 kg bag", location: "Lagos", description: "Versatile and aromatic.", image: images.onion },
  { id: 7, name: "Peppers", price: 12000, displayPrice: "₦12,000 / 5 kg basket", location: "Abuja", description: "Colorful and vitamin-rich.", image: images.pepper },
  { id: 8, name: "Spinach", price: 9000, displayPrice: "₦9,000 / 1 bunch", location: "Kaduna", description: "Leafy green, packed with iron.", image: images.spinach },
  { id: 9, name: "Okra", price: 8500, displayPrice: "₦8,500 / 1 kg", location: "Enugu", description: "Fresh, tender, and healthy.", image: images.okra },
  { id: 10, name: "Cucumber", price: 11000, displayPrice: "₦11,000 / 5 pieces", location: "Lagos", description: "Cool and refreshing.", image: images.cucumber },
  { id: 11, name: "Watermelon", price: 25000, displayPrice: "₦25,000 / piece", location: "Ibadan", description: "Sweet, juicy, perfect for summer.", image:images.watermelon },
  { id: 12, name: "Pineapple", price: 15000, displayPrice: "₦15,000 / piece", location: "Abuja", description: "Tangy and tropical delight.", image: images.pineapple },
  { id: 13, name: "Mango", price: 18000, displayPrice: "₦18,000 / 5 pieces", location: "Kaduna", description: "Rich, sweet, and aromatic.", image: images.mango },
  { id: 14, name: "Banana", price: 9500, displayPrice: "₦9,500 / bunch", location: "Enugu", description: "Energy-boosting and nutritious.", image: images.banana},
  { id: 15, name: "Strawberries", price: 32000, displayPrice: "₦32,000 / 1 kg box", location: "Lagos", description: "Vibrant and sweet-tart.", image: images.strawberry},
  { id: 16, name: "Apples", price: 20000, displayPrice: "₦20,000 / 5 pieces", location: "Abuja", description: "Crisp, delicious, and healthy.", image: images.apple },
  { id: 17, name: "Oranges", price: 14000, displayPrice: "₦14,000 / 2 dozen", location: "Kaduna", description: "Juicy and vitamin C packed.", image: images.orange },
  { id: 18, name: "Lettuce", price: 8000, displayPrice: "₦8,000 / bunch", location: "Ibadan", description: "Crisp green, perfect for salads.", image: images.lettuce },
  { id:19, name: "Palm Oil (Pack)", price: 20000, displayPrice: "₦20,000 / pack", location: "Lagos", description: "Refined palm oil, 1 pack (est.)", image: images.palmoil },
  { id: 20, name: "Plantain", price: 5000, displayPrice: "₦5,000 / bunch", location: "Ibadan", description: "Fresh plantain, 1 bunch (est.)", image: images.plaintain },
  { id: 21, name: "Cassava", price: 6000, displayPrice: "₦6,000 / tuber", location: "Abuja", description: "Fresh cassava tuber (est.)", image: images.cassava },
  { id: 22, name: "Rice (Local)", price: 30000, displayPrice: "₦60,000 / 50 kg bag", location: "Enugu", description: "50 kg bag of local rice (est.)", image: images.rice },
  { id: 23, name: "Groundnuts", price: 6000, displayPrice: "₦6,000 / 1 kg bag", location: "Kaduna", description: "1 kg bag of groundnuts (est.)", image: images.groundnut },
  { id: 24, name: "Vegetables (Ugu)", price: 2000, displayPrice: "₦2,000 / bunch", location: "Lagos", description: "Fresh Ugu leaves, 1 bunch (est.)", image: images.vegetable },
  { id: 25, name: "Catfish (Fresh)", price: 8000, displayPrice: "₦8,000 / kg", location: "Ibadan", description: "Fresh catfish, per kg (est.)", image: images.catfish },
];

const Shop = () => {
  const [user, setUser] = useState(null); // Mock user state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ query: "", location: "", minPrice: "", maxPrice: "" });
  const [showCart, setShowCart] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true); // Toggles between Login and Signup forms
  const [selectedProduct, setSelectedProduct] = useState(null); // For product description modal

  useEffect(() => setProducts(sampleProducts), []);

  const handleAddToCart = (item) => {
    if (!user) {
      alert("⚠️ You must sign up or log in to add items to your cart.");
      setShowAuthModal(true); // Open auth modal if not logged in
      return;
    }
    setCart((prev) => {
      const existingItem = prev.find(p => p.id === item.id);
      if (existingItem) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setSelectedProduct(null); // Close product description if open
    setShowCart(true); // Show cart when item is added
  };

  const handleRemoveFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const handleUpdateQuantity = (id, change) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean)); // Remove item if quantity becomes 0
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("🟢 Checkout successful via escrow. Our logistics team will contact you. Thank you for shopping with Logi Protech!");
    setCart([]);
    setShowCart(false);
  };

  const filteredProducts = products.filter((item) => {
    const matchesQuery = filters.query
      ? item.name.toLowerCase().includes(filters.query.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.query.toLowerCase()) ||
        item.location.toLowerCase().includes(filters.query.toLowerCase())
      : true;
    const matchesLocation = filters.location ? item.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
    const matchesMinPrice = filters.minPrice ? item.price >= parseFloat(filters.minPrice) : true;
    const matchesMaxPrice = filters.maxPrice ? item.price <= parseFloat(filters.maxPrice) : true;
    return matchesQuery && matchesLocation && matchesMinPrice && matchesMaxPrice;
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    setUser("LogiPro User");
    setShowAuthModal(false);
    alert("Welcome back, LogiPro User!");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup logic
    setUser("New LogiPro User");
    setShowAuthModal(false);
    alert("Welcome to Logi Protech! Your account has been created.");
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white p-4 shadow-lg flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          {/* <img src="https://via.placeholder.com/40/ffffff/000000?text=LP" alt="Logi Protech Logo" className="h-10 w-10 rounded-full border-2 border-white" />
          <h1 className="text-3xl font-extrabold tracking-tight">Logi Protech AgriShop</h1> */}
          
        </div>
        <div className="flex items-center gap-6">
          <Link to="/"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200"
          >
            <FaHome className="text-xl" />Home
          </Link>
          {user ? (
            <span className="text-lg font-medium">Welcome, {user}</span>
          ) : (
            <button
              onClick={() => { setShowAuthModal(true); setIsLoginView(true); }} // Show login by default
              className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <FaUserPlus className="text-lg" /> Login
            </button>
          )}
          <button onClick={() => setShowCart((prev) => !prev)} className="relative p-2 rounded-full hover:bg-white/20 transition-all duration-300">
            <FaShoppingCart className="text-2xl" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold animate-bounce-custom">
                {totalCartItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center text-white" style={{ backgroundImage: `url(${images.bg})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center p-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in-down">Fresh from Farm to Table</h2>
          <p className="text-xl md:text-2xl font-light animate-fade-in-up">Quality produce delivered with LogiProtech</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-6 shadow-md rounded-b-lg flex flex-wrap gap-4 justify-center items-center -mt-8 relative z-30 mx-auto max-w-6xl">
        <div className="relative flex-grow max-w-sm">
          <input
            type="text"
            placeholder="Search by crop, description, or location..."
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            className="p-3 pl-10 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <input
          type="number"
          placeholder="Min Price (₦)"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          className="p-3 border border-gray-300 rounded-full w-32 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
        />
        <input
          type="number"
          placeholder="Max Price (₦)"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="p-3 border border-gray-300 rounded-full w-32 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
        />
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="p-3 border border-gray-300 rounded-full w-36 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 appearance-none pr-8"
        >
          <option value="">All Locations</option>
          {Array.from(new Set(products.map(p => p.location))).map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative overflow-hidden h-48">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">{product.description}</p>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-2">Location: <span className="font-semibold">{product.location}</span></p>
                <p className="text-green-700 font-extrabold text-xl">₦{product.price.toLocaleString()}</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }} // Stop propagation to prevent opening product description
                className="mt-5 bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold shadow-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-500 text-xl">
            No products found matching your filters.
          </div>
        )}
      </div>

      {/* Product Description Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl transform scale-95 animate-scale-in">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-3xl font-bold text-gray-800">{selectedProduct.name}</h3>
              <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-gray-800 text-2xl">
                <FaTimes />
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full md:w-1/2 h-60 object-cover rounded-lg shadow-md" />
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <p className="text-gray-700 text-lg mb-4">{selectedProduct.description}</p>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Location:</span> {selectedProduct.location}</p>
                  <p className="text-green-700 font-extrabold text-3xl mb-4">₦{selectedProduct.price.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl w-full max-w-sm z-50 transform transition-transform duration-500 ease-in-out ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">Your Cart ({totalCartItems})</h3>
          <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-800 text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="p-5 overflow-y-auto h-[calc(100vh-180px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-10">Your cart is empty. Start adding some fresh produce!</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-4 p-3 border rounded-lg shadow-sm bg-gray-50">
                  <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded-md" />
                  <div className="flex-grow">
                    <p className="font-semibold text-lg text-gray-800">{item.name}</p>
                    <p className="text-green-600 font-bold">₦{(item.price * item.quantity).toLocaleString()}</p>
                    <p className="text-gray-500 text-sm">₦{item.price.toLocaleString()} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleUpdateQuantity(item.id, -1)} className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300">-</button>
                    <span className="font-semibold text-lg">{item.quantity}</span>
                    <button onClick={() => handleUpdateQuantity(item.id, 1)} className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300">+</button>
                    <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700 ml-2">
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="absolute bottom-0 w-full bg-white p-5 border-t border-gray-200 shadow-lg">
          <div className="flex justify-between items-center font-bold text-xl mb-4 text-gray-900">
            <span>Total:</span>
            <span>₦{totalCartPrice.toLocaleString()}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-all duration-300 text-lg font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={cart.length === 0}
          >
            Checkout via Escrow
          </button>
          <button onClick={() => setShowCart(false)} className="mt-3 w-full py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg text-gray-700">
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Auth Modal (Login/Signup) */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transform scale-95 animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">{isLoginView ? "Welcome Back!" : "Join Logi Protech!"}</h3>
              <button onClick={() => setShowAuthModal(false)} className="text-gray-500 hover:text-gray-800 text-2xl">
                <FaTimes />
              </button>
            </div>

            {isLoginView ? (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label htmlFor="loginEmail" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="loginEmail"
                    placeholder="your@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                  <input
                    type="password"
                    id="loginPassword"
                    placeholder="********"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <a href="#" className="text-sm text-green-600 hover:underline mt-2 block text-right">Forgot Password?</a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300 text-lg font-semibold shadow-md"
                >
                  Login
                </button>
                <p className="text-center text-gray-600 text-sm mt-4">
                  Are you a new user?{" "}
                  <button type="button" onClick={() => setIsLoginView(false)} className="text-green-600 hover:underline font-semibold">
                    Click to register
                  </button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-5">
                <div>
                  <label htmlFor="signupEmail" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="signupEmail"
                    placeholder="your@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="signupPassword" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                  <input
                    type="password"
                    id="signupPassword"
                    placeholder="********"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="********"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300 text-lg font-semibold shadow-md"
                >
                  Register
                </button>
                <p className="text-center text-gray-600 text-sm mt-4">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setIsLoginView(true)} className="text-green-600 hover:underline font-semibold">
                    Login here
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Tailwind CSS Custom Styles & Animations */}
      <style>{`
        .animate-bounce-custom {
          animation: bounce-custom 1s infinite;
        }
        @keyframes bounce-custom {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.4s;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Shop;