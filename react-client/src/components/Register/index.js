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
        <input type="email" className="signUpField" placeholder="enter email" />
        <input
          type="text"
          className="signUpField"
          placeholder="enter username"
        />
        <input
          type="password"
          className="signUpField"
          placeholder="enter password"
        />
      </form>
    </Fragment>
  );
};

export default Register;
