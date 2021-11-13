import React from "react";
import "./App.css";
const Cart = (props) => {
  console.log("me bhi chl rha hu");
  return (
    <div className="card">
      <div className="card-container">
        <img src={props.img} className="image" alt="image" />
        <p className="title">Netflix Original Series</p>
        <h2 className="heading">{props.name}</h2>
        <p>
          <strong>Description</strong> :{" "}
          <span style={{ color: "#212121" }}>{props.desc}</span>
        </p>
        <p>
          <strong>IMDB Ratings :</strong>{" "}
          <span style={{ color: "#316B83", fontWeight: "bold" }}>
            {props.imdb}
          </span>
        </p>
        <button className="btn">Watch Now</button>
      </div>
    </div>
  );
};

export default Cart;
