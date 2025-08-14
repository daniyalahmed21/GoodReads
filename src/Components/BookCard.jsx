import React from "react";

import image from "Assets/600x400.svg"

const BookCard = ({ title = "Unknown Book", author = "Unknown Author", imageUrl = image, id }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={`${title} cover`}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">by {author}</p>
        {id && (
          <a
            href={`/book/${id}`}
            className="mt-4 inline-block text-blue-500 hover:text-blue-700 underline"
          >
            View Details
          </a>
        )}
      </div>
    </div>
  );
};

export default BookCard;