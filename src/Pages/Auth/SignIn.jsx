import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signin } from "Redux/Slices/AuthSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      const action = await dispatch(signin(formData)).unwrap(); // Unwrap the promise to get the payload
      if (action.success) {
        navigate("/dashboard");
      } else {
        setError(action.message || "Sign-in failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during sign-in. Please try again.");
      console.error("Sign-in error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/dashboard");
    }
  }, [authState.isLoggedIn, navigate]); // Only re-run when isLoggedIn changes

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea] p-6">
      <div className="w-full max-w-md">
        <h1 className="font-serif text-4xl font-bold text-center mb-6 text-[#00635d]">
          Sign in to GoodReads
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
              autoComplete="current-password" // Improved autocomplete
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
            disabled={loading}
            className={`w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing in..." : "Sign in"}
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

export default SignIn;