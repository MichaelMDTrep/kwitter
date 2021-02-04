// TODO: implement
// switch statements to handle new users
import {
  GETUSERINFO,
  GETUSERINFO_SUCCESS,
  GETUSERINFO_FAILURE,
} from "../actions";


//import { NEW_USER } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: false,
  username: "",
  loading: false,
  error: "",
  user:{},
};

export const userReducer= (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case GETUSERINFO:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GETUSERINFO_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload,
        loading: false,
      };
    case GETUSERINFO_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

//export const newUserReducer = (state = INITIAL_STATE, action) => {
 // switch (
  //  action.type
    // case LOGIN:
    //   return {
    //     ...INITIAL_STATE,
    //     loading: true,
    //   };
    // case LOGIN_SUCCESS:
    //   const { username, token } = action.payload;
    //   return {
    //     ...INITIAL_STATE,
    //     isAuthenticated: token,
    //     username,
    //     loading: false,
    //   };
    // case LOGIN_FAILURE:
    //   return {
    //     ...INITIAL_STATE,
    //     error: action.payload,
    //     loading: false,
    //   };
    // case LOGOUT:
    //   return {
    //     ...INITIAL_STATE,
    //   };
    // default:
    //   return state;
 // ) {
//  }
//};
