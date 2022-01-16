import React from "react";
import "../style.css"
import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="airbnb logo"/>
        </nav>
    )
}