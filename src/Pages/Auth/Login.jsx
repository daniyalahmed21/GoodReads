import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea] p-6">
      <div className="w-full max-w-md">
        <h1 className="font-serif text-4xl font-bold text-center mb-6 text-[#00635d]">
          Sign in to GoodReads
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              autoComplete="off"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Passwords must be at least 6 characters.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Create account
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          By creating an account, you agree to the Goodreads Terms of Service
          and Privacy Policy.
        </p>
        <p className="text-center text-sm text-[#00635d] mt-2 hover:underline">
          Create account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
