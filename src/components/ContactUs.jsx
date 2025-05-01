import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-24" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-green-600 uppercase tracking-widest text-sm font-semibold mb-2">
            Get in Touch
          </h4>
          <h2 className="text-4xl font-extrabold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We'd love to hear from you. Whether you have a question about our work or want to get involved—reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-gray-700">
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="bg-green-100 text-green-600 p-3 rounded-full mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-lg mb-1">Our Location</h4>
            <p className="text-sm text-gray-600">Sindh Medical College, Karachi, Pakistan</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="bg-green-100 text-green-600 p-3 rounded-full mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-lg mb-1">Phone & Email</h4>
            <p className="text-sm text-gray-600">+92 300 1234567</p>
            <p className="text-sm text-gray-600">phh.official@gmail.com</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="bg-green-100 text-green-600 p-3 rounded-full mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/phh"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="https://instagram.com/phh"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}