import React from "react";
import ari from "../assets/ari.png";
import brush from "../assets/paint-brush.svg";
import happyface from "../assets/happy-face.svg";

export default function Home () {
    return (
        <main className="max-w-7xl mx-auto px-6">
            <div className="py-20">
                <h1 className="text-7xl italic">Visual Designer 
                    <span className="text-brand-gray-1 not-italic"> and</span> Art Director 
                    <span><img className="inline-block" src={brush} alt="Paint brush" /></span> 
                    <span className="text-brand-gray-1 not-italic">Creating Delightful Experiences</span>
                </h1>
                <div className="flex items-center justify-center py-10"><img src={happyface} alt="happy face smiley" /></div>
            </div>
            <div className="flex items-center space-x-4 py-20">
                <div><img src={ari} alt="Ari photo" /></div>
                <p>HI, MY NAME IS ARI. I'M A VISUAL DESIGNER / ILLUSTRATOR, EXPERIENCES SIMPLE AND DELIGHTFUL FOR AMBITIOUS TEAMS ACROSS THE GLOBE.</p>
            </div>
            <div className="max-w-5xl mx-auto py-20">
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