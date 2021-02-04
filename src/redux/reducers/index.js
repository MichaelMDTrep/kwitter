import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";
import { userReducer } from "./users";
import { likesReducer } from "./likes";
export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  users: userReducer,
  likes: likesReducer,
});
