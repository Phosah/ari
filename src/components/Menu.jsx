import React, {useState} from "react";
import linkedin from '../assets/linkedin.svg';
import behance from '../assets/behance.svg';
import dribbble from '../assets/dribbble.svg';
import twitter from '../assets/twitter.svg';


const menu = ({setNavToggled}) => {
    return (
        <main className="">
            <div className="bg-brand-black-1">
                <main className="flex flex-col h-screen p-2">
                    <div className="flex items-center justify-end p-8">
                        <button onClick={() => { 
                                setNavToggled(false);
                                console.log('clicked');
                                console.log(setNavToggled)
                            }
                            }>
                            <svg
                                className="p-3 w-12 h-12 rounded-full bg-[#191919]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex-1 flex flex-col justify-between px-20">
                        <div className="text-3xl md:text-4xl lg:text-6xl font-bold">
                            <div
                                className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                            >
                                <div className="nav-link-line w-0 h-1 bg-brand-black-1"></div>
                                <div>NFT</div>
                            </div>
                            <div
                                className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                            >
                                <div className="nav-link-line w-0 h-1 bg-brand-black-1"></div>
                                <div>Graphics</div>
                            </div>
                            <div
                                className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                            >
                                <div className="nav-link-line w-0 h-1 bg-brand-black-1"></div>
                                <div>Illustrations</div>
                            </div>
                            <div
                                className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                            >
                                <div className="nav-link-line w-0 h-1 bg-brand-black-1"></div>
                                <div>Gaming</div>
                            </div>
                            <div
                                className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                            >
                                <div className="nav-link-line w-0 h-1 bg-brand-black-1"></div>
                                <div>About me</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-16 py-16">
                            <a href=""><img src={linkedin} alt="Linkedin" /></a>
                            <a href=""><img src={behance} alt="Behance" /></a>
                            <a href=""><img src={dribbble} alt="Dribbble" /></a>
                            <a href=""><img src={twitter} alt="Twitter" /></a>
                        </div>
                    </nav>
                </main>
            </div>
        </main>
    )
}

export default menu;