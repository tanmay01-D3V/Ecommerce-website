// HeroCarousel.jsx

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
        "https://i.pinimg.com/736x/7d/39/39/7d3939a449d49568723455058462e0c3.jpg",
    tag: "RELEASE V2.04",
    title: "RAW\nHARDWARE",
    description:
      "Industrial aesthetics engineered for peak digital performance. Experience the new standard of tactile precision.",
  },

  {
    image:
        "https://i.pinimg.com/1200x/d1/8c/cc/d18ccc741af9939a6fd7836875bc722c.jpg",
    tag: "NEXT GEN",
    title: "MECH\nCONTROL",
    description:
      "Built for creators, gamers and engineers who demand unmatched speed and feedback.",
  },

  {
    image:
      "https://i.pinimg.com/1200x/c0/35/65/c03565d4ac59ee1107b37d858a5b88ea.jpg",
    tag: "2026 DROP",
    title: "DIGITAL\nPOWER",
    description:
      "Precision-crafted systems designed for immersive workflow experiences.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // NEXT
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // PREV
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* CONTENT */}
          <div className="absolute bottom-44 left-20 z-20 text-white max-w-2xl">

            {/* TAG */}
            <div className="border border-white inline-block px-4 py-2 text-xs tracking-[3px] font-semibold mb-8">
              {slide.tag}
            </div>

            {/* TITLE */}
            <h1 className="text-6xl md:text-7xl font-black leading-[0.9] mb-8 whitespace-pre-line">
              {slide.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-xl text-gray-200 leading-relaxed mb-10">
              {slide.description}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-5">

              <button className="bg-[#5B21B6] hover:bg-[#6D28D9] transition px-10 py-5 text-lg font-bold tracking-[2px]">
                SHOP SPECS
              </button>

              <button className="border border-white hover:bg-white hover:text-black transition px-10 py-5 text-lg font-bold tracking-[2px]">
                CATALOG
              </button>

            </div>
          </div>
        </div>
      ))}

      {/* INDICATORS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute right-28 bottom-20 z-30 border border-white w-16 h-16 flex items-center justify-center hover:bg-white hover:text-black transition"
      >
        <ChevronLeft size={30} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-8 bottom-20 z-30 border border-white w-16 h-16 flex items-center justify-center hover:bg-white hover:text-black transition"
      >
        <ChevronRight size={30} />
      </button>

      {/* BOTTOM STATS */}
      <div className="absolute bottom-0 left-0 w-full grid grid-cols-4 bg-[#f3f3f3] z-30">

        {[
          ["LATENCY", "0.12ms"],
          ["MATERIAL", "T6-ALU"],
          ["NETWORK", "ENCRYPTED"],
          ["UPTIME", "99.9%"],
        ].map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 px-10 py-10"
          >
            <p className="text-xs tracking-[3px] text-gray-500 mb-5">
              {item[0]}
            </p>

            <h2 className="text-4xl font-black text-[#1a1a1a]">
              {item[1]}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;