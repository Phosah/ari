import React, {useEffect} from "react";
import mood1 from "../assets/mood1.png";
import mood2 from "../assets/mood2.png";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import design5 from "../assets/design5.png";
import rafikiHero from "../assets/rafiki.png";
import Navbar from "./Navbar";

const Rafiki = () => {

    useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

    return (
        <main className="">
            <div className="relative h-screen">
                <img className="absolute inset-0 object-cover h-full w-full"  src={rafikiHero} alt="rafiki hero" />
                <div className="absolute w-full h-full">
                    <div className="flex flex-col h-full">
                        <Navbar />
                        <div className="flex-1 flex items-end justify-center">
                            <h1 className="flex justify-center mb-12 text-7xl">Rafiki</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="max-w-7xl mx-auto px-6 md:px-20">
                    <div className="flex items-center justify-between space-x-8 py-20">
                        <div className="flex-1">
                            <h3 className="mb-3 text-brand-gray-2">YEAR</h3>
                            <p>2020</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-3 text-brand-gray-2">TIMELINE</h3>
                            <p>1 MONTH</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-3 text-brand-gray-2">CLIENT</h3>
                            <p>PARADUPOS</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-3 text-brand-gray-2">ROLE</h3>
                            <p>ILLUSTRATOR</p>
                        </div>
                    </div>
                    <div className="flex justify-between space-x-8 py-20">
                        <h2 className="flex-1 text-6xl">About</h2>
                        <p className="flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae, orci dictum amet tincidunt potenti. Velit, varius sit in vitae sit ac. Enim semper interdum at viverra ligula. Porta morbi tellus eget orci. Libero pellentesque tellus eu elementum. Augue ut id viverra ut molestie gravida cum hendrerit ullamcorper.</p>
                    </div>
                    <div className="flex justify-between space-x-8 py-20">
                        <h2 className="flex-1 text-6xl">Key Words</h2>
                        <ul className="flex-1 pl-6 list-disc">
                            <li className="mb-3">Swimming</li>
                            <li className="mb-3">Going to the movies</li>
                            <li className="mb-3">Reading</li>
                            <li className="mb-3">Sit vitae</li>
                            <li className="mb-3">Vitae sit ac.</li> 
                            <li className="mb-3">Enim semper </li>
                        </ul>
                    </div>
                </div>
                <div className="py-20">
                    <h2 className="max-w-7xl mx-auto mb-10 px-20 text-6xl">Moodboard</h2>
                    <div className="mb-4 grid grid-cols-3 gap-x-4">
                        <div><img src={mood1} alt="Moodboard" /></div>
                        <div><img src={mood2} alt="Moodboard" /></div>
                        <div><img src={mood1} alt="Moodboard" /></div>
                    </div>
                    <div className="mb-4 grid grid-cols-3 gap-x-4">
                        <div><img src={mood1} alt="Moodboard" /></div>
                        <div><img src={mood2} alt="Moodboard" /></div>
                        <div><img src={mood1} alt="Moodboard" /></div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto my-20 py-20 px-6">
                    <h2 className="mb-10 text-center text-8xl">Final Design</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div><img src={design1} alt="Final design" /></div>
                        <div><img src={design2} alt="Final design" /></div>
                        <div><img src={design3} alt="Final design" /></div>
                        <div><img src={design4} alt="Final design" /></div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex items-center justify-between space-x-4">
                        <div>
                            <h3 className="mb-4 text-4xl">Watch Design Process</h3>
                            <p className="text-brand-gray-2 uppercase">you can take a look at how i came about the designs if you would love to get inspired</p>
                        </div>
                        <div><img src={design5} alt="Design" /></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Rafiki;