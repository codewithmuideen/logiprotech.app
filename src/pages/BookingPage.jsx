import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const GOOGLE_MAPS_API_KEY = "AIzaSyCli5Sgn2QJaF5safy_PV2wIad1KgTeKKQ";

const BookingPage = () => {
  const [coords, setCoords] = useState({ lat: 6.5244, lng: 3.3792 });
  const [city, setCity] = useState("Lagos");
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    destination: "",
    phone: "", // Added phone field
    farm: "",
    logistics: "",
    weight: "",
    notes: "",
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

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
          const newCoords = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
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

  const nextStep = () => {
    if (step === 2 && !form.destination) {
      setError("Please enter a destination.");
      return;
    }
    if (step === 2 && !form.phone) {
      setError("Please enter your phone number.");
      return;
    }
    if (step === 3 && !form.farm) {
      setError("Please select a farm.");
      return;
    }
    if (step === 4 && (!form.logistics || !form.weight)) {
      setError("Please select logistics type and enter weight.");
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, 5));
  };

  const prevStep = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleRegister = () => {
    setProcessing(true);
    setError("");
    setBookingSuccess(false);

    setTimeout(() => {
  setProcessing(false);
  // Always show booking success
  setBookingSuccess(true);

  // Reset form and modal after 3 seconds
  setTimeout(() => {
    setStep(1);
    setForm({
      destination: "",
      phone: "",
      farm: "",
      logistics: "",
      weight: "",
      notes: "",
    });
    setBookingSuccess(false);
  }, 3000);
}, 2000);

  };

  return (
    <section className="relative min-h-screen w-full flex flex-col">
      {/* Back Home Button */}
      

      {/* Google Map */}
      <div className="flex-grow relative w-full h-full min-h-[40vh] md:min-h-[50vh]">
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
      </div>

      {/* Booking Form */}
      <div className="relative z-10 w-full flex justify-center py-8 px-4 bg-gray-50 md:py-12">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 relative animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Book Your Logistics
          </h2>

          {bookingSuccess && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
              <p className="font-bold">Booking Confirmed!</p>
              <p>
  Your logistics request has been successfully finalized. Our available logistics team will contact you shortly to coordinate the delivery.
</p>

            </div>
          )}

          {step === 1 && (
            <div className="text-center">
              <FaMapMarkerAlt className="mx-auto text-orange-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Confirm your location</h3>
              {loading ? <p className="text-gray-600 mb-6">Detecting your city...</p> : <p className="text-gray-600 mb-6">📍 {city}</p>}
              <button onClick={nextStep} className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 transition-all duration-300">
                Next
              </button>
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
                className="w-full p-3 border border-gray-300 rounded-lg mb-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
              <div className="flex justify-between mt-4">
                <button onClick={prevStep} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200">Back</button>
                <button onClick={nextStep} className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200">Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Select Farm</h3>
              <select value={form.farm} onChange={(e) => setForm({ ...form, farm: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg mb-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                <option value="">-- Choose a farm --</option>
                {farms.map((farm) => <option key={farm} value={farm}>{farm}</option>)}
              </select>
              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
              <div className="flex justify-between mt-4">
                <button onClick={prevStep} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200">Back</button>
                <button onClick={nextStep} className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200">Next</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Logistics Details</h3>
              <select value={form.logistics} onChange={(e) => setForm({ ...form, logistics: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                <option value="">-- Select logistics type --</option>
                {logisticsOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <input type="number" placeholder="Weight in KG" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
              <textarea placeholder="Additional notes (optional)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg mb-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="3" />
              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
              <div className="flex justify-between mt-4">
                <button onClick={prevStep} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200">Back</button>
                <button onClick={nextStep} className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200">Next</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Confirm Your Booking</h3>
              <div className="bg-gray-100 p-4 rounded-lg text-left mb-6">
                <p className="mb-2"><strong>📍 Location:</strong> {city}</p>
                <p className="mb-2"><strong>🏠 Destination:</strong> {form.destination}</p>
                <p className="mb-2"><strong>📞 Phone:</strong> {form.phone}</p>
                <p className="mb-2"><strong>🌾 Farm:</strong> {form.farm}</p>
                <p className="mb-2"><strong>🚚 Logistics:</strong> {form.logistics}</p>
                <p className="mb-2"><strong>⚖️ Weight:</strong> {form.weight} kg</p>
                <p className="mb-0"><strong>📝 Notes:</strong> {form.notes || "None"}</p>
              </div>

              {error && <p className="text-red-600 font-medium mb-4">{error}</p>}

              <div className="flex justify-between mt-4">
                <button onClick={prevStep} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200">Back</button>
                <button onClick={handleRegister} disabled={processing} className="px-8 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 disabled:opacity-50 transition-colors duration-200">
                  {processing ? "Processing..." : "Book Now"}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default BookingPage;
