import React from "react";

const BookCard = ({ title = "Unknown Book", author = "Unknown Author", imageUrl = "https://placehold.co/600x400", id }) => {
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