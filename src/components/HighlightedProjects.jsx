import React, { useRef, useEffect } from "react";
import highlightedProjects from "../data/highlightedProjects.json";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectHighlights() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    // Duplicate cards for infinite scrolling
    const cards = track.querySelectorAll(".highlight-card");
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    // Animate the strip
    tl.current = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 120,
      repeat: -1,
    });

    // Pause on hover
    track.querySelectorAll(".highlight-card").forEach((card) => {
      card.addEventListener("mouseenter", () => tl.current.pause());
      card.addEventListener("mouseleave", () => tl.current.resume());
    });

    return () => {
      tl.current.kill();
    };
  }, []);

  // Manual scroll handlers
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-14 bg-green-900 overflow-hidden">
      <h2 className="text-center text-white text-3xl font-semibold mb-8">
        One-time Projects
      </h2>

      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white text-green-700 p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white text-green-700 p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        <ChevronRight />
      </button>

      <div
        ref={containerRef}
        className="relative w-full overflow-x-scroll scrollbar-hide"
      >
        <div ref={trackRef} className="flex gap-6 px-6 w-max">
          {highlightedProjects.map((proj, i) => (
            <div
              key={i}
              className="highlight-card group w-[260px] h-[250px] [perspective:1000px] flex-shrink-0 cursor-pointer"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden backface-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-primary/70 text-center font-semibold py-2 px-3">
                    <h3 className="text-white text-md font-bold text-center">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute content-center inset-0 bg-white rounded-xl shadow-md overflow-hidden backface-hidden [transform:rotateY(180deg)] p-4">
                  <h4 className="text-primary text-md font-bold text-center mb-4">
                    {proj.title}
                  </h4>
                  <p className="text-gray-700 text-sm line-clamp-6">
                    {proj.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
