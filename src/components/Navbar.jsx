import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/PHH_LOGO.jpg";
import DonateButton from "./DonateButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:py-0">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={logo}
              alt="PHH Logo"
              className="w-16 h-16 object-contain sm:w-[80px] md:w-[100px] md:h-24 "
            />
          </Link>

          <div className="text-left leading-5 md:leading-8 cursor-none ">
            <h1 className="text-primary font-extrabold text-[14px] sm:text-[18px] md:text-[24px]">
              Patients Helping Hands
            </h1>
            {/* <h1 className="text-primary font-bold text-[24px] md:text-[14px]"></h1>
            <h1 className="text-primary font-bold text-[24px] md:text-[14px]"></h1> */}
            <h3 className="text-primary font-extrabold font text-[14px] sm:text-[18px] md:text-[24px]">
              Welfare Association
            </h3>
            {/* <h3 className="text-primary font-bold text-[24px] md:text-[14px]"></h3> */}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium text-gray-800 sm:space-x-">
          <li>
            <a href="#home" className="hover:text-secondary transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-secondary transition">
              About us
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-secondary transition">
              Our Projects
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-secondary transition">
              Our Team
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Donate Button */}
        <div className="hidden md:block">
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
          <a href="#home" className="block hover:text-secondary">
            Home
          </a>
          <a href="#about" className="block hover:text-secondary">
            About us
          </a>
          <a href="#projects" className="block hover:text-secondary">
            Our Projects
          </a>
          <a href="#board" className="block hover:text-secondary">
            Our Team
          </a>
          <a href="#contact" className="block hover:text-secondary">
            Contact
          </a>
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
