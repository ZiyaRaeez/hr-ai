import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import AdminAuth from "./pages/AdminAuth";
import ForgotPassword from "./pages/ForgotPassword";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route (redirect to login) */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminAuth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        

        {/* 404 fallback route */}
        <Route path="*" element={<h1 className="text-center mt-10 text-red-500">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
