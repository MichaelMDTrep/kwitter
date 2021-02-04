import api from "../../utils/api";

// Like CONSTANTS
export const SEND_LIKES = "ACTIONS/SEND_LIKES";
export const SEND_LIKES_SUCCESS = "ACTIONS/SEND_LIKES_SUCCESS";
export const SEND_LIKES_FAILURE = "ACTIONS/SEND_LIKES_FAILURE";
export const REMOVE_LIKES = "REMOVE_LIKES";
export const REMOVE_LIKES_FAILURE = "REMOVE_LIKES_FAILURE";
export const REMOVE_LIKES_SUCCESS = "REMOVE_LIKES_SUCCESS";

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const sendlike = (messageid) => async (dispatch, getState) => {
  try {
    console.log("sent data: " + messageid);
    const sendingVar = {
      messageId: messageid,
    };
    dispatch({ type: SEND_LIKES });
    const payload = await api.like(sendingVar);
    console.log(payload);
    dispatch({ type: SEND_LIKES_SUCCESS, payload });
  } catch (err) {
    return;
  }
};

export const removeLike = (likeId) => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_LIKES });
    console.log(likeId);
    const payload = await api.removeLike(likeId);
    console.log(payload);
    dispatch({ type: REMOVE_LIKES_SUCCESS, payload });
  } catch (err) {
    return;
  }
};
