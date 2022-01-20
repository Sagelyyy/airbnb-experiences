import React from "react"
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"
import "../style.css"

export default function Card(props) {
    return (
       <section className="card">
            <img className="card--img" src={props.img} alt="katie" />
                <section className="card--details">
                    <img className="card--star" src={star} alt="rating" /> 
                    <span className="card--rating">{props.rating}</span>
                    <span className="card--rating--count">{props.votes} • </span>
                    <span className="card--rating--count"> {props.country} </span>
                </section>
                <h5 className="card--subtext">{props.text}</h5>
                <p className="card--price">From ${props.price} <span className="card--price--person"> / person</span> </p>
       </section>
    )
}

