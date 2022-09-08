import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full max-w-7xl mx-auto py-10">
            <Link to="/"><div><img src={logo} alt="Menu logo" /></div></Link>
            <div><img src={menu} alt="Menu logo" /></div>
        </nav>
    );
}