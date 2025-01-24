import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    //border-t-[1px] border-t-stone-500
    <footer className="bg-[#e0dacd] py-8 mt-auto  shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <Link
              to="/how-it-works-info"
              className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
            >
              <SiGooglesearchconsole /> How it works
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
            >
              <BsFillInfoSquareFill /> About Us
            </Link>
            <Link
              to="/contact"
              className="text-stone-500 font-semibold hover:text-[#d6482b]"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                to="/"
                className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700 shadow-sm"
              >
                <FaFacebook />
              </Link>
              <Link
                to="/"
                className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500 shadow-sm"
              >
                <RiInstagramFill />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2">Legal</h3>
            <p className="text-stone-500">&copy; NepBid, LLC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
