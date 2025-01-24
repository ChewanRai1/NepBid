import React, { useState } from "react";
import { RiAuctionFill, RiInstagramFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import {
  FaFacebook,
  FaUserCircle,
  FaFileInvoiceDollar,
  FaEye,
} from "react-icons/fa";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden z-50"
      >
        <GiHamburgerMenu />
      </div>

      {/* Main Navbar */}
      <nav className="fixed top-0 w-full bg-[#f6f4f0] h-16 shadow-md z-40 px-4">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <Link to="/">
            <h4 className="text-2xl font-semibold">
              Nep<span className="text-[#D6482b]">Bid</span>
            </h4>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/auctions"
              className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
            >
              <RiAuctionFill /> Auctions
            </Link>
            <Link
              to="/leaderboard"
              className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
            >
              <MdLeaderboard /> Leaderboard
            </Link>

            {isAuthenticated && user?.role === "Auctioneer" && (
              <>
                <Link
                  to="/submit-commission"
                  className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
                >
                  <FaFileInvoiceDollar /> Submit Commission
                </Link>
                <Link
                  to="/create-auction"
                  className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
                >
                  <IoIosCreate /> Create Auction
                </Link>
                <Link
                  to="/view-my-auctions"
                  className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
                >
                  <FaEye /> View My Auctions
                </Link>
              </>
            )}

            {isAuthenticated && user?.role === "Super Admin" && (
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
              >
                <MdDashboard /> Dashboard
              </Link>
            )}

            <Link
              to="/how-it-works-info"
              className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
            >
              <SiGooglesearchconsole /> How it works
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
            >
              <BsFillInfoSquareFill /> About Us
            </Link>

            {isAuthenticated && (
              <Link
                to="/me"
                className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
              >
                <FaUserCircle /> Profile
              </Link>
            )}

            {!isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/sign-up"
                  className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="text-[#DECCBE] border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
                >
                  Login
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-screen fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:hidden z-50`}
      >
        <div className="relative">
          <Link to="/" onClick={() => setShow(false)}>
            <h4 className="text-2xl font-semibold mb-4">
              Nep<span className="text-[#D6482b]">Bid</span>
            </h4>
          </Link>

          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/auctions"
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                onClick={() => setShow(false)}
              >
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            <li>
              <Link
                to="/leaderboard"
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                onClick={() => setShow(false)}
              >
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>

            {isAuthenticated && user?.role === "Auctioneer" && (
              <>
                <li>
                  <Link
                    to="/submit-commission"
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                    onClick={() => setShow(false)}
                  >
                    <FaFileInvoiceDollar /> Submit Commission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create-auction"
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                    onClick={() => setShow(false)}
                  >
                    <IoIosCreate /> Create Auction
                  </Link>
                </li>
                <li>
                  <Link
                    to="/view-my-auctions"
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                    onClick={() => setShow(false)}
                  >
                    <FaEye /> View My Auctions
                  </Link>
                </li>
              </>
            )}

            {isAuthenticated && user?.role === "Super Admin" && (
              <li>
                <Link
                  to="/dashboard"
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                  onClick={() => setShow(false)}
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
            )}

            {isAuthenticated && (
              <li>
                <Link
                  to="/me"
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                  onClick={() => setShow(false)}
                >
                  <FaUserCircle /> Profile
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/how-it-works-info"
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                onClick={() => setShow(false)}
              >
                <SiGooglesearchconsole /> How it works
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
                onClick={() => setShow(false)}
              >
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>

          {!isAuthenticated ? (
            <div className="my-4 flex flex-col gap-2">
              <Link
                to="/sign-up"
                className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white text-center"
                onClick={() => setShow(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-[#DECCBE] border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md text-center"
                onClick={() => setShow(false)}
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="my-4" onClick={handleLogout}>
              <button className="w-full bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
                Logout
              </button>
            </div>
          )}

          <IoMdCloseCircleOutline
            onClick={() => setShow(false)}
            className="absolute top-0 right-4 text-[28px]"
          />
        </div>

        <div>
          <div className="flex gap-2 items-center mb-2">
            <Link
              to="/"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
            >
              <FaFacebook />
            </Link>
            <Link
              to="/"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
            >
              <RiInstagramFill />
            </Link>
          </div>
          <Link
            to="/contact"
            className="text-stone-500 font-semibold hover:text-[#d6482b]"
          >
            Contact Us
          </Link>
          <p className="text-stone-500">&copy; NepBid, LLC.</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
