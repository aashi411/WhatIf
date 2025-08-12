import React from "react";

const Card = ({ image, title, description, details }) => {
  return (
    <div className="relative w-64 h-80 mt-4 mb-4 overflow-hidden rounded-xl shadow-lg group">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Default Content */}
      <div className="absolute bottom-0 left-0 w-full bg-sky-300  p-4 transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="text-black font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <span className="text-blue-600 font-semibold text-sm mt-2 block cursor-pointer">
          Read More
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
        <div>
          {details.map((item, idx) => (
            <div key={idx} className="mb-2">
              <h4 className="text-lg font-bold text-gray-900">{`0${idx + 1}`}</h4>
              <p className="text-sm border-b-2 border-black border-opacity-15 text-gray-900">{item}</p>
            </div>
          ))}
        </div>
        <span className="text-gray-800 underline font-semibold text-sm cursor-pointer">
          Read More →
        </span>
      </div>
    </div>
  );
};

export default Card;
