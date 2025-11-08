import React, { useState } from "react";
import {Link} from 'react-router-dom';
import AuthLayout from "../components/layout/AuthLayout";
import Logo from "../components/Logo";
import ReCAPTCHA from "react-google-recaptcha";
import { Eye, EyeOff, Mail, Lock, IdCard } from "lucide-react";
import auth from "/policy-privacy.png";
//import "../styles/auth.css";

const Signup = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const siteKey = "6Lcak9wqAAAAABuhNvb8rOd5PDqozXUwr3xmaiap";
  const imageUrl = auth;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Signup clicked", {
      employeeId,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <AuthLayout imageUrl={imageUrl}>
      <div className="flex flex-col items-center justify-between w-full h-full text-center py-4 space-y-6">
        {/* ===================== Header ===================== */}
        <div className="flex flex-col items-center text-center space-y-1 mt-2">
          <div className="transform translate-y-[-7px]">
            <Logo />
          </div>

          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">
            Create Your Account 👋
          </h1>
          <p className="text-slate-600 text-sm">
            Sign up to start managing HR tasks efficiently
          </p>
        </div>

        {/* ===================== Signup Form ===================== */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-[90%] max-w-[600px] mx-auto"

        >
          {/* Employee ID */}
          <div className="flex flex-col w-full text-left">
            <label
              htmlFor="employeeId"
              className="text-sm font-medium text-slate-700 mb-1"
            >
              Employee ID
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 transition-all duration-200">
              <div className="flex items-center pl-4 pr-4 rounded-l-lg">
                <IdCard size={22} className="text-gray-400 opacity-80" />
              </div>
              <input
                type="text"
                id="employeeId"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                placeholder="Enter your employee ID"
                className="w-full py-3 pl-5 pr-4 text-gray-700 border-none focus:outline-none rounded-r-lg text-[0.98rem]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col w-full text-left">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700 mb-1"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 transition-all duration-200">
              <div className="flex items-center justify-center pl-5 pr-3">
                <Mail size={22} className="text-gray-400 opacity-80" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="w-full py-3 pl-5 pr-4 text-gray-700 border-none focus:outline-none rounded-r-lg text-[0.98rem]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col w-full text-left">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700 mb-1"
            >
              Password
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 transition-all duration-200">
              <div className="flex items-center justify-center pl-5 pr-3">
                <Lock size={22} className="text-gray-400 opacity-80" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full py-3 pl-5 pr-4 text-gray-700 border-none focus:outline-none rounded-r-lg text-[0.98rem]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col w-full text-left">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-slate-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 transition-all duration-200">
              <div className="flex items-center justify-center pl-5 pr-3">
                <Lock size={22} className="text-gray-400 opacity-80" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full py-3 pl-5 pr-4 text-gray-700 border-none focus:outline-none rounded-r-lg text-[0.98rem]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center mt-1 mb-1">
            <ReCAPTCHA sitekey={siteKey} />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-lg text-lg font-semibold tracking-wide 
                       bg-gradient-to-r from-sky-600 to-indigo-700 text-white 
                       shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] 
                       transition-all duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* ===================== Footer Links ===================== */}
        <div className="text-center space-y-2 mt-5">
          <p className="text-sm text-slate-600">
          Already have an account?{" "}
  <Link to="/login" className="text-sky-600 hover:text-sky-700 font-medium">
    Login
  </Link>
          </p>
          <a
            href="/admin"
            className="block text-sm text-indigo-700 hover:text-indigo-800 font-semibold"
          >
            Go to Admin Authentication →
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
