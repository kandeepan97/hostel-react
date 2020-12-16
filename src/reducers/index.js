import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import wardenReducer from "./wardenReducer";
import roomReducer from "./roomReducer";
import studentReducer from "./studentReducer";
import hostelReducer from "./hostelReducer";
import registrationReducer from "./registrationReducer";
import securityReducers from "./securityReducers";


export default combineReducers({

  errors: errorReducer,
  warden: wardenReducer,
  room: roomReducer,
  student: studentReducer,
  hostel:hostelReducer,
  registration:registrationReducer,
  security:securityReducers

});