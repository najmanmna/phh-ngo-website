import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slidesdata from "../data/hero_bgs.json";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesdata.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slidesdata.length) % slidesdata.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slidesdata.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section
      id="home"
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden"
    >
      {/* Background Slideshow */}
      {slidesdata.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-left h-full px-6 md:pl-24">
        <div
          className={`text-white max-w-2xl space-y-6 text-center md:text-left transition-all duration-1000 ${
            slidesdata[current].customPadding || ""
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {slidesdata[current].heading}
          </h1>

          {slidesdata[current].showSubtext && (
            <p className="text-base md:text-lg">
              {slidesdata[current].subtext}
            </p>
          )}

          {slidesdata[current].showButton && (
            <a
              href="#about"
              className="inline-block px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-md hover:bg-secondary hover:text-black transition"
            >
              About Us
            </a>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className=" hidden absolute left-5 bottom-2 transform -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full md:top-1/2"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className=" hidden absolute right-5 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-20">
        {slidesdata.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
