import { GET_ROOMS,GET_ROOM,DELETE_ROOM } from "../actions/types";

const initialState = {
    rooms: [],
    room: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
     case GET_ROOMS:
      return {
          ...state,
          rooms:action.payload
      };
      case GET_ROOM:
        return {
          ...state,
          room: action.payload
        };
        case DELETE_ROOM:
        return {
          ...state,
          rooms:state.rooms.filter(room=>room.roomid !== action.payload)
        };

    default:
      return state;
  }
}