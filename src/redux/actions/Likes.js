import api from "../../utils/api";

// MESSAGE CONSTANTS
export const removeLike = "LIKES/REMOVE_LIKES";
export const sendlike = "LIKES/SEND_LIKES";
export const SEND_LIKES_FAILURE = "LIKES/SEND_LIKES_FAILURE";

export const REMOVE_LIKES_FAILURE = "LIKES/ REMOVE_LIKES_FAILURE";
/*
 MESSAGE ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

export const REMOVE_LIKES = () => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_LIKES });
    const payload = await api.removeLike();
    console.log({ payload });
    dispatch({ type: REMOVE_LIKES, payload });
  } catch (err) {
    dispatch({ type: REMOVE_LIKES_FAILURE, payload: err.message });
  }
};

export const SEND_LIKES = (messageid) => async (dispatch, getState) => {
  try {
    // dispatch({ type: SEND_MESSAGES });
    console.log(messageid);
    const payload = await api.like(messageid);
    console.log(api.like);

    dispatch({ type: SEND_LIKES, payload });
  } catch (err) {
    return;
    dispatch({ type: SEND_LIKES_FAILURE, payload: err.message });
  }
};
// END messeges ACTIONS

// export const updateAfterPosting = (messageData) => (dispatch) => {
//   return dispatch(postMessage(messageData)).then(() => dispatch(getMessages()));
// };
