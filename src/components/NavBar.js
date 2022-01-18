import React from "react";
import logo from "../img/myLogo.png";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light cityNavBar">
  <div className="container-fluid">
    <img src={logo} alt="logo" className="logo"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link active cityNavBar" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cityNavBar" href="../pages/Cities.js">City cards</a>
        </li>
        <li className="nav-item btn-user">
          <a className="nav-link cityNavBar btn-user" href="../pages/User.js">User</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;