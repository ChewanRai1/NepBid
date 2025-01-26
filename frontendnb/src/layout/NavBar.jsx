// import React, { useState } from "react";
// import { RiAuctionFill, RiInstagramFill } from "react-icons/ri";
// import { MdLeaderboard, MdDashboard } from "react-icons/md";
// import { SiGooglesearchconsole } from "react-icons/si";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import {
//   FaFacebook,
//   FaUserCircle,
//   FaFileInvoiceDollar,
//   FaEye,
// } from "react-icons/fa";
// import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/store/slices/userSlice";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <div
//         onClick={() => setShow(!show)}
//         className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden z-50"
//       >
//         <GiHamburgerMenu />
//       </div>

//       {/* Main Navbar */}
//       <nav className="fixed top-0 w-full bg-[#f6f4f0] h-16 shadow-md z-40 px-4">
//         <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
//           <Link to="/">
//             <h4 className="text-2xl font-semibold">
//               Nep<span className="text-[#D6482b]">Bid</span>
//             </h4>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-6">
//             <Link
//               to="/auctions"
//               className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//             >
//               <RiAuctionFill /> Auctions
//             </Link>
//             <Link
//               to="/leaderboard"
//               className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//             >
//               <MdLeaderboard /> Leaderboard
//             </Link>

//             {isAuthenticated && user?.role === "Auctioneer" && (
//               <>
//                 <Link
//                   to="/submit-commission"
//                   className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//                 >
//                   <FaFileInvoiceDollar /> Submit Commission
//                 </Link>
//                 <Link
//                   to="/create-auction"
//                   className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//                 >
//                   <IoIosCreate /> Create Auction
//                 </Link>
//                 <Link
//                   to="/view-my-auctions"
//                   className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//                 >
//                   <FaEye /> View My Auctions
//                 </Link>
//               </>
//             )}

//             {isAuthenticated && user?.role === "Super Admin" && (
//               <Link
//                 to="/dashboard"
//                 className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//               >
//                 <MdDashboard /> Dashboard
//               </Link>
//             )}

//             {/* <Link
//               to="/how-it-works-info"
//               className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//             >
//               <SiGooglesearchconsole /> How it works
//             </Link>
//             <Link
//               to="/about"
//               className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//             >
//               <BsFillInfoSquareFill /> About Us
//             </Link> */}

//             {isAuthenticated && (
//               <Link
//                 to="/me"
//                 className="flex items-center gap-2 text-xl font-semibold hover:text-[#D6482b]"
//               >
//                 <FaUserCircle /> Profile
//               </Link>
//             )}

//             {!isAuthenticated ? (
//               <div className="flex items-center gap-4">
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="text-[#DECCBE] border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
//                 >
//                   Login
//                 </Link>
//               </div>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-screen fixed top-0 ${
//           show ? "left-0" : "left-[-100%]"
//         } transition-all duration-100 p-4 flex flex-col justify-between lg:hidden z-50`}
//       >
//         <div className="relative">
//           <Link to="/" onClick={() => setShow(false)}>
//             <h4 className="text-2xl font-semibold mb-4">
//               Nep<span className="text-[#D6482b]">Bid</span>
//             </h4>
//           </Link>

//           <ul className="flex flex-col gap-3">
//             <li>
//               <Link
//                 to="/auctions"
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                 onClick={() => setShow(false)}
//               >
//                 <RiAuctionFill /> Auctions
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/leaderboard"
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                 onClick={() => setShow(false)}
//               >
//                 <MdLeaderboard /> Leaderboard
//               </Link>
//             </li>

//             {isAuthenticated && user?.role === "Auctioneer" && (
//               <>
//                 <li>
//                   <Link
//                     to="/submit-commission"
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                     onClick={() => setShow(false)}
//                   >
//                     <FaFileInvoiceDollar /> Submit Commission
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/create-auction"
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                     onClick={() => setShow(false)}
//                   >
//                     <IoIosCreate /> Create Auction
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/view-my-auctions"
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                     onClick={() => setShow(false)}
//                   >
//                     <FaEye /> View My Auctions
//                   </Link>
//                 </li>
//               </>
//             )}

//             {isAuthenticated && user?.role === "Super Admin" && (
//               <li>
//                 <Link
//                   to="/dashboard"
//                   className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                   onClick={() => setShow(false)}
//                 >
//                   <MdDashboard /> Dashboard
//                 </Link>
//               </li>
//             )}

//             {isAuthenticated && (
//               <li>
//                 <Link
//                   to="/me"
//                   className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                   onClick={() => setShow(false)}
//                 >
//                   <FaUserCircle /> Profile
//                 </Link>
//               </li>
//             )}

//             {/* <li>
//               <Link
//                 to="/how-it-works-info"
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                 onClick={() => setShow(false)}
//               >
//                 <SiGooglesearchconsole /> How it works
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b]"
//                 onClick={() => setShow(false)}
//               >
//                 <BsFillInfoSquareFill /> About Us
//               </Link>
//             </li> */}
//           </ul>

//           {!isAuthenticated ? (
//             <div className="my-4 flex flex-col gap-2">
//               <Link
//                 to="/sign-up"
//                 className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white text-center"
//                 onClick={() => setShow(false)}
//               >
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="text-[#DECCBE] border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md text-center"
//                 onClick={() => setShow(false)}
//               >
//                 Login
//               </Link>
//             </div>
//           ) : (
//             <div className="my-4" onClick={handleLogout}>
//               <button className="w-full bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
//                 Logout
//               </button>
//             </div>
//           )}

//           <IoMdCloseCircleOutline
//             onClick={() => setShow(false)}
//             className="absolute top-0 right-4 text-[28px]"
//           />
//         </div>

//         {/* <div>
//           <div className="flex gap-2 items-center mb-2">
//             <Link
//               to="/"
//               className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
//             >
//               <FaFacebook />
//             </Link>
//             <Link
//               to="/"
//               className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
//             >
//               <RiInstagramFill />
//             </Link>
//           </div>
//           <Link
//             to="/contact"
//             className="text-stone-500 font-semibold hover:text-[#d6482b]"
//           >
//             Contact Us
//           </Link>
//           <p className="text-stone-500">&copy; NepBid, LLC.</p>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Navbar;

//2nd

// import React, { useState } from "react";
// import { RiAuctionFill, RiInstagramFill } from "react-icons/ri";
// import { MdLeaderboard } from "react-icons/md";
// import { FaUserCircle, FaFileInvoiceDollar, FaEye } from "react-icons/fa";
// import { IoIosCreate } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/store/slices/userSlice";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <>
//       {/* Desktop Navigation */}
//       <nav className="hidden lg:flex fixed top-0 w-full bg-white h-16 shadow-md z-40 px-8">
//         <div className="flex items-center justify-between w-full">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-semibold">
//             Nep<span className="text-[#D6482b]">Bid</span>
//           </Link>

//           {/* Center Menu */}
//           <div className="flex items-center gap-8">
//             <Link
//               to="/auctions"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//             >
//               <RiAuctionFill /> Auctions
//             </Link>
//             <Link
//               to="/leaderboard"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//             >
//               <MdLeaderboard /> Leaderboard
//             </Link>

//             {isAuthenticated && user?.role === "Auctioneer" && (
//               <>
//                 <Link
//                   to="/submit-commission"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//                 >
//                   <FaFileInvoiceDollar /> Submit Commission
//                 </Link>
//                 <Link
//                   to="/create-auction"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//                 >
//                   <IoIosCreate /> Create Auction
//                 </Link>
//                 <Link
//                   to="/view-my-auctions"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//                 >
//                   <FaEye /> View My Auctions
//                 </Link>
//               </>
//             )}

//             {isAuthenticated && (
//               <Link
//                 to="/me"
//                 className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//               >
//                 <FaUserCircle /> Profile
//               </Link>
//             )}
//           </div>

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             {!isAuthenticated ? (
//               <>
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#D6482B] px-6 py-2 rounded-full text-white hover:bg-[#b8381e] transition-colors"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="border-2 border-[#DECCBE] px-6 py-2 rounded-full text-[#D6482B] hover:bg-[#fffefd] hover:border-[#D6482B] transition-colors"
//                 >
//                   Login
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-[#D6482B] px-6 py-2 rounded-full text-white hover:bg-[#b8381e] transition-colors"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </nav>

//       Mobile Menu Button
//       <button
//         onClick={() => setShow(!show)}
//         className="lg:hidden fixed right-5 top-5 z-50 text-3xl"
//       >
//         {show ? (
//           <IoMdCloseCircleOutline className="text-[#D6482B]" />
//         ) : (
//           <GiHamburgerMenu className="text-[#D6482B]" />
//         )}
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-white transform ${
//           show ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 z-40`}
//       >
//         <div className="flex flex-col h-full p-8">
//           <Link to="/" className="text-2xl font-semibold mb-8">
//             Nep<span className="text-[#D6482b]">Bid</span>
//           </Link>

//           <div className="flex flex-col gap-6">
//             <Link
//               to="/auctions"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//               onClick={() => setShow(false)}
//             >
//               <RiAuctionFill /> Auctions
//             </Link>
//             <Link
//               to="/leaderboard"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//               onClick={() => setShow(false)}
//             >
//               <MdLeaderboard /> Leaderboard
//             </Link>

//             {isAuthenticated && user?.role === "Auctioneer" && (
//               <>
//                 <Link
//                   to="/submit-commission"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                   onClick={() => setShow(false)}
//                 >
//                   <FaFileInvoiceDollar /> Submit Commission
//                 </Link>
//                 <Link
//                   to="/create-auction"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                   onClick={() => setShow(false)}
//                 >
//                   <IoIosCreate /> Create Auction
//                 </Link>
//                 <Link
//                   to="/view-my-auctions"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                   onClick={() => setShow(false)}
//                 >
//                   <FaEye /> View My Auctions
//                 </Link>
//               </>
//             )}

//             {isAuthenticated && (
//               <Link
//                 to="/me"
//                 className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                 onClick={() => setShow(false)}
//               >
//                 <FaUserCircle /> Profile
//               </Link>
//             )}
//           </div>

//           <div className="mt-auto">
//             {!isAuthenticated ? (
//               <div className="flex flex-col gap-4">
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#D6482B] py-2 text-center rounded-full text-white hover:bg-[#b8381e]"
//                   onClick={() => setShow(false)}
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="border-2 border-[#DECCBE] py-2 text-center rounded-full text-[#D6482B] hover:border-[#D6482B]"
//                   onClick={() => setShow(false)}
//                 >
//                   Login
//                 </Link>
//               </div>
//             ) : (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   setShow(false);
//                 }}
//                 className="w-full bg-[#D6482B] py-2 rounded-full text-white hover:bg-[#b8381e]"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

//3rd

// import React, { useState } from "react";
// import { RiAuctionFill, RiInstagramFill } from "react-icons/ri";
// import { MdLeaderboard } from "react-icons/md";
// import { FaUserCircle, FaFileInvoiceDollar, FaEye } from "react-icons/fa";
// import { IoIosCreate } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/store/slices/userSlice";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <>
//       {/* Desktop Navigation */}
//       {/* <nav className="hidden lg:flex fixed top-0 w-full bg-white h-16 shadow-md z-40 px-8"> */}
//       <nav className="hidden lg:flex fixed top-0 w-full bg-[#f6f4f0] h-16 shadow-md z-40 px-8">
//         <div className="flex items-center justify-between w-full">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-semibold">
//             Nep<span className="text-[#D6482b]">Bid</span>
//           </Link>

//           {/* Center Menu */}
//           <div className="flex items-center gap-8">
//             <Link
//               to="/auctions"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//             >
//               <RiAuctionFill /> Auctions
//             </Link>
//             <Link
//               to="/leaderboard"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//             >
//               <MdLeaderboard /> Leaderboard
//             </Link>

//             {isAuthenticated && user?.role === "Auctioneer" && (
//               <>
//                 <Link
//                   to="/submit-commission"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//                 >
//                   <FaFileInvoiceDollar /> Submit Commission
//                 </Link>
//                 <Link
//                   to="/create-auction"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//                 >
//                   <IoIosCreate /> Create Auction
//                 </Link>
//                 <Link
//                   to="/view-my-auctions"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//                 >
//                   <FaEye /> View My Auctions
//                 </Link>
//               </>
//             )}

//             {isAuthenticated && (
//               <Link
//                 to="/me"
//                 className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//               >
//                 <FaUserCircle /> Profile
//               </Link>
//             )}
//           </div>

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             {!isAuthenticated ? (
//               <>
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#D6482B] px-6 py-2 rounded-full text-white hover:bg-[#b8381e] transition-colors"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="border-2 border-[#DECCBE] px-6 py-2 rounded-full text-[#D6482B] hover:bg-[#fffefd] hover:border-[#D6482B] transition-colors"
//                 >
//                   Login
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-[#D6482B] px-6 py-2 rounded-full text-white hover:bg-[#b8381e] transition-colors"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Button */}
//       <div
//         onClick={() => setShow(!show)}
//         className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden z-50"
//       >
//         <GiHamburgerMenu />
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
//           show ? "left-0" : "left-[-100%]"
//         } transition-all duration-100 p-4 flex flex-col justify-between lg:hidden z-40 border-r-[1px] border-r-stone-500`}
//       >
//         <div className="relative">
//           <Link to="/" onClick={() => setShow(false)}>
//             <h4 className="text-2xl font-semibold mb-4">
//               Nep<span className="text-[#D6482b]">Bid</span>
//             </h4>
//           </Link>

//           <ul className="flex flex-col gap-3">
//             <li>
//               <Link
//                 to="/auctions"
//                 className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                 onClick={() => setShow(false)}
//               >
//                 <RiAuctionFill /> Auctions
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/leaderboard"
//                 className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                 onClick={() => setShow(false)}
//               >
//                 <MdLeaderboard /> Leaderboard
//               </Link>
//             </li>

//             {isAuthenticated && user?.role === "Auctioneer" && (
//               <>
//                 <li>
//                   <Link
//                     to="/submit-commission"
//                     className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                     onClick={() => setShow(false)}
//                   >
//                     <FaFileInvoiceDollar /> Submit Commission
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/create-auction"
//                     className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                     onClick={() => setShow(false)}
//                   >
//                     <IoIosCreate /> Create Auction
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/view-my-auctions"
//                     className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                     onClick={() => setShow(false)}
//                   >
//                     <FaEye /> View My Auctions
//                   </Link>
//                 </li>
//               </>
//             )}

//             {isAuthenticated && (
//               <li>
//                 <Link
//                   to="/me"
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                   onClick={() => setShow(false)}
//                 >
//                   <FaUserCircle /> Profile
//                 </Link>
//               </li>
//             )}
//           </ul>

//           {!isAuthenticated ? (
//             <div className="my-4 flex gap-2">
//               <Link
//                 to="/sign-up"
//                 className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
//                 onClick={() => setShow(false)}
//               >
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
//                 onClick={() => setShow(false)}
//               >
//                 Login
//               </Link>
//             </div>
//           ) : (
//             <div
//               className="my-4"
//               onClick={() => {
//                 handleLogout();
//                 setShow(false);
//               }}
//             >
//               <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
//                 Logout
//               </button>
//             </div>
//           )}

//           <IoMdCloseCircleOutline
//             onClick={() => setShow(false)}
//             className="absolute top-0 right-4 text-[28px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

//4th

// import React, { useState } from "react";
// import { RiAuctionFill } from "react-icons/ri";
// import { MdLeaderboard, MdKeyboardArrowDown } from "react-icons/md";
// import { SiGooglesearchconsole } from "react-icons/si";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import { FaUserCircle, FaFileInvoiceDollar, FaEye } from "react-icons/fa";
// import { IoIosCreate, IoMdCloseCircleOutline } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/store/slices/userSlice";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//     setShowProfileMenu(false);
//   };

//   return (
//     <>
//       <nav className="hidden lg:flex fixed top-0 w-full bg-[#f6f4f0] h-20 shadow-md z-40 px-12">
//         {" "}
//         {/* Increased height to h-20 */}
//         <div className="flex items-center justify-between w-full">
//           {/* Logo - made larger */}
//           <Link to="/" className="h-20">
//             {" "}
//             {/* Increased logo height */}
//             <img
//               src="/Logo_first.png"
//               alt="NepBid Logo"
//               className="h-full object-contain"
//             />
//           </Link>

//           {/* Navigation - simplified */}
//           <div className="flex items-center gap-9">
//             {" "}
//             {/* Increased gap to 12 */}
//             <Link
//               to="/auctions"
//               className="text-lg hover:text-[#D6482b] transition-colors" //font-medium
//             >
//               Auctions
//             </Link>
//             <Link
//               to="/leaderboard"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//             >
//               {/* <MdLeaderboard />  */}
//               Leaderboard
//             </Link>
//             <Link
//               to="/how-it-works-info"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//             >
//               {/* <SiGooglesearchconsole />  */}
//               Help
//             </Link>
//             <Link
//               to="/about"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//             >
//               {/* <BsFillInfoSquareFill />  */}
//               About
//             </Link>
//             <Link
//               to="/contact"
//               className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Right - Auth/Profile */}
//           <div className="flex items-center gap-6">
//             {!isAuthenticated ? (
//               <>
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#D6482B] px-8 py-2.5 rounded-full text-white hover:bg-[#b8381e] transition-colors"
//                 >
//                   {" "}
//                   {/* Adjusted padding */}
//                   Sign Up
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="border border-[#D6482B] px-8 py-2.5 rounded-full text-[#D6482B] hover:bg-[#D6482B] hover:text-white transition-colors"
//                 >
//                   Login
//                 </Link>
//               </>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setShowProfileMenu(!showProfileMenu)}
//                   className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors"
//                 >
//                   <FaUserCircle />
//                   {/* Profile  */}
//                   <MdKeyboardArrowDown />
//                 </button>

//                 {showProfileMenu && (
//                   <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-2">
//                     <Link
//                       to="/me"
//                       className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full"
//                       onClick={() => setShowProfileMenu(false)}
//                     >
//                       <FaUserCircle />
//                       View Profile
//                     </Link>

//                     {user?.role === "Auctioneer" && (
//                       <>
//                         <Link
//                           to="/submit-commission"
//                           className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full"
//                           onClick={() => setShowProfileMenu(false)}
//                         >
//                           <FaFileInvoiceDollar /> Submit Commission
//                         </Link>
//                         <Link
//                           to="/create-auction"
//                           className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full"
//                           onClick={() => setShowProfileMenu(false)}
//                         >
//                           <IoIosCreate /> Create Auction
//                         </Link>
//                         <Link
//                           to="/view-my-auctions"
//                           className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full"
//                           onClick={() => setShowProfileMenu(false)}
//                         >
//                           <FaEye /> View My Auctions
//                         </Link>
//                       </>
//                     )}
//                     {/* 
//                     <button
//                       onClick={handleLogout}
//                       className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full text-[#D6482B]"
//                     >
//                       Logout
//                     </button> */}
//                     {/* Logout button */}
//                     <Link
//                       to="/"
//                       className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full text-[#D6482B]"
//                       onClick={handleLogout}
//                     >
//                       Logout
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         onClick={() => setShow(!show)}
//         className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden z-50"
//       >
//         <GiHamburgerMenu />
//       </div>

//       <div
//         className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
//           show ? "left-0" : "left-[-100%]"
//         } transition-all duration-100 p-4 flex flex-col justify-between lg:hidden z-40 border-r-[1px] border-r-stone-500`}
//       >
//         <div className="relative">
//           <Link to="/" onClick={() => setShow(false)}>
//             <h4 className="text-2xl font-semibold mb-4">
//               Nep<span className="text-[#D6482b]">Bid</span>
//             </h4>
//           </Link>

//           <ul className="flex flex-col gap-3">
//             {/* Mobile Menu Button */}
//             <div
//               onClick={() => setShow(!show)}
//               className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden z-50"
//             >
//               <GiHamburgerMenu />
//             </div>

//             {/* Mobile Menu */}
//             <div
//               className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
//                 show ? "left-0" : "left-[-100%]"
//               } transition-all duration-100 p-4 flex flex-col justify-between lg:hidden z-40 border-r-[1px] border-r-stone-500`}
//             >
//               <div className="relative">
//                 <Link to="/" onClick={() => setShow(false)}>
//                   <h4 className="text-2xl font-semibold mb-4">
//                     Nep<span className="text-[#D6482b]">Bid</span>
//                   </h4>
//                 </Link>

//                 <ul className="flex flex-col gap-3">
//                   <li>
//                     <Link
//                       to="/auctions"
//                       className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                       onClick={() => setShow(false)}
//                     >
//                       <RiAuctionFill /> Auctions
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/leaderboard"
//                       className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                       onClick={() => setShow(false)}
//                     >
//                       <MdLeaderboard /> Leaderboard
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/how-it-works-info"
//                       className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                       onClick={() => setShow(false)}
//                     >
//                       <SiGooglesearchconsole /> How it works
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/about"
//                       className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                       onClick={() => setShow(false)}
//                     >
//                       <BsFillInfoSquareFill /> About Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/contact"
//                       className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                       onClick={() => setShow(false)}
//                     >
//                       Contact Us
//                     </Link>
//                   </li>
//                 </ul>

//                 {isAuthenticated && (
//                   <>
//                     <hr className="my-4 border-t-stone-300" />
//                     <ul className="flex flex-col gap-3">
//                       <li>
//                         <Link
//                           to="/me"
//                           className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                           onClick={() => setShow(false)}
//                         >
//                           <FaUserCircle /> View Profile
//                         </Link>
//                       </li>
//                       {user?.role === "Auctioneer" && (
//                         <>
//                           <li>
//                             <Link
//                               to="/submit-commission"
//                               className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                               onClick={() => setShow(false)}
//                             >
//                               <FaFileInvoiceDollar /> Submit Commission
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/create-auction"
//                               className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                               onClick={() => setShow(false)}
//                             >
//                               <IoIosCreate /> Create Auction
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/view-my-auctions"
//                               className="flex items-center gap-2 text-lg hover:text-[#D6482b]"
//                               onClick={() => setShow(false)}
//                             >
//                               <FaEye /> View My Auctions
//                             </Link>
//                           </li>
//                         </>
//                       )}
//                     </ul>
//                   </>
//                 )}

//                 {!isAuthenticated ? (
//                   <div className="my-4 flex gap-2">
//                     <Link
//                       to="/sign-up"
//                       className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
//                       onClick={() => setShow(false)}
//                     >
//                       Sign Up
//                     </Link>
//                     <Link
//                       to="/login"
//                       className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
//                       onClick={() => setShow(false)}
//                     >
//                       Login
//                     </Link>
//                   </div>
//                 ) : (
//                   <div className="my-4">
//                     {/* <button
//                       onClick={() => {
//                         handleLogout();
//                         setShow(false);
//                       }}
//                       className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white w-full"
//                     >
//                       Logout
//                     </button> */}
//                     {/* Logout button */}
//                     <Link
//                       to="/"
//                       className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full text-[#D6482B]"
//                       onClick={handleLogout}
//                     >
//                       Logout
//                     </Link>
//                   </div>
//                 )}

//                 <IoMdCloseCircleOutline
//                   onClick={() => setShow(false)}
//                   className="absolute top-0 right-4 text-[28px]"
//                 />
//               </div>
//             </div>
//           </ul>

//           <IoMdCloseCircleOutline
//             onClick={() => setShow(false)}
//             className="absolute top-0 right-4 text-[28px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


//5th wuth super admin
import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdKeyboardArrowDown, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaUserCircle, FaFileInvoiceDollar, FaEye } from "react-icons/fa";
import { IoIosCreate, IoMdCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setShowProfileMenu(false);
    setShow(false);
  };

  return (
    <>
      <nav className="hidden lg:flex fixed top-0 w-full bg-[#f6f4f0] h-20 shadow-md z-40 px-12">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="h-20">
            <img
              src="/Logo_first.png"
              alt="NepBid Logo"
              className="h-full object-contain"
            />
          </Link>

          <div className="flex items-center gap-9">
            <Link to="/auctions" className="text-lg hover:text-[#D6482b] transition-colors">
              Auctions
            </Link>
            <Link to="/leaderboard" className="text-lg hover:text-[#D6482b] transition-colors">
              Leaderboard
            </Link>
            <Link to="/how-it-works-info" className="text-lg hover:text-[#D6482b] transition-colors">
              Help
            </Link>
            <Link to="/about" className="text-lg hover:text-[#D6482b] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-lg hover:text-[#D6482b] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {!isAuthenticated ? (
              <>
                <Link to="/sign-up" className="bg-[#D6482B] px-8 py-2.5 rounded-full text-white hover:bg-[#b8381e] transition-colors">
                  Sign Up
                </Link>
                <Link to="/login" className="border border-[#D6482B] px-8 py-2.5 rounded-full text-[#D6482B] hover:bg-[#D6482B] hover:text-white transition-colors">
                  Login
                </Link>
              </>
            ) : (
              <div className="relative">
                <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors">
                  <FaUserCircle />
                  <MdKeyboardArrowDown />
                </button>

                {showProfileMenu && (
                  <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-2">
                    <Link to="/me" className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full" onClick={() => setShowProfileMenu(false)}>
                      <FaUserCircle /> View Profile
                    </Link>

                    {user?.role === "Auctioneer" && (
                      <>
                        <Link to="/submit-commission" className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full" onClick={() => setShowProfileMenu(false)}>
                          <FaFileInvoiceDollar /> Submit Commission
                        </Link>
                        <Link to="/create-auction" className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full" onClick={() => setShowProfileMenu(false)}>
                          <IoIosCreate /> Create Auction
                        </Link>
                        <Link to="/view-my-auctions" className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full" onClick={() => setShowProfileMenu(false)}>
                          <FaEye /> View My Auctions
                        </Link>
                      </>
                    )}

                    {user?.role === "Super Admin" && (
                      <Link to="/dashboard" className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full" onClick={() => setShowProfileMenu(false)}>
                        <MdDashboard /> Dashboard
                      </Link>
                    )}

                    <Link to="/" className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full text-[#D6482B]" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div onClick={() => setShow(!show)} className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden z-50">
        <GiHamburgerMenu />
      </div>

      <div
  className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
    show ? "left-0" : "left-[-100%]"
  } transition-all duration-100 p-4 flex flex-col justify-between lg:hidden z-40 border-r-[1px] border-r-stone-500`}
>
  <div className="relative">
    <Link to="/" onClick={() => setShow(false)}>
      <h4 className="text-2xl font-semibold mb-4">
        Nep<span className="text-[#D6482b]">Bid</span>
      </h4>
    </Link>

    <ul className="flex flex-col gap-3">
      <li>
        <Link to="/auctions" className="text-lg hover:text-[#D6482b]" onClick={() => setShow(false)}>
          <RiAuctionFill /> Auctions
        </Link>
      </li>
      <li>
        <Link to="/leaderboard" className="text-lg hover:text-[#D6482b]" onClick={() => setShow(false)}>
          <MdLeaderboard /> Leaderboard
        </Link>
      </li>
      <li>
        <Link to="/how-it-works-info" className="text-lg hover:text-[#D6482b]" onClick={() => setShow(false)}>
          <SiGooglesearchconsole /> Help
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-lg hover:text-[#D6482b]" onClick={() => setShow(false)}>
          <BsFillInfoSquareFill /> About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-lg hover:text-[#D6482b]" onClick={() => setShow(false)}>
          Contact
        </Link>
      </li>
    </ul>

    {isAuthenticated && (
      <>
        <hr className="my-4 border-t-stone-300" />
        <div className="relative">
          <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-2 text-lg hover:text-[#D6482b] transition-colors">
            <FaUserCircle /> Profile
          </button>
          {showProfileMenu && (
            <div className="mt-2 bg-white rounded-md shadow-lg py-2 w-full">
              <Link to="/me" className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full" onClick={() => setShow(false)}>
                <FaUserCircle /> View Profile
              </Link>
              {user?.role === "Super Admin" && (
                <Link to="/dashboard" className="px-4 py-2 hover:bg-[#f6f4f0] flex items-center gap-2 w-full" onClick={() => setShow(false)}>
                  <MdDashboard /> Dashboard
                </Link>
              )}
              <button onClick={handleLogout} className="px-4 py-2 text-red-600 hover:bg-[#f6f4f0] flex items-center gap-2 w-full">
                Logout
              </button>
            </div>
          )}
        </div>
      </>
    )}

    <IoMdCloseCircleOutline onClick={() => setShow(false)} className="absolute top-0 right-4 text-[28px]" />
  </div>
</div>

    </>
  );
};

export default Navbar;
