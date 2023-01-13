/*This is the main file in this project since it acts as a container for all other components in this app*/
import React from "react";
import Navbar from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Converter from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Converter />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
