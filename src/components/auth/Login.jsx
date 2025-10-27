import React, { useState } from "react";
import { motion } from "framer-motion";
import LeftSideImage from "./LeftSideImage";
import { useNavigate } from "react-router-dom";
import api from "../axiosConfig";

import appleIcon from "../../assets/icons8-apple.svg";
import googleIcon from "../../assets/icons8-google-50.svg";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/api/auth/login", formData);
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.error("❌ Login failed:", error);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) alert("Invalid credentials.");
        else if (status === 403) alert("Access denied.");
        else alert(data.message || "Login failed. Try again.");
      } else {
        alert("Unable to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-purple-100 to-indigo-200">
      {/* Left image (hidden on small screens) */}
      <div className="hidden md:block md:w-1/2">
        <LeftSideImage url="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" />
      </div>

      {/* Right side (form) */}
      <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-6 sm:p-10 md:p-16">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-600 mb-6 sm:mb-8">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                placeholder="example@email.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-2 sm:gap-0">
              <a href="#" className="hover:text-purple-600">
                Forgot Password?
              </a>
              <a href="/register" className="hover:text-purple-600">
                Register Now
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-purple-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center mt-4">
              <div className="border-t w-1/5 sm:w-1/4 border-gray-300"></div>
              <p className="text-gray-500 mx-2 text-xs sm:text-sm">or</p>
              <div className="border-t w-1/5 sm:w-1/4 border-gray-300"></div>
            </div>

            {/* Social buttons */}
            <div className="flex justify-center space-x-3 sm:space-x-4 mt-3 sm:mt-4">
              <button
                type="button"
                className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center"
              >
                <img src={googleIcon} alt="Google" className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center"
              >
                <img src={appleIcon} alt="Apple" className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
