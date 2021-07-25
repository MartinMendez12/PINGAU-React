import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return (
        <header>
            <div className="logo">Logo</div>
            <nav>
            <ul className="nav_links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
            </nav>
        </header>
        
    )
}

export default NavBar