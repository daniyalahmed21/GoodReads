import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { logOut } from "Redux/Slices/AuthSlice";

const Header = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    console.log("hello");
    localStorage.clear();
    dispatch(logOut());
    navigate("/signin");
  };

 

  return (
    <header className="flex w-full items-center p-4 sm:p-5 max-w-7xl mx-auto">
      <Link to="/">
        <div className="font-serif text-3xl xs:text-4xl sm:text-5xl font-medium text-[#382110]">
          goodreads
        </div>
      </Link>
      <div className="ml-auto flex space-x-4">
        {authState.isLoggedIn && (
          <button
            onClick={handleLogOut}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {" "}
            Logout
          </button>
        )}
        {authState.isLoggedIn && (
          <span className="px-4 py-2 text-gray-700">{authState.username}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
