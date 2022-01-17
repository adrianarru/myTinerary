import React from "react";
import rome from "../img/rome.jpg";
import sidney from "../img/sidney.jpg";
import istambul from "../img/istambul.png";
import bangkok from "../img/bangkok.png";

function CityCard(){
    return(

<div className="card" style={{width: "18rem"}}>
  <img src={rome} className="card-img-top" alt="rome"/>
  <div className="card-body">
    <h5 className="card-title">Rome</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>

  <img src={sidney} className="card-img-top" alt="sidney"/>
  <div className="card-body">
    <h5 className="card-title">Sidney</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>

  <img src={istambul} className="card-img-top" alt="istambul"/>
  <div className="card-body">
    <h5 className="card-title">Istambul</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>

  <img src={bangkok} className="card-img-top" alt="bangkok"/>
  <div className="card-body">
    <h5 className="card-title">Bangkok</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>

</div>




    )
}

export default CityCard;



