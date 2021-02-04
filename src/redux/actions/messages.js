import api from "../../utils/api";

// MESSAGE CONSTANTS
export const GET_MESSAGES = "MESSAGES/GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "MESSAGES/GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILURE = "MESSAGES/GET_MESSAGES_FAILURE";
export const SEND_MESSAGES = "MESSAGES/SEND_MESSAGES";
export const SEND_MESSAGES_SUCCESS = "MESSAGES/SEND_MESSAGES_SUCCESS";
export const SEND_MESSAGES_FAILURE = "MESSAGES/SEND_MESSAGES_FAILURE";

/*
 MESSAGE ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

export const messagesIn = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MESSAGES });
    const payload = await api.messagesIn();
    console.log({ payload });
    dispatch({ type: GET_MESSAGES_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: GET_MESSAGES_FAILURE, payload: err.message });
  }
};

export const messagesOut = (messageText) => async (dispatch, getState) => {
  try {
    // dispatch({ type: SEND_MESSAGES });
    console.log(messageText);
    const payload = await api.messagesOut(messageText);
    console.log({ payload });
    // dispatch({ type: SEND_MESSAGES_SUCCESS, payload });
  } catch (err) {
    return;
    // dispatch({ type: SEND_MESSAGES_FAILURE, payload: err.message });
  }
};
// END messeges ACTIONS

export const updateAfterPosting = (messageData) => (dispatch) => {
  return dispatch(postMessage(messageData)).then(() =>
    dispatch(GET_MESSAGES())
  );
};
