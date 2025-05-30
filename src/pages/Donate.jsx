import { div, p } from "framer-motion/client";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
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
import ScrollToTop from "../components/Scrolltotop";

const donationMethods = [
  "Bank Details",
  "Donate via Courier",
  "In Hand Donation",
  "Doorstep Collection",
  // "Donate via EasyPaisa",
];

function Donate() {
  const [activeMethod, setActiveMethod] = useState("Bank Details");

  return (
    <div className="pt-16 sm:pt-20">
      <ScrollToTop />
      <Navbar variant="donate" />
      <div className="min-h-screen bg-green-50 py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Ways to Donate
        </h2>

        <div className="max-w-5xl md:h-60 mx-auto flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="flex md:flex-col gap-3 w-full md:w-1/4 flex-wrap md:flex-nowrap justify-center">
            {donationMethods.map((method) => (
              <button
                key={method}
                className={`w-full text-left px-4 py-2 rounded-md font-semibold transition ${
                  activeMethod === method
                    ? "bg-primary text-white"
                    : "text-darkblue hover:bg-[#eee]"
                }`}
                onClick={() => setActiveMethod(method)}
              >
                {method.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-primary text-white rounded-xl p-6 shadow-md text-sm md:text-base leading-relaxed">
            {activeMethod === "Bank Details" && (
              <div>
                <p className="mb-4">
                  You can directly deposit or transfer the amount in the
                  following bank account:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">
                      Account title: Patients Helping Hands Welfare Association
                    </p>
                    <p>Account number: 53013385976111</p>
                    <p>IBAN : PK22SIND0053013385976111</p>
                    <p>Swift Code: SINDPKKA</p>
                    <p>
                      Sindh Bank Limited, Islamic Banking Branch,
                      Khayaban-e-Ittehad, Karachi
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeMethod === "Donate via Courier" && (
              <div className="space-y-4">
                <p>
                  Your drafts and cheques can be made payable to Patients'
                  Helping Hands Welfare Association and sent to:
                </p>
                <p className="font-semibold">
                  Room No. 102, 1st Floor, Sky Mark Tower, A-13, KCHS Union,
                  Block 7 & 8, Karachi, Pakistan
                </p>
              </div>
            )}

            {activeMethod === "In Hand Donation" && (
              <div className="space-y-4">
                <p className="font-semibold">
                  Feel free to visit our office or JSMU, Karachi, between 9:00am
                  to 3:00pm (Mon–Sat) to donate.
                </p>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="mt-1 text-secondary" />
                  <p>
                    Rafiqui H.J, Iqbal Shaheed Rd, Karachi Cantonment Karachi,
                    75510
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaPhoneAlt className="mt-1 text-secondary" />
                  <p>03322943245 / 03272042428</p>
                </div>
                <div className="gap-y-4 sm:space-x-3 flex flex-wrap">
                  <a
                    href="https://maps.app.goo.gl/g3XLg98fzVkBwqS8A"
                    className="px-4 py-2 rounded-full bg-green-600 text-white border border-green-500 hover:bg-green-400 hover:text-darkblue"
                    target="_blank"
                  >
                    View Office Location
                  </a>
                  <a
                    href="https://maps.app.goo.gl/wc9R2WggKP8urj1X8?g_st=com.google.maps.preview.copy"
                    className="px-4 py-2 rounded-full bg-green-800 text-white border border-green-500 hover:bg-green-700 hover:text-white"
                    target="_blank"
                  >
                    View University Location
                  </a>
                </div>
              </div>
            )}

            {activeMethod === "Doorstep Collection" && (
              <div className="space-y-4">
                <p className="font-semibold">
                  Leave a message on our social media during office hours
                  (9:00am – 4:00pm), and a rider will collect the donation.
                </p>
                <div className="flex items-center space-x-4 flex-wrap mt-4">
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
            )}

            {activeMethod === "Donate via EasyPaisa" && (
              <div className="space-y-4">
                <p className="font-semibold">
                  You can send the amount to the following account:
                </p>
                {/* Add EasyPaisa info here */}
              </div>
            )}
          </div>
        </div>
        {/* Shariah Compliance Certificate Section */}
        <div className="mt-10  p-6 rounded-xl shadow-md max-w-5xl mx-auto text-darkblue">
          <p className="text-sm md:text-base mb-4">
            Patients Helping Hands Welfare Association, under the guidance of{" "}
            <span className="font-semibold">Mufti Muhammad Moosa Khan</span>{" "}
            from{" "}
            <span className="font-semibold">
              Jamia Bait ul ilm, Defence View Karachi
            </span>
            , confirms that PHH is collecting and spending Zakat funds in
            accordance with the principles of Islam as defined by the
            instructions of Shariah. It is also confirmed that whosoever donates
            Zakat to Patients Helping Hands, their Zakat will be utilized
            appropriately as per the Shariah point of view.
          </p>
          <a
            href="/shariah_certificate.jpg" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 mt-2 rounded-full bg-primary text-white hover:bg-green-700 transition"
          >
            View Shariah Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Donate;
