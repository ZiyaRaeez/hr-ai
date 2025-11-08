import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import Logo from "../components/Logo";
import ReCAPTCHA from "react-google-recaptcha";
import { Eye, EyeOff, Mail, Shield } from "lucide-react";
import adminImage from "/policy-privacy.png"; 
import "../styles/auth.css";

const AdminAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const siteKey = "6Lcak9wqAAAAABuhNvb8rOd5PDqozXUwr3xmaiap";
  const imageUrl = adminImage;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Admin Auth:", { email, password });
  };

  return (
    <AuthLayout imageUrl={imageUrl}>
      <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mt-2">
          <div className="transform translate-y-[-8px]">
            <Logo />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">
            Admin Login 
          </h1>
          <p className="text-slate-600 text-sm">
            Secure access for administrators only
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[90%] max-w-[500px] mx-auto"
        >
          {/* Email */}
          <div className="flex flex-col w-full text-left">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700 mb-1"
            >
              Admin Email
            </label>

            <div className="flex items-center border border-gray-300 rounded-lg bg-white 
                            focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 
                            transition-all duration-200">
              <div className="flex items-center justify-center pl-5 pr-3">
                <Mail size={22} className="text-gray-400 opacity-80" />
              </div>

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@company.com"
                className="w-full py-4 pl-6 pr-4 text-gray-700 border-none focus:outline-none rounded-r-lg text-[0.98rem]"
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

            <div className="relative flex items-center border border-gray-300 rounded-lg bg-white 
                            focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 
                            transition-all duration-200">
              <div className="flex items-center justify-center pl-5 pr-3">
                <Shield size={22} className="text-gray-400 opacity-80" />
              </div>

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full py-4 pl-6 pr-4 text-gray-700 border-none focus:outline-none rounded-r-lg text-[0.98rem]"
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

          {/* reCAPTCHA */}
          <div className="flex justify-center mt-1 mb-1">
            <ReCAPTCHA sitekey={siteKey} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-lg text-lg font-semibold tracking-wide 
                       bg-gradient-to-r from-sky-600 to-indigo-700 text-white 
                       shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] 
                       transition-all duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center space-y-2 mt-5">
          <p className="text-sm text-slate-600">
            Return to{" "}
            <a href="/login" className="text-sky-600 hover:text-sky-700 font-medium">
              Employee Login
            </a>
          </p>
          <p className="text-sm text-slate-600">
            New user?{" "}
            <a href="/signup" className="text-sky-600 hover:text-sky-700 font-medium">
              Register here
            </a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AdminAuth;
