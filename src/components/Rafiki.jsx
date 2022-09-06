import React from "react";
import mood1 from "../assets/mood1.png";
import mood2 from "../assets/mood2.png";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";

const Rafiki = () => {
    return (
        <main className="max-w-7xl mx-auto px-6">
            <h1 className="mb-12 text-7xl">Rafiki</h1>
            <div className="flex items-center justify-between space-x-8 py-20">
                <div className="flex-1">
                    <h3 className="mb-2">YEAR</h3>
                    <p>2020</p>
                </div>
                <div className="flex-1">
                    <h3 className="mb-2">TIMELINE</h3>
                    <p>1 MONTH</p>
                </div>
                <div className="flex-1">
                    <h3 className="mb-2">CLIENT</h3>
                    <p>PARADUPOS</p>
                </div>
                <div className="flex-1">
                    <h3 className="mb-2">ROLE</h3>
                    <p>ILLUSTRATOR</p>
                </div>
            </div>
            <div className="flex justify-between space-x-8 py-20">
                <h2 className="flex-1">About</h2>
                <p className="flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae, orci dictum amet tincidunt potenti. Velit, varius sit in vitae sit ac. Enim semper interdum at viverra ligula. Porta morbi tellus eget orci. Libero pellentesque tellus eu elementum. Augue ut id viverra ut molestie gravida cum hendrerit ullamcorper.</p>
            </div>
            <div className="flex justify-between space-x-8 py-20">
                <h2>Hobbies</h2>
                <ul>
                    <li>Swimming</li>
                    <li>Going to the movies</li>
                    <li>Reading</li>
                    <li>Sit vitae</li>
                    <li>Vitae sit ac.</li> 
                    <li>Enim semper </li>
                </ul>
            </div>
            <div className="py-20">
                <h2 className="mb-6">Moodboard</h2>
                <div className="mb-4 grid grid-cols-3 gap-x-4">
                    <div><img src={mood1} alt="Moodboard" /></div>
                    <div><img src={mood2} alt="Moodboard" /></div>
                    <div><img src={mood1} alt="Moodboard" /></div>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                    <div><img src={mood2} alt="Moodboard" /></div>
                    <div><img src={mood1} alt="Moodboard" /></div>
                </div>
            </div>
            <div className="py-20">
                <h2 className="mb-6 text-7xl">Final Design</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div><img src={design1} alt="Final design" /></div>
                    <div><img src={design2} alt="Final design" /></div>
                    <div><img src={design3} alt="Final design" /></div>
                    <div><img src={design4} alt="Final design" /></div>
                </div>
            </div>
        </main>
    )
}

export default Rafiki;