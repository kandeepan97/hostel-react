import axios from "axios";
import { GET_ERRORS,GET_ROOMS,GET_ROOM,DELETE_ROOM ,GET_HOSTELID} from "./types";

export const createRoom = (room, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:8080/api/room', room);
    history.push("/wardenDashboard");
      console.log("room");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  } 
};

export const getRooms =() => async dispatch => {
  const res = await axios.get('http://localhost:8080/api/rooms');
  dispatch({
    type:GET_ROOMS,
    payload: res.data
  });
  }; 

  export const getRoom =(id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/api/room/${id}`);
    dispatch({
      type:GET_ROOM,
      payload: res.data
    });
    } catch (error) {
      history.push("/wardenDashboard");
    }
    
  };

  export const updateRoom = (room, history) => async dispatch => {
    try {
      const res = await axios.put('http://localhost:8080/api/room', room);
      history.push("/wardenDashboard");
        console.log("room");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } 
  };

  export const deleteRoom =(id,history)  => async dispatch => {

    if (
      window.confirm(
        "Are you sure? This will delete the room and all the data related to it"
      )
    ) 
  
    await axios.delete(`http://localhost:8080/api/room/${id}`);
    dispatch({
    
      type:DELETE_ROOM,
      payload: id
    });
  }

  
  export const getHostelId =(wardenId, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/api/hostelid/${wardenId}`);
    dispatch({
      type:GET_HOSTELID,
      payload: res.data
    });
    } catch (error) {
      history.push("/wardenDashboard");
    }
    
  };
  
