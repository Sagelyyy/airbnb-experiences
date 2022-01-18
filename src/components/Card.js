import React from "react"
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"
import "../style.css"

export default function Card() {
    return (
       <section className="card">
            <img className="card--img" src={katie} alt="katie" />
                <section className="card--details">
                    <img className="card--star" src={star} alt="rating" /> 
                    <span className="card--rating">5.0</span>
                    <span className="card--rating--count">(6) - </span>
                    <span className="card--rating--count">USA</span>
                </section>
                <h5 className="card--subtext">Life lessons with Katie Zaferes</h5>
                <section className="card--price--details">
                    <h5 className="card--price">From $136 </h5>
                    <h5 className="card--price--person"> / person</h5>
                </section>
       </section>
    )
}