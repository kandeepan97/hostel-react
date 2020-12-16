import { SET_CURRENT_STUDENT,LOGOUT } from "../actions/types";

const initialState = {
  validToken: false,
  user: {}
};

const booleanActionPayload = payload => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_STUDENT:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        user: action.payload
      };

      case LOGOUT:
        localStorage.removeItem('logged');
        localStorage.removeItem('jwtToken');
        return {
          ...state,
        };

    default:
      return state;
  }
}