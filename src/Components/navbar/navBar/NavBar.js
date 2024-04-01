import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

function navBar(){
    return(
        <>
        <div className="main">
            <div className="left">
               <a href="/"><img src="logo-removebg-preview.png" alt="" /></a>
            </div>
            <div className="right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/events">Events</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        </>
    );
}

export default navBar;