import React from "react"
import "../style.css"

export default function Card(props) {
    return (
       <section className="card">
            <img className="card--img" src={props.coverImg} alt="katie" />
                <section className="card--details">
                    <img className="card--star" src='../images/star.png' alt="rating" /> 
                    <span className="card--rating">{props.rating}</span>
                    <span className="card--rating--count">({props.reviewCount}) • </span>
                    <span className="card--rating--count"> {props.location} </span>
                </section>
                <h5 className="card--subtext">{props.title}</h5>
                <p className="card--price">From ${props.price} <span className="card--price--person"> / person</span> </p>
       </section>
    )
}

