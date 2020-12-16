import { GET_WARDENS,GET_WARDEN,DELETE_WARDEN } from "../actions/types";

const initialState = {
    wardens: [],
    warden: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
     case GET_WARDENS:
      return {
          ...state,
          wardens: action.payload
      };
      case GET_WARDEN:
        return {
          ...state,
          warden: action.payload
        };
        case DELETE_WARDEN:
        return {
          ...state,
          wardens:state.wardens.filter(warden=>warden.wardenid !== action.payload)
        };

    default:
      return state;
  }
}