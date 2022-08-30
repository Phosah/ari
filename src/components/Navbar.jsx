import React from "react";
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between max-w-7xl mx-auto my-10 py-10">
            <div><img src={logo} alt="Menu logo" /></div>
            <div><img src={menu} alt="Menu logo" /></div>
        </nav>
    );
}