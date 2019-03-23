import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actionTypes";

const registerReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isRegistering: true };
    case REGISTER_SUCCESS:
      return { ...state, isRegistering: false, success: action.payload };
    case REGISTER_FAILURE:
      return { ...state, isRegistering: false, error: action.payload };

    default:
      return state;
  }
};

export default registerReducer;
