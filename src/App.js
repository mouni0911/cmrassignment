import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbarcomp from "./Navbarcomp";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Signup from "./Components/Signup";
//import Paginationdata from "./Components/Paginationdata";
function App() {
  return (
    <BrowserRouter>
      <Navbarcomp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/pagination" element={<Paginationdata />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
