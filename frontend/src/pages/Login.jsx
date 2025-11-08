import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import Logo from "../components/Logo";
import ReCAPTCHA from "react-google-recaptcha";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import auth from "/policy-privacy.png";
import "../styles/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const siteKey = "6Lcak9wqAAAAABuhNvb8rOd5PDqozXUwr3xmaiap";
  const imageUrl = auth;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login clicked", { email, password });
  };

  return (
    <AuthLayout imageUrl={imageUrl}>
      <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-10">
        <div className="flex flex-col items-center text-center space-y-2 mt-2">
          {/* Slightly raised and centered logo */}
          <div className="transform translate-y-[-7px]">
            <Logo />
          </div>
          {/* Welcome Text */}
          <h3
            className="text-2xl font-semibold text-slate-800 tracking-tight"
            style={{
              fontFamily:
                "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif",
            }}
          >
            Welcome Back !!
          </h3>
          <p
            className="text-slate-600 text-sm"
            style={{
              fontFamily:
                "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif",
            }}
          >
            Sign in to continue to your HR Pro AI dashboard
          </p>
        </div>

        {/* ===================== Login Form ===================== */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[90%] max-w-[500px] mx-auto"
        >
          {/* Email Field */}
          <div className="flex flex-col w-full text-left">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700 mb-1"
              style={{
                fontFamily:
                  "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif",
              }}
            >
              Email
            </label>

            <div
  className="relative flex items-center border border-gray-300 rounded-lg bg-white 
                focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 
                transition-all duration-200 gap-x-3 "
>
  <div className = "flex items-center justify-center pl-5 pr-3"><Mail size={22} className="text-gray-400 opacity-80 " /></div>
  
  <input
    type="email"
    placeholder="your.email@company.com"
    className="w-full py-4 pl-6 pr-4 text-gray-700 border-none focus:outline-none rounded-r-lg text-[0.98rem]"
    style={{
      fontFamily:
        "'Poppins', 'Inter', 'Segoe UI', system-ui, sans-serif",
      fontWeight: 400,
      letterSpacing: "0.25px",
    }}
  />
</div>

          </div>

          {/* Password Field */}
          <div className="flex flex-col w-full text-left">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700 mb-1"
              style={{
                fontFamily:
                  "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif",
              }}
            >
              Password
            </label>

            <div
              className="relative flex items-center border border-gray-300 rounded-lg bg-white 
                focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 
                transition-all duration-200 gap-x-3"
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center pl-5 pr-3">
                <Lock size={22} className="text-gray-400 opacity-80" />
              </div>

              {/* Input */}
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full py-4 pl-6 pr-4 text-gray-700 border-none focus:outline-none rounded-r-lg text-[0.98rem]"
                style={{
                  fontFamily:
                    "'Poppins', 'Inter', 'Segoe UI', system-ui, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.25px",
                }}
              />

              {/* Eye Icon */}
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-lg text-lg font-semibold tracking-wide 
                       bg-gradient-to-r from-sky-600 to-indigo-700 text-white 
                       shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] 
                       transition-all duration-200"
            style={{
              fontFamily:
                "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif",
            }}
          >
            Sign In
          </button>
        </form>

        {/* ===================== Footer Links ===================== */}
        <div
          className="text-center space-y-2"
          style={{
            fontFamily:
              "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif",
          }}
        >
          <a
            href="/forgot-password"
            className="block text-sm text-sky-600 hover:text-sky-700 font-medium"
          >
            Forgot Password?
          </a>
          <p className="text-sm text-slate-600">
            Don’t have an account?{" "}
            <a
              href="/SignUp"
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              Sign Up
            </a>
          </p>
          <a
            href="/admin"
            className="block text-sm text-indigo-700 hover:text-indigo-800 font-semibold mt-2"
          >
            Go to Admin Authentication →
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
