import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full px-16 flex justify-between items-center uppercase h-[79px] bg-[#EAE9E4] border-b-2 border-black z-10">
      <div className="space-x-5 flex">
        <p className="cursor-pointer">Log in</p>
        <p className="cursor-pointer">Reservation</p>
        <p className="cursor-pointer">Private Parties</p>
      </div>
      <div className="flex flex-col items-center bg-[#EAE9E4] mt-12 rounded-full w-32 p-3 border-black">
      <img src="./assets/logo.png" alt="logo" className="cursor-pointer w-24"/>
      <img src="./assets/logo-text.png" alt="logo" className="cursor-pointer -mt-4"/>
      </div>
      <div className="space-x-5 flex">
        <p className="cursor-pointer">Events</p>
        <p className="cursor-pointer">Contact Us</p>
        <p className="cursor-pointer">About Us</p>
      </div>
    </div>
  );
};

export default Navbar;
