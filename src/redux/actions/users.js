import api from "../../utils/api";

// AUTH CONSTANTS
export const GETUSERINFO = "GETUSERINFO";
export const GETUSERINFO_SUCCESS = "GETUSERINFO_SUCCESS";
export const GETUSERINFO_FAILURE = "GETUSERINFO_FAILURE";
export const UPDATE = "UPDATE";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAIL = "UPDATE_FAIL";
export const getUserInfoAction = (username) => async (dispatch, getState) => {
  try {
    // let username = getState().auth.username;
    dispatch({ type: GETUSERINFO });

    let payload = await api.getUserInfo(username);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log("here:" + JSON.stringify(payload));
    dispatch({ type: GETUSERINFO_SUCCESS, payload });
    return JSON.stringify(payload);
  } catch (err) {
    dispatch({
      type: GETUSERINFO_FAILURE,
      payload: err.message,
    });
  }
};

export const uploadPhoto = (photo) => async (dispatch, getState) => {
  try {
    let username = getState().auth.username;
    console.log(photo);
    const payload = await api.setUserPicture(photo, username);
    console.log("payload" + payload);
  } catch (err) {
    return err;
  }
};
export const getPhoto = (username) => async (dispatch, getState) => {
  try {
    console.log("username:" + username);
    const payload = await api.getUserPicture(username);
    const data = JSON.stringify(payload);

    console.log("payload" + data);
  } catch (err) {
    return err;
  }
};

export const updateProfile = ({ password, about, displayName }) => async (
  dispatch,
  getState
) => {
  try {
    // we need to only submit completed fields
    console.log("outgoingData:" + password);
    console.log("outgoingData:" + about);
    console.log("outgoingData:" + displayName);
    const username = getState().auth.username;
    const payload = await api.updateProfile({
      password,
      about,
      displayName,
      username,
    });
    console.log("payload" + payload);
    // update state with an action
  } catch (err) {
    dispatch({
      type: GETUSERINFO_FAILURE,
      payload: err.message,
    });
    return err;
  }
};

export const deleteProfile = ({ username }) => async (dispatch, getState) => {
  try {
    console.log("ur dead" + username);
    const payload = await api.deleteProfile(username);
    console.log(payload);
  } catch (err) {
    return err;
  }
};

//saftey code!!
//   import api from "../../utils/api";

// // AUTH CONSTANTS
// export const GETUSERINFO = "GETUSERINFO";
// export const GETUSERINFO_SUCCESS = "GETUSERINFO_SUCCESS";
// export const GETUSERINFO_FAILURE = "GETUSERINFO_FAILURE";

// export const getUserInfoAction = () => async (dispatch, getState) => {
//     try {
//        //let username = getState().auth.username
//       dispatch({ type: GETUSERINFO });
//       const payload = await api.getUserInfo('mattymomo93');
//       // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
//       console.log({ payload });
//       dispatch({ type: GETUSERINFO_SUCCESS, payload });
//       return payload
//     } catch (err) {
//       dispatch({
//         type: GETUSERINFO_FAILURE,
//         payload: err.message,
//       });
//     }
//   };
