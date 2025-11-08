import React from "react";

const AuthLayout = ({ children, imageUrl }) => {
  return (
    <div
      className="flex flex-col lg:flex-row h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50"
      style={{
        fontFamily: "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif",
      }}
    >
      {/* Left Section: Auth Form */}
      <div className="w-full lg:w-[45%] flex flex-col items-center justify-center h-full px-6 sm:px-8 md:px-10 py-8 bg-white shadow-inner">
        <div className="w-full max-w-[550px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between h-[90vh]">
          {/* Allow internal scrolling if absolutely needed */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </div>
      </div>

      {/* Right Section: Illustration */}
      <div className="hidden lg:flex lg:w-[55%] bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 items-center justify-center p-8 lg:p-10 xl:p-12">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Authentication Illustration"
              className="w-full max-w-[480px] max-h-[60vh] object-contain drop-shadow-lg"
            />
          ) : (
            <div className="w-64 h-64 bg-white bg-opacity-70 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-sky-200">
              <div className="text-center p-6 md:p-8">
                <div className="text-sky-500 text-5xl mb-4">✨</div>
                <p className="text-slate-600 text-lg font-semibold mb-2">
                  Place Your Logo Here
                </p>
                <p className="text-slate-500 text-xs md:text-sm">
                  Add your image URL
                </p>
              </div>
            </div>
          )}
          <h3 className="text-slate-700 text-lg md:text-xl font-medium max-w-lg leading-relaxed px-4">
            Streamline HR processes with clarity, precision, and care.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
