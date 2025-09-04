import React, { useEffect, useState } from "react";
import { FaArrowRight, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const GOOGLE_MAPS_API_KEY = "AIzaSyCli5Sgn2QJaF5safy_PV2wIad1KgTeKKQ";

const HubLocator = () => {
  const [coords, setCoords] = useState({ lat: 6.5244, lng: 3.3792 });
  const [city, setCity] = useState("Lagos");
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    destination: "",
    phone: "",
    farm: "",
    logistics: "",
    weight: "",
    notes: "",
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false); // <-- New state

  const farms = [
    "Ogun Fresh Farms",
    "Kaduna Agro Estate",
    "Jos Green Valley",
    "Ibadan Harvest Fields",
    "Enugu Sunrise Farms",
    "Abuja Eco Agro",
  ];

  const logisticsOptions = ["Bike Delivery", "Mini Van", "Truck"];

  const getCityFromCoords = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        const addressComponents = data.results[0].address_components;
        const cityComponent = addressComponents.find(
          (component) =>
            component.types.includes("locality") ||
            component.types.includes("administrative_area_level_2") ||
            component.types.includes("administrative_area_level_1")
        );
        if (cityComponent) setCity(cityComponent.long_name);
        else setCity("Unknown Location");
      } else setCity("Unknown Location");
    } catch (error) {
      console.error("Error fetching city:", error);
      setCity("Unknown Location");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setCoords(newCoords);
          getCityFromCoords(newCoords.lat, newCoords.lng);
        },
        () => {
          setLoading(false);
          setCity("Lagos (Default)");
        }
      );
    } else {
      setLoading(false);
      setCity("Lagos (Default)");
    }
  }, []);

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleRegister = () => {
    setProcessing(true);
    setError("");

    setTimeout(() => {
  setProcessing(false);
  setShowConfirmation(true); // Always succeed
}, 2000);

  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setOpenModal(false);
    setStep(1);
    setForm({ destination: "", phone: "", farm: "", logistics: "", weight: "", notes: "" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center">
      {!loading && (
        <iframe
          title="User Location Map"
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${coords.lat},${coords.lng}&zoom=13&maptype=roadmap`}
        ></iframe>
      )}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-md bg-[#222529]/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/40 p-8 md:p-10 text-white">
          <div className="flex justify-start mb-6">
           
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Find our Logistics Around You
          </h2>
          <button
            onClick={() => setOpenModal(true)}
            className="group inline-flex items-center bg-zinc-800 rounded-full transition-all duration-300 hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
          >
            <span className="text-lg font-semibold py-4 px-8 border-r border-zinc-700 group-hover:border-zinc-600">
              Book now
            </span>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute bg-[#F95738] rounded-full w-12 h-12 flex items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/30">
                <FaArrowRight className="text-white text-xl group-hover:-rotate-45" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            {/* Steps */}
            {step === 1 && (
              <div className="text-center">
                <FaMapMarkerAlt className="mx-auto text-orange-500 text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">This is your current location</h3>
                {loading ? <p className="text-gray-600 mb-6">Detecting your city...</p> : <p className="text-gray-600 mb-6">📍 {city}</p>}
                <button onClick={nextStep} className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600">Next</button>
              </div>
            )}
            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Enter Destination & Phone</h3>
                <input
                  type="text"
                  placeholder="Enter delivery destination"
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  className="w-full p-3 border rounded-lg mb-4"
                />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full p-3 border rounded-lg mb-6"
                />
                <div className="flex justify-between">
                  <button onClick={prevStep} className="px-6 py-2 bg-gray-200 rounded-lg">Back</button>
                  <button onClick={nextStep} className="px-6 py-2 bg-orange-500 text-white rounded-lg">Next</button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Select Farm</h3>
                <select value={form.farm} onChange={(e) => setForm({ ...form, farm: e.target.value })} className="w-full p-3 border rounded-lg mb-6">
                  <option value="">-- Choose a farm --</option>
                  {farms.map((farm) => <option key={farm} value={farm}>{farm}</option>)}
                </select>
                <div className="flex justify-between">
                  <button onClick={prevStep} className="px-6 py-2 bg-gray-200 rounded-lg">Back</button>
                  <button onClick={nextStep} className="px-6 py-2 bg-orange-500 text-white rounded-lg">Next</button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Logistics Details</h3>
                <select value={form.logistics} onChange={(e) => setForm({ ...form, logistics: e.target.value })} className="w-full p-3 border rounded-lg mb-4">
                  <option value="">-- Select logistics type --</option>
                  {logisticsOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <input type="number" placeholder="Weight in KG" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} className="w-full p-3 border rounded-lg mb-4" />
                <textarea placeholder="Additional notes (optional)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full p-3 border rounded-lg mb-6" rows="3" />
                <div className="flex justify-between">
                  <button onClick={prevStep} className="px-6 py-2 bg-gray-200 rounded-lg">Back</button>
                  <button onClick={nextStep} className="px-6 py-2 bg-orange-500 text-white rounded-lg">Next</button>
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Complete Booking</h3>
                <p className="mb-2">📍 Location: {city}</p>
                <p className="mb-2">🏠 Destination: {form.destination}</p>
                <p className="mb-2">📞 Phone: {form.phone || "Not provided"}</p>
                <p className="mb-2">🌾 Farm: {form.farm}</p>
                <p className="mb-2">🚚 Logistics: {form.logistics}</p>
                <p className="mb-2">⚖️ Weight: {form.weight} kg</p>
                <p className="mb-6">📝 Notes: {form.notes || "None"}</p>
                {error && <p className="text-red-600 font-medium mb-4">{error}</p>}
                <button onClick={handleRegister} disabled={processing} className="px-8 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 disabled:opacity-50">
                  {processing ? "Processing..." : "Book Now"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Booking Confirmed!</h3>
          <p className="mb-6">
  Your logistics request has been successfully finalized. Our available logistics team will contact you shortly to coordinate the delivery.
</p>

            <button onClick={closeConfirmation} className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HubLocator;
