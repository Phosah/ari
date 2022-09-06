import React from "react";
import ari from "../assets/ari.png";

export default function Home () {
    return (
        <main className="max-w-7xl mx-auto px-6">
            <div className="py-20">
                <h1 className="text-7xl">Visual Designer and Art Director Creating Delightful Experieces</h1>
            </div>
            <div className="flex items-center space-x-4 py-20">
                <div><img src={ari} alt="Ari photo" /></div>
                <p>HI, MY NAME IS ARI. I'M A VISUAL DESIGNER / ILLUSTRATOR, EXPERIENCES SIMPLE AND DELIGHTFUL FOR AMBITIOUS TEAMS ACROSS THE GLOBE.</p>
            </div>
            <div className="max-w-5xl py-20">
                <div className=" text-right">
                    <h4>1</h4>
                    <h2 className="mb-4 text-7xl">Illustrations</h2>
                </div>
                <div>
                    <h4>2</h4>
                    <h2 className="mb-4 text-7xl">NFT ARTS</h2>
                </div>
                <div className="text-right">
                    <h4>3</h4>
                    <h2 className="mb-4 text-7xl">Graphics</h2>
                </div>
                <div>
                    <h4>4</h4>
                    <h2 className="mb-4 text-7xl">Gaming</h2>
                </div>
            </div>
        </main>
    )
}