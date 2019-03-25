import React, { Fragment, useReducer } from "react";
import { Link } from "react-router-dom";
import registerReducer from "../../reducers/registerReducer";
import "./register.scss";

const initialState = {
  isRegistering: false,
  success: false,
  error: null,
  user: {}
};

const Register = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  return (
    <div className="container">
      <div className="register">
        <h2 className="register-head">Sign Up</h2>
        <Link to="/login" className="have-account">
          Already have an account ?
        </Link>
        <form className="signUpForm">
          <input
            type="email"
            className="signUpField"
            placeholder="Enter email"
          />
          <input
            type="text"
            className="signUpField"
            placeholder="Enter username"
          />
          <input
            type="password"
            className="signUpField"
            placeholder="Enter password"
          />
          <button type="submit" className="signUpField btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
