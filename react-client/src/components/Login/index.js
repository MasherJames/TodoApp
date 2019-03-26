import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <h2 className="login-head">Sing In</h2>
        <Link to="/register" className="lack-account">
          Not a member yet? Sign Up here
        </Link>
        <form className="loginUpForm">
          <input
            type="email"
            className="loginField"
            placeholder="Enter email"
          />

          <input
            type="password"
            className="loginField"
            placeholder="Enter password"
          />
          <button type="submit" className="loginField btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
