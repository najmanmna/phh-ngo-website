import React, { useRef, useEffect, useState } from "react";
import { FileText, Eye } from "lucide-react"; // optional icon lib

export default function About() {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const newsletterPDF = "/newsletter.pdf";

  return (
    
    <section
      id="about"
      className="py-20 px-4 md:px-12 lg:px-24"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23224d2f' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Heading & Description */}
        <div className="text-center">
          {/* <h4 className="uppercase text-sm tracking-widest text-blue-600 font-medium mb-3">
            Know About Us
          </h4> */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
            We are a Non-Governmental Organization
          </h2>
          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
            Patients Helping Hands (PHH) is a student-run NGO at Sindh Medical
            College, serving patients at NICH, NICVD, and JPMC through
            compassion and collective effort.
          </p>
        </div>

        {/* Newsletter + Video */}
        <div className="grid md:grid-cols-2 bg-primary rounded-md gap-10 items-start content-center md:p-10">
          {/* Newsletter Section */}
          <div className=" p-8 md:p-12  self-center">
            <div className="flex items-center gap-3 mb-4 text-gray-300">
              <FileText size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold">View Our Newsletter</h3>
            </div>
            <p className="text-gray-300 text-[16px] leading-relaxed mb-6 mt-6">
              Stay updated with our latest initiatives, success stories, and
              future goals. Our official newsletter captures the heart of our
              journey.
            </p>
            <a
              href={newsletterPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2  bg-green-600  hover:bg-green-500 text-white font-medium py-2.5 px-5 rounded-xl shadow-md transition"
            >
              <Eye size={18} />
              View Newsletter
            </a>
          </div>

          {/* Video Section */}
          <div
            ref={videoRef}
            className={`rounded-xl overflow-hidden w-full h-64 md:h-80 lg:h-[350px] transition-opacity duration-700`}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/h9f9gY4Fy8k?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0"
              title="PHH Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-16 px-4">
          {/* Mission */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h5 className="uppercase text-sm text-darkblue font-semibold tracking-widest mb-2">
              Our Mission
            </h5>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Inclusive care for children with special needs
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              We aim to support underprivileged patients, especially children
              with chronic conditions, ensuring they get holistic care and
              dignity through student-led efforts.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h5 className="uppercase text-sm text-darkblue font-semibold tracking-widest mb-2">
              Our Vision
            </h5>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expanding compassionate care across communities
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              We envision a future where no patient is left behind — where
              students become a pillar of hope and action across Pakistan and
              beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
