import axios from "axios";
import { GET_ERRORS,GET_HOSTELS,GET_HOSTEL,DELETE_HOSTEL } from "./types";

export const createHostel = (hostel, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:8080/api/hostel', hostel);
    history.push("/wardenDashboard");
      console.log("hostel");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  } 
};

export const getHostels =(id,history) => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:8080/api/hostels/{email}`);
  dispatch({
    type:GET_HOSTELS,
    payload: res.data
  });
}
catch(error){
  //history.push('/dashboard');
}
  }; 

  export const getHostel =(id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/api/hostel/${id}`);
    dispatch({
      type:GET_HOSTEL,
      payload: res.data
    });
    } catch (error) {
      //history.push("/wardenDashboard");
    }
    
  };

  export const updateHostel = (hostel, history) => async dispatch => {
    try {
      const res = await axios.put('http://localhost:8080/api/hostel', hostel);
      history.push("/wardenDashboard");
        console.log("hostel");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } 
  };
  export const deleteHostel =(id,history)  => async dispatch => {

    if (
      window.confirm(
        "Are you sure? This will delete the hostel and all the data related to it"
      )
    ) 
  
    await axios.delete(`http://localhost:8080/api/hostel/${id}`);
    dispatch({
    
      type:DELETE_HOSTEL,
      payload: id
    });
    
  }
  
  