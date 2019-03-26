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
      return { ...state, isRegistering: false, success: true };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default registerReducer;
