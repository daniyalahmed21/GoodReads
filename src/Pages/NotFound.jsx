import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f1ea] text-center">
      <h1 className="text-5xl font-bold text-[#00635d] mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#00635d] text-white rounded-lg hover:bg-[#004d4a] transition-colors duration-200"
      >
        Return to Home
      </Link>
    </div>)
}

export default NotFound