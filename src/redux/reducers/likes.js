import {
  SEND_LIKES,
  SEND_LIKES_SUCCESS,
  SEND_LIKES_FAILURE,
  REMOVE_LIKES,
  REMOVE_LIKES_FAILURE,
  REMOVE_LIKES_SUCCESS,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  error: "",
};

export const likesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_LIKES:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case SEND_LIKES_SUCCESS:
      return {
        ...INITIAL_STATE,
        // isAuthenticated: token,
        loading: false,
      };
    case SEND_LIKES_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case REMOVE_LIKES:
      return {
        ...INITIAL_STATE,
        // isAuthenticated: token,
        loading: true,
      };
    case REMOVE_LIKES_SUCCESS:
      return {
        ...INITIAL_STATE,
        // error: action.payload,
        loading: false,
      };
    case REMOVE_LIKES_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
