import React from "react";
import "../style.css";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--img" src={props.item.coverImg} alt="katie" />
      <section className="card--details">
        <img className="card--star" src="../images/star.png" alt="rating" />
        <span className="card--rating">{props.item.stats.rating}</span>
        <span className="card--rating--count">
          ({props.item.stats.reviewCount}) •{" "}
        </span>
        <span className="card--rating--count"> {props.item.location} </span>
      </section>
      <h5 className="card--subtext">{props.item.title}</h5>
      <p className="card--price">
        From ${props.item.price}{" "}
        <span className="card--price--person"> / person</span>{" "}
      </p>
    </section>
  );
}
