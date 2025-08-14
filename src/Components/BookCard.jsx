import React from "react";
import { Link, useNavigate } from "react-router";

import image from "Assets/600x400.svg";

const BookCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={`${data.title} cover`}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {data.title}
        </h3>
        <p className="text-gray-600 text-sm">
          by {data.author !== null ? data.author : "Unknown Author"}
        </p>
        {data._id && (
          <button
            onClick={() => navigate("/books/description", { state: data })}
            className="mt-4 inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
