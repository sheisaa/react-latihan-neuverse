import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Price from "./pages/Prices";
import Navbar from "./components/blocks/Navbar";
import Footer from "./components/blocks/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Price />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}