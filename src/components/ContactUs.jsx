import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
  const [activeMap, setActiveMap] = useState("location1");

  const maps = {
    location1: {
      name: "Office Location",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8990151128774!2d67.0811475!3d24.867298400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea56e5fcd31%3A0x32188ffb6c513091!2sSky%20Mark%20Tower%D8%8C%20KCHSU%20Ltd%D8%8C%20Plot%20A%2F13%20Shahra-e-Faisal%2C%20Jinnah%20Housing%20Society%20P.E.C.H.S.%2C%20Karachi%2C%2075350!5e0!3m2!1sen!2s!4v1746890981260!5m2!1sen!2s",
    },
    location2: {
      name: "University Location",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3706177423155!2d67.0451054!3d24.851188499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd546e80561%3A0x9fac68702d86bd41!2sJinnah%20Sindh%20Medical%20University!5e0!3m2!1sen!2s!4v1746890811787!5m2!1sen!2s",
    },
  };

  return (
    <section id="contact" className="bg-[#0f3d2e] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full bg-lime-300/20 blur-2xl"></div>
            <div className="relative z-10 rounded-full bg-white/70 backdrop-blur-md border border-white/20 flex items-center justify-center w-full h-full hover:bg-white/80">
              <img
                src="/phh-nobg.png"
                alt="PHH Logo"
                className="w-36 h-36 object-contain"
              />
            </div>
          </div>

          <p className="text-lg font-medium leading-relaxed">
            Join us in lending a hand so we can make a difference together
          </p>

          <div className="flex items-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/company/phh-welfare"
              className="bg-white text-darkblue p-2 rounded-full hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/patients.helping.hands/"
              className="bg-white text-darkblue p-2 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/patientshelpinghands/"
              className="bg-white text-darkblue p-2 rounded-full hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@phhwelfare/videos"
              className="bg-white text-darkblue p-2 rounded-full hover:scale-110 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Center Column - Contact Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white mb-10">CONTACT US</h2>
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="mt-1 text-secondary" />
            <p>
              Rafiqui H.J, Iqbal Shaheed Rd, Karachi Cantonment Karachi, 75510
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <FaEnvelope className="mt-1 text-secondary" />
            <p>office.phh@gmail.com</p>
          </div>
          <div className="flex items-start space-x-3">
            <FaPhoneAlt className="mt-1 text-secondary" />
            <p>03322943245 / 03272042428</p>
          </div>
        </div>

        {/* Right Column - Tabbed Map */}
        <div>
          <div className="flex space-x-2 mb-4">
            {Object.entries(maps).map(([key, { name }]) => (
              <button
                key={key}
                onClick={() => setActiveMap(key)}
                className={`px-3 py-1 rounded text-sm ${
                  activeMap === key
                    ? "bg-green-600 text-gray-100"
                    : "bg-white text-primary hover:bg-gray-300"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <iframe
            title={maps[activeMap].name}
            src={maps[activeMap].src}
            className="w-full h-64 rounded-md shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-gray-500 pt-6 text-center text-sm text-gray-300">
        Copyright © 2025 Patients Helping Hands Welfare Association. All Rights
        Reserved.
      </div>

      {/* Back to Top Button */}
      <button
        className="fixed bottom-6 right-6 bg-green-600 text-white hover:text-green-900  p-3 rounded-full shadow-lg hover:bg-green-400 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaAngleDoubleUp className=" font-bold text-lg " />
      </button>
    </section>
  );
}
