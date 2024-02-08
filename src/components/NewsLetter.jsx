import React from "react";

const NewsLetter = () => {
  return (
    <div className="py-10 w-11/12 md:w-4/5 xl:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
      <h1 className="text-3xl font-bold">Subscribe Our NewsLetter</h1>
      <p className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
        impedit omnis asperiores provident iusto, fugiat, aliquam doloribus
        maiores error quia enim cumque? At tenetur alias vero architecto
        voluptatem.
      </p>
      <div className="flex items-center drop-shadow-lg">
        <input 
        type="text" 
        placeholder="Enter your email"
        className="px-5 py-2 outline-0 bg-white border rounded-l-md "/>
        <button className="px-5 py-2 bg-orange-500 text-white rounded-r-md">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
