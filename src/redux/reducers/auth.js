import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  NEW_USER,
  NEW_USER_SUCCESS,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: false,
  username: "",
  loading: false,
  error: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case NEW_USER: // new file ?
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case NEW_USER_SUCCESS:
      // const { newusername, displayName, password } = action.payload; // test
      return {
        ...INITIAL_STATE,
        loading: false,
      };
    default:
      return state;
  }
};
