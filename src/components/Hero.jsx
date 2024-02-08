import React from "react";

const Hero = () => {
  return (
    <div className="py-10">
      <div className="w-full h-[500px] rounded-md bg-[url('./back.jpg')] bg-cover">
        <div className="w-full md:w-4/5 lg:w-1/2 2xl:w-1/3 bg-gradient-to-r from-gray-600 h-full flex flex-col justify-center space-y-5 p-5 text-white rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold">Explore The World With Us</h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A error
            necessitatibus labore, officia voluptates, similique enim assumenda,
            molestias commodi consequuntur illo minus. Possimus, mollitia
            assumenda!
          </p>
          <div className="flex items-center">
            <input 
            type="text" 
            placeholder="search place"
            className="px-5 py-2 bg-white rounded-l-md text-gray-500 outline-0" />
            <button className="px-5 py-2 bg-orange-500 font-bold rounded-r-md">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
