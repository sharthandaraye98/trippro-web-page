import React from "react";
import {
  FaChevronDown,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFileAlt,
  FaCaretDown,
  FaSearch,
} from "react-icons/fa";
import visibleOneLogo from "../images/visibleOneLogo.png";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around px-4 py-2 bg-gray-200">
        <div className=""></div>
        <div className="flex flex-wrap items-center">
          <div className="items-center px-6 hidden md:flex">
            <FaPhoneAlt className="fill-blue-500" />
            <p className="pl-2 text-sm">6248 0838</p>
          </div>
          <div className="items-center px-6 hidden md:flex">
            <FaWhatsapp className="fill-blue-500" />
            <p className="pl-2 text-sm">8484 9948</p>
          </div>
          <div className="items-center px-6 hidden md:flex">
            <FaEnvelope className="fill-blue-500" />
            <p className="pl-2 text-sm">info@visibleone.com</p>
          </div>
          <div className="flex items-center px-6 md:flex text-base first-letter:sm:flex">
            <FaFileAlt className="fill-blue-500" />
            <p className="pl-2 text-sm">QUOTE</p>
          </div>
          <div className="flex items-center sm:px-3">
            <p className="text-sm pr-2">SG EN</p>
            <FaCaretDown className="fill-blue-500" />
          </div>
        </div>
      </div>
      <nav className="flex flex-col md:flex-row justify-around px-4 border-b md:shadow-lg items-center relative">
        <div className="text-lg font-bold md:py-0 py-4">
          <div>
            <img
              src={visibleOneLogo}
              alt="visible one logo"
              className="h-10 mt-[-50px] ml-32 "
            />
          </div>
        </div>
        <ul className="md:px-2 md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
          <li>
            <a
              href="#"
              className="flex md:inline-flex p-4 items-center hover:text-blue-500"
            >
              <span>Home</span>
            </a>
          </li>
          <li className="relative parent">
            <a
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:text-blue-500 space-x-2"
            >
              <span>Service</span>
              <FaChevronDown className="pt-1" />
            </a>
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-blue-500">
                  Web development
                </a>
              </li>
            </ul>
          </li>
          <li className="relative parent">
            <a
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:text-blue-500 space-x-2"
            >
              <span>Company</span>
              <FaChevronDown className="pt-1" />
            </a>
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-blue-500">
                  About Us
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="flex md:inline-flex p-4 items-center hover:text-blue-500"
            >
              <span>Blog</span>
            </a>
          </li>
          <li className="relative parent">
            <a
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:text-blue-500 space-x-2"
            >
              <span>Contact Us</span>
              <FaChevronDown className="pt-1" />
            </a>
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="flex px-4 py-5 hover:text-blue-500">
              <FaSearch />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
