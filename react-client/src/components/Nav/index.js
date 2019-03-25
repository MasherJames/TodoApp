import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="header-nav">
      <div>
        <Link to="/" className="home-link">
          Todo
        </Link>
      </div>
      <div className="auth-links">
        <Link to="/register" className="auth-link">
          Register
        </Link>
        <Link to="/login" className="auth-link auth-login">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Nav;
