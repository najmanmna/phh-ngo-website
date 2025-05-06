import React, { useState, useEffect } from "react";
import messages from "../data/messages.json";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function MessagesCarousel() {
  const [index, setIndex] = useState(0);
  const total = messages.length;

  const showMessages = () => {
    // Get current and next message, wrapping if needed
    const first = messages[index];
    const second = messages[(index + 1) % total];
    return [first, second];
  };

  const next = () => {
    setIndex((prev) => (prev + 2) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 2 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % total);
    }, 8000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="flex items-center justify-left space-x-4 ml-3 mb-4 md:ml-24">
        <span className="w-10 h-[2px] bg-gray-600"></span>
        <h4 className="uppercase text-xs tracking-widest text-gray-600">
          Testimonials
        </h4>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-primary">
          Messages from Notable People
        </h2>

        <div className="relative">
          <div className="flex justify-center gap-8 flex-wrap transition-all duration-500">
            {showMessages().map((msg, i) => (
              <div
                key={`${msg.name}-${i}`}
                className="bg-white p-8 rounded-2xl shadow-lg w-[280px] md:w-[480px] md:h-[520px] flex flex-col justify-between"
              >
                <Quote className="text-green-500 w-8 h-8 mx-auto mb-4" />
                <p className="text-gray-700 italic mb-6">"{msg.message}"</p>
                <div className="flex flex-col items-center">
                  <img
                    src={msg.photo}
                    alt={msg.name}
                    className="w-16 h-16 object-cover rounded-full mb-2"
                  />
                  <p className="font-semibold text-primary">{msg.name}</p>
                  <p className="text-sm text-gray-500">{msg.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-between mt-8 px-12">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
