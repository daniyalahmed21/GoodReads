import React from "react";

import goodreadsBanner from "/goodreadsBanner.png";

const Banner = () => {
  return (
    <div className="w-full h-full ">
      <img
        src={goodreadsBanner}
        alt="Goodreads Banner"
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  );
};

export default Banner;
