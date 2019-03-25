import React from "react";
import { Link } from "react-router-dom";
import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-cont">
        <h1 className="landing-main">Have Your Todos Managed</h1>
        <h3 className="landing-sub">Enter your todos and controll them</h3>
        <Link to="/register" className="register-landing">
          Get Started
        </Link>
      </div>
    </div>
  );
};
export default Landing;
