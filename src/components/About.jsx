import React from "react";
import AboutImage from "../assets/about_image.png";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-3">
          <span className="w-10 h-[1px] bg-gray-500"></span>
          <h4 className="uppercase text-xs tracking-widest text-gray-500">
            Know About Us
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12 m-20">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-600 leading-tight mb-4">
              We are a <br /> non-governmental <br /> organization
            </h2>
          </div>
          <div className="text-gray-700 text-[17px] leading-relaxed">
            <p>
              Patients Helping Hands (PHH) is a student-operated NGO at Sindh
              Medical College, dedicated to supporting patients in need. Through
              compassion, service, and collective effort, we extend care across
              three major hospitals: National Institute of Child Health (NICH),
              National Institute of Cardiovascular Diseases (NICVD), and Jinnah
              Postgraduate Medical Centre (JPMC). Our mission is simple — to
              serve humanity with empathy and action.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden mb-16">
            <div className="relative w-full h-[350px] md:h-[420px] lg:h-[480px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/h9f9gY4Fy8k?autoplay=1&=1&controls=0&modestbranding=1&rel=0&showinfo=0"
                title="PHH Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-20 ">
          <div className="shadow-lg p-8 m-auto h-[260px]">
            <h5 className="uppercase text-sm text-gray-500 tracking-widest mb-2">
              Our Mission
            </h5>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              We make sure to provide inclusive care for children with special
              needs
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>

          <div className="shadow-lg p-8 m-auto h-[260px]">
            <h5 className="uppercase text-sm text-gray-500 tracking-widest mb-2">
              Our Vision
            </h5>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Provide more inclusive care to children around the world
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
