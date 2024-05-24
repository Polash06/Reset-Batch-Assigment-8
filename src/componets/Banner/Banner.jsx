import React from "react";

const Banner = () => {
  return (
    <div className="lg:flex gap-36 mx-auto  mt-6 bg-gray-300 lg:w-[1600px] lg:h-[750px] rounded-lg">
      <div className="mx-16 my-16">
        <h2 className="lg:text-8xl md:text-2xl font-bold lg:mt-60">Books to freshen up<br></br> your bookshelf</h2>
        <button className="btn btn-success lg:mx-60 w-60 h-9 mt-12 text-white text-lg font-medium">View The List</button>
      </div>
      <div className="mt-52">
        <img className="lg:w-80" src="./public/images/images (3).jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
