import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import Home from "./Pages/Home";
import About from "./Pages/About";
// import Awards from "./Pages/Awards";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Youtube from "./Pages/Youtube";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Youtube" element={<Youtube />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;