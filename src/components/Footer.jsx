import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-auto">
      <div className="container mx-auto flex justify-center space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        >
          <FaFacebookF className="h-6 w-6" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          <FaTwitter className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600"
        >
          <FaLinkedinIn className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
