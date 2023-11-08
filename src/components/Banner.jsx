import React from "react";
import horrorImage from "../assets/undraw_horror.svg";

function Banner() {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <figure className="banner__img--wrapper">
            <img src={horrorImage} className="banner__img" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Banner;
