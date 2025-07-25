import React from "react";



const Category = ({ name, image, onclick }) => (
  <div onClick={onclick} className="relative rounded-xl overflow-hidden shadow-md group h-44 cursor-pointer">
    <img
  src="../images/uiux.png" // Placeholder image, replace with actual image path
  alt={name}

  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <span className="text-white text-xl font-bold tracking-wide text-center drop-shadow-lg">
        {name}
      </span>
    </div>
  </div>
);

export default Category; 