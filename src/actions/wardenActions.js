import axios from "axios";
import { GET_ERRORS,GET_WARDEN,GET_WARDENS,DELETE_WARDEN } from "./types";
 

export const createWarden = (warden, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:8080/api/warden', warden);
    history.push("/adminDashboard");
      console.log("warden");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  } 
};

export const getWardens =() => async dispatch => {
const res = await axios.get('http://localhost:8080/api/wardens');
dispatch({
  type:GET_WARDENS,
  payload: res.data
});
};

export const getWarden =(id,history) =>async dispatch=> {
  try {
    const res = await axios.get(`http://localhost:8080/api/warden/${id}`);
  dispatch({
    type:GET_WARDEN,
    payload: res.data
  });
  } catch (error) {
    history.push("/wardenDashboard");
  }
  
};


export const getWardenByEmail =() =>async dispatch=> {
  
    let email = localStorage.getItem("email");
    const res = await axios.get(`http://localhost:8080/api/warden/email/${email}`);
  dispatch({
    type:GET_WARDEN,
    payload: res.data
  })
};
export const updateWarden = (warden, history) => async dispatch => {
  try {
    const res = await axios.put('http://localhost:8080/api/warden', warden);
    history.push("/adminDashboard");
      console.log("warden");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  } 
};

export const deleteWarden =(id,history)  => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the warden and all the data related to it"
    )
  ) 
  await axios.delete(`http://localhost:8080/api/warden/${id}`);
  dispatch({
  
    type:DELETE_WARDEN,
    payload: id
  });
  
};
