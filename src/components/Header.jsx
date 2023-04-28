import React from "react";

const Header = () => {
  return (
    <div
      className="mt-[79px] bg-center bg-cover px-16 h-[709px] flex justify-end relative"
      style={{ background: "url('./assets/header-1.png')" }}
    >
      <div className="w-1/2 flex justify-center flex-col text-white">
        <h1 className="uppercase text-5xl ">
          Dessert | Bar | Kitchen
        </h1>
        <p className="text-2xl my-6">The Barn is a global food experience and our dessert bar is legendary!</p>
        <button className="rounded-3xl bg-[#C5B5A6] text-base w-32 text-black">Contact Us</button>
      </div>
      <div className="absolute right-16 bottom-9 flex flex-col space-y-4">
        <button className="bg-white rounded-full w-2 h-2"></button>
        <button className="bg-white rounded-full w-2 h-2"></button>
        <button className="bg-white rounded-full w-2 h-2"></button>
      </div>
    </div>
  );
};

export default Header;
