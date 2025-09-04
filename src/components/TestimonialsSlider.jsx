import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// As requested, import your images from a constants file
 import images from '../constants/images';




// Suggested testimonial data. You can easily expand this array.
const testimonialsData = [
  {
    image: images.a0,
    quote: "I used to wait for weeks to get my land ready. Now, I just tell my booking agent and the tractor comes in a day or two. It's faster and my crops are doing better.",
    name: "Meshack Owira",
    role: "Farmer, Nigeria",
  },
  {
    image: images.a1,
    quote: "The service is a game-changer. My planting season started on time, which led to a 30% increase in my harvest. For the first time, I have a surplus to sell at the market.",
    name: "David Kiptoo",
    role: "Smallholder Farmer, Nigeria",
  },
  {
    image: images.a2,
    quote: "As a woman in agriculture, access to machinery was always a challenge. This platform has empowered me to manage my farm efficiently and independently. I feel more in control of my future.",
    name: "Amina Bello",
    role: "Farm Owner, Nigeria",
  },
  {
    image: images.a3,
    quote: "Booking tractors for our entire cooperative used to be a logistical nightmare. Now, I can coordinate everything from my phone, saving us valuable time and reducing costs for everyone.",
    name: "Samuel Githinji",
    role: "Cooperative Leader, Nigeria",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonialsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === testimonialsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="bg-[#181818] text-white font-sans py-20 sm:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <img src={images.avatar} alt="Avatar" className="w-20 h-20" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              What Our Clients Say About Us
            </h2>
          </div>
        </header>

        {/* Slider Body */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative w-full aspect-[4/4] sm:aspect-[5/4] lg:aspect-auto lg:h-[450px]">
                <img
                  key={currentIndex} // Add key to re-trigger animation on change
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/30 animate-fade-in"
                />
            </div>

            {/* Text Side */}
            <div className="relative flex flex-col justify-center text-center lg:text-left">
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8">
                {currentTestimonial.quote}
              </p>
              <div className="w-12 h-1 bg-orange-500 mb-6 mx-auto lg:mx-0"></div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-zinc-400">{currentTestimonial.role}</p>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-20 transform bg-black/40 hover:bg-black/70 transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center z-10"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-20 transform bg-black/40 hover:bg-black/70 transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center z-10"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>
      </div>
       {/* Simple fade-in animation for the image */}
       <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0.5; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;