import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#80796b] text-white py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="flex justify-center gap-16 mb-12">
          <Link
            to="/about"
            className="text-lg hover:text-gray-300 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/how-it-works-info"
            className="text-lg hover:text-gray-300 transition-colors"
          >
            How it works
          </Link>
          <Link
            to="/contact"
            className="text-lg hover:text-gray-300 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* About Text */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed text-gray-200">
            NepBid is Nepal's premier online auction platform, connecting buyers
            and sellers in a transparent environment. We strive to create a
            seamless bidding experience while ensuring trust and reliability in
            every transaction.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://www.facebook.com/rai.chewan123/"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/chewan_rai/"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/chewan-rai140/"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.tiktok.com/@neonx9475"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300">
          <p>© {new Date().getFullYear()} NepBid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
