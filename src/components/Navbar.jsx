import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import DonateButton from "./DonateButton";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const isDonatePage = variant === "donate";
  const isProjectPage = variant === "project";

  return (
    <header className="backdrop-blur-md bg-white/60 shadow-md fixed top-0 inset-x-0 z-50">
      <nav className="max-w-7xl mx-auto   flex items-center justify-between px-4 md:py-0">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src="/PHH_LOGO_NOBG.png"
              alt="PHH Logo"
              className="w-16 h-16 object-contain sm:w-[80px] md:w-[100px] md:h-20"
            />
          </Link>

          <div className="text-left leading-tight">
            <h1 className="text-primary font-extrabold text-[14px] sm:text-[18px] md:text-[20px]">
              Patients Helping Hands
            </h1>
            <h3 className="text-primary font-extrabold text-[14px] sm:text-[18px] md:text-[20px]">
              Welfare Association
            </h3>
            <p className="text-primary ml-[3px] md:leading-[17px] font-extrabold text-[10px] sm:text-[12px] md:text-[12px]">
              Est. 2011
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6 text-md font-medium text-gray-800">
          {!isProjectPage && (
            <>
              {" "}
              <li>
                <a
                  href={isDonatePage ? "/" : "#home"}
                  className="hover:text-secondary transition"
                >
                  Home
                </a>
              </li>
            </>
          )}

          {!isDonatePage && !isProjectPage && (
            <>
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
                <Link to="/team" className="hover:text-secondary transition">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition">
                  Contact
                </a>
              </li>
            </>
          )}
        </ul>

        {/* Donate Button */}
        {!isDonatePage && (
          <div className="hidden lg:block">
            <DonateButton />
          </div>
        )}

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed  bg-white/90 backdrop-blur-md inset-x-0 z-50 px-4 pb-4 space-y-4 text-gray-800 font-medium shadow-md">
          <a
            href={isDonatePage || isProjectPage ? "/" : "#home"}
            className="block "
          >
            Home
          </a>
          {!isDonatePage && !isProjectPage && (
            <>
              <a href="#about" className="block">
                About us
              </a>
              <a href="#projects" className="block">
                Our Projects
              </a>
              <Link to="/team" className="block">
                Meet Our Team
              </Link>

              <a href="#contact" className="block ">
                Contact
              </a>
              <Link
                to="/donate"
                className="block w-full mt-2 text-center bg-primary text-white px-4 py-2 rounded-md"
              >
                Donate
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
