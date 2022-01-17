import React from "react";
import london from "../img/london.jpeg";
import paris from "../img/paris.jpg";
import newyork from "../img/newyork.jpg";

function Carousel(){
    return(

<div id="carouselExampleFade" className="carousel slide carousel-fade carousel" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={london} className="d-block w-100 carousel" alt="london"/>
    </div>
    <div className="carousel-item">
      <img src={paris} className="d-block w-100 carousel" alt="paris"/>
    </div>
    <div className="carousel-item">
      <img src={newyork} className="d-block w-100 carousel" alt="newyork"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    )
}

export default Carousel;