import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Magazine from "./pages/Magazine"; 
import MagazineDetails from "./pages/MagazineDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation(); // Get current route

  return (
    <>
      <Navbar /> {/* Navbar should appear on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/magazine/:id" element={<MagazineDetails />} />
      </Routes>
      {/* Hide Footer on Login & Signup pages */}
      {!["/login", "/signup"].includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
