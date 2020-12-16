import axios from "axios";
import { GET_ERRORS,GET_ADMIN } from "./types";

export const getAdmin =(id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/api/admin/${id}`);
    dispatch({
      type:GET_ADMIN,
      payload: res.data
    });
    } catch (error) {
      history.push("/dashboard");
    }
    
  };

  export const updateAdmin = (admin, history) => async dispatch => {
    try {
      const res = await axios.put('http://localhost:8080/api/admin', admin);
      history.push("/dashboard");
        console.log("admin");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } 
  };