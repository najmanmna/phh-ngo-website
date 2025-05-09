import React from "react";

export default function Preloader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
      {/* Logo with fade-in and scale */}
      <img
        src="/PHH_LOGO_NOBG.png"
        alt="PHH Logo"
        className="w-56  animate-[fadeInScale_1.2s_ease-in-out_forwards]"
      />
      {/* Subtitle Text */}
      <p className="text-primary uppercase text-center text-md md:text-lg font-semibold tracking-wide opacity-0 animate-[fadeUp_1.2s_ease-in-out_0.5s_forwards]">
        Patients Helping Hands
      </p>
      <p className="text-primary uppercase mb-6 text-center text-md md:text-lg font-semibold tracking-wide opacity-0 animate-[fadeUp_1.2s_ease-in-out_0.5s_forwards]">
        Welfare Association
      </p>

      {/* Animated Bouncing Dots */}
      <div className="flex space-x-2 mt-6">
        <div
          className="h-3 w-3 bg-green-700 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="h-3 w-3 bg-green-700 rounded-full animate-bounce"
          style={{ animationDelay: "0.15s" }}
        />
        <div
          className="h-3 w-3 bg-green-700 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        />
      </div>

      {/* Custom animations using Tailwind plugin or extend */}
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
