import React from "react";
import Layout from "Layouts/Layout";
import { Link, useLocation } from "react-router";

import image from "Assets/600x400.svg";

const BookDescription = () => {
  const { state } = useLocation();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <Link
          to="/dashboard"
          className="mb-6 inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          ← Back to Books
        </Link>
        {state ? (
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={image}
              alt={`${state.title} cover`}
              className=" h-64 object-cover"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {state.title}
              </h1>
              <p className="text-gray-600 mb-2">
                <strong>Author:</strong> {state.author || "Unknown Author"}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Published:</strong>{" "}
                {state.publishDate || "Unknown Date"}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Pages:</strong> {state.pages || "N/A"}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Genres:</strong>{" "}
                {state.genres.length > 0 ? state.genres.join(", ") : "N/A"}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {state.description || "No description available."}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-red-500">
            Book data not found. Please go back and try again.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default BookDescription;
