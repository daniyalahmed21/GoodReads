import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="p-6 bg-white shadow-lg text-center rounded-t-xl">
      <p className="text-sm text-gray-700 font-medium">&copy; 2025 Goodreads</p>
      <nav className="mt-3 flex justify-center gap-4 text-sm">
        <Link
          to="#"
          className="text-[#00635d] hover:text-[#004d4a] hover:underline transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="#"
          className="text-[#00635d] hover:text-[#004d4a] hover:underline transition-colors duration-200"
        >
          Careers
        </Link>
        <Link
          to="#"
          className="text-[#00635d] hover:text-[#004d4a] hover:underline transition-colors duration-200"
        >
          Terms
        </Link>
        <Link
          to="#"
          className="text-[#00635d] hover:text-[#004d4a] hover:underline transition-colors duration-200"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
