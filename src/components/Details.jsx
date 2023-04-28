import React from "react";

const Details = () => {
  return (
    <div className="px-16 my-16 relative h-[853px]">
      <img
        src="./assets/details-frame.png"
        alt="frame"
        className="absolute right-0"
      />
      <div className="absolute top-14 right-0 flex flex-col justify-end">
        <img src="./assets/chair.png" alt="chair" />
        <img src="./assets/chair-shadow.png" alt="shadow" />
      </div>
      <div className="absolute top-32 left-0 flex flex-col justify-start">
        <img src="./assets/table.png" alt="table" />
        <img src="./assets/table-shadow.png" alt="table-shadow" className="-mt-10"/>
      </div>
      <div className="text-3xl text-[#737373] w-[812px] ml-20 mt-28">
        <img src="./assets/Quote.png" alt="icon" className="-ml-14" />
        <p>
          Experience culinary excellence at our restaurant. Book your table
          today and get ready to indulge in a delightful dining experience!!
        </p>
      </div>
    </div>
  );
};

export default Details;
