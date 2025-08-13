import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signup } from "Redux/Slices/AuthSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user edits
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate password match
    if (formData.password !== formData.rePassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const action = await dispatch(signup(formData)).unwrap(); // Unwrap the promise to get the payload
      if (action.success) {
        navigate("/signin"); // Redirect to sign-in after successful sign-up
      } else {
        setError(action.message || "Sign-up failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during sign-up. Please try again.");
      console.error("Sign-up error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/dashboard");
    }
  }, [authState.isLoggedIn, navigate]); // Added navigate to dependency array

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea] p-6">
      <div className="w-full max-w-md">
        <h1 className="font-serif text-4xl font-bold text-center mb-6 text-[#00635d]">
          Create Account
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              autoComplete="username" // Improved autocomplete
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="First and last name"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              autoComplete="email" // Improved autocomplete
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
              autoComplete="new-password" // Improved autocomplete
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Re-enter Password
            </label>
            <input
              autoComplete="new-password" // Improved autocomplete
              type="password"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          By creating an account, you agree to the Goodreads Terms of Service
          and Privacy Policy.
        </p>
        <p className="text-center text-sm text-[#00635d] mt-2 hover:underline">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;