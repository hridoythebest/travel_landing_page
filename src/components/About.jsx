import React from "react";

const About = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 m-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 p-5 space-y-5">
          <h1 className="text-5xl font-bold">Explore New Favorite Places</h1>
          <p className="text-xs md:text-sm text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            tempore, in ipsa tenetur, eum necessitatibus odit quibusdam quasi
            quos iste autem cupiditate! Ipsam, quod voluptatum! Suscipit error
            unde provident voluptatibus.
          </p>
          <button className="px-5 py-2 rounded-md bg-orange-500 text-white">Get Started</button>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3">
            <img src="./image6.png" alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default About;
