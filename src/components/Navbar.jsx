import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/PHH_LOGO.jpg";
import DonateButton from "./DonateButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:py-0 ">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="PHH Logo"
            className="w-24 h-24 object-contain md:w-36 md:h-32"
          />
          <div className="text-left leading-none md:leading-none">
            <h1 className="text-primary font-bold text-[24px] md:text-[24px]">Patients</h1>
            <h1 className="text-primary font-bold text-[24px] md:text-[24px]">Helping</h1>
            <h1 className="text-primary font-bold text-[24px] md:text-[24px]">Hands</h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium text-gray-800">
          <li><a href="#home" className="hover:text-blue-700 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-700 transition">About us</a></li>
          <li><a href="#projects" className="hover:text-blue-700 transition">Our Projects</a></li>
          <li><a href="#board" className="hover:text-blue-700 transition">Executive Board</a></li>
          <li><a href="#contact" className="hover:text-blue-700 transition">Contact</a></li>
        </ul>

        {/* Donate Button */}
        <div className="hidden md:block">
          {/* <a
            href="#donate"
            className="bg-primary text-white text-base font-bold px-8 py-4 rounded-md hover:bg-blue-600"
          >
            Donate
          </a> */}
          <DonateButton />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-gray-800 font-medium bg-white shadow-md">
          <a href="#home" className="block hover:text-blue-700">Home</a>
          <a href="#about" className="block hover:text-blue-700">About us</a>
          <a href="#projects" className="block hover:text-blue-700">Our Projects</a>
          <a href="#board" className="block hover:text-blue-700">Executive Board</a>
          <a href="#contact" className="block hover:text-blue-700">Contact</a>
          <a
            href="#donate"
            className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Donate
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
