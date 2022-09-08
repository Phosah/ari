import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import Navbar from "./Navbar";
function About () {
    return (
        <main className="max-w-7xl mx-auto px-6">
            <Navbar />
            <div className="py-20 text-center">
                <h1 className="mb-4 text-7xl">About Me</h1>
                <h3 className="mb-12">BRIDGING THE GAP BETWEEN PEOPLE AND PRODUCTS</h3>
            </div>
            <div className="flex items-center justify-between space-x-4 my-20">
                <div><img src={person1} alt="Person" /></div>
                <div><img src={person2} alt="Person" /></div>
                <div><img src={person3} alt="Person" /></div>
                <div><img src={person4} alt="Person" /></div>
            </div>
            <div>

            <div className="flex space-x-8 px-20 py-20">
                <h2 className="flex-1 text-6xl">Who is Ari</h2>
                <div  className="flex-1">
                    <p className="mb-6">I’m a Product Designer, Writer, and Public Speaker passionate about entrepreneurial thinking, being an infinite player, behavioural psychology, and bridging the gap between business and design.</p>
                    <p className="mb-6">I currently lead Product & Design at Paystack (Stripe subsidiary) where I work with the teams to help build the best payment experiences for high-growth businesses transacting across Africa and the rest of the world.</p>
                    <p className="mb-6">I specialize in making an impact through Innovation, Design Strategy, and Product-Design Ops. I've been an educator for the past three years, having taught at Design Fund for Women, Àșà Coterie and currently teaching at Klas.</p>
                    <p className="mb-6">Before Product & Experience Design, I dabbled in Front-end engineering for two years, then afterwards Consulting, and Content Strategy until I eventually got here. And now, over the last six years, I've essentially leveraged these to build intuitive products, services and experiences used by millions of people; while having a lot of fun in the process.</p>              ‍
                    <p className="mb-6">Overall, I love adventure, learning new perspectives from diverse people, and enriching my mind with different views & experiences. So when I’m not creating some on my laptop, I'm also a photographer; slightly obsessed with documenting experiences and can usually be found outdoors exploring something new.</p>
                </div>
            </div>
            <div className="flex justify-between space-x-8 px-20 py-20 my-20">
                <h2 className="flex-1 text-7xl">Hobbies</h2>
                <ul className="flex-1 pl-6 list-disc">
                    <li>Swimming</li>
                    <li>Going to the movies</li>
                    <li>Reading</li>
                    <li>Sit vitae</li>
                    <li>Vitae sit ac.</li> 
                    <li>Enim semper </li>
                </ul>
            </div>
            <div className="flex justify-between space-x-8 px-20 py-20 mt-20">
                <h2 className="flex-1 text-7xl">Experience</h2>
                <div className="flex-1">
                    <div className="mb-10">
                        <h4 className="mb-2">Paystack, Dec 2020 — Present</h4>
                        <h5 className="text-brand-gray-2">Senior Product Designer | EMEA</h5>
                    </div>
                    <div className="mb-10">
                        <h4 className="mb-2">Kingdom, Jan 2022 — May 2022</h4>
                        <h5 className="text-brand-gray-2">CPO & Co-founder | San Francisco, USA</h5>
                    </div>
                    
                    <div className="mb-10">
                        <h4 className="mb-2">Base Capital, Dec 2020 — Apr 2021</h4>
                        <h5 className="text-brand-gray-2">UX Design Lead | New York, USA</h5>
                    </div>

                    <div className="mb-10">
                        <h4 className="mb-2">Pull Up, Nov 2020 — Mar 2021</h4>
                        <h5 className="text-brand-gray-2">Lead Product Designer | Lagos, Nigeria</h5>
                    </div>

                    <div className="mb-10">
                        <h4 className="mb-2">Josplay, Apr 2020 — Jan 2021</h4>
                        <h5 className="text-brand-gray-2">Product Designer | Remote</h5>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}

export default About;