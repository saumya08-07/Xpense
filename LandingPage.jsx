import React from "react";
import './LandingPage.css';


function LandingPage() {
  return (
    <div className="landing-container">
      <div>
        <h1 className="header exp">Xpense</h1>
        <h3 className="description">The best way to track your expenses.</h3>
        <button className="start-btn"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  );
}

export default LandingPage;
