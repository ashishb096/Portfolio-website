import React from  "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills" ;
import Projects from "./pages/Projects" ;
import Contact from "./pages/Contact" ;
import Footer from "./pages/Footer";
import "./index.css";

// Main application component that defines the structure of the portfolio website.
// It includes a navigation bar, different page routes, and a footer

function app() {
    return{
        <Router>
            <div className="bg-gray-100 min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    };
}

export default app;







