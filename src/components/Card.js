import React from "react"
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"
import "../style.css"
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
       <section className="card">
            <img className="card--img" src={katie} alt="katie" />
                <section className="card--details">
                    <img className="card--star" src={star} alt="rating" /> 
                    <h5 className="card--rating"> 5.0 </h5>
                    <h5 className="card--rating--count"> (6) - USA </h5>
                </section>
                <h5 className="card--subtext">Life lessons with Katie Zaferes</h5>
                <section className="card--price--details">
                    <h5 className="card--price">From $136 </h5>
                    <h5 className="card--price--person"> / person</h5>
                </section>
       </section>
    )
}