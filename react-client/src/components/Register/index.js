import React, { useReducer, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import registerReducer from "../../reducers/registerReducer";
import { AppContext } from "../../contex";
import "./register.scss";

const initialState = {
  isRegistering: false,
  success: false,
  error: {},
  user: {}
};

const Register = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const { context } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postUser = user => {
    dispatch({ type: "REGISTER_REQUEST", user });
    axios
      .post("http://127.0.0.1:5000/api/v1/users/register", user)
      .then(res =>
        dispatch({
          type: "REGISTER_SUCCESS",
          user: res.data.newUser
        })
      )
      .catch(err =>
        dispatch({ type: "REGISTER_FAILURE", error: err.response.data })
      );
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      username,
      email,
      password
    };

    postUser(newUser);
    context.setCurrentUser(newUser);
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="register">
        <h2 className="register-head">Sign Up</h2>
        <Link to="/login" className="have-account">
          Already have an account ?
        </Link>
        <form onSubmit={handleSubmit} className="signUpForm">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="signUpField"
            placeholder="Enter email"
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            className="signUpField"
            placeholder="Enter username"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
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
