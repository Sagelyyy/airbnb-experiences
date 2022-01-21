import React from "react";
import "../style.css"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--photogrid" alt="collage" src='../images/photo-grid.png' />
            <h1 className="hero--title">Online Experiences</h1>
            <h4 className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</h4>
        </section>
    )
}