import React from "react";

const menu = () => {
    return (
        <main>
            <div>
                <div className="text-brand-black-1 dark:bg-brand-black-1">
                    <header className="flex flex-col h-screen p-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="w-14" src="..." alt="empty photos" />
                                <img className="w-14" src="..." alt="empty photos" />
                            </div>
                            <div>
                                <button>
                                    <svg
                                        className="text-brand-black-1 w-16 h-16 bg-[#4466ee]"
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
                        </div>
                        <nav className="flex-1 flex items-center px-14">
                            <div className="md:ml-16 text-3xl md:text-4xl lg:text-6xl font-bold">
                                <div
                                    className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                                >
                                    <div
                                        className="nav-link-line w-4 hover:w-24 h-1 bg-brand-black-1 dark:bg-white"
                                    ></div>
                                    <div className>
                                    </div>
                                </div>
                                <div
                                    className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                                >
                                    <div className="nav-link-line w-0 h-1 bg-brand-black-1 dark:bg-white"></div>
                                    <div>About me</div>
                                </div>
                                <div
                                    className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                                >
                                    <div className="nav-link-line w-0 h-1 bg-brand-black-1 dark:bg-white"></div>
                                    <div>Contact me</div>
                                </div>
                                <div
                                    className="nav-link-box flex items-center space-x-4 mb-10 cursor-pointer"
                                >
                                    <div className="nav-link-line w-0 h-1 bg-brand-black-1 dark:bg-white"></div>
                                    <div>
                                        {/* <router-link to="/">Resume</router-link> */}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </main>
    )
}

export default menu;