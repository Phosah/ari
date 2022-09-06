import React from "react";

export default function Footer() {
    return (
        <main className="footer min-h-96">
            <div className="max-w-7xl mx-auto ">
                <div className="flex items-center space-x-6 py-12">
                    <div className="w-48 h-48 border-2 border-white rounded-full flex items-center justify-center"><a href="">Email</a></div>
                    <div className="w-48 h-48 border-2 border-white rounded-full flex items-center justify-center"><a href="">Calendly</a></div>
                </div>
                <div className="flex space-x-4 py-20">
                    <a href="">Twitter</a>
                    <a href="">Dribble</a>
                    <a href="">Behance</a>
                    <a href="">LinkedIn</a>
                    <a href="">Medium</a>
                </div>
            </div>
        </main>
    )
}