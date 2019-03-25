import React, { Fragment, useReducer } from "react";
import registerReducer from "../../reducers/registerReducer";

const initialState = {
  isRegistering: false,
  success: false,
  error: null,
  user: {}
};

const Register = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  return (
    <Fragment>
      <form className="signUpForm">
        <input type="email" className="signUpField" placeholder="Enter email" />
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
      </form>
    </Fragment>
  );
};

export default Register;
