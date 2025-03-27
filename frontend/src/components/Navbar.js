import React from "react";
import { Link } from "react-router-dom";

// Navbar component

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-bold">Ashish Bisht</h1>
            <ul className="flex space-x-6">
                <li> <Link to="/"className="hover:text-gray-400">Home</Link></li>
                <li> <Link to="/about"className="hover:text-gray-400">About</Link></li>
                <li> <Link to="/skills"className="hover:text-gray-400">Skills</Link></li>
                <li> <Link to="/projects"className="hover:text-gray-400">Projects</Link></li>
                <li> <Link to="/contact"className="hover:text-gray-400">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

