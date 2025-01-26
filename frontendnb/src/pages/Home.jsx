// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
// import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
// import Leaderboard from "./home-sub-components/Leaderboard";
// import Spinner from "@/custom-components/Spinner";
// import { motion } from "framer-motion";

// const Home = () => {
//   const howItWorks = [
//     { title: "Post Items", description: "Auctioneer posts items for bidding." },
//     { title: "Place Bids", description: "Bidders place bids on listed items." },
//     {
//       title: "Win Notification",
//       description: "Highest bidder receives a winning email.",
//     },
//     {
//       title: "Payment & Fees",
//       description: "Bidder pays; auctioneer pays 5% fee.",
//     },
//   ];

//   const { isAuthenticated } = useSelector((state) => state.user);
//   return (
//     <>
//       {/* <section className="w-full h-fit px-5 pt-20  flex flex-col min-h-screen py-4 justify-center"> */}
//       {/* <section className="w-full h-fit px-5 pt-20 flex flex-col min-h-screen py-4 justify-center"> */}
//       {/* <div>
//           <p className="text-[#DECCBE] font-bold text-xl mb-8">
//             Transparency Leads to Your Victory
//           </p> */}
//       {/* <h1
//             className={`text-[#111] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`} //text-center
//           >
//             Transparent Auctions
//           </h1>
//           <h1
//             className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`} //text-center
//           >
//             Be The Winner
//           </h1> */}
//       {/* <h1 className="text-[#111] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 max-w-4xl">
//             Transparent Auctions
//           </h1>
//           <h1 className="text-[#d6482b] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 max-w-4xl">
//             Be The Winner 💥
//           </h1>
//           <div className="flex gap-4 my-8">
//             {!isAuthenticated && (
//               <>
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] rounded-md px-8 flex items-center py-2 text-white  transition-all duration-300"
//                 >
//                   Get started ▶︎
//                 </Link> */}

//       {/* </>
//             )}
//           </div>
//         </div> */}
//       <section className="relative w-full min-h-screen">

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
//                   {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/covephoto.png" // Add your background image
//             alt="background"
//             className="w-full h-full object-cover brightness-50"
//           />
//         </div>
//           {/* First Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-[#DECCBE] font-bold text-xl mb-8"
//             >
//               Transparency Leads to Your Victory
//             </motion.p>
//             <motion.h1
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-[#111] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2"
//             >
//               Transparent Auctions
//             </motion.h1>
//             <motion.h1
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.7 }}
//               className="text-[#d6482b] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8"
//             >
//               Be The Winner 💥
//             </motion.h1>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//             >
//               {!isAuthenticated && (
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] rounded-md px-8 py-3 text-white transition-all duration-300 inline-block"
//                 >
//                   Get started ▶︎
//                 </Link>
//               )}
//             </motion.div>
//           </motion.div>

//           {/* Auction Cards Section */}
//           <div className="grid md:grid-cols-2 gap-8 py-16">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.1 }}
//               className="bg-black/60 p-8 rounded-lg text-white"
//             >
//               <h2 className="text-2xl font-bold mb-4">CREATE AUCTION</h2>
//               <p className="mb-4">
//                 List your items for auction and reach potential buyers
//               </p>
//               {isAuthenticated && user?.role === "Auctioneer" && (
//                 <Link
//                   to="/create-auction"
//                   className="text-[#d6482b] hover:text-[#b8381e]"
//                 >
//                   Start Listing →
//                 </Link>
//               )}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.3 }}
//               className="bg-black/60 p-8 rounded-lg text-white"
//             >
//               <h2 className="text-2xl font-bold mb-4">PLACE BIDS</h2>
//               <p className="mb-4">Find and bid on your desired items</p>
//               <Link
//                 to="/auctions"
//                 className="text-[#d6482b] hover:text-[#b8381e]"
//               >
//                 View Auctions →
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-6">
//           <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
//             How it works
//           </h3>
//           <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
//             {howItWorks.map((element) => {
//               return (
//                 <div
//                   key={element.title}
//                   className="bg-white flex flex-col gap-2 p-2 rounded-md h-[96px] justify-center md:w-[48%] lg:w-[47%] 2xl:w-[24%] hover:shadow-md transition-all duration-300"
//                 >
//                   <h5 className="font-bold">{element.title}</h5>
//                   <p>{element.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <FeaturedAuctions />
//         <UpcomingAuctions />
//         <Leaderboard />
//       </section>
//     </>
//   );
// };

// export default Home;

//2nd

// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
// import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
// import Leaderboard from "./home-sub-components/Leaderboard";
// import Spinner from "@/custom-components/Spinner";
// import { motion } from "framer-motion";

// const Home = () => {
//   const howItWorks = [
//     { title: "Post Items", description: "Auctioneer posts items for bidding." },
//     { title: "Place Bids", description: "Bidders place bids on listed items." },
//     {
//       title: "Win Notification",
//       description: "Highest bidder receives a winning email.",
//     },
//     {
//       title: "Payment & Fees",
//       description: "Bidder pays; auctioneer pays 5% fee.",
//     },
//   ];

//   const { isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <>
//       {/* Hero Section */}
//       {/* <section className="relative w-full h-[90vh]">
//             <section className="w-full h-fit px-5 pt-20  flex flex-col min-h-screen py-4 justify-center">  */}
//       <section className="w-full h-fit px-5 pt-20 flex flex-col min-h-screen py-4 justify-center">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="/cp.png"
//             alt="background"
//             className="w-full h-full object-cover brightness-50"
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
//           {/* First Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-[#DECCBE] font-bold text-xl mb-8"
//             >
//               Transparency Leads to Your Victory
//             </motion.p>
//             <motion.h1
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-[#111] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2"
//             >
//               Transparent Auctions
//             </motion.h1>
//             <motion.h1
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.7 }}
//               className="text-[#d6482b] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8"
//             >
//               Be The Winner 💥
//             </motion.h1>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//             >
//               {!isAuthenticated && (
//                 <Link
//                   to="/sign-up"
//                   className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] rounded-md px-8 py-3 text-white transition-all duration-300 inline-block"
//                 >
//                   Get started ▶︎
//                 </Link>
//               )}
//             </motion.div>
//           </motion.div>

//           {/* Auction Cards Section */}
//           <div className="grid md:grid-cols-2 gap-8 py-16">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.1 }}
//               className="bg-black/60 p-8 rounded-lg text-white"
//             >
//               <h2 className="text-2xl font-bold mb-4">CREATE AUCTION</h2>
//               <p className="mb-4">
//                 List your items for auction and reach potential buyers
//               </p>
//               {isAuthenticated && user?.role === "Auctioneer" && (
//                 <Link
//                   to="/create-auction"
//                   className="text-[#d6482b] hover:text-[#b8381e]"
//                 >
//                   Start Listing →
//                 </Link>
//               )}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.3 }}
//               className="bg-black/60 p-8 rounded-lg text-white"
//             >
//               <h2 className="text-2xl font-bold mb-4">PLACE BIDS</h2>
//               <p className="mb-4">Find and bid on your desired items</p>
//               <Link
//                 to="/auctions"
//                 className="text-[#d6482b] hover:text-[#b8381e]"
//               >
//                 View Auctions →
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* How it works section */}
//       {/* <section className="bg-white py-16"> */}
//       <section className="w-full h-fit px-5 pt-20 flex flex-col min-h-screen py-4 justify-center">
//         <div className="flex flex-col gap-6">
//           <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
//             How it works
//           </h3>
//           <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
//             {howItWorks.map((element) => {
//               return (
//                 <div
//                   key={element.title}
//                   className="bg-white flex flex-col gap-2 p-2 rounded-md h-[96px] justify-center md:w-[48%] lg:w-[47%] 2xl:w-[24%] hover:shadow-md transition-all duration-300"
//                 >
//                   <h5 className="font-bold">{element.title}</h5>
//                   <p>{element.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <FeaturedAuctions />
//         <UpcomingAuctions />
//         <Leaderboard />
//       </section>
//     </>
//   );
// };

// export default Home;

//3rd

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";
import Spinner from "@/custom-components/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

const Home = () => {
  const howItWorks = [
    { title: "Post Items", description: "Auctioneer posts items for bidding." },
    { title: "Place Bids", description: "Bidders place bids on listed items." },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
    },
    {
      title: "Payment & Fees",
      description: "Bidder pays; auctioneer pays 5% fee.",
    },
  ];

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      bgImage: "/cp.png",
      title: "CREATE AUCTION",
      description: "List your items for auction and reach potential buyers",
      link: "/create-auction",
      linkText: "Start Listing →",
      onClick: (e) => {
        if (!isAuthenticated) {
          e.preventDefault();
          // return "/sign-up";
          window.location.href = "/sign-up";
        }
        if (user?.role !== "Auctioneer") {
          e.preventDefault();
          toast.info(
            "Only auctioneers can create auctions. Please register as an auctioneer."
          );
          return "#";
        }
        return "/create-auction";
      },
    },
    {
      bgImage: "/cp2.png",
      title: "PLACE BIDS",
      description: "Find and bid on your desired items",
      link: "/auctions",
      linkText: "View Auctions →",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* Hero Section */}
      {/* <section className="relative w-full h-[90vh] overflow-hidden"> */}
      {/* <section className="relative w-full flex items-center justify-center overflow-hidden"> */}
      {/* <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden"> */}
      <section className="w-full h-fit px-5 pt-20 flex flex-col min-h-screen py-4 justify-center">
        {/* <AnimatePresence mode="wait"> */}
        {slides.map(
          (slide, index) =>
            index === activeSlide && (
              <div
                key={index}
                className="absolute inset-0"
                style={{ opacity: index === activeSlide ? 1 : 0 }}
              >
                <img
                  src={slide.bgImage}
                  alt="background"
                  className="w-full h-full object-cover brightness-50"
                />
              </div>
            )
        )}
        {/* </AnimatePresence> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#DECCBE] font-bold text-xl mb-8"
            >
              Transparency Leads to Your Victory
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#111] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2"
            >
              Transparent Auctions
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-[#d6482b] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8"
            >
              Be The Winner 💥
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {!isAuthenticated && (
                <Link
                  to="/sign-up"
                  className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] rounded-md px-8 py-3 text-white transition-all duration-300 inline-block"
                >
                  Get started ▶︎
                </Link>
              )}
            </motion.div>
          </motion.div>

          <div className="flex justify-center w-full py-16">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 p-8 rounded-lg text-white max-w-lg w-full mx-4 text-center" // Added text-center
            >
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold mb-6" // Increased text size and margin
              >
                {slides[activeSlide].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-lg" // Increased margin and text size
              >
                {slides[activeSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to={slides[activeSlide].link}
                  className="text-[#d6482b] hover:text-[#b8381e]"
                  onClick={slides[activeSlide].onClick}
                >
                  {slides[activeSlide].linkText}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="w-full h-fit px-5 pt-20 flex flex-col min-h-screen py-4 justify-center">
        <div className="flex flex-col gap-6">
          <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
            How it works
          </h3>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
            {howItWorks.map((element) => {
              return (
                <div
                  key={element.title}
                  className="bg-white flex flex-col gap-2 p-2 rounded-md h-[96px] justify-center md:w-[48%] lg:w-[47%] 2xl:w-[24%] hover:shadow-md transition-all duration-300"
                >
                  <h5 className="font-bold">{element.title}</h5>
                  <p>{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <FeaturedAuctions />
        <UpcomingAuctions />
        <Leaderboard />
      </section>
    </>
  );
};

export default Home;

//4th

// import React from "react";
// import HeroSection from "../layout/HeroSection";
// import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
// import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
// import Leaderboard from "./home-sub-components/Leaderboard";

// const Home = () => {
//   const howItWorks = [
//     { title: "Post Items", description: "Auctioneer posts items for bidding." },
//     { title: "Place Bids", description: "Bidders place bids on listed items." },
//     {
//       title: "Win Notification",
//       description: "Highest bidder receives a winning email.",
//     },
//     {
//       title: "Payment & Fees",
//       description: "Bidder pays; auctioneer pays 5% fee.",
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <HeroSection />

//       {/* How it works section */}
//       <section className="w-full h-fit px-5 pt-20 flex flex-col min-h-screen py-4 justify-center">
//         <div className="flex flex-col gap-6">
//           <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
//             How it works
//           </h3>
//           <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
//             {howItWorks.map((element) => {
//               return (
//                 <div
//                   key={element.title}
//                   className="bg-white flex flex-col gap-2 p-2 rounded-md h-[96px] justify-center md:w-[48%] lg:w-[47%] 2xl:w-[24%] hover:shadow-md transition-all duration-300"
//                 >
//                   <h5 className="font-bold">{element.title}</h5>
//                   <p>{element.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <FeaturedAuctions />
//         <UpcomingAuctions />
//         <Leaderboard />
//       </section>
//     </>
//   );
// };

// export default Home;
