import { GET_HOSTELS,GET_HOSTEL,DELETE_HOSTEL} from "../actions/types";

const initialState = {
    hostels: [],
    hostel: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
     case GET_HOSTELS:
      return {
          ...state,
          hostels:action.payload
      };
      case GET_HOSTEL:
        return {
          ...state,
          hostel: action.payload
        };case DELETE_HOSTEL:
        return {
          ...state,
          hostels:state.hostels.filter(hostel=>hostel.hostelid !== action.payload)
        };

    default:
      return state;
  }
}