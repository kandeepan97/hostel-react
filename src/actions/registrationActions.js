import axios from "axios";
import { GET_ERRORS,GET_REGISTRATIONS, } from "./types";
import  { Redirect } from 'react-router-dom'

export const getRegistrationss =(id) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/api/registrations/${"PENDING"}`);
    dispatch({
      type:GET_REGISTRATIONS,
      payload: res.data
    });
    }; 

    export const getRegistrations =() => async dispatch => {
      const res = await axios.get(`http://localhost:8080/api/registrations/${"ACCEPTED"}`);
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

    export const approveRegistration = (id, history) => async dispatch => {
     
        const res = await axios.put(`http://localhost:8080/api/registration/accepted/${id}`);
        //history.push("/manageRegistration");
         // console.log("hostel");
    };

    export const rejectRegistration = (id, history) => async dispatch => {
     
      const res = await axios.put(`http://localhost:8080/api/registration/rejected/${id}`);
      //history.push("/manageRegistration");
       // console.log("hostel");
  };

  

    