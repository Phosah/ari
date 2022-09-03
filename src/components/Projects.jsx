import React from "react";
import Illustrations from "./Illustrations";
import illustration1 from "../assets/illustrations-1.png";
import illustration2 from "../assets/illustrations-2.png";


export default function Projects () {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="larken-bold mb-8 text-7xl">Illustrations</h1>
            <Illustrations 
                project='PROJECT 1/4' 
                description="Rafiki - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae, orci dictum amet..." 
                img={illustration1}
            />
            <Illustrations 
                project="PROJECT 1/4" 
                description="Expressions - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vitae, orci..." 
                img={illustration2}
            />
        </div>
    )
}