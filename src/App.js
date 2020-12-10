import React from "react";

import ClimaApp from "./component/ClimaApp";
import NewsApp from "./component/NewsApp";
import Logo from "./imagenes/logo.png";

import "./css/app.css";

export default function App() {
  return (
    <div className="container" id="home">
      <div className="row mt-2">
        <div className="col-12 col-md-8 offset-md-2 text-center">
          <img className="logo-img" src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-4">
          <ClimaApp />
        </div>
      </div>
      <NewsApp />
      <div className="row d-md-none">
        <div className="col-6 offset-3  text-center badge_absolute">
          <h4>
            <a href="/" className="badge badge-pill badge-primary pl-3 pr-3">
              Tap to update
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
