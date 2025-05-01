import React, { useState, useEffect } from "react";
import messages from "../data/messages.json";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function MessagesCarousel() {
  const [current, setCurrent] = useState(0);
  const total = messages.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="flex items-center justify-left space-x-4 ml-3 mb-4 md:ml-24">
        <span className="w-10 h-[2px] bg-gray-600"></span>
        <h4 className="uppercase text-xs tracking-widest text-gray-600">
          Voices of Support
        </h4>
      </div>
      <div className="max-w-4xl mx-auto  text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-gray-800">
          Messages from Notable People
        </h2>

        <div className="relative">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-[280px] md:w-[480px] md:h-[360px] mx-auto flex flex-col justify-between">
            <Quote className="text-green-500 w-8 h-8 mx-auto mb-4" />
            <p className="text-gray-700 italic mb-6">
              "{messages[current].message}"
            </p>
            <div className="flex flex-col items-center">
              <img
                src={messages[current].photo}
                alt={messages[current].name}
                className="w-16 h-16 object-cover rounded-full mb-2"
              />
              <p className="font-semibold text-gray-800">
                {messages[current].name}
              </p>
              <p className="text-sm text-gray-500">{messages[current].title}</p>
            </div>
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
