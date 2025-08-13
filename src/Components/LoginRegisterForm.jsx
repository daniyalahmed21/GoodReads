import React from 'react';
import { Link } from 'react-router';

const LoginRegisterForm = () => {
  return (
    <div className="flex-none p-4 sm:p-6 w-full max-w-md lg:max-w-sm mx-auto">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6 w-full">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 text-center sm:text-left">
              Discover & read more
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <Link className="flex items-center justify-center w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-semibold text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200" to="/signin">
              <button >
                Login to your account
              </button>
              </Link>

              <Link className="flex items-center justify-center w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-semibold text-white bg-[#553b1b] rounded-md hover:bg-[#6c4c23] transition-colors duration-200" to="/signup">
              <button >
                Sign up with email
              </button>
              </Link>
            </div>

            <p className="mt-4 text-[10px] xs:text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
              By creating an account, you agree to the Goodreads{" "}
              <a href="#" className=" text-green-700 hover:text-green-900">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className=" text-green-700 hover:text-green-900">
                Privacy Policy
              </a>
              .
            </p>

            <div className="mt-4 sm:mt-6 pt-4 text-center border-t border-gray-200">
              <p className="text-xs xs:text-sm sm:text-base text-gray-700">
                Already a member?{" "}
                <a
                  href="#"
                  className="text-green-700 font-bold hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
  );
};

export default LoginRegisterForm;