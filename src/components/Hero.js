import React from "react";
import "../style.css"
import photoGrid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--photogrid" alt="collage" src={photoGrid} />
            <h1 className="hero--title">Online Experiences</h1>
            <h4 className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</h4>
        </section>
    )
}