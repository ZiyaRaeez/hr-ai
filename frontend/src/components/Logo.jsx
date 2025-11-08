const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center mb-2">
        <h1 
          className="text-2xl font-bold text-slate-800"
          style={{ fontFamily: "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif" }}
        >
          HR Pro
        </h1>
        <span className="ml-2 px-2 py-1 bg-gradient-to-r from-sky-600 to-indigo-700 text-white text-xs font-semibold rounded-full flex items-center">
          ✨ AI
        </span>
      </div>
      <p 
        className="text-slate-500 text-sm"
        style={{ fontFamily: "'Inter', 'Segoe UI', -apple-system, system-ui, sans-serif" }}
      >
      </p>
    </div>
  );
};

export default Logo;
