import React from "react";
import Illustrations from "./Illustrations";
import illustration1 from "../assets/illustrations-1.png";
import illustration2 from "../assets/illustrations-2.png";
import Navbar from "./Navbar";

export default function Projects () {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <h1 className="py-20 text-7xl">Illustrations</h1>
            <Illustrations 
                project='PROJECT 1/4' 
                projectTitle='Rafiki -'
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae, orci dictum amet..." 
                img={illustration1}
                titleColor="text-brand-green-1"
                page="/rafiki"
            />
            <Illustrations 
                project="PROJECT 2/4" 
                projectTitle="Expressions -"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae, orci..." 
                img={illustration2}
                titleColor="text-[#3B61FF]"
                page="/rafiki"
            />
            <Illustrations 
                project='PROJECT 3/4' 
                projectTitle='Rafiki -'
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae, orci dictum amet..." 
                img={illustration1}
                titleColor="text-[#EEA03C]"
                page="/rafiki"
            />
            <Illustrations 
                project="PROJECT 4/4" 
                projectTitle="Expressions -"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae, orci..." 
                img={illustration2}
                titleColor="text-[#3B61FF]"
                page="/rafiki"
            />
        </div>
    )
}