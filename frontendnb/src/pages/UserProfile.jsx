// import Spinner from "@/custom-components/Spinner";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const UserProfile = () => {
//   const { user, isAuthenticated, loading } = useSelector((state) => state.user);
//   const navigateTo = useNavigate();
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [isAuthenticated]);
//   return (
//     <>
//       <section className="w-full h-fit px-5 pt-20  flex flex-col min-h-screen py-4 justify-start">
//         {loading ? (
//           <Spinner />
//         ) : (
//           <>
//             <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//               <img
//                 src={user.profileImage?.url}
//                 alt="/imageHolder.jpg"
//                 className="w-36 h-36 rounded-full"
//               />

//               <div className="mb-6 w-full">
//                 <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Username
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.userName}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.email}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Phone
//                     </label>
//                     <input
//                       type="number"
//                       defaultValue={user.phone}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.address}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Role
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.role}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Joined On
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.createdAt?.substring(0, 10)}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                 </div>
//               </div>

//               {user.role === "Auctioneer" && (
//                 <div className="mb-6 w-full">
//                   <h3 className="text-xl font-semibold mb-4">
//                     Payment Details
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Bank Name
//                       </label>
//                       <input
//                         type="text"
//                         // defaultValue={user.paymentMethods.bankTransfer.bankName}
//                         defaultValue={user.bankDetails.bankName}
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Bank Account Number
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user.bankDetails.accountNumber}
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Registered Mobile Number
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user.bankDetails.mobileNumber}
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     {/* <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Easypaisa Account Number
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.easypaisa.easypaisaAccountNumber
//                         }
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div> */}
//                     {/* <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Paypal Email
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user.paymentMethods.paypal.paypalEmail}
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div> */}
//                   </div>
//                 </div>
//               )}

//               <div className="mb-6 w-full">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Other User Details
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {user.role === "Auctioneer" && (
//                     <>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Unpaid Commissions
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.unpaidCommission}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                     </>
//                   )}
//                   {user.role === "Bidder" && (
//                     <>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Auctions Won
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.auctionsWon}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Money Spent
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.moneySpent}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </section>
//     </>
//   );
// };

// export default UserProfile;


import React, { useEffect } from "react";
import Spinner from "@/custom-components/Spinner";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
 const { user, isAuthenticated, loading } = useSelector((state) => state.user);
 const navigateTo = useNavigate();
 useEffect(() => {
   if (!isAuthenticated) {
     navigateTo("/");
   }
 }, [isAuthenticated]);
 
 return (
   <section className="w-full h-fit px-5 pt-20 flex flex-col min-h-screen py-4 justify-start">
     {loading ? (
       <Spinner /> 
     ) : (
       <div className="bg-white mx-auto w-full h-auto px-6 flex flex-col gap-6 py-8 rounded-md shadow-md">
         {/* Profile Image */}
         <div className="flex justify-center">
           <img
             src={user.profileImage?.url}
             alt="/imageHolder.jpg"
             className="w-40 h-40 rounded-full object-cover shadow-md"
           />
         </div>

         {/* Personal Details */}
         <div className="w-full">
           <h3 className="text-2xl font-semibold mb-6">Personal Details</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Username
               </label>
               <input
                 type="text"
                 defaultValue={user.userName}
                 className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                 disabled
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Email
               </label>
               <input
                 type="text"
                 defaultValue={user.email}
                 className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                 disabled
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Phone
               </label>
               <input
                 type="text"
                 defaultValue={user.phone}
                 className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                 disabled
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Address
               </label>
               <input
                 type="text"
                 defaultValue={user.address}
                 className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                 disabled
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Role
               </label>
               <input
                 type="text"
                 defaultValue={user.role}
                 className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                 disabled
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Joined On
               </label>
               <input
                 type="text"
                 defaultValue={user.createdAt?.substring(0, 10)}
                 className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                 disabled
               />
             </div>
           </div>
         </div>

         {/* Payment Details for Auctioneer */}
         {user.role === "Auctioneer" && (
           <div className="w-full">
             <h3 className="text-2xl font-semibold mb-6">Payment Details</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                   Bank Name
                 </label>
                 <input
                   type="text"
                   defaultValue={user.bankDetails.bankName}
                   className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                   disabled
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                   Bank Account Number
                 </label>
                 <input
                   type="text"
                   defaultValue={user.bankDetails.accountNumber}
                   className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                   disabled
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                   Registered Mobile Number
                 </label>
                 <input
                   type="text"
                   defaultValue={user.bankDetails.mobileNumber}
                   className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                   disabled
                 />
               </div>
             </div>
           </div>
         )}

         {/* Other User Details */}
         <div className="w-full">
           <h3 className="text-2xl font-semibold mb-6">Other User Details</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {user.role === "Auctioneer" && (
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                   Unpaid Commissions
                 </label>
                 <input
                   type="text"
                   defaultValue={user.unpaidCommission}
                   className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                   disabled
                 />
               </div>
             )}
             
             {user.role === "Bidder" && (
               <>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">
                     Auctions Won
                   </label>
                   <input
                     type="text"
                     defaultValue={user.auctionsWon}
                     className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                     disabled
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">
                     Money Spent
                   </label>
                   <input
                     type="text"
                     defaultValue={user.moneySpent}
                     className="w-full p-3 bg-gray-50 rounded-md focus:outline-none break-all"
                     disabled
                   />
                 </div>
               </>
             )}
           </div>
         </div>

       </div>
     )}
   </section>
 );
};

export default UserProfile;