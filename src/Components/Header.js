import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto max-width md:pt-6 pt-2">
      <div className="flex justify-between items-center py-2 md:py-6">
        <NavLink to="/">
          {/* <img className="w-14" src={logos.logogradient} alt="logo" /> */}
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer md:hidden">
          <svg
            className="stroke-dark-heading dark:stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <nav className={`w-full flex justify-center ${!isOpen ? "hidden md:flex" : "block"} transition-all`}>
        <ul className="bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-3 rounded-full shadow-lg 
                       flex flex-col md:flex-row items-center gap-6 text-sm md:text-base font-medium 
                       dark:text-white text-white 
                       max-w-[90%] md:max-w-[700px] lg:max-w-[800px] mx-auto">
          <li>
            <NavLink
              to="/"
              onClick={toggleClass}
              className="transition-all duration-200 hover:text-yellow-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggleClass}
              className="transition-all duration-200 hover:text-yellow-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={toggleClass}
              className="transition-all duration-200 hover:text-yellow-300"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleClass}
              className="transition-all duration-200 hover:text-yellow-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
