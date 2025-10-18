import React, { useState } from "react";
import { motion } from "framer-motion";
import LeftSideImage from "./LeftSideImage";
import { useNavigate } from "react-router-dom";

import appleIcon from "../assets/icons8-apple.svg";
import googleIcon from "../assets/icons8-google-50.svg";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register:", formData);
        alert("Register Success!");
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-purple-100 to-indigo-200">
            {/* Left Side - Book Image & Overlay */}
            <LeftSideImage
                url="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
            />

            {/* Right Side - Register Form */}
            <div className="md:w-1/2 w-full bg-white flex justify-center items-center p-8 md:p-16">
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-md"
                >
                    <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
                        Create Account
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="example@email.com"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                minLength="6"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="At least 6 characters"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="+91-9876543210"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Address
                            </label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your full address"
                            ></textarea>
                        </div>

                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <a href="/login" className="hover:text-purple-600">
                                Already have an account?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                        >
                            Register
                        </button>

                        <div className="flex items-center justify-center mt-4">
                            <div className="border-t w-1/4 border-gray-300"></div>
                            <p className="text-gray-500 mx-2">or</p>
                            <div className="border-t w-1/4 border-gray-300"></div>
                        </div>

                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                                <img src={googleIcon} alt="Google" className="h-6 w-6" />
                            </button>
                            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                                <img src={appleIcon} alt="Apple" className="h-6 w-6" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
