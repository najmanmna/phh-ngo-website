import React, { useRef, useEffect } from 'react';
import highlightedProjects from '../data/highlightedProjects.json';
import { gsap } from 'gsap';

export default function ProjectHighlights() {
  const trackRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    // Duplicate the cards for seamless looping
    const cards = track.querySelectorAll('.highlight-card');
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    // Animate the strip
    tl.current = gsap.to(track, {
      xPercent: -50,
      ease: 'none',
      duration: 50,
      repeat: -1,
    });

    // Pause on hover
    track.querySelectorAll('.highlight-card').forEach((card) => {
      card.addEventListener('mouseenter', () => tl.current.pause());
      card.addEventListener('mouseleave', () => tl.current.resume());
    });

    return () => {
      tl.current.kill();
    };
  }, []);

  return (
    <section className="relative w-full py-14 bg-green-900 overflow-hidden">
      {/* <h2 className="text-center text-white text-3xl font-semibold mb-8">Project Highlights</h2> */}

      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 px-6 w-max"
        >
          {highlightedProjects.map((proj, i) => (
            <div
              key={i}
              className="highlight-card w-[260px] h-[240px] bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="h-[120px] w-full object-cover"
              />
              <div className="p-3">
                <h3 className="text-primary text-md font-bold">{proj.title}</h3>
                <p className="text-gray-700 text-sm mt-1 line-clamp-3">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
