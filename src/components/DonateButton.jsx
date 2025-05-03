import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function DonateButton() {
  const [showHearts, setShowHearts] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowHearts(true)}
      onMouseLeave={() => setShowHearts(false)}
    >
      <Link
        to="/donate"
        className="relative z-10 inline-flex items-center justify-center overflow-hidden text-white bg-gradient-to-br from-[#224d2f] to-[#64c76a] rounded-full px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Heart className="mr-2 w-4 h-4" />
        Donate Now
      </Link>

      {showHearts && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 space-x-2 flex">
          <svg
            className="w-4 h-4 text-pink-400 animate-float-heart"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42
                     4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81
                     14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4
                     6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <svg
            className="w-5 h-5 text-red-400 animate-float-heart delay-[200ms]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42
                     4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81
                     14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4
                     6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <svg
            className="w-3.5 h-3.5 text-pink-300 animate-float-heart delay-[400ms]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42
                     4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81
                     14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4
                     6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div>
      )}

      <style jsx>{`
        @keyframes float-heart {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.8);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(1.2);
          }
        }
        .animate-float-heart {
          animation: float-heart 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
