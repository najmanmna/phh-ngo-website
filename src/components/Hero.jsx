import React from "react";
import bgImage from "../assets/BG_image.png"; // Replace with actual background image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[90vh] md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-left h-full px-6 md:pl-24">
        <div className="text-white max-w-2xl space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Together, We Bring <br /> Hope and Healing
          </h1>
          <p className="text-base md:text-lg">
            Patients Helping Hands – a student-led initiative at SMC, serving
            lives across NICH, NICVD, and JPMC.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-md hover:bg-green-400 hover:text-black transition"
          >
            Our Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
