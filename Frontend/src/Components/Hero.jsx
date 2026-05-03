import React, { useState, useEffect } from "react";
import { defaultData } from "../utils/consts";
import ThreeJsCanvas from "./ThreeJsCanvas";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = defaultData;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-outer-container relative w-full h-[65vh] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Carousel Container */}
      <div className="hero-carousel relative w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === currentSlide
                ? "translate-x-0 opacity-100"
                : index < currentSlide
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="hero-slide-layout flex w-full h-full">
              {/* Left Half - 3D Canvas (only for last slide) */}
              <div className="hero-canvas-wrapper w-[40%] h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 px-6">
                {slide.scene ? (
                  <div className="w-full max-w-[600px] h-full flex items-center justify-center">
                    <ThreeJsCanvas scene={slide.scene} />
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">👟</div>
                    <p className="text-xl opacity-70">Coming Soon</p>
                  </div>
                )}
              </div>

              {/* Right Half - Content */}
              <div className="hero-content-wrapper w-[60%] h-full flex flex-col justify-center items-center p-12 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
                <div className="text-center max-w-lg">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Shop Now
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
