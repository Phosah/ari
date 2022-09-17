import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import NavMenu from './Menu';

export default function Navbar() {
    const [navToggled, setNavToggled] = useState(false);
    return (
        <main>
            <div className={navToggled ? 'block': 'hidden'}>
                <NavMenu setNavToggled={setNavToggled} />
            </div>
            <nav className="flex items-center justify-between w-full max-w-7xl mx-auto py-10">
                <Link to="/"><div><img src={logo} alt="Menu logo" /></div></Link>
                <div 
                    onClick={() => {
                        setNavToggled(!navToggled)
                        console.log(navToggled)
                    }
                    } 
                    className="cursor-pointer">
                        <img src={menu} alt="Menu logo" />
                </div>
            </nav>
        </main>
    );
}