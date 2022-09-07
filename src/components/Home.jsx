import React from "react";
import ari from "../assets/ari.png";
import brush from "../assets/paint-brush.svg";
import happyface from "../assets/happy-face.svg";
import scroll from "../assets/scroll.png";

export default function Home () {
    return (
        <main className="max-w-7xl mx-auto px-6">
            <div className="py-20">
                <div className="text-center text-7xl">
                    <h1 className="italic">Visual Designer <span className="text-brand-gray-1 not-italic">and</span></h1>
                    <h1 className="italic">Art Director <img className="inline-block" src={brush} alt="Paint brush" /> <span className="text-brand-gray-1">Creating</span> </h1>
                    <h1 className="text-brand-gray-1">Delightful Experiences</h1>
                </div>

                <div className="flex items-center justify-center py-10"><img src={happyface} alt="happy face smiley" /></div>
            </div>
            <div className="flex items-center justify-between space-x-4 py-20">
                <div className="w-3/5 flex items-center space-x-4">
                    <div><img className="w-52" src={ari} alt="Ari photo" /></div>
                    <div className="text-brand-gray-2 uppercase font-light">
                        <p className="mb-6 text-xl">HI, MY NAME IS ARI. I'M A VISUAL DESIGNER / ILLUSTRATOR, EXPERIENCES SIMPLE AND DELIGHTFUL FOR AMBITIOUS TEAMS ACROSS THE GLOBE.</p>
                        <div className="flex items-center space-x-4 text-xs">
                            <p>Twitter</p>
                            <p>LinkedIn</p>
                            <p>Behance</p>
                        </div>
                    </div>
                </div>
                <div><img src={scroll} alt="Scroll down" /></div>
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