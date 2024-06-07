import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 flex flex-col items-center justify-center gap-16">
      <p className="text-2xl font-semibold">MERN STORE</p>
      <ul className="flex space-x-8">
        <li><a href="#">Company</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Offices</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="flex space-x-6 text-2xl">
        <a href="https://www.facebook.com" className="hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="https://www.google.com/maps" className="hover:text-red-500">
          <FaLocationArrow />
        </a>
        <a href="tel:+1234567890" className="hover:text-green-500">
          <FaMobileAlt />
        </a>
      </div>
      <div className="text-center">
      <hr className='w-[400px] h-[1px] rounded-[10px] bg-white mb-2' />
        <p className="text-sm">Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
