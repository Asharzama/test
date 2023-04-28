import React from "react";

const DishesSection = () => {
  return (
    <div className="bg-[#9E7D5F] h-[808px] relative">
      <img
        src="./assets/dish-1.png"
        alt="dish"
        className="absolute left-0 top-0"
      />
      <img
        src="./assets/overview.png"
        alt="overview"
        className="absolute right-0 top-0"
      />
      <div className="text-white flex flex-col items-end w-2/3">
        <div className="mt-32">
          <p className="text-xl">#MostLovedDish</p>
          <h1 className="uppercase text-5xl mt-3">Delight Cake</h1>
          <div className="flex space-x-3 cursor-pointer mt-6">
            <img src="./assets/play-button.png" alt="button" />
            <p>Play Video</p>
          </div>
          <div className="mt-8 space-x-7">
            <button className="bg-white text-black rounded-2xl py-2 px-5">
              Order Now
            </button>
            <button className="bg-white text-black rounded-2xl py-2 px-5">
              View Menu
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-between items-center mx-auto mt-32">
        <img src="./assets/Arrow.png" alt="arrow" className="rotate-180 cursor-pointer" />
        <div className="flex flex-col justify-center px-5 py-6 rounded-3xl hover:bg-white">
          <img src="./assets/cuisine-1.png" alt="" />
          <p className="text-white selection:text-[#143740] hover:text-[#143740] text-base mt-4">
            Delight Cake
          </p>
        </div>
        <div className="flex flex-col justify-center px-5 py-6 rounded-3xl hover:bg-white">
          <img src="./assets/cuisine-2.png" alt="" />
          <p className="text-white selection:text-[#143740] hover:text-[#143740] text-base mt-4">
            Asian Winch
          </p>
        </div>
        <div className="flex flex-col justify-center px-5 py-6 rounded-3xl hover:bg-white">
          <img src="./assets/cuisine-3.png" alt="" />
          <p className="text-white selection:text-[#143740] hover:text-[#143740] text-base mt-4">
            Malayi Cheese
          </p>
        </div>
        <div className="flex flex-col justify-center px-5 py-6 rounded-3xl hover:bg-white">
          <img src="./assets/cuisine-4.png" alt="" />
          <p className="text-white selection:text-[#143740] hover:text-[#143740] text-base mt-4">
            Elite Gineey
          </p>
        </div>
        <img src="./assets/Arrow.png" alt="arrow" className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default DishesSection;
