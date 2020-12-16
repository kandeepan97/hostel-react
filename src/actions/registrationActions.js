import axios from "axios";
import { GET_ERRORS,GET_REGISTRATIONS, } from "./types";

export const getRegistrations =() => async dispatch => {
    const res = await axios.get('http://localhost:8080/api/registrations');
    dispatch({
      type:GET_REGISTRATIONS,
      payload: res.data
    });
    }; 

    export const registerRoom = (registration, history) => async dispatch => {
      try {
        const res = await axios.post('http://localhost:8080/api/registration', registration);
        history.push("/studentDashboard");
         // console.log("hostel");
      } catch (err) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      } 
    };
  