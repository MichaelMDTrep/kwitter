import api from "../../utils/api";

// AUTH CONSTANTS
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";
export const NEW_USER = "AUTH/NEW_USER";
export const NEW_USER_SUCCESS = "NEW_USER_SUCCESS";
export const GET_LIKES = "GET_LIKES";
/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

//
export const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log({ payload });
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};
export const newUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: NEW_USER });
    const payload = await api.createUser(credentials);
    console.log("payload: " + payload); // doesn't do anything

    dispatch({ type: NEW_USER_SUCCESS, payload });
    // alert("you made ur account");
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.message });
  }
};
export const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
  }
};
// END AUTH ACTIONS
