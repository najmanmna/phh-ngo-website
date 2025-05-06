import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0f3d2e] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-4">
          <img src="/PHH_LOGO.jpg" alt="PHH Logo" className="w-32" />
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
              href="https://www.facebook.com/patients.helping.hands/ "
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
            <p>03322943245 / 03272042428 </p>
          </div>
        </div>

        {/* Right Column - Map */}
        <div>
          <iframe
            className="w-full h-64 rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.993412162885!2d67.00838937533127!3d24.831849777944123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eecedbd5483%3A0x209dfd46a85dcd58!2sPatients&#39;%20Welfare%20Association!5e0!3m2!1sen!2s!4v1682753319357!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-gray-500 pt-6 text-center text-sm text-gray-300">
        Copyright © 2025 Patients Helping Hands Welfare Assosiation. All Rights
        Reserved.
      </div>

      {/* Back to Top Button */}
      <button
        className="fixed bottom-6 right-6 bg-green-200 text-darkblue p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </section>
  );
}
