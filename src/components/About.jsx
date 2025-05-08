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

  const newsletterPDF =
    "https://www.dropbox.com/scl/fi/ah88ms4rhoq8ys7ocgggt/Phh-newsletter.pdf?rlkey=4xad3izpbu5lqszq550ksshh4&st=6cb09uyj&dl=0";

  return (
    <section
      id="about"
      className="py-10 px-4 md:px-12 lg:px-24"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23224d2f' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Heading & Description */}
        <div className="flex items-center space-x-4 mb-4 justify-left">
          <span className="w-10 h-[1px] bg-gray-600"></span>
          <h4 className="uppercase text-xs tracking-widest text-gray-600">
            A look into our mission
          </h4>
        </div>
        <div className="flex-col flex lg:flex-row  items-center justify-center lg:gap-x-32 lg:ml-28">
          {" "}
          <h2 className="text-3xl text-center  sm:text-6xl font-extrabold text-primary leading-tight">
            About Us
          </h2>
          <p className="mt-5 ml-5 text-gray-600 text-lg max-w-3xl mx-auto">
            Patients Helping Hands (PHH) is a non-profit, student-run
            organization from Jinnah Sindh Medical University. Founded in 2011
            by a group of passionate medical students, PHH is dedicated to
            supporting underprivileged patients through compassion, service, and
            collective action. Operating across three major public hospitals in
            Karachi—Jinnah Postgraduate Medical Centre (JPMC), the National
            Institute of Child Health (NICH), and the National Institute of
            Cardiovascular Diseases (NICVD)—PHH works to bridge the gap between
            patients in need and timely medical support. Through tireless
            volunteer efforts, we continue to serve humanity with empathy, hope,
            and hands-on care.
          </p>
        </div>

        {/* Newsletter + Video */}
        <div className="grid  lg:grid-cols-2 sm:bg-primary rounded-md gap-10 items-start content-center md:p-10">
          {/* Newsletter Section */}
          <div className="order-2 md:order-1 bg-primary p-8 md:p-12  self-center">
            <div className="flex items-center gap-3 mb-4 text-gray-200">
              <FileText size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold">
                Read Our Newsletter
              </h3>
            </div>
            <p className="text-gray-200 text-[16px] leading-relaxed mb-6 mt-6">
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
            className={`rounded-xl order-1 md:order-2 overflow-hidden w-full h-64 md:h-80 lg:h-[350px] transition-opacity duration-700`}
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
          {/* Vision */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h5 className="uppercase text-sm text-primary font-semibold tracking-widest mb-2">
              Our Vision
            </h5>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              At PHH, our vision is to ensure that every patient at JPMC has
              access to free, quality healthcare, regardless of their background
              or circumstances. We are committed to bridging the gap between
              need and care, so that no one is denied the treatment they
              deserve.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h5 className="uppercase text-sm text-primary font-semibold tracking-widest mb-2">
              Our Mission
            </h5>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              PHH’s mission is to serve as a gateway for medical students at
              Jinnah Sindh Medical University and community members to reach and
              support those in need at JPMC. Through this journey of service, we
              aim not only to help the underserved but also to shape
              compassionate individuals, creating better humans alongside better
              doctors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
