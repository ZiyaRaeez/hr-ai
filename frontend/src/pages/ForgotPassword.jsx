import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import Logo from "../components/Logo";
import { Mail } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import auth from "/policy-privacy.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const siteKey = "6Lcak9wqAAAAABuhNvb8rOd5PDqozXUwr3xmaiap";
  const imageUrl = auth;

  const displayInstruction = () => {
    return (
        alert(" You will shortly recieve an email that includes the link to reset the password")
          

    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Password reset requested for:", email);
  };

  return (
    <AuthLayout imageUrl={imageUrl}>
      <div className="flex flex-col items-center justify-between w-full h-full text-center py-4 space-y-6">
        {/* ===================== Header ===================== */}
        <div className="flex flex-col items-center text-center space-y-2 mt-2">
          <div className="transform translate-y-[-7px]">
            <Logo />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">
            Forgot Password 🔒
          </h1>
          <p className="text-slate-600 text-sm">
            Don’t worry! Enter your email to reset your password.
          </p>
        </div>

        {/* ===================== Forgot Password Form ===================== */}
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
              Email Address
            </label>

            <div className="flex items-center border border-gray-300 rounded-lg bg-white 
                            focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-sky-500 
                            transition-all duration-200">
              <div className="flex items-center justify-center pl-5 pr-3 rounded-l-lg">
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

          {/* reCAPTCHA */}
          <div className="flex justify-center my-2">
            <ReCAPTCHA sitekey={siteKey} />
          </div>


          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-lg font-semibold tracking-wide 
                       bg-gradient-to-r from-sky-600 to-indigo-700 text-white 
                       shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] 
                       transition-all duration-200"
            onClick = {displayInstruction}
          >
            Send Reset Link
          </button>
        </form>

        {/* ===================== Footer Links ===================== */}
        <div className="text-center space-y-1 mt-3">
          <p className="text-sm text-slate-600">
            Remember your password?{" "}
            <a
              href="/login"
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              Back to Login
            </a>
          </p>
          <a
            href="/signup"
            className="block text-sm text-indigo-700 hover:text-indigo-800 font-semibold"
          >
            Create a New Account →
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
