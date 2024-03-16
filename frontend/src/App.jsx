import { useState } from "react";

import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/SignUp.jsx";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useAuthContext();



  return (
    <>
      <div className="p-4 flex items-center justify-center h-screen overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={authUser ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />

          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
