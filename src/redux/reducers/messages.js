// TODO: implement
import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  SEND_MESSAGES,
  SEND_MESSAGES_SUCCESS,
  SEND_MESSAGES_FAILURE,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  messageList: ["one"],
  loading: false,
  error: "",
};

export const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...INITIAL_STATE,
        messageList: action.payload.messages,
        loading: false,
      };
    case GET_MESSAGES_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case SEND_MESSAGES:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case SEND_MESSAGES_SUCCESS:
      return {
        state,
      };
    case SEND_MESSAGES_FAILURE:
      return { state };
    default:
      return state;
  }
};
