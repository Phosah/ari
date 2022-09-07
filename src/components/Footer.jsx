import React from "react";

export default function Footer() {
    return (
        <main className="footer">
            <div className="max-w-7xl mx-auto">
                <div className="pt-40 pb-20">
                    <h1 className="mb-8 text-7xl">Get In touch</h1>
                    <div className="flex items-center space-x-12 py-12">
                        <div className="w-48 h-48 border border-white rounded-full flex items-center justify-center uppercase"><a href="">Email</a></div>
                        <div className="w-48 h-48 bg-white text-black rounded-full flex items-center justify-center uppercase"><a href="">Calendly</a></div>
                    </div>
                </div>
                <div className="flex justify-between space-x-4 py-10">
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