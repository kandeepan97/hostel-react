import { GET_REGISTRATIONS} from "../actions/types";

const initialState = {
    registrations: []
};

export default function(state = initialState, action) {
  switch (action.type) {
     case GET_REGISTRATIONS:
      return {
          ...state,
          registrations:action.payload
      };

    default:
      return state;
  }
}